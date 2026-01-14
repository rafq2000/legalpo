import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Users, Clock, Shield, Star, CheckCircle, Zap, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Cursos de IA para Niños España 2026 | Evaluación Gratis | InnovaKids 🇪🇸",
  description:
    "Curso de inteligencia artificial para niños 8-14 años en España. Aprende ChatGPT, Midjourney, crea apps. 10 clases, grupos de máx 5 niños. Evaluación gratis.",
  keywords:
    "cursos de ia para niños españa, clases inteligencia artificial madrid, curso ia niños barcelona, programación ia niños valencia, innovakids españa",
  alternates: {
    canonical: "https://www.innovakidslatam.com/es/cursos-ia-ninos-espana",
    languages: {
      "es-ES": "https://www.innovakidslatam.com/es/cursos-ia-ninos-espana",
      "es-MX": "https://www.innovakidslatam.com/mx/cursos-ia-ninos-mexico",
      "es-CO": "https://www.innovakidslatam.com/co/cursos-ia-ninos-colombia",
      "es-AR": "https://www.innovakidslatam.com/ar/cursos-ia-chicos-argentina",
      "es-PE": "https://www.innovakidslatam.com/pe/cursos-ia-ninos-peru",
      "es-CL": "https://www.innovakidslatam.com",
    },
  },
  openGraph: {
    title: "Cursos de IA para Niños en España | InnovaKids",
    description:
      "Curso de inteligencia artificial para niños 8-14 años. ChatGPT, Midjourney, apps. 10 clases prácticas. Evaluación gratuita.",
    url: "https://www.innovakidslatam.com/es/cursos-ia-ninos-espana",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://www.innovakidslatam.com/og-espana.jpg",
        width: 1200,
        height: 630,
        alt: "Cursos de IA para Niños en España - InnovaKids",
      },
    ],
  },
}

export default function CursosIANinosEspana() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Me interesa el curso de IA para niños en España. Me gustaría agendar una evaluación gratuita.",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO SECTION ESPAÑA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#C60B1E] via-[#FFC400] to-[#C60B1E] py-24 md:py-32">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <span className="text-2xl">🇪🇸</span>
              <span className="font-medium">España</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Cursos de Inteligencia Artificial para Niños en España
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
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#C60B1E] shadow-2xl transition-all hover:scale-105 hover:shadow-white/25"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#C60B1E]"
              >
                Consultar por WhatsApp
              </Link>
            </div>

            <p className="mt-4 text-sm text-white/70">Sin compromiso • Plazas limitadas • Horarios flexibles</p>
          </div>
        </section>

        {/* KEY BENEFITS */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              ¿Por Qué Familias Españolas Eligen InnovaKids?
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Somos el programa de IA para niños más completo disponible en España
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-card/50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#C60B1E]/20">
                  <Users className="h-8 w-8 text-[#C60B1E]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Grupos de Máximo 5 Niños</h3>
                <p className="text-muted-foreground">
                  Atención 100% personalizada. Tu hijo no será uno más en una clase masiva.
                </p>
              </div>

              <div className="rounded-2xl bg-card/50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#C60B1E]/20">
                  <Clock className="h-8 w-8 text-[#C60B1E]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Horarios Zona España</h3>
                <p className="text-muted-foreground">
                  Horarios diseñados para familias españolas (CET/CEST). Nos adaptamos a tu agenda.
                </p>
              </div>

              <div className="rounded-2xl bg-card/50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#C60B1E]/20">
                  <Shield className="h-8 w-8 text-[#C60B1E]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Garantía 10 Días</h3>
                <p className="text-muted-foreground">
                  Si no estás 100% satisfecho, te devolvemos tu dinero. Sin preguntas.
                </p>
              </div>

              <div className="rounded-2xl bg-card/50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#C60B1E]/20">
                  <Zap className="h-8 w-8 text-[#C60B1E]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">100% Online en Vivo</h3>
                <p className="text-muted-foreground">
                  Clases en vivo desde cualquier ciudad de España. Madrid, Barcelona, Valencia y más.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT THEY'LL LEARN */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">¿Qué Aprenderá Tu Hijo en 10 Clases?</h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Proyectos reales que podrá enseñar con orgullo
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "📚",
                  title: "Cómics con IA",
                  desc: "Crearán historias ilustradas usando ChatGPT y Midjourney",
                  tools: "ChatGPT, Midjourney, Canva",
                },
                {
                  icon: "🎵",
                  title: "Música Original",
                  desc: "Compondrán canciones personalizadas con Suno AI",
                  tools: "Suno AI, udio.com",
                },
                {
                  icon: "🎬",
                  title: "Vídeos Profesionales",
                  desc: "Editarán vídeos con efectos especiales usando IA",
                  tools: "Runway, Descript, CapCut",
                },
                {
                  icon: "📱",
                  title: "Apps Funcionales",
                  desc: "Programarán aplicaciones reales con asistencia de IA",
                  tools: "Cursor, Replit, Bolt.new",
                },
                {
                  icon: "🤖",
                  title: "Chatbots Inteligentes",
                  desc: "Construirán asistentes virtuales personalizados",
                  tools: "Make.com, GPT-4",
                },
                {
                  icon: "🎮",
                  title: "Videojuegos",
                  desc: "Desarrollarán juegos desde cero con ayuda de IA",
                  tools: "GPT-4, Phaser, Replit",
                },
              ].map((project, i) => (
                <div key={i} className="rounded-2xl bg-card p-6 transition-all hover:shadow-lg">
                  <div className="mb-4 text-4xl">{project.icon}</div>
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4 text-muted-foreground">{project.desc}</p>
                  <div className="text-sm text-primary">Herramientas: {project.tools}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-20 md:py-28" id="precio">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Inversión en el Futuro de Tu Hijo</h2>
            <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
              Programa completo de 10 clases en vivo con grupos de máximo 5 niños
            </p>

            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#C60B1E]/10 border border-[#C60B1E]/30 px-6 py-3">
              <span className="text-[#C60B1E] font-bold">Próximo curso: 26 de Enero 2026</span>
            </div>

            <div className="mx-auto max-w-md rounded-3xl bg-gradient-to-br from-[#C60B1E] to-[#8B0000] p-8 text-white shadow-2xl">
              <div className="mb-2 text-sm font-medium text-white/80">PROGRAMA COMPLETO</div>
              <div className="mb-2 text-lg line-through text-white/60">$497 USD</div>
              <div className="mb-6">
                <span className="text-5xl font-bold">$297</span>
                <span className="text-xl"> USD</span>
                <span className="ml-2 text-sm bg-white/20 px-2 py-1 rounded">40% OFF</span>
              </div>

              <ul className="mb-8 space-y-3 text-left">
                {[
                  "10 clases en vivo (90 min c/u)",
                  "Grupos de máximo 5 niños",
                  "10+ herramientas de IA profesionales",
                  "Proyectos reales publicables",
                  "Certificado de finalización",
                  "Soporte por WhatsApp",
                  "Acceso a comunidad exclusiva",
                  "Garantía de 10 días",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 shrink-0 text-white" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={calendlyLink}
                target="_blank"
                className="mb-4 block w-full rounded-full bg-white py-4 text-center text-lg font-bold text-[#C60B1E] transition-all hover:scale-105 hover:shadow-lg"
              >
                Agendar Evaluación Gratuita
              </Link>

              <p className="text-sm text-white/70">O reserva con $50 USD y paga el resto antes de iniciar</p>
            </div>

            <div className="mt-8 mx-auto max-w-md rounded-2xl bg-card/50 border border-[#C60B1E]/30 p-6">
              <div className="text-[#C60B1E] font-bold mb-2">🔥 EARLY BIRD - Primeros 10 inscritos</div>
              <div className="text-3xl font-bold text-white">
                $247 USD <span className="text-lg text-muted-foreground">(50% OFF)</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Ahorra $50 USD adicionales</p>
            </div>

            {/* Payment Methods */}
            <div className="mt-12">
              <p className="mb-4 text-sm text-muted-foreground">Métodos de pago aceptados:</p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
                <span className="rounded-lg bg-card px-4 py-2">💳 Tarjeta de crédito/débito</span>
                <span className="rounded-lg bg-card px-4 py-2">📱 Bizum</span>
                <span className="rounded-lg bg-card px-4 py-2">🏦 Transferencia bancaria</span>
                <span className="rounded-lg bg-card px-4 py-2">🌐 PayPal</span>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Lo Que Dicen Familias Españolas</h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Testimonios reales de padres en Madrid, Barcelona, Valencia y más
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "María García López",
                  location: "Madrid - Chamberí",
                  child: "Madre de Pablo (11 años)",
                  text: "Pablo creó su primera app en 4 semanas. Como ingeniera quedé impresionada con el nivel. Los profesores son muy dedicados y el contenido está muy actualizado.",
                },
                {
                  name: "Jordi Puig i Ferrer",
                  location: "Barcelona - Gràcia",
                  child: "Padre de Martina (12 años)",
                  text: "Martina pasaba todo el día en TikTok. Ahora usa IA para crear sus propios vídeos y hasta diseñó pegatinas para vender. InnovaKids transformó su pasión en habilidad.",
                },
                {
                  name: "Carmen Sánchez Ruiz",
                  location: "Valencia - Ruzafa",
                  child: "Madre de Alejandro (9 años)",
                  text: "Como docente pensé que sería muy técnico para Alejandro. Me equivoqué totalmente. La metodología es perfecta para su edad. Aprende creando y jugando.",
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

        {/* FAQ */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Preguntas Frecuentes de Familias en España
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Resolvemos tus dudas antes de inscribir
            </p>

            <div className="mx-auto max-w-3xl space-y-6">
              {[
                {
                  q: "¿Las clases son presenciales o en línea?",
                  a: "Todas las clases son 100% online en vivo. Tu hijo puede participar desde cualquier ciudad de España: Madrid, Barcelona, Valencia, Sevilla, Bilbao, etc. Solo necesita ordenador e internet.",
                },
                {
                  q: "¿Los horarios son en zona horaria España?",
                  a: "Sí. Todos los horarios están adaptados a la zona horaria de España (CET/CEST). Nos adaptamos a tu agenda, con opciones entre semana después del cole y fines de semana.",
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
                  q: "¿Cómo puedo pagar desde España?",
                  a: "Aceptamos tarjetas de crédito/débito, Bizum, transferencia bancaria y PayPal. El precio es $200 USD (aprox. 185€) que puedes pagar con cualquier método.",
                },
                {
                  q: "¿Tenéis eventos presenciales en España?",
                  a: "Próximamente estaremos organizando talleres y eventos presenciales en las principales ciudades de España. Por ahora todas las clases son 100% online en vivo.",
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
                href="/es/clases-ia-ninos-madrid"
                className="rounded-full bg-muted px-4 py-2 text-sm transition-colors hover:bg-primary hover:text-white"
              >
                Clases IA Madrid
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

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#C60B1E] to-[#8B0000] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Dale a Tu Hijo la Ventaja del Futuro</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              Niños de Madrid, Barcelona, Valencia y toda España ya están creando proyectos increíbles con IA. Tu hijo
              puede ser el siguiente.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#C60B1E] shadow-2xl transition-all hover:scale-105 hover:shadow-white/25"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#C60B1E]"
              >
                Consultar por WhatsApp
              </Link>
            </div>

            <p className="mt-6 text-sm text-white/70">Quedan pocas plazas • Evaluación sin coste</p>
          </div>
        </section>
      </main>
    </>
  )
}
