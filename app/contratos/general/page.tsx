"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {} from "next-auth/react"
import { ArrowLeft, FileText, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useSafeSession } from "@/hooks/use-safe-session" // Importar el hook seguro

export default function ContratoGeneralPage() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  // Usar el hook seguro en lugar de useSession()
  const { data: sessionData, status: sessionStatus } = useSafeSession()

  // Check if we're on the client
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Redirect if not authenticated
  useEffect(() => {
    if (isClient && sessionStatus !== "loading") {
      if (sessionStatus === "unauthenticated") {
        router.push(`/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`)
      }
    }
  }, [sessionStatus, router, isClient])

  // Show loading state if not on client or session is loading
  if (!isClient || (isClient && sessionStatus === "loading")) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
        <p className="text-center">Verificando sesión...</p>
      </div>
    )
  }

  // Don't render anything if not authenticated
  if (!sessionData && isClient) {
    return (
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center">
            <div className="mr-4 flex">
              <Link href="/contratos" className="mr-6 flex items-center space-x-2">
                <FileText className="h-6 w-6 text-primary" />
                <span className="font-bold">Generador de Contratos</span>
              </Link>
              <Button variant="ghost" size="sm" asChild className="gap-1">
                <Link href="/contratos">
                  <ArrowLeft className="h-4 w-4" />
                  Volver a contratos
                </Link>
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 container py-6 px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Contrato General</h1>
              <p className="text-muted-foreground">Bienvenido al generador de contratos.</p>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return null
}
