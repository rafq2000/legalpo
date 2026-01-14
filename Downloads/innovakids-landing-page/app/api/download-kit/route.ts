import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    // Safely skip tracking if credentials are missing
    if (!supabaseUrl || !supabaseKey) {
      console.warn("Skipping download tracking: Missing Supabase credentials")
      return NextResponse.json({ success: true, warning: "Tracking disabled" })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    const { email } = await request.json()

    // Track download in database
    await supabase.from("leads").insert({
      email,
      source: "kit_download",
      downloaded_at: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error tracking download:", error)
    return NextResponse.json({ error: "Failed to track download" }, { status: 500 })
  }
}
