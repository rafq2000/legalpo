"use client"

import type React from "react"
import { useSession } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const session = useSession()
  const router = useRouter()
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)

  // Detectar si estamos en el cliente
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Solo ejecutar la lógica de redirección en el cliente
    if (!isClient) return

    if (session.status === "loading") {
      setIsLoading(true)
      return
    }

    if (session.status === "unauthenticated") {
      router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`)
    } else {
      setIsLoading(false)
    }
  }, [session.status, router, pathname, isClient])

  // Si estamos en el servidor o cargando, mostrar un placeholder
  if (!isClient || isLoading || session.status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Verificando autenticación...</span>
      </div>
    )
  }

  // Si llegamos aquí, el usuario está autenticado
  return <>{children}</>
}
