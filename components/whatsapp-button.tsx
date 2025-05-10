"use client"

import { useRouter } from "next/navigation"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  text?: string
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
}

export function WhatsAppButton({
  text = "Consultar por WhatsApp",
  className = "",
  variant = "default",
}: WhatsAppButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push("/contactar-abogado")
  }

  return (
    <Button
      variant={variant}
      className={`bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 ${className}`}
      onClick={handleClick}
    >
      <MessageCircle className="h-5 w-5" />
      {text}
    </Button>
  )
}
