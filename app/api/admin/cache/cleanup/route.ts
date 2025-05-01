import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { createClient } from "@supabase/supabase-js"
import { authOptions } from "@/lib/auth"

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

// POST - Limpiar respuestas antiguas
export async function POST(req: Request) {
  try {
    // Verificar autenticación y permisos
    const session = await getServerSession(authOptions)
    if (!session?.user?.email || !(await isAdmin(session.user.email))) {
      return NextResponse.json({ error: "No autorizado" }, { status: 403 })
    }

    // Obtener días a mantener
    const { days = 30 } = await req.json()

    // Validar parámetro
    const daysToKeep = Number.parseInt(days.toString())
    if (isNaN(daysToKeep) || daysToKeep < 1 || daysToKeep > 365) {
      return NextResponse.json(
        { error: "Parámetro 'days' inválido. Debe ser un número entre 1 y 365." },
        { status: 400 },
      )
    }

    const supabase = getSupabaseClient()

    // Calcular fecha límite
    const cutoffDate = new Date()
    cutoffDate.setDate(cutoffDate.getDate() - daysToKeep)

    // Contar registros a eliminar
    const { count } = await supabase
      .from("response_cache")
      .select("*", { count: "exact", head: true })
      .lt("created_at", cutoffDate.toISOString())

    // Eliminar registros antiguos
    const { error } = await supabase.from("response_cache").delete().lt("created_at", cutoffDate.toISOString())

    if (error) throw error

    return NextResponse.json({ deleted: count || 0 })
  } catch (error) {
    console.error("Error al limpiar caché:", error)
    return NextResponse.json({ error: "Error al limpiar caché" }, { status: 500 })
  }
}
