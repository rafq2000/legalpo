import { NextResponse } from "next/server"
import { checkVertexAIAvailability } from "@/lib/vertex-ai-client"
import { setupGoogleCredentials } from "@/lib/google-auth-helper"
import OpenAI from "openai"

// Endpoint para probar todos los proveedores de IA disponibles
export async function GET(req: Request) {
  try {
    console.log("Verificando todos los proveedores de IA...")

    // Configurar credenciales de Google Cloud
    await setupGoogleCredentials()

    // Verificar todos los proveedores
    const results = {
      timestamp: new Date().toISOString(),
      providers: {
        vertex_ai: await testVertexAI(),
        openai: await testOpenAI(),
        gemini: await testGemini(),
      },
      environment: process.env.NODE_ENV,
      auth_status: await checkAuthStatus(),
    }

    // Verificar si al menos un proveedor está disponible
    const anyProviderAvailable = Object.values(results.providers).some((provider: any) => provider.available === true)

    return NextResponse.json({
      ...results,
      any_provider_available: anyProviderAvailable,
    })
  } catch (error) {
    console.error("Error al verificar proveedores de IA:", error)

    return NextResponse.json(
      {
        error: `Error al verificar proveedores: ${error.message || "Error desconocido"}`,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

// Función para verificar Vertex AI
async function testVertexAI() {
  try {
    console.log("Probando Vertex AI...")
    const status = await checkVertexAIAvailability()

    return {
      name: "Vertex AI (Google Cloud)",
      available: status.available,
      message: status.message,
      details: status.details || {},
      config: {
        project_id: process.env.GOOGLE_CLOUD_PROJECT_ID ? "Configurado" : "No configurado",
        location: process.env.GOOGLE_CLOUD_LOCATION || "us-central1 (default)",
        credentials: process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON ? "Configurado" : "No configurado",
      },
    }
  } catch (error) {
    console.error("Error al probar Vertex AI:", error)
    return {
      name: "Vertex AI (Google Cloud)",
      available: false,
      message: `Error: ${error.message || "Error desconocido"}`,
      error: error.message,
    }
  }
}

// Función para verificar OpenAI
async function testOpenAI() {
  try {
    console.log("Probando OpenAI...")
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY

    if (!OPENAI_API_KEY) {
      return {
        name: "OpenAI",
        available: false,
        message: "API key no configurada",
      }
    }

    const openai = new OpenAI({ apiKey: OPENAI_API_KEY })
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hola" }],
      max_tokens: 10,
    })

    return {
      name: "OpenAI",
      available: true,
      message: "Disponible",
      models: ["gpt-3.5-turbo", "gpt-4"],
    }
  } catch (error) {
    console.error("Error al probar OpenAI:", error)
    return {
      name: "OpenAI",
      available: false,
      message: `Error: ${error.message || "Error desconocido"}`,
      error: error.message,
    }
  }
}

// Función para verificar Gemini
async function testGemini() {
  try {
    console.log("Probando Gemini...")
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY

    if (!GEMINI_API_KEY) {
      return {
        name: "Gemini",
        available: false,
        message: "API key no configurada",
      }
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: "Hola" }] }],
          generationConfig: { maxOutputTokens: 10 },
        }),
      },
    )

    if (!response.ok) {
      throw new Error(`Error de API: ${response.status} ${response.statusText}`)
    }

    return {
      name: "Gemini",
      available: true,
      message: "Disponible",
      models: ["gemini-pro"],
    }
  } catch (error) {
    console.error("Error al probar Gemini:", error)
    return {
      name: "Gemini",
      available: false,
      message: `Error: ${error.message || "Error desconocido"}`,
      error: error.message,
    }
  }
}

// Función para verificar el estado de autenticación
async function checkAuthStatus() {
  try {
    // Verificar si hay credenciales de Google Cloud configuradas
    const hasGoogleCredentials = !!process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON

    // Verificar si hay un ID de proyecto configurado
    const hasProjectId = !!process.env.GOOGLE_CLOUD_PROJECT_ID

    return {
      google_cloud: {
        credentials_configured: hasGoogleCredentials,
        project_id_configured: hasProjectId,
        status: hasGoogleCredentials && hasProjectId ? "Configurado" : "Incompleto",
      },
      openai: {
        api_key_configured: !!process.env.OPENAI_API_KEY,
      },
      gemini: {
        api_key_configured: !!process.env.GEMINI_API_KEY,
      },
    }
  } catch (error) {
    console.error("Error al verificar estado de autenticación:", error)
    return {
      error: error.message,
    }
  }
}

export const dynamic = "force-dynamic"
