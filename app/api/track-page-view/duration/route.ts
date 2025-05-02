import { NextResponse } from "next/server"
import { getSupabaseClient } from "@/lib/supabase-client"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    // Obtener datos de la solicitud
    const data = await request.json()
    const { path, timeOnPage } = data

    // Obtener ID de sesión
    const sessionId = cookies().get("session_id")?.value
    if (!sessionId) {
      return NextResponse.json({ message: "No active session" })
    }

    // Inicializar Supabase
    const supabase = await getSupabaseClient()
    if (!supabase) {
      if (process.env.NODE_ENV !== "production") {
        console.error("❌ Supabase client not available")
      }
      return NextResponse.json({ error: "Supabase init failed" }, { status: 500 })
    }

    // Actualizar la última vista de página con la duración
    const { error } = await supabase
      .from("page_views")
      .update({
        time_on_page: timeOnPage,
      })
      .eq("session_id", sessionId)
      .eq("page_path", path)
      .order("created_at", { ascending: false })
      .limit(1)

    if (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error("❌ Error al actualizar duración de página:", error)
      }
      return NextResponse.json({ error: "Failed to update page view duration" }, { status: 500 })
    }

    return NextResponse.json({
      message: "Page view duration updated successfully",
    })
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("❌ Error general al actualizar duración de página:", error)
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
