import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    const { key } = await request.json()

    // Verificar la clave de administrador
    if (!key || key !== process.env.ADMIN_AUTH_KEY) {
      return NextResponse.json({ error: "Clave inválida" }, { status: 401 })
    }

    // Establecer una cookie de autenticación
    cookies().set({
      name: "admin_auth",
      value: process.env.ADMIN_AUTH_KEY,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24, // 24 horas
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error al establecer la cookie:", error)
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 })
  }
}
