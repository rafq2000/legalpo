"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { getFirebaseApp, getFirestoreInstance } from "@/utils/firebaseClient"

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

        // Verificar que Firebase se inicialice correctamente
        const app = getFirebaseApp()
        if (!app) {
          setError("No se pudo inicializar Firebase. Verifica la configuración.")
          return
        }

        // Solo verificar Firestore en el cliente
        if (typeof window !== "undefined") {
          try {
            // Intentar obtener la instancia de Firestore
            getFirestoreInstance()
            setError(null)
          } catch (firestoreError) {
            console.error("Error al inicializar Firestore:", firestoreError)
            setError(
              "Error al inicializar Firestore: " +
                (firestoreError instanceof Error ? firestoreError.message : String(firestoreError)),
            )
          }
        } else {
          setError(null)
        }
      } catch (err) {
        console.error("Error checking Firebase:", err)
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
