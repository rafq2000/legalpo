"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Copy } from "lucide-react"

export default function TelegramSetupPage() {
  const [botToken, setBotToken] = useState("")
  const [chatId, setChatId] = useState("")
  const [testMessage, setTestMessage] = useState("Mensaje de prueba desde LegalPO")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [result, setResult] = useState<string>("")

  const handleTest = async () => {
    setStatus("loading")
    try {
      const response = await fetch("/api/test-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          botToken,
          chatId,
          message: testMessage,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus("success")
        setResult("Notificación enviada correctamente. Verifica tu chat de Telegram.")
      } else {
        setStatus("error")
        setResult(`Error: ${data.error || "Desconocido"}`)
      }
    } catch (error) {
      setStatus("error")
      setResult(`Error: ${error instanceof Error ? error.message : "Desconocido"}`)
    }
  }

  const copyInstructions = () => {
    navigator.clipboard.writeText(
      "1. Busca @BotFather en Telegram\n" +
        "2. Envía /newbot y sigue las instrucciones\n" +
        "3. Copia el token que te proporciona\n" +
        "4. Busca @userinfobot y envíale un mensaje\n" +
        "5. Copia tu ID de chat\n" +
        "6. Agrega estas variables de entorno en Vercel:\n" +
        "   TELEGRAM_BOT_TOKEN=tu_token\n" +
        "   TELEGRAM_CHAT_ID=tu_chat_id",
    )
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Configuración de Notificaciones de Telegram</CardTitle>
          <CardDescription>Configura un bot de Telegram para recibir notificaciones de sugerencias</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Instrucciones</h3>
              <Button variant="outline" size="sm" onClick={copyInstructions}>
                <Copy className="h-4 w-4 mr-2" />
                Copiar
              </Button>
            </div>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Busca <code>@BotFather</code> en Telegram
              </li>
              <li>
                Envía <code>/newbot</code> y sigue las instrucciones
              </li>
              <li>Copia el token que te proporciona</li>
              <li>
                Busca <code>@userinfobot</code> y envíale un mensaje
              </li>
              <li>Copia tu ID de chat</li>
              <li>
                Agrega estas variables de entorno en Vercel:
                <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
                  TELEGRAM_BOT_TOKEN=tu_token
                  <br />
                  TELEGRAM_CHAT_ID=tu_chat_id
                </pre>
              </li>
            </ol>
          </div>

          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-lg font-medium">Probar configuración</h3>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="botToken">Token del Bot</Label>
                <Input
                  id="botToken"
                  value={botToken}
                  onChange={(e) => setBotToken(e.target.value)}
                  placeholder="1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="chatId">ID de Chat</Label>
                <Input id="chatId" value={chatId} onChange={(e) => setChatId(e.target.value)} placeholder="123456789" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="testMessage">Mensaje de prueba</Label>
                <Input
                  id="testMessage"
                  value={testMessage}
                  onChange={(e) => setTestMessage(e.target.value)}
                  placeholder="Mensaje de prueba"
                />
              </div>
            </div>
          </div>

          {status === "success" && (
            <Alert className="bg-green-50 border-green-200">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-800">Éxito</AlertTitle>
              <AlertDescription className="text-green-700">{result}</AlertDescription>
            </Alert>
          )}

          {status === "error" && (
            <Alert className="bg-red-50 border-red-200">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-800">Error</AlertTitle>
              <AlertDescription className="text-red-700">{result}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={handleTest} disabled={!botToken || !chatId || status === "loading"} className="w-full">
            {status === "loading" ? "Enviando..." : "Probar notificación"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
