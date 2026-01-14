"use server"

import { createClient } from "@/lib/supabase/server"

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const whatsapp = formData.get("whatsapp") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!name || !email || !message) {
    return { success: false, error: "Por favor completa todos los campos requeridos" }
  }

  try {
    const supabase = await createClient()

    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email,
      whatsapp,
      message,
    })

    if (error) {
      console.error("[v0] Error saving to Supabase:", error)
      throw error
    }

    console.log("[v0] Contact submission saved successfully!")
    return { success: true }
  } catch (error) {
    console.error("[v0] Error saving contact submission:", error)
    return { success: false, error: "Error al enviar el mensaje. Por favor intenta nuevamente." }
  }
}
