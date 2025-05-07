"use server"

// This file is kept for backward compatibility but no longer uses Supabase
// All functionality has been migrated to Firebase

export async function getSupabaseClient() {
  console.warn("⚠️ Supabase client requested but Supabase has been removed from the project")
  return null
}
