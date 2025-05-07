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

      const normalizedQuery = this.normalizeQuery(query)
      console.log("Buscando en caché:", normalizedQuery.substring(0, 50))

      const { data, error } = await supabase
        .from("response_cache")
        .select("response")
        .eq("normalized_query", normalizedQuery)
        .single()

      if (error) {
        if (error.code !== "PGRST116") {
          // No error when no rows found
          console.warn("Error al obtener respuesta de la caché:", error.message)
        }
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

      const normalizedQuery = this.normalizeQuery(query)
      console.log("Guardando en caché:", normalizedQuery.substring(0, 50))

      // Primero verificamos si ya existe
      const { data: existingData } = await supabase
        .from("response_cache")
        .select("id")
        .eq("normalized_query", normalizedQuery)
        .maybeSingle()

      if (existingData) {
        // Actualizar entrada existente
        const { error: updateError } = await supabase
          .from("response_cache")
          .update({
            response: response,
            updated_at: new Date().toISOString(),
            access_count: supabase.rpc("increment_counter", { row_id: existingData.id }),
          })
          .eq("id", existingData.id)

        if (updateError) {
          console.error("Error al actualizar respuesta en la caché:", updateError)
        }
      } else {
        // Insertar nueva entrada
        const { error: insertError } = await supabase.from("response_cache").insert({
          query: query,
          normalized_query: normalizedQuery,
          response: response,
          provider: provider,
          user_id: userId,
          access_count: 1,
        })

        if (insertError) {
          console.error("Error al guardar respuesta en la caché:", insertError)
        }
      }
    } catch (error) {
      console.error("Error al guardar respuesta en la caché:", error)
    }
  }

  private normalizeQuery(query: string): string {
    return query.trim().toLowerCase()
  }
}
