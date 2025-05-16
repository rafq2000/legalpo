import { NextResponse } from "next/server"
import { OpenAI } from "openai"

export const runtime = "nodejs"
export const maxDuration = 15

export async function GET(req: Request) {
  try {
    // Inicializar OpenAI
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    // Llamar a la API de OpenAI con gpt-4-turbo
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        {
          role: "system",
          content: "Eres un asistente útil y conciso.",
        },
        {
          role: "user",
          content: "Hola, ¿puedes confirmar que la conexión a OpenAI funciona correctamente?",
        },
      ],
      temperature: 0.7,
      max_tokens: 100,
    })

    const response = completion.choices[0].message.content || "No se pudo obtener respuesta."

    return NextResponse.json({
      status: "success",
      message: "Conexión a OpenAI establecida correctamente",
      response,
      model: "gpt-4-turbo",
    })
  } catch (error: any) {
    console.error("Error al conectar con OpenAI:", error)
    return NextResponse.json(
      {
        status: "error",
        message: "Error al conectar con OpenAI",
        error: error.message,
      },
      { status: 500 },
    )
  }
}
