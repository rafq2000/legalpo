"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesa obtener más información sobre los servicios legales de LegalPO.",
    )
    const whatsappUrl = `https://wa.me/56961458118?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="whatsapp-button floating-button bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 z-40"
      size="lg"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  )
}
