import { NextResponse } from "next/server"
import { generateVertexAIResponse, checkVertexAIAvailability } from "@/lib/vertex-ai-client"

// Endpoint para verificar la disponibilidad de Vertex AI
export async function GET(req: Request) {
  try {
    console.log("Verificando disponibilidad de Vertex AI...")
    const status = await checkVertexAIAvailability()

    return NextResponse.json({
      status,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error al verificar Vertex AI:", error)

    return NextResponse.json(
      {
        error: `Error al verificar Vertex AI: ${error.message || "Error desconocido"}`,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

// Endpoint para probar la generación de respuestas con Vertex AI
export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()

    if (!prompt) {
      return NextResponse.json({ error: "Se requiere un prompt" }, { status: 400 })
    }

    console.log("Generando respuesta con Vertex AI para prompt:", prompt)
    const response = await generateVertexAIResponse(prompt)

    return NextResponse.json({
      response,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error al generar respuesta con Vertex AI:", error)

    return NextResponse.json(
      {
        error: `Error al generar respuesta: ${error.message || "Error desconocido"}`,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

export const dynamic = "force-dynamic"
