import { NextResponse } from "next/server"
import { OpenAI } from "openai"

export const runtime = "nodejs"
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { query, userId = "anonymous" } = await req.json()

    if (!query || typeof query !== "string") {
      return NextResponse.json({
        response: "Por favor, proporciona una consulta válida.",
      })
    }

    // Inicializar OpenAI
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    console.log("Enviando consulta a OpenAI para deudas:", query.substring(0, 50))

    // Llamar a la API de OpenAI con un prompt simplificado
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Usando un modelo más rápido
      messages: [
        {
          role: "system",
          content:
            "Eres un asistente legal especializado en deudas y cobranzas en Chile. Proporciona respuestas precisas y útiles basadas en la legislación chilena vigente. Responde en español de forma clara y concisa.",
        },
        {
          role: "user",
          content: query,
        },
      ],
      temperature: 0.7,
      max_tokens: 800,
    })

    const response = completion.choices[0].message.content || "Lo siento, no pude generar una respuesta."

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error en chat-deudas-directo:", error)
    return NextResponse.json(
      {
        response:
          "Lo siento, ha ocurrido un error al procesar tu consulta. Por favor, intenta nuevamente en unos momentos.",
      },
      { status: 500 },
    )
  }
}
