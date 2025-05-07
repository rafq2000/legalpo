"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from "lucide-react"
import { TextToSpeech } from "@/components/text-to-speech"
import { ShareButton } from "@/components/share-button"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function DeudasChat() {
  const { data: session } = useSession()

  const mensajeInicial =
    "Hola, soy el asistente legal de LegalPo especializado en deudas. Puedo ayudarte con consultas sobre cobranzas, embargos, prescripción de deudas y repactaciones. ¿En qué puedo ayudarte hoy?"

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: mensajeInicial,
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll al final de los mensajes cuando se añade uno nuevo
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Función para enviar mensaje
  const sendMessage = async () => {
    if (input.trim() === "") return

    // Añadir mensaje del usuario
    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const apiEndpoint = "/api/chat-deudas"

      console.log(`Enviando mensaje a endpoint: ${apiEndpoint}`, {
        messageCount: messages.length,
        userMessage: userMessage.content.substring(0, 50) + (userMessage.content.length > 50 ? "..." : ""),
      })

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          userId: session?.user?.email || "anonymous",
        }),
      })

      if (!response.ok) {
        const errorText = await response.text().catch(() => "No error text available")
        console.error(`Error en respuesta HTTP: ${response.status}`, errorText)
        throw new Error(`Error al enviar mensaje: ${response.status}`)
      }

      const data = await response.json()

      if (!data || !data.response) {
        console.error("Respuesta inválida:", data)
        throw new Error("Respuesta inválida del servidor")
      }

      // Añadir respuesta del asistente
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }])
    } catch (error) {
      console.error(`Error en chat de deudas:`, error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Lo siento, ha ocurrido un error al procesar tu consulta. Por favor, intenta nuevamente en unos momentos.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  // Manejar envío con Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <Card className="border-blue-100 shadow-md">
      <CardHeader className="bg-blue-50 border-b border-blue-100">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Consultas sobre Deudas</CardTitle>
            <CardDescription>Haz preguntas sobre deudas, cobranzas, embargos y repactaciones</CardDescription>
          </div>
          {messages.length > 1 && (
            <ShareButton
              title="Consulta sobre deudas en LegalPo"
              text={messages.map((msg) => `${msg.role === "user" ? "Yo: " : "Asistente: "}${msg.content}`).join("\n\n")}
              size="sm"
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-4 h-[400px] overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <Avatar>
                  <AvatarFallback>{message.role === "user" ? "U" : "AI"}</AvatarFallback>
                  {message.role === "assistant" && <AvatarImage src="/logo.png" />}
                  {message.role === "user" && session?.user?.image && (
                    <AvatarImage src={session.user.image || "/placeholder.svg"} />
                  )}
                </Avatar>
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.content}</div>
                  {message.role === "assistant" && (
                    <div className="mt-2 flex justify-end">
                      <TextToSpeech text={message.content} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-100 p-4">
        <div className="flex w-full items-center space-x-2">
          <Input
            type="text"
            placeholder="Escribe tu consulta sobre deudas, cobranzas o embargos..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" size="icon" onClick={sendMessage} disabled={isLoading}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Enviar mensaje</span>
          </Button>
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          <p>
            Este asistente proporciona información general basada en la legislación chilena. Para asesoría legal
            específica, consulta con un abogado.
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}

export default DeudasChat
