"use client"

import type React from "react"

import type { ChatCompletionRequestMessage } from "openai"
import { ChatScroll } from "@/components/chat-scroll"
import { ChatForm } from "@/components/chat-form"
import { TextToSpeech } from "@/components/text-to-speech"
import { ShareButton } from "@/components/share-button"

interface DocumentChatProps {
  messages: ChatCompletionRequestMessage[]
  isLoading: boolean
  onSubmit: (values: { prompt: string }) => void
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  input: string
  apiCallCounter: number
}

export const DocumentChat = ({
  messages,
  isLoading,
  onSubmit,
  handleInputChange,
  input,
  apiCallCounter,
}: DocumentChatProps) => {
  const getAllMessagesText = () => {
    return messages.map((message) => message.content).join(" ")
  }

  const getShareableContent = () => {
    const documentSummary = `Consulta sobre documento en LegalPO:\n\n`
    const conversation = messages
      .map((msg) => `${msg.role === "user" ? "Pregunta:" : "Respuesta:"} ${msg.content}`)
      .join("\n\n")
    return documentSummary + conversation + "\n\n¡Conoce más herramientas legales en LegalPO!"
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start gap-4">
        <TextToSpeech text={getAllMessagesText()} />
        {messages.length > 1 && (
          <ShareButton
            title="Consulta sobre documento - LegalPO"
            text={getShareableContent()}
            size="sm"
            variant="ghost"
          />
        )}
      </div>
      <ChatScroll messages={messages} isLoading={isLoading} apiCallCounter={apiCallCounter} />
      {messages.length > 1 && (
        <div className="border-t pt-3 mb-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">¿Te fue útil esta consulta?</span>
            <ShareButton
              title="Análisis de documento - LegalPO"
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
      <ChatForm isLoading={isLoading} onSubmit={onSubmit} handleInputChange={handleInputChange} input={input} />
    </div>
  )
}
