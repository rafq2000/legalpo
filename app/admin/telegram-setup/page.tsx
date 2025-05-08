"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle, Loader2, AlertTriangle, Copy } from "lucide-react"

export default function TelegramSetupPage() {
  const [botToken, setBotToken] = useState("")
  const [chatId, setChatId] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{
    success: boolean
    message?: string
    error?: string
    details?: any
  } | null>(null)

  const testTelegram = async () => {
    setLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/test-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          botToken,
          chatId,
        }),
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({
        success: false,
        error: "Error al realizar la solicitud",
        details: error instanceof Error ? error.message : "Error desconocido",
      })
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Configuración de Telegram</CardTitle>
          <CardDescription>Configura las notificaciones de Telegram para recibir sugerencias</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Importante</AlertTitle>
            <AlertDescription>
              Después de probar, debes agregar estas variables de entorno en Vercel:
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
                  <code>TELEGRAM_BOT_TOKEN</code>
                  <Button variant="ghost" size="sm" onClick={() => copyToClipboard("TELEGRAM_BOT_TOKEN")}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
                  <code>TELEGRAM_CHAT_ID</code>
                  <Button variant="ghost" size="sm" onClick={() => copyToClipboard("TELEGRAM_CHAT_ID")}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <Label htmlFor="botToken">Token del Bot</Label>
            <Input
              id="botToken"
              value={botToken}
              onChange={(e) => setBotToken(e.target.value)}
              placeholder="1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            />
            <p className="text-sm text-gray-500">Crea un bot con @BotFather en Telegram y copia el token</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="chatId">ID del Chat</Label>
            <Input id="chatId" value={chatId} onChange={(e) => setChatId(e.target.value)} placeholder="123456789" />
            <p className="text-sm text-gray-500">Habla con @userinfobot en Telegram para obtener tu ID</p>
          </div>

          {result && (
            <Alert className={result.success ? "bg-green-50" : "bg-red-50"}>
              {result.success ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <XCircle className="h-4 w-4 text-red-600" />
              )}
              <AlertTitle>{result.success ? "Prueba exitosa" : "Error en la prueba"}</AlertTitle>
              <AlertDescription>{result.message || result.error || ""}</AlertDescription>
              {result.details && (
                <div className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto max-h-32">
                  <pre>{JSON.stringify(result.details, null, 2)}</pre>
                </div>
              )}
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={testTelegram} disabled={loading || !botToken || !chatId} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Probando...
              </>
            ) : (
              "Probar Configuración"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
