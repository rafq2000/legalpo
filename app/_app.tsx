"use client"

import type React from "react"

import { AuthProvider } from "@/components/auth-provider"

export default function App({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}
