import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Clock, Shield, Star, Check } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Clases de IA para Niños en CDMX 2026 | Ciudad de México | InnovaKids",
  description:
    "Clases de inteligencia artificial para niños en Ciudad de México. Horarios CDMX, testimonios locales, prueba gratis. Polanco, Roma, Condesa. $197 USD 🏙️",
  keywords: [
    "clases de ia para niños cdmx",
    "cursos ia niños ciudad de mexico",
    "clases inteligencia artificial cdmx",
    "curso ia polanco",
    "clases ia roma condesa",
    "curso programacion niños cdmx",
  ],
  openGraph: {
    title: "Clases de IA para Niños en CDMX | InnovaKids",
    description: "Clases de inteligencia artificial para niños en Ciudad de México. Grupos de 5 alumnos.",
    url: "https://www.innovakidslatam.com/mx/clases-ia-ninos-cdmx",
    locale: "es_MX",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/mx/clases-ia-ninos-cdmx",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "InnovaKids CDMX",
  description: "Clases de inteligencia artificial para niños en Ciudad de México",
  url: "https://www.innovakidslatam.com/mx/clases-ia-ninos-cdmx",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciudad de México",
    addressRegion: "CDMX",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "19.4326",
    longitude: "-99.1332",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
  },
  priceRange: "$197 USD",
}

export default function CDMXPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO CDMX */}
        <section className="relative pt-32 pb-24 bg-gradient-to-b from-background to-[#0a1628]">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 bg-[#4DD0E1]/10 border border-[#4DD0E1]/30 rounded-full px-6 py-2 mb-8">
              <MapPin className="w-5 h-5 text-[#4DD0E1]" />
              <span className="text-white font-medium">Ciudad de México • CDMX</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Clases de Inteligencia Artificial
              <br />
              <span className="text-[#4DD0E1]">para Niños en CDMX</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              El mejor curso de IA para niños de 8-14 años en Ciudad de México. Online en vivo con horarios adaptados a
              GMT-6.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12 text-gray-400">
              <span className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#4DD0E1]" /> Máx. 5 niños/clase
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#4DD0E1]" /> 10 clases
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#4DD0E1]" /> Garantía 10 días
              </span>
            </div>

            <Link href="/#sesion-estrategica">
              <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all">
                🎯 Reservar Clase Demo GRATIS
              </Button>
            </Link>
          </div>
        </section>

        {/* ZONAS CDMX */}
        <section className="py-24 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-white text-center mb-4">Familias de Toda la Ciudad de México</h2>
            <p className="text-gray-400 text-center mb-12">
              Clases 100% online, accesibles desde cualquier zona de CDMX
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Polanco",
                "Roma",
                "Condesa",
                "Santa Fe",
                "Coyoacán",
                "Del Valle",
                "Nápoles",
                "Pedregal",
                "Interlomas",
                "Satélite",
                "Lomas",
                "Tecamachalco",
              ].map((zona, i) => (
                <div key={i} className="bg-[#0f2744]/50 rounded-lg p-4 border border-white/10 text-center">
                  <span className="text-white font-medium">{zona}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIOS CDMX */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Familias de CDMX que Confían en Nosotros
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  nombre: "Patricia Hernández",
                  zona: "Polanco",
                  texto:
                    "Mi hijo de 12 años ahora crea sus propios videojuegos. La inversión más inteligente que hemos hecho.",
                },
                {
                  nombre: "Roberto Sánchez",
                  zona: "Coyoacán",
                  texto:
                    "Los grupos pequeños hacen toda la diferencia. Mi hija recibe atención real, no es un número más.",
                },
                {
                  nombre: "Claudia Moreno",
                  zona: "Santa Fe",
                  texto:
                    "Como ejecutiva, valoro que sean flexibles con los horarios. Mi hijo no se pierde ninguna clase.",
                },
              ].map((test, i) => (
                <div key={i} className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4">"{test.texto}"</p>
                  <div>
                    <p className="text-white font-semibold">{test.nombre}</p>
                    <p className="text-[#4DD0E1] text-sm">{test.zona}, CDMX</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HORARIOS CDMX */}
        <section className="py-24 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Horarios Adaptados a CDMX (GMT-6)</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { turno: "Mañana", horario: "9:00 - 10:30 AM", dias: "Sábados" },
                { turno: "Tarde", horario: "4:00 - 5:30 PM", dias: "Martes y Jueves" },
                { turno: "Fin de Semana", horario: "11:00 AM - 12:30 PM", dias: "Domingos" },
              ].map((h, i) => (
                <div key={i} className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10 text-center">
                  <h3 className="text-xl font-bold text-[#4DD0E1] mb-2">{h.turno}</h3>
                  <p className="text-2xl font-bold text-white mb-2">{h.horario}</p>
                  <p className="text-gray-400">{h.dias}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 mt-8">
              ¿Ningún horario te funciona? Contáctanos y encontramos una solución.
            </p>
          </div>
        </section>

        {/* PRECIO CDMX */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <div className="bg-gradient-to-br from-[#0f2744] to-[#1a3a5c] rounded-3xl p-10 border border-[#4DD0E1]/30">
              <h2 className="text-2xl font-bold text-white mb-6">Programa Completo para Niños de CDMX</h2>

              <div className="text-5xl font-bold text-white mb-2">$197 USD</div>
              <p className="text-gray-400 mb-6">≈ $3,600 MXN • 10 clases en vivo</p>

              <div className="grid grid-cols-2 gap-3 max-w-md mx-auto mb-8 text-left text-sm">
                {[
                  "Grupos máx. 5 niños",
                  "Horarios CDMX",
                  "Garantía 10 días",
                  "Certificado oficial",
                  "Soporte WhatsApp",
                  "Grabaciones incluidas",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-[#4DD0E1]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/#sesion-estrategica">
                <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-10 py-6 text-lg font-bold rounded-full">
                  Agendar Evaluación Gratuita
                </Button>
              </Link>

              <p className="text-gray-500 text-sm mt-4">Pago con OXXO, Mercado Pago o tarjeta</p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¿Tu hijo será el próximo creador de IA en CDMX?</h2>
            <p className="text-xl text-gray-400 mb-8">Cupos limitados para el grupo que inicia el 26 de Enero.</p>

            <Link href="/#sesion-estrategica">
              <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-16 py-8 text-2xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all">
                🚀 ASEGURAR MI CUPO
              </Button>
            </Link>
          </div>
        </section>

        {/* Links SEO */}
        <section className="py-8 bg-background border-t border-white/5">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="flex flex-wrap gap-3 text-sm">
              <Link href="/mx" className="text-[#4DD0E1] hover:underline">
                InnovaKids México
              </Link>
              <Link href="/mx/cursos-ia-ninos-mexico" className="text-[#4DD0E1] hover:underline">
                Cursos IA Niños México
              </Link>
              <Link
                href="/mx/blog/cursos-inteligencia-artificial-ninos-mexico-guia"
                className="text-[#4DD0E1] hover:underline"
              >
                Guía Completa IA Niños
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
