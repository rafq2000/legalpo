import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Users, Clock, Shield, Star, CheckCircle, MapPin, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Clases de IA para Niños en Madrid 2026 | Evaluación Gratis | InnovaKids 🇪🇸",
  description:
    "Clases de inteligencia artificial para niños 8-14 años en Madrid. ChatGPT, Midjourney, programación. 10 clases online en vivo, grupos de máx 5 niños.",
  keywords:
    "clases ia niños madrid, curso inteligencia artificial madrid, programación ia niños chamberí, curso ia niños salamanca, innovakids madrid",
  alternates: {
    canonical: "https://www.innovakidslatam.com/es/clases-ia-ninos-madrid",
  },
  openGraph: {
    title: "Clases de IA para Niños en Madrid | InnovaKids",
    description: "Clases de inteligencia artificial para niños 8-14 años. 10 clases online en vivo desde Madrid.",
    url: "https://www.innovakidslatam.com/es/clases-ia-ninos-madrid",
    locale: "es_ES",
  },
}

export default function ClasesIANinosMadrid() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Me interesa el curso de IA para niños en Madrid. Me gustaría agendar una evaluación gratuita.",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  const distritos = [
    "Chamberí",
    "Salamanca",
    "Retiro",
    "Chamartín",
    "Moncloa-Aravaca",
    "Arganzuela",
    "Centro",
    "Tetuán",
    "Fuencarral-El Pardo",
    "Hortaleza",
    "Ciudad Lineal",
    "Villaverde",
    "Carabanchel",
    "Usera",
    "Puente de Vallecas",
    "Moratalaz",
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO MADRID */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#C60B1E] via-[#FFC400] to-[#C60B1E] py-24 md:py-32">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Madrid, España</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Clases de Inteligencia Artificial para Niños en Madrid
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Tu hijo aprenderá a crear con IA desde la primera clase. 100% online en vivo desde cualquier distrito de
              Madrid.
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

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#C60B1E] shadow-2xl transition-all hover:scale-105"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#C60B1E]"
              >
                Consultar por WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* DISTRITOS MADRID */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold">Clases Online para Todos los Distritos de Madrid</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              No importa en qué parte de Madrid vivas. Nuestras clases son 100% online en vivo.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {distritos.map((distrito, i) => (
                <span
                  key={i}
                  className="rounded-full bg-card px-4 py-2 text-sm transition-colors hover:bg-[#C60B1E] hover:text-white"
                >
                  {distrito}
                </span>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              También para familias en: Alcobendas, Pozuelo, Las Rozas, Majadahonda, Getafe, Alcorcón, Leganés...
            </p>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">¿Por Qué Familias Madrileñas Eligen InnovaKids?</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#C60B1E]/20">
                  <Users className="h-8 w-8 text-[#C60B1E]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Grupos Reducidos</h3>
                <p className="text-muted-foreground">Máximo 5 niños por grupo para atención personalizada.</p>
              </div>

              <div className="rounded-2xl bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#C60B1E]/20">
                  <Clock className="h-8 w-8 text-[#C60B1E]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Horarios Flexibles</h3>
                <p className="text-muted-foreground">Después del cole y fines de semana. Nos adaptamos a ti.</p>
              </div>

              <div className="rounded-2xl bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#C60B1E]/20">
                  <Shield className="h-8 w-8 text-[#C60B1E]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Garantía 10 Días</h3>
                <p className="text-muted-foreground">Si no estás satisfecho, te devolvemos tu dinero.</p>
              </div>

              <div className="rounded-2xl bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#C60B1E]/20">
                  <Star className="h-8 w-8 text-[#C60B1E]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">$197 USD Total</h3>
                <p className="text-muted-foreground">Programa completo de 10 clases. Sin costes ocultos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS MADRID */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Lo Que Dicen Familias de Madrid</h2>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "María García",
                  location: "Chamberí",
                  child: "Madre de Pablo (11 años)",
                  text: "Pablo creó su primera app en 4 semanas. Los profesores son fantásticos y el contenido está muy actualizado con las últimas herramientas de IA.",
                },
                {
                  name: "Carlos Rodríguez",
                  location: "Salamanca",
                  child: "Padre de Lucía (10 años)",
                  text: "Lucía estaba enganchada al móvil sin hacer nada productivo. Ahora usa IA para crear sus propias historias y vídeos. Un cambio increíble.",
                },
                {
                  name: "Ana Martínez",
                  location: "Pozuelo de Alarcón",
                  child: "Madre de Diego (12 años)",
                  text: "Como profesora, valoro mucho la metodología. Diego aprende haciendo proyectos reales que puede enseñar. Muy recomendable.",
                },
              ].map((testimonial, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <div className="mb-4 flex text-[#FFC400]">
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

        {/* PRECIO */}
        <section className="bg-muted/30 py-20" id="precio">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-12 text-3xl font-bold">Inversión en el Futuro de Tu Hijo</h2>

            <div className="mx-auto max-w-md rounded-3xl bg-gradient-to-br from-[#C60B1E] to-[#8B0000] p-8 text-white shadow-2xl">
              <div className="mb-2 text-sm font-medium text-white/80">PROGRAMA COMPLETO</div>
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
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={calendlyLink}
                target="_blank"
                className="mb-4 block w-full rounded-full bg-white py-4 text-center text-lg font-bold text-[#C60B1E] transition-all hover:scale-105"
              >
                Agendar Evaluación Gratuita
              </Link>

              <p className="text-sm text-white/70">Evaluación sin coste • Sin compromiso</p>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKING */}
        <section className="border-t py-12">
          <div className="container mx-auto px-4">
            <h3 className="mb-6 text-center text-lg font-semibold">Explora más sobre InnovaKids en España</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/es"
                className="rounded-full bg-muted px-4 py-2 text-sm transition-colors hover:bg-primary hover:text-white"
              >
                Hub España
              </Link>
              <Link
                href="/es/cursos-ia-ninos-espana"
                className="rounded-full bg-muted px-4 py-2 text-sm transition-colors hover:bg-primary hover:text-white"
              >
                Cursos IA España
              </Link>
              <Link
                href="/es/blog/cursos-inteligencia-artificial-ninos-espana-guia"
                className="rounded-full bg-muted px-4 py-2 text-sm transition-colors hover:bg-primary hover:text-white"
              >
                Guía Completa España
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-gradient-to-br from-[#C60B1E] to-[#8B0000] py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">¿Listo para Empezar?</h2>
            <p className="mx-auto mb-10 max-w-2xl text-white/80">
              Niños de toda la Comunidad de Madrid ya están creando proyectos increíbles con IA.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="rounded-full bg-white px-8 py-4 text-lg font-bold text-[#C60B1E] transition-all hover:scale-105"
              >
                Agendar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#C60B1E]"
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
