import { NextResponse } from "next/server"
import { OpenAI } from "openai"
import { normativaDeudas } from "@/lib/normativa-deudas"
import { openAIErrorHandler } from "@/lib/openai-error-handler"
import { ResponseCacheService } from "@/lib/response-cache-service"

export const runtime = "nodejs"
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages, userId = "anonymous" } = await req.json()

    // Verificar que hay mensajes
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ response: "No se recibió ninguna consulta válida." }, { status: 400 })
    }

    const userQuery = messages[0].content

    // Intentar obtener respuesta de la caché
    const cacheService = new ResponseCacheService()
    const cachedResponse = await cacheService.getResponse(userQuery)

    if (cachedResponse) {
      console.log("Respuesta obtenida de caché")
      return NextResponse.json({
        response: cachedResponse,
        cached: true,
      })
    }

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

    // Inicializar OpenAI
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    // Preparar el sistema de mensajes con el contexto de normativa sobre deudas
    const systemMessage = {
      role: "system",
      content: `Eres un asistente legal especializado en deudas y cobranzas en Chile. Proporciona respuestas precisas y útiles basadas en la legislación chilena vigente.
      
      Utiliza la siguiente información como referencia:
      
      ${normativaDeudas}
      
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

    // Llamar a la API de OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: apiMessages,
      temperature: 0.7,
      max_tokens: 1000,
    })

    const response = completion.choices[0].message.content || "Lo siento, no pude generar una respuesta."

    // Guardar en caché
    await cacheService.cacheResponse(userQuery, response, userId, "openai")

    return NextResponse.json({ response })
  } catch (error: any) {
    console.error("Error en chat-deudas:", error)

    // Usar el manejador de errores específico para OpenAI
    const errorMessage = openAIErrorHandler(error)

    return NextResponse.json({ response: errorMessage }, { status: 500 })
  }
}
