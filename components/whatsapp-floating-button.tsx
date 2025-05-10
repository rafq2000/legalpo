"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { MessageCircle } from "lucide-react"

export function WhatsappFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)

    const hideTimer = setTimeout(() => {
      setShowTooltip(false)
    }, 8000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  const handleClick = () => {
    router.push("/contactar-abogado")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showTooltip && (
        <div className="absolute bottom-16 right-0 bg-white p-2 rounded-lg shadow-lg text-sm w-48 mb-2 animate-fade-in">
          ¿Necesitas ayuda legal? Contacta a un abogado
          <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45"></div>
        </div>
      )}
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  )
}
