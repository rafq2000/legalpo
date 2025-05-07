export function handleOpenAIError(error: any) {
  console.error("Error de OpenAI:", error)

  // Determinar el tipo de error de OpenAI
  const statusCode = error.status || 500
  const message = "Error en el servicio de IA"

  // Manejar diferentes tipos de errores de OpenAI
  switch (error.code) {
    case "rate_limit_exceeded":
      return { response: "Límite de solicitudes excedido. Intente más tarde.", status: statusCode }

    case "invalid_api_key":
      console.error("API key de OpenAI inválida")
      return { response: "Servicio no disponible temporalmente", status: statusCode }

    case "context_length_exceeded":
      return {
        response:
          "Tu consulta es demasiado extensa. Por favor, intenta con una consulta más corta o divídela en varias partes.",
        status: statusCode,
      }

    default:
      // Para otros errores, usar mensaje genérico en producción
      if (process.env.NODE_ENV === "production") {
        return {
          response:
            "Lo siento, ha ocurrido un error al procesar tu consulta. Por favor, intenta nuevamente en unos momentos.",
          status: statusCode,
        }
      } else {
        // En desarrollo, mostrar detalles del error
        return { response: `Error del servidor: ${error.message}`, status: statusCode }
      }
  }
}
