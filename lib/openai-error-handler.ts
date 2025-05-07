import { NextResponse } from "next/server"

export function handleOpenAIError(error: any) {
  // Determinar el tipo de error de OpenAI
  const statusCode = error.status || 500
  const message = "Error en el servicio de IA"

  // Manejar diferentes tipos de errores de OpenAI
  switch (error.code) {
    case "rate_limit_exceeded":
      return NextResponse.json({ error: "Límite de solicitudes excedido. Intente más tarde." }, { status: 429 })

    case "invalid_api_key":
      console.error("API key de OpenAI inválida")
      return NextResponse.json({ error: "Servicio no disponible temporalmente" }, { status: 503 })

    case "context_length_exceeded":
      return NextResponse.json({ error: "El documento es demasiado grande para ser procesado" }, { status: 413 })

    default:
      // Para otros errores, usar mensaje genérico en producción
      if (process.env.NODE_ENV === "production") {
        return NextResponse.json({ error: message }, { status: statusCode })
      } else {
        // En desarrollo, mostrar detalles del error
        return NextResponse.json({ error: message, details: error.message }, { status: statusCode })
      }
  }
}
