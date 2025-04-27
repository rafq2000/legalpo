"use client"

import { Scale } from "lucide-react"
import { useState } from "react"

export function LawyerContactButton() {
  const [isVisible, setIsVisible] = useState(true)

  // Número de WhatsApp del abogado
  const phoneNumber = "+56961458118"

  // Mensaje predeterminado
  const message = "Hola, necesito asesoría legal. Me gustaría hablar con un abogado."

  // URL de WhatsApp con el número y mensaje
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const handleClick = () => {
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 right-4 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
      aria-label="Contactar abogado por WhatsApp"
    >
      <Scale size={24} className="mr-0 md:mr-2" />
      <span className="hidden md:inline">Contactar abogado</span>
    </button>
  )
}
