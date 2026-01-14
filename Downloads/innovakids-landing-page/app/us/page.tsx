import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MapPin, Users, Clock, Shield, ArrowRight, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Cursos IA para Niños Latinos en USA | Clases en Español | InnovaKids 🇺🇸",
  description:
    "Cursos de inteligencia artificial en español para niños latinos en Estados Unidos. Miami, LA, Houston, NYC, Chicago. 10 clases, grupos de 5 niños. Evaluación gratis.",
  keywords:
    "cursos ia niños latinos usa, clases inteligencia artificial español estados unidos, curso ia niños miami, curso ia niños los angeles, curso ia niños houston",
}

export default function USAHub() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Vivo en USA y me interesa el curso de IA en español para mi hijo.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  const cities = [
    { name: "Miami", state: "Florida", population: "2.7M latinos" },
    { name: "Los Angeles", state: "California", population: "4.9M latinos" },
    { name: "Houston", state: "Texas", population: "2.3M latinos" },
    { name: "New York", state: "New York", population: "2.5M latinos" },
    { name: "Chicago", state: "Illinois", population: "1.4M latinos" },
    { name: "San Antonio", state: "Texas", population: "1.1M latinos" },
    { name: "Phoenix", state: "Arizona", population: "900K latinos" },
    { name: "Dallas", state: "Texas", population: "1.3M latinos" },
    { name: "San Diego", state: "California", population: "1M latinos" },
    { name: "Austin", state: "Texas", population: "400K latinos" },
    { name: "El Paso", state: "Texas", population: "680K latinos" },
    { name: "San Jose", state: "California", population: "350K latinos" },
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#002868] via-[#BF0A30] to-[#FFFFFF] py-24 md:py-32">
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <span className="text-2xl">🇺🇸</span>
              <span className="font-medium">Para Latinos en USA • 100% en Español</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Cursos de IA en Español para Niños Latinos en Estados Unidos
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Tu hijo aprenderá inteligencia artificial sin perder su español. Clases 100% en castellano con horarios
              USA.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#002868] shadow-2xl transition-all hover:scale-105"
              >
                Agendar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#002868]"
              >
                Consultar por WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* WHY SPANISH */}
        <section className="py-16 bg-gradient-to-b from-[#002868]/5 to-transparent">
          <div className="container mx-auto px-4 text-center">
            <Globe className="mx-auto mb-4 h-12 w-12 text-[#BF0A30]" />
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">¿Por Qué Aprender IA en Español?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Tu hijo vive en USA pero el español es parte de su identidad. Nuestro curso combina tecnología de
              vanguardia con preservación del idioma y cultura hispana.
            </p>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-4">
              <div className="rounded-2xl bg-card p-6 text-center">
                <Users className="mx-auto mb-4 h-10 w-10 text-[#002868]" />
                <h3 className="mb-2 font-bold">Máximo 5 Niños</h3>
                <p className="text-sm text-muted-foreground">Atención 100% personalizada</p>
              </div>
              <div className="rounded-2xl bg-card p-6 text-center">
                <Clock className="mx-auto mb-4 h-10 w-10 text-[#002868]" />
                <h3 className="mb-2 font-bold">Horarios USA</h3>
                <p className="text-sm text-muted-foreground">EST, CST, MST, PST</p>
              </div>
              <div className="rounded-2xl bg-card p-6 text-center">
                <Shield className="mx-auto mb-4 h-10 w-10 text-[#002868]" />
                <h3 className="mb-2 font-bold">Garantía 10 Días</h3>
                <p className="text-sm text-muted-foreground">Devolución sin preguntas</p>
              </div>
              <div className="rounded-2xl bg-card p-6 text-center">
                <Globe className="mx-auto mb-4 h-10 w-10 text-[#002868]" />
                <h3 className="mb-2 font-bold">100% en Español</h3>
                <p className="text-sm text-muted-foreground">Profesores nativos</p>
              </div>
            </div>
          </div>
        </section>

        {/* CITIES */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold">Niños Latinos de Todo Estados Unidos</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Clases 100% online en vivo - tu hijo puede participar desde cualquier ciudad
            </p>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {cities.map((city) => (
                <div key={city.name} className="rounded-xl bg-card p-4 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#BF0A30]" />
                    <div>
                      <h3 className="font-bold">{city.name}</h3>
                      <p className="text-sm text-muted-foreground">{city.state}</p>
                      <p className="text-xs text-primary">{city.population}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-muted-foreground">
              Y todas las demás ciudades de USA: Orlando, Tampa, Las Vegas, Denver, Sacramento, Fresno, Albuquerque,
              Tucson y más.
            </p>
          </div>
        </section>

        {/* PRICING QUICK */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-8 text-3xl font-bold">Inversión: $200 USD</h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              10 clases en vivo • Grupos de máximo 5 niños • 100% en español • Garantía 10 días
            </p>
            <Link
              href="/us/cursos-ia-ninos-latinos-usa#precio"
              className="inline-flex items-center gap-2 rounded-full bg-[#002868] px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105"
            >
              Ver Detalles Completos
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* MAIN PAGES */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">Explora Nuestro Programa</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/us/cursos-ia-ninos-latinos-usa"
                className="group rounded-2xl bg-card p-6 transition-all hover:shadow-lg"
              >
                <h3 className="mb-2 font-bold group-hover:text-primary">Curso de IA para Latinos en USA →</h3>
                <p className="text-sm text-muted-foreground">Información completa del programa</p>
              </Link>
              <Link
                href="/us/clases-ia-ninos-miami"
                className="group rounded-2xl bg-card p-6 transition-all hover:shadow-lg"
              >
                <h3 className="mb-2 font-bold group-hover:text-primary">Clases IA Niños Miami →</h3>
                <p className="text-sm text-muted-foreground">Programa para familias en Florida</p>
              </Link>
              <Link
                href="/us/blog/cursos-inteligencia-artificial-ninos-latinos-usa-guia"
                className="group rounded-2xl bg-card p-6 transition-all hover:shadow-lg"
              >
                <h3 className="mb-2 font-bold group-hover:text-primary">Guía Completa para Padres →</h3>
                <p className="text-sm text-muted-foreground">Todo sobre IA para niños latinos</p>
              </Link>
            </div>
          </div>
        </section>

        {/* OTHER COUNTRIES */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">También Disponible en Latinoamérica</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/mx/cursos-ia-ninos-mexico"
                className="rounded-full bg-card px-6 py-3 hover:bg-primary hover:text-primary-foreground"
              >
                🇲🇽 México
              </Link>
              <Link
                href="/co/cursos-ia-ninos-colombia"
                className="rounded-full bg-card px-6 py-3 hover:bg-primary hover:text-primary-foreground"
              >
                🇨🇴 Colombia
              </Link>
              <Link
                href="/ar/cursos-ia-chicos-argentina"
                className="rounded-full bg-card px-6 py-3 hover:bg-primary hover:text-primary-foreground"
              >
                🇦🇷 Argentina
              </Link>
              <Link
                href="/pe/cursos-ia-ninos-peru"
                className="rounded-full bg-card px-6 py-3 hover:bg-primary hover:text-primary-foreground"
              >
                🇵🇪 Perú
              </Link>
              <Link
                href="/cl/cursos-ia-ninos-chile"
                className="rounded-full bg-card px-6 py-3 hover:bg-primary hover:text-primary-foreground"
              >
                🇨🇱 Chile
              </Link>
              <Link
                href="/es/cursos-ia-ninos-espana"
                className="rounded-full bg-card px-6 py-3 hover:bg-primary hover:text-primary-foreground"
              >
                🇪🇸 España
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#002868] to-[#001744] py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-6 text-3xl font-bold">¿Listo para Inscribir a Tu Hijo?</h2>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="rounded-full bg-white px-8 py-4 font-bold text-[#002868] hover:scale-105"
              >
                Agendar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="rounded-full border-2 border-white px-8 py-4 font-bold hover:bg-white hover:text-[#002868]"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
