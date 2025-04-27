import { NextResponse } from "next/server"
import axios from "axios"
import { registrarDocumento } from "@/app/actions/analytics-actions"

// Configuración de Google AI Studio API
const GOOGLE_AI_API_KEY = process.env.GEMINI_API_KEY
const GOOGLE_AI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"

export async function POST(req: Request) {
  try {
    const { text, userId } = await req.json()

    // Registrar el análisis de documento y obtener ID de usuario
    const userIdUpdated = await registrarDocumento(userId)

    if (!text || text.trim().length < 10) {
      return NextResponse.json(
        {
          error: "El texto proporcionado es demasiado corto para ser analizado.",
        },
        { status: 400 },
      )
    }

    // Check if Google AI API key is available
    if (!GOOGLE_AI_API_KEY) {
      console.error("Error: GEMINI_API_KEY no está configurada")
      return NextResponse.json(
        {
          error: "El servicio de análisis no está disponible en este momento. Por favor, contacte al administrador.",
        },
        { status: 503 },
      )
    }

    console.log("Analizando documento...")

    // Limitar el texto si es muy largo para evitar exceder los límites de tokens
    const maxLength = 6000 // Ajustado para Gemini
    const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + "... [texto truncado]" : text

    try {
      // Preparar el prompt para Google AI
      const systemPrompt = `Eres un asistente especializado en análisis de documentos legales. 
      Analiza el siguiente texto de un documento y proporciona un resumen detallado que incluya:
      1. Tipo de documento
      2. Partes involucradas
      3. Fechas importantes
      4. Montos o valores mencionados
      5. Cláusulas o términos importantes
      6. Posibles riesgos o advertencias
      7. Recomendaciones generales
      
      Documento a analizar:
      ${truncatedText}`

      // Preparar el payload para la API de Google AI
      const payload = {
        contents: [
          {
            role: "user",
            parts: [{ text: systemPrompt }],
          },
        ],
        generationConfig: {
          temperature: 0.5,
          maxOutputTokens: 1024,
          topP: 0.95,
          topK: 40,
        },
      }

      // Llamar a la API de Google AI
      const response = await axios.post(`${GOOGLE_AI_API_URL}?key=${GOOGLE_AI_API_KEY}`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      // Extraer la respuesta
      const analysis = response.data.candidates[0].content.parts[0].text

      return NextResponse.json({
        analysis,
        userId: userIdUpdated,
      })
    } catch (apiError: any) {
      console.error("Error al analizar el documento con Google AI:", apiError)

      const errorMessage = "Error al analizar el documento. Por favor, intenta nuevamente."

      if (apiError.response) {
        console.error("Google AI Error Status:", apiError.response.status)
        console.error("Google AI Error Data:", apiError.response.data)
      }

      return NextResponse.json(
        {
          error: errorMessage,
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error al analizar el documento:", error)
    return NextResponse.json(
      {
        error: "Error al analizar el documento. Por favor, intenta nuevamente.",
      },
      { status: 500 },
    )
  }
}
