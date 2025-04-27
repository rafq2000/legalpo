"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ServiceSurvey } from "@/components/feedback/service-survey"
import { recordFeedbackShown, shouldShowFeedbackPrompt } from "@/lib/feedback-service"

interface SurveyModalProps {
  serviceType: "document-analysis" | "contract-generator" | "calculator" | "chat" | "general"
  trigger?: "completion" | "timer" | "exit"
  completionAction?: string
}

export function SurveyModal({ serviceType, trigger = "completion", completionAction }: SurveyModalProps) {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Solo mostrar la encuesta si el usuario debería ver el feedback
    // basado en su historial de uso
    if (shouldShowFeedbackPrompt(session?.user?.email || null)) {
      // Para trigger de tipo "completion", mostrar inmediatamente
      if (trigger === "completion") {
        setIsOpen(true)
        recordFeedbackShown(session?.user?.email || null)
      }

      // Para trigger de tipo "timer", mostrar después de un tiempo
      if (trigger === "timer") {
        const timer = setTimeout(() => {
          setIsOpen(true)
          recordFeedbackShown(session?.user?.email || null)
        }, 60000) // 1 minuto

        return () => clearTimeout(timer)
      }

      // Para trigger de tipo "exit", mostrar cuando el user intenta salir
      if (trigger === "exit") {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
          // Solo mostrar si el user ha pasado al menos 30 segundos en la página
          if (document.visibilityState === "visible") {
            setIsOpen(true)
            recordFeedbackShown(session?.user?.email || null)

            // Esto no funcionará en todos los navegadores modernos por seguridad
            // pero es una buena práctica incluirlo
            e.preventDefault()
            e.returnValue = ""
          }
        }

        window.addEventListener("beforeunload", handleBeforeUnload)

        return () => {
          window.removeEventListener("beforeunload", handleBeforeUnload)
        }
      }
    }
  }, [session, trigger, completionAction])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>Tu opinión es importante</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <X className="h-4 w-4" />
              <span className="sr-only">Cerrar</span>
            </Button>
          </DialogClose>
        </DialogHeader>

        <ServiceSurvey serviceType={serviceType} onClose={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
