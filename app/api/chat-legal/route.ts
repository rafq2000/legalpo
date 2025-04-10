import { NextResponse } from "next/server"
import OpenAI from "openai"
import { generateQwenResponse } from "@/lib/sambanova-service"

// Respuestas predefinidas para casos comunes (como fallback)
const RESPUESTAS = {
  DEUDAS_GENERAL: `
Entiendo que tienes deudas y no sabes qué hacer. Esta es una situación común y hay varias opciones que puedes considerar:

1. Evalúa tu situación financiera:
   - Haz un listado de todas tus deudas, montos y tasas de interés
   - Analiza tus ingresos y gastos mensuales
   - Identifica qué deudas son prioritarias (las de mayor interés)

2. Opciones para manejar tus deudas:
   - Repactación directa con el acreedor: Puedes negociar plazos más largos o tasas más bajas
   - Consolidación de deudas: Unificar varias deudas en un solo crédito con mejor tasa
   - Procedimiento Concursal de Renegociación (Ley 20.720): Si tus deudas superan 80 UF

3. Verifica la prescripción:
   - Las deudas pueden prescribir después de 5 años (acciones ejecutivas) o 10 años (acciones ordinarias)
   - La prescripción debe ser alegada en tribunales, no opera automáticamente

4. Busca asesoría profesional:
   - Corporación de Asistencia Judicial (gratuito)
   - SERNAC (para problemas con empresas)
   - Superintendencia de Insolvencia y Reemprendimiento

Recuerda que cada situación es única, y es importante buscar asesoría legal específica para tu caso.
`,

  DEFAULT: `
Lamento que estés pasando por esta situación. Para poder ayudarte mejor, necesito más detalles sobre tus deudas:

- ¿Qué tipo de deudas tienes? (tarjetas de crédito, préstamos bancarios, créditos de consumo)
- ¿Hace cuánto tiempo dejaste de pagar?
- ¿Has recibido notificaciones judiciales o visitas de empresas de cobranza?
- ¿Cuál es tu capacidad actual de pago?

Con esta información podré darte orientación más específica según la legislación chilena vigente.

Mientras tanto, te recomiendo:
1. No ignorar las comunicaciones de tus acreedores
2. Guardar toda la documentación relacionada con tus deudas
3. No comprometerte a pagos que no puedas cumplir
`,
}

// Configuración de OpenAI con la API key proporcionada
const openai = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null

// Determinar qué modelo usar (SambaNova o OpenAI)
const useSambaNova = process.env.SAMBANOVA_API_KEY ? true : false

export async function POST(req: Request) {
  try {
    const { messages, userId } = await req.json()

    // Verificar que messages es un array y tiene al menos un mensaje
    if (!Array.isArray(messages) || messages.length === 0) {
      throw new Error("Formato de mensajes inválido")
    }

    const userMessage = messages[messages.length - 1].content.toLowerCase()
    console.log("Procesando mensaje:", userMessage)

    // Determinar si es una consulta general sobre deudas
    const esConsultaGeneral =
      userMessage.includes("tengo deudas") &&
      (userMessage.includes("no se que hacer") ||
        userMessage.includes("no sé qué hacer") ||
        userMessage.includes("que puedo hacer") ||
        userMessage.includes("qué puedo hacer"))

    // Si es una consulta general, usar respuesta predefinida para evitar errores
    if (esConsultaGeneral) {
      return NextResponse.json({
        response: RESPUESTAS.DEUDAS_GENERAL,
        userId: userId || "anonymous-user",
      })
    }

    // Preparar el contexto legal
    const contextLegal = `
    Información legal chilena relevante:
    
    - Código Civil: La prescripción extintiva de deudas es de 5 años para acciones ejecutivas y 10 años para acciones ordinarias.
    
    - Ley 19.496 (Protección al Consumidor): Regula las gestiones de cobranza extrajudicial, prohibiendo el hostigamiento y estableciendo horarios permitidos (8:00 a 20:00 hrs en días hábiles).
    
    - Ley 20.720: Permite a personas con deudas superiores a 80 UF solicitar un Procedimiento Concursal de Renegociación.
    
    - Código de Procedimiento Civil: Solo se pueden embargar bienes que sean propiedad del deudor, no de terceros.
    `

    // Crear la conversación para el modelo
    const conversationHistory = messages.slice(0, -1).map((msg) => ({
      role: msg.role === "user" ? "user" : "assistant",
      content: msg.content,
    }))

    try {
      let aiResponse = ""

      // Intentar usar SambaNova si está disponible
      if (useSambaNova) {
        try {
          console.log("Usando modelo Qwen de SambaNova")
          const systemPrompt = `Eres un asistente legal especializado en deudas y cobranzas en Chile. 
Proporciona información precisa basada en la legislación chilena vigente.
Usa un tono profesional pero accesible.
Estructura tus respuestas de forma clara con secciones.
NO uses formato markdown con asteriscos (*) o almohadillas (#).
NO uses negritas, cursivas ni ningún tipo de formato especial.
Presenta la información en texto plano, usando párrafos y listas con guiones o números.
${contextLegal}`

          aiResponse = await generateQwenResponse(
            [...conversationHistory, { role: "user", content: userMessage }],
            systemPrompt,
          )
        } catch (sambanovaError) {
          console.error("Error con SambaNova, intentando con OpenAI:", sambanovaError)
          // Si falla SambaNova, intentar con OpenAI si está disponible
          if (!openai || !process.env.OPENAI_API_KEY) {
            throw new Error("No hay modelos de IA disponibles")
          }
        }
      }

      // Si no se usó SambaNova o falló, usar OpenAI
      if (!aiResponse && openai && process.env.OPENAI_API_KEY) {
        console.log("Usando modelo de OpenAI")
        const completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `Eres un asistente legal especializado en deudas y cobranzas en Chile. 
Proporciona información precisa basada en la legislación chilena vigente.
Usa un tono profesional pero accesible.
Estructura tus respuestas de forma clara con secciones.
NO uses formato markdown con asteriscos (*) o almohadillas (#).
NO uses negritas, cursivas ni ningún tipo de formato especial.
Presenta la información en texto plano, usando párrafos y listas con guiones o números.
${contextLegal}`,
            },
            ...conversationHistory,
            { role: "user", content: userMessage },
          ],
          temperature: 0.7,
          max_tokens: 800,
        })

        aiResponse = completion.choices[0].message.content || ""
      }

      // Si no se pudo obtener respuesta de ningún modelo, usar respuesta predefinida
      if (!aiResponse) {
        console.warn("No se pudo obtener respuesta de ningún modelo, usando respuesta predefinida")
        aiResponse = RESPUESTAS.DEFAULT
      }

      return NextResponse.json({
        response: aiResponse,
        userId: userId || "anonymous-user",
        model: useSambaNova ? "Qwen2.5-72B-Instruct" : "gpt-3.5-turbo",
      })
    } catch (modelError) {
      console.error("Error del modelo:", modelError)

      // Si hay error con el modelo, usar respuesta predefinida como fallback
      return NextResponse.json({
        response: RESPUESTAS.DEFAULT,
        userId: userId || "anonymous-user",
        error: "Error al procesar la consulta",
      })
    }
  } catch (error) {
    console.error("Error en el servidor:", error)
    return NextResponse.json(
      {
        response: RESPUESTAS.DEFAULT,
      },
      { status: 200 }, // Cambiado a 200 para evitar errores en el cliente
    )
  }
}
