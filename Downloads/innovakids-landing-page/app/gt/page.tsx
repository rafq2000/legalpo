import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, MessageCircle, MapPin } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Cursos de IA para Patojos en Guatemala | Guatemala City, Quetzaltenango | InnovaKids",
  description:
    "Cursos de Inteligencia Artificial para patojos en Guatemala. Clases online en vivo desde Guatemala City, Quetzaltenango, Mixco y todo el país. $197 USD - 10 clases.",
  alternates: {
    canonical: "https://www.innovakidslatam.com/gt",
  },
}

const ciudades = [
  { nombre: "Ciudad de Guatemala", link: "/gt/clases-ia-ninos-ciudad-guatemala", descripcion: "Capital" },
  { nombre: "Quetzaltenango", link: "/gt", descripcion: "Xela" },
  { nombre: "Mixco", link: "/gt", descripcion: "Área metropolitana" },
  { nombre: "Villa Nueva", link: "/gt", descripcion: "Sur de la capital" },
  { nombre: "Escuintla", link: "/gt", descripcion: "Costa sur" },
  { nombre: "Cobán", link: "/gt", descripcion: "Alta Verapaz" },
]

export default function GuatemalaHubPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-b from-[#4997D0]/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-[#4997D0] text-white px-4 py-2">🇬🇹 Guatemala</Badge>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Cursos de IA para Patojos en <span className="text-[#4997D0]">Guatemala</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Clases online en vivo para patojos de 8 a 17 años desde cualquier ciudad de Guatemala. Grupos pequeños
                de máximo 5 alumnos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-[#4997D0] hover:bg-[#4997D0]/90 text-white" asChild>
                  <Link href="/booking">
                    Reservar Evaluación GRATIS
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#4997D0] text-[#4997D0] bg-transparent" asChild>
                  <Link href="https://wa.me/56964754219?text=Hola!%20Quiero%20info%20cursos%20IA%20Guatemala">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>$197 USD - 10 Clases</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Máx 5 Patojos/Grupo</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Garantía 10 Días</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ciudades */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Clases Online desde <span className="text-[#4997D0]">Cualquier Ciudad</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {ciudades.map((ciudad) => (
                <Link key={ciudad.nombre} href={ciudad.link}>
                  <Card className="hover:border-[#4997D0] transition-colors cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-6 w-6 text-[#4997D0] flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold">{ciudad.nombre}</h3>
                          <p className="text-muted-foreground">{ciudad.descripcion}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#4997D0]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¡Prepara a tu Patojo para el Futuro!</h2>
            <Button size="lg" className="bg-white text-[#4997D0] hover:bg-white/90" asChild>
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
              <Link href="/gt/cursos-ia-ninos-guatemala" className="text-[#4997D0] hover:underline">
                Cursos IA Guatemala
              </Link>
              <Link href="/gt/clases-ia-ninos-ciudad-guatemala" className="text-[#4997D0] hover:underline">
                Clases Ciudad Guatemala
              </Link>
              <Link href="/sv" className="text-[#4997D0] hover:underline">
                El Salvador
              </Link>
              <Link href="/hn" className="text-[#4997D0] hover:underline">
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
