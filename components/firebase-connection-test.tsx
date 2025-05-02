"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"

export default function FirebaseConnectionTest() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{
    success: boolean
    message: string
    id?: string
    error?: string
  } | null>(null)

  const testConnection = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/firebase-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipo: "test_connection",
          datos: {
            timestamp: new Date().toISOString(),
            source: "connection_test",
          },
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setResult({
          success: true,
          message: "Conexión exitosa a Firebase",
          id: data.id,
        })
      } else {
        setResult({
          success: false,
          message: "Error al conectar con Firebase",
          error: data.error || "Error desconocido",
        })
      }
    } catch (error: any) {
      setResult({
        success: false,
        message: "Error al realizar la prueba",
        error: error.message,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Prueba de Conexión a Firebase</CardTitle>
        <CardDescription>Verifica si la conexión a Firebase está funcionando correctamente</CardDescription>
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
            <AlertDescription className="mt-2">
              {result.success ? (
                <span>ID del documento: {result.id}</span>
              ) : (
                <span className="text-red-600">Error: {result.error}</span>
              )}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={testConnection} disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Probando...
            </>
          ) : (
            "Probar Conexión"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
