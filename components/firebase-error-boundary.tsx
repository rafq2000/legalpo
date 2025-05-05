"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { app } from "@/utils/firebaseClient"

interface FirebaseErrorBoundaryProps {
  children: React.ReactNode
}

export function FirebaseErrorBoundary({ children }: FirebaseErrorBoundaryProps) {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkFirebase = async () => {
      try {
        setIsLoading(true)

        // Verificar si las variables de entorno están configuradas
        const requiredEnvVars = [
          "NEXT_PUBLIC_FIREBASE_API_KEY",
          "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
          "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
        ]

        const missingEnvVars = requiredEnvVars.filter((varName) => !process.env[varName])

        if (missingEnvVars.length > 0) {
          setError(`Faltan variables de entorno: ${missingEnvVars.join(", ")}`)
          return
        }

        // Verificar si estamos en el cliente
        if (typeof window === "undefined") {
          setError(null) // No hay error en el servidor
          return
        }

        // Verificar si Firebase está inicializado
        if (!app) {
          setError("Firebase no está inicializado correctamente")
          return
        }

        setError(null)
      } catch (err) {
        console.error("Error general al verificar Firebase:", err)
        setError("Error al verificar Firebase: " + (err instanceof Error ? err.message : String(err)))
      } finally {
        setIsLoading(false)
      }
    }

    checkFirebase()
  }, [])

  if (isLoading) {
    return <div className="p-4">Verificando conexión a Firebase...</div>
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mb-4">
        <AlertTitle>Error de Firebase</AlertTitle>
        <AlertDescription>
          <p>{error}</p>
          <p className="mt-2">Verifica que las variables de entorno de Firebase estén configuradas correctamente.</p>
          <Button variant="outline" className="mt-2" onClick={() => window.location.reload()}>
            Reintentar
          </Button>
        </AlertDescription>
      </Alert>
    )
  }

  return <>{children}</>
}
