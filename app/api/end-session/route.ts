import { NextResponse } from "next/server"
import { getSupabaseClient } from "@/lib/supabase-client"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
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

    // Obtener datos de la sesión actual
    const { data: sessionData, error: fetchError } = await supabase
      .from("sessions")
      .select("created_at")
      .eq("id", sessionId)
      .single()

    if (fetchError) {
      if (process.env.NODE_ENV !== "production") {
        console.error("❌ Error al obtener sesión:", fetchError)
      }
      return NextResponse.json({ error: "Failed to fetch session" }, { status: 500 })
    }

    // Calcular duración de la sesión
    const startedAt = new Date(sessionData.created_at)
    const endedAt = new Date()
    const durationSeconds = Math.floor((endedAt.getTime() - startedAt.getTime()) / 1000)

    // Actualizar sesión con tiempo de finalización y duración
    const { error: updateError } = await supabase
      .from("sessions")
      .update({
        ended_at: endedAt.toISOString(),
        duration_seconds: durationSeconds,
      })
      .eq("id", sessionId)

    if (updateError) {
      if (process.env.NODE_ENV !== "production") {
        console.error("❌ Error al actualizar sesión:", updateError)
      }
      return NextResponse.json({ error: "Failed to update session" }, { status: 500 })
    }

    // Eliminar cookie de sesión
    cookies().delete("session_id")

    return NextResponse.json({
      message: "Session ended successfully",
      duration: durationSeconds,
    })
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("❌ Error general al finalizar sesión:", error)
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
