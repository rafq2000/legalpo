import OpenAI from "openai"
import { generateVertexAIResponse, checkVertexAIAvailability } from "./vertex-ai-client"
import { setupGoogleCredentials } from "./google-auth-helper"
import { GoogleGenerativeAI } from "@google/generative-ai"

// Configuración para OpenAI como fallback
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const openai = OPENAI_API_KEY ? new OpenAI({ apiKey: OPENAI_API_KEY }) : null

// Configuración para Gemini como segunda opción de fallback
const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const gemini = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null

// Función para generar respuestas con Vertex AI o fallback a OpenAI
export async function generateAIResponse(prompt: string, systemContext?: string) {
  console.log("Generando respuesta de IA para prompt:", prompt.substring(0, 50) + "...")

  // Intentar primero con OpenAI (cambiado el orden para usar OpenAI primero)
  if (openai && OPENAI_API_KEY) {
    try {
      console.log("Intentando con OpenAI...")
      const openaiResponse = await generateOpenAIResponse(prompt, systemContext)
      console.log("Respuesta generada con OpenAI exitosamente")
      return { text: openaiResponse, provider: "openai" }
    } catch (openaiError) {
      console.error("Error con OpenAI:", openaiError)
      // Continuar con Vertex AI si OpenAI falla
    }
  } else {
    console.log("OpenAI no está configurado, intentando con otras opciones...")
  }

  // Configurar credenciales de Google Cloud
  try {
    await setupGoogleCredentials()
  } catch (error) {
    console.error("Error al configurar credenciales de Google Cloud:", error)
    // Continuar con Gemini si hay un error con las credenciales
  }

  // Intentar con Vertex AI como segunda opción
  try {
    console.log("Intentando con Vertex AI...")
    const vertexResponse = await generateVertexAIResponse(prompt, systemContext)
    if (vertexResponse) {
      console.log("Respuesta generada con Vertex AI exitosamente")
      return { text: vertexResponse, provider: "vertex-ai" }
    }
  } catch (error) {
    console.error("Error con Vertex AI:", error)
    // Continuar con Gemini si Vertex AI falla
  }

  // Intentar con Gemini como tercera opción
  if (gemini && GEMINI_API_KEY) {
    try {
      console.log("Intentando con Gemini...")
      const geminiResponse = await generateGeminiResponse(prompt, systemContext)
      console.log("Respuesta generada con Gemini exitosamente")
      return { text: geminiResponse, provider: "gemini" }
    } catch (geminiError) {
      console.error("Error con Gemini:", geminiError)
      // Si Gemini también falla, lanzar error
    }
  }

  // Si ninguno está disponible
  console.error("No hay proveedores de IA disponibles")
  throw new Error("No hay proveedores de IA disponibles")
}

// Función para generar respuestas con OpenAI
async function generateOpenAIResponse(prompt: string, systemContext?: string) {
  if (!openai || !OPENAI_API_KEY) {
    throw new Error("API key de OpenAI no configurada")
  }

  const messages = []

  // Añadir el contexto del sistema si existe
  if (systemContext) {
    messages.push({ role: "system", content: systemContext })
  }

  // Añadir el prompt del usuario
  messages.push({ role: "user", content: prompt })

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0.2,
      max_tokens: 1024,
    })

    return completion.choices[0].message.content || ""
  } catch (error) {
    console.error("Error específico de OpenAI:", error)
    // Verificar si es un error de autenticación
    if (error.status === 401) {
      throw new Error("Error de autenticación con OpenAI. Verifica tu API key.")
    }
    // Verificar si es un error de cuota o límite
    if (error.status === 429) {
      throw new Error("Se ha excedido el límite de la API de OpenAI. Intenta más tarde.")
    }
    throw error
  }
}

// Función para generar respuestas con Gemini
async function generateGeminiResponse(prompt: string, systemContext?: string) {
  if (!gemini || !GEMINI_API_KEY) {
    throw new Error("API key de Gemini no configurada")
  }

  try {
    const model = gemini.getGenerativeModel({ model: "gemini-pro" })

    let fullPrompt = prompt
    if (systemContext) {
      fullPrompt = `${systemContext}

${prompt}`
    }

    const result = await model.generateContent(fullPrompt)
    const response = result.response
    return response.text()
  } catch (error) {
    console.error("Error específico de Gemini:", error)
    throw error
  }
}

// Función para verificar la disponibilidad de los proveedores de IA
export async function checkAIAvailability() {
  console.log("Verificando disponibilidad de proveedores de IA...")

  const status = {
    vertexAI: { available: false, message: "No probado" },
    openai: { available: false, message: "No probado" },
    gemini: { available: false, message: "No probado" },
    anyAvailable: false,
  }

  // Verificar OpenAI primero
  if (openai && OPENAI_API_KEY) {
    try {
      console.log("Verificando disponibilidad de OpenAI...")
      const testResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hola" }],
        max_tokens: 10,
      })

      if (testResponse && testResponse.choices && testResponse.choices.length > 0) {
        status.openai = { available: true, message: "Disponible" }
        status.anyAvailable = true
        console.log("OpenAI está disponible")
      } else {
        status.openai = { available: false, message: "Respuesta inválida" }
        console.log("OpenAI devolvió una respuesta inválida")
      }
    } catch (error) {
      console.error("Error al verificar OpenAI:", error)
      status.openai = {
        available: false,
        message: `No disponible: ${error.message || "Error desconocido"}`,
      }
    }
  } else {
    console.log("OpenAI no está configurado")
    status.openai = { available: false, message: "API key no configurada" }
  }

  // Configurar credenciales de Google Cloud
  try {
    await setupGoogleCredentials()
  } catch (error) {
    console.error("Error al configurar credenciales de Google Cloud:", error)
    // Continuar con la verificación aunque haya un error con las credenciales
  }

  // Verificar Vertex AI
  try {
    console.log("Verificando disponibilidad de Vertex AI...")
    const vertexStatus = await checkVertexAIAvailability()
    status.vertexAI = vertexStatus
    if (vertexStatus.available) {
      status.anyAvailable = true
      console.log("Vertex AI está disponible")
    } else {
      console.log("Vertex AI no está disponible:", vertexStatus.message)
    }
  } catch (error) {
    console.error("Error al verificar Vertex AI:", error)
    status.vertexAI = {
      available: false,
      message: `Error al verificar: ${error.message || "Error desconocido"}`,
    }
  }

  // Verificar Gemini
  if (gemini && GEMINI_API_KEY) {
    try {
      console.log("Verificando disponibilidad de Gemini...")
      const model = gemini.getGenerativeModel({ model: "gemini-pro" })
      const result = await model.generateContent("Hola")

      if (result && result.response) {
        status.gemini = { available: true, message: "Disponible" }
        status.anyAvailable = true
        console.log("Gemini está disponible")
      } else {
        status.gemini = { available: false, message: "Respuesta inválida" }
        console.log("Gemini devolvió una respuesta inválida")
      }
    } catch (error) {
      console.error("Error al verificar Gemini:", error)
      status.gemini = {
        available: false,
        message: `No disponible: ${error.message || "Error desconocido"}`,
      }
    }
  } else {
    console.log("Gemini no está configurado")
    status.gemini = { available: false, message: "API key no configurada" }
  }

  return status
}
