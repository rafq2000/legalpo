import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { trackEvent } from "@/lib/analytics"
import { sendEmail } from "@/lib/email-service"

export async function POST(req: Request) {
  try {
    // Verificar sesión usando getToken en lugar de getServerSession con authOptions
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
    }

    // Aquí puedes guardar el feedback en tu base de datos
    // Por ejemplo, usando Supabase:
    let feedbackId = null
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { createClient } = await import("@supabase/supabase-js")

      const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY || "")

      const { data, error } = await supabase.from("user_feedback").insert([enhancedFeedback]).select()

      if (error) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Error guardando feedback en Supabase:", error)
        }
        // Continuar de todos modos para no perder el feedback
      } else if (data && data.length > 0) {
        feedbackId = data[0].id
      }
    }

    // Enviar notificación por email
    try {
      console.log("Enviando notificación de feedback por email...")

      const emailResult = await sendEmail({
        subject: `[FEEDBACK] Nuevo feedback recibido en LegalPO - ${enhancedFeedback.type}`,
        html: `
          <h2>Nuevo feedback recibido</h2>
          <p><strong>Tipo:</strong> ${enhancedFeedback.type}</p>
          <p><strong>Servicio:</strong> ${enhancedFeedback.serviceUsed || "No especificado"}</p>
          <p><strong>Valoración:</strong> ${enhancedFeedback.quickRating || enhancedFeedback.detailedRating || "No proporcionada"}</p>
          <p><strong>Comentario:</strong> ${enhancedFeedback.comment || "No proporcionado"}</p>
          <p><strong>Usuario:</strong> ${userEmail || "Anónimo"}</p>
          <p><strong>ID de feedback:</strong> ${feedbackId || "No disponible"}</p>
          <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
        `,
      })

      if (emailResult.success) {
        console.log(`Email de notificación de feedback enviado correctamente con ID: ${emailResult.id}`)
      } else {
        console.error("Error al enviar email de notificación de feedback:", emailResult.error)
      }
    } catch (emailError) {
      console.error("Excepción al enviar notificación de feedback por email:", emailError)
      // No interrumpimos el flujo si falla el envío de email
    }

    // Registrar evento de analítica
    trackEvent("feedback_received", {
      feedbackType: enhancedFeedback.type,
      serviceUsed: enhancedFeedback.serviceUsed,
      rating: enhancedFeedback.quickRating || enhancedFeedback.detailedRating,
      userType: token ? "registered" : "anonymous",
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error procesando feedback:", error)
    }
    return NextResponse.json({ error: "Error al procesar el feedback" }, { status: 500 })
  }
}
