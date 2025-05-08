export async function sendTelegramNotification(message: string): Promise<{ success: boolean; error?: any }> {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.warn("TELEGRAM_BOT_TOKEN o TELEGRAM_CHAT_ID no están configuradas")
      return { success: false, error: "TELEGRAM_BOT_TOKEN o TELEGRAM_CHAT_ID no están configuradas" }
    }

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
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

    const data = await response.json()

    if (!response.ok) {
      console.error("Error al enviar mensaje a Telegram:", data)
      return { success: false, error: data.description || "Error al enviar mensaje" }
    }

    console.log("Mensaje enviado a Telegram correctamente")
    return { success: true }
  } catch (error) {
    console.error("Excepción al enviar mensaje a Telegram:", error)
    return { success: false, error }
  }
}
