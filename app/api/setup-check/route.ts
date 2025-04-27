import { NextResponse } from "next/server"
import { GoogleAuth } from "google-auth-library"

// Endpoint para verificar la configuración de Google Cloud
export async function GET(req: Request) {
  try {
    const results = {
      environment: process.env.NODE_ENV,
      timestamp: new Date().toISOString(),
      google_cloud: {
        project_id: process.env.GOOGLE_CLOUD_PROJECT_ID || "No configurado",
        location: process.env.GOOGLE_CLOUD_LOCATION || "us-central1 (default)",
        auth_configured: false,
        auth_details: {},
      },
      env_vars: {
        GOOGLE_CLOUD_PROJECT_ID: !!process.env.GOOGLE_CLOUD_PROJECT_ID,
        GOOGLE_CLOUD_LOCATION: !!process.env.GOOGLE_CLOUD_LOCATION,
        OPENAI_API_KEY: !!process.env.OPENAI_API_KEY,
      },
    }

    // Verificar la autenticación de Google Cloud
    try {
      console.log("Verificando autenticación de Google Cloud...")
      const auth = new GoogleAuth({
        scopes: ["https://www.googleapis.com/auth/cloud-platform"],
      })

      const client = await auth.getClient()
      const projectId = await auth.getProjectId()
      const token = await client.getAccessToken()

      results.google_cloud.auth_configured = !!token
      results.google_cloud.auth_details = {
        project_id_from_auth: projectId,
        token_obtained: !!token,
        auth_type: client.constructor.name,
      }

      console.log("Autenticación de Google Cloud verificada correctamente")
    } catch (authError) {
      console.error("Error al verificar autenticación de Google Cloud:", authError)
      results.google_cloud.auth_configured = false
      results.google_cloud.auth_details = {
        error: authError.message,
        stack: process.env.NODE_ENV === "development" ? authError.stack : undefined,
      }
    }

    return NextResponse.json(results)
  } catch (error) {
    console.error("Error al verificar configuración:", error)

    return NextResponse.json(
      {
        error: `Error al verificar configuración: ${error.message || "Error desconocido"}`,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

export const dynamic = "force-dynamic"
