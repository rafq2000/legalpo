import type React from "react"
import { AuthRedirect } from "@/components/auth-redirect"

export default function AskLayout({ children }: { children: React.ReactNode }) {
  return <AuthRedirect>{children}</AuthRedirect>
}
