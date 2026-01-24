"use client"

import { Clock, AlertCircle } from "lucide-react"

export function AnnouncementBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 border-b-4 border-yellow-400">
      <div className="container mx-auto px-3 xs:px-4 py-2 xs:py-3">
        <div className="flex flex-col xs:flex-row items-center justify-center gap-1 xs:gap-2 sm:gap-3 text-center">
          <div className="flex items-center gap-1 xs:gap-2 shrink-0">
            <AlertCircle className="h-4 w-4 xs:h-5 xs:w-5 text-yellow-300 animate-pulse" />
            <Clock className="h-4 w-4 xs:h-5 xs:w-5 text-yellow-300 animate-pulse" />
          </div>
          <p className="text-white font-bold text-[11px] xs:text-xs sm:text-sm md:text-base leading-tight">
            <span className="text-yellow-300">¡ÚLTIMOS CUPOS!</span> Curso inicia semana del 16 de Febrero 2026
          </p>
        </div>
      </div>
    </div>
  )
}
