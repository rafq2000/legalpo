"use client"

import { useEffect, useState } from "react"
import { AlertCircle, Clock } from "lucide-react"

export function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2026-01-15T00:00:00-03:00").getTime() // Chile timezone (UTC-3)

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative z-40 bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-500 rounded-lg md:rounded-xl p-4 md:p-6 mb-8 md:mb-12 mx-2 md:mx-0">
      <div className="flex flex-col items-center gap-3 md:gap-4">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 animate-pulse flex-shrink-0" />
          <h3 className="text-base md:text-xl lg:text-2xl font-bold text-white text-center">
            ¡Curso inicia la semana del 16 de Febrero 2026!
          </h3>
        </div>

        <div className="grid grid-cols-4 gap-2 md:gap-3 lg:gap-4 w-full max-w-lg">
          <div className="bg-[#0a1628] border border-red-500/50 rounded-lg p-2 md:p-3 text-center">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-red-500">
              {String(timeLeft.days).padStart(2, "0")}
            </div>
            <div className="text-[10px] md:text-xs text-gray-400 uppercase mt-0.5 md:mt-1">Días</div>
          </div>
          <div className="bg-[#0a1628] border border-red-500/50 rounded-lg p-2 md:p-3 text-center">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-red-500">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <div className="text-[10px] md:text-xs text-gray-400 uppercase mt-0.5 md:mt-1">Horas</div>
          </div>
          <div className="bg-[#0a1628] border border-red-500/50 rounded-lg p-2 md:p-3 text-center">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-red-500">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <div className="text-[10px] md:text-xs text-gray-400 uppercase mt-0.5 md:mt-1">Min</div>
          </div>
          <div className="bg-[#0a1628] border border-red-500/50 rounded-lg p-2 md:p-3 text-center">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-red-500">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <div className="text-[10px] md:text-xs text-gray-400 uppercase mt-0.5 md:mt-1">Seg</div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-center px-2">
          <Clock className="w-4 h-4 md:w-5 md:h-5 text-orange-500 flex-shrink-0" />
          <p className="text-xs md:text-sm lg:text-base text-red-400 font-semibold">
            ¡ÚLTIMOS CUPOS DISPONIBLES! - Reserva tu lugar ahora
          </p>
        </div>
      </div>
    </div>
  )
}
