import { NextResponse } from "next/server"
import OpenAI from "openai"

// Usar la variable de entorno para la API key
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

export async function GET() {
  try {
    // Verificar si la API key está disponible
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          error: "API key de OpenAI no configurada.",
        },
        { status: 500 },
      )
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

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
