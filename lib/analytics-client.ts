"use server"
import { BetaAnalyticsDataClient } from "@google-analytics/data"

// Inicializar cliente de Google Analytics
let analyticsClient: any = null

try {
  if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GA4_PROPERTY_ID) {
    analyticsClient = new BetaAnalyticsDataClient({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
    })
    console.log("✅ Cliente de Google Analytics inicializado correctamente")
  } else {
    console.warn("⚠️ Variables de entorno de Google Analytics no disponibles:", {
      email: !!process.env.GOOGLE_CLIENT_EMAIL,
      key: !!process.env.GOOGLE_PRIVATE_KEY,
      propertyId: !!process.env.GA4_PROPERTY_ID,
    })
  }
} catch (error) {
  console.error("❌ Error al inicializar cliente de Google Analytics:", error)
}

// Función para obtener métricas básicas de GA4
export async function getBasicMetrics(startDate: string, endDate: string) {
  if (!analyticsClient || !process.env.GA4_PROPERTY_ID) {
    console.warn("⚠️ Cliente de Google Analytics no disponible")
    return null
  }

  try {
    console.log(`🔄 Obteniendo métricas básicas de GA4 para el período ${startDate} - ${endDate}`)
    
    const [sessionsResp, usersResp, durationResp] = await Promise.all([
      analyticsClient.runReport({
        property: `properties/${process.env.GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate, endDate }],
        metrics: [{ name: "sessions" }],
      }),
      analyticsClient.runReport({
        property: `properties/${process.env.GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate, endDate }],
        metrics: [{ name: "activeUsers" }],
      }),
      analyticsClient.runReport({
        property: `properties/${process.env.GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate, endDate }],
        metrics: [\
