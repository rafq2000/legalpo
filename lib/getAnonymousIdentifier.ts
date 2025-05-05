export const getAnonymousIdentifier = async (): Promise<string> => {
  try {
    // Intentamos obtener la IP del usuario para crear un identificador anónimo
    const response = await fetch("https://api.ipify.org?format=json")
    const data = await response.json()
    const ip = data.ip

    // Creamos un hash de la IP con un salt para mayor seguridad
    const encoder = new TextEncoder()
    const hash = await crypto.subtle.digest("SHA-256", encoder.encode(ip + "legalpo-salt"))
    const hashArray = Array.from(new Uint8Array(hash))
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
  } catch (error) {
    console.error("Error obteniendo identificador anónimo:", error)
    // Si falla, generamos un ID basado en timestamp
    return `anon-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
  }
}
