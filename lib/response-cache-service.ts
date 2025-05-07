// Servicio de caché de respuestas simplificado
export const responseCacheService = {
  // Función para obtener una respuesta de la caché
  getResponse: async (query: string) => {
    console.log(`Buscando en caché: ${query}`)
    return null // Siempre devuelve null para forzar una nueva respuesta
  },

  // Función para guardar una respuesta en la caché
  saveResponse: async (query: string, response: string) => {
    console.log(`Guardando en caché: ${query}`)
    return { success: true }
  },

  // Función para limpiar la caché
  clearCache: async () => {
    console.log("Limpiando caché")
    return { success: true }
  },
}
