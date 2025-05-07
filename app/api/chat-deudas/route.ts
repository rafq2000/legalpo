import { OpenAIStream, StreamingTextResponse } from "ai"
import { OpenAI } from "openai"
import { normativaDeudas } from "@/lib/normativa-deudas"
import { handleOpenAIError } from "@/lib/openai-error-handler"

// Crear una instancia de OpenAI con la API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Función para preparar el contexto normativo basado en la consulta
function prepararContextoNormativo(consulta: string): string {
  // Convertir la consulta a minúsculas para facilitar la búsqueda
  const consultaLower = consulta.toLowerCase()

  // Palabras clave para diferentes categorías de deudas
  const keywordsMap = {
    prescripcion: ["prescripción", "prescribe", "prescrito", "caducar", "vence", "antigua", "años sin pagar"],
    cobranza: ["cobranza", "cobro", "judicial", "demanda", "tribunal", "juzgado", "carta", "notificación"],
    embargo: ["embargo", "embargar", "retención", "bienes", "cuenta", "sueldo", "salario", "pensión"],
    repactacion: ["repactar", "repactación", "convenio", "acuerdo", "pago", "cuotas", "negociar"],
    derechosDeudor: ["derecho", "consumidor", "abusivo", "interés", "usura", "excesivo", "ilegal"],
  }

  // Buscar coincidencias en la consulta
  const contextosRelevantes = []

  for (const [categoria, keywords] of Object.entries(keywordsMap)) {
    if (keywords.some((keyword) => consultaLower.includes(keyword))) {
      // Agregar la normativa relevante según la categoría
      switch (categoria) {
        case "prescripcion":
          contextosRelevantes.push(normativaDeudas.prescripcion)
          break
        case "cobranza":
          contextosRelevantes.push(normativaDeudas.cobranzaJudicial)
          contextosRelevantes.push(normativaDeudas.cobranzaExtrajudicial)
          break
        case "embargo":
          contextosRelevantes.push(normativaDeudas.embargo)
          break
        case "repactacion":
          contextosRelevantes.push(normativaDeudas.repactacion)
          break
        case "derechosDeudor":
          contextosRelevantes.push(normativaDeudas.derechosDeudor)
          break
      }
    }
  }

  // Si no hay coincidencias específicas, incluir información general
  if (contextosRelevantes.length === 0) {
    contextosRelevantes.push(normativaDeudas.informacionGeneral)
  }

  // Unir todos los contextos relevantes
  return contextosRelevantes.join("\n\n")
}

export async function POST(req: Request) {
  try {
    // Obtener los mensajes del cuerpo de la solicitud
    const { messages } = await req.json()

    // Obtener la consulta del usuario (último mensaje)
    const userMessage = messages[messages.length - 1]
    const consulta = userMessage.content

    // Preparar el contexto normativo basado en la consulta
    const contextoNormativo = prepararContextoNormativo(consulta)

    console.log("Procesando consulta sobre deudas:", consulta)
    console.log("Contexto normativo seleccionado:", contextoNormativo.substring(0, 150) + "...")

    // Crear el mensaje del sistema con el contexto normativo
    const systemMessage = {
      role: "system",
      content: `Eres un asistente legal especializado en deudas en Chile. Proporciona información precisa y útil basada en la normativa chilena.
      
      Utiliza el siguiente contexto normativo para responder:
      ${contextoNormativo}
      
      Cuando el usuario te pregunte sobre deudas, pídele información específica como:
      - Qué tipo de deuda tiene (bancaria, retail, servicios, etc.)
      - Si ha recibido alguna notificación o demanda
      - Cuánto tiempo ha pasado desde el último pago
      
      Responde de manera clara y concisa, evitando jerga legal compleja. Si no tienes suficiente información para dar una respuesta precisa, solicita más detalles.
      
      IMPORTANTE: No inventes información legal. Si no estás seguro de algo, indícalo claramente y sugiere consultar con un abogado especializado.`,
    }

    // Preparar los mensajes para la API de OpenAI
    const apiMessages = [systemMessage, ...messages]

    // Llamar a la API de OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: apiMessages,
      temperature: 0.7,
      stream: true,
    })

    // Crear un stream de texto a partir de la respuesta
    const stream = OpenAIStream(response)

    // Devolver la respuesta como un stream
    return new StreamingTextResponse(stream)
  } catch (error) {
    console.error("Error en chat-deudas:", error)
    return handleOpenAIError(error)
  }
}
