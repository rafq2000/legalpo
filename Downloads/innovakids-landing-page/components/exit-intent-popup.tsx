"use client"

import { useState, useEffect } from "react"
import { X, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if already shown in this session
    const shown = sessionStorage.getItem("exitPopupShown")
    if (shown) {
      setHasShown(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of page
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem("exitPopupShown", "true")
      }
    }

    // Add delay before activating (user needs to be on page for 5 seconds)
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
    }, 5000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-red-500 rounded-2xl p-8 max-w-md mx-4 shadow-2xl animate-in zoom-in duration-300">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full mb-4">
            <AlertCircle className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl font-bold text-white mb-3">¡Espera! ⏰</h2>

          <p className="text-xl text-cyan-400 font-semibold mb-4">¡Agenda tu Sesión Estratégica Gratuita!</p>

          <p className="text-slate-300 mb-6">
            Reserva tu <strong className="text-cyan-400">Sesión Estratégica Gratuita de 30 minutos</strong>. Descubre
            cómo Innovakids puede transformar el futuro de tu hijo.
          </p>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mb-6">
            <p className="text-sm text-slate-400 mb-2">Incluye:</p>
            <p className="text-xs text-green-400 mt-1">✓ Análisis personalizado de necesidades</p>
            <p className="text-xs text-green-400">✓ Plan de aprendizaje recomendado</p>
            <p className="text-xs text-green-400">✓ Respuestas a todas tus preguntas</p>
          </div>

          <Button
            asChild
            size="lg"
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold mb-3"
          >
            <Link href="/#contacto">¡Quiero Mi Sesión Estratégica Gratuita!</Link>
          </Button>

          <button
            onClick={() => setIsVisible(false)}
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            No gracias, lo pensaré más tarde
          </button>
        </div>
      </div>
    </div>
  )
}
