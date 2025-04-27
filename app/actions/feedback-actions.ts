"use server"

import { createClient } from "@supabase/supabase-js"

// Crear cliente de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Definir la estructura de los datos de feedback
interface FeedbackData {
  type: "quick" | "detailed" | null
  quickRating: "positive" | "negative" | null
  detailedRating: 1 | 2 | 3 | 4 | 5 | null
  comment: string
  serviceUsed: string
  userId: string | null
  userType: "anonymous" | "registered"
  path: string
}

// Enviar feedback
export async function submitFeedback(data: FeedbackData): Promise<void> {
  try {
    const { error } = await supabase.from("feedback").insert([
      {
        feedback_type: data.type,
        quick_rating: data.quickRating,
        detailed_rating: data.detailedRating,
        comment: data.comment,
        service_used: data.serviceUsed,
        user_id: data.userId,
        user_type: data.userType,
        path: data.path,
        created_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Error al enviar feedback:", error)
      throw new Error("Error al enviar feedback")
    }
  } catch (error) {
    console.error("Error al enviar feedback:", error)
    throw error
  }
}
