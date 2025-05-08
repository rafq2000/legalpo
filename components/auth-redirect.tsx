"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense } from "react"

function AuthRedirectInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/"

  useEffect(() => {
    router.push(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`)
  }, [router, callbackUrl])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-center text-muted-foreground">Redirigiendo...</p>
    </div>
  )
}

export function AuthRedirect() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-center text-muted-foreground">Cargando...</p>
        </div>
      }
    >
      <AuthRedirectInner />
    </Suspense>
  )
}
