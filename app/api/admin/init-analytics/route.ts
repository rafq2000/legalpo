import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { getSupabaseClient } from "@/lib/supabase-client"

export async function POST(request: Request) {
  try {
    console.log("🔄 Inicializando datos de analítica...")

    // Verificar autenticación
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      console.warn("❌ Intento de inicialización no autorizado")
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    // Verificar si el usuario es administrador
    const isAdmin = session.user.email === process.env.ADMIN_EMAIL
    if (!isAdmin) {
      console.warn(`❌ Usuario no administrador intentó inicializar analítica: ${session.user.email}`)
      return NextResponse.json({ error: "Acceso denegado" }, { status: 403 })
    }

    // Inicializar cliente de Supabase
    const supabase = await getSupabaseClient()
    if (!supabase) {
      console.error("❌ No se pudo inicializar el cliente de Supabase")
      return NextResponse.json({ error: "Error al conectar con Supabase" }, { status: 500 })
    }

    // Verificar si las tablas necesarias existen
    const { error: tablesError } = await supabase.from("users").select("id").limit(1)

    if (tablesError) {
      console.log("⚠️ Tablas no encontradas, creando tablas de ejemplo...")

      // Crear tablas de ejemplo
      try {
        // Crear tabla de usuarios si no existe
        await supabase.rpc("create_analytics_tables")

        // Insertar datos de ejemplo
        await supabase.rpc("insert_sample_analytics_data")

        console.log("✅ Tablas y datos de ejemplo creados correctamente")
      } catch (createError) {
        console.error("❌ Error al crear tablas de ejemplo:", createError)
        return NextResponse.json(
          {
            error: "Error al crear tablas de ejemplo",
            details: createError,
          },
          { status: 500 },
        )
      }
    }

    // Contar usuarios y sesiones para confirmar
    const { count: userCount } = await supabase.from("users").select("*", { count: "exact", head: true })
    const { count: sessionCount } = await supabase.from("user_sessions").select("*", { count: "exact", head: true })

    console.log(`✅ Analítica inicializada correctamente. Usuarios: ${userCount}, Sesiones: ${sessionCount}`)

    return NextResponse.json({
      success: true,
      message: "Datos de analítica inicializados correctamente",
      stats: {
        users: userCount,
        sessions: sessionCount,
      },
    })
  } catch (error) {
    console.error("❌ Error al inicializar datos de analítica:", error)
    return NextResponse.json(
      {
        error: "Error al inicializar datos de analítica",
        details: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 },
    )
  }
}
