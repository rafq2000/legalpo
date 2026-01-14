import { createBrowserClient } from "@supabase/ssr"

let client: ReturnType<typeof createBrowserClient> | null = null

export function createClient() {
  if (client) {
    return client
  }

  if (typeof window !== "undefined") {
    console.log("[v0] Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL ? "✓ Set" : "✗ Missing")
    console.log("[v0] Supabase Anon Key:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✓ Set" : "✗ Missing")
  }

  client = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

  return client
}
