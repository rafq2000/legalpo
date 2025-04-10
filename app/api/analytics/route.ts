import { NextResponse } from "next/server"
import { getAnalytics } from "@/lib/analytics"

export async function GET(req: Request) {
  try {
    // Verificar si hay un parámetro de autenticación
    const url = new URL(req.url)
    const authKey = url.searchParams.get("key")

    // Clave simple para proteger el acceso a las estadísticas
    if (authKey !== process.env.ANALYTICS_KEY) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    // Obtener datos de analítica
    const analytics = getAnalytics()

    return NextResponse.json(analytics)
  } catch (error) {
    console.error("Error al obtener analíticas:", error)
    return NextResponse.json({ error: "Error al obtener datos de analítica" }, { status: 500 })
  }
}
