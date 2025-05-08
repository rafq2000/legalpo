import nodemailer from "nodemailer"

// Configuración del transporte de correo
let mailTransporter: nodemailer.Transporter | null = null

export function getMailTransporter() {
  if (mailTransporter) return mailTransporter

  // Credenciales de Zoho Mail
  const zohoUser = "contacto@legalpo.cl"
  const zohoPass = process.env.ZOHO_MAIL_PASSWORD

  if (!zohoPass) {
    console.warn("Contraseña de Zoho Mail no disponible")
    return null
  }

  try {
    // Crear transporter de Nodemailer con Zoho
    mailTransporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587, // Usar puerto 587 en lugar de 465 (más compatible)
      secure: false, // TLS en lugar de SSL
      auth: {
        user: zohoUser,
        pass: zohoPass,
      },
      tls: {
        // No verificar certificados - puede ayudar con problemas de conexión
        rejectUnauthorized: false,
      },
    })

    console.log("Transporter de correo inicializado correctamente")
    return mailTransporter
  } catch (error) {
    console.error("Error al inicializar cliente de correo:", error)
    return null
  }
}

// Función para enviar emails
export async function sendEmail(options: {
  to?: string
  subject: string
  html: string
  from?: string
  cc?: string[]
  bcc?: string[]
}): Promise<{ success: boolean; error?: any; id?: string }> {
  const transporter = getMailTransporter()
  if (!transporter) return { success: false, error: "No hay transporter de correo disponible" }

  try {
    // Configuración del correo
    const { subject, html, cc = [], bcc = [] } = options
    const to = "contacto@legalpo.cl" // Siempre enviar a esta dirección
    const from = "contacto@legalpo.cl" // Siempre enviar desde esta dirección

    console.log(`Enviando correo a ${to} con asunto: ${subject}`)

    // Enviar correo con Nodemailer
    const result = await transporter.sendMail({
      from,
      to,
      subject,
      html,
      cc,
      bcc,
    })

    if (result.messageId) {
      console.log(`Correo enviado correctamente con ID: ${result.messageId}`)
      return { success: true, id: result.messageId }
    } else {
      console.error("Envío de correo falló - no se recibió ID:", result)
      return { success: false, error: "No se recibió ID del servicio de correo" }
    }
  } catch (error) {
    console.error("Error al enviar correo:", error)
    return { success: false, error }
  }
}
