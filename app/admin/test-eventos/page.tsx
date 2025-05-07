"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export default function TestEventos() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string; data?: any } | null>(null)

  const enviarEvento = async () => {
    setLoading(true)
    setResult(null)

    try {
      console.log("📤 Enviando evento de prueba al servidor...")

      const res = await fetch("/api/track-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipo: "evento-test",
          datos: {
            email: "test@legalpo.cl",
            descripcion: "Prueba de tracking manual desde frontend",
            timestamp: new Date().toISOString(),
          },
        }),
      })

      const data = await res.json()
      console.log("📥 Respuesta del servidor:", data)

      setResult({
        success: res.ok,
        message: res.ok ? "Evento enviado correctamente" : "Error al enviar el evento",
        data,
      })
    } catch (error) {
      console.error("❌ Error al enviar evento:", error)
      setResult({
        success: false,
        message: `Error: ${error instanceof Error ? error.message : "Desconocido"}`,
      })
    } finally {
      setLoading(false)
    }
  }

  const enviarEventoFirebase = async () => {
    setLoading(true)
    setResult(null)

    try {
      console.log("📤 Enviando evento de prueba a Firebase...")

      const res = await fetch("/api/firebase-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipo: "evento-test-firebase",
          datos: {
            email: "test@legalpo.cl",
            descripcion: "Prueba de tracking manual desde frontend a Firebase",
            timestamp: new Date().toISOString(),
          },
        }),
      })

      const data = await res.json()
      console.log("📥 Respuesta de Firebase:", data)

      setResult({
        success: res.ok,
        message: res.ok ? "Evento enviado correctamente a Firebase" : "Error al enviar el evento a Firebase",
        data,
      })
    } catch (error) {
      console.error("❌ Error al enviar evento a Firebase:", error)
      setResult({
        success: false,
        message: `Error: ${error instanceof Error ? error.message : "Desconocido"}`,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6">Prueba de Tracking de Eventos</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Prueba de Tracking (API General)</CardTitle>
            <CardDescription>Envía un evento de prueba al endpoint /api/track-event</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={enviarEvento} disabled={loading} className="w-full">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar Evento de Prueba"
              )}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prueba de Firebase</CardTitle>
            <CardDescription>Envía un evento de prueba directamente a Firebase</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={enviarEventoFirebase} disabled={loading} className="w-full" variant="outline">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando a Firebase...
                </>
              ) : (
                "Enviar Evento a Firebase"
              )}
            </Button>
          </CardContent>
        </Card>
      </div>

      {result && (
        <Alert className={`mt-6 ${result.success ? "bg-green-50" : "bg-red-50"}`}>
          {result.success ? (
            <CheckCircle className="h-4 w-4 text-green-600" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-600" />
          )}
          <AlertTitle>{result.success ? "Éxito" : "Error"}</AlertTitle>
          <AlertDescription>
            {result.message}
            {result.data && (
              <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-auto">
                {JSON.stringify(result.data, null, 2)}
              </pre>
            )}
          </AlertDescription>
        </Alert>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Instrucciones de verificación</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Haz clic en el botón "Enviar Evento de Prueba" para enviar un evento al endpoint general.</li>
          <li>Haz clic en el botón "Enviar Evento a Firebase" para enviar un evento directamente a Firebase.</li>
          <li>Verifica en la consola del navegador que se envía la petición y se recibe respuesta.</li>
          <li>Verifica en los logs de Vercel que se registra el evento correctamente.</li>
          <li>Comprueba en el dashboard de estadísticas que el evento aparece después de unos minutos.</li>
        </ol>
      </div>
    </div>
  )
}
