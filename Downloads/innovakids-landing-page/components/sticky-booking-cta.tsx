"use client"

import { useState, useEffect } from "react"
import { Calendar, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StickyBookingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 800px
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToCalendly = () => {
    const bookingForm = document.querySelector("#sesion-estrategica .bg-white")
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: "smooth", block: "center" })
    } else {
      document.getElementById("sesion-estrategica")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible || isMinimized) return null

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-96 z-50 animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-gradient-to-r from-[#4DD0E1] to-[#00BCD4] rounded-2xl shadow-2xl p-4 border-2 border-white/20">
        <button
          onClick={() => setIsMinimized(true)}
          className="absolute -top-2 -right-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-1.5 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-sm md:text-base">¡Últimos Cupos Disponibles!</h3>
            <p className="text-white/90 text-xs">Inicia semana del 16 de Febrero 2026</p>
          </div>
        </div>

        <Button
          onClick={scrollToCalendly}
          className="w-full bg-white hover:bg-gray-100 text-[#0a1628] font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          Agendar Sesión Gratis Ahora
        </Button>

        <p className="text-center text-white/80 text-xs mt-2">Sesión de Diagnóstico Gratuita</p>
      </div>
    </div>
  )
}
