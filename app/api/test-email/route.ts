import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email-service"

export async function GET(req: Request) {
  try {
    console.log("Iniciando prueba de envío de correo...")

    const result = await sendEmail({
      subject: "Prueba de envío de correo desde LegalPO",
      html: `
        <h1>Prueba de envío de correo</h1>
        <p>Este es un correo de prueba para verificar que el sistema de envío está funcionando correctamente.</p>
        <p>Fecha y hora: ${new Date().toLocaleString()}</p>
        <p>Si estás viendo este correo, significa que la configuración de Zoho Mail está funcionando correctamente.</p>
      `,
    })

    if (result.success) {
      console.log("Correo de prueba enviado correctamente:", result)
      return NextResponse.json({
        success: true,
        message: "Correo enviado correctamente",
        id: result.id,
      })
    } else {
      console.error("Error al enviar correo de prueba:", result.error)
      return NextResponse.json(
        {
          success: false,
          error: "Error al enviar correo",
          details: result.error,
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Excepción al enviar correo de prueba:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Excepción al enviar correo",
        details: error,
      },
      { status: 500 },
    )
  }
}
