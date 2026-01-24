import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, MessageCircle, MapPin } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Curso de Inteligencia Artificial para Niños en El Salvador | InnovaKids",
  description:
    "Formación líder en inteligencia artificial para niños de 8 a 14 años en El Salvador. Clases online en vivo, grupos de 5 alumnos. WhatsApp: +56 9 6475 4219",
  alternates: {
    canonical: "https://www.innovakidslatam.com/sv",
  },
  openGraph: {
    title: "Curso de Inteligencia Artificial para Niños en El Salvador | InnovaKids",
    description:
      "Formación líder en inteligencia artificial para niños de 8 a 14 años en El Salvador. Clases online en vivo, grupos de 5 alumnos.",
    url: "https://www.innovakidslatam.com/sv",
    locale: "es_SV",
    siteName: "InnovaKids",
    type: "website",
  },
}

const ciudades = [
  { nombre: "San Salvador", link: "/sv/clases-ia-ninos-san-salvador", descripcion: "Capital" },
  { nombre: "Santa Ana", link: "/sv", descripcion: "Segunda ciudad" },
  { nombre: "San Miguel", link: "/sv", descripcion: "Zona oriental" },
  { nombre: "Santa Tecla", link: "/sv", descripcion: "La Libertad" },
  { nombre: "Soyapango", link: "/sv", descripcion: "Área metropolitana" },
  { nombre: "Antiguo Cuscatlán", link: "/sv", descripcion: "Zona residencial" },
]

export default function ElSalvadorHubPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-b from-[#0F47AF]/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-[#0F47AF] text-white px-4 py-2">🇸🇻 El Salvador</Badge>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Cursos de IA para Cipotes en <span className="text-[#0F47AF]">El Salvador</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Clases online en vivo para cipotes de 8 a 17 años desde cualquier ciudad de El Salvador. Grupos pequeños
                de máximo 5 alumnos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-[#0F47AF] hover:bg-[#0F47AF]/90 text-white" asChild>
                  <Link href="/booking">
                    Reservar Evaluación GRATIS
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#0F47AF] text-[#0F47AF] bg-transparent" asChild>
                  <Link href="https://wa.me/56964754219?text=Hola!%20Quiero%20info%20cursos%20IA%20El%20Salvador">
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
                  <span>Máx 5 Cipotes/Grupo</span>
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
              Clases Online desde <span className="text-[#0F47AF]">Cualquier Ciudad</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {ciudades.map((ciudad) => (
                <Link key={ciudad.nombre} href={ciudad.link}>
                  <Card className="hover:border-[#0F47AF] transition-colors cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-6 w-6 text-[#0F47AF] flex-shrink-0 mt-1" />
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
        <section className="py-20 bg-[#0F47AF]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¡Prepara a tu Cipote para el Futuro!</h2>
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
              <Link href="/sv/clases-ia-ninos-san-salvador" className="text-[#0F47AF] hover:underline">
                Clases San Salvador
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
