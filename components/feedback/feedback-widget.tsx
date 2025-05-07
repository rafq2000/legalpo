"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { MessageSquare, ThumbsUp, X, Send, Smile, Frown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { submitFeedback } from "@/lib/feedback-service"

type FeedbackType = "quick" | "detailed" | null
type QuickRating = "positive" | "negative" | null
type DetailedRating = 1 | 2 | 3 | 4 | 5 | null
type ServiceType = "document-analysis" | "contract-generator" | "calculator" | "chat" | "general"

interface FeedbackData {
  type: FeedbackType
  quickRating: QuickRating
  detailedRating: DetailedRating
  comment: string
  serviceUsed: ServiceType
  userId: string | null
  userType: "anonymous" | "registered"
  path: string
}

export function FeedbackWidget() {
  const { data: session } = useSession()
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [feedbackType, setFeedbackType] = useState<FeedbackType>(null)
  const [quickRating, setQuickRating] = useState<QuickRating>(null)
  const [detailedRating, setDetailedRating] = useState<DetailedRating>(null)
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showWidget, setShowWidget] = useState(false)
  const [serviceType, setServiceType] = useState<ServiceType>("general")

  // Determine service type based on pathname
  useEffect(() => {
    if (pathname.includes("/analyze")) {
      setServiceType("document-analysis")
    } else if (pathname.includes("/contratos")) {
      setServiceType("contract-generator")
    } else if (pathname.includes("/calculadora")) {
      setServiceType("calculator")
    } else if (pathname.includes("/ask") || pathname.includes("/dudas-laborales")) {
      setServiceType("chat")
    } else {
      setServiceType("general")
    }
  }, [pathname])

  // Show widget after user has been on the page for 30 seconds
  // or has scrolled 70% of the page
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWidget(true)
    }, 30000)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const pageHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercentage = (scrollPosition / pageHeight) * 100

      if (scrollPercentage > 70) {
        setShowWidget(true)
        window.removeEventListener("scroll", handleScroll)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Don't show feedback widget on certain pages
  useEffect(() => {
    if (pathname.includes("/login") || pathname.includes("/register") || pathname.includes("/admin")) {
      setShowWidget(false)
    }
  }, [pathname])

  const handleSubmit = async () => {
    setIsSubmitting(true)

    const feedbackData: FeedbackData = {
      type: feedbackType,
      quickRating,
      detailedRating,
      comment,
      serviceUsed: serviceType,
      userId: session?.user?.email || null,
      userType: session?.user ? "registered" : "anonymous",
      path: pathname,
    }

    try {
      await submitFeedback(feedbackData)
      setIsSuccess(true)

      // Reset form after 3 seconds and close
      setTimeout(() => {
        resetForm()
        setIsOpen(false)
        setIsSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting feedback:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setStep(1)
    setFeedbackType(null)
    setQuickRating(null)
    setDetailedRating(null)
    setComment("")
  }

  const handleClose = () => {
    setIsOpen(false)
    resetForm()
  }

  if (!showWidget) return null

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 z-50"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => setIsOpen(true)}
                    size="lg"
                    className="rounded-full h-12 w-12 bg-blue-600 hover:bg-blue-700 shadow-lg"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span className="sr-only">Abrir feedback</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>¿Cómo ha sido tu experiencia?</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feedback panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 z-50 w-80 bg-white rounded-lg shadow-xl border border-gray-200"
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-lg">Tu opinión es importante</h3>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={handleClose}>
                  <X className="h-4 w-4" />
                  <span className="sr-only">Cerrar</span>
                </Button>
              </div>

              {isSuccess ? (
                <div className="text-center py-6">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                    <ThumbsUp className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">¡Gracias por tu feedback!</h3>
                  <p className="mt-2 text-sm text-gray-500">Tu opinión nos ayuda a mejorar LegalPO.</p>
                </div>
              ) : (
                <>
                  {step === 1 && (
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">¿Cómo te gustaría compartir tu experiencia con nosotros?</p>
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          variant="outline"
                          className={cn(
                            "h-auto py-4 flex flex-col items-center justify-center gap-2",
                            feedbackType === "quick" && "border-blue-500 bg-blue-50",
                          )}
                          onClick={() => {
                            setFeedbackType("quick")
                            setStep(2)
                          }}
                        >
                          <ThumbsUp className="h-5 w-5" />
                          <span className="text-sm">Feedback rápido</span>
                        </Button>
                        <Button
                          variant="outline"
                          className={cn(
                            "h-auto py-4 flex flex-col items-center justify-center gap-2",
                            feedbackType === "detailed" && "border-blue-500 bg-blue-50",
                          )}
                          onClick={() => {
                            setFeedbackType("detailed")
                            setStep(2)
                          }}
                        >
                          <MessageSquare className="h-5 w-5" />
                          <span className="text-sm">Feedback detallado</span>
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 2 && feedbackType === "quick" && (
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">¿Cómo calificarías tu experiencia con LegalPO?</p>
                      <div className="flex justify-center gap-4">
                        <Button
                          variant="outline"
                          size="lg"
                          className={cn(
                            "h-auto py-4 flex flex-col items-center justify-center gap-2",
                            quickRating === "positive" && "border-green-500 bg-green-50",
                          )}
                          onClick={() => {
                            setQuickRating("positive")
                            setTimeout(() => handleSubmit(), 500)
                          }}
                        >
                          <Smile className="h-8 w-8 text-green-500" />
                          <span className="text-sm">Positiva</span>
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          className={cn(
                            "h-auto py-4 flex flex-col items-center justify-center gap-2",
                            quickRating === "negative" && "border-red-500 bg-red-50",
                          )}
                          onClick={() => {
                            setQuickRating("negative")
                            setStep(3)
                          }}
                        >
                          <Frown className="h-8 w-8 text-red-500" />
                          <span className="text-sm">Negativa</span>
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 2 && feedbackType === "detailed" && (
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">¿Cómo calificarías tu experiencia con LegalPO?</p>
                      <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <Button
                            key={rating}
                            variant="outline"
                            size="sm"
                            className={cn("h-10 w-10 p-0", detailedRating === rating && "border-blue-500 bg-blue-50")}
                            onClick={() => {
                              setDetailedRating(rating as DetailedRating)
                              setStep(3)
                            }}
                          >
                            {rating}
                          </Button>
                        ))}
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 px-1">
                        <span>Muy malo</span>
                        <span>Excelente</span>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">
                        {quickRating === "negative" ? "¿Qué podríamos mejorar?" : "¿Tienes algún comentario adicional?"}
                      </p>
                      <Textarea
                        placeholder="Escribe tu comentario aquí..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={3}
                        className="resize-none"
                      />
                      <div className="flex justify-end">
                        <Button
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          {isSubmitting ? (
                            <>Enviando...</>
                          ) : (
                            <>
                              Enviar
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
