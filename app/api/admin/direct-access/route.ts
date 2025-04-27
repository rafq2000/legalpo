import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const key = searchParams.get("key")
  const redirect = searchParams.get("redirect") || "/admin"

  // Verificar la clave de administrador
  if (key !== process.env.ADMIN_AUTH_KEY) {
    return NextResponse.redirect(new URL("/admin/login", request.url))
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

  // Redirigir a la página solicitada
  return NextResponse.redirect(new URL(redirect, request.url))
}
