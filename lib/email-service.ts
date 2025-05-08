// Versión simplificada que no usa módulos de Node.js

/**
 * Servicio de email simplificado que solo registra los intentos de envío
 * pero no intenta enviar realmente correos para evitar dependencias problemáticas
 */
export async function sendEmail(options: {
  to?: string
  subject: string
  html: string
  from?: string
  cc?: string[]
  bcc?: string[]
}): Promise<{ success: boolean; error?: any; id?: string }> {
  // Solo registramos el intento de envío
  console.log(`[EMAIL LOG] Intento de envío a ${options.to || "contacto@legalpo.cl"}: ${options.subject}`)

  // Devolvemos éxito simulado
  return {
    success: true,
    id: `log-${Date.now()}`,
  }
}
