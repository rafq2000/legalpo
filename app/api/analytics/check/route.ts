import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Verificar que la variable de entorno de Analytics esté configurada
    if (!process.env.ANALYTICS_KEY) {
      return NextResponse.json({ error: "Falta la variable de entorno ANALYTICS_KEY" }, { status: 500 })
    }

    return NextResponse.json({ status: "ok" })
  } catch (error) {
    console.error("Error al verificar la configuración de Analytics:", error)
    return NextResponse.json({ error: "Error al verificar la configuración de Analytics" }, { status: 500 })
  }
}
