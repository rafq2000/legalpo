"use client"

import type React from "react"

import { SessionProvider } from "next-auth/react"
import { CookieConsentProvider } from "@/hooks/use-cookie-consent"
import EventTracker from "@/components/event-tracker"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CookieConsentProvider>
        {children}
        <EventTracker />
      </CookieConsentProvider>
    </SessionProvider>
  )
}
