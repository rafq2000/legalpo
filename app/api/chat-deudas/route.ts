import { NextResponse } from "next/server"
import { OpenAI } from "openai"

export const runtime = "nodejs"
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages, userId = "anonymous" } = await req.json()

    console.log("Recibida solicitud en chat-deudas:", {
      userId,
      messageCount: messages.length,
      lastMessage: messages[messages.length - 1]?.content?.substring(0, 50) + "...",
    })

    // Verificar que la API key esté configurada
    if (!process.env.OPENAI_API_KEY) {
      console.error("ERROR: OPENAI_API_KEY no está configurada")
      return NextResponse.json(
        {
          response: "Error de configuración del servidor. Por favor, contacta al administrador.",
        },
        { status: 500 },
      )
    }

    // Inicializar OpenAI con la API key
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    // Mensaje del sistema para el contexto
    const systemMessage = {
      role: "system",
      content: `Eres un asistente legal especializado en deudas y cobranzas en Chile. Proporciona respuestas precisas y útiles basadas en la legislación chilena vigente.

      Instrucciones:
      1. Responde de manera clara y en lenguaje sencillo, evitando jerga legal innecesaria.
      2. Cita las leyes específicas cuando sea relevante.
      3. Si no estás seguro de algo, indícalo claramente y sugiere consultar con un abogado especializado.
      4. No inventes información legal.
      5. Mantén tus respuestas concisas y directas.
      6. Cuando sea apropiado, menciona los plazos legales relevantes.
      7. Responde en español.
      8. Siempre pregunta al usuario qué tipo de deuda tiene (ej: tarjetas de crédito, préstamos, etc.) y si ha recibido notificaciones judiciales. Esto te ayudará a dar una respuesta más precisa.`,
    }

    // Preparar los mensajes para la API
    const apiMessages = [
      systemMessage,
      ...messages.map((message: any) => ({
        role: message.role,
        content: message.content,
      })),
    ]

    console.log("Enviando solicitud a OpenAI:", {
      model: "gpt-4",
      messageCount: apiMessages.length,
      systemMessageLength: systemMessage.content.length,
      firstUserMessage: apiMessages.find((m: any) => m.role === "user")?.content?.substring(0, 50) + "...",
    })

    // Llamar a la API de OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: apiMessages,
      temperature: 0.7,
      max_tokens: 1000,
    })

    console.log("Respuesta recibida de OpenAI:", {
      status: "success",
      responseLength: completion.choices[0].message.content?.length || 0,
    })

    // Extraer la respuesta
    const response = completion.choices[0].message.content || "Lo siento, no pude generar una respuesta."

    // Devolver la respuesta
    return NextResponse.json({ response })
  } catch (error: any) {
    console.error("Error en chat-deudas:", error)

    // Manejar errores específicos de OpenAI
    if (error.name === "APIError") {
      console.error("OpenAI API Error:", {
        status: error.status,
        message: error.message,
        code: error.code,
        type: error.type,
      })

      if (error.code === "rate_limit_exceeded") {
        return NextResponse.json(
          {
            response: "Estamos experimentando alta demanda. Por favor, intenta nuevamente en unos minutos.",
          },
          { status: 429 },
        )
      }

      if (error.code === "context_length_exceeded") {
        return NextResponse.json(
          {
            response: "Tu consulta es demasiado extensa. Por favor, intenta con una consulta más corta.",
          },
          { status: 413 },
        )
      }
    }

    // Error genérico
    return NextResponse.json(
      {
        response:
          "Lo siento, ha ocurrido un error al procesar tu consulta. Por favor, intenta nuevamente en unos momentos.",
      },
      { status: 500 },
    )
  }
}
