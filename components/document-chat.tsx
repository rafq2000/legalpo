"use client"

import type React from "react"
import { useState, useCallback, useRef, useEffect } from "react"
import { Send, Loader2, HelpCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { TextToSpeech } from "@/components/text-to-speech"
import { ShareButton } from "@/components/share-button"

interface Message {
  role: "user" | "assistant"
  content: string
}

interface DocumentChatProps {
  documentText: string
  documentId?: string
}

export function DocumentChat({ documentText, documentId }: DocumentChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hola, soy tu asistente de documentos. Puedes preguntarme cualquier cosa sobre el documento que has cargado.",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Sugerencias de preguntas comunes
  const questionSuggestions = [
    "¿Cuáles son las partes principales de este documento?",
    "¿Hay alguna cláusula importante que deba conocer?",
    "¿Cuáles son mis obligaciones según este documento?",
    "¿Hay fechas importantes mencionadas?",
    "¿Qué riesgos presenta este documento?",
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = useCallback(
    async (messageText: string = input) => {
      if ((!messageText.trim() && !input.trim()) || isLoading) return

      const userMessage: Message = { role: "user", content: messageText.trim() || input }
      setMessages((prev) => [...prev, userMessage])
      setInput("")
      setIsLoading(true)

      try {
        // Preparar el contexto con el texto del documento y la pregunta
        const response = await fetch("/api/analyze-document", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: `DOCUMENTO: ${documentText.substring(0, 3000)}... 
               PREGUNTA DEL USUARIO: ${messageText.trim() || input}`,
          }),
        })

        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor")
        }

        const data = await response.json()

        if (data.error) {
          throw new Error(data.error)
        }

        const assistantMessage: Message = {
          role: "assistant",
          content:
            data.analysis || "No pude analizar el documento correctamente. Por favor, intenta con otra pregunta.",
        }

        setMessages((prev) => [...prev, assistantMessage])
      } catch (error) {
        console.error("Error al procesar la consulta:", error)
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Lo siento, hubo un error al procesar tu consulta. Por favor, intenta nuevamente.",
          },
        ])
      } finally {
        setIsLoading(false)
      }
    },
    [input, documentText, isLoading],
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion)
  }

  // Obtener el texto de todos los mensajes para la lectura
  const getAllMessagesText = () => {
    return messages.map((msg) => `${msg.role === "user" ? "Tú:" : "Asistente:"} ${msg.content}`).join(". ")
  }

  // Obtener contenido para compartir
  const getShareableContent = () => {
    const documentSummary = `Consulta sobre documento en LegalPO:\n\n`
    const conversation = messages
      .filter((msg) => msg.role === "user" || msg.role === "assistant")
      .map((msg) => `${msg.role === "user" ? "Pregunta:" : "Respuesta:"} ${msg.content}`)
      .join("\n\n")
    return documentSummary + conversation + "\n\n¡Conoce más herramientas legales en LegalPO!"
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-2 px-2">
        <div className="flex items-center">
          <HelpCircle className="h-4 w-4 mr-2 text-primary" />
          <span className="text-sm font-medium">Consulta sobre el documento</span>
        </div>
        <div className="flex items-center gap-2">
          <TextToSpeech text={getAllMessagesText()} label="Leer conversación" />
          {messages.length > 1 && (
            <ShareButton
              title="Consulta sobre documento en LegalPO"
              text={getShareableContent()}
              size="sm"
              variant="ghost"
            />
          )}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Info className="h-4 w-4" />
                  <span className="sr-only">Información</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-xs">
                  Puedes preguntar sobre cualquier aspecto del documento. El asistente analizará el contenido y te
                  proporcionará información relevante.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 border rounded-lg bg-background">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 sm:p-3 rounded-lg max-w-[90%] sm:max-w-[80%] ${
              message.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"
            }`}
          >
            <div className="flex justify-between items-start">
              <p className="whitespace-pre-wrap text-sm sm:text-base">{message.content}</p>
              {message.role === "assistant" && (
                <div className="ml-2 mt-1 flex-shrink-0">
                  <TextToSpeech text={message.content} label="Leer respuesta" />
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="bg-muted p-2 sm:p-3 rounded-lg max-w-[90%] sm:max-w-[80%] flex items-center">
            <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin mr-2" />
            <span className="text-sm sm:text-base">Analizando documento...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Sugerencias de preguntas */}
      {messages.length < 3 && (
        <div className="my-2 flex flex-wrap gap-2">
          {questionSuggestions.map((suggestion, index) => (
            <Badge
              key={index}
              variant="outline"
              className="cursor-pointer hover:bg-secondary transition-colors"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </Badge>
          ))}
        </div>
      )}

      {/* Sección de compartir cuando hay conversación */}
      {messages.length > 2 && (
        <div className="border-t pt-3 mb-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">¿Te fue útil esta consulta?</span>
            <ShareButton
              title="Consulta sobre documento - LegalPO"
              text={getShareableContent()}
              size="sm"
              variant="outline"
              className="text-xs"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Comparte esta consulta para ayudar a otros con dudas similares
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="border-t p-3 sm:p-4 mt-2">
        <div className="flex items-end gap-2">
          <Textarea
            placeholder="Escribe tu pregunta sobre el documento..."
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="flex-1 min-h-[60px] sm:min-h-[80px] resize-none text-sm sm:text-base"
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="h-9 w-9 sm:h-10 sm:w-10">
            <Send className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="sr-only">Enviar mensaje</span>
          </Button>
        </div>
      </form>
    </div>
  )
}
