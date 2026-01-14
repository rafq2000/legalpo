"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Shield, CheckCircle } from "lucide-react"

export function CTASection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-500 via-green-600 to-green-700 py-20 md:py-32">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-white backdrop-blur-sm">
            <Clock className="h-5 w-5" />
            <span className="font-semibold">Sesión de Diagnóstico Gratuita</span>
          </div>

          <h2 className="mb-6 text-balance text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Dale a Tu Hijo la Ventaja Competitiva del Futuro
          </h2>

          <p className="mb-10 text-pretty text-xl leading-relaxed text-white/95 md:text-2xl">
            Mientras otros niños solo consumen tecnología, tu hijo aprenderá a crearla.
            <span className="font-bold"> Agenda tu Sesión Estratégica Gratuita hoy.</span>
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection("sesion-estrategica")}
              className="group h-16 bg-white px-12 text-xl font-bold text-green-600 shadow-2xl transition-all hover:scale-105 hover:bg-gray-100"
            >
              ¡Agendar Sesión de Diagnóstico Ahora!
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="mt-8 mx-auto max-w-2xl">
            <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl p-4 md:p-6">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-white" />
                  <span className="text-sm md:text-base font-bold text-white">Pago 100% Seguro SSL</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-sm md:text-base font-bold text-white">Garantía 10 Días</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-white" />
                  <span className="text-sm md:text-base font-bold text-white">Acceso Inmediato</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-white/20">
                <p className="text-xs md:text-sm text-white/90 font-medium">
                  Procesado por PayPal y Mercado Pago - Plataformas líderes en seguridad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
