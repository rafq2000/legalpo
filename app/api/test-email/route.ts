import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email-service"

export async function GET(req: Request) {
  try {
    console.log("Iniciando prueba de envío de email...")

    const result = await sendEmail({
      subject: "Prueba de envío de email desde LegalPO",
      html: `
        <h1>Prueba de envío de email</h1>
        <p>Este es un email de prueba para verificar que el sistema de envío de emails está funcionando correctamente.</p>
        <p>Fecha y hora: ${new Date().toLocaleString()}</p>
      `,
    })

    if (result.success) {
      console.log("Email de prueba enviado correctamente:", result)
      return NextResponse.json({
        success: true,
        message: "Email enviado correctamente",
        id: result.id,
      })
    } else {
      console.error("Error al enviar email de prueba:", result.error)
      return NextResponse.json(
        {
          success: false,
          error: "Error al enviar email",
          details: result.error,
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Excepción al enviar email de prueba:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Excepción al enviar email",
        details: error,
      },
      { status: 500 },
    )
  }
}
