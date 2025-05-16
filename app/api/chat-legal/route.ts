import { NextResponse } from "next/server"
import { OpenAI } from "openai"

export const runtime = "nodejs"
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages, userId = "anonymous" } = await req.json()

    // Inicializar OpenAI
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    // Preparar el sistema de mensajes con el contexto legal general
    const systemMessage = {
      role: "system",
      content: `Eres un asistente legal especializado en derecho chileno. Proporciona respuestas precisas y útiles basadas en la legislación chilena vigente.
      
      Instrucciones:
      1. Responde de manera clara y en lenguaje sencillo, evitando jerga legal innecesaria.
      2. Cita las leyes específicas cuando sea relevante.
      3. Si no estás seguro de algo, indícalo claramente y sugiere consultar con un abogado especializado.
      4. No inventes información legal.
      5. Mantén tus respuestas concisas y directas.
      6. Cuando sea apropiado, menciona los plazos legales relevantes.
      7. Responde en español.`,
    }

    // Combinar el mensaje del sistema con los mensajes del usuario
    const apiMessages = [
      systemMessage,
      ...messages.map((message: any) => ({
        role: message.role,
        content: message.content,
      })),
    ]

    // Llamar a la API de OpenAI con gpt-4-turbo
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: apiMessages,
      temperature: 0.7,
      max_tokens: 1000,
    })

    const response = completion.choices[0].message.content || "Lo siento, no pude generar una respuesta."

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error en chat-legal:", error)
    return NextResponse.json(
      {
        response:
          "Lo siento, ha ocurrido un error al procesar tu consulta. Por favor, intenta nuevamente en unos momentos.",
      },
      { status: 500 },
    )
  }
}
