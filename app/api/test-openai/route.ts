import { NextResponse } from "next/server"
import { OpenAI } from "openai"

export const runtime = "nodejs"
export const maxDuration = 30

export async function GET(req: Request) {
  try {
    // Verificar que la API key esté configurada
    if (!process.env.OPENAI_API_KEY) {
      console.error("ERROR: OPENAI_API_KEY no está configurada")
      return NextResponse.json(
        {
          success: false,
          error: "API key no configurada",
          message: "La API key de OpenAI no está configurada en las variables de entorno.",
        },
        { status: 500 },
      )
    }

    // Inicializar OpenAI con la API key
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    // Hacer una solicitud simple para verificar que la API funciona
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "Eres un asistente útil." },
        { role: "user", content: "Hola, ¿puedes responder con 'La API de OpenAI está funcionando correctamente'?" },
      ],
      temperature: 0.7,
      max_tokens: 100,
    })

    // Extraer la respuesta
    const response = completion.choices[0].message.content || "Sin respuesta"

    // Devolver la respuesta
    return NextResponse.json({
      success: true,
      message: "Prueba de OpenAI completada con éxito",
      response: response,
      apiKey: process.env.OPENAI_API_KEY
        ? "Configurada (primeros 4 caracteres: " + process.env.OPENAI_API_KEY.substring(0, 4) + "...)"
        : "No configurada",
    })
  } catch (error: any) {
    console.error("Error en test-openai:", error)

    return NextResponse.json(
      {
        success: false,
        error: error.message || "Error desconocido",
        code: error.code || "unknown",
        type: error.type || "unknown",
        status: error.status || 500,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}
