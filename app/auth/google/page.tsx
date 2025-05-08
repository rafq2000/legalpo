import { redirect } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Autenticación con Google | LegalPO",
  description: "Autenticación con Google para LegalPO",
  robots: "noindex, nofollow",
}

export default function GoogleAuthPage() {
  redirect("/login")
}
