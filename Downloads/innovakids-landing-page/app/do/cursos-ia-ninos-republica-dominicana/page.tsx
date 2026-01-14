import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Shield, ArrowRight, MessageCircle, Brain, Rocket, Target, Award } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Cursos de IA para Niños en República Dominicana 2026 | Clases Online en Vivo | InnovaKids",
  description:
    "✅ Cursos de Inteligencia Artificial para niños dominicanos de 8-17 años. Clases online en vivo, grupos de máx 5 alumnos. $200 USD por 10 clases. ¡Garantía 10 días!",
  keywords:
    "cursos ia niños republica dominicana, clases inteligencia artificial niños santo domingo, cursos programacion niños rd, ia para niños dominicanos",
  openGraph: {
    title: "Cursos de IA para Niños en República Dominicana | InnovaKids Latam",
    description:
      "Clases de Inteligencia Artificial para niños dominicanos. Online en vivo, grupos pequeños, profesores expertos.",
    url: "https://www.innovakidslatam.com/do/cursos-ia-ninos-republica-dominicana",
    siteName: "InnovaKids Latam",
    locale: "es_DO",
    type: "website",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/do/cursos-ia-ninos-republica-dominicana",
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Curso de Inteligencia Artificial para Niños - República Dominicana",
  description: "Programa completo de IA para niños dominicanos de 8 a 17 años con clases online en vivo",
  provider: {
    "@type": "Organization",
    name: "InnovaKids Latam",
    url: "https://www.innovakidslatam.com",
  },
  areaServed: {
    "@type": "Country",
    name: "República Dominicana",
  },
  inLanguage: "es",
  offers: {
    "@type": "Offer",
    price: "200",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
  },
}

export default function CursosIANinosRepublicaDominicanaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#002D62]/10 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-[#002D62] text-white px-4 py-2">
                🇩🇴 #1 en Cursos de IA para Niños en República Dominicana
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                Tu satisfacción <br />
                <span className="text-[#002D62]">Garantizada</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
                Cursos de Inteligencia Artificial para niños dominicanos de 8 a 17 años. Clases online en vivo con
                grupos de máximo 5 alumnos. ¡Klk!
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">10 Clases en Vivo</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                  <Users className="h-5 w-5 text-[#002D62]" />
                  <span className="font-medium">Máx 5 Niños/Grupo</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Garantía 10 Días</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-[#002D62] hover:bg-[#002D62]/90 text-white text-lg px-8 py-6" asChild>
                  <Link href="/booking">
                    Reservar Evaluación GRATIS
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-[#002D62] text-[#002D62] bg-transparent"
                  asChild
                >
                  <Link href="https://wa.me/56964754219?text=Hola!%20Quiero%20información%20sobre%20los%20cursos%20de%20IA%20para%20niños%20en%20República%20Dominicana">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Link>
                </Button>
              </div>

              <div className="bg-[#002D62]/10 border border-[#002D62]/20 rounded-2xl p-6 max-w-xl mx-auto">
                <p className="text-lg font-semibold text-[#002D62]">💰 Inversión: $200 USD</p>
                <p className="text-muted-foreground">
                  10 clases online en vivo (90 min c/u) • Garantía de satisfacción 10 días
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué República Dominicana */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                ¿Por Qué los Niños Dominicanos <span className="text-[#002D62]">Necesitan Aprender IA</span>?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-[#002D62]/20">
                  <CardContent className="p-6">
                    <Brain className="h-12 w-12 text-[#002D62] mb-4" />
                    <h3 className="text-xl font-bold mb-2">RD Digital</h3>
                    <p className="text-muted-foreground">
                      República Dominicana está creciendo en tecnología. Tu hijo puede ser parte de esta transformación
                      digital.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#002D62]/20">
                  <CardContent className="p-6">
                    <Rocket className="h-12 w-12 text-[#002D62] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Oportunidades Globales</h3>
                    <p className="text-muted-foreground">
                      Desde Santo Domingo o Santiago, tu hijo puede acceder a carreras tecnológicas internacionales bien
                      pagadas.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#002D62]/20">
                  <CardContent className="p-6">
                    <Target className="h-12 w-12 text-[#002D62] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Ventaja Competitiva</h3>
                    <p className="text-muted-foreground">
                      Muy pocos niños en RD están aprendiendo IA. Tu hijo tendrá años de ventaja sobre sus compañeros.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#002D62]/20">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 text-[#002D62] mb-4" />
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

        {/* Qué Incluye */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                ¿Qué Incluye el <span className="text-[#002D62]">Programa</span>?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "10 clases online en vivo de 90 minutos",
                  "Grupos pequeños de máximo 5 niños",
                  "Profesor experto en IA y educación",
                  "Proyectos prácticos con herramientas reales",
                  "Certificado de finalización",
                  "Acceso a comunidad de estudiantes",
                  "Material de apoyo descargable",
                  "Grabaciones de las clases",
                  "Horarios flexibles para República Dominicana",
                  "Garantía de satisfacción 10 días",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-card/50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ciudades */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Clases Online para <span className="text-[#002D62]">Toda República Dominicana</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Desde cualquier ciudad de RD, tu hijo puede tomar nuestras clases
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Santo Domingo",
                  "Santiago",
                  "La Romana",
                  "San Pedro de Macorís",
                  "San Cristóbal",
                  "Puerto Plata",
                  "La Vega",
                  "San Francisco de Macorís",
                  "Punta Cana",
                  "Higüey",
                ].map((ciudad) => (
                  <Badge key={ciudad} variant="outline" className="px-4 py-2 text-base border-[#002D62]/30">
                    {ciudad}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-[#002D62]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para que tu Hijo Domine la IA?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Reserva una evaluación gratuita y descubre el potencial de tu hijo en tecnología
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#002D62] hover:bg-white/90 text-lg px-8 py-6" asChild>
                <Link href="/booking">
                  Reservar Evaluación GRATIS
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

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
            <div className="max-w-4xl mx-auto">
              <h3 className="font-semibold mb-4">Explora más sobre IA para Niños:</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/do" className="text-[#002D62] hover:underline">
                  Hub República Dominicana
                </Link>
                <Link href="/do/clases-ia-ninos-santo-domingo" className="text-[#002D62] hover:underline">
                  Clases IA Santo Domingo
                </Link>
                <Link href="/metodologia-aprender-creando" className="text-[#002D62] hover:underline">
                  Nuestra Metodología
                </Link>
                <Link href="/booking" className="text-[#002D62] hover:underline">
                  Reservar Clase
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <WhatsAppButton />
    </>
  )
}
