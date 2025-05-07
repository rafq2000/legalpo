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
    let userId: string | undefined
    try {
      const session = await getServerSession()
      userId = session?.user?.email || undefined
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Error al obtener la sesión:", error)
      }
      // Continuar sin userId si hay error
    }

    // Obtener ID de sesión de las cookies
    let sessionId: string | undefined
    try {
      const cookieStore = cookies()
      sessionId = cookieStore.get("session_id")?.value
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Error al obtener cookies:", error)
      }
      // Continuar sin sessionId si hay error
    }

    // Guardar evento en Firestore
    try {
      const eventoId = await guardarEvento(tipo, datos, userId, sessionId)

      return NextResponse.json({
        success: true,
        message: `Evento "${tipo}" registrado correctamente`,
        id: eventoId,
      })
    } catch (error: any) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Error al guardar evento en Firestore:", error)
      }
      return NextResponse.json(
        {
          success: false,
          error: error.message || "Error al guardar el evento en Firestore",
        },
        { status: 500 },
      )
    }
  } catch (error: any) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error general al procesar evento:", error)
    }
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Error al procesar el evento",
      },
      { status: 500 },
    )
  }
}
