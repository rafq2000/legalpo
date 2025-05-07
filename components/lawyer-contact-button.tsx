"use client"

import { Scale } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"

export function LawyerContactButton() {
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
    <Button
      className="fixed bottom-24 right-6 z-40 rounded-full bg-legalpo-primary hover:bg-legalpo-secondary text-white shadow-lg flex items-center gap-2 px-4 py-2"
      onClick={handleClick}
    >
      <Scale className="h-5 w-5" />
      Contactar abogado
    </Button>
  )
}
