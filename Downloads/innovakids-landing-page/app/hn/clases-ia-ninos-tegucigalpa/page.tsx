import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, MessageCircle, MapPin, Star } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Clases de IA para Niños en Tegucigalpa 2026 | Cursos Online | InnovaKids",
  description:
    "Clases de Inteligencia Artificial para niños en Tegucigalpa. Cursos online en vivo, grupos de máx 5 alumnos. $197 USD por 10 clases. ¡Garantía 10 días!",
  keywords:
    "clases ia niños tegucigalpa, cursos inteligencia artificial niños tegucigalpa, ia para niños honduras capital",
  alternates: {
    canonical: "https://www.innovakidslatam.com/hn/clases-ia-ninos-tegucigalpa",
  },
}

const colonias = [
  "Colonia Kennedy",
  "Colonia Miraflores",
  "Colonia Palmira",
  "Colonia Lomas del Guijarro",
  "Colonia San Ignacio",
  "Colonia Florencia",
  "Colonia Las Minitas",
  "Colonia El Prado",
]

export default function TegucigalpaPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-b from-[#0073CF]/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-[#0073CF] text-white px-4 py-2">🇭🇳 Tegucigalpa, Honduras</Badge>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Clases de IA para Niños en <span className="text-[#0073CF]">Tegucigalpa</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Cursos de Inteligencia Artificial online en vivo para niños capitalinos de 8 a 17 años. Tu hijo aprende
                desde casa con grupos de máximo 5 alumnos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-[#0073CF] hover:bg-[#0073CF]/90 text-white" asChild>
                  <Link href="/booking">
                    Reservar Evaluación GRATIS
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#0073CF] text-[#0073CF] bg-transparent" asChild>
                  <Link href="https://wa.me/56964754219?text=Hola!%20Quiero%20info%20cursos%20IA%20en%20Tegucigalpa">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Link>
                </Button>
              </div>

              <div className="bg-[#0073CF]/10 rounded-2xl p-6 max-w-xl mx-auto">
                <p className="text-lg font-semibold text-[#0073CF]">💰 $197 USD - 10 Clases</p>
                <p className="text-muted-foreground">Garantía de satisfacción 10 días • Máx 5 niños por grupo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Colonias */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Clases Online para Niños de <span className="text-[#0073CF]">Toda Tegucigalpa</span>
              </h2>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {colonias.map((colonia) => (
                  <Badge key={colonia} variant="outline" className="px-4 py-2 border-[#0073CF]/30">
                    {colonia}
                  </Badge>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-[#0073CF]/20">
                  <CardContent className="p-6 text-center">
                    <Star className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Sin Tráfico</h3>
                    <p className="text-muted-foreground text-sm">
                      Olvídate del caos de Boulevard Morazán. Clases desde casa.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#0073CF]/20">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Horarios Flexibles</h3>
                    <p className="text-muted-foreground text-sm">
                      Nos adaptamos a tu horario para que tu hijo no pierda clases.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#0073CF]/20">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-10 w-10 text-[#0073CF] mx-auto mb-4" />
                    <h3 className="font-bold mb-2">100% Online</h3>
                    <p className="text-muted-foreground text-sm">
                      Desde cualquier colonia de Tegucigalpa con internet.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0073CF]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¡Prepara a tu Hijo Capitalino para el Futuro!</h2>
            <Button size="lg" className="bg-white text-[#0073CF] hover:bg-white/90" asChild>
              <Link href="/booking">
                Reservar Evaluación GRATIS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Links */}
        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 max-w-4xl mx-auto">
              <Link href="/hn/cursos-ia-ninos-honduras" className="text-[#0073CF] hover:underline">
                Cursos IA Honduras
              </Link>
              <Link href="/hn" className="text-[#0073CF] hover:underline">
                Hub Honduras
              </Link>
              <Link href="/gt" className="text-[#0073CF] hover:underline">
                Guatemala
              </Link>
              <Link href="/sv" className="text-[#0073CF] hover:underline">
                El Salvador
              </Link>
            </div>
          </div>
        </section>
      </div>

      <WhatsAppButton />
    </>
  )
}
