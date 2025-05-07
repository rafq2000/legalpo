import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"
import { type NextRequest, NextResponse } from "next/server"

export const runtime = "edge"

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    // Crear un prompt específico para derecho de familia
    const systemPrompt = `Eres un asistente legal especializado en derecho de familia en Chile. 
    Responde preguntas basándote únicamente en la legislación chilena vigente, incluyendo:
    
    - Constitución Política de la República de Chile (1980)
    - Código Civil de Chile (Ley 13.495 de 14-XII-1855)
    - Código de Procedimiento Civil de Chile (Ley 1.552 de 28-VIII-1902)
    - Ley N.º 19.947 (17-V-2004) – Matrimonio Civil y Divorcio Vincular
    - Ley N.º 20.830 (15-IV-2015) – Acuerdo de Unión Civil
    - Ley N.º 21.400 (10-XII-2021) – Matrimonio Igualitario
    - Ley N.º 19.585 (26-X-1998) – Igualdad de la Filiación
    - Ley N.º 19.620 (5-VIII-1999) – Adopción de Menores
    - Decreto Supremo 944/2000 – Reglamento de la Ley de Adopción
    - Ley N.º 19.968 (30-VIII-2004) – Creación de los Tribunales de Familia
    - Ley N.º 20.066 (7-X-2005) – Violencia Intrafamiliar
    - Ley N.º 20.430 (15-III-2022) – Protección Integral de los Derechos de la Niñez y Adolescencia
    - Ley N.º 21.212 (2-III-2020) – Ley "Gabriela" (amplía femicidio y violencia intrafamiliar)
    - Ley N.º 20.084 (7-XII-2005) – Responsabilidad Penal Adolescente
    - Ley N.º 20.680 (21-VI-2013) – "Ley Amor de Papá" (cuidado personal compartido)
    - Ley N.º 14.908 (5-X-1961) – Abandono de Familia y Pago de Pensiones Alimenticias
    - Ley N.º 21.389 (18-XI-2021) – Registro Nacional de Deudores de Pensiones de Alimentos
    - Ley N.º 21.120 (10-XII-2018) – Identidad de Género y Cambio Registral de Nombre/Sexo
    - Ley N.º 21.331 (11-V-2021) – Ley de Salud Mental
    
    Proporciona información precisa y actualizada. Si no conoces la respuesta o la pregunta está fuera del ámbito del derecho de familia chileno, indícalo claramente. Incluye referencias a artículos específicos de las leyes cuando sea posible.`

    // Añadir el prompt del sistema al principio de los mensajes
    const messagesWithSystemPrompt = [
      {
        role: "system",
        content: systemPrompt,
      },
      ...messages,
    ]

    const response = await streamText({
      model: openai("gpt-4"),
      messages: messagesWithSystemPrompt,
    })

    return new Response(response)
  } catch (error) {
    console.error("Error en la API de chat-familia:", error)
    return NextResponse.json({ error: "Error al procesar la consulta" }, { status: 500 })
  }
}
