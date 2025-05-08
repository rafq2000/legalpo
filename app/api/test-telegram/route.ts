import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function POST(req: Request) {
  try {
    // Verificar si el usuario es administrador
    const session = await getServerSession(authOptions)
    const isAdmin = session?.user?.email === process.env.ADMIN_EMAIL

    if (!isAdmin) {
      return NextResponse.json({ success: false, error: "No autorizado" }, { status: 403 })
    }

    const { botToken, chatId, message } = await req.json()

    if (!botToken || !chatId || !message) {
      return NextResponse.json({ success: false, error: "Faltan parámetros requeridos" }, { status: 400 })
    }

    // Enviar mensaje a Telegram
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
      return NextResponse.json(
        { success: false, error: data.description || "Error al enviar mensaje" },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error al enviar mensaje a Telegram:", error)
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Error desconocido" },
      { status: 500 },
    )
  }
}
