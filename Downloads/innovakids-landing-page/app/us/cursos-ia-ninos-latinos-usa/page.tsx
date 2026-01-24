import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Users, Clock, Shield, Star, CheckCircle, Zap, Target, Globe } from "lucide-react"
import { generateHreflangs } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "Cursos de IA para Niños Latinos en USA 2026 | En Español | InnovaKids 🇺🇸",
  description:
    "Curso de inteligencia artificial en español para niños latinos en Estados Unidos. 8-14 años. ChatGPT, Midjourney, apps. 10 clases, grupos de máx 5 niños. Miami, LA, Houston, NYC.",
  keywords:
    "cursos de ia para niños en español usa, clases inteligencia artificial niños latinos, curso ia niños miami, programación ia niños houston, clases ia español los angeles, innovakids usa",
  alternates: {
    canonical: "https://www.innovakidslatam.com/us/cursos-ia-ninos-latinos-usa",
    languages: generateHreflangs("sales"),
  },
  openGraph: {
    title: "Cursos de IA para Niños Latinos en USA | En Español | InnovaKids",
    description:
      "Curso de inteligencia artificial en español para niños latinos 8-14 años. ChatGPT, Midjourney, apps. 10 clases prácticas. Evaluación gratuita.",
    url: "https://www.innovakidslatam.com/us/cursos-ia-ninos-latinos-usa",
    locale: "es_US",
    type: "website",
    images: [
      {
        url: "https://www.innovakidslatam.com/og-usa-latinos.jpg",
        width: 1200,
        height: 630,
        alt: "Cursos de IA para Niños Latinos en USA - InnovaKids",
      },
    ],
  },
}

export default function CursosIANinosLatinosUSA() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent(
    "Hola! Vivo en USA y me interesa el curso de IA en español para mi hijo. Quisiera agendar una evaluación gratuita.",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO SECTION USA LATINOS */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#002868] via-[#BF0A30] to-[#FFFFFF] py-24 md:py-32">
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <span className="text-2xl">🇺🇸</span>
              <span className="font-medium">Para Latinos en USA • 100% en Español</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Cursos de Inteligencia Artificial en Español para Niños Latinos en USA
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Tu hijo aprenderá IA sin perder su español. Clases 100% en castellano con horarios USA. Edad: 8-14 años.
            </p>

            {/* Stats */}
            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-4 gap-4">
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
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold md:text-4xl">100%</div>
                <div className="text-sm text-white/80">En Español</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#002868] shadow-2xl transition-all hover:scale-105 hover:shadow-white/25"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#002868]"
              >
                Consultar por WhatsApp
              </Link>
            </div>

            <p className="mt-4 text-sm text-white/70">Sin compromiso • Cupos limitados • Horarios EST, CST, PST</p>
          </div>
        </section>

        {/* WHY SPANISH IA FOR LATINOS */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#002868]/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <Globe className="mx-auto mb-6 h-16 w-16 text-[#BF0A30]" />
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">¿Por Qué Aprender IA en Español?</h2>
              <p className="mb-12 text-lg text-muted-foreground">
                Tu hijo vive en USA pero el español es parte de su identidad. Nuestro curso combina lo mejor de dos
                mundos: tecnología de vanguardia + preservación del idioma y cultura hispana.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-card p-8 text-center border-2 border-[#002868]/10">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#002868]/10">
                  <span className="text-4xl">🧠</span>
                </div>
                <h3 className="mb-3 text-xl font-bold">Bilingüismo = Ventaja</h3>
                <p className="text-muted-foreground">
                  Los niños bilingües tienen mayor flexibilidad cognitiva. Aprender IA en español refuerza ambos idiomas
                  y les da ventaja competitiva.
                </p>
              </div>

              <div className="rounded-2xl bg-card p-8 text-center border-2 border-[#BF0A30]/10">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#BF0A30]/10">
                  <span className="text-4xl">🏠</span>
                </div>
                <h3 className="mb-3 text-xl font-bold">Conexión Familiar</h3>
                <p className="text-muted-foreground">
                  Los abuelos pueden participar, los padres pueden ayudar. Toda la familia se involucra cuando las
                  clases son en español.
                </p>
              </div>

              <div className="rounded-2xl bg-card p-8 text-center border-2 border-[#002868]/10">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#002868]/10">
                  <span className="text-4xl">🌎</span>
                </div>
                <h3 className="mb-3 text-xl font-bold">Mercado Global</h3>
                <p className="text-muted-foreground">
                  500+ millones hablan español. Un niño latino que domina IA en inglés Y español tiene el doble de
                  oportunidades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KEY BENEFITS */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              ¿Por Qué Familias Latinas en USA Eligen InnovaKids?
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              El único programa de IA en español diseñado para latinos en Estados Unidos
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-card/50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#BF0A30]/20">
                  <Users className="h-8 w-8 text-[#002868]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Grupos de Máximo 5 Niños</h3>
                <p className="text-muted-foreground">
                  Atención 100% personalizada. Tu hijo no será uno más en una clase masiva.
                </p>
              </div>

              <div className="rounded-2xl bg-card/50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#BF0A30]/20">
                  <Clock className="h-8 w-8 text-[#002868]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Horarios USA</h3>
                <p className="text-muted-foreground">
                  Clases después del school. Horarios EST, CST y PST disponibles para todas las zonas de USA.
                </p>
              </div>

              <div className="rounded-2xl bg-card/50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#BF0A30]/20">
                  <Shield className="h-8 w-8 text-[#002868]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Garantía 10 Días</h3>
                <p className="text-muted-foreground">
                  Si no estás 100% satisfecho, te devolvemos tu dinero. Sin preguntas.
                </p>
              </div>

              <div className="rounded-2xl bg-card/50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#BF0A30]/20">
                  <Zap className="h-8 w-8 text-[#002868]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">100% Online en Vivo</h3>
                <p className="text-muted-foreground">
                  Desde cualquier ciudad de USA: Miami, LA, Houston, NYC, Chicago, Dallas, Phoenix y más.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CITIES */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">Niños Latinos de Todo USA</h2>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {[
                "Miami",
                "Los Angeles",
                "Houston",
                "New York",
                "Chicago",
                "San Antonio",
                "Phoenix",
                "Dallas",
                "San Diego",
                "Austin",
                "El Paso",
                "San Jose",
                "Denver",
                "Orlando",
                "Tampa",
                "Las Vegas",
                "Albuquerque",
                "Tucson",
                "Fresno",
                "Sacramento",
              ].map((city) => (
                <span key={city} className="rounded-full bg-card px-4 py-2">
                  📍 {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT THEY'LL LEARN */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">¿Qué Aprenderá Tu Hijo en 10 Clases?</h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Proyectos reales que podrá mostrar con orgullo - todo 100% en español
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "📚",
                  title: "Comics con IA",
                  desc: "Crearán historias ilustradas usando ChatGPT y Midjourney",
                  tools: "ChatGPT, Midjourney, Canva",
                },
                {
                  icon: "🎵",
                  title: "Música Original",
                  desc: "Compondrán canciones en español e inglés con Suno AI",
                  tools: "Suno AI, udio.com",
                },
                {
                  icon: "🎬",
                  title: "Videos Profesionales",
                  desc: "Editarán videos con efectos especiales usando IA",
                  tools: "Runway, Descript, CapCut",
                },
                {
                  icon: "📱",
                  title: "Apps Funcionales",
                  desc: "Programarán aplicaciones reales bilingües con IA",
                  tools: "Cursor, Replit, Bolt.new",
                },
                {
                  icon: "🤖",
                  title: "Chatbots Inteligentes",
                  desc: "Construirán asistentes virtuales que hablan español",
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
        <section className="py-20 md:py-28 bg-muted/30" id="precio">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Inversión en el Futuro de Tu Hijo</h2>
            <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
              Programa completo de 10 clases en vivo con grupos de máximo 5 niños - 100% en español
            </p>

            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#BF0A30]/10 border border-[#BF0A30]/30 px-6 py-3">
              <span className="text-[#BF0A30] font-bold">Próximo curso: 16 de Febrero 2026</span>
            </div>

            <div className="mx-auto max-w-md rounded-3xl bg-gradient-to-br from-[#002868] to-[#001744] p-8 text-white shadow-2xl">
              <div className="mb-2 text-sm font-medium text-[#BF0A30]">PROGRAMA COMPLETO EN ESPAÑOL</div>
              <div className="mb-2 text-lg line-through text-white/60">$497 USD</div>
              <div className="mb-6">
                <span className="text-5xl font-bold">$197</span>
                <span className="text-xl"> USD</span>
                <span className="ml-2 text-sm bg-[#BF0A30] px-2 py-1 rounded">60% OFF</span>
              </div>

              <ul className="mb-8 space-y-3 text-left">
                {[
                  "10 clases en vivo (90 min c/u)",
                  "100% en español",
                  "Grupos de máximo 5 niños",
                  "Horarios USA (EST, CST, PST)",
                  "10+ herramientas de IA profesionales",
                  "Proyectos reales publicables",
                  "Certificado de finalización",
                  "Soporte por WhatsApp",
                  "Garantía de 10 días",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 shrink-0 text-[#BF0A30]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={calendlyLink}
                target="_blank"
                className="mb-4 block w-full rounded-full bg-[#BF0A30] py-4 text-center text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
              >
                Agendar Evaluación Gratuita
              </Link>

              <p className="text-sm text-white/70">Pago único con tarjeta, PayPal, Zelle o Venmo</p>
            </div>

            <div className="mt-8 mx-auto max-w-md rounded-2xl bg-card/50 border border-[#BF0A30]/30 p-6">
              <div className="text-[#BF0A30] font-bold mb-2">🔥 EARLY BIRD - Primeros 10 inscritos</div>
              <div className="text-3xl font-bold text-white">
                $197 USD <span className="text-lg text-muted-foreground">(60% OFF)</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Asegura tu cupo con precio preferencial</p>
            </div>

            {/* Payment Methods */}
            <div className="mt-12">
              <p className="mb-4 text-sm text-muted-foreground">Métodos de pago aceptados:</p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
                <span className="rounded-lg bg-card px-4 py-2">💳 Credit/Debit Card</span>
                <span className="rounded-lg bg-card px-4 py-2">🌐 PayPal</span>
                <span className="rounded-lg bg-card px-4 py-2">📱 Zelle</span>
                <span className="rounded-lg bg-card px-4 py-2">💸 Venmo</span>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Lo Que Dicen Familias Latinas en USA</h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Testimonios reales de familias hispanas en Miami, Los Angeles, Houston y más
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "María García",
                  location: "Miami, Florida",
                  child: "Mamá de Sebastián (11 años)",
                  text: "Buscaba algo en español para que mi hijo no perdiera el idioma. InnovaKids fue perfecto. Sebastián ahora crea apps y habla con sus abuelos en Cuba sobre lo que aprende.",
                },
                {
                  name: "Roberto Hernández",
                  location: "Los Angeles, California",
                  child: "Papá de Valentina (12 años)",
                  text: "En el school todo es en inglés. Este curso le permite a mi hija practicar español mientras aprende tecnología del futuro. Los profesores son excelentes.",
                },
                {
                  name: "Ana Martínez",
                  location: "Houston, Texas",
                  child: "Mamá de Diego (9 años)",
                  text: "Diego no quería hablar español, le daba pena. Ahora está orgulloso porque puede crear cosas increíbles con IA en su idioma. Gracias InnovaKids!",
                },
              ].map((testimonial, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <div className="mb-4 flex text-[#BF0A30]">
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
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Preguntas Frecuentes de Familias Latinas en USA
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Resolvemos tus dudas antes de inscribir
            </p>

            <div className="mx-auto max-w-3xl space-y-6">
              {[
                {
                  q: "¿Las clases son 100% en español?",
                  a: "Sí. Todas las clases son completamente en español. Los profesores son hispanohablantes nativos. Es perfecto para niños latinos que quieren aprender tecnología sin perder su idioma.",
                },
                {
                  q: "¿Los horarios funcionan para USA?",
                  a: "Sí. Tenemos horarios para todas las zonas horarias de Estados Unidos: Eastern (EST), Central (CST), Mountain (MST) y Pacific (PST). Las clases son después del school.",
                },
                {
                  q: "¿Mi hijo necesita saber español perfecto?",
                  a: "No. Aceptamos niños con cualquier nivel de español, desde heritage speakers hasta niños que están aprendiendo. Las clases ayudan a reforzar el idioma mientras aprenden IA.",
                },
                {
                  q: "¿Cuántos niños hay por clase?",
                  a: "Máximo 5 niños por grupo. Esto garantiza atención 100% personalizada. Tu hijo no será uno más en una clase masiva.",
                },
                {
                  q: "¿Qué pasa si no me gusta el curso?",
                  a: "Tienes garantía de 10 días. Si no estás 100% satisfecho por cualquier razón, te devolvemos tu dinero completo sin preguntas.",
                },
                {
                  q: "¿Cómo puedo pagar desde USA?",
                  a: "Aceptamos todas las formas de pago de USA: Credit/Debit Card, PayPal, Zelle y Venmo. El precio es $197 USD.",
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

        {/* INTERNAL LINKS */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">También Disponible en Latinoamérica y España</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/mx/cursos-ia-ninos-mexico"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                🇲🇽 México
              </Link>
              <Link
                href="/co/cursos-ia-ninos-colombia"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                🇨🇴 Colombia
              </Link>
              <Link
                href="/ar/cursos-ia-chicos-argentina"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                🇦🇷 Argentina
              </Link>
              <Link
                href="/pe/cursos-ia-ninos-peru"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                🇵🇪 Perú
              </Link>
              <Link
                href="/cl/cursos-ia-ninos-chile"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                🇨🇱 Chile
              </Link>
              <Link
                href="/es/cursos-ia-ninos-espana"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                🇪🇸 España
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#002868] to-[#001744] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Dale a Tu Hijo la Ventaja del Bilingüismo + IA</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              Tecnología del futuro + preservación del español. La combinación perfecta para niños latinos en USA.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#002868] shadow-2xl transition-all hover:scale-105"
              >
                <Target className="h-5 w-5" />
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

        {/* SCHEMA MARKUP */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Curso de Inteligencia Artificial para Niños Latinos en USA",
              description:
                "Programa de 10 clases en vivo 100% en español para niños latinos de 8-14 años en Estados Unidos. Aprenden ChatGPT, Midjourney, creación de apps y más.",
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
              courseMode: "online",
              educationalLevel: "beginner",
              inLanguage: "es",
              availableLanguage: "Spanish",
              teaches: ["Inteligencia Artificial", "ChatGPT", "Midjourney", "Programación", "Creación de Apps"],
            }),
          }}
        />
      </main>
    </>
  )
}
