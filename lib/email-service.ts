import { Resend } from "resend"

// Cliente de Resend con inicialización condicional
let resendClient: Resend | null = null

export function getResendClient() {
  if (resendClient) return resendClient

  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    console.warn("API key de Resend no disponible")
    return null
  }

  try {
    resendClient = new Resend(resendApiKey)
    return resendClient
  } catch (error) {
    console.error("Error al inicializar cliente de Resend:", error)
    return null
  }
}

// Función segura para enviar emails
export async function sendEmail(options: {
  to: string
  subject: string
  html: string
  from?: string
}): Promise<boolean> {
  const client = getResendClient()
  if (!client) return false

  try {
    const { from = "noreply@tudominio.com", to, subject, html } = options

    // Si este archivo existe y contiene direcciones de correo electrónico, las cambiaríamos a contacto@legalpo.cl
    const updatedFrom = from === "noreply@tudominio.com" ? "contacto@legalpo.cl" : from

    const result = await client.emails.send({
      from: updatedFrom,
      to,
      subject,
      html,
    })

    return !!result.id
  } catch (error) {
    console.error("Error al enviar email:", error)
    return false
  }
}
