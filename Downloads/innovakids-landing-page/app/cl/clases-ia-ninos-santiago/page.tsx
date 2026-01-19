import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MapPin, Star, CheckCircle, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Clases de IA para Niños en Santiago 2026 | InnovaKids 🇨🇱",
  description:
    "Clases de inteligencia artificial para niños 8-14 años en Santiago. Las Condes, Providencia, Vitacura, Ñuñoa. 10 clases, máx 5 niños. Evaluación gratis.",
  keywords:
    "clases ia niños santiago, curso inteligencia artificial las condes, ia para niños providencia, clases programación vitacura, innovakids santiago",
  alternates: {
    canonical: "https://www.innovakidslatam.com/cl/clases-ia-ninos-santiago",
  },
}

export default function ClasesIANinosSantiago() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Me interesa el curso de IA para niños en Santiago.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  const comunas = [
    "Las Condes",
    "Providencia",
    "Vitacura",
    "Ñuñoa",
    "La Reina",
    "Lo Barnechea",
    "Peñalolén",
    "Maipú",
    "Puente Alto",
    "La Florida",
    "San Miguel",
    "Macul",
    "La Cisterna",
    "El Bosque",
    "Santiago Centro",
    "Recoleta",
    "Independencia",
    "Quilicura",
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#D52B1E] via-[#0039A6] to-[#FFFFFF] py-24 md:py-32">
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">Santiago, Chile</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Clases de Inteligencia Artificial para Niños en Santiago
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Tu hijo aprenderá a crear con IA desde Las Condes, Providencia, Vitacura, Ñuñoa y todas las comunas de
              Santiago. 100% online en vivo.
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
                <div className="text-3xl font-bold md:text-4xl">10</div>
                <div className="text-sm text-white/80">Días garantía</div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#0039A6] shadow-2xl transition-all hover:scale-105"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#0039A6]"
              >
                Consultar por WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* COMUNAS SANTIAGO */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Disponible en Todas las Comunas de Santiago
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Clases 100% online en vivo - Participa desde cualquier comuna
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {comunas.map((comuna, i) => (
                <span
                  key={i}
                  className="rounded-full bg-card px-4 py-2 text-sm transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  📍 {comuna}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIOS SANTIAGO */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">Lo Que Dicen Familias de Santiago</h2>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Francisca Muñoz",
                  location: "Las Condes",
                  child: "Mamá de Tomás (11 años)",
                  text: "Tomás creó su primera app en 4 semanas. Como ingeniera quedé impresionada con el nivel. Los profes son muy secos y el contenido está súper actualizado.",
                },
                {
                  name: "Rodrigo Valenzuela",
                  location: "Providencia",
                  child: "Papá de Catalina (12 años)",
                  text: "La Cata pasaba todo el día en TikTok. Ahora usa IA para crear sus propios videos y hasta diseñó stickers para vender. InnovaKids transformó su pasión.",
                },
                {
                  name: "Carolina Sepúlveda",
                  location: "Ñuñoa",
                  child: "Mamá de Matías (9 años)",
                  text: "Como profe pensé que sería muy técnico para el Mati. Me equivoqué. La metodología es perfecta para su edad. Aprende creando, jugando.",
                },
              ].map((testimonial, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <div className="mb-4 flex text-[#D52B1E]">
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
        <section className="py-20 md:py-28" id="precio">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Inversión para Familias de Santiago</h2>

            <div className="mx-auto max-w-md rounded-3xl bg-gradient-to-br from-[#0039A6] to-[#001d53] p-8 text-white shadow-2xl">
              <div className="mb-2 text-sm font-medium text-[#D52B1E]">PROGRAMA COMPLETO</div>
              <div className="mb-6">
                <span className="text-5xl font-bold">$197</span>
                <span className="text-xl"> USD</span>
              </div>

              <ul className="mb-8 space-y-3 text-left">
                {[
                  "10 clases en vivo (90 min c/u)",
                  "Grupos de máximo 5 niños",
                  "10+ herramientas de IA profesionales",
                  "Proyectos reales publicables",
                  "Certificado de finalización",
                  "Soporte por WhatsApp",
                  "Garantía de 10 días",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 shrink-0 text-[#D52B1E]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={calendlyLink}
                target="_blank"
                className="mb-4 block w-full rounded-full bg-[#D52B1E] py-4 text-center text-lg font-bold text-white transition-all hover:scale-105"
              >
                Agendar Evaluación Gratuita
              </Link>
            </div>

            <div className="mt-12">
              <p className="mb-4 text-sm text-muted-foreground">Métodos de pago:</p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
                <span className="rounded-lg bg-card px-4 py-2">💳 Tarjeta</span>
                <span className="rounded-lg bg-card px-4 py-2">🏦 Transferencia</span>
                <span className="rounded-lg bg-card px-4 py-2">📱 Mercado Pago</span>
                <span className="rounded-lg bg-card px-4 py-2">🌐 PayPal</span>
              </div>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">Explora Más</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/cl/cursos-ia-ninos-chile"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Cursos IA Chile
              </Link>
              <Link
                href="/cl"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Todas las Ciudades
              </Link>
              <Link
                href="/cl/blog/cursos-inteligencia-artificial-ninos-chile-guia"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Guía Completa
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-gradient-to-br from-[#0039A6] to-[#001d53] py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Niños de Santiago Ya Están Creando con IA</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              Familias de Las Condes, Providencia, Vitacura y toda la Región Metropolitana confían en InnovaKids.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-[#D52B1E] px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105"
              >
                Agendar Evaluación Gratuita
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#0039A6]"
              >
                Consultar por WhatsApp
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
