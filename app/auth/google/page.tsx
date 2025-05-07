"use client"

import { useEffect } from "react"
import { signIn } from "next-auth/react"
import { Shield } from "lucide-react"

export default function GoogleAuthPage() {
  useEffect(() => {
    // Redirigir a la autenticación de Google
    signIn("google", { callbackUrl: "/" })
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Shield className="h-12 w-12 text-blue-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Redirigiendo a Google...</h1>
        <p className="mt-2 text-gray-600">Por favor espera mientras te redirigimos.</p>
      </div>
    </div>
  )
}
