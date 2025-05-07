import type React from "react"
import { redirect } from "next/navigation"

export default function GeneradorContratosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  redirect("/contratos")
}
