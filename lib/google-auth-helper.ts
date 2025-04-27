import fs from "fs"
import path from "path"
import os from "os"

// Función para configurar las credenciales de Google Cloud
export async function setupGoogleCredentials() {
  try {
    // Verificar si ya existe la variable de entorno GOOGLE_APPLICATION_CREDENTIALS
    if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
      console.log("Credenciales de Google Cloud ya configuradas en:", process.env.GOOGLE_APPLICATION_CREDENTIALS)
      return process.env.GOOGLE_APPLICATION_CREDENTIALS
    }

    // Si estamos configurados para usar credenciales directas, no crear archivo
    if (process.env.GOOGLE_CLOUD_CREDENTIALS_DIRECT === "true") {
      console.log("Usando credenciales directamente sin archivo temporal")
      return null
    }

    // Verificar si tenemos las credenciales en formato JSON
    if (!process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
      console.error("No se encontraron credenciales de Google Cloud")
      throw new Error("Credenciales de Google Cloud no configuradas")
    }

    try {
      // Crear un archivo temporal para las credenciales
      const tempDir = path.join(os.tmpdir(), "google-credentials")

      // Crear el directorio si no existe
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true })
      }

      const credentialsPath = path.join(tempDir, `google-credentials-${Date.now()}.json`)

      // Escribir las credenciales en el archivo temporal
      console.log("Escribiendo credenciales en archivo temporal:", credentialsPath)
      fs.writeFileSync(credentialsPath, process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON)

      // Establecer la variable de entorno para que la SDK de Google la use
      process.env.GOOGLE_APPLICATION_CREDENTIALS = credentialsPath
      console.log("Variable GOOGLE_APPLICATION_CREDENTIALS configurada:", credentialsPath)

      return credentialsPath
    } catch (fsError) {
      console.error("Error al escribir archivo de credenciales:", fsError)

      // Intentar un enfoque alternativo si el sistema de archivos falla
      console.log("Usando enfoque alternativo para credenciales...")

      // En algunos entornos serverless, no podemos escribir en el sistema de archivos
      // En ese caso, podemos usar las credenciales directamente desde la variable de entorno
      return null
    }
  } catch (error) {
    console.error("Error al configurar credenciales de Google Cloud:", error)
    throw error
  }
}

// Función para verificar si las credenciales están configuradas correctamente
export async function checkGoogleCredentials() {
  try {
    // Verificar si tenemos las variables de entorno necesarias
    const hasCredentialsJson = !!process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON
    const hasCredentialsPath = !!process.env.GOOGLE_APPLICATION_CREDENTIALS
    const hasProjectId = !!process.env.GOOGLE_CLOUD_PROJECT_ID
    const hasLocation = !!process.env.GOOGLE_CLOUD_LOCATION

    // Verificar si el archivo de credenciales existe (si se ha configurado la ruta)
    let fileExists = false
    if (hasCredentialsPath) {
      try {
        fileExists = fs.existsSync(process.env.GOOGLE_APPLICATION_CREDENTIALS)
      } catch (e) {
        console.error("Error al verificar archivo de credenciales:", e)
      }
    }

    return {
      hasCredentialsJson,
      hasCredentialsPath,
      hasProjectId,
      hasLocation,
      fileExists,
      isFullyConfigured: hasCredentialsJson && hasProjectId && hasLocation,
    }
  } catch (error) {
    console.error("Error al verificar credenciales de Google Cloud:", error)
    return {
      error: error.message,
      isFullyConfigured: false,
    }
  }
}
