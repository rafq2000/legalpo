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
    const orderBy = searchParams.get("orderBy") || "created_at"
    const order = searchParams.get("order") || "desc"

    // Obtener usuarios con estadísticas
    const {
      data: users,
      error,
      count,
    } = await supabase
      .from("users")
      .select(
        `
        *,
        sessions:sessions(count),
        last_session:sessions(started_at)
      `,
        { count: "exact" },
      )
      .order(orderBy, { ascending: order === "asc" })
      .limit(limit)
      .range(offset, offset + limit - 1)

    if (error) {
      console.error("Error al obtener usuarios:", error)
      return NextResponse.json({ error: "Error al obtener usuarios" }, { status: 500 })
    }

    // Procesar datos para el formato de respuesta
    const processedUsers = users.map((user) => ({
      id: user.id,
      email: user.email,
      name: user.name,
      created_at: user.created_at,
      last_active: user.last_session?.[0]?.started_at || user.created_at,
      session_count: user.sessions?.length || 0,
    }))

    return NextResponse.json({
      users: processedUsers,
      total: count || users.length,
      limit,
      offset,
    })
  } catch (error) {
    console.error("Error en API de usuarios:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
