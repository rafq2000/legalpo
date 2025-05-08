import { sendEmail } from "./email-service"

// Función para enviar notificación de feedback por correo
export async function notifyFeedbackByEmail(feedback: {
  rating: number
  comment: string
  userId?: string
  userEmail?: string
  page?: string
}) {
  try {
    const { rating, comment, userId, userEmail, page } = feedback

    // Crear contenido HTML del correo
    const html = `
      <h1>Nueva retroalimentación recibida</h1>
      <p><strong>Calificación:</strong> ${rating} de 5</p>
      <p><strong>Comentario:</strong> ${comment || "No proporcionado"}</p>
      <p><strong>Usuario:</strong> ${userId || "Anónimo"}</p>
      <p><strong>Email:</strong> ${userEmail || "No proporcionado"}</p>
      <p><strong>Página:</strong> ${page || "No especificada"}</p>
      <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
    `

    // Enviar correo
    const result = await sendEmail({
      subject: `Nueva retroalimentación: ${rating}/5 - LegalPO`,
      html,
    })

    return result.success
  } catch (error) {
    console.error("Error al enviar notificación de feedback por correo:", error)
    return false
  }
}
