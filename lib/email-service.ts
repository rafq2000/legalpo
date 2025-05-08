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
  to?: string
  subject: string
  html: string
  from?: string
  cc?: string[]
  bcc?: string[]
}): Promise<{ success: boolean; error?: any; id?: string }> {
  const client = getResendClient()
  if (!client) return { success: false, error: "No Resend client available" }

  try {
    // Always send to contacto@legalpo.cl
    const { from = "contacto@legalpo.cl", subject, html, cc = [], bcc = [] } = options

    // Ensure contacto@legalpo.cl is always in the recipients
    const to = "contacto@legalpo.cl"

    console.log(`Sending email to ${to} with subject: ${subject}`)

    const result = await client.emails.send({
      from,
      to,
      subject,
      html,
      cc,
      bcc,
    })

    if (result.id) {
      console.log(`Email sent successfully with ID: ${result.id}`)
      return { success: true, id: result.id }
    } else {
      console.error("Email sending failed - no ID returned:", result)
      return { success: false, error: "No ID returned from email service" }
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error }
  }
}
