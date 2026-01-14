import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, MessageCircle, MapPin, Star } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Clases de IA para Niños en La Paz 2026 | Cursos Online | InnovaKids",
  description:
    "Clases de Inteligencia Artificial para niños en La Paz, Bolivia. Cursos online en vivo, grupos de máx 5 alumnos. $200 USD por 10 clases.",
  alternates: {
    canonical: "https://www.innovakidslatam.com/bo/clases-ia-ninos-la-paz",
  },
}

const zonas = ["Sopocachi", "Zona Sur", "Calacoto", "San Miguel", "Obrajes", "Achumani", "Cota Cota", "Miraflores"]

export default function LaPazPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <section className="relative py-20 bg-gradient-to-b from-[#007934]/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-[#007934] text-white px-4 py-2">🇧🇴 La Paz, Bolivia</Badge>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Clases de IA para Niños en <span className="text-[#007934]">La Paz</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Cursos de Inteligencia Artificial online en vivo para niños paceños de 8 a 17 años.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-[#007934] hover:bg-[#007934]/90 text-white" asChild>
                  <Link href="/booking">
                    Reservar Evaluación GRATIS <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#007934] text-[#007934] bg-transparent" asChild>
                  <Link href="https://wa.me/56964754219?text=Hola!%20Quiero%20info%20cursos%20IA%20en%20La%20Paz">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Link>
                </Button>
              </div>

              <div className="bg-[#007934]/10 rounded-2xl p-6 max-w-xl mx-auto">
                <p className="text-lg font-semibold text-[#007934]">💰 $200 USD - 10 Clases</p>
                <p className="text-muted-foreground">Garantía de satisfacción 10 días • Máx 5 niños por grupo</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Clases Online para Niños de <span className="text-[#007934]">Toda La Paz</span>
              </h2>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {zonas.map((zona) => (
                  <Badge key={zona} variant="outline" className="px-4 py-2 border-[#007934]/30">
                    {zona}
                  </Badge>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-[#007934]/20">
                  <CardContent className="p-6 text-center">
                    <Star className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Sin Tráfico</h3>
                    <p className="text-muted-foreground text-sm">Clases desde casa, sin complicaciones.</p>
                  </CardContent>
                </Card>

                <Card className="border-[#007934]/20">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Horarios Flexibles</h3>
                    <p className="text-muted-foreground text-sm">Nos adaptamos a tu horario.</p>
                  </CardContent>
                </Card>

                <Card className="border-[#007934]/20">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-10 w-10 text-[#007934] mx-auto mb-4" />
                    <h3 className="font-bold mb-2">100% Online</h3>
                    <p className="text-muted-foreground text-sm">Desde cualquier zona con internet.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#007934]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¡Prepara a tu Hijo para el Futuro!</h2>
            <Button size="lg" className="bg-white text-[#007934] hover:bg-white/90" asChild>
              <Link href="/booking">
                Reservar Evaluación GRATIS <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 max-w-4xl mx-auto">
              <Link href="/bo/cursos-ia-ninos-bolivia" className="text-[#007934] hover:underline">
                Cursos IA Bolivia
              </Link>
              <Link href="/bo" className="text-[#007934] hover:underline">
                Hub Bolivia
              </Link>
              <Link href="/pe" className="text-[#007934] hover:underline">
                Perú
              </Link>
            </div>
          </div>
        </section>
      </div>

      <WhatsAppButton />
    </>
  )
}
