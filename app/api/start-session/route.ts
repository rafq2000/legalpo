import { NextResponse } from "next/server"
import { getSupabaseClient } from "@/lib/supabase-client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { cookies } from "next/headers"
import { v4 as uuidv4 } from "uuid"

export async function POST(request: Request) {
  try {
    // Obtener datos de la solicitud
    const data = await request.json()
    const { source = "Directo" } = data

    // Obtener sesión del usuario
    const session = await getServerSession(authOptions)
    const userId = session?.user?.id

    // Generar ID de sesión único
    const sessionId = uuidv4()

    // Guardar ID de sesión en cookie
    cookies().set("session_id", sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60, // 24 horas
      path: "/",
    })

    // Inicializar Supabase
    const supabase = await getSupabaseClient()
    if (!supabase) {
      console.error("❌ Supabase client not available")
      return NextResponse.json({ error: "Supabase init failed" }, { status: 500 })
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
      return NextResponse.json({ error: "Failed to register session" }, { status: 500 })
    }

    return NextResponse.json({
      sessionId,
      message: "Session started successfully",
    })
  } catch (error) {
    console.error("❌ Error general al iniciar sesión:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
