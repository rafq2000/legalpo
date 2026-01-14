import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Check, Users, Shield, Star, MapPin } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Clases de IA para Chicos Buenos Aires 2026 | Online | InnovaKids",
  description:
    "Clases de inteligencia artificial para chicos en Buenos Aires. Curso online de IA para niños 8-14 años. Grupos de 5 alumnos. Primera clase GRATIS. CABA, Zona Norte, Sur y Oeste.",
  keywords: [
    "clases ia chicos buenos aires",
    "curso inteligencia artificial chicos caba",
    "ia para chicos zona norte",
    "clases programacion chicos buenos aires",
    "curso ia chicos online argentina",
  ],
  openGraph: {
    title: "Clases de IA para Chicos en Buenos Aires | InnovaKids",
    description:
      "Curso online de inteligencia artificial para chicos de Buenos Aires. Grupos de 5 alumnos. Primera clase gratis.",
    url: "https://www.innovakidslatam.com/ar/clases-ia-chicos-buenos-aires",
    siteName: "InnovaKids",
    locale: "es_AR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/ar/clases-ia-chicos-buenos-aires",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Clases de Inteligencia Artificial para Chicos - Buenos Aires",
  description: "Clases online de IA para chicos de 8-14 años en Buenos Aires. 10 clases en vivo, grupos de 5 alumnos.",
  provider: {
    "@type": "Organization",
    name: "InnovaKids",
    url: "https://www.innovakidslatam.com",
  },
  offers: {
    "@type": "Offer",
    price: "200",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
  },
  courseMode: "online",
  educationalLevel: "beginner",
  areaServed: {
    "@type": "City",
    name: "Buenos Aires",
    containedInPlace: {
      "@type": "Country",
      name: "Argentina",
    },
  },
}

export default function BuenosAiresClasesIAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative pt-32 pb-24 bg-gradient-to-b from-background to-[#0a1628]">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 bg-[#75AADB]/10 border border-[#75AADB]/30 rounded-full px-6 py-2 mb-8">
              <MapPin className="w-5 h-5 text-[#75AADB]" />
              <span className="text-white font-medium">180+ familias de Buenos Aires</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Clases de IA para Chicos
              <br />
              <span className="text-[#75AADB]">en Buenos Aires</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Curso 100% online para chicos de 8-14 años. CABA, Zona Norte, Zona Sur, Zona Oeste.
              <strong className="text-white"> Grupos de máximo 5 alumnos.</strong>
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" /> $200 USD - 10 clases
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" /> Garantía 10 días
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#75AADB]" /> Máximo 5 chicos
              </span>
            </div>

            <Link href="/#sesion-estrategica">
              <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all">
                Reservar Clase Demo GRATIS
              </Button>
            </Link>
          </div>
        </section>

        {/* ZONAS BUENOS AIRES */}
        <section className="py-24 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Chicos de Todo Buenos Aires Participan
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { zona: "CABA", barrios: "Palermo, Belgrano, Recoleta, Caballito..." },
                { zona: "Zona Norte", barrios: "Vicente López, San Isidro, Tigre..." },
                { zona: "Zona Sur", barrios: "Avellaneda, Quilmes, Lanús..." },
                { zona: "Zona Oeste", barrios: "Morón, Ituzaingó, San Miguel..." },
              ].map((item, i) => (
                <div key={i} className="bg-[#0f2744] rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-[#75AADB] mb-2">{item.zona}</h3>
                  <p className="text-gray-400 text-sm">{item.barrios}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 mt-8">
              Las clases son 100% online via Zoom. Tu hijo puede participar desde cualquier lugar de Buenos Aires.
            </p>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">¿Qué Incluyen las Clases?</h2>

            <div className="bg-[#0f2744] rounded-2xl p-8 border border-white/10">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "10 clases en vivo de 90 minutos",
                  "Grupos de máximo 5 chicos",
                  "Acceso de por vida a grabaciones",
                  "Certificado oficial internacional",
                  "Kit de prompts exclusivos",
                  "Comunidad privada de estudiantes",
                  "Soporte WhatsApp 24/7",
                  "Demo Day con presentación final",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#75AADB] flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <div className="text-4xl font-bold text-white mb-2">$200 USD</div>
                <p className="text-gray-400 mb-4">Programa completo - Garantía 10 días</p>
                <Link href="/#sesion-estrategica">
                  <Button className="bg-[#75AADB] hover:bg-[#5a8fc0] text-white px-8 py-4 text-lg font-bold rounded-full">
                    Reservar Ahora
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS BUENOS AIRES */}
        <section className="py-24 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Familias de Buenos Aires Nos Recomiendan
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  quote: "Mi hijo de Palermo creó su primer juego. Increíble ver cómo aprende.",
                  name: "María L.",
                  zona: "CABA",
                },
                {
                  quote: "Los grupos chicos son geniales. Mi hija tiene atención personalizada.",
                  name: "Carlos R.",
                  zona: "Zona Norte",
                },
                {
                  quote: "Vale cada peso. Mi hijo ahora quiere estudiar programación.",
                  name: "Ana S.",
                  zona: "Zona Sur",
                },
                {
                  quote: "El horario flexible nos viene perfecto. Súper recomendado.",
                  name: "Roberto M.",
                  zona: "Zona Oeste",
                },
              ].map((t, i) => (
                <div key={i} className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-[#F6B40E] fill-[#F6B40E]" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4">"{t.quote}"</p>
                  <div className="text-[#75AADB] text-sm font-medium">
                    — {t.name}, {t.zona}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Sumá a Tu Hijo a la Próxima Generación</h2>
            <p className="text-xl text-gray-300 mb-8">Solo 2 cupos disponibles para Buenos Aires esta semana.</p>

            <Link href="/#sesion-estrategica">
              <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all">
                Reservar Clase Demo GRATIS
              </Button>
            </Link>

            {/* Internal Links */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/ar" className="text-[#75AADB] hover:underline">
                  Cursos IA Argentina
                </Link>
                <Link href="/ar/cursos-ia-chicos-argentina" className="text-[#75AADB] hover:underline">
                  Cursos IA Chicos
                </Link>
                <Link
                  href="/ar/blog/cursos-inteligencia-artificial-chicos-argentina-guia"
                  className="text-[#75AADB] hover:underline"
                >
                  Guía Completa
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
