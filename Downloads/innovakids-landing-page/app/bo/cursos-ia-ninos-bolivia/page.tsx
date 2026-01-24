import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Shield, ArrowRight, MessageCircle, Brain, Rocket, Target, Award } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"
import { generateHreflangs } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "Cursos de IA para Niños en Bolivia 2026 | Clases Online en Vivo | InnovaKids",
  description:
    "✅ Cursos de Inteligencia Artificial para niños bolivianos de 8-17 años. Clases online en vivo, grupos de máx 5 alumnos. $197 USD por 10 clases. ¡Garantía 10 días!",
  keywords:
    "cursos ia niños bolivia, clases inteligencia artificial niños la paz, cursos programacion niños santa cruz, ia para niños bolivia",
  openGraph: {
    title: "Cursos de IA para Niños en Bolivia | InnovaKids Latam",
    description: "Clases de Inteligencia Artificial para niños bolivianos. Online en vivo, grupos pequeños.",
    url: "https://www.innovakidslatam.com/bo/cursos-ia-ninos-bolivia",
    locale: "es_BO",
    type: "website",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/bo/cursos-ia-ninos-bolivia",
  },
}

export default function CursosIANinosBoliviaPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#007934]/10 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-[#007934] text-white px-4 py-2">
                🇧🇴 #1 en Cursos de IA para Niños en Bolivia
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                Tu satisfacción <br />
                <span className="text-[#007934]">Garantizada</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
                Cursos de Inteligencia Artificial para niños bolivianos de 8 a 17 años. Clases online en vivo con grupos
                de máximo 5 alumnos.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">10 Clases en Vivo</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                  <Users className="h-5 w-5 text-[#007934]" />
                  <span className="font-medium">Máx 5 Niños/Grupo</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Garantía 10 Días</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-[#007934] hover:bg-[#007934]/90 text-white text-lg px-8 py-6" asChild>
                  <Link href="/booking">
                    Reservar Evaluación GRATIS
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-[#007934] text-[#007934] bg-transparent"
                  asChild
                >
                  <Link href="https://wa.me/56964754219?text=Hola!%20Quiero%20información%20sobre%20los%20cursos%20de%20IA%20para%20niños%20en%20Bolivia">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Link>
                </Button>
              </div>

              <div className="bg-[#007934]/10 border border-[#007934]/20 rounded-2xl p-6 max-w-xl mx-auto">
                <p className="text-lg font-semibold text-[#007934]">💰 Inversión: $197 USD</p>
                <p className="text-muted-foreground">
                  10 clases online en vivo (90 min c/u) • Garantía de satisfacción 10 días
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué Bolivia */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                ¿Por Qué los Niños Bolivianos <span className="text-[#007934]">Necesitan Aprender IA</span>?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-[#007934]/20">
                  <CardContent className="p-6">
                    <Brain className="h-12 w-12 text-[#007934] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Bolivia Digital</h3>
                    <p className="text-muted-foreground">
                      El país está creciendo en tecnología. Tu hijo puede liderar esta transformación.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#007934]/20">
                  <CardContent className="p-6">
                    <Rocket className="h-12 w-12 text-[#007934] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Oportunidades Globales</h3>
                    <p className="text-muted-foreground">
                      Desde La Paz o Santa Cruz, tu hijo puede acceder a carreras tecnológicas internacionales.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#007934]/20">
                  <CardContent className="p-6">
                    <Target className="h-12 w-12 text-[#007934] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Ventaja Competitiva</h3>
                    <p className="text-muted-foreground">
                      Muy pocos niños en Bolivia están aprendiendo IA. Tu hijo tendrá años de ventaja.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#007934]/20">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 text-[#007934] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Metodología Probada</h3>
                    <p className="text-muted-foreground">
                      Aprender creando: tu hijo construirá proyectos reales con IA desde la primera clase.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Ciudades */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Clases Online para <span className="text-[#007934]">Todo Bolivia</span>
              </h2>

              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "La Paz",
                  "Santa Cruz",
                  "Cochabamba",
                  "El Alto",
                  "Sucre",
                  "Oruro",
                  "Tarija",
                  "Potosí",
                  "Trinidad",
                  "Cobija",
                ].map((ciudad) => (
                  <Badge key={ciudad} variant="outline" className="px-4 py-2 text-base border-[#007934]/30">
                    {ciudad}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-[#007934]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para que tu Hijo Domine la IA?</h2>

            <Button size="lg" className="bg-white text-[#007934] hover:bg-white/90 text-lg px-8 py-6" asChild>
              <Link href="/booking">
                Reservar Evaluación GRATIS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <p className="text-white/80 mt-6">
              💬 ¿Preguntas?{" "}
              <Link href="https://wa.me/56964754219" className="underline">
                Escríbenos por WhatsApp
              </Link>
            </p>
          </div>
        </section>

        {/* Links SEO */}
        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 max-w-4xl mx-auto">
              <Link href="/bo" className="text-[#007934] hover:underline">
                Hub Bolivia
              </Link>
              <Link href="/bo/clases-ia-ninos-la-paz" className="text-[#007934] hover:underline">
                Clases La Paz
              </Link>
              <Link href="/pe" className="text-[#007934] hover:underline">
                Perú
              </Link>
              <Link href="/ar" className="text-[#007934] hover:underline">
                Argentina
              </Link>
            </div>
          </div>
        </section>
      </div>

      <WhatsAppButton />
    </>
  )
}
