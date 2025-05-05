"use client"

import { Scale } from "lucide-react"
import { useState, useEffect } from "react"

export function LawyerContactButton() {
  const [isVisible, setIsVisible] = useState(true)
  const [showTooltip, setShowTooltip] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Número de WhatsApp del abogado
  const phoneNumber = "+56961458118"

  // Mensaje predeterminado
  const message = "Hola, necesito asesoría legal. Me gustaría hablar con un abogado."

  // URL de WhatsApp con el número y mensaje
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const handleClick = () => {
    window.open(whatsappUrl, "_blank")
  }

  // Para dispositivos móviles, mostrar tooltip brevemente al cargar
  useEffect(() => {
    if (isMobile) {
      setShowTooltip(true)
      const timer = setTimeout(() => {
        setShowTooltip(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isMobile])

  return (
    <div className="fixed bottom-24 right-4 z-40">
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white px-3 py-2 rounded-md shadow-lg text-sm max-w-[200px] whitespace-normal">
          Contactar a un abogado por WhatsApp
          <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-800"></div>
        </div>
      )}

      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onTouchStart={() => {
          setShowTooltip(true)
          setTimeout(() => setShowTooltip(false), 2000)
        }}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        aria-label="Contactar abogado por WhatsApp"
      >
        <Scale size={24} className="mr-0 md:mr-2" />
        <span className="hidden md:inline">Contactar abogado</span>
      </button>
    </div>
  )
}
