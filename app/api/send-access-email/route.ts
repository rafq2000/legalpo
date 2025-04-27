import { NextResponse } from "next/server"
import { Resend } from "resend"
import { createClient } from "@supabase/supabase-js"

const resend = new Resend(process.env.RESEND_API_KEY)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error("Faltan las variables de entorno SUPABASE_URL o SUPABASE_SERVICE_KEY.")
  throw new Error("Faltan las variables de entorno SUPABASE_URL o SUPABASE_SERVICE_KEY.")
}

const supabase = createClient(supabaseUrl, supabaseKey)

const MAX_DAILY_USERS = Number.parseInt(process.env.MAX_DAILY_USERS || "50")
const MAX_WEEKLY_USERS = Number.parseInt(process.env.MAX_USERS || "200")

async function checkDailyLimit() {
  const today = new Date().toISOString().slice(0, 10)
  const { data, error } = await supabase.from("daily_count").select("count").eq("date", today).single()

  if (error) {
    console.error("Error al verificar el límite diario:", error)
    return false
  }

  return data ? data.count < MAX_DAILY_USERS : true
}

async function checkWeeklyLimit() {
  const today = new Date()
  const dayOfWeek = today.getDay() // 0 (Domingo) to 6 (Sábado)
  const startDate = new Date(today)
  startDate.setDate(today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)) // Ajustar a Lunes

  const startDateStr = startDate.toISOString().slice(0, 10)

  const { data, error } = await supabase.from("weekly_count").select("count").eq("start_date", startDateStr).single()

  if (error) {
    console.error("Error al verificar el límite semanal:", error)
    return false
  }

  return data ? data.count < MAX_WEEKLY_USERS : true
}

async function incrementDailyCount() {
  const today = new Date().toISOString().slice(0, 10)
  const { data, error } = await supabase
    .from("daily_count")
    .upsert({ date: today, count: 1 }, { onConflict: "date" })
    .select()
    .single()

  if (error) {
    console.error("Error al incrementar el contador diario:", error)
    return false
  }

  return true
}

async function incrementWeeklyCount() {
  const today = new Date()
  const dayOfWeek = today.getDay() // 0 (Domingo) to 6 (Sábado)
  const startDate = new Date(today)
  startDate.setDate(today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)) // Ajustar a Lunes

  const startDateStr = startDate.toISOString().slice(0, 10)

  const { data, error } = await supabase
    .from("weekly_count")
    .upsert({ start_date: startDateStr, count: 1 }, { onConflict: "start_date" })
    .select()
    .single()

  if (error) {
    console.error("Error al incrementar el contador semanal:", error)
    return false
  }
  return true
}

async function sendAccessEmail(email: string) {
  try {
    await resend.emails.send({
      from: "contacto@legalpo.cl",
      to: email,
      subject: "¡Ya puedes acceder a LegalPO!",
      html: `<p>Hola ${email},</p><p>¡Buenas noticias! Se ha liberado un espacio en LegalPO y ahora tienes acceso completo a nuestra plataforma.</p><p>Para comenzar, por favor visita legalpo.cl e inicia sesión con tu correo electrónico. Si es tu primera vez, tendrás que completar el proceso de registro con la contraseña que prefieras.</p><p>Tienes 24 horas para activar tu cuenta antes de que el espacio se libere para otro usuario en lista de espera.</p><p>Si tienes alguna pregunta, no dudes en contactarnos.</p><p>Saludos cordiales,</p><p>Equipo de LegalPO</p>`,
    })
    console.log("Correo de acceso enviado correctamente a", email)
    return true
  } catch (resendError) {
    console.error("Error al enviar correo de acceso:", resendError)
    return false
  }
}

async function removeFromWaitingList(email: string) {
  const { data, error } = await supabase.from("waiting_list").delete().eq("email", email).select().single()

  if (error) {
    console.error("Error al eliminar de la lista de espera:", error)
    return false
  }
  console.log("Eliminado de la lista de espera:", email)
  return true
}

export async function GET() {
  try {
    // 1. Check if there's anyone on the waiting list
    const { data: waitingUsers, error: waitingError } = await supabase
      .from("waiting_list")
      .select("email")
      .order("request_time", { ascending: true })
      .limit(1)

    if (waitingError) {
      console.error("Error al obtener usuarios de la lista de espera:", waitingError)
      return NextResponse.json({ error: "Error al obtener usuarios de la lista de espera" }, { status: 500 })
    }

    if (!waitingUsers || waitingUsers.length === 0) {
      console.log("No hay usuarios en la lista de espera.")
      return NextResponse.json({ message: "No hay usuarios en la lista de espera" }, { status: 200 })
    }

    const userEmail = waitingUsers[0].email

    // 2. Check if daily and weekly limits have been reached
    const isDailyLimitReached = !(await checkDailyLimit())
    const isWeeklyLimitReached = !(await checkWeeklyLimit())

    if (isDailyLimitReached || isWeeklyLimitReached) {
      console.log("Límite diario o semanal alcanzado. No se puede enviar el correo de acceso.")
      return NextResponse.json(
        { message: "Límite diario o semanal alcanzado. No se puede enviar el correo de acceso." },
        { status: 200 },
      )
    }

    // 3. Send access email
    const emailSent = await sendAccessEmail(userEmail)
    if (!emailSent) {
      return NextResponse.json({ error: "Error al enviar el correo de acceso." }, { status: 500 })
    }

    // 4. Increment daily and weekly counts
    const dailyIncremented = await incrementDailyCount()
    const weeklyIncremented = await incrementWeeklyCount()

    if (!dailyIncremented || !weeklyIncremented) {
      console.error("Error al incrementar los contadores diario o semanal.")
      return NextResponse.json({ error: "Error al incrementar los contadores diario o semanal." }, { status: 500 })
    }

    // 5. Remove user from waiting list
    const removedFromWaitingList = await removeFromWaitingList(userEmail)
    if (!removedFromWaitingList) {
      return NextResponse.json({ error: "Error al eliminar de la lista de espera." }, { status: 500 })
    }

    return NextResponse.json({ message: `Correo de acceso enviado a ${userEmail}` }, { status: 200 })
  } catch (error) {
    console.error("Error al procesar la solicitud:", error)
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
}

export const dynamic = "force-dynamic"
