import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MapPin, Users, Clock, Shield, Star, CheckCircle, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Clases de IA para Niños en Bogotá 2026 | InnovaKids 🏙️",
  description:
    "Clases de inteligencia artificial para niños en Bogotá. Chapinero, Usaquén, Chicó, Zona G. Horarios zona Bogotá, grupos de 5 niños. Evaluación gratis.",
  keywords:
    "clases ia niños bogotá, cursos inteligencia artificial bogotá, innovakids chapinero, educación tech bogotá, programación ia niños bogotá",
  alternates: {
    canonical: "https://www.innovakidslatam.com/co/clases-ia-ninos-bogota",
  },
}

export default function ClasesIANinosBogota() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent(
    "Hola! Soy de Bogotá y me interesa el curso de IA para niños. Quisiera agendar una evaluación gratuita.",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  const neighborhoods = [
    {
      name: "Chapinero",
      testimonial: "Santiago tiene 10 años y ya creó su primera app para organizar tareas del cole.",
    },
    { name: "Usaquén", testimonial: "Mariana es súper creativa y ahora usa IA para crear arte y música." },
    {
      name: "Chicó",
      testimonial: "Como ingeniero pensé que sabría ayudar a Diego con tecnología. InnovaKids me voló la cabeza parce.",
    },
    { name: "Suba", testimonial: "Emma es tímida y en InnovaKids conoció niñas con sus mismos intereses." },
    { name: "Zona G", testimonial: "Mateo quiere estudiar animación. Su portfolio a los 12 años es impresionante." },
    {
      name: "Teusaquillo",
      testimonial: "Valentina ahora usa IA para todos sus proyectos escolares y le va súper bien.",
    },
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO BOGOTÁ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#FCD116] via-[#003893] to-[#CE1126] py-24 md:py-32">
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Bogotá D.C.</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Clases de Inteligencia Artificial para Niños en Bogotá
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Niños de Chapinero, Usaquén, Chicó, Zona G y toda Bogotá ya están creando con IA. 100% online en vivo con
              horarios adaptados a tu zona.
            </p>

            <div className="mx-auto mt-8 flex flex-wrap justify-center gap-4">
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-sm">
                ✅ Horarios zona Bogotá (GMT-5)
              </span>
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-sm">✅ Grupos máx 5 niños</span>
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-sm">✅ Evaluación GRATIS</span>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#003893] shadow-2xl transition-all hover:scale-105"
              >
                <Target className="h-5 w-5" />
                Reservar Evaluación en Bogotá
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#003893]"
              >
                WhatsApp
              </Link>
            </div>

            <p className="mt-4 text-sm text-white/70">
              📍 Estudiantes de todas las localidades: Usaquén, Chapinero, Santa Fe, Teusaquillo, Suba, Engativá
            </p>
          </div>
        </section>

        {/* WHY BOGOTÁ FAMILIES CHOOSE US */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
              Por Qué Familias Bogotanas Eligen InnovaKids
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Grupos de 5 Niños",
                  desc: "Tu hijo tendrá atención 100% personalizada. No será uno más en una clase masiva.",
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "Horarios para Bogotá",
                  desc: "Horarios diseñados para familias rolos: después del cole (4-7pm) o fines de semana. Zona horaria Bogotá.",
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Garantía 10 Días",
                  desc: "Si no estás 100% satisfecho, te devolvemos tu dinero. Sin preguntas, parce.",
                },
                {
                  icon: <Star className="h-8 w-8" />,
                  title: "Testimonios Bogotá",
                  desc: "Familias de Chapinero, Usaquén, Chicó y más ya confían en nosotros.",
                },
              ].map((reason, i) => (
                <div key={i} className="rounded-2xl bg-card/50 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FCD116]/20 text-[#003893]">
                    {reason.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCHEDULES */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Horarios Disponibles en Bogotá</h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Todos los horarios en zona horaria Bogotá (GMT-5). Nos adaptamos a tu familia.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">⏰ Entre Semana</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>4:00 PM - 5:30 PM</span>
                    <span className="text-sm text-green-500">Disponible</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>5:30 PM - 7:00 PM</span>
                    <span className="text-sm text-orange-500">Pocos cupos</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>7:00 PM - 8:30 PM</span>
                    <span className="text-sm text-green-500">Disponible</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">Perfecto para después del colegio.</p>
              </div>

              <div className="rounded-2xl bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">📅 Sábados</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>9:00 AM - 10:30 AM</span>
                    <span className="text-sm text-green-500">Disponible</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>10:30 AM - 12:00 PM</span>
                    <span className="text-sm text-orange-500">Pocos cupos</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>4:00 PM - 5:30 PM</span>
                    <span className="text-sm text-green-500">Disponible</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">Ideal para fines de semana.</p>
              </div>

              <div className="rounded-2xl bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">☀️ Domingos</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>10:00 AM - 11:30 AM</span>
                    <span className="text-sm text-green-500">Disponible</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>11:30 AM - 1:00 PM</span>
                    <span className="text-sm text-green-500">Disponible</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">Opción relajada para empezar la semana.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground"
              >
                Ver Calendario y Reservar
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS BY NEIGHBORHOOD */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">Lo Que Dicen Familias de Tu Localidad</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {neighborhoods.map((n, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FCD116] px-3 py-1 text-sm font-bold text-[#003893]">
                    📍 {n.name}
                  </div>
                  <p className="text-muted-foreground">&ldquo;{n.testimonial}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UPCOMING EVENTS */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Eventos Presenciales en Bogotá</h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Próximamente estaremos organizando talleres y hackathons presenciales en Bogotá. Por ahora todas las
              clases son 100% online en vivo.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FCD116]/20 px-6 py-3 text-[#003893]">
              <span className="font-bold">Próximamente</span> - Talleres en Chapinero y Chicó
            </div>
          </div>
        </section>

        {/* FAQ BOGOTÁ */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
              Preguntas Frecuentes de Familias en Bogotá
            </h2>

            <div className="mx-auto max-w-3xl space-y-6">
              {[
                {
                  q: "¿Las clases son presenciales en Bogotá?",
                  a: "Las clases son 100% online en vivo. Esto te da flexibilidad de horarios. Próximamente organizaremos talleres presenciales en Chapinero y Chicó donde los niños podrán conocerse.",
                },
                {
                  q: "¿Desde qué localidades tienen estudiantes?",
                  a: "Tenemos estudiantes en todas las localidades de Bogotá: Usaquén, Chapinero, Santa Fe, Teusaquillo, Suba, Kennedy y más. La belleza del online es que todos pueden participar.",
                },
                {
                  q: "¿Los horarios consideran el tráfico de Bogotá?",
                  a: "Sí. Nuestras clases entre semana empiezan a las 4pm (después del cole) o 7pm. Al ser online, cero tiempo perdido en TransMilenio o trancones.",
                },
                {
                  q: "¿Cómo son los métodos de pago?",
                  a: "Aceptamos tarjetas de crédito/débito, PSE, Nequi y PayPal. El precio total del programa es $197 USD.",
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Únete a los Niños Bogotanos que Ya Crean con IA</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              Chapinero, Usaquén, Chicó, Suba, Teusaquillo... Niños de toda Bogotá ya están creando proyectos
              increíbles. Tu hijo puede ser el siguiente.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-[#FCD116] px-8 py-4 text-lg font-bold text-[#003893] shadow-2xl transition-all hover:scale-105"
              >
                <Target className="h-5 w-5" />
                Reservar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#003893]"
              >
                WhatsApp
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
                <CheckCircle className="h-4 w-4" /> $197 USD total
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
              <Link href="/co/cursos-ia-ninos-colombia" className="text-primary hover:underline">
                Cursos IA Niños Colombia
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
            "@type": "LocalBusiness",
            name: "InnovaKids Bogotá",
            url: "https://www.innovakidslatam.com/co/clases-ia-ninos-bogota",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bogotá",
              addressRegion: "Bogotá D.C.",
              addressCountry: "CO",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "287",
            },
          }),
        }}
      />
    </>
  )
}
