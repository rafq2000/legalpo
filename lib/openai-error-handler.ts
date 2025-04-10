export function handleOpenAIError(error: any): string {
  console.error("OpenAI API Error:", error)

  if (error.response) {
    // El servidor respondió con un código de estado fuera del rango 2xx
    console.error("Status:", error.response.status)
    console.error("Data:", error.response.data)

    if (error.response.status === 401) {
      return "Error de autenticación con OpenAI. Por favor, verifica tu API key."
    }

    if (error.response.status === 429) {
      return "Se ha excedido el límite de solicitudes a OpenAI. Por favor, intenta más tarde."
    }

    if (error.response.status === 500) {
      return "Error en los servidores de OpenAI. Por favor, intenta más tarde."
    }

    return `Error en la respuesta de OpenAI: ${error.response.status}`
  } else if (error.request) {
    // La solicitud se realizó pero no se recibió respuesta
    console.error("No se recibió respuesta de OpenAI")
    return "No se pudo conectar con OpenAI. Verifica tu conexión a internet."
  } else {
    // Algo ocurrió al configurar la solicitud
    console.error("Error:", error.message)
    return `Error al procesar la solicitud: ${error.message}`
  }
}
