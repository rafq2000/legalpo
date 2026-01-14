import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Users, Clock, Shield, Star, Target, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Clases de IA para Niños en Santo Domingo 2026 | InnovaKids 🇩🇴",
  description:
    "Clases de inteligencia artificial para niños en Santo Domingo. Piantini, Naco, Bella Vista. Grupos de máx 5 niños. Evaluación gratis.",
}

export default function ClasesIANinosSantoDomingo() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Me interesa el curso de IA para niños en Santo Domingo.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  const neighborhoods = [
    "Piantini",
    "Naco",
    "Gazcue",
    "Bella Vista",
    "Los Prados",
    "Ensanche Ozama",
    "Evaristo Morales",
    "Serralles",
    "Paraíso",
    "La Esperilla",
    "El Vergel",
    "Los Cacicazgos",
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#002D62] via-[#FFFFFF] to-[#CE1126] py-24 md:py-32">
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">Santo Domingo, RD</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Clases de IA para Niños en Santo Domingo
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Tu hijo aprenderá ChatGPT, Midjourney, programación con IA. Desde Piantini, Naco, Bella Vista y todo Santo
              Domingo.
            </p>

            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold md:text-4xl">10</div>
                <div className="text-sm text-white/80">Clases en vivo</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold md:text-4xl">5</div>
                <div className="text-sm text-white/80">Niños máx/grupo</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold md:text-4xl">$200</div>
                <div className="text-sm text-white/80">USD total</div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#002D62] shadow-2xl transition-all hover:scale-105"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#002D62]"
              >
                Consultar por WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* NEIGHBORHOODS */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Atendemos Todo Santo Domingo</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Clases 100% online en vivo - Tu hijo participa desde cualquier sector
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.map((hood) => (
                <span key={hood} className="rounded-full bg-card px-4 py-2 text-sm">
                  📍 {hood}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* KEY BENEFITS */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-card p-6 text-center">
                <Users className="mx-auto mb-4 h-12 w-12 text-[#002D62]" />
                <h3 className="mb-2 text-xl font-bold">Grupos de 5 Niños</h3>
                <p className="text-muted-foreground">Atención personalizada, no clases masivas</p>
              </div>
              <div className="rounded-2xl bg-card p-6 text-center">
                <Clock className="mx-auto mb-4 h-12 w-12 text-[#002D62]" />
                <h3 className="mb-2 text-xl font-bold">Horario RD</h3>
                <p className="text-muted-foreground">GMT-4, después del cole o fines de semana</p>
              </div>
              <div className="rounded-2xl bg-card p-6 text-center">
                <Shield className="mx-auto mb-4 h-12 w-12 text-[#002D62]" />
                <h3 className="mb-2 text-xl font-bold">Garantía 10 Días</h3>
                <p className="text-muted-foreground">Devolución completa sin preguntas</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Familias de Santo Domingo Opinan</h2>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  name: "Carolina Fernández",
                  location: "Piantini",
                  text: "Mi hijo Miguel (11 años) creó su primera app. ¡Qué lo qué! Los profesores son excelentes y muy dedicados. Los grupos pequeños hacen toda la diferencia.",
                },
                {
                  name: "Roberto Santos",
                  location: "Naco",
                  text: "Como empresario sé que la IA es el futuro. Mi hija está aprendiendo habilidades que le servirán toda la vida. Muy recomendado para familias capitaleñas.",
                },
              ].map((t, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <div className="mb-4 flex text-[#CE1126]">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-primary">📍 {t.location}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">Más Información sobre IA para Niños en RD</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/do/cursos-ia-ninos-republica-dominicana"
                className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
              >
                Cursos IA Niños RD
              </Link>
              <Link
                href="/do"
                className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
              >
                Todas las Ciudades
              </Link>
              <Link
                href="/do/blog/cursos-inteligencia-artificial-ninos-republica-dominicana-guia"
                className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
              >
                Guía Completa
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#002D62] to-[#001a3d] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Inscribe a Tu Hijo Hoy</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              $200 USD - 10 clases en vivo - Grupos de máximo 5 niños - Garantía 10 días
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-[#CE1126] px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105"
              >
                Agendar Evaluación Gratuita
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#002D62]"
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
