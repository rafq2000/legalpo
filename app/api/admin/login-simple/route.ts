import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const key = formData.get("key") as string

    // Verificar si la clave está configurada
    if (!process.env.ADMIN_AUTH_KEY) {
      console.error("ADMIN_AUTH_KEY no está configurada en el entorno")
      return NextResponse.json({ error: "Error de configuración del servidor" }, { status: 500 })
    }

    // Verificar la clave de administrador
    if (!key || key !== process.env.ADMIN_AUTH_KEY) {
      console.log("Intento de acceso fallido con clave incorrecta")
      return NextResponse.json({ error: "Clave de administrador incorrecta" }, { status: 401 })
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

    // Redirigir al panel de administración
    return NextResponse.redirect(new URL("/admin", request.url))
  } catch (error) {
    console.error("Error en la autenticación de administrador:", error)
    return NextResponse.json({ error: "Error del servidor al procesar la solicitud" }, { status: 500 })
  }
}
