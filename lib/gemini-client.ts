import axios from "axios"
import { handleOpenAIError } from "./openai-error-handler"

// Configuración para la API de Gemini
const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent"

// Función para generar respuestas con Gemini
export async function generateGeminiResponse(prompt: string, systemContext?: string) {
  try {
    if (!GEMINI_API_KEY) {
      throw new Error("API key de Gemini no configurada")
    }

    // Preparar el prompt completo con el contexto del sistema si existe
    const fullPrompt = systemContext ? `${systemContext}\n\n${prompt}` : prompt

    // Configurar la solicitud para la API de Gemini
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: fullPrompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.2, // Reducido para respuestas más precisas
          maxOutputTokens: 1024,
          topP: 0.95,
          topK: 40,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    )

    // Extraer y devolver la respuesta
    return response.data.candidates?.[0]?.content?.parts?.[0]?.text || ""
  } catch (error) {
    console.error("Error al generar respuesta con Gemini:", error)
    // Reutilizamos el manejador de errores de OpenAI adaptándolo para Gemini
    throw new Error(handleOpenAIError(error))
  }
}

// Función para verificar si la API de Gemini está disponible
export async function checkGeminiAvailability() {
  try {
    if (!GEMINI_API_KEY) {
      return { available: false, message: "API key no configurada" }
    }

    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: "Hola",
              },
            ],
          },
        ],
        generationConfig: {
          maxOutputTokens: 10,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    )

    return {
      available: true,
      message: "API de Gemini disponible",
    }
  } catch (error) {
    console.error("Error al verificar disponibilidad de Gemini:", error)
    return {
      available: false,
      message: `API de Gemini no disponible: ${error.message || "Error desconocido"}`,
    }
  }
}
