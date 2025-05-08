"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"

export default function TestEmailPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{
    success?: boolean
    message?: string
    error?: string
    details?: any
    id?: string
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
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Prueba de Envío de Email</CardTitle>
          <CardDescription>
            Esta herramienta permite verificar si el sistema de envío de emails está funcionando correctamente. Se
            enviará un email de prueba a contacto@legalpo.cl.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {result && (
            <Alert className={result.success ? "bg-green-50" : "bg-red-50"}>
              {result.success ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <XCircle className="h-4 w-4 text-red-600" />
              )}
              <AlertTitle>{result.success ? "Email enviado correctamente" : "Error al enviar email"}</AlertTitle>
              <AlertDescription>
                {result.success ? (
                  <div>
                    <p>El email de prueba se ha enviado correctamente a contacto@legalpo.cl</p>
                    {result.id && <p className="text-sm text-gray-500">ID: {result.id}</p>}
                  </div>
                ) : (
                  <div>
                    <p>{result.error}</p>
                    {result.details && (
                      <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-auto">
                        {JSON.stringify(result.details, null, 2)}
                      </pre>
                    )}
                  </div>
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
              "Enviar Email de Prueba"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
