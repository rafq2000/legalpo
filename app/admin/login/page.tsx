"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function AdminLoginPage() {
  const [adminKey, setAdminKey] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [debugInfo, setDebugInfo] = useState<any>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const debug = searchParams.get("debug") === "true"

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      if (debug) {
        // Modo de depuración
        const debugResponse = await fetch(`/api/admin/debug-auth?key=${encodeURIComponent(adminKey)}`)
        const debugData = await debugResponse.json()
        setDebugInfo(debugData)

        if (debugData.keyMatch) {
          // Establecer cookie manualmente
          const cookieResponse = await fetch("/api/admin/set-cookie", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ key: adminKey }),
          })

          if (cookieResponse.ok) {
            router.push("/admin")
          } else {
            setError("Error al establecer la cookie de autenticación")
          }
        } else {
          setError("La clave proporcionada no coincide con la clave de administrador")
        }
      } else {
        // Modo normal
        const response = await fetch("/api/admin/login-simple", {
          method: "POST",
          body: new FormData(e.target as HTMLFormElement),
        })

        if (response.redirected) {
          window.location.href = response.url
        } else {
          const data = await response.json()
          setError(data.error || "Error de autenticación")
        }
      }
    } catch (err: any) {
      setError(err.message || "Error al procesar la solicitud")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg border bg-white p-6 shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Acceso de Administrador</h1>
        <p className="mb-6 text-gray-600">Ingresa la clave de administrador para acceder al panel</p>

        {error && (
          <div className="mb-4 rounded-md bg-red-50 p-4 text-red-700">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="admin-key" className="mb-2 block text-sm font-medium">
              Clave de administrador
            </label>
            <input
              id="admin-key"
              name="key"
              type="password"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? "Verificando..." : "Acceder"}
            </button>
          </div>
        </form>

        {debug && debugInfo && (
          <div className="mt-6 rounded-md bg-gray-50 p-4">
            <h2 className="mb-2 font-bold">Información de depuración:</h2>
            <pre className="overflow-auto text-xs">{JSON.stringify(debugInfo, null, 2)}</pre>
          </div>
        )}

        <div className="mt-4 text-center">
          <a
            href={debug ? "/admin/login" : "/admin/login?debug=true"}
            className="text-sm text-blue-600 hover:underline"
          >
            {debug ? "Modo normal" : "Modo de depuración"}
          </a>
        </div>
      </div>
    </div>
  )
}
