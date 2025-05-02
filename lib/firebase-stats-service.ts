import { collection, query, where, getDocs, orderBy, Timestamp, getCountFromServer } from "firebase/firestore"
import { db } from "@/utils/firebaseClient" // Importamos directamente el objeto db, no una función

// Interfaces para los datos de estadísticas
export interface EventStats {
  totalEvents: number
  uniqueUsers: number
  registeredEmails: number
  whatsappClicks: number
  mostPopularPage: {
    path: string
    views: number
  } | null
  sessionsByDay: {
    date: string
    count: number
  }[]
}

export interface PageView {
  path: string
  views: number
}

export interface DailyStats {
  date: string
  active_users: number
  new_users: number
  total_sessions: number
}

/**
 * Obtiene estadísticas de eventos desde Firestore
 * @param days Número de días para obtener estadísticas (por defecto 30)
 */
export async function getEventStats(days = 30): Promise<EventStats> {
  try {
    // Calcular fecha de inicio (hace X días)
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)
    const firestoreStartDate = Timestamp.fromDate(startDate)

    // Referencia a la colección de eventos - CORREGIDO: db ya es el objeto, no una función
    const eventosRef = collection(db, "eventos")

    // Consulta base para eventos en el rango de fechas
    const baseQuery = query(eventosRef, where("timestamp", ">=", firestoreStartDate), orderBy("timestamp", "desc"))

    // 1. Obtener total de eventos
    const totalEventsSnapshot = await getCountFromServer(baseQuery)
    const totalEvents = totalEventsSnapshot.data().count

    // 2. Obtener todos los eventos para procesar
    const eventsSnapshot = await getDocs(baseQuery)

    // Conjuntos para almacenar valores únicos
    const uniqueUserIds = new Set<string>()
    const uniqueEmails = new Set<string>()
    let whatsappClicks = 0

    // Mapa para contar vistas de página
    const pageViews = new Map<string, number>()

    // Mapa para contar sesiones por día
    const sessionsByDay = new Map<string, number>()

    // Procesar cada documento
    eventsSnapshot.forEach((doc) => {
      const data = doc.data()

      // Contar usuarios únicos
      if (data.userId) {
        uniqueUserIds.add(data.userId)
      }

      // Contar emails registrados
      if (data.email || (data.datos && data.datos.email)) {
        const email = data.email || data.datos.email
        if (email && typeof email === "string" && email.includes("@")) {
          uniqueEmails.add(email)
        }
      }

      // Contar clics de WhatsApp
      if (data.tipo === "click_whatsapp") {
        whatsappClicks++
      }

      // Contar vistas de página
      if (data.tipo === "page_view" && data.datos && data.datos.path) {
        const path = data.datos.path
        pageViews.set(path, (pageViews.get(path) || 0) + 1)
      }

      // Agrupar por día
      if (data.timestamp && typeof data.timestamp.toDate === "function") {
        const date = data.timestamp.toDate().toISOString().split("T")[0]
        sessionsByDay.set(date, (sessionsByDay.get(date) || 0) + 1)
      }
    })

    // Encontrar la página más popular
    let mostPopularPage: { path: string; views: number } | null = null
    let maxViews = 0

    pageViews.forEach((views, path) => {
      if (views > maxViews) {
        maxViews = views
        mostPopularPage = { path, views }
      }
    })

    // Convertir el mapa de sesiones por día a un array ordenado
    const sessionsByDayArray = Array.from(sessionsByDay.entries())
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date))

    return {
      totalEvents,
      uniqueUsers: uniqueUserIds.size,
      registeredEmails: uniqueEmails.size,
      whatsappClicks,
      mostPopularPage,
      sessionsByDay: sessionsByDayArray,
    }
  } catch (error) {
    console.error("Error al obtener estadísticas de eventos:", error)
    throw error
  }
}

/**
 * Obtiene las páginas más visitadas
 * @param days Número de días para obtener estadísticas
 * @param limit Límite de resultados
 */
export async function getMostVisitedPages(days = 30, pageLimit = 10): Promise<PageView[]> {
  try {
    // Calcular fecha de inicio
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)
    const firestoreStartDate = Timestamp.fromDate(startDate)

    // Consulta para eventos de tipo page_view - CORREGIDO: db ya es el objeto, no una función
    const pageViewsQuery = query(
      collection(db, "eventos"),
      where("tipo", "==", "page_view"),
      where("timestamp", ">=", firestoreStartDate),
    )

    const snapshot = await getDocs(pageViewsQuery)

    // Mapa para contar vistas por página
    const pageViews = new Map<string, number>()

    snapshot.forEach((doc) => {
      const data = doc.data()
      if (data.datos && data.datos.path) {
        const path = data.datos.path
        pageViews.set(path, (pageViews.get(path) || 0) + 1)
      }
    })

    // Convertir a array y ordenar por número de vistas
    return Array.from(pageViews.entries())
      .map(([path, views]) => ({ path, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, pageLimit)
  } catch (error) {
    console.error("Error al obtener páginas más visitadas:", error)
    return []
  }
}

/**
 * Obtiene estadísticas diarias de usuarios activos
 * @param days Número de días para obtener estadísticas
 */
export async function getDailyUserStats(days = 30): Promise<DailyStats[]> {
  try {
    // Calcular fecha de inicio
    const endDate = new Date()
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    // Crear un mapa para todos los días en el rango
    const dailyStatsMap = new Map<string, DailyStats>()

    // Inicializar el mapa con todos los días en el rango
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split("T")[0]
      dailyStatsMap.set(dateStr, {
        date: dateStr,
        active_users: 0,
        new_users: 0,
        total_sessions: 0,
      })
    }

    // Consulta para eventos en el rango de fechas - CORREGIDO: db ya es el objeto, no una función
    const eventsQuery = query(
      collection(db, "eventos"),
      where("timestamp", ">=", Timestamp.fromDate(startDate)),
      where("timestamp", "<=", Timestamp.fromDate(endDate)),
    )

    const snapshot = await getDocs(eventsQuery)

    // Mapas para rastrear usuarios activos por día
    const activeUsersByDay = new Map<string, Set<string>>()

    // Procesar cada documento
    snapshot.forEach((doc) => {
      const data = doc.data()

      if (data.timestamp && typeof data.timestamp.toDate === "function") {
        const date = data.timestamp.toDate().toISOString().split("T")[0]
        const userId = data.userId || doc.id // Usar doc.id como fallback

        // Inicializar el conjunto si no existe
        if (!activeUsersByDay.has(date)) {
          activeUsersByDay.set(date, new Set())
        }

        // Añadir el usuario al conjunto de usuarios activos para este día
        activeUsersByDay.get(date)?.add(userId)

        // Incrementar el contador de sesiones
        if (dailyStatsMap.has(date)) {
          dailyStatsMap.get(date)!.total_sessions++
        }
      }
    })

    // Actualizar el mapa con los usuarios activos
    activeUsersByDay.forEach((users, date) => {
      if (dailyStatsMap.has(date)) {
        dailyStatsMap.get(date)!.active_users = users.size
      }
    })

    // Convertir el mapa a un array ordenado por fecha
    return Array.from(dailyStatsMap.values()).sort((a, b) => a.date.localeCompare(b.date))
  } catch (error) {
    console.error("Error al obtener estadísticas diarias:", error)
    return []
  }
}

/**
 * Obtiene las fuentes de tráfico
 * @param days Número de días para obtener estadísticas
 */
export async function getTrafficSources(days = 30): Promise<{ source: string; count: number }[]> {
  try {
    // Calcular fecha de inicio
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)
    const firestoreStartDate = Timestamp.fromDate(startDate)

    // Consulta para eventos de tipo page_view - CORREGIDO: db ya es el objeto, no una función
    const pageViewsQuery = query(
      collection(db, "eventos"),
      where("tipo", "==", "page_view"),
      where("timestamp", ">=", firestoreStartDate),
    )

    const snapshot = await getDocs(pageViewsQuery)

    // Mapa para contar fuentes
    const sourcesMap = new Map<string, number>()

    snapshot.forEach((doc) => {
      const data = doc.data()
      let source = "Directo"

      if (data.datos) {
        if (data.datos.referrer) {
          try {
            const url = new URL(data.datos.referrer)
            source = url.hostname
          } catch (e) {
            source = data.datos.referrer
          }
        } else if (data.datos.source) {
          source = data.datos.source
        }
      }

      sourcesMap.set(source, (sourcesMap.get(source) || 0) + 1)
    })

    // Convertir a array y ordenar por número de visitas
    return Array.from(sourcesMap.entries())
      .map(([source, count]) => ({ source, count }))
      .sort((a, b) => b.count - a.count)
  } catch (error) {
    console.error("Error al obtener fuentes de tráfico:", error)
    return []
  }
}
