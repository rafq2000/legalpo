import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, Download, Sparkles, Brain, Rocket, Gift } from "lucide-react"

export const metadata: Metadata = {
  title: "Descarga GRATIS: Guía de IA para Niños 2025 | InnovaKids",
  description:
    "Descarga gratis nuestra guía completa de Inteligencia Artificial para niños. Aprende cómo enseñar IA, ChatGPT y crear proyectos increíbles. Guía práctica PDF gratuita.",
  keywords:
    "guía ia niños gratis, libro inteligencia artificial niños, descargar guía ia, chatgpt para niños pdf, enseñar ia niños",
  openGraph: {
    title: "Descarga GRATIS: Guía de IA para Niños 2026",
    description:
      "Guía completa y gratuita para enseñar Inteligencia Artificial a niños de 8-14 años. Incluye proyectos prácticos y ejercicios.",
    type: "website",
  },
}

export default function DescargarGuiaPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 border-2 border-green-500 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-bold mb-4 md:mb-6 animate-pulse">
                <Gift className="w-4 h-4 md:w-5 md:h-5" />
                100% GRATIS • SIN COMPROMISO • DESCARGA INMEDIATA
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
                Kit Gratuito para Padres: Guía de IA para Niños
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Descarga gratis y sin compromiso nuestra guía completa. Aprende cómo enseñar IA a tus hijos de forma
                práctica y divertida. Disponible en cualquier momento.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-green-400 mb-8 md:mb-12">
              <div className="text-center">
                <Gift className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-white" />
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Descarga Gratis • Sin Compromiso</h2>
                <p className="text-white/90 text-base md:text-lg mb-4">
                  No necesitas registrarte ni dar tu email. Descarga el kit ahora y accede cuando quieras.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 font-bold text-lg h-14 px-8"
                  asChild
                >
                  <a
                    href="https://8n2c8ieovwfncuyi.public.blob.vercel-storage.com/kit-padre-moderno.pdf.pdf"
                    download="Kit-IA-Ninos-InnovaKids.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Descargar Kit Gratis Ahora
                  </a>
                </Button>
              </div>
            </div>
            {/* </CHANGE> */}

            {/* Book Preview Card */}
            <div className="bg-card border rounded-lg md:rounded-xl shadow-lg p-6 md:p-8 lg:p-10 mb-8 md:mb-12">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                {/* Book Cover Placeholder */}
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg aspect-[3/4] flex items-center justify-center border-2 border-primary/20">
                  <div className="text-center p-4 md:p-6">
                    <BookOpen className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-3 md:mb-4 text-primary" />
                    <h3 className="text-lg md:text-xl font-bold mb-2">Kit para Padres</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Guía de IA 2025</p>
                  </div>
                </div>

                {/* Book Details */}
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">¿Qué incluye este kit gratuito?</h2>
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    <li className="flex items-start gap-2 md:gap-3">
                      <Brain className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">Introducción a la IA para niños de 8-14 años</span>
                    </li>
                    <li className="flex items-start gap-2 md:gap-3">
                      <Rocket className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">10 proyectos prácticos paso a paso</span>
                    </li>
                    <li className="flex items-start gap-2 md:gap-3">
                      <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">Cómo usar ChatGPT de forma segura</span>
                    </li>
                    <li className="flex items-start gap-2 md:gap-3">
                      <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">Recursos y herramientas gratuitas</span>
                    </li>
                  </ul>

                  <Button size="lg" className="w-full text-base md:text-lg h-12 md:h-14" asChild>
                    <a
                      href="https://8n2c8ieovwfncuyi.public.blob.vercel-storage.com/kit-padre-moderno.pdf.pdf"
                      download="Kit-IA-Ninos-InnovaKids.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Descargar Kit Gratis (PDF)
                    </a>
                  </Button>
                  {/* </CHANGE> */}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
              <div className="bg-card border rounded-lg p-4 md:p-6 text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">50+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Páginas de contenido</div>
              </div>
              <div className="bg-card border rounded-lg p-4 md:p-6 text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">10</div>
                <div className="text-xs md:text-sm text-muted-foreground">Proyectos prácticos</div>
              </div>
              <div className="bg-card border rounded-lg p-4 md:p-6 text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Gratis para siempre</div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg md:rounded-xl p-6 md:p-8 text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">¿Quieres ir más allá?</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto">
                Únete a nuestro curso completo de IA para niños. 5 semanas de aprendizaje práctico con proyectos reales
                y certificación. <span className="font-bold text-primary">¡Ahora con descuento especial!</span>
              </p>
              <Button size="lg" variant="default" asChild>
                <a href="/#inversion">Ver Oferta Especial $197 USD</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
