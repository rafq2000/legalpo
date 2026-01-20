import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get("file") as File
    const textContent = formData.get("textContent") as string

    let extractedText = ""

    if (file) {
      // Handle different file types
      if (file.type.startsWith("image/")) {
        // For images, we'll use OCR (Tesseract.js would be used client-side)
        extractedText = "Texto extraído de imagen mediante OCR"
      } else if (file.type === "application/pdf") {
        // For PDFs, extract text
        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        // In a real implementation, you'd use pdf-parse or similar
        extractedText = "Texto extraído del PDF"
      } else if (file.type.includes("text")) {
        // For text files
        extractedText = await file.text()
      } else {
        extractedText = "Formato de archivo no soportado para extracción automática"
      }
    } else if (textContent) {
      extractedText = textContent
    }

    if (!extractedText || extractedText.length < 10) {
      return Response.json({ error: "No se pudo extraer texto suficiente del documento" }, { status: 400 })
    }

    // Analyze the document with AI
    const result = await streamText({
      model: openai("gpt-4o"),
      temperature: 0.2,
      system: `Eres un experto en derecho chileno especializado en análisis de documentos legales. Tu función es analizar documentos y proporcionar un análisis legal detallado basado en la normativa chilena vigente 2025.

INSTRUCCIONES IMPORTANTES:
- NO uses asteriscos para enfatizar texto
- NO uses markdown ni formateo con símbolos
- Usa solo texto plano con números, guiones y mayúsculas para títulos
- Proporciona un análisis claro y profesional pero sin símbolos de formateo

METODOLOGÍA OBLIGATORIA:

1. TIPO DE DOCUMENTO
Identifica qué tipo de documento legal es

2. NORMATIVA APLICABLE
Lista las leyes chilenas específicas que aplican

3. ANÁLISIS LEGAL DETALLADO
Examina cada cláusula o sección importante citando artículos específicos

4. RIESGOS IDENTIFICADOS
Señala posibles problemas o riesgos legales

5. RECOMENDACIONES
Proporciona sugerencias específicas y prácticas

6. EXPLICACIÓN SIMPLE
Resume en términos comprensibles para personas sin formación legal

Responde siempre en español y basa tu análisis en la legislación chilena actualizada.`,
      prompt: `Analiza el siguiente documento legal:

${extractedText}

Proporciona un análisis completo siguiendo la metodología establecida.`,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error analyzing document:", error)
    return Response.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
