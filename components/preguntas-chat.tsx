"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useChat } from "ai/react"
import { useRouter } from "next/router"
import { ShareButton } from "@/components/share-button"

export default function PreguntasChat() {
  const router = useRouter()
  const { tema } = router.query
  const [temaTitle, setTemaTitle] = useState("")
  const chatRef = useRef(null)

  useEffect(() => {
    if (tema) {
      setTemaTitle(tema.toString())
    }
  }, [tema])

  const { messages, input, handleInputChange, handleSubmit, isLoading, setInput } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        role: "system",
        content: `Eres un asistente legal experto en ${temaTitle}. Responde preguntas sobre este tema de manera concisa y profesional.`,
      },
    ],
  })

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      handleSubmit(event)
    }
  }

  const getTemaTitle = () => {
    return temaTitle
  }

  const getShareableContent = () => {
    if (messages.length <= 1) return ""
    const temaTitle = getTemaTitle()
    const conversation = messages
      .slice(1)
      .map((msg) => `${msg.role === "user" ? "Consulta:" : "Respuesta LegalPO:"} ${msg.content}`)
      .join("\n\n")
    return `${temaTitle} - Consulta resuelta en LegalPO:\n\n${conversation}\n\n¡Resuelve tus dudas legales en LegalPO!`
  }

  return (
    <div className="container mx-auto max-w-3xl p-4">
      <h1 className="text-2xl font-bold mb-4">{temaTitle}</h1>
      <div className="space-y-4">
        {messages.slice(1).map((message) => (
          <div
            key={message.id}
            className={`p-3 rounded-lg ${message.role === "user" ? "bg-blue-100 text-gray-800 self-start" : "bg-gray-100 text-gray-800 self-end"}`}
          >
            <p className="text-sm whitespace-pre-line">{message.content}</p>
          </div>
        ))}
      </div>
      {isLoading && <p>Cargando respuesta...</p>}
      <div className="border-t border-blue-100 p-4">
        <textarea
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Escribe tu pregunta aquí..."
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
          rows={3}
        />
        <div className="mt-2 flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Enviar
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setInput("")}
            disabled={isLoading}
          >
            Limpiar
          </button>
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
      </div>
    </div>
  )
}
