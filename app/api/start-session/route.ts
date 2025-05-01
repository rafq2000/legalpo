import { NextResponse } from "next/server"
import { getSupabaseClient } from "@/lib/supabase-client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { cookies } from "next/headers"
import { v4 as uuidv4 } from "uuid"

export async function POST(request: Request) {
  try {
    // Obtener datos de la solicitud
    let source = "Directo"
    try {
      const data = await request.json()
      source = data.source || "Directo"
    } catch (error) {
      console.error("Error al parsear JSON de la solicitud:", error)
      // Continuar con el valor predeterminado
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

    // Generar ID de sesión único
    const sessionId = uuidv4()

    // Guardar ID de sesión en cookie
    try {
      cookies().set("session_id", sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 24 * 60 * 60, // 24 horas
        path: "/",
      })
    } catch (error) {
      console.error("Error al establecer cookie:", error)
      // Continuar incluso si no se puede establecer la cookie
    }

    // Inicializar Supabase
    try {
      const supabase = await getSupabaseClient()
      if (!supabase) {
        console.error("❌ Supabase client not available")
        return NextResponse.json({
          sessionId,
          message: "Session started but not registered in database",
          warning: "Supabase client not available",
        })
      }

      // Registrar inicio de sesión
      const { error } = await supabase.from("sessions").insert({
        id: sessionId,
        user_id: userId,
        source: source,
        created_at: new Date().toISOString(),
      })

      if (error) {
        console.error("❌ Error al registrar sesión:", error)
        return NextResponse.json({
          sessionId,
          message: "Session started but not registered in database",
          warning: error.message,
        })
      }

      return NextResponse.json({
        sessionId,
        message: "Session started successfully",
      })
    } catch (error) {
      console.error("❌ Error al interactuar con Supabase:", error)
      return NextResponse.json({
        sessionId,
        message: "Session started but not registered in database",
        warning: "Database error",
      })
    }
  } catch (error) {
    console.error("❌ Error general al iniciar sesión:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        message: "Failed to start session",
      },
      { status: 500 },
    )
  }
}
