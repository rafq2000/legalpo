export const getAnonymousIdentifier = async (): Promise<string> => {
  try {
    // Primero intentamos obtener el ID anónimo del localStorage
    let anonId = localStorage.getItem("legalpo_anon_id")

    if (anonId) {
      return anonId
    }

    // Si no existe, intentamos obtener la IP del usuario
    try {
      const response = await fetch("https://api.ipify.org?format=json")
      const data = await response.json()
      const ip = data.ip

      // Creamos un hash de la IP con un salt para mayor seguridad
      const encoder = new TextEncoder()
      const hash = await crypto.subtle.digest("SHA-256", encoder.encode(ip + "legalpo-salt"))
      const hashArray = Array.from(new Uint8Array(hash))
      anonId = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
    } catch (ipError) {
      // Si falla la obtención de IP, generamos un ID basado en timestamp
      anonId = `anon-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
    }

    // Guardamos el ID en localStorage para futuras visitas
    localStorage.setItem("legalpo_anon_id", anonId)
    return anonId
  } catch (error) {
    console.error("Error obteniendo identificador anónimo:", error)
    // Si todo falla, generamos un ID temporal
    return `anon-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
  }
}
