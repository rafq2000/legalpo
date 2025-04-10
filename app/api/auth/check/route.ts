import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Verificar que las variables de entorno de autenticación estén configuradas
    if (!process.env.NEXTAUTH_SECRET || !process.env.NEXTAUTH_URL) {
      return NextResponse.json({ error: "Faltan variables de entorno de autenticación" }, { status: 500 })
    }

    if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
      return NextResponse.json({ error: "Faltan variables de entorno de Google Auth" }, { status: 500 })
    }

    return NextResponse.json({ status: "ok" })
  } catch (error) {
    console.error("Error al verificar la configuración de autenticación:", error)
    return NextResponse.json({ error: "Error al verificar la configuración de autenticación" }, { status: 500 })
  }
}
