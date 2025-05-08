"use client"

import { useEffect } from "react"
import { signIn } from "next-auth/react"
import { Shield, Loader2 } from "lucide-react"

export default function GoogleAuthPage() {
  useEffect(() => {
    // Redirigir a la autenticación de Google
    const timer = setTimeout(() => {
      signIn("google", { callbackUrl: "/" })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <head>
        <meta name="robots" content="noindex" />
      </head>
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Redirigiendo a Google...</h1>
          <p className="mt-2 text-gray-600">Por favor espera mientras te redirigimos.</p>
          <div className="flex justify-center mt-4">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        </div>
      </div>
    </>
  )
}
