// utils/firebaseClient.ts
import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getAnalytics, isSupported } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAtwSjM26-HtEg14gGbW6gKh7zSlWg7idU",
  authDomain: "legalpo-7c821.firebaseapp.com",
  projectId: "legalpo-7c821",
  storageBucket: "legalpo-7c821.appspot.com",
  messagingSenderId: "746335323144",
  appId: "1:746335323144:web:c05dc1cbbf2694df4abdbd",
  measurementId: "G-N6KKGKJMB3",
}

// Inicialización condicional para cliente/servidor
let app = null
let db = null
let auth = null
let analytics = null

// Solo inicializar Firebase en el cliente
if (typeof window !== "undefined") {
  try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]
    db = getFirestore(app)
    auth = getAuth(app)
  } catch (error) {
    console.error("Error inicializando Firebase:", error)
  }
}

// Esta función inicializará Firebase si aún no se ha inicializado
const getFirebaseApp = () => {
  if (typeof window === "undefined") {
    return null // Estamos en el servidor
  }

  if (!app) {
    try {
      app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]
    } catch (error) {
      console.error("Error inicializando Firebase:", error)
      return null
    }
  }
  return app
}

// Esta función inicializará Firestore si aún no se ha inicializado
const getFirestoreDb = () => {
  if (typeof window === "undefined") {
    return null // Estamos en el servidor
  }

  if (!db) {
    const firebaseApp = getFirebaseApp()
    if (firebaseApp) {
      try {
        db = getFirestore(firebaseApp)
      } catch (error) {
        console.error("Error inicializando Firestore:", error)
        return null
      }
    }
  }
  return db
}

// Esta función inicializará Auth si aún no se ha inicializado
const getFirebaseAuth = () => {
  if (typeof window === "undefined") {
    return null // Estamos en el servidor
  }

  if (!auth) {
    const firebaseApp = getFirebaseApp()
    if (firebaseApp) {
      try {
        auth = getAuth(firebaseApp)
      } catch (error) {
        console.error("Error inicializando Auth:", error)
        return null
      }
    }
  }
  return auth
}

// Esta función inicializará Analytics si aún no se ha inicializado
const initializeAnalytics = async () => {
  if (typeof window === "undefined") {
    return null // Estamos en el servidor
  }

  if (!analytics) {
    const firebaseApp = getFirebaseApp()
    if (firebaseApp) {
      try {
        const isAnalyticsSupported = await isSupported()
        if (isAnalyticsSupported) {
          analytics = getAnalytics(firebaseApp)
          console.log("Firebase Analytics inicializado correctamente")
        }
      } catch (error) {
        console.error("Firebase Analytics error:", error)
      }
    }
  }
  return analytics
}

// Inicializar Analytics automáticamente en el cliente
if (typeof window !== "undefined") {
  initializeAnalytics().catch(console.error)
}

export { getFirebaseApp, getFirestoreDb as db, getFirebaseAuth as auth, analytics, initializeAnalytics }
