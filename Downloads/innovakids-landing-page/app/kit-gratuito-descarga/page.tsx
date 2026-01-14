import type { Metadata } from "next"
import { Download, BookOpen, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Descarga tu Kit Gratuito - InnovaKids",
  description:
    "Descarga el Kit Esencial para el Padre Moderno y descubre cómo introducir a tu hijo en el mundo de la IA.",
  robots: "noindex, nofollow",
}

export default function KitDownloadPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#0a1628] to-[#132137]">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-block bg-[#4DD0E1]/20 text-[#4DD0E1] px-6 py-2 rounded-full text-sm font-semibold mb-6">
                ACCESO DIRECTO
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tu Kit Esencial para el Padre Moderno</h1>
              <p className="text-xl text-gray-300">
                La guía práctica que necesitas para introducir a tu hijo en el mundo de la IA
              </p>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="flex items-center justify-center">
                <Image
                  src="/ai-learning-kit-book.jpg"
                  alt="Kit del Padre Moderno - Guía práctica de IA para niños"
                  width={500}
                  height={700}
                  quality={90}
                  priority
                  className="w-full max-w-md rounded-lg shadow-2xl"
                />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Qué incluye tu Kit:</h2>

                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-4 bg-[#1a2942] p-4 rounded-lg">
                    <Sparkles className="w-6 h-6 text-[#4DD0E1] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">5 Proyectos Creativos para Empezar Hoy</h3>
                      <p className="text-gray-300 text-sm">Sin necesidad de saber programar</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-[#1a2942] p-4 rounded-lg">
                    <Shield className="w-6 h-6 text-[#4DD0E1] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Checklist de Seguridad Digital</h3>
                      <p className="text-gray-300 text-sm">Para proteger a tu hijo online</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-[#1a2942] p-4 rounded-lg">
                    <BookOpen className="w-6 h-6 text-[#4DD0E1] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Glosario de Términos de IA</h3>
                      <p className="text-gray-300 text-sm">Para que ambos hablen el mismo idioma</p>
                    </div>
                  </div>
                </div>

                {/* Download Button */}
                <Button
                  asChild
                  size="lg"
                  className="w-full h-16 bg-[#4DD0E1] hover:bg-[#3BBFD1] text-[#0a1628] font-bold text-lg uppercase tracking-wide shadow-lg"
                >
                  <a href="/kit-padre-moderno-innovakids.pdf" download>
                    <Download className="w-6 h-6 mr-2" />
                    DESCARGAR KIT AHORA
                  </a>
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-[#1a2942] border border-[#2a3952] rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">¿Listo para dar el siguiente paso?</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Agenda una Clase Gratis (valor $50 USD) y descubre cómo tu hijo puede dominar la IA en 6 semanas
              </p>
              <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold text-lg px-8">
                <Link href="/#lead-magnet">AGENDAR CLASE GRATUITA</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </>
  )
}
