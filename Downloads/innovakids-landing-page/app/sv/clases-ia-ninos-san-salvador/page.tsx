import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, MessageCircle, MapPin, Star } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Clases de IA para Cipotes en San Salvador 2026 | Cursos Online | InnovaKids",
  description:
    "Clases de Inteligencia Artificial para cipotes en San Salvador. Cursos online en vivo, grupos de máx 5 alumnos. $200 USD por 10 clases. ¡Garantía 10 días!",
  alternates: {
    canonical: "https://www.innovakidslatam.com/sv/clases-ia-ninos-san-salvador",
  },
}

const zonas = [
  "Colonia Escalón",
  "Colonia San Benito",
  "Santa Elena",
  "Merliot",
  "Zona Rosa",
  "Colonia Médica",
  "Colonia Flor Blanca",
  "Centro Histórico",
]

export default function SanSalvadorPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-b from-[#0F47AF]/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-[#0F47AF] text-white px-4 py-2">🇸🇻 San Salvador, El Salvador</Badge>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Clases de IA para Cipotes en <span className="text-[#0F47AF]">San Salvador</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Cursos de Inteligencia Artificial online en vivo para cipotes capitalinos de 8 a 17 años. Tu hijo
                aprende desde casa con grupos de máximo 5 alumnos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-[#0F47AF] hover:bg-[#0F47AF]/90 text-white" asChild>
                  <Link href="/booking">
                    Reservar Evaluación GRATIS
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#0F47AF] text-[#0F47AF] bg-transparent" asChild>
                  <Link href="https://wa.me/56964754219?text=Hola!%20Quiero%20info%20cursos%20IA%20en%20San%20Salvador">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Link>
                </Button>
              </div>

              <div className="bg-[#0F47AF]/10 rounded-2xl p-6 max-w-xl mx-auto">
                <p className="text-lg font-semibold text-[#0F47AF]">💰 $200 USD - 10 Clases</p>
                <p className="text-muted-foreground">Garantía de satisfacción 10 días • Máx 5 cipotes por grupo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Zonas */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Clases Online para Cipotes de <span className="text-[#0F47AF]">Todo San Salvador</span>
              </h2>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {zonas.map((zona) => (
                  <Badge key={zona} variant="outline" className="px-4 py-2 border-[#0F47AF]/30">
                    {zona}
                  </Badge>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-[#0F47AF]/20">
                  <CardContent className="p-6 text-center">
                    <Star className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Sin Tráfico</h3>
                    <p className="text-muted-foreground text-sm">Olvídate del tráfico capitalino. Clases desde casa.</p>
                  </CardContent>
                </Card>

                <Card className="border-[#0F47AF]/20">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Horarios Flexibles</h3>
                    <p className="text-muted-foreground text-sm">
                      Nos adaptamos a tu horario para que tu cipote no pierda clases.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#0F47AF]/20">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-10 w-10 text-[#0F47AF] mx-auto mb-4" />
                    <h3 className="font-bold mb-2">100% Online</h3>
                    <p className="text-muted-foreground text-sm">
                      Desde cualquier colonia de San Salvador con internet.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0F47AF]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¡Prepara a tu Cipote Capitalino para el Futuro!</h2>
            <Button size="lg" className="bg-white text-[#0F47AF] hover:bg-white/90" asChild>
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
              <Link href="/sv/cursos-ia-ninos-el-salvador" className="text-[#0F47AF] hover:underline">
                Cursos IA El Salvador
              </Link>
              <Link href="/sv" className="text-[#0F47AF] hover:underline">
                Hub El Salvador
              </Link>
              <Link href="/gt" className="text-[#0F47AF] hover:underline">
                Guatemala
              </Link>
              <Link href="/hn" className="text-[#0F47AF] hover:underline">
                Honduras
              </Link>
            </div>
          </div>
        </section>
      </div>

      <WhatsAppButton />
    </>
  )
}
