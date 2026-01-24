"use client"

import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

export function ConsequencesSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-[#0a1628] py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">¿Qué Pasa Si No Aseguras el Cupo Hoy?</h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* HOY */}
          <div className="bg-[#0f2744] rounded-2xl p-8 border-2 border-[#4DD0E1]">
            <div className="text-2xl font-bold text-[#4DD0E1] mb-6">HOY - 15 de Enero</div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-900/20 rounded-xl p-6 border-2 border-green-500/50">
                <div className="flex items-start gap-3 mb-3">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <strong className="text-white text-lg">Si aseguras el cupo HOY:</strong>
                </div>
                <p className="text-gray-300 ml-9">Tu hijo empieza en 11 días a crear con IA</p>
              </div>

              <div className="bg-red-900/20 rounded-xl p-6 border-2 border-red-500/50">
                <div className="flex items-start gap-3 mb-3">
                  <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <strong className="text-white text-lg">Si "lo piensas":</strong>
                </div>
                <p className="text-gray-300 ml-9">Los 2 de 20 cupos se van rápido</p>
              </div>
            </div>
          </div>

          {/* 26 DE ENERO */}
          <div className="bg-[#0f2744] rounded-2xl p-8 border-2 border-white/10">
            <div className="text-2xl font-bold text-white mb-6">16 de Febrero - Día del Inicio</div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-900/20 rounded-xl p-6 border-2 border-green-500/50">
                <div className="flex items-start gap-3 mb-3">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <strong className="text-white text-lg">Tu hijo:</strong>
                </div>
                <p className="text-gray-300 ml-9">Primera clase. Conoce al grupo. Empieza su primer proyecto.</p>
              </div>

              <div className="bg-red-900/20 rounded-xl p-6 border-2 border-red-500/50">
                <div className="flex items-start gap-3 mb-3">
                  <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <strong className="text-white text-lg">Tu hijo:</strong>
                </div>
                <p className="text-gray-300 ml-9">Viendo pasar la oportunidad. "¿Por qué no me inscribiste?"</p>
              </div>
            </div>
          </div>

          {/* MARZO 2026 */}
          <div className="bg-[#0f2744] rounded-2xl p-8 border-2 border-white/10">
            <div className="text-2xl font-bold text-white mb-6">Marzo 2026</div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-900/20 rounded-xl p-6 border-2 border-green-500/50">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-2xl">🎓</div>
                  <strong className="text-white text-lg">Tu hijo:</strong>
                </div>
                <p className="text-gray-300 ml-9">
                  Graduado. Certificación. 10 proyectos. Orgulloso de mostrar lo que creó.
                </p>
              </div>

              <div className="bg-red-900/20 rounded-xl p-6 border-2 border-red-500/50">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-2xl">😔</div>
                  <strong className="text-white text-lg">Tu hijo:</strong>
                </div>
                <p className="text-gray-300 ml-9">"Mamá/Papá, ¿cuándo puedo empezar el curso?"</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-3xl text-white font-bold mb-8">¿En cuál línea de tiempo quieres estar?</p>
          <Button
            size="lg"
            onClick={() => scrollToSection("sesion-estrategica")}
            className="bg-white hover:bg-gray-100 text-[#0a1628] px-16 py-8 text-2xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-[1.02] duration-300"
          >
            Quiero la Línea de Tiempo ✅
          </Button>
        </div>
      </div>
    </section>
  )
}
