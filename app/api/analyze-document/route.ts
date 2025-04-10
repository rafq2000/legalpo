import { NextResponse } from "next/server"
import OpenAI from "openai"
import { generateQwenResponse } from "@/lib/sambanova-service"

// Configuración de OpenAI con la API key proporcionada
const openai = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null

// Determinar qué modelo usar (SambaNova o OpenAI)
const useSambaNova = process.env.SAMBANOVA_API_KEY ? true : false

export async function POST(req: Request) {
  try {
    const { text } = await req.json()

    if (!text) {
      return NextResponse.json({ error: "No se proporcionó texto para analizar" }, { status: 400 })
    }

    try {
      let analysis = ""

      // Intentar usar SambaNova si está disponible
      if (useSambaNova) {
        try {
          console.log("Usando modelo Qwen de SambaNova para análisis de documento")
          const systemPrompt = `Eres un asistente legal especializado en análisis de documentos legales.
Tu tarea es analizar el documento proporcionado y responder a la pregunta del usuario.
Proporciona información precisa y detallada basada en el contenido del documento.
Usa un tono profesional pero accesible.
Estructura tus respuestas de forma clara.`

          analysis = await generateQwenResponse([{ role: "user", content: text }], systemPrompt)
        } catch (sambanovaError) {
          console.error("Error con SambaNova, intentando con OpenAI:", sambanovaError)
          // Si falla SambaNova, intentar con OpenAI si está disponible
          if (!openai || !process.env.OPENAI_API_KEY) {
            throw new Error("No hay modelos de IA disponibles")
          }
        }
      }

      // Si no se usó SambaNova o falló, usar OpenAI
      if (!analysis && openai && process.env.OPENAI_API_KEY) {
        console.log("Usando modelo de OpenAI para análisis de documento")
        const completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `Eres un asistente legal especializado en análisis de documentos legales.
Tu tarea es analizar el documento proporcionado y responder a la pregunta del usuario.
Proporciona información precisa y detallada basada en el contenido del documento.
Usa un tono profesional pero accesible.
Estructura tus respuestas de forma clara.`,
            },
            { role: "user", content: text },
          ],
          temperature: 0.5,
          max_tokens: 1000,
        })

        analysis = completion.choices[0].message.content || ""
      }

      // Si no se pudo obtener respuesta de ningún modelo
      if (!analysis) {
        throw new Error("No se pudo obtener análisis de ningún modelo disponible")
      }

      return NextResponse.json({
        analysis,
        model: useSambaNova ? "Qwen2.5-72B-Instruct" : "gpt-3.5-turbo",
      })
    } catch (modelError) {
      console.error("Error al analizar el documento:", modelError)
      return NextResponse.json(
        { error: "Error al analizar el documento. Por favor, intenta nuevamente." },
        { status: 200 }, // Cambiado a 200 para evitar errores en el cliente
      )
    }
  } catch (error) {
    console.error("Error en el servidor:", error)
    return NextResponse.json(
      { error: "Error en el servidor. Por favor, intenta nuevamente." },
      { status: 200 }, // Cambiado a 200 para evitar errores en el cliente
    )
  }
}
