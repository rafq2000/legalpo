"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "+56961458118"
  const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}`

  // Registrar clic en el botón de WhatsApp
  const handleWhatsAppClick = async () => {
    try {
      // Intentar obtener un ID de usuario existente
      const userId = localStorage.getItem("docuscan_user_id")

      // Registrar la consulta de WhatsApp
      await fetch("/api/register-whatsapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: "whatsapp_user", // En una implementación real, podrías usar el número del usuario
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
