"use client"

import type React from "react"
import { useState, useEffect, useRef, useMemo } from "react"
import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from "lucide-react"
import { TextToSpeech } from "@/components/text-to-speech"
import { ShareButton } from "@/components/share-button"

interface Message {
  role: "user" | "assistant"
  content: string
}

interface PreguntasChatProps {
  tema: "deudas" | "laboral" | "familia"
}

export function PreguntasChat({ tema }: PreguntasChatProps) {
  const { data: session } = useSession()
  const pathname = usePathname()

  const mensajeInicial = useMemo(() => {
    if (tema === "deudas") {
      return "Hola, soy el asistente legal de LegalPo especializado en deudas. Puedo ayudarte con consultas sobre cobranzas, embargos, prescripción de deudas y repactaciones. ¿En qué puedo ayudarte hoy?"
    } else if (tema === "laboral") {
      return "Hola, soy el asistente legal de LegalPo especializado en normativa laboral chilena. Puedo ayudarte con consultas sobre contratos de trabajo, despidos, finiquitos, licencias médicas y otros temas relacionados con el Código del Trabajo. ¿En qué puedo ayudarte hoy?"
    } else if (tema === "familia") {
      return "Hola, soy el asistente legal de LegalPo especializado en derecho de familia. Puedo ayudarte con consultas sobre matrimonio, divorcio, pensión alimenticia, custodia de hijos y otros temas relacionados con el derecho familiar en Chile. ¿En qué puedo ayudarte hoy?"
    }
    return "Hola, soy el asistente legal de LegalPo. ¿En qué puedo ayudarte hoy?"
  }, [tema])

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
      // Determinar el endpoint de la API según el tema
      let apiEndpoint = "/api/chat-laboral"

      if (tema === "deudas") {
        apiEndpoint = "/api/chat-deudas"
      } else if (tema === "familia") {
        apiEndpoint = "/api/chat-familia"
      }

      console.log(`Enviando mensaje a endpoint: ${apiEndpoint}`, {
        tema,
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
      console.error(`Error en chat de ${tema}:`, error)
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

  const getTemaTitle = () => {
    if (tema === "deudas") return "Asistente de Deudas"
    if (tema === "laboral") return "Asistente Laboral"
    if (tema === "familia") return "Asistente de Familia"
    return "Asistente Legal"
  }

  const getTemaDescription = () => {
    if (tema === "deudas")
      return "Haz preguntas sobre deudas, cobranzas, prescripción y DICOM y recibe respuestas basadas en la legislación vigente"
    if (tema === "laboral")
      return "Haz preguntas sobre normativa laboral chilena y recibe respuestas basadas en la legislación vigente"
    if (tema === "familia")
      return "Haz preguntas sobre derecho de familia y recibe respuestas basadas en la legislación vigente"
    return "Haz preguntas sobre temas legales"
  }

  const getPlaceholder = () => {
    if (tema === "deudas") return "Escribe tu consulta sobre deudas, cobranzas o DICOM..."
    if (tema === "laboral")
      return "Escribe tu consulta sobre normativa laboral, derechos del trabajador o acoso laboral..."
    if (tema === "familia") return "Escribe tu consulta sobre matrimonio, divorcio o pensión alimenticia..."
    return "Escribe tu consulta legal..."
  }

  const getShareableContent = () => {
    if (messages.length <= 1) return ""

    const conversation = messages
      .slice(1) // Omitir mensaje inicial
      .map((msg) => `${msg.role === "user" ? "Consulta:" : "Respuesta LegalPO:"} ${msg.content}`)
      .join("\n\n")

    return `${getTemaTitle()} - Consulta resuelta en LegalPO:\n\n${conversation}\n\n¡Resuelve tus dudas legales en LegalPO!`
  }

  return (
    <div className="mb-8">
      <div className="bg-blue-50 p-4 rounded-t-lg border border-blue-100">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-blue-900">{getTemaTitle()}</h2>
            <p className="text-gray-600">{getTemaDescription()}</p>
          </div>
          {messages.length > 1 && (
            <ShareButton
              title={`${getTemaTitle()} - LegalPO`}
              text={getShareableContent()}
              size="sm"
              variant="outline"
            />
          )}
        </div>
      </div>

      <div className="bg-white border-x border-b border-blue-100 rounded-b-lg">
        <div className="space-y-4 p-4 min-h-[500px] max-h-[600px] overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <Avatar className={message.role === "assistant" ? "bg-blue-100" : "bg-gray-100"}>
                  <AvatarFallback>{message.role === "user" ? "U" : "AI"}</AvatarFallback>
                  {message.role === "assistant" && <AvatarImage src="/logo.png" />}
                  {message.role === "user" && session?.user?.image && (
                    <AvatarImage src={session.user.image || "/placeholder.svg"} />
                  )}
                </Avatar>
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.role === "user" ? "bg-blue-600 text-white" : "bg-blue-50"
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

        <div className="border-t border-blue-100 p-4">
          <div className="flex items-center gap-2">
            <Input
              type="text"
              placeholder={getPlaceholder()}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              className="flex-1"
            />
            <Button type="submit" onClick={sendMessage} disabled={isLoading} className="bg-blue-600 hover:bg-blue-700">
              <Send className="h-4 w-4" />
              <span className="sr-only">Enviar mensaje</span>
            </Button>
          </div>

          {messages.length > 1 && (
            <div className="mt-4 pt-3 border-t border-blue-100">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">¿Te fue útil esta consulta?</span>
                <ShareButton
                  title={`${getTemaTitle()} - LegalPO`}
                  text={getShareableContent()}
                  size="sm"
                  variant="outline"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Comparte para ayudar a otros con dudas similares</p>
            </div>
          )}

          <div className="mt-4 text-xs text-gray-500">
            <p>
              <strong>Nota:</strong> Este asistente proporciona información general basada en la legislación chilena.
              Para asesoría legal específica, consulta con un abogado.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreguntasChat
