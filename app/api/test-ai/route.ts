import { NextResponse } from "next/server"
import { checkAIAvailability, generateAIResponse } from "@/lib/ai-client"

export async function GET(req: Request) {
  try {
    // Verificar disponibilidad de los proveedores de IA
    const status = await checkAIAvailability()

    return NextResponse.json({
      status,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error al verificar los proveedores de IA:", error)

    return NextResponse.json(
      {
        error: `Error al verificar los proveedores de IA: ${error.message || "Error desconocido"}`,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

export async function POST(req: Request) {
  try {
    const { prompt, systemContext } = await req.json()

    if (!prompt) {
      return NextResponse.json(
        {
          error: "Se requiere un prompt",
        },
        { status: 400 },
      )
    }

    const response = await generateAIResponse(prompt, systemContext)

    return NextResponse.json({
      text: response.text,
      provider: response.provider,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error al generar respuesta:", error)

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
