import type React from "react"
import type { Metadata } from "next"
import ProtectedRoute from "@/components/protected-route"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Generador de Contratos | LegalPO",
  description: "Crea y gestiona contratos legales con LegalPO",
}

export default function ContratosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </ProtectedRoute>
  )
}
