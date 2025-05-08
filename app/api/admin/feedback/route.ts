import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export async function GET(req: Request) {
  try {
    // Verificar si el usuario es administrador
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

    if (!token || token.email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json({ error: "No autorizado" }, { status: 403 })
    }

    // Obtener feedback de Supabase
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
      return NextResponse.json({
        feedback: [],
        warning: "Configuración de Supabase no disponible",
      })
    }

    try {
      const { createClient } = await import("@supabase/supabase-js")
      const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

      // Obtener todos los registros de feedback ordenados por fecha
      const { data, error } = await supabase.from("user_feedback").select("*").order("created_at", { ascending: false })

      if (error) {
        console.error("Error al obtener feedback de Supabase:", error)
        return NextResponse.json({
          feedback: [],
          error: "Error al obtener datos de feedback: " + error.message,
        })
      }

      return NextResponse.json({ feedback: data || [] })
    } catch (error) {
      console.error("Excepción al obtener feedback:", error)
      return NextResponse.json({
        feedback: [],
        error: "Error al procesar la solicitud: " + (error instanceof Error ? error.message : "Error desconocido"),
      })
    }
  } catch (error) {
    console.error("Error al procesar solicitud de feedback:", error)
    return NextResponse.json({
      feedback: [],
      error: "Error interno del servidor: " + (error instanceof Error ? error.message : "Error desconocido"),
    })
  }
}
