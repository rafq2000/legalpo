// Archivo de barril para exportar todas las funciones de analítica

// Exportar funciones del servidor
export {
  registrarConsulta,
  registrarDocumento,
  registrarWhatsApp,
  getAnalytics,
  logAnalyticsEvent,
} from "../app/actions/analytics-actions"

// Exportar funciones del cliente
export { trackEvent } from "./client-analytics"
