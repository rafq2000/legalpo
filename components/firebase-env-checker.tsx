"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"

export default function FirebaseEnvChecker() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{
    success: boolean
    message: string
    clientVars: Record<string, boolean>
    serverVars: Record<string, boolean>
    error?: string
  } | null>(null)

  const checkEnvVars = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/check-firebase-env", {
        method: "GET",
      })

      const data = await response.json()

      if (response.ok) {
        setResult({
          success: true,
          message: "Verificación de variables de entorno completada",
          clientVars: data.clientVars || {},
          serverVars: data.serverVars || {},
        })
      } else {
        setResult({
          success: false,
          message: "Error al verificar variables de entorno",
          clientVars: {},
          serverVars: {},
          error: data.error || "Error desconocido",
        })
      }
    } catch (error: any) {
      setResult({
        success: false,
        message: "Error al realizar la verificación",
        clientVars: {},
        serverVars: {},
        error: error.message,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Verificación de Variables de Entorno Firebase</CardTitle>
        <CardDescription>
          Comprueba si las variables de entorno necesarias para Firebase están configuradas
        </CardDescription>
      </CardHeader>
      <CardContent>
        {result && (
          <div className="space-y-4">
            <Alert className={result.success ? "bg-green-50" : "bg-red-50"}>
              <div className="flex items-center gap-2">
                {result.success ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-600" />
                )}
                <AlertTitle>{result.message}</AlertTitle>
              </div>
              {result.error && <AlertDescription className="mt-2 text-red-600">Error: {result.error}</AlertDescription>}
            </Alert>

            <div>
              <h3 className="font-medium mb-2">Variables de Cliente (NEXT_PUBLIC_*)</h3>
              <ul className="space-y-1">
                {Object.entries(result.clientVars).map(([key, exists]) => (
                  <li key={key} className="flex items-center gap-2">
                    {exists ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-600" />
                    )}
                    <span>{key}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Variables de Servidor</h3>
              <ul className="space-y-1">
                {Object.entries(result.serverVars).map(([key, exists]) => (
                  <li key={key} className="flex items-center gap-2">
                    {exists ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-600" />
                    )}
                    <span>{key}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={checkEnvVars} disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Verificando...
            </>
          ) : (
            "Verificar Variables de Entorno"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
