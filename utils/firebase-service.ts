import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore, collection, addDoc, query, where, orderBy, limit, getDocs } from "firebase/firestore"

// Configuración de Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Inicializar Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

// Función para registrar eventos
export async function trackEvent(eventName: string, data: any = {}) {
  try {
    if (typeof window === "undefined") {
      console.warn("trackEvent llamado en el servidor, esto podría no funcionar como se espera")
    }

    const eventData = {
      tipo: eventName,
      datos: data,
      timestamp: new Date(),
      createdAt: new Date().toISOString(), // Para compatibilidad
    }

    const docRef = await addDoc(collection(db, "eventos"), eventData)
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error("Error al registrar evento:", error)
    return { success: false, error }
  }
}

// Función para registrar vistas de página
export async function trackPageView(path: string, title = "", referrer = "") {
  try {
    if (typeof window === "undefined") return { success: false, error: "No se puede ejecutar en el servidor" }

    const pageViewData = {
      tipo: "page_view",
      datos: {
        path,
        title,
        referrer,
        userAgent: navigator.userAgent,
      },
      timestamp: new Date(),
      createdAt: new Date().toISOString(),
    }

    const docRef = await addDoc(collection(db, "eventos"), pageViewData)
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error("Error al registrar vista de página:", error)
    return { success: false, error }
  }
}

// Función para obtener estadísticas de eventos
export async function getEventStats(days = 30) {
  try {
    const endDate = new Date()
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    const eventsQuery = query(
      collection(db, "eventos"),
      where("timestamp", ">=", startDate),
      where("timestamp", "<=", endDate),
      orderBy("timestamp", "desc"),
      limit(1000), // Límite alto para obtener suficientes datos
    )

    const snapshot = await getDocs(eventsQuery)
    const events = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

    // Procesar eventos para obtener estadísticas
    const pageViews = events.filter((event) => event.tipo === "page_view").length
    const uniqueUsers = new Set(events.map((event) => event.datos?.userId || event.datos?.email || "anonymous")).size
    const eventsByType = events.reduce((acc, event) => {
      const tipo = event.tipo || "unknown"
      acc[tipo] = (acc[tipo] || 0) + 1
      return acc
    }, {})

    return {
      totalEvents: events.length,
      pageViews,
      uniqueUsers,
      eventsByType,
      recentEvents: events.slice(0, 10), // Últimos 10 eventos
    }
  } catch (error) {
    console.error("Error al obtener estadísticas:", error)
    return {
      totalEvents: 0,
      pageViews: 0,
      uniqueUsers: 0,
      eventsByType: {},
      recentEvents: [],
    }
  }
}

export { db, app }
