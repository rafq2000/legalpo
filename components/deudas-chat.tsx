"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useToast } from "@/components/ui/use-toast"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function DeudasChat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hola, soy el asistente legal especializado en deudas de LegalPO. ¿En qué puedo ayudarte con tus consultas sobre deudas?",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { data: session } = useSession()
  const { toast } = useToast()
  const userId = session?.user?.email || "anonymous"

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const userMessage: Message = {
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      console.log("Enviando consulta a /api/chat-deudas")
      const response = await fetch("/api/chat-deudas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: messages.concat(userMessage),
          userId: userId,
        }),
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      // Manejar la respuesta como stream
      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let done = false
      let accumulatedResponse = ""

      while (!done && reader) {
        const { value, done: doneReading } = await reader.read()
        done = doneReading

        if (value) {
          const chunkText = decoder.decode(value)
          accumulatedResponse += chunkText

          // Actualizar los mensajes con la respuesta parcial
          setMessages((prev) => {
            const newMessages = [...prev]
            // Si ya existe un mensaje del asistente, actualizarlo
            if (newMessages[newMessages.length - 1]?.role === "assistant") {
              newMessages[newMessages.length - 1].content = accumulatedResponse
            } else {
              // Si no, crear un nuevo mensaje
              newMessages.push({
                role: "assistant",
                content: accumulatedResponse,
              })
            }
            return newMessages
          })
        }
      }
    } catch (error) {
      console.error("Error al enviar mensaje:", error)
      toast({
        title: "Error",
        description: "No se pudo procesar tu consulta. Por favor, intenta nuevamente.",
        variant: "destructive",
      })

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Lo siento, ha ocurrido un error al procesar tu consulta. Por favor, intenta nuevamente.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col space-y-4">
      <Card className="border-gray-200">
        <CardContent className="p-4 md:p-6">
          <div className="space-y-4 max-h-[500px] overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`flex items-start gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <Avatar className={message.role === "assistant" ? "bg-blue-100" : "bg-gray-100"}>
                    <AvatarFallback>{message.role === "assistant" ? "AI" : "U"}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`rounded-lg px-4 py-2 ${
                      message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex items-end gap-2">
            <Textarea
              placeholder="Escribe tu consulta sobre deudas aquí..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[80px] flex-1"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Enviar mensaje</span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
