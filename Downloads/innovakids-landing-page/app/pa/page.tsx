import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MapPin, Users, Clock, Shield, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Cursos de IA para Niños en Panamá | Todas las Ciudades | InnovaKids 🇵🇦",
  description:
    "Cursos de inteligencia artificial para niños en todo Panamá. Ciudad de Panamá, Colón, David, Santiago. Clases online en vivo. Grupos de máx 5 niños.",
  keywords:
    "cursos ia niños panama, clases ia panama city, curso inteligencia artificial niños colon, ia niños david chiriqui, innovakids panama",
}

export default function PanamaHub() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Me interesa el curso de IA para niños en Panamá.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  const cities = [
    {
      name: "Ciudad de Panamá",
      areas: ["Punta Pacífica", "Costa del Este", "San Francisco", "El Cangrejo", "Clayton", "Casco Viejo"],
    },
    { name: "Colón", areas: ["Colón Centro", "Cristóbal", "Sabanitas", "Puerto Pilón"] },
    { name: "David", areas: ["David Centro", "San Mateo", "Pedregal"] },
    { name: "Santiago", areas: ["Santiago Centro", "La Colorada", "San Martín"] },
    { name: "Chitré", areas: ["Chitré Centro", "Llano Bonito", "La Arena"] },
    { name: "Penonomé", areas: ["Penonomé Centro", "Coclé"] },
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#DA121A] via-[#FFFFFF] to-[#072357] py-24 md:py-32">
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <span className="text-2xl">🇵🇦</span>
              <span className="font-medium">Panamá - Todas las Ciudades</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Cursos de IA para Niños en Todo Panamá
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Clases 100% online en vivo desde cualquier ciudad. Ciudad de Panamá, Colón, David, Santiago y más.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#072357] shadow-2xl transition-all hover:scale-105"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#072357]"
              >
                Consultar por WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* CITIES GRID */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Ciudades de Panamá que Atendemos</h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Clases online en vivo - Tu hijo participa desde cualquier ubicación
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cities.map((city) => (
                <div key={city.name} className="rounded-2xl bg-card p-6 transition-all hover:shadow-lg">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DA121A]/20">
                      <MapPin className="h-6 w-6 text-[#072357]" />
                    </div>
                    <h3 className="text-xl font-bold">{city.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {city.areas.map((area) => (
                      <span key={area} className="rounded-full bg-muted px-3 py-1 text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KEY INFO */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#DA121A]/20">
                  <Users className="h-8 w-8 text-[#072357]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Máximo 5 Niños</h3>
                <p className="text-muted-foreground">Por grupo, atención 100% personalizada</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#DA121A]/20">
                  <Clock className="h-8 w-8 text-[#072357]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">10 Clases en Vivo</h3>
                <p className="text-muted-foreground">90 minutos cada una, horario Panamá</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#DA121A]/20">
                  <Shield className="h-8 w-8 text-[#072357]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Garantía 10 Días</h3>
                <p className="text-muted-foreground">Devolución completa si no estás satisfecho</p>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED PAGES */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">Páginas Relacionadas en Panamá</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/pa/cursos-ia-ninos-panama"
                className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
              >
                Cursos IA Niños Panamá
              </Link>
              <Link
                href="/pa/clases-ia-ninos-panama-city"
                className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
              >
                Clases IA Ciudad de Panamá
              </Link>
              <Link
                href="/pa/blog/cursos-inteligencia-artificial-ninos-panama-guia"
                className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
              >
                Guía Completa IA Niños Panamá
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#072357] to-[#041633] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">$200 USD - Programa Completo</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              10 clases en vivo, grupos de máximo 5 niños, garantía de 10 días
            </p>

            <Link
              href={calendlyLink}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-[#DA121A] px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105"
            >
              <Target className="h-5 w-5" />
              Agendar Evaluación Gratuita
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
