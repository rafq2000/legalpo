export async function checkAnalyticsConfig() {
  const config = {
    ga4: {
      propertyId: process.env.GA4_PROPERTY_ID,
      clientEmail: Boolean(process.env.GOOGLE_CLIENT_EMAIL),
      privateKey: Boolean(process.env.GOOGLE_PRIVATE_KEY),
      privateKeyValid: process.env.GOOGLE_PRIVATE_KEY?.includes("BEGIN PRIVATE KEY"),
    },
    supabase: {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      serviceKey: Boolean(process.env.SUPABASE_SERVICE_KEY),
      serviceKeyValid: process.env.SUPABASE_SERVICE_KEY?.startsWith("eyJ"),
    },
  }

  console.log("📊 Configuración de Analytics:", config)

  const missingVars = []

  if (!config.ga4.propertyId) missingVars.push("GA4_PROPERTY_ID")
  if (!config.ga4.clientEmail) missingVars.push("GOOGLE_CLIENT_EMAIL")
  if (!config.ga4.privateKey) missingVars.push("GOOGLE_PRIVATE_KEY")
  if (!config.ga4.privateKeyValid) missingVars.push("GOOGLE_PRIVATE_KEY (formato incorrecto)")

  if (!config.supabase.url) missingVars.push("NEXT_PUBLIC_SUPABASE_URL")
  if (!config.supabase.serviceKey) missingVars.push("SUPABASE_SERVICE_KEY")
  if (!config.supabase.serviceKeyValid) missingVars.push("SUPABASE_SERVICE_KEY (formato incorrecto)")

  return {
    isValid: missingVars.length === 0,
    missingVars,
    config,
  }
}
