import { NextResponse } from "next/server"

export function handleOpenAIError(error: any) {
  console.error("Error de OpenAI:", error)

  // Determinar el tipo de error de OpenAI
  const statusCode = error.status || 500
  const message = "Error en el servicio de IA"

  // Manejar diferentes tipos de errores de OpenAI
  switch (error.code) {
    case "rate_limit_exceeded":
      return NextResponse.json(
        {
          error: "Límite de solicitudes excedido. Intente más tarde.",
          response: "Lo siento, estamos experimentando alta demanda. Por favor, intenta nuevamente en unos minutos.",
        },
        { status: 429 },
      )

    case "invalid_api_key":
      console.error("API key de OpenAI inválida")
      return NextResponse.json(
        {
          error: "Servicio no disponible temporalmente",
          response:
            "Lo siento, el servicio no está disponible en este momento. Nuestro equipo técnico ha sido notificado.",
        },
        { status: 503 },
      )

    case "context_length_exceeded":
      return NextResponse.json(
        {
          error: "El documento es demasiado grande para ser procesado",
          response:
            "Lo siento, tu consulta es demasiado extensa. Por favor, intenta con una consulta más corta o divídela en varias partes.",
        },
        { status: 413 },
      )

    default:
      // Para otros errores, usar mensaje genérico en producción
      if (process.env.NODE_ENV === "production") {
        return NextResponse.json(
          {
            error: message,
            response:
              "Lo siento, ha ocurrido un error al procesar tu consulta. Por favor, intenta nuevamente en unos momentos.",
          },
          { status: statusCode },
        )
      } else {
        // En desarrollo, mostrar detalles del error
        return NextResponse.json(
          { error: message, details: error.message, response: "Error del servidor: " + error.message },
          { status: statusCode },
        )
      }
  }
}
