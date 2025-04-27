import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(request: NextRequest) {
  try {
    const cookieStore = cookies()
    const authCookie = cookieStore.get("admin_auth")

    // Verificar si existe la cookie y si coincide con la clave de administrador
    if (!authCookie || authCookie.value !== process.env.ADMIN_AUTH_KEY) {
      return NextResponse.json({ authenticated: false }, { status: 401 })
    }

    return NextResponse.json({ authenticated: true })
  } catch (error) {
    console.error("Error al verificar autenticación:", error)
    return NextResponse.json({ error: "Error al verificar autenticación" }, { status: 500 })
  }
}
