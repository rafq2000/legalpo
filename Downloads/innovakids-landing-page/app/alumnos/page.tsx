import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { StudentDashboard } from "@/components/student-dashboard"

export default async function StudentPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  // Get student profile
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  // Get student enrollments with course details
  const { data: enrollments } = await supabase
    .from("enrollments")
    .select(
      `
      *,
      course:courses(*)
    `,
    )
    .eq("student_id", user.id)
    .eq("status", "active")

  return <StudentDashboard user={user} profile={profile} enrollments={enrollments || []} />
}
