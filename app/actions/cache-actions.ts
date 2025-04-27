"use server"

import { createClient } from "@supabase/supabase-js"

// Crear cliente de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Normalizar la consulta para búsqueda
function normalizeQuery(query: string): string {
  return query
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[^\w\s]/g, "")
}

// Buscar respuesta en caché
export async function findCachedResponse(query: string): Promise<string | null> {
  try {
    const normalizedQuery = normalizeQuery(query)

    const { data, error } = await supabase
      .from("response_cache")
      .select("response")
      .eq("normalized_query", normalizedQuery)
      .single()

    if (error || !data) {
      return null
    }

    return data.response
  } catch (error) {
    console.error("Error al buscar en caché:", error)
    return null
  }
}

// Guardar respuesta en caché
export async function saveResponseToCache(query: string, response: string, provider: string): Promise<void> {
  try {
    const normalizedQuery = normalizeQuery(query)

    const { error } = await supabase.from("response_cache").insert([
      {
        query,
        normalized_query: normalizedQuery,
        response,
        provider,
      },
    ])

    if (error) {
      console.error("Error al guardar en caché:", error)
    }
  } catch (error) {
    console.error("Error al guardar en caché:", error)
  }
}
