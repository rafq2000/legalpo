import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function GET() {
  try {
    // Verificar variables de entorno
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    // Verificar si las variables están configuradas
    const hasSupabaseUrl = !!supabaseUrl
    const hasSupabaseKey = !!supabaseServiceKey
    const hasAnonKey = !!supabaseAnonKey

    // Si faltan variables esenciales, devolver error
    if (!hasSupabaseUrl || !hasSupabaseKey) {
      return NextResponse.json({
        success: false,
        message: "Faltan variables de entorno necesarias para Supabase",
        hasSupabaseUrl,
        hasSupabaseKey,
        hasAnonKey,
        details: "Verifica que NEXT_PUBLIC_SUPABASE_URL y SUPABASE_SERVICE_KEY estén configuradas correctamente",
      })
    }

    // Intentar crear cliente de Supabase
    let supabase
    try {
      supabase = createClient(supabaseUrl!, supabaseServiceKey!)
    } catch (error) {
      return NextResponse.json({
        success: false,
        message: "Error al crear cliente de Supabase",
        hasSupabaseUrl,
        hasSupabaseKey,
        hasAnonKey,
        details: String(error),
      })
    }

    // Verificar conexión con una consulta simple
    try {
      // Intentar consultar la tabla response_cache
      const { data: cacheData, error: cacheError } = await supabase
        .from("response_cache")
        .select("count", { count: "exact", head: true })

      // Verificar existencia de tablas de analítica
      const [
        sessionsResult,
        pageViewsResult,
        userEventsResult,
        userSessionsResult,
        documentAnalysesResult,
        lawyerQueriesResult,
      ] = await Promise.all([
        supabase.from("sessions").select("count", { count: "exact", head: true }),
        supabase.from("page_views").select("count", { count: "exact", head: true }),
        supabase.from("user_events").select("count", { count: "exact", head: true }),
        supabase.from("user_sessions").select("count", { count: "exact", head: true }),
        supabase.from("document_analyses").select("count", { count: "exact", head: true }),
        supabase.from("lawyer_queries").select("count", { count: "exact", head: true }),
      ])

      // Verificar si las tablas existen
      const tables = {
        response_cache: !cacheError || cacheError.code !== "PGRST116",
        sessions: !sessionsResult.error || sessionsResult.error.code !== "PGRST116",
        page_views: !pageViewsResult.error || pageViewsResult.error.code !== "PGRST116",
        user_events: !userEventsResult.error || userEventsResult.error.code !== "PGRST116",
        user_sessions: !userSessionsResult.error || userSessionsResult.error.code !== "PGRST116",
        document_analyses: !documentAnalysesResult.error || documentAnalysesResult.error.code !== "PGRST116",
        lawyer_queries: !lawyerQueriesResult.error || lawyerQueriesResult.error.code !== "PGRST116",
      }

      // Verificar si hay alguna tabla de analítica
      const hasAnalyticsTables = Object.values(tables).some((exists) => exists)

      return NextResponse.json({
        success: true,
        message: hasAnalyticsTables
          ? "Conexión a Supabase exitosa y se encontraron algunas tablas de analítica"
          : "Conexión a Supabase exitosa pero no se encontraron tablas de analítica",
        hasSupabaseUrl,
        hasSupabaseKey,
        hasAnonKey,
        tables,
      })
    } catch (error) {
      return NextResponse.json({
        success: false,
        message: "Error al verificar tablas en Supabase",
        hasSupabaseUrl,
        hasSupabaseKey,
        hasAnonKey,
        details: String(error),
      })
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error general al diagnosticar Supabase",
      details: String(error),
    })
  }
}
