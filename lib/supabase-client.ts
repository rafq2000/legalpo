"use server"

import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

let supabaseClient: ReturnType<typeof createClient<Database>> | null = null

export async function getSupabaseClient() {
  if (supabaseClient) return supabaseClient

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_KEY

  if (!url || !key) {
    console.error("❌ Supabase env vars missing:", {
      hasUrl: !!url,
      hasKey: !!key,
    })
    return null
  }

  try {
    console.log("🔄 Inicializando cliente de Supabase...")
    supabaseClient = createClient<Database>(url, key)

    // Verificar conexión con una consulta simple
    const { data, error } = await supabaseClient.from("sessions").select("count").limit(1).single()

    if (error) {
      if (error.code === "PGRST116") {
        console.warn("⚠️ La tabla 'sessions' no existe. Esto puede ser normal si es la primera ejecución.")
      } else {
        console.error("❌ Error al verificar conexión con Supabase:", error)
      }
    } else {
      console.log("✅ Conexión a Supabase verificada correctamente")
    }

    return supabaseClient
  } catch (error) {
    console.error("❌ Error al inicializar cliente de Supabase:", error)
    return null
  }
}
