import { NextResponse } from "next/server"
import { leyesChile } from "@/lib/leyes-chile"
import { ResponseCacheService } from "@/lib/response-cache-service"
import { OpenAI } from "openai"

// Servicio de caché para respuestas
const cacheService = new ResponseCacheService()

export const runtime = "nodejs"

// Allow responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages, userId = "anonymous" } = await req.json()

    // Verificar si hay una respuesta en caché
    const cacheKey = `deudas:${JSON.stringify(messages)}`
    const cachedResponse = await cacheService.getResponse(cacheKey)

    if (cachedResponse) {
      return NextResponse.json({ response: cachedResponse })
    }

    // Inicializar OpenAI
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    // Preparar el sistema de mensajes con el contexto de leyes sobre deudas
    const systemMessage = {
      role: "system",
      content: `Eres un asistente legal especializado en deudas y cobranzas en Chile. Proporciona respuestas precisas y útiles basadas en la legislación chilena vigente.
      
      Utiliza la siguiente información como referencia:
      
      - Ley 20.720 de Reorganización y Liquidación (${leyesChile["Ley-20720_09-ENE-2014"].titulo})
      - Código Civil (${leyesChile["DFL-1_30-MAY-2000"].titulo}), artículo ${leyesChile["DFL-1_30-MAY-2000"].articulos["2515"]} sobre prescripción
      - Ley 21.484 sobre Protección de Deudores
      - Ley 19.496 sobre Protección de los Derechos de los Consumidores
      - Ley 18.010 sobre Operaciones de Crédito de Dinero
      
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

    // Guardar la respuesta en caché
    await cacheService.cacheResponse(cacheKey, response, userId, "deudas")

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error en chat-deudas:", error)
    return NextResponse.json(
      {
        response:
          "Lo siento, ha ocurrido un error al procesar tu consulta. Por favor, intenta nuevamente en unos momentos.",
      },
      { status: 500 },
    )
  }
}
