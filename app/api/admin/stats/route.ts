import { NextResponse } from "next/server"
import { getSupabaseClient } from "@/lib/supabase-client"
import { BetaAnalyticsDataClient } from "@google-analytics/data"

export async function GET(request: Request) {
  // Obtener parámetros de consulta
  const url = new URL(request.url)
  const type = url.searchParams.get("type") || "all"
  const startDate =
    url.searchParams.get("startDate") || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]
  const endDate = url.searchParams.get("endDate") || new Date().toISOString().split("T")[0]
  const page = Number.parseInt(url.searchParams.get("page") || "1")
  const pageSize = Number.parseInt(url.searchParams.get("pageSize") || "10")

  console.log(`📊 API Stats solicitada: tipo=${type}, fechas=${startDate} a ${endDate}, página=${page}`)

  // Inicializar Supabase
  const supabase = await getSupabaseClient()
  if (!supabase) {
    console.error("❌ Supabase client not available")
    return NextResponse.json({ error: "Supabase init failed" }, { status: 500 })
  }

  // Objeto para almacenar todos los datos
  const responseData: any = {}
  let useFallback = false

  try {
    // Obtener datos según el tipo solicitado
    if (type === "all" || type === "overview") {
      try {
        // Total de usuarios
        const { data: usersCount, error: usersError } = await supabase
          .from("auth.users")
          .select("count", { count: "exact", head: true })

        if (usersError) throw usersError
        responseData.totalUsers = usersCount || 0

        // Usuarios activos (diarios)
        const { data: dailyActive, error: dailyError } = await supabase
          .from("sessions")
          .select("count", { count: "exact", head: true })
          .gte("created_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())

        if (dailyError && dailyError.code !== "PGRST116") throw dailyError

        // Usuarios activos (semanales)
        const { data: weeklyActive, error: weeklyError } = await supabase
          .from("sessions")
          .select("count", { count: "exact", head: true })
          .gte("created_at", new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())

        if (weeklyError && weeklyError.code !== "PGRST116") throw weeklyError

        // Usuarios activos (mensuales)
        const { data: monthlyActive, error: monthlyError } = await supabase
          .from("sessions")
          .select("count", { count: "exact", head: true })
          .gte("created_at", new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString())

        if (monthlyError && monthlyError.code !== "PGRST116") throw monthlyError

        responseData.activeUsers = {
          daily: dailyActive || 0,
          weekly: weeklyActive || 0,
          monthly: monthlyActive || 0,
        }

        // Nuevos usuarios en el período
        const { data: newUsers, error: newError } = await supabase
          .from("auth.users")
          .select("count", { count: "exact", head: true })
          .gte("created_at", startDate)
          .lte("created_at", endDate)

        if (newError) throw newError
        responseData.newUsers = newUsers || 0

        // Sesiones y duración promedio
        const { data: sessions, error: sessionsError } = await supabase
          .from("sessions")
          .select("count, avg(duration_seconds)", { count: "exact" })
          .gte("created_at", startDate)
          .lte("created_at", endDate)
          .single()

        if (sessionsError && sessionsError.code !== "PGRST116") throw sessionsError
        responseData.totalSessions = sessions?.count || 0
        responseData.avgSessionDuration = sessions?.avg || 0

        // Estadísticas diarias
        const { data: dailyStats, error: dailyStatsError } = await supabase
          .from("vw_daily_stats")
          .select("*")
          .gte("date", startDate)
          .lte("date", endDate)
          .order("date", { ascending: true })

        if (dailyStatsError && dailyStatsError.code !== "PGRST116") throw dailyStatsError
        responseData.dailyStats = dailyStats || []
      } catch (error) {
        console.error("Error en estadísticas generales:", error)
        useFallback = true
      }
    }

    if (type === "all" || type === "pages") {
      try {
        // Páginas más visitadas
        const { data: pages, error: pagesError } = await supabase.from("vw_pages").select("*").limit(20)

        if (pagesError && pagesError.code !== "PGRST116") throw pagesError

        // Calcular el total de vistas para obtener porcentajes
        const pageData = pages || []
        const totalViews = pageData.reduce((sum, page) => sum + (page.views || 0), 0) || 0

        // Formatear datos para la respuesta
        responseData.mostVisitedPages = pageData.map((page) => ({
          path: page.path || "/",
          views: page.views || 0,
          percentage: totalViews > 0 ? ((page.views || 0) / totalViews) * 100 : 0,
        }))
      } catch (error) {
        console.error("Error en páginas visitadas:", error)
        useFallback = true
      }
    }

    if (type === "all" || type === "users") {
      try {
        // Tabla de usuarios con estadísticas
        const {
          data: users,
          error: usersError,
          count,
        } = await supabase
          .from("vw_user_stats")
          .select("*", { count: "exact" })
          .order("created_at", { ascending: false })
          .range((page - 1) * pageSize, page * pageSize - 1)

        if (usersError && usersError.code !== "PGRST116") throw usersError
        responseData.users = users || []
        responseData.total = count || 0
      } catch (error) {
        console.error("Error en tabla de usuarios:", error)
        useFallback = true
      }
    }

    if (type === "all" || type === "traffic") {
      try {
        // Fuentes de tráfico
        const { data: sources, error: sourcesError } = await supabase.from("vw_traffic_sources").select("*").limit(10)

        if (sourcesError && sourcesError.code !== "PGRST116") throw sourcesError
        responseData.trafficSources = sources || []
      } catch (error) {
        console.error("Error en fuentes de tráfico:", error)
        useFallback = true
      }
    }

    if (type === "all" || type === "conversion") {
      try {
        // Métricas de conversión
        const { data: visitors, error: visitorsError } = await supabase
          .from("sessions")
          .select("count", { count: "exact", head: true })
          .gte("created_at", startDate)
          .lte("created_at", endDate)

        if (visitorsError && visitorsError.code !== "PGRST116") throw visitorsError

        const { data: documents, error: documentsError } = await supabase
          .from("document_analyses")
          .select("count", { count: "exact", head: true })
          .gte("created_at", startDate)
          .lte("created_at", endDate)

        if (documentsError && documentsError.code !== "PGRST116") throw documentsError

        const { data: queries, error: queriesError } = await supabase
          .from("lawyer_queries")
          .select("count", { count: "exact", head: true })
          .gte("created_at", startDate)
          .lte("created_at", endDate)

        if (queriesError && queriesError.code !== "PGRST116") throw queriesError

        const visitorCount = visitors || 0
        const documentCount = documents || 0
        const queryCount = queries || 0

        responseData.visitors = visitorCount
        responseData.documents = documentCount
        responseData.queries = queryCount
        responseData.docRate = visitorCount > 0 ? (documentCount / visitorCount) * 100 : 0
        responseData.queryRate = visitorCount > 0 ? (queryCount / visitorCount) * 100 : 0
      } catch (error) {
        console.error("Error en métricas de conversión:", error)
        useFallback = true
      }
    }

    // Intentar obtener datos de Google Analytics si está configurado
    try {
      const gaClientEmail = process.env.GOOGLE_CLIENT_EMAIL
      const gaPrivateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
      const propertyId = process.env.GA4_PROPERTY_ID

      if (gaClientEmail && gaPrivateKey && propertyId) {
        console.log("Intentando conectar con Google Analytics...")

        const analytics = new BetaAnalyticsDataClient({
          credentials: {
            client_email: gaClientEmail,
            private_key: gaPrivateKey,
          },
        })

        // Obtener datos básicos de GA4
        const [response] = await analytics.runReport({
          property: `properties/${propertyId}`,
          dateRanges: [
            {
              startDate: "30daysAgo",
              endDate: "today",
            },
          ],
          metrics: [
            { name: "activeUsers" },
            { name: "screenPageViews" },
            { name: "sessions" },
            { name: "averageSessionDuration" },
          ],
        })

        if (response.rows && response.rows.length > 0) {
          const row = response.rows[0]
          const metrics = row.metricValues || []

          // Complementar datos con GA4
          if (metrics.length >= 4) {
            responseData.gaData = {
              activeUsers: Number.parseInt(metrics[0].value || "0"),
              pageViews: Number.parseInt(metrics[1].value || "0"),
              sessions: Number.parseInt(metrics[2].value || "0"),
              avgSessionDuration: Number.parseFloat(metrics[3].value || "0"),
            }
          }
        }
      }
    } catch (gaError) {
      console.error("Error al obtener datos de Google Analytics:", gaError)
      // No fallamos si GA falla, seguimos con los datos de Supabase
    }

    // Si necesitamos usar datos de ejemplo, los generamos
    if (useFallback) {
      console.log("⚠️ Usando datos de ejemplo debido a errores")
      return NextResponse.json(getFallbackData(type), {
        headers: { "X-Data-Source": "fallback" },
      })
    }

    // Devolver respuesta con datos reales
    return NextResponse.json(responseData, {
      headers: { "X-Data-Source": "supabase-real" },
    })
  } catch (error) {
    console.error("Error general al obtener estadísticas:", error)

    // Si hay un error general, devolver datos de ejemplo
    return NextResponse.json(getFallbackData(type), {
      headers: { "X-Data-Source": "fallback-error" },
    })
  }
}

// Función para generar datos de ejemplo en caso de error
function getFallbackData(type: string) {
  const fallbackData: any = {}

  if (type === "all" || type === "overview") {
    fallbackData.totalUsers = 100
    fallbackData.activeUsers = { daily: 25, weekly: 50, monthly: 75 }
    fallbackData.newUsers = 10
    fallbackData.totalSessions = 200
    fallbackData.avgSessionDuration = 300

    // Generar estadísticas diarias de ejemplo
    const dailyStats = []
    const today = new Date()

    for (let i = 30; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(today.getDate() - i)

      dailyStats.push({
        date: date.toISOString().split("T")[0],
        active_users: Math.floor(Math.random() * 50) + 10,
        new_users: Math.floor(Math.random() * 10) + 1,
        total_sessions: Math.floor(Math.random() * 100) + 20,
        avg_session_duration: Math.floor(Math.random() * 15) + 5,
        total_page_views: Math.floor(Math.random() * 500) + 100,
        total_document_analyses: Math.floor(Math.random() * 50) + 5,
        total_lawyer_queries: Math.floor(Math.random() * 30) + 2,
        bounce_rate: Math.random() * 0.5 + 0.2,
      })
    }

    fallbackData.dailyStats = dailyStats
  }

  if (type === "all" || type === "pages") {
    fallbackData.mostVisitedPages = [
      { path: "/", views: 1250, percentage: 25 },
      { path: "/analyze", views: 850, percentage: 17 },
      { path: "/contratos", views: 650, percentage: 13 },
      { path: "/dudas-laborales", views: 450, percentage: 9 },
      { path: "/calculadora-finiquito", views: 350, percentage: 7 },
      { path: "/quienes-somos", views: 250, percentage: 5 },
      { path: "/como-funciona", views: 200, percentage: 4 },
      { path: "/caracteristicas", views: 180, percentage: 3.6 },
      { path: "/privacidad", views: 150, percentage: 3 },
      { path: "/terminos", views: 120, percentage: 2.4 },
    ]
  }

  if (type === "all" || type === "users") {
    const users = []
    for (let i = 0; i < 10; i++) {
      users.push({
        id: `user-${i + 1}`,
        email: `usuario${i + 1}@ejemplo.com`,
        created_at: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
        last_active: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
        source: Math.random() > 0.5 ? "Google" : "Directo",
        session_count: Math.floor(Math.random() * 50) + 1,
        total_time_minutes: Math.floor(Math.random() * 500) + 10,
        document_count: Math.floor(Math.random() * 20),
        query_count: Math.floor(Math.random() * 30),
      })
    }

    fallbackData.users = users
    fallbackData.total = 100
  }

  if (type === "all" || type === "traffic") {
    fallbackData.trafficSources = [
      { source: "Google", count: 450 },
      { source: "Directo", count: 320 },
      { source: "Facebook", count: 180 },
      { source: "Twitter", count: 120 },
      { source: "Instagram", count: 90 },
      { source: "LinkedIn", count: 60 },
    ]
  }

  if (type === "all" || type === "conversion") {
    fallbackData.visitors = 1000
    fallbackData.documents = 150
    fallbackData.queries = 250
    fallbackData.docRate = 15.0
    fallbackData.queryRate = 25.0
  }

  return fallbackData
}
