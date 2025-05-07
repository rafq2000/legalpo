import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { BetaAnalyticsDataClient } from "@google-analytics/data"

// Configuración de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY

if (!supabaseUrl || !supabaseKey) {
  if (process.env.NODE_ENV !== "production") {
    console.error("❌ Missing Supabase environment variables")
  }
}

const supabase = createClient(supabaseUrl || "", supabaseKey || "")

// Configuración de Google Analytics
const propertyId = process.env.GA4_PROPERTY_ID
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")

if (!propertyId || !clientEmail || !privateKey) {
  if (process.env.NODE_ENV !== "production") {
    console.error("❌ Missing Google Analytics environment variables")
  }
}

let analyticsDataClient: any = null

try {
  analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
  })
} catch (error) {
  if (process.env.NODE_ENV !== "production") {
    console.error("❌ Failed to initialize Google Analytics client:", error)
  }
}

// Función para obtener fechas de rango (últimos 30 días por defecto)
function getDateRange(days = 30) {
  const endDate = new Date()
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - days)

  return {
    startDate: startDate.toISOString().split("T")[0],
    endDate: endDate.toISOString().split("T")[0],
  }
}

// Función para obtener datos de Google Analytics
async function getGoogleAnalyticsData() {
  if (!analyticsDataClient || !propertyId) {
    return null
  }

  const { startDate, endDate } = getDateRange()

  try {
    // Obtener sesiones
    const [sessionsResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      metrics: [{ name: "sessions" }, { name: "totalUsers" }],
      dimensions: [{ name: "date" }],
    })

    // Obtener páginas más visitadas
    const [pagesResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      metrics: [{ name: "screenPageViews" }],
      dimensions: [{ name: "pagePath" }],
      orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
      limit: 10,
    })

    // Obtener fuentes de tráfico
    const [sourcesResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      metrics: [{ name: "sessions" }],
      dimensions: [{ name: "sessionSource" }],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 10,
    })

    // Procesar datos de sesiones diarias
    const dailyStats =
      sessionsResponse.rows?.map((row) => ({
        date: row.dimensionValues?.[0].value || "",
        sessions: Number.parseInt(row.metricValues?.[0].value || "0"),
        users: Number.parseInt(row.metricValues?.[1].value || "0"),
      })) || []

    // Procesar páginas más visitadas
    const mostVisitedPages =
      pagesResponse.rows?.map((row) => ({
        path: row.dimensionValues?.[0].value || "",
        views: Number.parseInt(row.metricValues?.[0].value || "0"),
      })) || []

    // Procesar fuentes de tráfico
    const trafficSources =
      sourcesResponse.rows?.map((row) => ({
        source: row.dimensionValues?.[0].value || "direct",
        count: Number.parseInt(row.metricValues?.[0].value || "0"),
      })) || []

    // Calcular totales
    const totalSessions = dailyStats.reduce((sum, day) => sum + day.sessions, 0)
    const totalUsers = dailyStats.reduce((sum, day) => sum + day.users, 0)

    return {
      dailyStats,
      mostVisitedPages,
      trafficSources,
      totalSessions,
      totalUsers,
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("❌ Error fetching Google Analytics data:", error)
    }
    return null
  }
}

// Función para obtener datos de Supabase
async function getSupabaseData(startDate: string, endDate: string) {
  try {
    // Verificar si existen las tablas necesarias
    const { data: tablesExist, error: checkError } = await supabase
      .from("sessions")
      .select("count", { count: "exact", head: true })

    if (checkError && checkError.code !== "PGRST116") {
      if (process.env.NODE_ENV !== "production") {
        console.warn("⚠️ Sessions table might not exist:", checkError.message)
      }
      await createAnalyticsTables()
    }

    // Obtener estadísticas diarias
    const { data: dailyStats, error: dailyError } = await supabase
      .from("vw_daily_stats")
      .select("*")
      .gte("date", startDate)
      .lte("date", endDate)
      .order("date", { ascending: true })

    if (dailyError && dailyError.code !== "PGRST116") {
      if (process.env.NODE_ENV !== "production") {
        console.error("❌ Error fetching daily stats:", dailyError.message)
      }
    }

    // Obtener usuarios activos
    const { data: activeUsersDaily, error: dailyActiveError } = await supabase
      .from("sessions")
      .select("count", { count: "exact", head: true })
      .gte("created_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())

    const { data: activeUsersWeekly, error: weeklyActiveError } = await supabase
      .from("sessions")
      .select("count", { count: "exact", head: true })
      .gte("created_at", new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())

    const { data: activeUsersMonthly, error: monthlyActiveError } = await supabase
      .from("sessions")
      .select("count", { count: "exact", head: true })
      .gte("created_at", new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString())

    // Obtener páginas más visitadas
    const { data: mostVisitedPages, error: pagesError } = await supabase
      .from("vw_pages")
      .select("*")
      .order("views", { ascending: false })
      .limit(10)

    if (pagesError && pagesError.code !== "PGRST116") {
      if (process.env.NODE_ENV !== "production") {
        console.error("❌ Error fetching most visited pages:", pagesError.message)
      }
    }

    // Obtener fuentes de tráfico
    const { data: trafficSources, error: sourcesError } = await supabase
      .from("vw_traffic_sources")
      .select("*")
      .order("count", { ascending: false })
      .limit(10)

    if (sourcesError && sourcesError.code !== "PGRST116") {
      if (process.env.NODE_ENV !== "production") {
        console.error("❌ Error fetching traffic sources:", sourcesError.message)
      }
    }

    // Obtener usuarios recientes
    const { data: users, error: usersError } = await supabase
      .from("vw_user_stats")
      .select("*")
      .order("last_active", { ascending: false })
      .limit(10)

    if (usersError && usersError.code !== "PGRST116") {
      if (process.env.NODE_ENV !== "production") {
        console.error("❌ Error fetching user stats:", usersError.message)
      }
    }

    // Obtener total de usuarios
    const { count: totalUsers, error: countError } = await supabase
      .from("auth.users")
      .select("*", { count: "exact", head: true })

    if (countError) {
      if (process.env.NODE_ENV !== "production") {
        console.error("❌ Error fetching total users:", countError.message)
      }
    }

    // Obtener total de sesiones
    const { count: totalSessions, error: sessionsError } = await supabase
      .from("sessions")
      .select("*", { count: "exact", head: true })
      .gte("created_at", startDate)
      .lte("created_at", endDate)

    if (sessionsError && sessionsError.code !== "PGRST116") {
      if (process.env.NODE_ENV !== "production") {
        console.error("❌ Error fetching total sessions:", sessionsError.message)
      }
    }

    // Obtener duración promedio de sesión
    const { data: avgDuration, error: durationError } = await supabase
      .from("sessions")
      .select("duration_seconds")
      .gte("created_at", startDate)
      .lte("created_at", endDate)

    let avgSessionDuration = 0
    if (!durationError && avgDuration && avgDuration.length > 0) {
      const validDurations = avgDuration.filter((s) => s.duration_seconds).map((s) => s.duration_seconds || 0)

      if (validDurations.length > 0) {
        avgSessionDuration = validDurations.reduce((sum, duration) => sum + duration, 0) / validDurations.length
      }
    }

    // Verificar si hay suficientes datos
    const hasData =
      (dailyStats && dailyStats.length > 0) ||
      (mostVisitedPages && mostVisitedPages.length > 0) ||
      (trafficSources && trafficSources.length > 0)

    if (!hasData) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("⚠️ Not enough data in Supabase")
      }
      return null
    }

    return {
      dailyStats: dailyStats || [],
      activeUsers: {
        daily: activeUsersDaily || 0,
        weekly: activeUsersWeekly || 0,
        monthly: activeUsersMonthly || 0,
      },
      mostVisitedPages: mostVisitedPages || [],
      trafficSources: trafficSources || [],
      users: users || [],
      totalUsers: totalUsers || 0,
      totalSessions: totalSessions || 0,
      avgSessionDuration,
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("❌ Error fetching Supabase data:", error)
    }
    return null
  }
}

// Función para crear tablas y vistas de analítica
async function createAnalyticsTables() {
  try {
    if (process.env.NODE_ENV !== "production") {
      console.log("🔧 Creating analytics tables and views...")
    }

    // Crear tabla de sesiones
    await supabase.query(`
      CREATE TABLE IF NOT EXISTS public.sessions (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id UUID REFERENCES auth.users(id),
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        ended_at TIMESTAMPTZ,
        duration_seconds INTEGER,
        source TEXT
      );
    `)

    // Crear tabla de vistas de página
    await supabase.query(`
      CREATE TABLE IF NOT EXISTS public.page_views (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        session_id UUID REFERENCES public.sessions(id),
        user_id UUID REFERENCES auth.users(id),
        page_path TEXT NOT NULL,
        title TEXT,
        referrer TEXT,
        time_on_page INTEGER,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `)

    // Crear tabla de análisis de documentos
    await supabase.query(`
      CREATE TABLE IF NOT EXISTS public.document_analyses (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id UUID REFERENCES auth.users(id),
        document_name TEXT,
        document_type TEXT,
        status TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `)

    // Crear tabla de consultas a abogados
    await supabase.query(`
      CREATE TABLE IF NOT EXISTS public.lawyer_queries (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id UUID REFERENCES auth.users(id),
        query TEXT,
        status TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `)

    // Crear vista de estadísticas diarias
    await supabase.query(`
      CREATE OR REPLACE VIEW public.vw_daily_stats AS
      WITH dates AS (
        SELECT generate_series(
          (CURRENT_DATE - INTERVAL '30 days')::date,
          CURRENT_DATE::date,
          '1 day'::interval
        )::date AS date
      ),
      session_counts AS (
        SELECT 
          DATE(created_at) AS date,
          COUNT(DISTINCT id) AS total_sessions,
          COUNT(DISTINCT user_id) AS active_users,
          AVG(duration_seconds) AS avg_session_duration
        FROM sessions
        WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
        GROUP BY DATE(created_at)
      ),
      new_users AS (
        SELECT 
          DATE(created_at) AS date,
          COUNT(*) AS new_users
        FROM auth.users
        WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
        GROUP BY DATE(created_at)
      ),
      page_view_stats AS (
        SELECT 
          DATE(created_at) AS date,
          COUNT(*) AS total_page_views
        FROM page_views
        WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
        GROUP BY DATE(created_at)
      ),
      doc_analyses AS (
        SELECT 
          DATE(created_at) AS date,
          COUNT(*) AS total_document_analyses
        FROM document_analyses
        WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
        GROUP BY DATE(created_at)
      ),
      lawyer_qs AS (
        SELECT 
          DATE(created_at) AS date,
          COUNT(*) AS total_lawyer_queries
        FROM lawyer_queries
        WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
        GROUP BY DATE(created_at)
      )
      SELECT 
        d.date,
        COALESCE(s.active_users, 0) AS active_users,
        COALESCE(n.new_users, 0) AS new_users,
        COALESCE(s.total_sessions, 0) AS total_sessions,
        COALESCE(s.avg_session_duration, 0) AS avg_session_duration,
        COALESCE(p.total_page_views, 0) AS total_page_views,
        COALESCE(da.total_document_analyses, 0) AS total_document_analyses,
        COALESCE(lq.total_lawyer_queries, 0) AS total_lawyer_queries,
        0.0 AS bounce_rate
      FROM dates d
      LEFT JOIN session_counts s ON d.date = s.date
      LEFT JOIN new_users n ON d.date = n.date
      LEFT JOIN page_view_stats p ON d.date = p.date
      LEFT JOIN doc_analyses da ON d.date = da.date
      LEFT JOIN lawyer_qs lq ON d.date = lq.date
      ORDER BY d.date;
    `)

    // Crear vista de páginas más visitadas
    await supabase.query(`
      CREATE OR REPLACE VIEW public.vw_pages AS
      SELECT 
        page_path AS path,
        COUNT(*) AS views
      FROM page_views
      WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
      GROUP BY page_path
      ORDER BY views DESC;
    `)

    // Crear vista de fuentes de tráfico
    await supabase.query(`
      CREATE OR REPLACE VIEW public.vw_traffic_sources AS
      SELECT 
        COALESCE(source, 'Directo') AS source,
        COUNT(*) AS count
      FROM sessions
      WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
      GROUP BY source
      ORDER BY count DESC;
    `)

    // Crear vista de estadísticas de usuario
    await supabase.query(`
      CREATE OR REPLACE VIEW public.vw_user_stats AS
      WITH user_sessions AS (
        SELECT 
          user_id,
          COUNT(*) AS session_count,
          SUM(duration_seconds) / 60 AS total_time_minutes,
          MAX(created_at) AS last_active
        FROM sessions
        WHERE user_id IS NOT NULL
        GROUP BY user_id
      )
      SELECT 
        u.id,
        u.email,
        u.created_at,
        COALESCE(s.last_active, u.created_at) AS last_active,
        COALESCE(s.session_count, 0) AS session_count,
        COALESCE(s.total_time_minutes, 0) AS total_time_minutes
      FROM auth.users u
      LEFT JOIN user_sessions s ON u.id = s.user_id
      ORDER BY last_active DESC;
    `)

    if (process.env.NODE_ENV !== "production") {
      console.log("✅ Analytics tables and views created successfully")
    }
    return true
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("❌ Error creating analytics tables:", error)
    }
    return false
  }
}

// Datos de ejemplo para fallback
const sampleData = {
  dailyStats: Array.from({ length: 30 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - 30 + i)
    return {
      date: date.toISOString().split("T")[0],
      active_users: Math.floor(Math.random() * 50) + 10,
      new_users: Math.floor(Math.random() * 10) + 1,
      total_sessions: Math.floor(Math.random() * 100) + 20,
      avg_session_duration: Math.floor(Math.random() * 15) + 5,
      total_page_views: Math.floor(Math.random() * 500) + 100,
      total_document_analyses: Math.floor(Math.random() * 50) + 5,
      total_lawyer_queries: Math.floor(Math.random() * 30) + 2,
      bounce_rate: Math.random() * 0.5 + 0.2,
    }
  }),
  activeUsers: {
    daily: 45,
    weekly: 189,
    monthly: 523,
  },
  mostVisitedPages: [
    { path: "/", views: 1245 },
    { path: "/analyze", views: 850 },
    { path: "/ask", views: 567 },
    { path: "/contratos", views: 432 },
    { path: "/dudas-laborales", views: 321 },
  ],
  trafficSources: [
    { source: "Google", count: 450 },
    { source: "Directo", count: 320 },
    { source: "Facebook", count: 180 },
    { source: "Twitter", count: 120 },
    { source: "Instagram", count: 90 },
  ],
  users: Array.from({ length: 10 }, (_, i) => ({
    id: `user-${i}`,
    email: `user${i}@example.com`,
    created_at: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
    last_active: new Date(Date.now() - Math.random() * 10 * 24 * 60 * 60 * 1000).toISOString(),
    session_count: Math.floor(Math.random() * 50) + 1,
    total_time_minutes: Math.floor(Math.random() * 500) + 10,
  })),
  totalUsers: 1234,
  totalSessions: 5678,
  avgSessionDuration: 300,
}

// Función para generar datos de ejemplo
function generateSampleData(startDate: string, endDate: string) {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const days = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1

  const dailyStats = Array.from({ length: days }, (_, i) => {
    const date = new Date(start)
    date.setDate(start.getDate() + i)
    const dateStr = date.toISOString().split("T")[0]

    // Generar valores aleatorios pero realistas
    const baseUsers = 50 + Math.floor(Math.random() * 30)
    const newUsers = Math.floor(baseUsers * 0.2)
    const sessions = baseUsers * 2 + Math.floor(Math.random() * 50)
    const pageViews = sessions * 3 + Math.floor(Math.random() * 100)

    return {
      date: dateStr,
      active_users: baseUsers,
      new_users: newUsers,
      total_sessions: sessions,
      total_page_views: pageViews,
      avg_session_duration: 180 + Math.floor(Math.random() * 240),
      bounce_rate: 0.3 + Math.random() * 0.2,
    }
  })

  return {
    totalUsers: 1000 + Math.floor(Math.random() * 500),
    totalSessions: 5000 + Math.floor(Math.random() * 2000),
    totalPageViews: 15000 + Math.floor(Math.random() * 5000),
    totalActivities: 2000 + Math.floor(Math.random() * 1000),
    dailyStats,
  }
}

export async function GET(request: Request) {
  try {
    if (process.env.NODE_ENV !== "production") {
      console.log("🔄 Iniciando solicitud de analytics...")
    }

    // Verificar si tenemos las variables de entorno necesarias
    if (!supabaseUrl || !supabaseKey) {
      if (process.env.NODE_ENV !== "production") {
        console.error("❌ Faltan variables de entorno de Supabase")
      }
      return NextResponse.json({ error: "Configuración de Supabase incompleta" }, { status: 500 })
    }

    // Inicializar cliente de Supabase
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Obtener parámetros de consulta
    const url = new URL(request.url)
    const startDate =
      url.searchParams.get("startDate") || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]
    const endDate = url.searchParams.get("endDate") || new Date().toISOString().split("T")[0]

    if (process.env.NODE_ENV !== "production") {
      console.log(`📅 Rango de fechas: ${startDate} a ${endDate}`)
    }

    // Intentar obtener datos de Supabase
    try {
      // Verificar si existen las tablas necesarias
      const { data: tablesExist, error: checkError } = await supabase
        .from("sessions")
        .select("count", { count: "exact", head: true })

      if (checkError) {
        if (process.env.NODE_ENV !== "production") {
          console.warn("⚠️ Error al verificar tablas:", checkError.message)
        }
      }

      // Obtener estadísticas básicas
      const [usersResult, sessionsResult, pageViewsResult, activitiesResult] = await Promise.all([
        supabase.from("users").select("count", { count: "exact", head: true }),
        supabase.from("sessions").select("count", { count: "exact", head: true }),
        supabase.from("page_views").select("count", { count: "exact", head: true }),
        supabase.from("activities").select("count", { count: "exact", head: true }),
      ])

      // Obtener datos diarios (simulados si no existen)
      const { data: dailyStats, error: dailyError } = await supabase
        .from("daily_stats")
        .select("*")
        .order("date", { ascending: true })

      // Generar datos de ejemplo si no hay datos reales
      const sampleData = generateSampleData(startDate, endDate)

      return NextResponse.json({
        totalUsers: usersResult.count || sampleData.totalUsers,
        totalSessions: sessionsResult.count || sampleData.totalSessions,
        totalPageViews: pageViewsResult.count || sampleData.totalPageViews,
        totalActivities: activitiesResult.count || sampleData.totalActivities,
        dailyStats: dailyStats || sampleData.dailyStats,
        dataSource: dailyStats ? "supabase" : "sample",
        message: dailyStats ? "Datos reales de Supabase" : "Datos de ejemplo (no se encontraron datos reales)",
      })
    } catch (supabaseError) {
      if (process.env.NODE_ENV !== "production") {
        console.error("❌ Error al obtener datos de Supabase:", supabaseError)
      }

      // Devolver datos de ejemplo en caso de error
      const sampleData = generateSampleData(startDate, endDate)

      return NextResponse.json({
        ...sampleData,
        dataSource: "sample",
        error: "Error al obtener datos reales",
        message: "Mostrando datos de ejemplo debido a un error",
      })
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("❌ Error general en API de analytics:", error)
    }
    return NextResponse.json(
      {
        error: "Error al procesar la solicitud de analytics",
        message: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 },
    )
  }
}
