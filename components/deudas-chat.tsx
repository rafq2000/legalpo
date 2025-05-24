"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChatBubble } from "@/components/chat-bubble"
import { InlineFeedback } from "@/components/inline-feedback"
import { LawyerContactButton } from "@/components/lawyer-contact-button"
import { ShareButton } from "@/components/share-button"

export function DeudasChat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!input) return

    setIsLoading(true)
    setMessages((prev) => [...prev, { role: "user", content: input }])

    try {
      const response = await fetch("/api/deudas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setMessages((prev) => [...prev, { role: "LegalPO", content: data.response }])
    } catch (error) {
      console.error("Error fetching data:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "LegalPO",
          content: "Lo siento, hubo un error al procesar tu consulta. Por favor, intenta de nuevo más tarde.",
        },
      ])
    } finally {
      setIsLoading(false)
      setInput("")
    }
  }

  const getShareableContent = () => {
    if (messages.length === 0) return ""
    const conversation = messages
      .map((msg) => `${msg.role === "user" ? "Consulta:" : "Respuesta LegalPO:"} ${msg.content}`)
      .join("\n\n")
    return `Consulta sobre deudas resuelta en LegalPO:\n\n${conversation}\n\n¡Resuelve tus dudas legales en LegalPO!`
  }

  return (
    <Card className="col-span-4 lg:col-span-6">
      <CardHeader>
        <CardTitle>Consulta sobre deudas</CardTitle>
        <CardDescription>Resuelve tus dudas sobre deudas de forma gratuita.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col space-y-4">
          {messages.map((message, index) => (
            <ChatBubble key={index} role={message.role} content={message.content} />
          ))}
          {isLoading && <ChatBubble role="LegalPO" content="Cargando..." />}
        </div>
        <form onSubmit={handleSubmit} className="flex space-x-4">
          <Input
            type="text"
            placeholder="Escribe tu consulta aquí"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            Enviar
          </Button>
        </form>
        <InlineFeedback />
        {messages.length > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">¿Te ayudó esta respuesta?</span>
            <ShareButton
              title="Consulta sobre deudas - LegalPO"
              text={getShareableContent()}
              size="sm"
              variant="outline"
            />
          </div>
        )}
        {messages.length > 0 && (
          <div className="text-center py-2">
            <p className="text-xs text-gray-500 mb-2">Comparte esta consulta para ayudar a otros con dudas similares</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <LawyerContactButton />
      </CardFooter>
    </Card>
  )
}
