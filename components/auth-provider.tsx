"use client"

import React from "react"

import { SessionProvider } from "next-auth/react"
import { trackLogin, trackSignup } from "@/lib/analytics-events"

export function AuthProvider({ children, session }: { children: React.ReactNode; session?: any }) {
  // Función para capturar eventos de autenticación
  const handleAuthEvent = (event: CustomEvent) => {
    if (event.detail?.type === "signIn") {
      const provider = event.detail?.provider || "unknown"
      const isNewUser = event.detail?.isNewUser || false

      if (isNewUser) {
        trackSignup(provider, event.detail?.user?.id)
      } else {
        trackLogin(provider, event.detail?.user?.id)
      }
    }
  }

  // Añadir listener para eventos de autenticación
  React.useEffect(() => {
    window.addEventListener("nextauth.event" as any, handleAuthEvent as EventListener)
    return () => {
      window.removeEventListener("nextauth.event" as any, handleAuthEvent as EventListener)
    }
  }, [])

  return <SessionProvider session={session}>{children}</SessionProvider>
}
