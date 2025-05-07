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
    const limit = Number.parseInt(searchParams.get("limit") || "100")
    const offset = Number.parseInt(searchParams.get("offset") || "0")
    const userId = searchParams.get("userId")
    const startDate = searchParams.get("startDate")
    const endDate = searchParams.get("endDate")

    // Construir consulta base
    let query = supabase
      .from("sessions")
      .select(
        `
        *,
        user:users(email, name)
      `,
        { count: "exact" },
      )
      .order("started_at", { ascending: false })

    // Aplicar filtros si existen
    if (userId) {
      query = query.eq("user_id", userId)
    }

    if (startDate) {
      query = query.gte("started_at", startDate)
    }

    if (endDate) {
      query = query.lte("started_at", endDate)
    }

    // Aplicar paginación
    query = query.range(offset, offset + limit - 1)

    // Ejecutar consulta
    const { data: sessions, error, count } = await query

    if (error) {
      console.error("Error al obtener sesiones:", error)
      return NextResponse.json({ error: "Error al obtener sesiones" }, { status: 500 })
    }

    // Procesar datos para el formato de respuesta
    const processedSessions = sessions.map((session) => ({
      id: session.id,
      user_id: session.user_id,
      user_email: session.user?.[0]?.email,
      user_name: session.user?.[0]?.name,
      started_at: session.started_at,
      ended_at: session.ended_at,
      duration_seconds: session.duration_seconds,
      ip_address: session.ip_address,
      user_agent: session.user_agent,
      is_active: session.is_active,
    }))

    return NextResponse.json({
      sessions: processedSessions,
      total: count || sessions.length,
      limit,
      offset,
    })
  } catch (error) {
    console.error("Error en API de sesiones:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
