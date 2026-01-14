import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "InnovaKids Uruguay | Cursos de IA para Niños en Todo el País 🇺🇾",
  description:
    "Cursos de inteligencia artificial para niños en Uruguay. Clases online desde Montevideo, Punta del Este, Maldonado, Salto y todo el país. Primera clase GRATIS.",
  keywords: [
    "cursos ia niños uruguay",
    "clases ia niños montevideo",
    "inteligencia artificial niños punta del este",
    "curso ia niños maldonado",
    "ia para niños salto",
    "cursos programación niños uruguay",
  ],
  openGraph: {
    title: "InnovaKids Uruguay | Cursos de IA para Niños",
    description: "Cursos de inteligencia artificial para niños en todo Uruguay. Primera clase gratis.",
    url: "https://www.innovakidslatam.com/uy",
    siteName: "InnovaKids",
    locale: "es_UY",
    type: "website",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/uy",
  },
}

const cities = [
  { name: "Montevideo", students: "89+", link: "/uy/clases-ia-ninos-montevideo" },
  { name: "Punta del Este", students: "34+", link: "/uy/clases-ia-ninos-montevideo" },
  { name: "Maldonado", students: "28+", link: "/uy/clases-ia-ninos-montevideo" },
  { name: "Salto", students: "19+", link: "/uy/clases-ia-ninos-montevideo" },
  { name: "Colonia", students: "15+", link: "/uy/clases-ia-ninos-montevideo" },
  { name: "Paysandú", students: "12+", link: "/uy/clases-ia-ninos-montevideo" },
  { name: "Ciudad de la Costa", students: "23+", link: "/uy/clases-ia-ninos-montevideo" },
  { name: "Las Piedras", students: "11+", link: "/uy/clases-ia-ninos-montevideo" },
]

export default function UruguayHubPage() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative pt-32 pb-24 bg-gradient-to-b from-background to-[#0a1628]">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 bg-[#0038A8]/10 border border-[#0038A8]/30 rounded-full px-6 py-2 mb-8">
              <span className="text-2xl">🇺🇾</span>
              <span className="text-white font-medium">Uruguay</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              InnovaKids
              <br />
              <span className="text-[#0038A8]">Uruguay</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Cursos de inteligencia artificial para niños de 8-14 años.
              <strong className="text-white"> Clases 100% online</strong> desde cualquier departamento del país.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0038A8]">187+</div>
                <div className="text-gray-400 text-sm">Niños uruguayos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0038A8]">8</div>
                <div className="text-gray-400 text-sm">Departamentos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0038A8]">4.9</div>
                <div className="text-gray-400 text-sm">Calificación</div>
              </div>
            </div>

            <Link href="/#sesion-estrategica">
              <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all">
                Reservar Clase Demo GRATIS
              </Button>
            </Link>
          </div>
        </section>

        {/* CIUDADES */}
        <section className="py-24 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">Estudiantes en Todo Uruguay</h2>
            <p className="text-gray-400 text-center mb-12">
              Nuestras clases son 100% online. Conectate desde cualquier lugar.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cities.map((city, i) => (
                <Link key={i} href={city.link}>
                  <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10 hover:border-[#0038A8]/50 transition-all group">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-[#0038A8]" />
                      <h3 className="text-lg font-bold text-white">{city.name}</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{city.students} niños</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#0038A8] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUÉ URUGUAY */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              ¿Por Qué Familias Uruguayas Eligen InnovaKids?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#0038A8]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⏰</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Horarios Flexibles</h3>
                <p className="text-gray-400">
                  Clases en horarios convenientes para Uruguay. Nos adaptamos a tu agenda familiar.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#0038A8]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💳</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Pagos en USD</h3>
                <p className="text-gray-400">
                  Pagá con tarjeta de crédito, débito o transferencia. $200 USD el programa completo.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#0038A8]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Garantía 10 Días</h3>
                <p className="text-gray-400">
                  Si no estás satisfecho, te devolvemos el 100% de tu dinero. Sin preguntas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="py-24 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Lo Que Dicen las Familias Uruguayas</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FCD116] fill-[#FCD116]" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">
                  "Increíble cómo en pocas semanas mi hijo ya maneja herramientas que yo ni conocía. Súper recomendado
                  para familias uruguayas."
                </p>
                <span className="text-[#0038A8] font-medium">— María F., Montevideo</span>
              </div>
              <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FCD116] fill-[#FCD116]" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">
                  "Los grupos de máximo 5 niños hacen toda la diferencia. Mi hija recibe atención personalizada real."
                </p>
                <span className="text-[#0038A8] font-medium">— Carlos P., Punta del Este</span>
              </div>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKING */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Más Sobre InnovaKids Uruguay</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/uy/cursos-ia-ninos-uruguay"
                className="bg-[#0f2744]/50 hover:bg-[#0f2744] text-gray-300 hover:text-white px-6 py-3 rounded-full border border-white/10 transition-all"
              >
                Cursos IA Niños Uruguay
              </Link>
              <Link
                href="/uy/clases-ia-ninos-montevideo"
                className="bg-[#0f2744]/50 hover:bg-[#0f2744] text-gray-300 hover:text-white px-6 py-3 rounded-full border border-white/10 transition-all"
              >
                Clases IA Montevideo
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Empezá Hoy Mismo</h2>
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
