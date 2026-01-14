"use server"

import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function submitLeadMagnet(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string

  if (!name || !email) {
    return { success: false, error: "Nombre y email son requeridos" }
  }

  try {
    const kitPdfUrl =
      process.env.KIT_PDF_URL || "https://8n2c8ieovwfncuyi.public.blob.vercel-storage.com/kit-padre-moderno.pdf.pdf"

    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
            } catch {
              // Ignore errors in Server Components
            }
          },
        },
      },
    )

    const { error } = await supabase.from("leads").insert([
      {
        name,
        email,
        source: "lead_magnet",
        created_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Error saving lead:", error)
      return {
        success: false,
        error: "No pudimos registrar tu email. Por favor intenta de nuevo o contacta al administrador.",
      }
    }

    return {
      success: true,
      downloadUrl: kitPdfUrl,
    }
  } catch (error) {
    console.error("Error in submitLeadMagnet:", error)
    return {
      success: false,
      error: "Ocurrió un error. Por favor intenta de nuevo más tarde.",
    }
  }
}
