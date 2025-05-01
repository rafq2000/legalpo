import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Configuración de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || ""

export async function GET() {
  try {
    // Verificar si tenemos las variables de entorno necesarias
    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: "Missing Supabase environment variables" }, { status: 500 })
    }

    // Inicializar cliente de Supabase
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Obtener las últimas 10 sesiones
    const { data: sessions, error: sessionsError } = await supabase
      .from("user_sessions")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(10)

    if (sessionsError) {
      return NextResponse.json({ error: "Error fetching sessions", details: sessionsError }, { status: 500 })
    }

    // Obtener las últimas 10 vistas de página
    const { data: pageViews, error: pageViewsError } = await supabase
      .from("page_views")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(10)

    if (pageViewsError) {
      return NextResponse.json({ error: "Error fetching page views", details: pageViewsError }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      sessions: {
        count: sessions.length,
        data: sessions,
      },
      pageViews: {
        count: pageViews.length,
        data: pageViews,
      },
      message: "Debug data retrieved successfully",
    })
  } catch (error) {
    console.error("Error in debug API:", error)
    return NextResponse.json({ error: "Unexpected error", details: String(error) }, { status: 500 })
  }
}
