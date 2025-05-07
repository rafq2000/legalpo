import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { analyticsService } from "@/lib/analytics-service"
import { authOptions } from "@/lib/auth"

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    const data = await req.json()

    // Verificar datos mínimos requeridos
    if (!data.queryText) {
      return NextResponse.json({ error: "Texto de consulta requerido" }, { status: 400 })
    }

    // Usar el ID de usuario de la sesión si está disponible
    const userId = session?.user?.id || data.userId || null

    // Registrar consulta a abogado
    const success = await analyticsService.trackLawyerQuery({
      userId,
      sessionId: data.sessionId,
      queryText: data.queryText,
      documentId: data.documentId,
      responseTime: data.responseTime || 0,
      wasHelpful: data.wasHelpful,
    })

    if (!success) {
      throw new Error("Error al registrar consulta a abogado")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error en track-lawyer-query:", error)
    }
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
}
