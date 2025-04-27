import { NextResponse } from "next/server"
import axios from "axios"

export async function GET(req: Request) {
  try {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY

    if (!GEMINI_API_KEY) {
      return NextResponse.json({
        available: false,
        message: "API key no configurada",
        timestamp: new Date().toISOString(),
      })
    }

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: "Hola" }] }],
          generationConfig: { maxOutputTokens: 10 },
        },
        { headers: { "Content-Type": "application/json" } },
      )

      return NextResponse.json({
        available: true,
        message: "API de Gemini disponible",
        response_status: response.status,
        response_data: response.data,
        timestamp: new Date().toISOString(),
      })
    } catch (error) {
      console.error("Error al verificar Gemini:", error)

      return NextResponse.json({
        available: false,
        message: `Error al verificar la API de Gemini: ${error.response?.status || error.message}`,
        error_details: error.response?.data || error.message,
        timestamp: new Date().toISOString(),
      })
    }
  } catch (error) {
    console.error("Error general:", error)

    return NextResponse.json(
      {
        available: false,
        message: `Error general: ${error.message || "Error desconocido"}`,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()

    if (!prompt) {
      return NextResponse.json(
        {
          error: "Se requiere un prompt",
        },
        { status: 400 },
      )
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY

    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        {
          error: "API key de Gemini no configurada",
        },
        { status: 500 },
      )
    }

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 1024,
            topP: 0.95,
            topK: 40,
          },
        },
        { headers: { "Content-Type": "application/json" } },
      )

      return NextResponse.json({
        text: response.data.candidates?.[0]?.content?.parts?.[0]?.text || "",
        timestamp: new Date().toISOString(),
      })
    } catch (error) {
      console.error("Error al generar respuesta con Gemini:", error)

      return NextResponse.json(
        {
          error: `Error al generar respuesta: ${error.response?.status || error.message}`,
          error_details: error.response?.data || error.message,
          timestamp: new Date().toISOString(),
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error general:", error)

    return NextResponse.json(
      {
        error: `Error general: ${error.message || "Error desconocido"}`,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

export const dynamic = "force-dynamic"
