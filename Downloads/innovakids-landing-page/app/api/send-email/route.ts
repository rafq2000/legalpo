import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    const emailjsServiceId = process.env.EMAILJS_SERVICE_ID
    const emailjsTemplateId = process.env.EMAILJS_TEMPLATE_ID
    const emailjsPublicKey = process.env.EMAILJS_PUBLIC_KEY

    if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
      console.error("EmailJS environment variables not configured")
      return NextResponse.json({ success: false, error: "Email service not configured" }, { status: 500 })
    }

    // Send email using EmailJS REST API
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: emailjsServiceId,
        template_id: emailjsTemplateId,
        user_id: emailjsPublicKey,
        template_params: {
          name: name,
          email: email,
          phone: phone || "No proporcionado",
          message: message,
          to_email: "innovakidslatam@gmail.com",
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("EmailJS API error:", errorText)
      throw new Error("Failed to send email via EmailJS")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error in send-email API:", error)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}
