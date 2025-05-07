import { NextResponse } from "next/server"

// Función para manejar las solicitudes POST
export async function POST(req: Request) {
  try {
    // Obtener datos de la solicitud
    const data = await req.json()

    // Aquí iría la lógica para guardar el consentimiento de cookies
    // Por ahora, solo registramos en consola y devolvemos éxito

    return NextResponse.json({
      success: true,
      message: "Preferencias de cookies guardadas correctamente",
    })
  } catch (error) {
    return NextResponse.json({ error: "Error al guardar las preferencias de cookies" }, { status: 500 })
  }
}

// Función para manejar las solicitudes GET
export async function GET(req: Request) {
  try {
    // Aquí iría la lógica para obtener el estado del consentimiento de cookies
    // Por ahora, devolvemos un valor predeterminado

    return NextResponse.json({
      hasConsent: false,
      preferences: {
        necessary: true,
        analytics: false,
        marketing: false,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener las preferencias de cookies" }, { status: 500 })
  }
}
