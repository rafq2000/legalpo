"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function StickyFooterCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-sm border-t-2 border-[#4DD0E1] shadow-2xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-lg">🚨 Solo 2 de 20 cupos disponibles</p>
            <p className="text-gray-400 text-sm">Inicia: 16 de Febrero</p>
          </div>
          <Button
            size="lg"
            onClick={() => scrollToSection("sesion-estrategica")}
            className="bg-[#4DD0E1] hover:bg-[#3BBFD1] text-[#0a1628] px-10 py-6 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            Agendar Entrevista 1 a 1 →
          </Button>
        </div>
      </div>
    </div>
  )
}
