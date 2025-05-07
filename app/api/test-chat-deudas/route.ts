import { NextResponse } from "next/server"
import { OpenAI } from "openai"

export const runtime = "nodejs"

export async function GET(req: Request) {
  try {
    // Inicializar OpenAI
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    // Mensaje de prueba
    const testMessages = [
      {
        role: "system",
        content: "Eres un asistente legal especializado en deudas en Chile. Responde de manera concisa y directa.",
      },
      {
        role: "user",
        content: "Me están cobrando deudas prescritas",
      },
    ]

    console.log("Enviando mensajes de prueba a OpenAI:", JSON.stringify(testMessages))

    // Llamar a la API de OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: testMessages,
      temperature: 0.7,
      max_tokens: 500,
    })

    const response = completion.choices[0].message.content || "Lo siento, no pude generar una respuesta."

    console.log("Respuesta de prueba recibida de OpenAI:", response)

    return NextResponse.json({
      success: true,
      response,
      openaiKey: process.env.OPENAI_API_KEY ? "Configurada" : "No configurada",
    })
  } catch (error) {
    console.error("Error en test-chat-deudas:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Error desconocido",
        openaiKey: process.env.OPENAI_API_KEY ? "Configurada" : "No configurada",
      },
      { status: 500 },
    )
  }
}
