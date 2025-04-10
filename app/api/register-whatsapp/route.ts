import { NextResponse } from "next/server"
import { registrarWhatsApp } from "@/lib/analytics"

// Endpoint para registrar manualmente una consulta de WhatsApp
// Útil para integraciones donde no puedes usar un webhook directamente
export async function POST(req: Request) {
  try {
    const { phoneNumber } = await req.json()

    // Validar el número de teléfono (implementación básica)
    if (!phoneNumber || typeof phoneNumber !== "string") {
      return NextResponse.json({ success: false, error: "Número de teléfono no válido" }, { status: 400 })
    }

    // Registrar la consulta de WhatsApp
    const userId = registrarWhatsApp(phoneNumber)

    return NextResponse.json({
      success: true,
      message: "Consulta de WhatsApp registrada correctamente",
      userId,
    })
  } catch (error) {
    console.error("Error al registrar consulta de WhatsApp:", error)
    return NextResponse.json({ success: false, error: "Error al procesar la solicitud" }, { status: 500 })
  }
}
