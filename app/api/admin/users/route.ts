import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function GET(req: Request) {
  try {
    // Verificar clave de administrador
    const { searchParams } = new URL(req.url)
    const key = searchParams.get("key")

    if (key !== process.env.ADMIN_AUTH_KEY) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    // Obtener usuarios
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY

    if (!supabaseUrl || !supabaseServiceKey) {
      // Si no hay configuración de Supabase, devolver datos de ejemplo
      return NextResponse.json({
        users: getMockUsers(),
        count: 10,
        timestamp: new Date().toISOString(),
      })
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Consultar la estructura de la tabla primero
    const { data: tableInfo, error: tableError } = await supabase.from("users").select("*").limit(1)

    if (tableError) {
      console.error("Error al consultar estructura de tabla:", tableError)

      // Intentar consulta alternativa para usuarios de Google
      try {
        const { data: authUsers, error: authError } = await supabase
          .from("auth.users")
          .select("email, created_at, last_sign_in_at")
          .order("created_at", { ascending: false })

        if (authError) {
          throw authError
        }

        const formattedUsers = authUsers.map((user) => ({
          email: user.email,
          created_at: user.created_at,
          last_login: user.last_sign_in_at,
        }))

        return NextResponse.json({
          users: formattedUsers,
          count: formattedUsers.length,
          timestamp: new Date().toISOString(),
        })
      } catch (authQueryError) {
        console.error("Error al consultar usuarios de autenticación:", authQueryError)

        // Si todo falla, devolver datos de ejemplo
        return NextResponse.json({
          users: getMockUsers(),
          count: 10,
          timestamp: new Date().toISOString(),
          error: "No se pudo acceder a la tabla de usuarios. Usando datos de ejemplo.",
        })
      }
    }

    // Determinar qué columnas existen
    const columns = Object.keys(tableInfo[0] || {})
    let query = supabase.from("users").select("email, created_at")

    // Añadir last_login solo si existe
    if (columns.includes("last_login")) {
      query = supabase.from("users").select("email, created_at, last_login")
    } else if (columns.includes("last_sign_in_at")) {
      query = supabase.from("users").select("email, created_at, last_sign_in_at")
    }

    const { data: users, error } = await query.order("created_at", { ascending: false })

    if (error) {
      console.error("Error al consultar usuarios:", error)
      return NextResponse.json(
        {
          error: `Error de base de datos: ${error.message}`,
          users: getMockUsers(),
          count: 10,
          timestamp: new Date().toISOString(),
        },
        { status: 200 },
      )
    }

    // Formatear los datos para asegurar consistencia
    const formattedUsers = users.map((user) => ({
      email: user.email,
      created_at: user.created_at,
      last_login: user.last_login || user.last_sign_in_at || null,
    }))

    return NextResponse.json({
      users: formattedUsers,
      count: formattedUsers.length,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error al obtener usuarios:", error)
    return NextResponse.json(
      {
        error: `Error: ${error.message || "Error desconocido"}`,
        users: getMockUsers(),
        count: 10,
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    )
  }
}

// Función para generar datos de ejemplo
function getMockUsers() {
  return Array.from({ length: 10 }, (_, i) => ({
    email: `usuario${i + 1}@gmail.com`,
    created_at: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
    last_login:
      Math.random() > 0.3 ? new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString() : null,
  }))
}

export const dynamic = "force-dynamic"
