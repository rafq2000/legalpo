import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { createClient } from "@supabase/supabase-js"

export async function GET(req: Request) {
  try {
    // Verificar autenticación y permisos
    const session = await getServerSession(authOptions)
    const url = new URL(req.url)
    const authKey = url.searchParams.get("key")

    // Verificar que sea un administrador o tenga la clave de autenticación
    if ((!session || session.user?.email !== "admin@example.com") && authKey !== process.env.ADMIN_AUTH_KEY) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    // Obtener datos de feedback desde la base de datos
    let feedbackData = []

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY) {
      const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

      // Verificar si la tabla existe
      try {
        const { data: tableExists, error: tableError } = await supabase.from("user_feedback").select("id").limit(1)

        if (tableError) {
          console.error("Error verificando tabla de feedback:", tableError)
          throw new Error("La tabla de feedback no existe o no es accesible")
        }

        const { data, error } = await supabase
          .from("user_feedback")
          .select("*")
          .order("timestamp", { ascending: false })

        if (error) {
          console.error("Error obteniendo feedback de Supabase:", error)
          throw new Error(`Error al obtener datos de feedback: ${error.message}`)
        }

        feedbackData = data || []
      } catch (error) {
        console.error("Error accediendo a la tabla de feedback:", error)
        feedbackData = getMockFeedbackData()
      }
    } else {
      // Datos de ejemplo si no hay base de datos configurada
      feedbackData = getMockFeedbackData()
    }

    return NextResponse.json(feedbackData)
  } catch (error) {
    console.error("Error procesando solicitud de feedback:", error)
    // Devolver datos de ejemplo en caso de error
    return NextResponse.json(getMockFeedbackData())
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
    userId: Math.random() > 0.5 ? `usuario${i}@gmail.com` : null,
    userType: Math.random() > 0.5 ? "registered" : "anonymous",
    path: paths[Math.floor(Math.random() * paths.length)],
    timestamp: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
  }))
}

export const dynamic = "force-dynamic"
