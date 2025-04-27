import { GoogleAuth } from "google-auth-library"

export async function getDirectAuthClient() {
  try {
    // Usar las credenciales directamente desde la variable de entorno
    if (!process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
      throw new Error("Credenciales de Google Cloud no configuradas")
    }

    // Parsear las credenciales JSON
    const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON)

    // Crear cliente de autenticación con las credenciales directamente
    const auth = new GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/cloud-platform"],
    })

    return auth
  } catch (error) {
    console.error("Error al crear cliente de autenticación directa:", error)
    throw error
  }
}
