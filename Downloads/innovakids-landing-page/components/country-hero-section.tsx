"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Shield, Clock, ArrowRight } from "lucide-react"
import type { CountryConfig } from "@/lib/countries-config"

interface CountryHeroSectionProps {
  country: CountryConfig
}

export function CountryHeroSection({ country }: CountryHeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const cuposDisponibles = 2
  const cuposTotales = 20

  useEffect(() => {
    const targetDate = new Date("2026-02-16T00:00:00")

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToBooking = () => {
    const element = document.getElementById("sesion-estrategica")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Urgency Banner */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-full px-4 py-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
            </span>
            <span className="text-sm font-medium text-destructive">
              {country.flag} Solo {cuposDisponibles} cupos disponibles para {country.name}
            </span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* H1 SEO Optimizado */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Cursos de Inteligencia Artificial para{" "}
            {country.childTerm.charAt(0).toUpperCase() + country.childTerm.slice(1)} en{" "}
            <span className="text-primary">{country.name}</span>
          </h1>

          {/* Subtítulo localizado */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            {country.tone.split(",")[0]}. Clases online de IA para {country.childTerm} {country.demonym} de 8-14 años en
            grupos de máximo 5 alumnos.
          </p>

          {/* Countdown */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-3">Próximo grupo inicia en:</p>
            <div className="flex justify-center gap-4">
              {[
                { value: timeLeft.days, label: "Días" },
                { value: timeLeft.hours, label: "Horas" },
                { value: timeLeft.minutes, label: "Min" },
                { value: timeLeft.seconds, label: "Seg" },
              ].map((item) => (
                <div key={item.label} className="bg-card/50 border rounded-lg px-4 py-2 min-w-[70px]">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { icon: Users, text: `Grupos de 5 ${country.childTerm}` },
              { icon: Calendar, text: "10 clases en vivo" },
              { icon: Shield, text: "Garantía 10 días" },
              { icon: Clock, text: `Horarios ${country.name}` },
            ].map((benefit) => (
              <div key={benefit.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <benefit.icon className="h-4 w-4 text-primary" />
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Price in Local Currency */}
          <div className="mb-8 p-4 bg-card/50 border rounded-xl inline-block">
            <p className="text-sm text-muted-foreground mb-1">Precio especial {country.name}</p>
            <p className="text-3xl font-bold text-primary">
              {country.currencySymbol}
              {country.priceLocal.toLocaleString()} {country.currency}
            </p>
            <p className="text-xs text-muted-foreground">Pagos con {country.paymentMethods.slice(0, 2).join(" o ")}</p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToBooking}
              className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Reservar Evaluación Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Cupos Visual */}
          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-2">
              {cuposDisponibles} de {cuposTotales} cupos disponibles
            </p>
            <div className="flex justify-center gap-1">
              {Array.from({ length: cuposTotales }).map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i < cuposTotales - cuposDisponibles ? "bg-muted-foreground/30" : "bg-primary animate-pulse"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
