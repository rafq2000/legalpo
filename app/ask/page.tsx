"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Send, Shield, Loader2, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { TextToSpeech } from "@/components/text-to-speech"
import { Badge } from "@/components/ui/badge"
import { useSafeSession } from "@/hooks/use-safe-session" // Use the safe session hook

// Importa el componente AdUnit al inicio del archivo
import { AdUnit } from "@/components/ad-unit"
import { SiteFooter } from "@/components/site-footer"
// Añadir la importación del ShareButton en la sección de importaciones
import { ShareButton } from "@/components/share-button"

// Define the Message type
interface Message {
  role: string
  content: string
  title?: string
  model?: string
}

export default function AskPage() {
  const { data: session, status } = useSafeSession() // Use the safe session hook
  const router = useRouter()
  const [userId, setUserId] = useState<string | null>(null)
  const [input, setInput] = useState<string>("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hola, soy el asistente legal especializado en deudas de Legal Po. ¿En qué puedo ayudarte con tus consultas sobre deudas?",
      title: "Asistente Legal Legal Po",
    },
  ])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isAuthChecking, setIsAuthChecking] = useState<boolean>(true)
  const [isClient, setIsClient] = useState<boolean>(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Only run auth check on client side
    if (!isClient) return

    // Verificar si el usuario está autenticado
    if (status === "loading") {
      setIsAuthChecking(true)
      return
    }

    if (status === "unauthenticated") {
      // Redirigir a la página de login si no está autenticado
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`)
      return
    }

    setIsAuthChecking(false)

    // Intentar recuperar el userId del localStorage
    const storedUserId = localStorage.getItem("docuscan_user_id")
    if (storedUserId) {
      setUserId(storedUserId)
    }
  }, [status, router, isClient])

  useEffect(() => {
    // Scroll to bottom when messages change
    if (isClient) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isClient])

  // Si está cargando o no está autenticado, mostrar pantalla de carga
  if (!isClient || isAuthChecking || status === "loading" || status === "unauthenticated") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
        <p className="text-center">Verificando sesión...</p>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      console.log("Enviando consulta:", input)

      const response = await fetch("/api/chat-legal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: messages.concat(userMessage), // Enviar todo el historial de mensajes
          userId: userId,
        }),
      })

      const data = await response.json()

      // Guardar el userId si se recibió uno nuevo
      if (data.userId && (!userId || userId !== data.userId)) {
        setUserId(data.userId)
        localStorage.setItem("docuscan_user_id", data.userId)
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.response || "No pude procesar tu consulta. Por favor, intenta con otra pregunta.",
        title: "Asistente Legal Legal Po",
        model: data.model || "IA",
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error:", error)
      // Mensaje de error genérico en caso de fallo
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Entiendo tu situación. Para poder ayudarte mejor, ¿podrías proporcionar más detalles sobre tus deudas? Por ejemplo, ¿qué tipo de deudas tienes y hace cuánto tiempo dejaste de pagarlas?",
          title: "Asistente Legal Legal Po",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  // Obtener el texto de todos los mensajes para la lectura
  const getAllMessagesText = () => {
    return messages.map((msg) => `${msg.role === "user" ? "Tú:" : "Asistente:"} ${msg.content}`).join(". ")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold">Legal Po</span>
            </Link>
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Anuncio en la parte superior */}
      <div className="container py-4 mt-2">
        <AdUnit slot="6543210987" format="horizontal" className="horizontal" />
      </div>

      <main className="flex-1 container py-4 sm:py-6 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold">Consulta sobre deudas</h1>
            <TextToSpeech text={getAllMessagesText()} label="Leer conversación" />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Asistente legal especializado en deudas</CardTitle>
              <CardDescription>
                Realiza consultas sobre tus deudas, cobranzas y tus derechos como deudor
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="text-sm">Este asistente puede ayudarte con información sobre:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                  <li>Prescripción de deudas</li>
                  <li>Procesos de cobranza judicial y extrajudicial</li>
                  <li>Derechos del deudor</li>
                  <li>Negociación con acreedores</li>
                  <li>Procedimientos de reorganización de deudas</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Anuncio entre la información y el chat - optimizado */}
          <div className="my-6">
            <AdUnit slot="3456789012" format="horizontal" className="horizontal in-content" />
          </div>

          <div className="bg-card border rounded-lg overflow-hidden">
            <div className="p-4 border-b bg-muted">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                  <h2 className="font-semibold">Chat con asistente legal</h2>
                </div>
                <div className="flex items-center gap-2">
                  <TextToSpeech text={getAllMessagesText()} label="Leer conversación" />
                  {messages.length > 1 && (
                    <ShareButton
                      title="Consulta legal en Legal Po"
                      text={getAllMessagesText()}
                      size="sm"
                      variant="ghost"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="p-4 h-[300px] sm:h-[400px] overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${message.role === "user" ? "flex justify-end" : "flex justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      {message.title && message.role === "assistant" && (
                        <div className="font-semibold text-xs mb-1">{message.title}</div>
                      )}
                      {message.role === "assistant" && (
                        <div className="ml-2 mt-1 flex-shrink-0">
                          <TextToSpeech text={message.content} label="Leer respuesta" />
                        </div>
                      )}
                    </div>
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    {message.model && message.role === "assistant" && (
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs">
                          Modelo: {message.model}
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="bg-muted p-3 rounded-lg flex items-center">
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    <span>Procesando tu consulta...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Textarea
                  placeholder="Escribe tu consulta sobre deudas..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 min-h-[60px] sm:min-h-[80px]"
                  disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="h-10 w-10">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Enviar mensaje</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
