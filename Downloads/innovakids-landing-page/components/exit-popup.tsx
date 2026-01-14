"use client"

import { useState, useEffect } from "react"
import { X, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Show popup after 60 seconds
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }, 60000) // 60 seconds

    return () => clearTimeout(timer)
  }, [hasShown])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleWhatsApp = () => {
    setIsVisible(false)
    window.open(
      "https://wa.me/56964754219?text=Hola!%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20el%20curso%20de%20IA%20para%20ni%C3%B1os.%20%C2%BFPodremos%20conversar%3F",
      "_blank",
    )
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />

      {/* Popup content */}
      <div className="relative bg-[#0a1628] border-2 border-[#4DD0E1] rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 md:p-8">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] p-4 rounded-full">
              <MessageCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">
            ¡Espera! 💬 Asegura tu lugar antes de que se llenen los cupos
          </h2>

          <p className="text-lg text-gray-300 text-center mb-6 text-pretty">
            Solo quedan <span className="font-bold text-[#4DD0E1]">5 cupos disponibles</span> para el próximo grupo.
            Conversa con nosotros por <span className="font-semibold text-[#25D366]">WhatsApp</span> ahora y descubre si
            tu hijo es un buen candidato para nuestro programa.
          </p>

          {/* Benefits list */}
          <div className="bg-[#0f1f3a] border border-[#4DD0E1]/30 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#4DD0E1]" />
              Al conversar con nosotros descubrirás:
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#4DD0E1] mt-1">✓</span>
                <span>
                  <span className="font-semibold text-white">Evaluación personalizada</span> del perfil de tu hijo
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4DD0E1] mt-1">✓</span>
                <span>
                  <span className="font-semibold text-white">Diagnóstico de su potencial</span> en IA y tecnología
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4DD0E1] mt-1">✓</span>
                <span>
                  <span className="font-semibold text-white">Plan personalizado</span> de aprendizaje adaptado a su edad
                  e intereses
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4DD0E1] mt-1">✓</span>
                <span>
                  <span className="font-semibold text-white">Confirmación de disponibilidad</span> en tu zona horaria
                </span>
              </li>
            </ul>
          </div>

          <Button
            onClick={handleWhatsApp}
            className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0F7A6C] text-white py-6 text-lg font-bold uppercase tracking-wide h-auto shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            Hablar por WhatsApp Ahora
          </Button>

          <p className="text-xs text-gray-500 text-center mt-4">
            Sin compromiso • Respuesta inmediata • Solo 5 cupos disponibles
          </p>
        </div>
      </div>
    </div>
  )
}
