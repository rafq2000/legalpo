/**
 * Servicio para interactuar con la API de SambaNova
 */

// Función para manejar errores de la API de SambaNova
export function handleSambanovaError(error: any): string {
  console.error("SambaNova API Error:", error)

  if (error.response) {
    console.error("Status:", error.response.status)
    console.error("Data:", error.response.data)

    if (error.response.status === 401) {
      return "Error de autenticación con SambaNova. Por favor, verifica tu API key."
    }

    if (error.response.status === 429) {
      return "Se ha excedido el límite de solicitudes a SambaNova. Por favor, intenta más tarde."
    }

    if (error.response.status === 500) {
      return "Error en los servidores de SambaNova. Por favor, intenta más tarde."
    }

    return `Error en la respuesta de SambaNova: ${error.response.status}`
  } else if (error.request) {
    console.error("No se recibió respuesta de SambaNova")
    return "No se pudo conectar con SambaNova. Verifica tu conexión a internet."
  } else {
    console.error("Error:", error.message)
    return `Error al procesar la solicitud: ${error.message}`
  }
}

// Función para generar respuestas usando el modelo Qwen de SambaNova
export async function generateQwenResponse(
  messages: any[],
  systemPrompt = "Eres un asistente legal especializado en leyes chilenas.",
): Promise<string> {
  try {
    // Verificar que la API key está configurada
    if (!process.env.SAMBANOVA_API_KEY) {
      throw new Error("SAMBANOVA_API_KEY no está configurada")
    }

    // Preparar los mensajes para la API de SambaNova
    const formattedMessages = [
      {
        role: "system",
        content: systemPrompt,
      },
      ...messages.map((msg) => ({
        role: msg.role === "user" ? "user" : "assistant",
        content: msg.content,
      })),
    ]

    // Llamar a la API de SambaNova
    const response = await fetch("https://api.sambanova.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SAMBANOVA_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stream: false,
        model: "Qwen2.5-72B-Instruct",
        messages: formattedMessages,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(`Error en la respuesta de SambaNova: ${response.status} ${JSON.stringify(errorData)}`)
    }

    const data = await response.json()
    return data.choices[0].message.content
  } catch (error) {
    console.error("Error al generar respuesta con Qwen:", error)
    throw error
  }
}
