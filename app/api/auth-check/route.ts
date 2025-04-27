import { NextResponse } from "next/server"
import { setupGoogleCredentials } from "@/lib/google-auth-helper"

export async function GET(req: Request) {
  try {
    // Si estamos usando credenciales directas
    if (process.env.GOOGLE_CLOUD_CREDENTIALS_DIRECT === "true") {
      const { getDirectAuthClient } = await import("@/lib/direct-auth-client")

      try {
        // Crear cliente de autenticación directa
        const auth = await getDirectAuthClient()

        // Obtener cliente y token
        const client = await auth.getClient()
        const token = await client.getAccessToken()

        return NextResponse.json({
          token: token.token,
          expiry: token.expiryDate,
          status: "success",
          method: "direct",
        })
      } catch (authError) {
        console.error("Error al obtener token de autenticación directa:", authError)
        return NextResponse.json({ error: `Error de autenticación directa: ${authError.message}` }, { status: 500 })
      }
    }

    // Configurar credenciales de Google Cloud (método tradicional)
    await setupGoogleCredentials()

    // Verificar si tenemos las variables de entorno necesarias
    const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID
    const location = process.env.GOOGLE_CLOUD_LOCATION || "us-central1"

    if (!projectId) {
      return NextResponse.json({ error: "GOOGLE_CLOUD_PROJECT_ID no está configurado" }, { status: 500 })
    }

    // Verificar si hay credenciales configuradas
    if (!process.env.GOOGLE_APPLICATION_CREDENTIALS && !process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
      return NextResponse.json({ error: "Credenciales de Google Cloud no configuradas" }, { status: 500 })
    }

    try {
      // Importar dinámicamente google-auth-library
      const { GoogleAuth } = await import("google-auth-library")

      // Crear cliente de autenticación
      const auth = new GoogleAuth({
        scopes: ["https://www.googleapis.com/auth/cloud-platform"],
      })

      // Obtener cliente y token
      const client = await auth.getClient()
      const token = await client.getAccessToken()

      return NextResponse.json({
        token: token.token,
        expiry: token.expiryDate,
        status: "success",
        method: "file",
      })
    } catch (authError) {
      console.error("Error al obtener token de autenticación:", authError)
      return NextResponse.json({ error: `Error de autenticación: ${authError.message}` }, { status: 500 })
    }
  } catch (error) {
    console.error("Error en auth-check:", error)
    return NextResponse.json({ error: `Error en el servidor: ${error.message}` }, { status: 500 })
  }
}

export const dynamic = "force-dynamic"
