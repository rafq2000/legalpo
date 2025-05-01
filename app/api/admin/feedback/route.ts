import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export async function GET(req: Request) {
  try {
    // Verificar autenticación y permisos usando getToken en lugar de getServerSession con authOptions
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    const url = new URL(req.url)
    const authKey = url.searchParams.get("key")
    const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com"

    // Verificar que sea un administrador o tenga la clave de autenticación
    if ((!token || token.email !== adminEmail) && authKey !== process.env.ADMIN_AUTH_KEY) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    // Obtener datos de feedback desde la base de datos
    // Aquí puedes usar Supabase, Prisma, o cualquier ORM/cliente que estés utilizando
    let feedbackData = []

    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { createClient } = await import("@supabase/supabase-js")

      const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY || "")

      const { data, error } = await supabase.from("user_feedback").select("*").order("timestamp", { ascending: false })

      if (error) {
        console.error("Error obteniendo feedback de Supabase:", error)
        return NextResponse.json({ error: "Error al obtener datos de feedback" }, { status: 500 })
      }

      feedbackData = data
    } else {
      // Datos de ejemplo si no hay base de datos configurada
      feedbackData = getMockFeedbackData()
    }

    return NextResponse.json(feedbackData)
  } catch (error) {
    console.error("Error procesando solicitud de feedback:", error)
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
}

// Función auxiliar para generar datos de ejemplo
function getMockFeedbackData() {
  const services = ["document-analysis", "contract-generator", "calculator", "chat", "general"]
  const paths = [
    "/analyze",
    "/contratos/general",
    "/contratos/arriendo",
    "/calculadora-finiquito",
    "/calculadora-pensiones",
    "/dudas-laborales",
    "/ask",
  ]
  const comments = [
    "Excelente servicio, muy útil para mi trabajo",
    "La interfaz es intuitiva pero podría mejorar la velocidad",
    "No encontré lo que buscaba",
    "Me gustaría que tuviera más opciones de personalización",
    "Muy completo, me ahorró mucho tiempo",
    "Algunas partes son confusas de entender",
    "El análisis fue muy preciso, gracias",
    "Necesita más ejemplos para entender mejor",
    "La calculadora me dio resultados diferentes a los que esperaba",
    "El chat respondió exactamente lo que necesitaba saber",
  ]

  return Array.from({ length: 50 }, (_, i) => ({
    id: `mock-${i}`,
    type: Math.random() > 0.5 ? "quick" : "detailed",
    quickRating: Math.random() > 0.3 ? "positive" : "negative",
    detailedRating: Math.floor(Math.random() * 5) + 1,
    comment: Math.random() > 0.4 ? comments[Math.floor(Math.random() * comments.length)] : "",
    serviceUsed: services[Math.floor(Math.random() * services.length)],
    userId: Math.random() > 0.5 ? `user${i}@example.com` : null,
    userType: Math.random() > 0.5 ? "registered" : "anonymous",
    path: paths[Math.floor(Math.random() * paths.length)],
    timestamp: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
  }))
}
