"use server"

export async function sendEmailViaEmailJS(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const whatsapp = formData.get("whatsapp") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!name || !email || !whatsapp || !message) {
    return { success: false, error: "Todos los campos son requeridos" }
  }

  try {
    // Use EmailJS REST API to send email from server
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: {
          name,
          email,
          whatsapp,
          message,
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] EmailJS API error:", errorText)
      return { success: false, error: "Error al enviar el email" }
    }

    return { success: true }
  } catch (error) {
    console.error("[v0] Error calling EmailJS:", error)
    return { success: false, error: "Error al enviar el email" }
  }
}
