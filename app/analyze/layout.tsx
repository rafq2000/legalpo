import type React from "react"
import ProtectedRoute from "@/components/protected-route"

export const dynamic = "force-dynamic"
export const revalidate = 0

export default function AnalyzeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProtectedRoute>{children}</ProtectedRoute>
}
