import { createClient } from "@supabase/supabase-js"

// Verificar si el usuario es administrador
async function isAdmin(email: string | null | undefined) {
  if (!email) return false
  const adminEmail = process.env.ADMIN_EMAIL
  return email === adminEmail
}

// Crear cliente de Supabase
function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Faltan variables de entorno para Supabase")
  }

  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
    },
  })
}

export class ResponseCacheService {
  async getResponse(query: string): Promise<string | null> {
    try {
      const supabase = getSupabaseClient()
      if (!supabase) {
        console.warn("Supabase client not available")
        return null
      }

      const { data, error } = await supabase
        .from("response_cache")
        .select("response")
        .eq("normalized_query", this.normalizeQuery(query))
        .single()

      if (error) {
        console.warn("Error al obtener respuesta de la caché:", error.message)
        return null
      }

      return data ? data.response : null
    } catch (error) {
      console.error("Error al obtener respuesta de la caché:", error)
      return null
    }
  }

  async cacheResponse(query: string, response: string, userId: string, provider: string): Promise<void> {
    try {
      const supabase = getSupabaseClient()
      if (!supabase) {
        console.warn("Supabase client not available, skipping cache")
        return
      }

      const { error } = await supabase.from("response_cache").insert({
        query: query,
        normalized_query: this.normalizeQuery(query),
        response: response,
        provider: provider,
      })

      if (error) {
        console.error("Error al guardar respuesta en la caché:", error)
      }
    } catch (error) {
      console.error("Error al guardar respuesta en la caché:", error)
    }
  }

  private normalizeQuery(query: string): string {
    return query.trim().toLowerCase()
  }
}
