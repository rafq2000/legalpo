import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, MessageCircle, MapPin } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Curso de Inteligencia Artificial para Niños en Honduras | InnovaKids",
  description:
    "Formación líder en inteligencia artificial para niños de 8 a 14 años en Honduras. Clases online en vivo, grupos de 5 alumnos. WhatsApp: +56 9 6475 4219",
  keywords:
    "cursos ia niños honduras, clases ia tegucigalpa, cursos programacion niños san pedro sula, ia niños la ceiba",
  alternates: {
    canonical: "https://www.innovakidslatam.com/hn",
  },
  openGraph: {
    title: "Curso de Inteligencia Artificial para Niños en Honduras | InnovaKids",
    description:
      "Formación líder en inteligencia artificial para niños de 8 a 14 años en Honduras. Clases online en vivo, grupos de 5 alumnos.",
    url: "https://www.innovakidslatam.com/hn",
    locale: "es_HN",
    siteName: "InnovaKids",
    type: "website",
  },
}

const ciudades = [
  { nombre: "Tegucigalpa", link: "/hn/clases-ia-ninos-tegucigalpa", descripcion: "Capital de Honduras" },
  { nombre: "San Pedro Sula", link: "/hn", descripcion: "Centro industrial" },
  { nombre: "La Ceiba", link: "/hn", descripcion: "Costa atlántica" },
  { nombre: "Choloma", link: "/hn", descripcion: "Zona industrial" },
  { nombre: "El Progreso", link: "/hn", descripcion: "Valle de Sula" },
  { nombre: "Choluteca", link: "/hn", descripcion: "Zona sur" },
]

export default function HondurasHubPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-b from-[#0073CF]/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-[#0073CF] text-white px-4 py-2">🇭🇳 Honduras</Badge>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Cursos de IA para Niños en <span className="text-[#0073CF]">Honduras</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Clases online en vivo para niños de 8 a 17 años desde cualquier ciudad de Honduras. Grupos pequeños de
                máximo 5 alumnos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-[#0073CF] hover:bg-[#0073CF]/90 text-white" asChild>
                  <Link href="/booking">
                    Reservar Evaluación GRATIS
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#0073CF] text-[#0073CF] bg-transparent" asChild>
                  <Link href="https://wa.me/56964754219?text=Hola!%20Quiero%20info%20cursos%20IA%20Honduras">
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
                  <span>Máx 5 Niños/Grupo</span>
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
              Clases Online desde <span className="text-[#0073CF]">Cualquier Ciudad</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {ciudades.map((ciudad) => (
                <Link key={ciudad.nombre} href={ciudad.link}>
                  <Card className="hover:border-[#0073CF] transition-colors cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-6 w-6 text-[#0073CF] flex-shrink-0 mt-1" />
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
        <section className="py-20 bg-[#0073CF]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¡Prepara a tu Hijo para el Futuro!</h2>
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
            <div className="max-w-4xl mx-auto flex flex-wrap gap-4">
              <Link href="/hn/cursos-ia-ninos-honduras" className="text-[#0073CF] hover:underline">
                Cursos IA Honduras
              </Link>
              <Link href="/hn/clases-ia-ninos-tegucigalpa" className="text-[#0073CF] hover:underline">
                Clases Tegucigalpa
              </Link>
              <Link href="/mx" className="text-[#0073CF] hover:underline">
                México
              </Link>
              <Link href="/co" className="text-[#0073CF] hover:underline">
                Colombia
              </Link>
              <Link href="/gt" className="text-[#0073CF] hover:underline">
                Guatemala
              </Link>
            </div>
          </div>
        </section>
      </div>

      <WhatsAppButton />
    </>
  )
}
