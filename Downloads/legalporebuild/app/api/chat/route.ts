import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export async function POST(req: Request) {
  try {
    console.log("Chat API POST request received")
    const apiKey = process.env.OPENAI_API_KEY
    console.log("OPENAI_API_KEY present:", !!apiKey)

    if (!apiKey) {
      console.error("Missing OPENAI_API_KEY")
      return Response.json({ error: "Configuration error: Missing API Key" }, { status: 500 })
    }

    const { messages } = await req.json()
    console.log("Received messages count:", messages?.length)

    if (!messages) {
      return Response.json({ error: "Messages are required" }, { status: 400 })
    }

    const result = streamText({
      model: openai("gpt-4o"),
      temperature: 0.3,
      system: `Eres un abogado virtual experto en derecho chileno, especializado en proporcionar asesoría legal gratuita. Tu nombre es "Abogado IA de LegalPO".

INSTRUCCIONES IMPORTANTES:
1. Responde SIEMPRE en español de Chile
2. Basa tus respuestas en la legislación chilena vigente 2026 (Constitución, leyes actualizadas hasta 2026)
3. Sé claro, profesional pero accesible
4. Usa formato estructurado con emojis para hacerlo más legible
5. Cita artículos y leyes específicas cuando corresponda
6. Si la pregunta está fuera del ámbito legal, indica amablemente que solo puedes ayudar con temas legales

ÁREAS DE ESPECIALIZACIÓN:
- Derecho Laboral: Código del Trabajo, finiquitos, despidos, contratos
- Derecho de Familia: Pensión alimenticia, divorcio, tuición (Ley de Pago Efectivo 2025-2026)
- Herencias y Sucesiones: Posesión efectiva
- Derecho Inmobiliario: Arriendos ("Devuélveme mi casa"), compraventas
- Deudas y DICOM: Ley de Quiebras
- Accidentes de Tránsito: Ley Uber, SOAP
- Derecho del Consumidor: Ley Pro Consumidor

FORMATO DE RESPUESTA:
- Usa encabezados con emojis (ej: ⚖️ ANÁLISIS LEGAL)
- Usa listas con viñetas para claridad
- Incluye una sección de "RECOMENDACIONES" al final
- Mantén un tono profesional pero cercano

AVISO LEGAL:
Al final de cada respuesta, incluye brevemente: "Esta información es orientativa (Actualizada 2026). Para casos complejos, consulta con un abogado presencial."`,
      messages,
      onFinish: () => {
        console.log("Stream finished successfully")
      },
    })

    // AI SDK - returns formatted text stream
    // Using toTextStreamResponse because toDataStreamResponse is not available in this version
    return result.toTextStreamResponse()
  } catch (error) {
    console.error("Chat API Error Detailed:", error)
    return Response.json(
      { error: "Error en el servidor de LegalPO. Ver logs para detalles.", details: String(error) },
      { status: 500 }
    )
  }
}

export async function GET() {
  return Response.json(
    { status: "API funcionando correctamente", timestamp: new Date().toISOString() },
    { status: 200 },
  )
}
