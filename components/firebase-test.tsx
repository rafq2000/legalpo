"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"
import { trackEvent } from "@/utils/firebase-service"
import { getFirebaseApp, getFirestoreInstance } from "@/utils/firebaseClient"

export default function FirebaseTest() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{
    success: boolean
    message: string
    details?: string
    error?: string
  } | null>(null)

  const testFirebase = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      // Paso 1: Verificar inicialización de Firebase
      const app = getFirebaseApp()
      if (!app) {
        throw new Error("No se pudo inicializar Firebase")
      }

      // Paso 2: Verificar inicialización de Firestore
      const db = getFirestoreInstance()
      if (!db) {
        throw new Error("No se pudo inicializar Firestore")
      }

      // Paso 3: Intentar registrar un evento de prueba
      const testEvent = await trackEvent("test_event", {
        test: true,
        timestamp: new Date().toISOString(),
      })

      if (!testEvent.success) {
        throw new Error(`Error al registrar evento: ${testEvent.error}`)
      }

      setResult({
        success: true,
        message: "Firebase funciona correctamente",
        details: `Evento registrado con ID: ${testEvent.id}`,
      })
    } catch (error) {
      console.error("Error en la prueba de Firebase:", error)
      setResult({
        success: false,
        message: "Error al probar Firebase",
        error: error instanceof Error ? error.message : String(error),
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Prueba de Firebase</CardTitle>
        <CardDescription>Verifica si Firebase está configurado correctamente</CardDescription>
      </CardHeader>
      <CardContent>
        {result && (
          <Alert className={result.success ? "bg-green-50" : "bg-red-50"}>
            <div className="flex items-center gap-2">
              {result.success ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600" />
              )}
              <AlertTitle>{result.message}</AlertTitle>
            </div>
            {result.details && <AlertDescription className="mt-2">{result.details}</AlertDescription>}
            {result.error && <AlertDescription className="mt-2 text-red-600">Error: {result.error}</AlertDescription>}
          </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={testFirebase} disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Probando...
            </>
          ) : (
            "Probar Firebase"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
