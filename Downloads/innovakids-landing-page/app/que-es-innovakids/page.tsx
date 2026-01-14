import { Navigation } from "@/components/navigation"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "¿Qué es Innovakids? - Innovakids",
  description:
    "Innovakids es un programa educativo online que enseña a niños los usos prácticos de la inteligencia artificial",
}

export default function QueEsInnovakidsPage() {
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

          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">¿Qué es Innovakids?</h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              <span className="text-[#4DD0E1] font-bold">InnovaKids</span> es un programa educativo online que enseña a
              niños los usos prácticos de la inteligencia artificial, desde crear imágenes y videos hasta diseñar cómics
              y apps en 6 semanas. Método divertido y efectivo.
            </p>
          </div>

          <ProblemSection />
          <SolutionSection />
        </div>
      </main>
    </div>
  )
}
