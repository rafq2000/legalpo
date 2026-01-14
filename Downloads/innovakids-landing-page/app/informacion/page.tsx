import { Navigation } from "@/components/navigation"
import { ProgramSection } from "@/components/program-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"

export const metadata = {
  title: "Información del Programa - Innovakids",
  description: "Conoce todos los detalles del programa de Inteligencia Artificial para niños de Innovakids",
}

export default function InformacionPage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-[#4DD0E1] mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>
          <div className="mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Información del Programa</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Nuestro curso está diseñado para que los niños de 8 a 14 años aprendan IA de forma práctica y divertida
            </p>
          </div>

          <div className="mb-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#4DD0E1] to-[#00BCD4] rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
                <div className="bg-white/20 p-4 rounded-full">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Horarios Flexibles Disponibles</h2>
                  <p className="text-lg text-white/90">
                    Tenemos disponibilidad en todos los horarios para adaptarnos a tu agenda
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ProgramSection />
        </div>
      </main>
    </div>
  )
}
