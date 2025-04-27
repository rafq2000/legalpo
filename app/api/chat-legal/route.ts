import { NextResponse } from "next/server"
import { generateAIResponse } from "@/lib/ai-client"
import { createClient } from "@supabase/supabase-js"

// Contexto del sistema para el asistente
const SYSTEM_CONTEXT = `
Eres un asistente legal especializado en deudas y cobranzas en Chile.
Proporciona respuestas precisas y basadas en la legislación vigente.
Cita artículos del Código Civil y otras leyes relevantes cuando sea apropiado.
Si no estás seguro de una respuesta, indícalo claramente.
No inventes información legal.
Sé conciso pero completo en tus respuestas.
`

// Crear cliente de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Función para normalizar una consulta
function normalizeQuery(query: string): string {
  return query.toLowerCase().trim().replace(/\s+/g, " ")
}

export async function POST(req: Request) {
  try {
    // Obtener los mensajes del usuario
    const { messages, userId } = await req.json()

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Formato de mensajes inválido" }, { status: 400 })
    }

    // Obtener el último mensaje del usuario
    const userMessage = messages[messages.length - 1]
    if (userMessage.role !== "user" || !userMessage.content) {
      return NextResponse.json({ error: "Mensaje de usuario inválido" }, { status: 400 })
    }

    const query = userMessage.content

    console.log("Procesando consulta sobre deudas:", query.substring(0, 50) + "...")

    // Registrar la consulta en analytics
    try {
      await supabase.from("analytics").insert({
        type: "chat_legal",
        user_id: userId || "anonymous",
        content: query,
        timestamp: new Date().toISOString(),
      })
    } catch (error) {
      console.error("Error al registrar consulta:", error)
      // Continuar con el proceso aunque falle el registro
    }

    // Verificar si hay una respuesta en caché
    try {
      const normalizedQuery = normalizeQuery(query)
      const { data: cachedData } = await supabase
        .from("response_cache")
        .select("response")
        .eq("normalized_query", normalizedQuery)
        .single()

      if (cachedData) {
        console.log("Usando respuesta en caché")
        return NextResponse.json({ response: cachedData.response, source: "cache" })
      }
    } catch (error) {
      console.error("Error al buscar en caché:", error)
      // Continuar si hay error en la caché
    }

    // Preparar el prompt completo con el historial de conversación
    const conversationHistory = messages
      .map((msg) => `${msg.role === "user" ? "Usuario" : "Asistente"}: ${msg.content}`)
      .join("\n\n")

    const fullPrompt = `${conversationHistory}\n\nAsistente:`

    // Intentar generar respuesta con IA
    try {
      console.log("Generando respuesta con IA...")
      const aiResponse = await generateAIResponse(fullPrompt, SYSTEM_CONTEXT)

      // Guardar en caché
      try {
        await supabase.from("response_cache").insert({
          query,
          normalized_query: normalizeQuery(query),
          response: aiResponse.text,
          provider: aiResponse.provider,
          created_at: new Date().toISOString(),
        })
      } catch (cacheError) {
        console.error("Error al guardar en caché:", cacheError)
      }

      return NextResponse.json({
        response: aiResponse.text,
        source: aiResponse.provider,
        userId: userId,
      })
    } catch (aiError) {
      console.error("Error al generar respuesta con IA:", aiError)

      // Si hay un error con la IA, usar respuesta genérica
      return NextResponse.json({
        response:
          "Entiendo tu situación. Para poder ayudarte mejor con tus dudas sobre deudas, ¿podrías proporcionar más detalles sobre tu caso específico? Por ejemplo, ¿qué tipo de deudas tienes y hace cuánto tiempo dejaste de pagarlas?",
        source: "fallback",
        error: aiError.message,
        userId: userId,
      })
    }
  } catch (error) {
    console.error("Error general en el endpoint de chat legal:", error)
    return NextResponse.json(
      {
        error: `Error: ${error.message || "Error desconocido"}`,
        response:
          "Lo siento, ha ocurrido un error al procesar tu consulta. Por favor, intenta nuevamente en unos momentos.",
      },
      { status: 500 },
    )
  }
}

export const dynamic = "force-dynamic"
