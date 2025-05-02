import { initializeApp, cert, getApps, getApp } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"

// Verificar si estamos en el servidor
const isServer = typeof window === "undefined"

// Inicializar Firebase Admin solo en el servidor
let adminDb: any

if (isServer) {
  try {
    // Verificar que las variables de entorno necesarias estén definidas
    const projectId = process.env.FIREBASE_PROJECT_ID
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
    const privateKey = process.env.FIREBASE_PRIVATE_KEY

    if (!projectId || !clientEmail || !privateKey) {
      console.error("Firebase Admin SDK: Faltan variables de entorno necesarias")
      console.error(`ProjectID: ${projectId ? "OK" : "FALTA"}`)
      console.error(`ClientEmail: ${clientEmail ? "OK" : "FALTA"}`)
      console.error(`PrivateKey: ${privateKey ? "OK" : "FALTA"}`)
    } else {
      const serviceAccount = {
        projectId,
        clientEmail,
        // Reemplazar los caracteres de escape \\n por saltos de línea reales \n
        privateKey: privateKey.replace(/\\n/g, "\n"),
      }

      // Inicializar la app solo si no existe ya
      const app = getApps().length === 0 ? initializeApp({ credential: cert(serviceAccount as any) }) : getApp()

      adminDb = getFirestore(app)
      console.log("Firebase Admin SDK inicializado correctamente")
    }
  } catch (error) {
    console.error("Error al inicializar Firebase Admin SDK:", error)
  }
}

export { adminDb }
