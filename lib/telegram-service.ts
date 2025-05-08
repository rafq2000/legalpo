/**
 * Servicio para enviar notificaciones a Telegram
 * Compatible con entornos serverless
 */

export async function sendTelegramNotification(message: string): Promise<{ success: boolean; error?: any }> {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.warn("[TELEGRAM] Faltan credenciales. Configurar TELEGRAM_BOT_TOKEN y TELEGRAM_CHAT_ID")
      return { success: false, error: "Faltan credenciales de Telegram" }
    }

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("[TELEGRAM] Error al enviar notificación:", errorData)
      return { success: false, error: errorData }
    }

    const data = await response.json()
    console.log("[TELEGRAM] Notificación enviada correctamente")
    return { success: true }
  } catch (error) {
    console.error("[TELEGRAM] Error al enviar notificación:", error)
    return { success: false, error }
  }
}
