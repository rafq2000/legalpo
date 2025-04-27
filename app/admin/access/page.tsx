"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function AdminDirectAccess() {
  const [message, setMessage] = useState("Verificando acceso...")
  const router = useRouter()
  const searchParams = useSearchParams()
  const key = searchParams.get("key")
  const redirect = searchParams.get("redirect") || "/admin"

  useEffect(() => {
    if (!key) {
      setMessage("Clave de acceso no proporcionada")
      return
    }

    async function verifyAccess() {
      try {
        const response = await fetch(`/api/admin/direct-access?key=${key}&redirect=${encodeURIComponent(redirect)}`)

        if (response.redirected) {
          window.location.href = response.url
        } else {
          setMessage("Error de autenticación")
        }
      } catch (error) {
        setMessage("Error al verificar el acceso")
      }
    }

    verifyAccess()
  }, [key, redirect])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p>{message}</p>
        {!key && (
          <p className="mt-4">
            <a href="/admin/login" className="text-primary underline">
              Ir a la página de inicio de sesión
            </a>
          </p>
        )}
      </div>
    </div>
  )
}
