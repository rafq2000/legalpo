import { trackEvent as firebaseTrackEvent } from "@/utils/firebase-service"

// Definir la estructura de los datos de análisis
interface Analytics {
  totalUsers: number
  totalConsultas: number
  totalDocumentos: number
  totalWhatsApp: number
  consultasPorDia: Record<string, number>
  documentosPorDia: Record<string, number>
  whatsappPorDia: Record<string, number>
  ultimaActualizacion: string
  usuariosUnicos: string[]
}

// Datos de analítica en memoria (solo para desarrollo)
// En producción, deberías usar una base de datos como MongoDB, Supabase, etc.
const mockAnalytics: Analytics = {
  totalUsers: 1,
  totalConsultas: 1,
  totalDocumentos: 1,
  totalWhatsApp: 0,
  consultasPorDia: { "2025-03-23": 1 },
  documentosPorDia: { "2025-03-23": 1 },
  whatsappPorDia: {},
  ultimaActualizacion: new Date().toISOString(),
  usuariosUnicos: ["anonymous-user"],
}

// Registrar una nueva consulta
export function registrarConsulta(userId?: string): string {
  const userIdToUse = userId || "anonymous-user"

  // En una implementación real, aquí guardarías los datos en una base de datos
  console.log(`Consulta registrada para usuario: ${userIdToUse}`)

  return userIdToUse
}

// Registrar un nuevo análisis de documento
export function registrarDocumento(userId?: string): string {
  const userIdToUse = userId || "anonymous-user"

  // En una implementación real, aquí guardarías los datos en una base de datos
  console.log(`Documento registrado para usuario: ${userIdToUse}`)

  return userIdToUse
}

// Registrar una nueva consulta por WhatsApp
export function registrarWhatsApp(phoneNumber?: string): string {
  const userIdToUse = phoneNumber || "anonymous-user"

  // En una implementación real, aquí guardarías los datos en una base de datos
  console.log(`Consulta WhatsApp registrada para: ${userIdToUse}`)

  return userIdToUse
}

// Obtener todos los datos de análisis
export function getAnalytics() {
  // En una implementación real, aquí consultarías los datos desde una base de datos
  return mockAnalytics
}

// Función para rastrear eventos de analytics
interface AnalyticsEvent {
  action: string
  category?: string
  label?: string
  value?: number
  [key: string]: any
}

// Mantener la función trackEvent original para compatibilidad
export function trackEvent(action: string, params?: AnalyticsEvent): void {
  try {
    // Registrar en Google Analytics si está disponible
    if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
      // @ts-ignore
      window.gtag && window.gtag("event", action, params)
    }

    // También registrar en Firebase
    firebaseTrackEvent(action, params).catch((error) => {
      console.error("Error al registrar evento en Firebase:", error)
    })

    // Log en desarrollo
    if (process.env.NODE_ENV !== "production") {
      console.log(`[Analytics] Track event: ${action}`, params)
    }
  } catch (error) {
    console.error("Error tracking event:", error)
  }
}

// Clase mejorada para analytics con manejo condicional
export class AnalyticsService {
  private apiKey: string | undefined

  constructor() {
    this.apiKey = process.env.ANALYTICS_KEY
  }

  async trackEventWithApi(eventName: string, eventData: any): Promise<boolean> {
    try {
      // Verificar si la API key está disponible
      if (!this.apiKey) {
        console.warn("Analytics API key no disponible. Evento no registrado:", eventName)
        return false
      }

      // Implementar lógica de tracking con manejo de errores
      const response = await fetch("https://api.analytics-service.com/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          event: eventName,
          data: eventData,
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error(`Error al registrar evento: ${response.statusText}`)
      }

      return true
    } catch (error) {
      console.error("Error en servicio de analytics:", error)
      return false
    }
  }

  // Método seguro que no falla si no hay API key
  async safeTrackEvent(eventName: string, eventData: any): Promise<void> {
    try {
      // Usar la función trackEvent original para compatibilidad
      trackEvent(eventName, eventData)

      // Adicionalmente, intentar enviar a la API si está configurada
      await this.trackEventWithApi(eventName, eventData).catch(() => {
        // Silenciar errores de API
      })
    } catch (error) {
      // Silenciar errores en producción
      console.warn("Error al registrar evento (silenciado):", eventName)
    }
  }
}

// Exportar una instancia singleton
export const analyticsService = new AnalyticsService()
