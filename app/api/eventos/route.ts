import { NextResponse } from "next/server"
import { guardarEvento } from "@/utils/firestore-service"
import { getServerSession } from "next-auth/next"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { tipo, datos = {} } = body

    if (!tipo) {
      return NextResponse.json({ success: false, error: "El tipo de evento es requerido" }, { status: 400 })
    }

    // Obtener sesión si está disponible
    const session = await getServerSession()
    const userId = session?.user?.email || undefined

    // Obtener ID de sesión de las cookies
    const cookieStore = cookies()
    const sessionId = cookieStore.get("session_id")?.value

    // Guardar evento en Firestore
    const eventoId = await guardarEvento(tipo, datos, userId, sessionId)

    return NextResponse.json({
      success: true,
      message: `Evento "${tipo}" registrado correctamente`,
      id: eventoId,
    })
  } catch (error: any) {
    console.error("Error al procesar evento:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Error al procesar el evento",
      },
      { status: 500 },
    )
  }
}
