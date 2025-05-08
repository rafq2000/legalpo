import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { botToken, chatId } = await req.json()

    if (!botToken || !chatId) {
      return NextResponse.json({ success: false, error: "Faltan token del bot o ID del chat" }, { status: 400 })
    }

    // Enviar mensaje de prueba directamente a la API de Telegram
    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: "🔔 Prueba de configuración\n\nSi estás viendo este mensaje, la configuración de Telegram para LegalPO está funcionando correctamente.",
          parse_mode: "HTML",
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        return NextResponse.json(
          {
            success: false,
            error: "Error al enviar mensaje de prueba",
            details: errorData,
          },
          { status: 500 },
        )
      }

      const data = await response.json()
      return NextResponse.json({
        success: true,
        message: "Mensaje de prueba enviado correctamente. Verifica tu chat de Telegram.",
        data,
      })
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          error: "Error al enviar mensaje de prueba",
          details: error instanceof Error ? error.message : "Error desconocido",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error en prueba de Telegram:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Error al procesar la solicitud",
        details: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 },
    )
  }
}
