import { NextResponse } from "next/server"
import { getSupabaseClient } from "@/lib/supabase-client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    // Obtener datos de la solicitud
    const data = await request.json()
    const { path, title, referrer } = data

    // Obtener sesión del usuario
    const session = await getServerSession(authOptions)
    const userId = session?.user?.id

    // Obtener ID de sesión
    const sessionId = cookies().get("session_id")?.value
    if (!sessionId) {
      return NextResponse.json({ error: "No active session" }, { status: 400 })
    }

    // Inicializar Supabase
    const supabase = await getSupabaseClient()
    if (!supabase) {
      console.error("❌ Supabase client not available")
      return NextResponse.json({ error: "Supabase init failed" }, { status: 500 })
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
      return NextResponse.json({ error: "Failed to register page view" }, { status: 500 })
    }

    return NextResponse.json({
      message: "Page view registered successfully",
    })
  } catch (error) {
    console.error("❌ Error general al registrar vista de página:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
