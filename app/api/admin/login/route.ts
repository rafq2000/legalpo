import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: NextRequest) {
  try {
    const { key } = await request.json()

    // Verificar la clave de administrador
    if (key !== process.env.ADMIN_AUTH_KEY) {
      return NextResponse.json({ error: "Clave de administrador incorrecta" }, { status: 401 })
    }

    // Establecer una cookie de autenticación
    const cookieStore = cookies()
    cookieStore.set({
      name: "admin_auth",
      value: process.env.ADMIN_AUTH_KEY,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      // Expira en 24 horas
      maxAge: 60 * 60 * 24,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error en la autenticación de administrador:", error)
    return NextResponse.json({ error: "Error en la autenticación" }, { status: 500 })
  }
}
