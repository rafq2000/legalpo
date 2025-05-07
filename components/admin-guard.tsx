"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Loader2 } from "lucide-react"

interface AdminGuardProps {
  children: React.ReactNode
}

export function AdminGuard({ children }: AdminGuardProps) {
  const { status, data } = useSession()
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAdmin = async () => {
      if (status === "loading") return

      if (status === "unauthenticated") {
        router.push("/login")
        return
      }

      const adminEmail = process.env.ADMIN_EMAIL

      if (data?.user?.email === adminEmail) {
        setIsAdmin(true)
      } else {
        router.push("/")
      }

      setIsLoading(false)
    }

    checkAdmin()
  }, [status, session, router])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Verificando permisos...</span>
      </div>
    )
  }

  if (!isAdmin) {
    return null
  }

  return <>{children}</>
}
