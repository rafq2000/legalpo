import { NextResponse } from "next/server"
import { checkAnalyticsConfig } from "@/lib/analytics-checker"
import { verifyEnvironmentVariables } from "@/lib/config-verifier"
import { getSupabaseClient } from "@/lib/supabase-client"

export async function GET(request: Request) {
  const url = new URL(request.url)
  const service = url.searchParams.get("service")

  if (service === "analytics") {
    const configStatus = await checkAnalyticsConfig()
    return NextResponse.json(configStatus)
  }

  if (!service || service !== "supabase") {
    // Verificar variables de entorno
    const envCheck = await verifyEnvironmentVariables()

    // Verificar conexión a Supabase
    const supabaseStatus = { connected: false, error: null }
    try {
      const supabase = await getSupabaseClient()
      if (supabase) {
        // Intentar una consulta simple
        const { data, error } = await supabase.from("users").select("count").limit(1)

        if (error) {
          supabaseStatus.error = error.message
        } else {
          supabaseStatus.connected = true
        }
      } else {
        supabaseStatus.error = "No se pudo inicializar el cliente de Supabase"
      }
    } catch (error) {
      supabaseStatus.error = error instanceof Error ? error.message : "Error desconocido"
    }

    // Verificar tablas requeridas
    const tablesStatus = {
      users: false,
      sessions: false,
      page_views: false,
      document_analyses: false,
      lawyer_queries: false,
      error: null,
    }

    try {
      const supabase = await getSupabaseClient()
      if (supabase) {
        // Verificar cada tabla
        for (const table of Object.keys(tablesStatus)) {
          if (table === "error") continue

          const { data, error } = await supabase.from(table).select("count").limit(1)
          if (!error) {
            tablesStatus[table as keyof typeof tablesStatus] = true
          }
        }
      }
    } catch (error) {
      tablesStatus.error = error instanceof Error ? error.message : "Error desconocido"
    }

    return NextResponse.json({
      ...envCheck,
      supabase: supabaseStatus,
      tables: tablesStatus,
      timestamp: new Date().toISOString(),
    })
  }

  return NextResponse.json({ error: "Servicio no especificado" }, { status: 400 })
}
