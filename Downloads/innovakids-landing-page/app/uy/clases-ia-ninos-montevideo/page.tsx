import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Check, Users, Shield, Star, MapPin } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Clases de IA para Niños en Montevideo 2026 | InnovaKids Uruguay",
  description:
    "Clases de inteligencia artificial para niños en Montevideo. Cursos online desde Pocitos, Carrasco, Punta Carretas, Centro y toda la capital. Primera clase GRATIS. 🇺🇾",
  keywords: [
    "clases ia niños montevideo",
    "cursos ia niños pocitos",
    "inteligencia artificial niños carrasco",
    "curso ia niños punta carretas",
    "clases programación niños montevideo",
  ],
  openGraph: {
    title: "Clases de IA para Niños en Montevideo | InnovaKids",
    description: "Cursos de inteligencia artificial para niños en Montevideo. Primera clase gratis.",
    url: "https://www.innovakidslatam.com/uy/clases-ia-ninos-montevideo",
    siteName: "InnovaKids",
    locale: "es_UY",
    type: "website",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/uy/clases-ia-ninos-montevideo",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "InnovaKids Montevideo",
  description: "Clases de inteligencia artificial para niños en Montevideo, Uruguay",
  url: "https://www.innovakidslatam.com/uy/clases-ia-ninos-montevideo",
  telephone: "+56964754219",
  address: {
    "@type": "PostalAddress",
    addressCountry: "UY",
    addressLocality: "Montevideo",
    addressRegion: "Montevideo",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "89",
    bestRating: "5",
  },
  priceRange: "$200 USD",
}

const neighborhoods = [
  "Pocitos",
  "Carrasco",
  "Punta Carretas",
  "Centro",
  "Buceo",
  "Malvín",
  "Cordón",
  "Parque Rodó",
  "Tres Cruces",
  "La Blanqueada",
  "Prado",
  "Aguada",
]

export default function MontevideoClasesIAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative pt-32 pb-24 bg-gradient-to-b from-background to-[#0a1628]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#0038A8]/10 border border-[#0038A8]/30 rounded-full px-6 py-2">
                <MapPin className="w-5 h-5 text-[#0038A8]" />
                <span className="text-white font-medium">Montevideo, Uruguay</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Clases de IA para Niños
                <br />
                <span className="text-[#0038A8]">en Montevideo</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Tu hijo aprenderá a crear con inteligencia artificial desde Pocitos, Carrasco, Punta Carretas o
                cualquier barrio de la capital. Clases 100% online.
              </p>

              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto py-8">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#0038A8]">89+</div>
                  <div className="text-gray-400 text-sm mt-1">Niños montevideanos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#0038A8]">10</div>
                  <div className="text-gray-400 text-sm mt-1">Clases en vivo</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#0038A8]">5</div>
                  <div className="text-gray-400 text-sm mt-1">Niños máx/clase</div>
                </div>
              </div>

              <div className="space-y-4">
                <Link href="/#sesion-estrategica">
                  <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all">
                    Reservar Clase Demo GRATIS
                  </Button>
                </Link>
                <p className="text-gray-400 text-sm">Sin compromiso - Cupo limitado</p>
              </div>

              <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" /> Garantía 10 días
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#0038A8]" /> Grupos de 5 niños
                </span>
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#FCD116]" /> 4.9/5 calificación
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* BARRIOS */}
        <section className="py-24 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
              Clases Online Desde Cualquier Barrio
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Nuestros estudiantes se conectan desde toda la capital uruguaya.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {neighborhoods.map((neighborhood, i) => (
                <div key={i} className="bg-[#0f2744]/50 rounded-lg p-4 text-center border border-white/10">
                  <span className="text-gray-300">{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              ¿Por Qué Elegir InnovaKids en Montevideo?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Horarios Convenientes",
                  desc: "Clases en horarios adaptados a la zona horaria de Uruguay (UTC-3).",
                },
                {
                  title: "Grupos Pequeños",
                  desc: "Máximo 5 niños por clase para atención 100% personalizada.",
                },
                {
                  title: "Profesores Expertos",
                  desc: "Instructores especializados en enseñanza de tecnología a niños.",
                },
                {
                  title: "Metodología Práctica",
                  desc: "Los niños crean proyectos reales desde la primera clase.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-[#0038A8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRECIO */}
        <section className="py-24 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-gradient-to-br from-[#0f2744] to-[#1a3a5c] rounded-3xl p-12 border border-[#0038A8]/30 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Programa Completo</h2>

              <div className="mb-8">
                <div className="text-6xl font-bold text-white mb-2">$200 USD</div>
                <p className="text-gray-400">10 clases en vivo</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 text-left">
                {[
                  "10 clases en vivo (90 min)",
                  "Grupos de máximo 5 niños",
                  "Acceso a grabaciones",
                  "Certificado internacional",
                  "Soporte WhatsApp 24/7",
                  "Garantía 10 días",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#0038A8] flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/#sesion-estrategica">
                <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full shadow-2xl">
                  Reservar Clase Demo GRATIS
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKING */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Explora Más</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/uy/cursos-ia-ninos-uruguay"
                className="bg-[#0f2744]/50 hover:bg-[#0f2744] text-gray-300 hover:text-white px-6 py-3 rounded-full border border-white/10 transition-all"
              >
                Cursos IA Uruguay
              </Link>
              <Link
                href="/uy"
                className="bg-[#0f2744]/50 hover:bg-[#0f2744] text-gray-300 hover:text-white px-6 py-3 rounded-full border border-white/10 transition-all"
              >
                InnovaKids Uruguay
              </Link>
              <Link
                href="/uy/blog/cursos-inteligencia-artificial-ninos-uruguay-guia"
                className="bg-[#0f2744]/50 hover:bg-[#0f2744] text-gray-300 hover:text-white px-6 py-3 rounded-full border border-white/10 transition-all"
              >
                Guía Completa
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-gradient-to-b from-[#0a1628] to-background">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">¿Listo para Empezar en Montevideo?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Reservá una clase demo gratuita y descubrí el potencial de tu hijo.
            </p>
            <Link href="/#sesion-estrategica">
              <Button className="bg-[#FCD116] hover:bg-[#e5bc14] text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all">
                Reservar Clase Demo GRATIS
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
