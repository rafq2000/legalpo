import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MapPin, Users, Clock, Shield, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Cursos de IA para Niños en Costa Rica | Todas las Provincias | InnovaKids 🇨🇷",
  description:
    "Cursos de inteligencia artificial para niños en todo Costa Rica. San José, Heredia, Alajuela, Cartago. Clases online en vivo. Grupos de máx 5 niños.",
}

export default function CostaRicaHub() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Me interesa el curso de IA para niños en Costa Rica.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  const provinces = [
    { name: "San José", areas: ["Escazú", "Santa Ana", "Curridabat", "Moravia", "Tibás", "San Pedro"] },
    { name: "Heredia", areas: ["San Pablo", "Santo Domingo", "Barva", "Belén", "Flores"] },
    { name: "Alajuela", areas: ["Alajuela Centro", "San Ramón", "Grecia", "Palmares"] },
    { name: "Cartago", areas: ["Cartago Centro", "Tres Ríos", "Paraíso", "Turrialba"] },
    { name: "Guanacaste", areas: ["Liberia", "Nicoya", "Santa Cruz", "Tamarindo"] },
    { name: "Puntarenas", areas: ["Puntarenas Centro", "Jacó", "Quepos", "Golfito"] },
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#002B7F] via-[#FFFFFF] to-[#CE1126] py-24 md:py-32">
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <span className="text-2xl">🇨🇷</span>
              <span className="font-medium">Costa Rica - Todas las Provincias</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Cursos de IA para Niños en Todo Costa Rica
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Clases 100% online en vivo desde cualquier provincia. San José, Heredia, Alajuela, Cartago y más. ¡Pura
              vida!
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#002B7F] shadow-2xl transition-all hover:scale-105"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#002B7F]"
              >
                Consultar por WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* PROVINCES GRID */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Provincias de Costa Rica que Atendemos</h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Clases online en vivo - Tu hijo participa desde cualquier ubicación
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {provinces.map((province) => (
                <div key={province.name} className="rounded-2xl bg-card p-6 transition-all hover:shadow-lg">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#CE1126]/20">
                      <MapPin className="h-6 w-6 text-[#002B7F]" />
                    </div>
                    <h3 className="text-xl font-bold">{province.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {province.areas.map((area) => (
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
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#CE1126]/20">
                  <Users className="h-8 w-8 text-[#002B7F]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Máximo 5 Niños</h3>
                <p className="text-muted-foreground">Por grupo, atención 100% personalizada</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#CE1126]/20">
                  <Clock className="h-8 w-8 text-[#002B7F]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">10 Clases en Vivo</h3>
                <p className="text-muted-foreground">90 minutos cada una, horario Costa Rica</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#CE1126]/20">
                  <Shield className="h-8 w-8 text-[#002B7F]" />
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
            <h2 className="mb-8 text-center text-2xl font-bold">Páginas Relacionadas en Costa Rica</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/cr/cursos-ia-ninos-costa-rica"
                className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
              >
                Cursos IA Niños Costa Rica
              </Link>
              <Link
                href="/cr/clases-ia-ninos-san-jose"
                className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
              >
                Clases IA San José
              </Link>
              <Link
                href="/cr/blog/cursos-inteligencia-artificial-ninos-costa-rica-guia"
                className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
              >
                Guía Completa IA Niños Costa Rica
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#002B7F] to-[#001a4d] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">$197 USD - Programa Completo</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              10 clases en vivo, grupos de máximo 5 niños, garantía de 10 días. ¡Pura vida!
            </p>

            <Link
              href={calendlyLink}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-[#CE1126] px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105"
            >
              Agendar Evaluación Gratuita
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
