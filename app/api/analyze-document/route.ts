import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { analyzeDocument } from "@/lib/document-analyzer"
import { analyticsService } from "@/lib/analytics"

export async function POST(req: Request) {
  try {
    // Verificar autenticación
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

    if (!token) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    // Obtener datos de la solicitud
    const formData = await req.formData()
    const file = formData.get("file") as File
    const extractedText = formData.get("extractedText") as string

    if (!file && !extractedText) {
      return NextResponse.json({ error: "No se proporcionó ningún archivo o texto" }, { status: 400 })
    }

    // Analizar el documento usando el texto extraído
    // Nota: El procesamiento OCR se realiza en el cliente para evitar problemas con APIs del navegador
    const analysis = analyzeDocument(extractedText || "")

    // Registrar evento de análisis (de forma segura)
    analyticsService.safeTrackEvent("document_analyzed", {
      userId: token.sub,
      documentType: file ? file.type : "text",
      documentSize: file ? file.size : extractedText.length,
    })

    return NextResponse.json({ analysis })
  } catch (error: any) {
    console.error("Error en analyze-document:", error)
    return NextResponse.json({ error: "Error al procesar la solicitud", details: error.message }, { status: 500 })
  }
}
