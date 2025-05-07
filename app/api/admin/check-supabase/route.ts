import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function GET() {
  try {
    // Verificar variables de entorno
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY

    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json({
        success: false,
        error: "Faltan variables de entorno para Supabase",
        details: {
          NEXT_PUBLIC_SUPABASE_URL: !!supabaseUrl,
          SUPABASE_SERVICE_KEY: !!supabaseServiceKey,
        },
      })
    }

    // Crear cliente de Supabase
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Verificar conexión con una consulta simple
    const { data, error } = await supabase.from("sessions").select("id").limit(1)

    if (error) {
      // Si la tabla no existe, intentar crearla
      if (error.code === "42P01") {
        try {
          await supabase.rpc("create_sessions_table_if_not_exists")

          // Verificar nuevamente
          const retryResult = await supabase.from("sessions").select("id").limit(1)

          if (retryResult.error) {
            return NextResponse.json({
              success: false,
              error: "Error después de crear la tabla",
              details: retryResult.error,
            })
          }

          return NextResponse.json({
            success: true,
            message: "Tabla creada exitosamente",
            data: retryResult.data,
          })
        } catch (rpcError) {
          return NextResponse.json({
            success: false,
            error: "Error al crear la tabla",
            details: rpcError,
          })
        }
      }

      return NextResponse.json({
        success: false,
        error: "Error al consultar Supabase",
        details: error,
      })
    }

    // Verificar tablas necesarias
    const tables = ["sessions", "page_views", "chat_messages", "users", "response_cache"]
    const tableStatus = {}

    for (const table of tables) {
      try {
        const { error: tableError } = await supabase.from(table).select("id").limit(1)
        tableStatus[table] = !tableError
      } catch (e) {
        tableStatus[table] = false
      }
    }

    return NextResponse.json({
      success: true,
      message: "Conexión a Supabase exitosa",
      tables: tableStatus,
      data,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Error al conectar con Supabase",
      details: error.message,
    })
  }
}
