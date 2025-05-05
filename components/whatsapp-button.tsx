"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

export function WhatsAppButton() {
  const phoneNumber = "+56961458118"
  const message = encodeURIComponent(
    "Hola, vengo desde LegalPO y necesito ayuda con una consulta legal urgente. ¿Me pueden orientar?",
  )
  const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${message}`
  const [userId, setUserId] = useState<string | null>(null)

  // Obtener el ID de usuario al cargar el componente
  useEffect(() => {
    try {
      const storedUserId = localStorage.getItem("docuscan_user_id")
      setUserId(storedUserId)
    } catch (error) {
      console.error("Error al obtener ID de usuario:", error)
    }
  }, [])

  // Registrar clic en el botón de WhatsApp
  const handleWhatsAppClick = async () => {
    try {
      // Registrar el evento de contacto WhatsApp
      await fetch("/api/track-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipo: "whatsapp_contacto",
          userId,
          datos: {
            origen: window.location.pathname,
            timestamp: new Date().toISOString(),
          },
        }),
      })

      // También registrar en la API antigua para compatibilidad
      await fetch("/api/register-whatsapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: "whatsapp_user",
          userId,
        }),
      })
    } catch (error) {
      console.error("Error al registrar clic de WhatsApp:", error)
    }
  }

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label="Contactar por WhatsApp"
      onClick={handleWhatsAppClick}
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
    </Link>
  )
}
