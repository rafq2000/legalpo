import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.warn("Supabase credentials missing in waitlist route")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    const body = await request.json()
    const { firstName, lastName, email, phone, countryCode, childAge, courseName } = body

    console.log("[v0] Received waitlist data:", { firstName, lastName, email, courseName })

    // Validate required fields
    if (!firstName || !lastName || !email || !courseName) {
      console.log("[v0] Missing required fields")
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey)

    console.log("[v0] Inserting into course_waitlist...")

    // Insert into waitlist
    const { data, error } = await supabase
      .from("course_waitlist")
      .insert([
        {
          email: email.toLowerCase(),
          first_name: firstName,
          last_name: lastName,
          phone: phone || null,
          country_code: countryCode || null,
          course_name: courseName,
          child_age: childAge || null,
        },
      ])
      .select()

    if (error) {
      console.error("[v0] Supabase error:", error)
      return NextResponse.json(
        { error: "Error al registrar en la lista de espera. Por favor intenta nuevamente." },
        { status: 500 },
      )
    }

    console.log("[v0] Successfully inserted:", data)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] Error processing waitlist:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
