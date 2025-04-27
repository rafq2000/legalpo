import { setupGoogleCredentials } from "./google-auth-helper"

// Función para generar respuestas con Vertex AI
export async function generateVertexAIResponse(prompt: string, systemContext?: string): Promise<string> {
  try {
    // Configurar credenciales
    await setupGoogleCredentials()

    // Verificar variables de entorno necesarias
    const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID
    const location = process.env.GOOGLE_CLOUD_LOCATION || "us-central1"

    if (!projectId) {
      throw new Error("GOOGLE_CLOUD_PROJECT_ID no está configurado")
    }

    // Construir el mensaje para el modelo
    const messages = []

    // Añadir el contexto del sistema si existe
    if (systemContext) {
      messages.push({
        role: "system",
        content: systemContext,
      })
    }

    // Añadir el prompt del usuario
    messages.push({
      role: "user",
      content: prompt,
    })

    // Construir la URL de la API
    const url = `https://${location}-aiplatform.googleapis.com/v1/projects/${projectId}/locations/${location}/publishers/google/models/gemini-1.0-pro:generateContent`

    // Obtener token de acceso
    const accessToken = await getAccessToken()

    // Realizar la solicitud a la API
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        contents: messages.map((msg) => ({
          role: msg.role === "system" ? "user" : msg.role,
          parts: [{ text: msg.content }],
        })),
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 1024,
          topP: 0.95,
          topK: 40,
        },
      }),
    })

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      const errorData = await response.json()
      console.error("Error de Vertex AI:", errorData)
      throw new Error(`Error de Vertex AI: ${response.status} - ${JSON.stringify(errorData)}`)
    }

    // Procesar la respuesta
    const data = await response.json()

    // Extraer el texto de la respuesta
    if (
      data.candidates &&
      data.candidates.length > 0 &&
      data.candidates[0].content &&
      data.candidates[0].content.parts &&
      data.candidates[0].content.parts.length > 0
    ) {
      return data.candidates[0].content.parts[0].text
    } else {
      console.error("Formato de respuesta inesperado:", JSON.stringify(data))
      throw new Error("Formato de respuesta inesperado de Vertex AI")
    }
  } catch (error) {
    console.error("Error al generar respuesta con Vertex AI:", error)
    throw error
  }
}

// Función para verificar la disponibilidad de Vertex AI
export async function checkVertexAIAvailability() {
  try {
    // Configurar credenciales
    await setupGoogleCredentials()

    // Verificar variables de entorno necesarias
    const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID
    const location = process.env.GOOGLE_CLOUD_LOCATION || "us-central1"

    if (!projectId) {
      return {
        available: false,
        message: "GOOGLE_CLOUD_PROJECT_ID no está configurado",
        details: { projectId: false },
      }
    }

    // Verificar si hay credenciales configuradas
    if (!process.env.GOOGLE_APPLICATION_CREDENTIALS && !process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
      return {
        available: false,
        message: "Credenciales de Google Cloud no configuradas",
        details: { credentials: false, projectId: true },
      }
    }

    // Construir la URL para verificar el modelo
    const url = `https://${location}-aiplatform.googleapis.com/v1/projects/${projectId}/locations/${location}/publishers/google/models/gemini-1.0-pro`

    // Obtener token de acceso
    const accessToken = await getAccessToken()

    // Realizar la solicitud a la API
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      const errorData = await response.text()
      console.error("Error al verificar Vertex AI:", errorData)
      return {
        available: false,
        message: `Error al verificar modelo: ${response.status}`,
        details: { statusCode: response.status, error: errorData },
      }
    }

    // Si llegamos aquí, el modelo está disponible
    return {
      available: true,
      message: "Modelo disponible",
      details: { model: "gemini-1.0-pro" },
    }
  } catch (error) {
    console.error("Error al verificar disponibilidad de Vertex AI:", error)
    return {
      available: false,
      message: `Error: ${error.message || "Error desconocido"}`,
      details: { error: error.message },
    }
  }
}

// Modificar la función getAccessToken para usar autenticación directa
async function getAccessToken() {
  try {
    // Usar credenciales directas si está configurado
    if (process.env.GOOGLE_CLOUD_CREDENTIALS_DIRECT === "true") {
      console.log("Usando autenticación directa para Vertex AI")
      const { getDirectAuthClient } = await import("./direct-auth-client")
      const auth = await getDirectAuthClient()
      const client = await auth.getClient()
      const token = await client.getAccessToken()

      if (!token || !token.token) {
        throw new Error("No se pudo obtener el token de autenticación")
      }

      return token.token
    }

    // Verificar si estamos en un entorno que soporta GoogleAuth
    if (typeof process !== "undefined" && process.env.GOOGLE_APPLICATION_CREDENTIALS) {
      // Importar dinámicamente google-auth-library
      const { GoogleAuth } = await import("google-auth-library")

      // Crear cliente de autenticación
      const auth = new GoogleAuth({
        scopes: ["https://www.googleapis.com/auth/cloud-platform"],
      })

      // Obtener cliente y token
      const client = await auth.getClient()
      const token = await client.getAccessToken()

      return token.token
    } else {
      // Alternativa para entornos donde no podemos usar GoogleAuth directamente
      // Usar una función de ayuda para obtener el token
      const response = await fetch("/api/auth-check", {
        method: "GET",
      })

      if (!response.ok) {
        throw new Error(`Error al obtener token: ${response.status}`)
      }

      const data = await response.json()
      return data.token
    }
  } catch (error) {
    console.error("Error al obtener token de acceso:", error)
    throw error
  }
}
