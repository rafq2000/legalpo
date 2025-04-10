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

export function trackEvent(action: string, params?: AnalyticsEvent): void {
  try {
    if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
      // @ts-ignore
      window.gtag("event", action, params)
    } else {
      console.log(`[Analytics] Track event: ${action}`, params)
    }
  } catch (error) {
    console.error("Error tracking event:", error)
  }
}
