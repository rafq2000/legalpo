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
    const privateKeyId = process.env.FIREBASE_PRIVATE_KEY_ID
    const clientId = process.env.FIREBASE_CLIENT_ID
    const authUri = process.env.FIREBASE_AUTH_URI
    const tokenUri = process.env.FIREBASE_TOKEN_URI
    const authProviderX509CertUrl = process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL
    const clientX509CertUrl = process.env.FIREBASE_CLIENT_X509_CERT_URL

    // Verificar variables críticas
    if (!projectId || !clientEmail || !privateKey) {
      console.error("Firebase Admin SDK: Faltan variables de entorno críticas")
      console.error(`ProjectID: ${projectId ? "OK" : "FALTA"}`)
      console.error(`ClientEmail: ${clientEmail ? "OK" : "FALTA"}`)
      console.error(`PrivateKey: ${privateKey ? "OK" : "FALTA"}`)
    } else {
      // Crear objeto de credenciales completo
      const serviceAccount = {
        type: "service_account",
        project_id: projectId,
        private_key_id: privateKeyId,
        private_key: privateKey.replace(/\\n/g, "\n"),
        client_email: clientEmail,
        client_id: clientId,
        auth_uri: authUri || "https://accounts.google.com/o/oauth2/auth",
        token_uri: tokenUri || "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: authProviderX509CertUrl || "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: clientX509CertUrl,
      }

      // Inicializar la app solo si no existe ya
      const app = getApps().length === 0 ? initializeApp({ credential: cert(serviceAccount as any) }) : getApp()

      adminDb = getFirestore(app)
      console.log("✅ Firebase Admin SDK inicializado correctamente")
    }
  } catch (error) {
    console.error("❌ Error al inicializar Firebase Admin SDK:", error)
  }
}

export { adminDb }
