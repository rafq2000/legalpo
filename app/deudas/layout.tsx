import { AuthProtection } from "@/components/auth-protection"
import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Consultas sobre Deudas | LegalPo",
  description: "Resuelve tus dudas sobre deudas, cobranzas y embargos con nuestro asistente legal especializado.",
}

export default function DeudasLayout({ children }: { children: React.ReactNode }) {
  return <AuthProtection>{children}</AuthProtection>
}
