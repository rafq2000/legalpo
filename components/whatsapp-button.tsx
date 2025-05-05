"use client"

import { Button } from "@/components/ui/button"
import { PhoneIcon } from "lucide-react"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "56912345678" // Reemplaza con tu número real
    const message = "Hola desde LegalPO. Tengo una consulta legal."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 rounded-full w-14 h-14 p-0 bg-green-500 hover:bg-green-600 shadow-lg z-50"
      aria-label="Contactar por WhatsApp"
    >
      <PhoneIcon className="h-6 w-6" />
    </Button>
  )
}
