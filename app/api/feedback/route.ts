import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { trackEvent } from "@/lib/analytics"

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
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { createClient } = await import("@supabase/supabase-js")

      const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY || "")

      const { error } = await supabase.from("user_feedback").insert([enhancedFeedback])

      if (error) {
        console.error("Error guardando feedback en Supabase:", error)
        // Continuar de todos modos para no perder el feedback
      }
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
    console.error("Error procesando feedback:", error)
    return NextResponse.json({ error: "Error al procesar el feedback" }, { status: 500 })
  }
}
