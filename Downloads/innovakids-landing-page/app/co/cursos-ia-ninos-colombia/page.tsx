import type { Metadata } from "next"
import Link from "next/link"
import { CurriculumSection } from "@/components/curriculum-section"
import { PricingSection } from "@/components/pricing-section"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Users, Clock, Shield, Star, CheckCircle, Zap, Target } from "lucide-react"
import { generateHreflangs } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "Cursos de IA para Niños Colombia 2026 | Evaluación Gratis | InnovaKids 🇨🇴",
  description:
    "Curso de inteligencia artificial para niños 8-14 años en Colombia. Aprende ChatGPT, Midjourney, crea apps. 10 clases, grupos de máx 5 niños. Evaluación gratis.",
  keywords:
    "cursos de ia para niños colombia, clases inteligencia artificial bogotá, curso ia niños medellín, programación ia niños cali, innovakids colombia, curso inteligencia artificial niños, clases online ia niños, escuela de inteligencia artificial para niños, aprender chatgpt para niños, tecnología para niños colombia",
  alternates: {
    canonical: "https://www.innovakidslatam.com/co/cursos-ia-ninos-colombia",
    languages: generateHreflangs("sales"),
  },
  openGraph: {
    title: "Cursos de IA para Niños en Colombia | InnovaKids",
    description:
      "Curso de inteligencia artificial para niños 8-14 años. ChatGPT, Midjourney, apps. 10 clases prácticas. Evaluación gratuita.",
    url: "https://www.innovakidslatam.com/co/cursos-ia-ninos-colombia",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.innovakidslatam.com/og-colombia.jpg",
        width: 1200,
        height: 630,
        alt: "Cursos de IA para Niños en Colombia - InnovaKids",
      },
    ],
  },
}

export default function CursosIANinosColombia() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent(
    "Hola! Me interesa el curso de IA para niños en Colombia. Quisiera agendar una evaluación gratuita.",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO SECTION COLOMBIA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#FCD116] via-[#003893] to-[#CE1126] py-24 md:py-32">
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <span className="text-2xl">🇨🇴</span>
              <span className="font-medium">Colombia</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl px-2">
              Cursos de Inteligencia Artificial para Niños en Colombia
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Tu hijo aprenderá a crear con IA desde la primera clase. ChatGPT, Midjourney, apps y más. Edad: 8-14 años.
            </p>

            {/* Stats */}
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

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#003893] shadow-2xl transition-all hover:scale-105 hover:shadow-white/25"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#003893]"
              >
                Consultar por WhatsApp
              </Link>
            </div>

            <p className="mt-4 text-sm text-white/70">Sin compromiso • Cupos limitados • Horarios flexibles</p>
          </div>
        </section>

        {/* KEY BENEFITS */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              ¿Por Qué Familias Colombianas Eligen InnovaKids?
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Somos el programa de IA para niños más completo de Colombia
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-card/50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FCD116]/20">
                  <Users className="h-8 w-8 text-[#003893]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Grupos de Máximo 5 Niños</h3>
                <p className="text-muted-foreground">
                  Atención 100% personalizada. Tu hijo no será uno más en una clase masiva.
                </p>
              </div>

              <div className="rounded-2xl bg-card/50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FCD116]/20">
                  <Clock className="h-8 w-8 text-[#003893]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Horarios Zona Colombia</h3>
                <p className="text-muted-foreground">
                  Horarios diseñados para familias colombianas (GMT-5). Nos adaptamos a tu agenda.
                </p>
              </div>

              <div className="rounded-2xl bg-card/50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FCD116]/20">
                  <Shield className="h-8 w-8 text-[#003893]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Garantía 10 Días</h3>
                <p className="text-muted-foreground">
                  Si no estás 100% satisfecho, te devolvemos tu dinero. Sin preguntas.
                </p>
              </div>

              <div className="rounded-2xl bg-card/50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FCD116]/20">
                  <Zap className="h-8 w-8 text-[#003893]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">100% Online en Vivo</h3>
                <p className="text-muted-foreground">
                  Clases en vivo desde cualquier ciudad de Colombia. Bogotá, Medellín, Cali y más.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT THEY'LL LEARN */}
        <CurriculumSection />

        {/* PRICING */}
        <PricingSection />

        {/* TESTIMONIALS */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Lo Que Dicen Familias Colombianas</h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Testimonios reales de padres en Bogotá, Medellín, Cali y más
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Carolina Rodríguez",
                  location: "Bogotá - Chapinero",
                  child: "Madre de Santiago (10 años)",
                  text: "Santiago creó su primera app en 4 semanas. Como desarrolladora quedé impresionada con el nivel. Los profes son muy bacanos y el contenido actualizado.",
                },
                {
                  name: "Andrés Gómez",
                  location: "Medellín - El Poblado",
                  child: "Padre de Mariana (12 años)",
                  text: "Mariana pasaba todo el día en TikTok. Ahora usa IA para crear sus propios videos y hasta diseñó stickers para vender. InnovaKids transformó su pasión.",
                },
                {
                  name: "Roberto Martínez",
                  location: "Cali - Norte",
                  child: "Padre de Sofía (9 años)",
                  text: "Como ingeniero pensé que sería muy técnico para Sofía. Me equivoqué. La metodología es perfecta para su edad. Aprende creando, jugando.",
                },
              ].map((testimonial, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <div className="mb-4 flex text-[#FCD116]">
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

        {/* FAQ */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Preguntas Frecuentes de Familias en Colombia
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Resolvemos tus dudas antes de inscribir
            </p>

            <div className="mx-auto max-w-3xl space-y-6">
              {[
                {
                  q: "¿Las clases son presenciales o en línea?",
                  a: "Todas las clases son 100% online en vivo. Tu hijo puede participar desde cualquier ciudad de Colombia: Bogotá, Medellín, Cali, Barranquilla, Cartagena, etc. Solo necesita computador e internet.",
                },
                {
                  q: "¿Los horarios son en zona horaria Colombia?",
                  a: "Sí. Todos los horarios están adaptados a la zona horaria de Colombia (GMT-5). Nos adaptamos a tu agenda, con opciones entre semana después del colegio y fines de semana.",
                },
                {
                  q: "¿Cuántos niños hay por clase?",
                  a: "Máximo 5 niños por grupo. Esto garantiza atención 100% personalizada. Tu hijo no será uno más en una clase masiva de 20 o 30 niños.",
                },
                {
                  q: "¿Qué pasa si no me gusta el curso?",
                  a: "Tienes garantía de 10 días. Si no estás 100% satisfecho por cualquier razón, te devolvemos tu dinero completo sin preguntas.",
                },
                {
                  q: "¿Cuánto cuesta el curso?",
                  a: "El programa completo tiene un valor de $497 USD, pero actualmente tenemos oferta de lanzamiento 2026 por $197 USD (60% de descuento). Incluye 10 clases, portafolio web, todos los bonos y garantía de 10 días. Puedes reservar con solo $50 USD.",
                },
                {
                  q: "¿Tienen eventos presenciales en Colombia?",
                  a: "Próximamente estaremos organizando talleres y eventos presenciales en las principales ciudades de Colombia. Por ahora todas las clases son 100% online en vivo.",
                },
              ].map((faq, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <h3 className="mb-3 text-lg font-bold">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#003893] to-[#001d4a] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Dale a Tu Hijo la Ventaja del Futuro</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              Niños de Bogotá, Medellín, Cali y toda Colombia ya están creando proyectos increíbles con IA. Tu hijo
              puede ser el siguiente.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-[#FCD116] px-8 py-4 text-lg font-bold text-[#003893] shadow-2xl transition-all hover:scale-105"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación Gratuita
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#003893]"
              >
                Consultar por WhatsApp
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Sin compromiso
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Garantía 10 días
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Grupos máx 5 niños
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> $197 USD programa completo
              </span>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="mb-6 text-xl font-bold">Explora más sobre InnovaKids Colombia</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/co" className="text-primary hover:underline">
                InnovaKids Colombia
              </Link>
              <Link href="/co/clases-ia-ninos-bogota" className="text-primary hover:underline">
                Clases en Bogotá
              </Link>
              <Link
                href="/co/blog/cursos-inteligencia-artificial-ninos-colombia-guia"
                className="text-primary hover:underline"
              >
                Guía Completa Cursos IA
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Curso de Inteligencia Artificial para Niños - Colombia",
            description:
              "Curso de IA para niños de 8-14 años en Colombia. 10 clases en vivo, grupos de máximo 5 niños, garantía 10 días.",
            provider: {
              "@type": "Organization",
              name: "InnovaKids",
              url: "https://www.innovakidslatam.com",
            },
            offers: {
              "@type": "Offer",
              price: "197",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "523",
            },
          }),
        }}
      />
    </>
  )
}
