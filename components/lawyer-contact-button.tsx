"use client"

import { Scale } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

export function LawyerContactButton() {
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

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

  const handleClick = () => {
    router.push("/contactar-abogado")
  }

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
