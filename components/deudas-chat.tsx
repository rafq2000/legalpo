"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, Loader2 } from "lucide-react"
import { useSession } from "next-auth/react"
import { GoogleAuthModal } from "@/components/google-auth-modal"
import { LegalDisclaimer } from "@/components/legal-disclaimer"
import { PrivacyConsentCheckbox } from "@/components/privacy-consent-checkbox"
import { InlineFeedback } from "@/components/feedback/inline-feedback"
import { LawyerContactButton } from "@/components/lawyer-contact-button"

export function DeudasChat() {
  const [query, setQuery] = useState("")
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [privacyConsent, setPrivacyConsent] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const { data: session } = useSession()
  const [feedbackId, setFeedbackId] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!query.trim()) return

    if (!session) {
      setShowAuthModal(true)
      return
    }

    if (!privacyConsent) {
      setError("Debes aceptar la política de privacidad para continuar.")
      return
    }

    setIsLoading(true)
    setError(null)

    const userMessage = { role: "user" as const, content: query }
    setMessages((prev) => [...prev, userMessage])

    try {
      const response = await fetch("/api/chat-deudas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [userMessage],
          userId: session?.user?.email || "anonymous",
        }),
      })

      if (!response.ok) {
        throw new Error("Error al procesar tu consulta. Por favor, intenta nuevamente.")
      }

      const data = await response.json()

      setMessages((prev) => [...prev, { role: "assistant", content: data.response }])
      setFeedbackId(data.id || null)
      setQuery("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error inesperado")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="bg-gray-50 rounded-lg p-4 max-h-[500px] overflow-y-auto">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <p>Haz una pregunta sobre deudas, cobranzas, prescripción o DICOM.</p>
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium text-gray-700">Ejemplos de preguntas:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• ¿Cuándo prescribe una deuda de tarjeta de crédito?</li>
                <li>• ¿Qué puedo hacer si me están cobrando intereses excesivos?</li>
                <li>• ¿Cómo puedo salir del DICOM?</li>
                <li>• ¿Pueden embargar mi sueldo por deudas?</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  message.role === "user" ? "bg-blue-100 ml-8" : "bg-white border border-gray-200 mr-8"
                }`}
              >
                <p className="text-sm font-semibold mb-1">{message.role === "user" ? "Tú" : "LegalPO"}</p>
                <div className="text-gray-800 whitespace-pre-wrap">{message.content}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {error && <div className="bg-red-50 text-red-800 p-3 rounded-lg text-sm">{error}</div>}

      {messages.length > 0 && feedbackId && (
        <div className="flex justify-end">
          <InlineFeedback id={feedbackId} />
        </div>
      )}

      {messages.length > 0 && (
        <div className="flex justify-end">
          <LawyerContactButton query={messages[0]?.content || ""} />
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Escribe tu consulta sobre deudas aquí..."
          className="min-h-[100px]"
          disabled={isLoading}
        />

        <PrivacyConsentCheckbox checked={privacyConsent} onChange={(e) => setPrivacyConsent(e.target.checked)} />

        <div className="flex justify-between items-center">
          <LegalDisclaimer />

          <Button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="bg-legalpo-primary hover:bg-legalpo-secondary"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Consultando...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Enviar consulta
              </>
            )}
          </Button>
        </div>
      </form>

      {showAuthModal && (
        <GoogleAuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          message="Para consultar sobre deudas, necesitas iniciar sesión primero."
        />
      )}
    </div>
  )
}
