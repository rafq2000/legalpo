import { NextResponse } from "next/server"
import OpenAI from "openai"
import { checkVertexAIAvailability } from "@/lib/vertex-ai-client"

// Función para verificar la API key de OpenAI
async function checkOpenAIKey() {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY

  if (!OPENAI_API_KEY) {
    return {
      available: false,
      status: "missing",
      message: "La API key de OpenAI no está configurada",
      key_preview: "No disponible",
    }
  }

  // Mostrar los primeros 4 y últimos 4 caracteres de la key para verificación
  const keyPreview = `${OPENAI_API_KEY.substring(0, 4)}...${OPENAI_API_KEY.substring(OPENAI_API_KEY.length - 4)}`

  try {
    // Crear cliente de OpenAI
    const openai = new OpenAI({ apiKey: OPENAI_API_KEY })

    // Intentar una solicitud simple a la API de OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hola" }],
      max_tokens: 10,
    })

    return {
      available: true,
      status: "valid",
      message: "La API key de OpenAI es válida",
      key_preview: keyPreview,
      models_available: ["gpt-3.5-turbo"],
    }
  } catch (error) {
    console.error("Error al verificar la API key de OpenAI:", error)

    return {
      available: false,
      status: "invalid",
      message: `Error al verificar la API key de OpenAI: ${error.message}`,
      key_preview: keyPreview,
      error_details: error.message,
    }
  }
}

// Endpoint para verificar las API keys
export async function GET(req: Request) {
  // Verificar si la solicitud incluye un token de administrador
  const { searchParams } = new URL(req.url)
  const adminToken = searchParams.get("token")

  // Verificar si el token es válido (esto es una medida de seguridad básica)
  if (adminToken !== process.env.ADMIN_AUTH_KEY) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  try {
    // Verificar ambas API keys en paralelo
    const [vertexStatus, openaiStatus] = await Promise.all([checkVertexAIAvailability(), checkOpenAIKey()])

    // Verificar las variables de entorno disponibles (sin mostrar sus valores)
    const envVars = {
      GOOGLE_CLOUD_PROJECT_ID: !!process.env.GOOGLE_CLOUD_PROJECT_ID,
      GOOGLE_CLOUD_LOCATION: !!process.env.GOOGLE_CLOUD_LOCATION,
      OPENAI_API_KEY: !!process.env.OPENAI_API_KEY,
      ADMIN_AUTH_KEY: !!process.env.ADMIN_AUTH_KEY,
      NODE_ENV: process.env.NODE_ENV,
    }

    return NextResponse.json({
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      vertex_ai: vertexStatus,
      openai: openaiStatus,
      env_vars: envVars,
    })
  } catch (error) {
    console.error("Error al verificar las API keys:", error)

    return NextResponse.json(
      {
        error: `Error al verificar las API keys: ${error.message || "Error desconocido"}`,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

export const dynamic = "force-dynamic"
