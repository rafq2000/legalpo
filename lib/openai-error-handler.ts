export function openAIErrorHandler(error: any) {
  console.error("Error de OpenAI:", error)

  // Determinar el tipo de error de OpenAI
  const statusCode = error.status || 500
  const message = "Error en el servicio de IA"

  // Manejar diferentes tipos de errores de OpenAI
  switch (error.code) {
    case "rate_limit_exceeded":
      return "Límite de solicitudes excedido. Intente más tarde."

    case "invalid_api_key":
      console.error("API key de OpenAI inválida")
      return "Servicio no disponible temporalmente"

    case "context_length_exceeded":
      return "Tu consulta es demasiado extensa. Por favor, intenta con una consulta más corta o divídela en varias partes."

    default:
      // Para otros errores, usar mensaje genérico en producción
      if (process.env.NODE_ENV === "production") {
        return "Lo siento, ha ocurrido un error al procesar tu consulta. Por favor, intenta nuevamente en unos momentos."
      } else {
        // En desarrollo, mostrar detalles del error
        return `Error del servidor: ${error.message}`
      }
  }
}
