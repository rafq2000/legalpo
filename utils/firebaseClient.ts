// utils/firebaseClient.ts
import { initializeApp, getApps, type FirebaseApp } from "firebase/app"
import { getFirestore, type Firestore } from "firebase/firestore"
import { getAuth, type Auth } from "firebase/auth"
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAtwSjM26-HtEg14gGbW6gKh7zSlWg7idU",
  authDomain: "legalpo-7c821.firebaseapp.com",
  projectId: "legalpo-7c821",
  storageBucket: "legalpo-7c821.appspot.com",
  messagingSenderId: "746335323144",
  appId: "1:746335323144:web:c05dc1cbbf2694df4abdbd",
  measurementId: "G-N6KKGKJMB3",
}

// Variables para almacenar las instancias
let firebaseApp: FirebaseApp | null = null
let firestoreDb: Firestore | null = null
let firebaseAuth: Auth | null = null
let firebaseAnalytics: Analytics | null = null

// Función para inicializar Firebase de manera segura
export function getFirebaseApp(): FirebaseApp | null {
  if (typeof window === "undefined") {
    return null // No inicializar en el servidor
  }

  if (!firebaseApp) {
    try {
      if (!getApps().length) {
        firebaseApp = initializeApp(firebaseConfig)
      } else {
        firebaseApp = getApps()[0]
      }
    } catch (error) {
      console.error("Error al inicializar Firebase:", error)
      return null
    }
  }

  return firebaseApp
}

// Función para obtener Firestore
export function db(): Firestore | null {
  if (typeof window === "undefined") {
    return null // No inicializar en el servidor
  }

  if (!firestoreDb) {
    try {
      const app = getFirebaseApp()
      if (app) {
        firestoreDb = getFirestore(app)
      }
    } catch (error) {
      console.error("Error al inicializar Firestore:", error)
      return null
    }
  }

  return firestoreDb
}

// Función para obtener Auth
export function auth(): Auth | null {
  if (typeof window === "undefined") {
    return null // No inicializar en el servidor
  }

  if (!firebaseAuth) {
    try {
      const app = getFirebaseApp()
      if (app) {
        firebaseAuth = getAuth(app)
      }
    } catch (error) {
      console.error("Error al inicializar Auth:", error)
      return null
    }
  }

  return firebaseAuth
}

// Función para inicializar Analytics
export async function initializeAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") {
    return null // No inicializar en el servidor
  }

  if (!firebaseAnalytics) {
    try {
      const app = getFirebaseApp()
      if (app) {
        const analyticsSupported = await isSupported()
        if (analyticsSupported) {
          firebaseAnalytics = getAnalytics(app)
        }
      }
    } catch (error) {
      console.error("Error al inicializar Analytics:", error)
      return null
    }
  }

  return firebaseAnalytics
}

// Inicializar Analytics automáticamente en el cliente
if (typeof window !== "undefined") {
  initializeAnalytics().catch(console.error)
}

export { firebaseAnalytics as analytics }
