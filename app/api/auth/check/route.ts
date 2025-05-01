import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export async function GET(req: Request) {
  try {
    // Verificar token de autenticación
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    }).catch(() => null)

    // Verificar configuraciones críticas
    const requiredConfigs = ["NEXTAUTH_SECRET", "GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET", "OPENAI_API_KEY"]

    const missingConfigs = requiredConfigs.filter((config) => !process.env[config])

    // Si es administrador, mostrar configuraciones faltantes
    if (token?.email === process.env.ADMIN_EMAIL) {
      return NextResponse.json({
        isAuthenticated: !!token,
        isAdmin: true,
        missingConfigs,
      })
    }

    // Para usuarios normales, solo indicar si está autenticado
    return NextResponse.json({
      isAuthenticated: !!token,
      isAdmin: false,
      // No enviar missingConfigs a usuarios normales
    })
  } catch (error) {
    console.error("Error en verificación de autenticación:", error)
    return NextResponse.json({ error: "Error al verificar autenticación" }, { status: 500 })
  }
}
