import { NextResponse } from "next/server"
import { OpenAI } from "openai"
import { normativaFamiliar } from "@/lib/normativa-familiar"

export const runtime = "nodejs"
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages, userId = "anonymous" } = await req.json()

    // Inicializar OpenAI
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    // Preparar el sistema de mensajes con el contexto de leyes sobre familia
    const systemMessage = {
      role: "system",
      content: `Eres un asistente legal especializado en derecho de familia en Chile. Proporciona respuestas precisas y útiles basadas en la legislación chilena vigente.
      
      Utiliza la siguiente información como referencia:
      
      ${normativaFamiliar}
      
      INSTRUCCIONES CRÍTICAS SOBRE REDPA Y REBAJA DE PENSIÓN:
      
      1. Cuando te pregunten sobre rebaja de pensión estando inscrito en el REDPA, SIEMPRE debes responder que según el artículo 1, inciso tercero de la Ley 14.908 actualizada al 31 de mayo de 2023, el tribunal DEBE DECLARAR INADMISIBLE la demanda de rebaja o cese de pensión si la persona está inscrita en el REDPA.
      
      2. Debes ser ABSOLUTAMENTE CLARO que la demanda NO PASARÁ LA ADMISIBILIDAD, es decir, será rechazada de plano sin entrar a conocer el fondo del asunto.
      
      3. La única excepción es si se presentan "antecedentes calificados", pero debes enfatizar que estos deben ser EXTRAORDINARIOS y DEBIDAMENTE JUSTIFICADOS.
      
      4. Debes recomendar SIEMPRE que primero se pague la deuda o se llegue a un acuerdo de pago según el artículo 26 para salir del REDPA antes de intentar demandar la rebaja.
      
      Instrucciones generales:
      1. Responde de manera clara y en lenguaje sencillo, evitando jerga legal innecesaria.
      2. Cita las leyes específicas cuando sea relevante.
      3. Si no estás seguro de algo, indícalo claramente y sugiere consultar con un abogado especializado.
      4. No inventes información legal.
      5. Mantén tus respuestas concisas y directas.
      6. Cuando sea apropiado, menciona los plazos legales relevantes.
      7. Responde en español.`,
    }

    // Verificar si la consulta es sobre rebaja de pensión estando en REDPA
    const isAboutREDPAAndRebaja = messages.some((msg: any) => {
      const content = msg.content.toLowerCase()
      return (
        content.includes("redpa") &&
        (content.includes("rebaja") || content.includes("reducir pensión") || content.includes("bajar pensión"))
      )
    })

    // Si es sobre REDPA y rebaja, añadir mensaje de sistema adicional
    if (isAboutREDPAAndRebaja) {
      systemMessage.content += `
      
      ATENCIÓN: La consulta es sobre rebaja de pensión estando en el REDPA. 
      DEBES responder que según el artículo 1, inciso tercero de la Ley 14.908 actualizada, 
      el tribunal DEBE DECLARAR INADMISIBLE la demanda. NO hay interpretación alternativa posible.
      La demanda NO PASARÁ LA ADMISIBILIDAD si la persona está inscrita en el REDPA.`
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
      temperature: 0.3, // Temperatura más baja para respuestas más deterministas
      max_tokens: 1000,
    })

    let response = completion.choices[0].message.content || "Lo siento, no pude generar una respuesta."

    // Si es sobre REDPA y rebaja, verificar que la respuesta contenga la información crítica
    if (isAboutREDPAAndRebaja && !response.toLowerCase().includes("inadmisible")) {
      response = `IMPORTANTE: Según el artículo 1, inciso tercero de la Ley 14.908 (actualizada al 31 de mayo de 2023), el tribunal DEBE DECLARAR INADMISIBLE la demanda de rebaja o cese de pensión si la persona está inscrita en el REDPA. Esto significa que su demanda será RECHAZADA DE PLANO sin entrar a conocer el fondo del asunto.\n\n${response}`
    }

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error en chat-familia:", error)
    return NextResponse.json(
      {
        response:
          "Lo siento, ha ocurrido un error al procesar tu consulta. Por favor, intenta nuevamente en unos momentos.",
      },
      { status: 500 },
    )
  }
}
