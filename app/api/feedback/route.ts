import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { trackEvent } from "@/lib/analytics"
import { sendEmail } from "@/lib/email-service"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { type, quickRating, detailedRating, comment, serviceUsed, userId, userType, path } = data

    // Validar datos mínimos
    if (!serviceUsed || !path) {
      return NextResponse.json({ success: false, error: "Datos incompletos" }, { status: 400 })
    }

    // Verificar sesión usando getToken en lugar de getServerSession con authOptions
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    const userEmail = token?.email || null

    // Añadir información de la sesión si está disponible
    const enhancedFeedback = {
      ...data,
      userId: userEmail || data.userId || "anonymous",
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

    // Enviar notificación por correo
    const emailResult = await sendEmail({
      subject: `Nueva retroalimentación en ${serviceUsed}`,
      html: `
        <h1>Nueva retroalimentación recibida</h1>
        <p><strong>Servicio:</strong> ${serviceUsed}</p>
        <p><strong>Tipo:</strong> ${type || "No especificado"}</p>
        <p><strong>Calificación rápida:</strong> ${quickRating || "No proporcionada"}</p>
        <p><strong>Calificación detallada:</strong> ${detailedRating || "No proporcionada"}</p>
        <p><strong>Comentario:</strong> ${comment || "No proporcionado"}</p>
        <p><strong>Usuario:</strong> ${userId || "Anónimo"}</p>
        <p><strong>Tipo de usuario:</strong> ${userType || "No especificado"}</p>
        <p><strong>Página:</strong> ${path}</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
      `,
    })

    // Registrar evento de analítica
    trackEvent("feedback_received", {
      feedbackType: enhancedFeedback.type,
      serviceUsed: enhancedFeedback.serviceUsed,
      rating: enhancedFeedback.quickRating || enhancedFeedback.detailedRating,
      userType: token ? "registered" : "anonymous",
    })

    return NextResponse.json({
      success: true,
      emailSent: emailResult.success,
    })
  } catch (error) {
    console.error("Error al procesar feedback:", error)
    return NextResponse.json({ success: false, error: "Error interno del servidor" }, { status: 500 })
  }
}
