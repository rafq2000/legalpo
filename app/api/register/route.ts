import { NextResponse } from "next/server"
import { getSupabaseClient } from "@/lib/supabase-client"
import { sendEmail } from "@/lib/email-service"

export async function POST(req: Request) {
  try {
    // Verificar límites de usuarios
    const maxUsers = Number.parseInt(process.env.MAX_USERS || "0", 10)
    const maxDailyUsers = Number.parseInt(process.env.MAX_DAILY_USERS || "0", 10)

    // Obtener datos del usuario
    const { email, name } = await req.json()

    if (!email || !name) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 })
    }

    // Verificar cliente de Supabase
    const supabase = getSupabaseClient()
    if (!supabase) {
      return NextResponse.json({ error: "Servicio no disponible temporalmente" }, { status: 503 })
    }

    // Verificar si el usuario ya existe
    const { data: existingUser } = await supabase.from("users").select("id").eq("email", email).single()

    if (existingUser) {
      return NextResponse.json({ error: "El usuario ya existe" }, { status: 409 })
    }

    // Verificar límites de usuarios si están configurados
    if (maxUsers > 0) {
      const { count } = await supabase.from("users").select("id", { count: "exact", head: true })

      if (count !== null && count >= maxUsers) {
        return NextResponse.json({ error: "Límite de usuarios alcanzado" }, { status: 403 })
      }
    }

    // Verificar límites diarios si están configurados
    if (maxDailyUsers > 0) {
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      const { count } = await supabase
        .from("users")
        .select("id", { count: "exact", head: true })
        .gte("created_at", today.toISOString())

      if (count !== null && count >= maxDailyUsers) {
        return NextResponse.json({ error: "Límite diario de registros alcanzado" }, { status: 403 })
      }
    }

    // Registrar usuario
    const { data: newUser, error } = await supabase.from("users").insert([{ email, name }]).select().single()

    if (error) {
      throw new Error(`Error al registrar usuario: ${error.message}`)
    }

    // Enviar email de bienvenida (de forma segura)
    await sendEmail({
      to: email,
      subject: "Bienvenido a nuestra plataforma",
      html: `<p>Hola ${name}, gracias por registrarte.</p>`,
    }).catch((error) => {
      console.warn("Error al enviar email de bienvenida:", error)
      // No fallamos la operación si el email falla
    })

    return NextResponse.json({
      success: true,
      user: { id: newUser.id, email: newUser.email, name: newUser.name },
    })
  } catch (error: any) {
    console.error("Error en registro:", error)
    return NextResponse.json({ error: "Error al procesar la solicitud", details: error.message }, { status: 500 })
  }
}
