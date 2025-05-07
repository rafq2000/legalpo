"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"

export default function TestEventRecorder() {
  const [isLoading, setIsLoading] = useState(false)
  const [eventType, setEventType] = useState("test_event")
  const [eventData, setEventData] = useState(
    JSON.stringify({ test: true, timestamp: new Date().toISOString() }, null, 2),
  )
  const [result, setResult] = useState<{
    success: boolean
    message: string
    id?: string
    error?: string
  } | null>(null)

  const recordEvent = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      let datos
      try {
        datos = JSON.parse(eventData)
      } catch (e) {
        datos = { raw: eventData }
      }

      const response = await fetch("/api/firebase-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipo: eventType,
          datos,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setResult({
          success: true,
          message: "Evento registrado correctamente",
          id: data.id,
        })
      } else {
        setResult({
          success: false,
          message: "Error al registrar evento",
          error: data.error || "Error desconocido",
        })
      }
    } catch (error: any) {
      setResult({
        success: false,
        message: "Error al realizar la petición",
        error: error.message,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Prueba de Registro de Eventos</CardTitle>
        <CardDescription>Registra un evento de prueba en Firestore para verificar la configuración</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="eventType">Tipo de Evento</Label>
          <Input
            id="eventType"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            placeholder="Ej: page_view, click, etc."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="eventData">Datos del Evento (JSON)</Label>
          <Textarea
            id="eventData"
            value={eventData}
            onChange={(e) => setEventData(e.target.value)}
            placeholder='{"key": "value"}'
            rows={5}
            className="font-mono text-sm"
          />
        </div>

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
            {result.success && result.id && (
              <AlertDescription className="mt-2 text-green-600">ID: {result.id}</AlertDescription>
            )}
            {!result.success && result.error && (
              <AlertDescription className="mt-2 text-red-600">Error: {result.error}</AlertDescription>
            )}
          </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={recordEvent} disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Registrando...
            </>
          ) : (
            "Registrar Evento"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
