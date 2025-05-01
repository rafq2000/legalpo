import { NextResponse } from "next/server"

export async function GET() {
  // Check if the required environment variables are set
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY

  // Don't expose the actual keys, just check if they exist
  return NextResponse.json({
    config: {
      hasSupabaseUrl: !!supabaseUrl,
      hasSupabaseAnonKey: !!supabaseAnonKey,
      hasSupabaseServiceKey: !!supabaseServiceKey,
    },
    message: "This endpoint checks if Supabase environment variables are properly configured.",
  })
}
