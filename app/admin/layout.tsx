"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import type React from "react"
import { AdminNav } from "@/components/admin-nav"
// import { ConfigChecker } from "@/components/config-checker"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch("/api/admin/auth-check")

        if (!response.ok) {
          throw new Error("No autenticado")
        }

        setIsAuthenticated(true)
      } catch (error) {
        console.error("Error de autenticación:", error)
        router.push("/admin/login")
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <aside className="w-64 border-r bg-background hidden md:block">
          <div className="flex h-full flex-col">
            <div className="flex h-14 items-center border-b px-4">
              <div className="font-semibold">Panel de Administración</div>
            </div>
            <AdminNav />
          </div>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
