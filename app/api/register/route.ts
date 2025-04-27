import { NextResponse } from "next/server"
import { Resend } from "resend"
import { createClient } from "@supabase/supabase-js"

const resend = new Resend(process.env.RESEND_API_KEY)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY

if (!supabaseUrl || !supabaseKey) {
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

async function addToWaitingList(email: string) {
  // Get the current position in the waiting list
  const { count, error: countError } = await supabase.from("waiting_list").select("*", { count: "exact" })

  if (countError) {
    console.error("Error getting waiting list count:", countError)
    return { success: false, position: null }
  }

  const position = count + 1

  const { data, error } = await supabase.from("waiting_list").insert([{ email }]).select().single()

  if (error) {
    console.error("Error al agregar a la lista de espera:", error)
    return { success: false, position: null }
  }

  try {
    await resend.emails.send({
      from: "contacto@legalpo.cl",
      to: email,
      subject: "Has sido añadido a la lista de espera de LegalPO",
      html: `<p>Hola ${email},</p><p>Gracias por tu interés en LegalPO.</p><p>Actualmente hemos alcanzado nuestro límite diario de nuevos usuarios. Te hemos añadido a nuestra lista de espera en la posición ${position}.</p><p>Te notificaremos tan pronto como se libere un espacio y puedas acceder a nuestra plataforma.</p><p>Apreciamos tu paciencia y esperamos poder darte acceso muy pronto.</p><p>Saludos cordiales,</p><p>Equipo de LegalPO</p>`,
    })
    console.log("Correo de lista de espera enviado correctamente")
  } catch (resendError) {
    console.error("Error al enviar correo de lista de espera:", resendError)
  }
  return { success: true, position: position }
}

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    const isDailyLimitReached = !(await checkDailyLimit())
    const isWeeklyLimitReached = !(await checkWeeklyLimit())

    if (isDailyLimitReached || isWeeklyLimitReached) {
      const { success, position } = await addToWaitingList(email)
      if (!success) {
        return NextResponse.json({ error: "No se pudo agregar a la lista de espera." }, { status: 500 })
      }

      return NextResponse.json(
        {
          message: `Actualmente hemos alcanzado nuestra capacidad máxima. ¡Has sido añadido a la lista de espera y te notificaremos cuando un cupo esté disponible! Tu posición en la lista de espera es: ${position}`,
          waitingList: true,
        },
        { status: 200 },
      )
    }

    // Simulate user creation
    console.log("Simulando la creación del usuario:", email)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const dailyIncremented = await incrementDailyCount()
    const weeklyIncremented = await incrementWeeklyCount()

    if (!dailyIncremented || !weeklyIncremented) {
      return NextResponse.json({ error: "No se pudieron incrementar los contadores." }, { status: 500 })
    }

    try {
      await resend.emails.send({
        from: "contacto@legalpo.cl",
        to: email,
        subject: "Bienvenido a LegalPO - Registro exitoso",
        html: `<p>Hola ${email},</p><p>¡Bienvenido a LegalPO! Tu registro ha sido completado exitosamente.</p><p>Ya puedes acceder a nuestra plataforma y comenzar a utilizar nuestros servicios legales con inteligencia artificial.</p><p>Para ingresar, simplemente visita legalpo.cl e inicia sesión con tu correo electrónico y contraseña.</p><p>Si tienes alguna pregunta, no dudes en contactarnos respondiendo a este correo.</p><p>Saludos cordiales,</p><p>Equipo de LegalPO</p>`,
      })
      console.log("Correo de bienvenida enviado correctamente")
    } catch (resendError) {
      console.error("Error al enviar correo de bienvenida:", resendError)
    }

    return NextResponse.json({ message: "¡Registro exitoso!", success: true }, { status: 200 })
  } catch (error) {
    console.error("Error de registro:", error)
    return NextResponse.json({ error: "Registro fallido." }, { status: 500 })
  }
}

export const dynamic = "force-dynamic"
