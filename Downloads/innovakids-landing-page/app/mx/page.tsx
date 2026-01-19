import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Clock, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Curso de Inteligencia Artificial para Niños en México | InnovaKids 🇲🇽",
  description:
    "Clases de IA online para niños en México (CDMX, Guadalajara, Monterrey). Tu hijo aprenderá a usar ChatGPT y herramientas de IA para crear tecnología, no solo consumirla. Grupos pequeños.",
  keywords: [
    "ia para niños mexico",
    "cursos ia niños cdmx",
    "clases ia niños guadalajara",
    "cursos inteligencia artificial monterrey",
    "innovakids mexico",
  ],
  openGraph: {
    title: "Curso IA Niños México $197 | Tu Hijo Crea Apps Reales",
    description: "Tu hijo aprende a CREAR con IA. 10 clases, grupos de 5. Apps, juegos, startups. 500+ graduados.",
    url: "https://www.innovakidslatam.com/mx",
    locale: "es_MX",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/mx",
  },
}

const ciudades = [
  {
    nombre: "Ciudad de México",
    emoji: "🏙️",
    link: "/mx/clases-ia-ninos-cdmx",
    desc: "CDMX, Polanco, Roma, Condesa, Santa Fe",
  },
  { nombre: "Guadalajara", emoji: "🌮", link: "/mx/cursos-ia-ninos-mexico", desc: "Jalisco, Zona Metropolitana" },
  { nombre: "Monterrey", emoji: "🏔️", link: "/mx/cursos-ia-ninos-mexico", desc: "Nuevo León, San Pedro Garza García" },
  { nombre: "Puebla", emoji: "🌋", link: "/mx/cursos-ia-ninos-mexico", desc: "Puebla, Cholula, Atlixco" },
  { nombre: "Tijuana", emoji: "🌉", link: "/mx/cursos-ia-ninos-mexico", desc: "Baja California" },
  { nombre: "Cancún", emoji: "🏖️", link: "/mx/cursos-ia-ninos-mexico", desc: "Quintana Roo, Riviera Maya" },
]

export default function MexicoHubPage() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative pt-32 pb-24 bg-gradient-to-b from-background to-[#0a1628]">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-2 mb-8">
              <span className="text-4xl">🇲🇽</span>
              <span className="text-white font-medium">InnovaKids en Todo México</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Cursos de IA para Niños
              <br />
              <span className="text-[#4DD0E1]">en México</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              El mejor curso de inteligencia artificial para niños mexicanos de 8-14 años. Online en vivo con grupos de
              máximo 5 alumnos.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-5 h-5 text-[#4DD0E1]" />
                <span>Máx. 5 niños/clase</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-5 h-5 text-[#4DD0E1]" />
                <span>10 clases en vivo</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-5 h-5 text-[#4DD0E1]" />
                <span>Garantía 10 días</span>
              </div>
            </div>

            <Link href="/#sesion-estrategica">
              <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all">
                🎯 Reservar Evaluación Gratis
              </Button>
            </Link>
          </div>
        </section>

        {/* CIUDADES */}
        <section className="py-24 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">Disponible en Todo México</h2>
            <p className="text-gray-400 text-center mb-12">Clases online en vivo adaptadas al horario de tu ciudad</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ciudades.map((ciudad, i) => (
                <Link key={i} href={ciudad.link}>
                  <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10 hover:border-[#4DD0E1]/50 transition-all group cursor-pointer">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{ciudad.emoji}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#4DD0E1] transition-colors">
                          {ciudad.nombre}
                        </h3>
                        <p className="text-gray-500 text-sm">{ciudad.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#4DD0E1] text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>Ver clases disponibles →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUÉ INNOVAKIDS MÉXICO */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              ¿Por Qué InnovaKids es Líder en México?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Grupos Ultra Reducidos",
                  desc: "Máximo 5 niños por clase para atención 100% personalizada.",
                },
                {
                  icon: "⏰",
                  title: "Horarios México",
                  desc: "Clases adaptadas a GMT-6. Mañana, tarde o fin de semana.",
                },
                {
                  icon: "💳",
                  title: "Pagos Locales",
                  desc: "OXXO, Mercado Pago, PayPal, tarjetas. Como te sea más fácil.",
                },
                { icon: "🛡️", title: "Garantía 10 Días", desc: "No satisfecho = devolución completa. Sin preguntas." },
                {
                  icon: "📱",
                  title: "Soporte WhatsApp",
                  desc: "Atención 24/7 en español mexicano. Respuesta inmediata.",
                },
                {
                  icon: "🏆",
                  title: "Certificación",
                  desc: "Diploma oficial + portfolio digital de proyectos creados.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">{item.icon}</div>
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
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Inversión para Familias Mexicanas</h2>

            <div className="bg-gradient-to-br from-[#0f2744] to-[#1a3a5c] rounded-3xl p-10 border border-[#4DD0E1]/30">
              <div className="text-5xl font-bold text-white mb-2">$197 USD</div>
              <p className="text-gray-400 mb-6">≈ $3,600 MXN • 10 clases completas</p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300 mb-8">
                <span>✅ Grupos de 5 niños</span>
                <span>✅ Garantía 10 días</span>
                <span>✅ Certificado oficial</span>
              </div>

              <Link href="/#sesion-estrategica">
                <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-10 py-6 text-lg font-bold rounded-full">
                  Agendar Evaluación Gratuita
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Dale a tu hijo la ventaja del futuro</h2>
            <p className="text-xl text-gray-400 mb-8">
              Más de 252 niños mexicanos ya dominan la IA. ¿El tuyo será el siguiente?
            </p>

            <Link href="/mx/cursos-ia-ninos-mexico">
              <Button className="bg-[#4DD0E1] hover:bg-[#3db8c4] text-[#0a1628] px-10 py-6 text-lg font-bold rounded-full mr-4">
                Ver Programa Completo
              </Button>
            </Link>
          </div>
        </section>

        {/* Links SEO */}
        <section className="py-8 bg-[#0a1628] border-t border-white/5">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="flex flex-wrap gap-3 text-sm">
              <Link href="/mx/cursos-ia-ninos-mexico" className="text-[#4DD0E1] hover:underline">
                Cursos IA Niños México
              </Link>
              <Link href="/mx/clases-ia-ninos-cdmx" className="text-[#4DD0E1] hover:underline">
                Clases IA CDMX
              </Link>
              <Link
                href="/mx/blog/cursos-inteligencia-artificial-ninos-mexico-guia"
                className="text-[#4DD0E1] hover:underline"
              >
                Guía Completa
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
