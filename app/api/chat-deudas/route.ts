import { NextResponse } from "next/server"
import { OpenAI } from "openai"
import { openAIErrorHandler } from "@/lib/openai-error-handler"

export const runtime = "nodejs"
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages, userId = "anonymous" } = await req.json()

    // Inicializar OpenAI
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    // Preparar el sistema de mensajes con el contexto de leyes sobre deudas
    const systemMessage = {
      role: "system",
      content: `Eres un asistente legal especializado en deudas y cobranzas en Chile. Proporciona respuestas precisas y útiles basadas en la legislación chilena vigente.
      
      Utiliza la siguiente información como referencia:
      
      - Ley 20.720 de Reorganización y Liquidación
      - Código Civil, artículo 2515 sobre prescripción
      - Ley 19.496 sobre Protección de los Derechos de los Consumidores
      - Ley 18.010 sobre Operaciones de Crédito de Dinero
      - Ley 21.320 sobre Procedimiento de Cobranza
      
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

    console.log("Enviando consulta a OpenAI:", {
      model: "gpt-4",
      messageCount: apiMessages.length,
      firstUserMessage: apiMessages.find((m: any) => m.role === "user")?.content.substring(0, 50) + "...",
    })

    // Llamar a la API de OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: apiMessages,
      temperature: 0.7,
      max_tokens: 1000,
    })

    console.log("Respuesta recibida de OpenAI")

    const response = completion.choices[0].message.content || "Lo siento, no pude generar una respuesta."

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error en chat-deudas:", error)

    // Usar el manejador de errores de OpenAI si está disponible
    const errorMessage = openAIErrorHandler
      ? openAIErrorHandler(error)
      : "Lo siento, ha ocurrido un error al procesar tu consulta. Por favor, intenta nuevamente en unos momentos."

    return NextResponse.json({ response: errorMessage }, { status: 500 })
  }
}
