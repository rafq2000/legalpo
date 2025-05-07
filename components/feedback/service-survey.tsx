"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { CheckCircle2, XCircle, ThumbsUp, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { submitFeedback } from "@/lib/feedback-service"

interface ServiceSurveyProps {
  serviceType: "document-analysis" | "contract-generator" | "calculator" | "chat" | "general"
  onClose?: () => void
}

export function ServiceSurvey({ serviceType, onClose }: ServiceSurveyProps) {
  const { data: session } = useSession()
  const pathname = usePathname()

  const [rating, setRating] = useState<number | null>(null)
  const [isHelpful, setIsHelpful] = useState<boolean | null>(null)
  const [improvements, setImprovements] = useState<string[]>([])
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const improvementOptions = [
    { id: "accuracy", label: "Precisión de la información" },
    { id: "usability", label: "Facilidad de uso" },
    { id: "speed", label: "Velocidad" },
    { id: "clarity", label: "Claridad de la información" },
    { id: "design", label: "Diseño de la interfaz" },
    { id: "features", label: "Funcionalidades adicionales" },
  ]

  // Personalizar título según el servicio
  const getServiceTitle = () => {
    switch (serviceType) {
      case "document-analysis":
        return "¿Qué te pareció el análisis de documentos?"
      case "contract-generator":
        return "¿Qué te pareció el generador de contratos?"
      case "calculator":
        return "¿Qué te pareció la calculadora?"
      case "chat":
        return "¿Qué te pareció el asistente de chat?"
      default:
        return "¿Qué te pareció tu experiencia?"
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      await submitFeedback({
        type: "detailed",
        quickRating: isHelpful ? "positive" : "negative",
        detailedRating: rating as any,
        comment,
        serviceUsed: serviceType,
        userId: session?.user?.email || null,
        userType: session?.user ? "registered" : "anonymous",
        path: pathname,
        // Añadir datos adicionales específicos de la encuesta
        additionalData: {
          improvements,
        },
      })

      setIsSubmitted(true)

      // Cerrar después de 3 segundos si se proporciona onClose
      if (onClose) {
        setTimeout(() => {
          onClose()
        }, 3000)
      }
    } catch (error) {
      console.error("Error submitting survey:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleImprovementToggle = (id: string) => {
    setImprovements((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">¡Gracias por tu feedback!</h3>
          <p className="mt-2 text-sm text-gray-500">Tu opinión nos ayuda a mejorar LegalPO para todos los usuarios.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{getServiceTitle()}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label>¿Cómo calificarías tu experiencia?</Label>
          <RadioGroup
            value={rating?.toString() || ""}
            onValueChange={(value) => setRating(Number.parseInt(value))}
            className="flex space-x-1"
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <div key={value} className="flex flex-col items-center">
                <RadioGroupItem value={value.toString()} id={`rating-${value}`} className="sr-only" />
                <Label
                  htmlFor={`rating-${value}`}
                  className={`
                    h-10 w-10 rounded-full flex items-center justify-center cursor-pointer
                    ${rating === value ? "bg-blue-100 text-blue-700 border-2 border-blue-500" : "bg-gray-100 hover:bg-gray-200"}
                  `}
                >
                  {value}
                </Label>
              </div>
            ))}
          </RadioGroup>
          <div className="flex justify-between text-xs text-gray-500 px-1">
            <span>Muy malo</span>
            <span>Excelente</span>
          </div>
        </div>

        <div className="space-y-3">
          <Label>¿Te resultó útil este servicio?</Label>
          <div className="flex space-x-4">
            <Button
              type="button"
              variant={isHelpful === true ? "default" : "outline"}
              className="flex-1"
              onClick={() => setIsHelpful(true)}
            >
              <ThumbsUp className="mr-2 h-4 w-4" />
              Sí
            </Button>
            <Button
              type="button"
              variant={isHelpful === false ? "default" : "outline"}
              className="flex-1"
              onClick={() => setIsHelpful(false)}
            >
              <XCircle className="mr-2 h-4 w-4" />
              No
            </Button>
          </div>
        </div>

        {isHelpful === false && (
          <div className="space-y-3">
            <Label>¿Qué aspectos podríamos mejorar?</Label>
            <div className="grid grid-cols-2 gap-2">
              {improvementOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.id}
                    checked={improvements.includes(option.id)}
                    onCheckedChange={() => handleImprovementToggle(option.id)}
                  />
                  <Label htmlFor={option.id} className="text-sm">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-3">
          <Label htmlFor="comment">Comentarios adicionales (opcional)</Label>
          <Textarea
            id="comment"
            placeholder="Comparte tu experiencia o sugerencias..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        {onClose && (
          <Button type="button" variant="ghost" onClick={onClose} className="mr-2">
            Omitir
          </Button>
        )}
        <Button onClick={handleSubmit} disabled={isSubmitting || rating === null || isHelpful === null}>
          {isSubmitting ? (
            <>Enviando...</>
          ) : (
            <>
              Enviar feedback
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
