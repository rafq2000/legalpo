import { createClient } from "@supabase/supabase-js"

// Crear cliente de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Interfaz para los elementos en caché
interface CachedResponse {
  query: string
  response: string
  provider: string
  created_at: string
}

// Función para normalizar una consulta (eliminar espacios extra, convertir a minúsculas)
function normalizeQuery(query: string): string {
  return query.toLowerCase().trim().replace(/\s+/g, " ")
}

// Función para obtener una respuesta en caché
export async function getCachedResponse(query: string): Promise<string | null> {
  try {
    const normalizedQuery = normalizeQuery(query)

    // Buscar en la caché
    const { data, error } = await supabase
      .from("response_cache")
      .select("response")
      .eq("normalized_query", normalizedQuery)
      .single()

    if (error || !data) {
      return null
    }

    console.log("Respuesta encontrada en caché")
    return data.response
  } catch (error) {
    console.error("Error al buscar en caché:", error)
    return null
  }
}

// Función para guardar una respuesta en caché
export async function cacheResponse(query: string, response: string, provider: string): Promise<void> {
  try {
    const normalizedQuery = normalizeQuery(query)

    // Guardar en la caché
    const { error } = await supabase.from("response_cache").insert({
      query,
      normalized_query: normalizedQuery,
      response,
      provider,
      created_at: new Date().toISOString(),
    })

    if (error) {
      console.error("Error al guardar en caché:", error)
    } else {
      console.log("Respuesta guardada en caché")
    }
  } catch (error) {
    console.error("Error al guardar en caché:", error)
  }
}

// Función para limpiar entradas antiguas de la caché
export async function cleanupCache(daysToKeep = 30): Promise<void> {
  try {
    const cutoffDate = new Date()
    cutoffDate.setDate(cutoffDate.getDate() - daysToKeep)

    const { error } = await supabase.from("response_cache").delete().lt("created_at", cutoffDate.toISOString())

    if (error) {
      console.error("Error al limpiar caché:", error)
    } else {
      console.log("Caché limpiada correctamente")
    }
  } catch (error) {
    console.error("Error al limpiar caché:", error)
  }
}
