import { NextResponse } from "next/server"
import { getSupabaseClient } from "@/lib/supabase-client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function GET(request: Request) {
  try {
    // Verificar autenticación y rol de administrador
    const session = await getServerSession(authOptions)
    if (!session || session.user?.role !== "admin") {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    const supabase = await getSupabaseClient()
    if (!supabase) {
      return NextResponse.json({ error: "Error de conexión a la base de datos" }, { status: 500 })
    }

    // Obtener parámetros de consulta
    const { searchParams } = new URL(request.url)
    const period = searchParams.get("period") || "week"

    // Calcular fechas según el período
    const now = new Date()
    const startDate = new Date()

    switch (period) {
      case "week":
        startDate.setDate(now.getDate() - 7)
        break
      case "month":
        startDate.setMonth(now.getMonth() - 1)
        break
      case "year":
        startDate.setFullYear(now.getFullYear() - 1)
        break
      default:
        startDate.setDate(now.getDate() - 7)
    }

    // Formato ISO para las fechas
    const startDateStr = startDate.toISOString()
    const endDateStr = now.toISOString()

    // Obtener estadísticas de usuarios
    const { data: userStats, error: userError } = await supabase.from("users").select("count", { count: "exact" })

    // Obtener usuarios nuevos en el período
    const { data: newUsers, error: newUserError } = await supabase
      .from("users")
      .select("count", { count: "exact" })
      .gte("created_at", startDateStr)

    // Obtener sesiones en el período
    const { data: sessionStats, error: sessionError } = await supabase
      .from("sessions")
      .select("count", { count: "exact" })
      .gte("started_at", startDateStr)

    // Obtener usuarios activos en el período
    const { data: activeUsers, error: activeUserError } = await supabase
      .from("sessions")
      .select("user_id", { count: "exact" })
      .gte("started_at", startDateStr)
      .group("user_id")

    // Obtener duración promedio de sesión
    const { data: avgDuration, error: durationError } = await supabase.rpc("get_average_session_duration", {
      start_date: startDateStr,
      end_date: endDateStr,
    })

    if (userError || newUserError || sessionError || activeUserError || durationError) {
      console.error("Error al obtener estadísticas:", {
        userError,
        newUserError,
        sessionError,
        activeUserError,
        durationError,
      })
      return NextResponse.json({ error: "Error al obtener estadísticas" }, { status: 500 })
    }

    // Construir respuesta
    const overview = {
      period,
      total_users: userStats?.[0]?.count || 0,
      new_users: newUsers?.[0]?.count || 0,
      total_sessions: sessionStats?.[0]?.count || 0,
      active_users: activeUsers?.length || 0,
      avg_session_duration: avgDuration || 0,
      start_date: startDateStr,
      end_date: endDateStr,
    }

    return NextResponse.json(overview)
  } catch (error) {
    console.error("Error en API de resumen:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
