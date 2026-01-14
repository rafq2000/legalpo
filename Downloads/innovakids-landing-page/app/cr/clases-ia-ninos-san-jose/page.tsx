import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Users, Clock, Shield, Star, Target, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Clases de IA para Niños en San José Costa Rica 2026 | InnovaKids 🇨🇷",
  description:
    "Clases de inteligencia artificial para niños en San José. Escazú, Santa Ana, Curridabat. Grupos de máx 5 niños. Evaluación gratis.",
}

export default function ClasesIANinosSanJose() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Me interesa el curso de IA para niños en San José.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  const neighborhoods = [
    "Escazú",
    "Santa Ana",
    "Curridabat",
    "Moravia",
    "Tibás",
    "San Pedro",
    "Rohrmoser",
    "Sabana",
    "Paseo Colón",
    "Los Yoses",
    "San Francisco",
    "Desamparados",
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
              <MapPin className="h-4 w-4" />
              <span className="font-medium">San José, Costa Rica</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Clases de IA para Niños en San José
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Tu hijo aprenderá ChatGPT, Midjourney, programación con IA. Desde Escazú, Santa Ana, Curridabat y todo San
              José.
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

        {/* NEIGHBORHOODS */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Atendemos Todo San José</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Clases 100% online en vivo - Tu hijo participa desde cualquier zona
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
                <Users className="mx-auto mb-4 h-12 w-12 text-[#002B7F]" />
                <h3 className="mb-2 text-xl font-bold">Grupos de 5 Niños</h3>
                <p className="text-muted-foreground">Atención personalizada, no clases masivas</p>
              </div>
              <div className="rounded-2xl bg-card p-6 text-center">
                <Clock className="mx-auto mb-4 h-12 w-12 text-[#002B7F]" />
                <h3 className="mb-2 text-xl font-bold">Horario Costa Rica</h3>
                <p className="text-muted-foreground">GMT-6, después del cole o fines de semana</p>
              </div>
              <div className="rounded-2xl bg-card p-6 text-center">
                <Shield className="mx-auto mb-4 h-12 w-12 text-[#002B7F]" />
                <h3 className="mb-2 text-xl font-bold">Garantía 10 Días</h3>
                <p className="text-muted-foreground">Devolución completa sin preguntas</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Familias de San José Opinan</h2>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  name: "María Fernanda Castro",
                  location: "Escazú",
                  text: "Mi hijo Lucas (10 años) creó su primera app. ¡Pura vida! Los profes son tuanis y muy dedicados. Los grupos pequeños hacen toda la diferencia.",
                },
                {
                  name: "Carlos Solano",
                  location: "Santa Ana",
                  text: "Como empresario tech sé que la IA es el futuro. Mi hija está aprendiendo habilidades que le servirán toda la vida. Muy mae recomendado.",
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
            <h2 className="mb-8 text-center text-2xl font-bold">Más Información sobre IA para Niños en Costa Rica</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/cr/cursos-ia-ninos-costa-rica"
                className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
              >
                Cursos IA Niños Costa Rica
              </Link>
              <Link
                href="/cr"
                className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
              >
                Todas las Provincias
              </Link>
              <Link
                href="/cr/blog/cursos-inteligencia-artificial-ninos-costa-rica-guia"
                className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
              >
                Guía Completa
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#002B7F] to-[#001a4d] py-20 md:py-28">
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
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#002B7F]"
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
