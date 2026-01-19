import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Users, Clock, Shield, Star, CheckCircle, Target, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Clases de IA para Niños en Miami 2026 | En Español | InnovaKids 🌴",
  description:
    "Clases de inteligencia artificial en español para niños latinos en Miami, Florida. Doral, Hialeah, Kendall, Brickell. 10 clases, grupos de 5 niños. Evaluación gratis.",
  keywords:
    "clases ia niños miami, cursos inteligencia artificial niños doral, curso ia niños hialeah, clases ia español miami, programación niños kendall, innovakids miami florida",
  alternates: {
    canonical: "https://www.innovakidslatam.com/us/clases-ia-ninos-miami",
  },
}

export default function ClasesIANinosMiami() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent(
    "Hola! Vivo en Miami y me interesa el curso de IA en español para mi hijo.",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  const neighborhoods = [
    "Doral",
    "Hialeah",
    "Kendall",
    "Brickell",
    "Coral Gables",
    "Miami Beach",
    "Homestead",
    "Aventura",
    "Weston",
    "Pembroke Pines",
    "Hollywood",
    "Fort Lauderdale",
    "Miramar",
    "Sunrise",
    "Plantation",
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#FF6B35] via-[#004E89] to-[#1A936F] py-24 md:py-32">
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <span className="text-2xl">🌴</span>
              <span className="font-medium">Miami, Florida • 100% en Español</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Clases de Inteligencia Artificial para Niños en Miami
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Tu hijo aprenderá IA en español sin salir de Miami. Doral, Hialeah, Kendall, Brickell y todo South
              Florida.
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
                <div className="text-3xl font-bold md:text-4xl">100%</div>
                <div className="text-sm text-white/80">En Español</div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#004E89] shadow-2xl transition-all hover:scale-105"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#004E89]"
              >
                Consultar por WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* NEIGHBORHOODS */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">Niños de Todo Miami-Dade y Broward</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.map((area) => (
                <span key={area} className="inline-flex items-center gap-1 rounded-full bg-card px-4 py-2 text-sm">
                  <MapPin className="h-3 w-3 text-[#FF6B35]" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* WHY MIAMI PARENTS CHOOSE US */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold">¿Por Qué Familias de Miami Eligen InnovaKids?</h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Somos el programa de IA en español preferido por familias latinas en South Florida
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-card/50 p-6 text-center">
                <Users className="mx-auto mb-4 h-10 w-10 text-[#FF6B35]" />
                <h3 className="mb-2 font-bold">Máximo 5 Niños</h3>
                <p className="text-sm text-muted-foreground">Atención 100% personalizada</p>
              </div>
              <div className="rounded-2xl bg-card/50 p-6 text-center">
                <Clock className="mx-auto mb-4 h-10 w-10 text-[#FF6B35]" />
                <h3 className="mb-2 font-bold">Horarios EST</h3>
                <p className="text-sm text-muted-foreground">Después del school</p>
              </div>
              <div className="rounded-2xl bg-card/50 p-6 text-center">
                <Shield className="mx-auto mb-4 h-10 w-10 text-[#FF6B35]" />
                <h3 className="mb-2 font-bold">Garantía 10 Días</h3>
                <p className="text-sm text-muted-foreground">Devolución sin preguntas</p>
              </div>
              <div className="rounded-2xl bg-card/50 p-6 text-center">
                <span className="mx-auto mb-4 block text-4xl">🌴</span>
                <h3 className="mb-2 font-bold">100% en Español</h3>
                <p className="text-sm text-muted-foreground">Preserva el idioma</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS MIAMI */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Lo Que Dicen Familias de Miami</h2>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Carolina Rodríguez",
                  location: "Doral",
                  child: "Mamá de Santiago (10 años)",
                  text: "En Doral hay muchos latinos pero las clases de tech son en inglés. InnovaKids le permite a mi hijo aprender IA sin perder el español. Los abuelos pueden ayudarlo con la tarea!",
                },
                {
                  name: "José Martínez",
                  location: "Hialeah",
                  child: "Papá de Isabella (12 años)",
                  text: "Mi hija pasaba horas en TikTok. Ahora usa IA para crear contenido educativo en español. Hasta empezó a enseñarle a su abuela a usar ChatGPT.",
                },
                {
                  name: "Lucía Fernández",
                  location: "Kendall",
                  child: "Mamá de Mateo (9 años)",
                  text: "Buscaba algo en español que no fuera boring. Mateo ama las clases, creó su primera app y ahora quiere ser programador. El profesor es excelente.",
                },
              ].map((testimonial, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <div className="mb-4 flex text-[#FF6B35]">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="mb-6 text-muted-foreground">&ldquo;{testimonial.text}&rdquo;</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.child}</div>
                    <div className="text-sm text-primary">📍 {testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-20" id="precio">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Inversión: $197 USD</h2>
            <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
              Programa completo de 10 clases en vivo • 100% en español • Grupos de máximo 5 niños
            </p>

            <div className="mx-auto max-w-md rounded-3xl bg-gradient-to-br from-[#004E89] to-[#002d52] p-8 text-white shadow-2xl">
              <div className="mb-6">
                <span className="text-5xl font-bold">$197</span>
                <span className="text-xl"> USD</span>
              </div>

              <ul className="mb-8 space-y-3 text-left">
                {[
                  "10 clases en vivo (90 min c/u)",
                  "100% en español",
                  "Grupos de máximo 5 niños",
                  "Horarios Eastern Time",
                  "Garantía de 10 días",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 shrink-0 text-[#FF6B35]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={calendlyLink}
                target="_blank"
                className="mb-4 block w-full rounded-full bg-[#FF6B35] py-4 text-center text-lg font-bold transition-all hover:scale-105"
              >
                Agendar Evaluación Gratuita
              </Link>
            </div>

            <div className="mt-8">
              <p className="text-sm text-muted-foreground">Métodos de pago: Credit/Debit Card, PayPal, Zelle, Venmo</p>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">Más Información</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/us/cursos-ia-ninos-latinos-usa"
                className="rounded-full bg-card px-6 py-3 hover:bg-primary hover:text-primary-foreground"
              >
                🇺🇸 Programa USA Completo
              </Link>
              <Link
                href="/us"
                className="rounded-full bg-card px-6 py-3 hover:bg-primary hover:text-primary-foreground"
              >
                📍 Otras Ciudades USA
              </Link>
              <Link
                href="/us/blog/cursos-inteligencia-artificial-ninos-latinos-usa-guia"
                className="rounded-full bg-card px-6 py-3 hover:bg-primary hover:text-primary-foreground"
              >
                📚 Guía para Padres
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#004E89] to-[#002d52] py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-6 text-3xl font-bold">¿Listo para Inscribir a Tu Hijo en Miami?</h2>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="rounded-full bg-white px-8 py-4 font-bold text-[#004E89] hover:scale-105"
              >
                Agendar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="rounded-full border-2 border-white px-8 py-4 font-bold hover:bg-white hover:text-[#004E89]"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Clases de IA para Niños en Miami",
              description:
                "Clases de inteligencia artificial en español para niños latinos en Miami. 10 clases, grupos de 5 niños.",
              provider: { "@type": "Organization", name: "InnovaKids" },
              areaServed: { "@type": "City", name: "Miami", addressRegion: "FL", addressCountry: "US" },
              offers: { "@type": "Offer", price: "197", priceCurrency: "USD" },
              inLanguage: "es",
            }),
          }}
        />
      </main>
    </>
  )
}
