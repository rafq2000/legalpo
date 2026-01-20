"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Share2, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface ShareButtonProps {
  title: string
  text: string
  size?: "sm" | "default" | "lg"
  variant?: "default" | "outline" | "ghost"
  className?: string
}

export function ShareButton({ title, text, size = "default", variant = "default", className }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: window.location.href,
        })
      } catch (err) {
        // Si falla el share nativo, copiamos al portapapeles
        handleCopy()
      }
    } else {
      // Fallback: copiar al portapapeles
      handleCopy()
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${text}\n\n${window.location.href}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Error copying to clipboard:", err)
    }
  }

  return (
    <Button onClick={handleShare} size={size} variant={variant} className={cn("flex items-center gap-2", className)}>
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          Copiado
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4" />
          Compartir
        </>
      )}
    </Button>
  )
}
