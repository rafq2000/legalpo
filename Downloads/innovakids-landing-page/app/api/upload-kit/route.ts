import { put } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No se proporcionó ningún archivo" }, { status: 400 })
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json({ error: "Solo se permiten archivos PDF" }, { status: 400 })
    }

    const blob = await put(`kit-padre-moderno-${Date.now()}.pdf`, file, {
      access: "public",
    })

    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

    await supabase.rpc("create_kit_storage_table_if_not_exists")

    // Deactivate all previous kits
    await supabase.from("kit_storage").update({ is_active: false }).eq("is_active", true)

    // Insert the new kit
    const { error: dbError } = await supabase.from("kit_storage").insert({
      file_name: file.name,
      blob_url: blob.url,
      uploaded_at: new Date().toISOString(),
      is_active: true,
    })

    if (dbError) {
      console.error("[v0] Error saving to kit_storage:", dbError)
      // If table doesn't exist, create it
      if (dbError.code === "42P01") {
        await supabase.rpc("execute_sql", {
          sql: `
            CREATE TABLE IF NOT EXISTS kit_storage (
              id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
              file_name TEXT NOT NULL,
              blob_url TEXT NOT NULL,
              uploaded_at TIMESTAMPTZ DEFAULT NOW(),
              is_active BOOLEAN DEFAULT true
            );
          `,
        })

        // Try insert again
        const { error: retryError } = await supabase.from("kit_storage").insert({
          file_name: file.name,
          blob_url: blob.url,
          uploaded_at: new Date().toISOString(),
          is_active: true,
        })

        if (retryError) {
          console.error("[v0] Retry error:", retryError)
          return NextResponse.json({ error: "Error al guardar en la base de datos" }, { status: 500 })
        }
      } else {
        return NextResponse.json({ error: "Error al guardar en la base de datos" }, { status: 500 })
      }
    }

    return NextResponse.json({
      url: blob.url,
      filename: file.name,
      size: file.size,
    })
  } catch (error) {
    console.error("[v0] Upload error:", error)
    return NextResponse.json({ error: "Error al subir el archivo" }, { status: 500 })
  }
}
