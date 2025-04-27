"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function AdminDirectAccess() {
  const [status, setStatus] = useState("Verificando clave...")
  const router = useRouter()
  const searchParams = useSearchParams()
  const key = searchParams.get("key")

  useEffect(() => {
    async function verifyAndSetCookie() {
      if (!key) {
        setStatus("Error: No se proporcionó clave")
        return
      }

      try {
        // Verificar la clave
        const debugResponse = await fetch(`/api/admin/debug-auth?key=${encodeURIComponent(key)}`)
        const debugData = await debugResponse.json()

        if (!debugData.keyConfigured) {
          setStatus("Error: La clave de administrador no está configurada en el servidor")
          return
        }

        if (!debugData.keyMatch) {
          setStatus("Error: Clave incorrecta")
          return
        }

        // Establecer cookie
        const cookieResponse = await fetch("/api/admin/set-cookie", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ key }),
        })

        if (cookieResponse.ok) {
          setStatus("Acceso concedido. Redirigiendo...")
          router.push("/admin")
        } else {
          setStatus("Error al establecer la cookie de autenticación")
        }
      } catch (error) {
        setStatus("Error al procesar la solicitud")
        console.error(error)
      }
    }

    verifyAndSetCookie()
  }, [key, router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-lg border bg-white p-8 shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Acceso directo</h1>
        <p>{status}</p>
      </div>
    </div>
  )
}
