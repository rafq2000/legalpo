import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MapPin, ArrowRight, Users, Clock, Shield, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Curso de IA para Niños en Perú 🇵🇪 | ¡Evaluación GRATIS! InnovaKids",
  description:
    "🚀 Tu hijo crea videojuegos y apps con IA en solo 10 clases. Lima, Arequipa, Trujillo y todo Perú. Máximo 5 niños por grupo. WhatsApp: +56 9 6475 4219 ¡Últimos cupos!",
  keywords:
    "cursos ia niños peru, clases inteligencia artificial lima, ia para niños arequipa, cursos programación trujillo, innovakids peru",
  alternates: {
    canonical: "https://www.innovakidslatam.com/pe",
  },
}

export default function PeruHub() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Me interesa el curso de IA para niños en Perú.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const cities = [
    { name: "Lima", districts: "Miraflores, San Isidro, Surco, La Molina, San Borja" },
    { name: "Arequipa", districts: "Cayma, Cerro Colorado, Yanahuara, José Luis Bustamante" },
    { name: "Trujillo", districts: "Centro, Victor Larco, La Esperanza, El Porvenir" },
    { name: "Cusco", districts: "Centro, Wanchaq, San Sebastián, Santiago" },
    { name: "Chiclayo", districts: "Centro, La Victoria, José Leonardo Ortiz" },
    { name: "Piura", districts: "Centro, Castilla, 26 de Octubre, Catacaos" },
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#D91023] to-[#8B0000] py-24 md:py-32">
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <span className="text-2xl">🇵🇪</span>
              <span className="font-medium">Perú</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Cursos de IA para Niños en Todo Perú
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Clases 100% online en vivo. Tu hijo puede participar desde Lima, Arequipa, Trujillo, Cusco o cualquier
              ciudad del país.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/pe/cursos-ia-ninos-peru"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#D91023] shadow-2xl transition-all hover:scale-105"
              >
                Ver Programa Completo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#D91023]"
              >
                Consultar por WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* KEY STATS */}
        <section className="border-b py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <Users className="mx-auto mb-2 h-8 w-8 text-[#D91023]" />
                <div className="text-2xl font-bold">5 máx</div>
                <div className="text-sm text-muted-foreground">Niños por grupo</div>
              </div>
              <div className="text-center">
                <Clock className="mx-auto mb-2 h-8 w-8 text-[#D91023]" />
                <div className="text-2xl font-bold">10</div>
                <div className="text-sm text-muted-foreground">Clases en vivo</div>
              </div>
              <div className="text-center">
                <Shield className="mx-auto mb-2 h-8 w-8 text-[#D91023]" />
                <div className="text-2xl font-bold">10 días</div>
                <div className="text-sm text-muted-foreground">Garantía total</div>
              </div>
              <div className="text-center">
                <Zap className="mx-auto mb-2 h-8 w-8 text-[#D91023]" />
                <div className="text-2xl font-bold">$197</div>
                <div className="text-sm text-muted-foreground">USD total</div>
              </div>
            </div>
          </div>
        </section>

        {/* CITIES */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Disponible en Todo Perú</h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Clases 100% online en vivo - Participa desde cualquier ciudad
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="rounded-2xl bg-card p-6 transition-all hover:shadow-lg hover:shadow-[#D91023]/10"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D91023]/10">
                      <MapPin className="h-6 w-6 text-[#D91023]" />
                    </div>
                    <h3 className="text-xl font-bold">{city.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{city.districts}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAGES NAVIGATION */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Explora Nuestros Recursos para Perú</h2>

            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/pe/cursos-ia-ninos-peru"
                className="group rounded-2xl bg-card p-8 transition-all hover:shadow-xl"
              >
                <h3 className="mb-3 text-xl font-bold group-hover:text-[#D91023]">Cursos de IA para Niños Perú</h3>
                <p className="mb-4 text-muted-foreground">
                  Programa completo de 10 clases para niños de 8-14 años. ChatGPT, Midjourney, apps y más.
                </p>
                <span className="inline-flex items-center gap-2 text-[#D91023]">
                  Ver más <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/pe/clases-ia-ninos-lima"
                className="group rounded-2xl bg-card p-8 transition-all hover:shadow-xl"
              >
                <h3 className="mb-3 text-xl font-bold group-hover:text-[#D91023]">Clases de IA para Niños Lima</h3>
                <p className="mb-4 text-muted-foreground">
                  Información específica para familias limeñas. Horarios adaptados a zona horaria Perú.
                </p>
                <span className="inline-flex items-center gap-2 text-[#D91023]">
                  Ver más <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/pe/blog/cursos-inteligencia-artificial-ninos-peru-guia"
                className="group rounded-2xl bg-card p-8 transition-all hover:shadow-xl"
              >
                <h3 className="mb-3 text-xl font-bold group-hover:text-[#D91023]">Guía Completa IA para Niños</h3>
                <p className="mb-4 text-muted-foreground">
                  Todo lo que necesitas saber sobre enseñar inteligencia artificial a niños en Perú.
                </p>
                <span className="inline-flex items-center gap-2 text-[#D91023]">
                  Leer guía <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#D91023] to-[#8B0000] py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Comienza Hoy desde Perú</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              Agenda una evaluación gratuita y descubre si tu hijo califica para el programa.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="https://calendly.com/innovakids/evaluacion"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#D91023] transition-all hover:scale-105"
              >
                Agendar Evaluación Gratuita
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#D91023]"
              >
                WhatsApp Directo
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
