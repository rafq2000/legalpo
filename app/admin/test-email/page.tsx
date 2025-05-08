"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"

export default function TestEmailPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{
    success: boolean
    message?: string
    error?: string
    details?: any
  } | null>(null)

  const sendTestEmail = async () => {
    setLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/test-email")
      const data = await response.json()

      setResult(data)
    } catch (error) {
      setResult({
        success: false,
        error: "Error al realizar la solicitud",
        details: error,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Prueba de Envío de Correo</CardTitle>
          <CardDescription>Esta herramienta te permite probar la configuración de envío de correos</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Al hacer clic en el botón, se enviará un correo de prueba a contacto@legalpo.cl</p>

          {result && (
            <Alert className={result.success ? "bg-green-50" : "bg-red-50"}>
              {result.success ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <XCircle className="h-4 w-4 text-red-600" />
              )}
              <AlertTitle>{result.success ? "Correo enviado correctamente" : "Error al enviar correo"}</AlertTitle>
              <AlertDescription>
                {result.message || result.error || ""}
                {result.details && (
                  <pre className="mt-2 text-xs overflow-auto p-2 bg-gray-100 rounded">
                    {JSON.stringify(result.details, null, 2)}
                  </pre>
                )}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={sendTestEmail} disabled={loading} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar Correo de Prueba"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
