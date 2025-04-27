"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { submitFeedback } from "@/lib/feedback-service"

interface InlineFeedbackProps {
  question?: string
  context?: string
  compact?: boolean
}

export function InlineFeedback({
  question = "¿Te resultó útil esta información?",
  context = "page",
  compact = false,
}: InlineFeedbackProps) {
  const { data: session } = useSession()
  const pathname = usePathname()

  const [rating, setRating] = useState<"positive" | "negative" | null>(null)
  const [showComment, setShowComment] = useState(false)
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleRating = async (value: "positive" | "negative") => {
    setRating(value)

    // Si es negativo, mostrar campo de comentario
    if (value === "negative") {
      setShowComment(true)
      return
    }

    // Si es positivo, enviar directamente
    setIsSubmitting(true)

    try {
      await submitFeedback({
        type: "quick",
        quickRating: value,
        detailedRating: null,
        comment: "",
        serviceUsed: "general",
        userId: session?.user?.email || null,
        userType: session?.user ? "registered" : "anonymous",
        path: pathname,
        context,
      })

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting feedback:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmitComment = async () => {
    setIsSubmitting(true)

    try {
      await submitFeedback({
        type: "quick",
        quickRating: rating,
        detailedRating: null,
        comment,
        serviceUsed: "general",
        userId: session?.user?.email || null,
        userType: session?.user ? "registered" : "anonymous",
        path: pathname,
        context,
      })

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting feedback:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className={`rounded-lg bg-gray-50 p-4 ${compact ? "text-sm" : ""}`}>
        <p className="text-center text-gray-600">¡Gracias por tu feedback!</p>
      </div>
    )
  }

  return (
    <div className={`rounded-lg bg-gray-50 p-4 ${compact ? "text-sm" : ""}`}>
      {!showComment ? (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600">{question}</p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size={compact ? "sm" : "default"}
              onClick={() => handleRating("positive")}
              disabled={isSubmitting}
              className="flex items-center gap-1"
            >
              <ThumbsUp className={`${compact ? "h-3 w-3" : "h-4 w-4"}`} />
              <span>Sí</span>
            </Button>
            <Button
              variant="outline"
              size={compact ? "sm" : "default"}
              onClick={() => handleRating("negative")}
              disabled={isSubmitting}
              className="flex items-center gap-1"
            >
              <ThumbsDown className={`${compact ? "h-3 w-3" : "h-4 w-4"}`} />
              <span>No</span>
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-gray-600">¿Cómo podríamos mejorar?</p>
          <Textarea
            placeholder="Tu opinión nos ayuda a mejorar..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            className="resize-none"
          />
          <div className="flex justify-end gap-2">
            <Button
              variant="ghost"
              size={compact ? "sm" : "default"}
              onClick={() => setShowComment(false)}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              variant="default"
              size={compact ? "sm" : "default"}
              onClick={handleSubmitComment}
              disabled={isSubmitting || !comment.trim()}
              className="flex items-center gap-1"
            >
              <MessageSquare className={`${compact ? "h-3 w-3" : "h-4 w-4"}`} />
              <span>Enviar</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
