import { NextResponse } from "next/server"
import { registrarWhatsApp } from "@/lib/analytics"

// Esta es una ruta de ejemplo para un webhook de WhatsApp
// En una implementación real, necesitarías integrar con la API de WhatsApp Business
export async function POST(req: Request) {
  try {
    const data = await req.json()

    // Verificar que es una notificación de mensaje entrante de WhatsApp
    // La estructura exacta dependerá de la API de WhatsApp que estés usando
    if (data.entry && data.entry[0]?.changes && data.entry[0]?.changes[0]?.value?.messages) {
      const message = data.entry[0].changes[0].value.messages[0]
      const phoneNumber = message.from

      // Registrar la consulta de WhatsApp
      registrarWhatsApp(phoneNumber)

      // Aquí procesarías el mensaje y enviarías una respuesta
      // ...

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ success: false, error: "Formato de mensaje no válido" })
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error en webhook de WhatsApp:", error)
    }
    return NextResponse.json({ success: false, error: "Error al procesar la solicitud" }, { status: 500 })
  }
}

// Para verificar el webhook (requerido por WhatsApp Business API)
export async function GET(req: Request) {
  const url = new URL(req.url)
  const mode = url.searchParams.get("hub.mode")
  const token = url.searchParams.get("hub.verify_token")
  const challenge = url.searchParams.get("hub.challenge")

  // Verificar token (deberías configurar esto en tu panel de WhatsApp Business)
  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN

  if (mode === "subscribe" && token === verifyToken) {
    return new Response(challenge, { status: 200 })
  }

  return new Response("Verification failed", { status: 403 })
}
