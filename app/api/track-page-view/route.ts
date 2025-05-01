import { NextResponse } from "next/server"
import { getSupabaseClient } from "@/lib/supabase-client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    // Obtener datos de la solicitud
    let path = "/"
    let title = "Página"
    let referrer = ""

    try {
      const data = await request.json()
      path = data.path || "/"
      title = data.title || "Página"
      referrer = data.referrer || ""
    } catch (error) {
      console.error("Error al parsear JSON de la solicitud:", error)
      // Continuar con valores predeterminados
    }

    // Obtener sesión del usuario
    let userId: string | undefined
    try {
      const session = await getServerSession(authOptions)
      userId = session?.user?.id
    } catch (error) {
      console.error("Error al obtener la sesión:", error)
      // Continuar sin userId si hay error
    }

    // Obtener ID de sesión
    let sessionId: string | undefined
    try {
      sessionId = cookies().get("session_id")?.value
    } catch (error) {
      console.error("Error al obtener cookies:", error)
    }

    if (!sessionId) {
      return NextResponse.json({
        warning: "No active session",
        message: "Page view not registered",
      })
    }

    // Inicializar Supabase
    try {
      const supabase = await getSupabaseClient()
      if (!supabase) {
        console.error("❌ Supabase client not available")
        return NextResponse.json({
          warning: "Supabase client not available",
          message: "Page view not registered in database",
        })
      }

      // Registrar vista de página
      const { error } = await supabase.from("page_views").insert({
        session_id: sessionId,
        user_id: userId,
        page_path: path,
        title,
        referrer,
        created_at: new Date().toISOString(),
      })

      if (error) {
        console.error("❌ Error al registrar vista de página:", error)
        return NextResponse.json({
          warning: error.message,
          message: "Page view not registered in database",
        })
      }

      return NextResponse.json({
        message: "Page view registered successfully",
      })
    } catch (error) {
      console.error("❌ Error al interactuar con Supabase:", error)
      return NextResponse.json({
        warning: "Database error",
        message: "Page view not registered in database",
      })
    }
  } catch (error) {
    console.error("❌ Error general al registrar vista de página:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        message: "Failed to register page view",
      },
      { status: 500 },
    )
  }
}
