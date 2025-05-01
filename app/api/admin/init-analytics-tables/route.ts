import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST() {
  try {
    // Verificar variables de entorno
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({
        success: false,
        message: "Faltan variables de entorno necesarias para Supabase",
        details: "Verifica que NEXT_PUBLIC_SUPABASE_URL y SUPABASE_SERVICE_KEY estén configuradas correctamente",
      })
    }

    // Inicializar cliente de Supabase
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Crear tablas de analítica
    try {
      console.log("🔧 Creando tablas de analítica...")

      // Crear tabla de sesiones
      await supabase.query(`
        CREATE TABLE IF NOT EXISTS sessions (
          id TEXT PRIMARY KEY,
          user_id UUID,
          ip_address TEXT,
          user_agent TEXT,
          device_type TEXT,
          source TEXT DEFAULT 'direct',
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          ended_at TIMESTAMP WITH TIME ZONE,
          duration_seconds INTEGER
        );
      `)

      // Crear tabla de sesiones de usuario (versión más detallada)
      await supabase.query(`
        CREATE TABLE IF NOT EXISTS user_sessions (
          id TEXT PRIMARY KEY,
          user_id UUID,
          anonymous_id TEXT,
          ip_address TEXT,
          user_agent TEXT,
          device_type TEXT,
          browser TEXT,
          os TEXT,
          country TEXT,
          region TEXT,
          is_active BOOLEAN DEFAULT TRUE,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          ended_at TIMESTAMP WITH TIME ZONE,
          duration_seconds INTEGER
        );
      `)

      // Crear tabla de eventos de usuario
      await supabase.query(`
        CREATE TABLE IF NOT EXISTS user_events (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          user_id UUID,
          anonymous_id TEXT,
          session_id TEXT,
          event_type TEXT NOT NULL,
          page_path TEXT,
          component_id TEXT,
          metadata JSONB DEFAULT '{}'::jsonb,
          client_timestamp BIGINT,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
      `)

      // Crear tabla de vistas de página
      await supabase.query(`
        CREATE TABLE IF NOT EXISTS page_views (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          session_id TEXT,
          user_id UUID,
          anonymous_id TEXT,
          page_path TEXT NOT NULL,
          page_title TEXT,
          referrer TEXT,
          time_on_page INTEGER,
          exit_at TIMESTAMP WITH TIME ZONE,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
      `)

      // Crear tabla de análisis de documentos
      await supabase.query(`
        CREATE TABLE IF NOT EXISTS document_analyses (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          user_id UUID,
          session_id TEXT,
          document_type TEXT,
          document_name TEXT,
          document_size INTEGER,
          processing_time INTEGER,
          success BOOLEAN,
          error_message TEXT,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
      `)

      // Crear tabla de consultas a abogado
      await supabase.query(`
        CREATE TABLE IF NOT EXISTS lawyer_queries (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          user_id UUID,
          session_id TEXT,
          query_text TEXT,
          document_id UUID,
          response_time INTEGER,
          was_helpful BOOLEAN,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
      `)

      // Crear vista de estadísticas diarias
      await supabase.query(`
        CREATE OR REPLACE VIEW daily_stats AS
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
        user_session_counts AS (
          SELECT 
            DATE(created_at) AS date,
            COUNT(DISTINCT id) AS total_sessions,
            COUNT(DISTINCT user_id) AS active_users,
            AVG(duration_seconds) AS avg_session_duration
          FROM user_sessions
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
          COALESCE(s.active_users, us.active_users, 0) AS active_users,
          0 AS new_users,
          COALESCE(s.total_sessions, us.total_sessions, 0) AS total_sessions,
          COALESCE(s.avg_session_duration, us.avg_session_duration, 0) AS avg_session_duration,
          COALESCE(p.total_page_views, 0) AS total_page_views,
          COALESCE(da.total_document_analyses, 0) AS total_document_analyses,
          COALESCE(lq.total_lawyer_queries, 0) AS total_lawyer_queries,
          0.0 AS bounce_rate
        FROM dates d
        LEFT JOIN session_counts s ON d.date = s.date
        LEFT JOIN user_session_counts us ON d.date = us.date
        LEFT JOIN page_view_stats p ON d.date = p.date
        LEFT JOIN doc_analyses da ON d.date = da.date
        LEFT JOIN lawyer_qs lq ON d.date = lq.date
        ORDER BY d.date;
      `)

      console.log("✅ Tablas de analítica creadas correctamente")
      return NextResponse.json({
        success: true,
        message: "Tablas de analítica creadas correctamente",
      })
    } catch (error) {
      console.error("❌ Error al crear tablas de analítica:", error)
      return NextResponse.json({
        success: false,
        message: "Error al crear tablas de analítica",
        details: String(error),
      })
    }
  } catch (error) {
    console.error("❌ Error general:", error)
    return NextResponse.json({
      success: false,
      message: "Error general al inicializar tablas de analítica",
      details: String(error),
    })
  }
}
