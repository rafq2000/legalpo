import { NextResponse } from "next/server"
import OpenAI from "openai"

// Configuración de OpenAI con la API key proporcionada
const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null

export async function GET(req: Request) {
  try {
    // Check if OpenAI client is available
    if (!openai || !process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          error: "OPENAI_API_KEY no está configurada",
          status: "error",
        },
        { status: 503 },
      )
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: "Hola, ¿cómo estás?",
        },
      ],
    })

    return NextResponse.json({
      success: true,
      message: "API de OpenAI funcionando correctamente",
      response: completion.choices[0].message.content,
    })
  } catch (error) {
    console.error("Error al probar OpenAI:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Error al conectar con OpenAI. Verifica tu API key.",
      },
      { status: 500 },
    )
  }
}
