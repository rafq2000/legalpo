import type React from "react"
import type { Metadata } from "next"
import ProtectedRoute from "@/components/protected-route"

export const metadata: Metadata = {
  title: "Generador de Contratos | DocuScan AI",
  description: "Crea y gestiona contratos legales con DocuScan AI",
}

export default function GeneradorContratosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
      </div>
    </ProtectedRoute>
  )
}
