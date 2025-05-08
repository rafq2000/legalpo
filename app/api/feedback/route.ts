import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { trackEvent } from "@/lib/analytics"
import { sendTelegramNotification } from "@/lib/telegram-service"

export async function POST(req: Request) {
  try {
    // Verificar sesión usando getToken
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    const userEmail = token?.email || null

    // Obtener datos del feedback
    const feedbackData = await req.json()

    // Validar datos mínimos requeridos
    if (!feedbackData.type) {
      return NextResponse.json({ error: "Datos de feedback incompletos" }, { status: 400 })
    }

    // Añadir información de la sesión si está disponible
    const enhancedFeedback = {
      ...feedbackData,
      userId: userEmail || feedbackData.userId || "anonymous",
      timestamp: new Date().toISOString(),
      created_at: new Date().toISOString(), // Para compatibilidad con Supabase
    }

    // Guardar en Supabase
    let feedbackId = null
    let supabaseError = null

    try {
      if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
        const { createClient } = await import("@supabase/supabase-js")

        const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY || "")

        const { data, error } = await supabase.from("user_feedback").insert([enhancedFeedback]).select()

        if (error) {
          console.error("Error guardando feedback en Supabase:", error)
          supabaseError = error.message
        } else if (data && data.length > 0) {
          feedbackId = data[0].id
        }
      }
    } catch (err) {
      console.error("Excepción al guardar en Supabase:", err)
      supabaseError = err instanceof Error ? err.message : "Error desconocido"
    }

    // Enviar notificación por Telegram
    let telegramResult = { success: false, error: "No se intentó enviar" }

    try {
      const telegramMessage = `
<b>🔔 Nueva sugerencia recibida</b>

<b>Servicio:</b> ${enhancedFeedback.serviceUsed || "General"}
<b>Tipo:</b> ${enhancedFeedback.type || "No especificado"}
<b>Valoración:</b> ${enhancedFeedback.quickRating || enhancedFeedback.detailedRating || "No proporcionada"}
<b>Comentario:</b> ${enhancedFeedback.comment || "No proporcionado"}
<b>Usuario:</b> ${enhancedFeedback.userId || "Anónimo"}
<b>Página:</b> ${enhancedFeedback.path || "No especificada"}
<b>Fecha:</b> ${new Date().toLocaleString()}
      `

      telegramResult = await sendTelegramNotification(telegramMessage)
    } catch (err) {
      console.error("Excepción al enviar notificación Telegram:", err)
      telegramResult = {
        success: false,
        error: err instanceof Error ? err.message : "Error desconocido",
      }
    }

    // Registrar evento de analítica
    try {
      trackEvent("feedback_received", {
        feedbackType: enhancedFeedback.type,
        serviceUsed: enhancedFeedback.serviceUsed,
        rating: enhancedFeedback.quickRating || enhancedFeedback.detailedRating,
        userType: token ? "registered" : "anonymous",
      })
    } catch (err) {
      console.error("Error al registrar evento de analítica:", err)
    }

    return NextResponse.json({
      success: true,
      feedbackId,
      telegramSent: telegramResult.success,
      supabaseError,
      telegramError: telegramResult.success ? null : telegramResult.error,
    })
  } catch (error) {
    console.error("Error procesando feedback:", error)
    return NextResponse.json(
      {
        error: "Error al procesar el feedback",
        details: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 },
    )
  }
}
