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

// DELETE - Eliminar una respuesta específica
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    // Verificar autenticación y permisos
    const session = await getServerSession(authOptions)
    if (!session?.user?.email || !(await isAdmin(session.user.email))) {
      return NextResponse.json({ error: "No autorizado" }, { status: 403 })
    }

    const { id } = params
    if (!id) {
      return NextResponse.json({ error: "ID no proporcionado" }, { status: 400 })
    }

    const supabase = getSupabaseClient()

    // Eliminar respuesta
    const { error } = await supabase.from("response_cache").delete().eq("id", id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error al eliminar respuesta:", error)
    }
    return NextResponse.json({ error: "Error al eliminar respuesta" }, { status: 500 })
  }
}
