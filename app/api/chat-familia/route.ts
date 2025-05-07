import { streamText } from "ai"
import { normativaFamiliar } from "@/lib/normativa-familiar"
import { handleOpenAIError } from "@/lib/openai-error-handler"
import { ResponseCacheService } from "@/lib/response-cache-service"
import { openai } from "@ai-sdk/openai"

// Servicio de caché para respuestas
const cacheService = new ResponseCacheService()

export const runtime = "nodejs"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages, userId = "anonymous" } = await req.json()

    // Verificar si hay una respuesta en caché
    const cacheKey = `familia:${JSON.stringify(messages)}`
    const cachedResponse = await cacheService.getResponse(cacheKey)

    if (cachedResponse) {
      return new Response(JSON.stringify({ response: cachedResponse }), {
        headers: { "Content-Type": "application/json" },
      })
    }

    // Preparar el sistema de mensajes con el contexto de la normativa familiar
    const systemMessage = {
      role: "system",
      content: `Eres un asistente legal especializado en derecho de familia en Chile. Proporciona respuestas precisas y útiles basadas en la legislación chilena vigente.
      
      Utiliza la siguiente información como referencia:
      
      ${normativaFamiliar}
      
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
    const apiMessages = [systemMessage, ...messages]

    // Llamar a la API de OpenAI
    const response = streamText({
      model: openai("gpt-4o"),
      messages: apiMessages,
      system: systemMessage.content,
    })

    // Crear un stream de texto para la respuesta
    // const stream = OpenAIStream(response, {
    //   onCompletion: async (completion) => {
    //     // Guardar la respuesta en caché
    //     await cacheService.cacheResponse(cacheKey, completion, userId, "familia")
    //   },
    // })

    // Devolver la respuesta como streaming
    return response.toDataStreamResponse()
  } catch (error) {
    return handleOpenAIError(error)
  }
}
