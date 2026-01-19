import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArrowRight, CheckCircle, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Curso de Inteligencia Artificial para Niños en Colombia | InnovaKids 🇨🇴",
  description:
    "El primer curso de IA para niños en Colombia. Clases online en vivo (Bogotá, Medellín, Cali). Transforma el tiempo de pantalla en habilidades de programación y creatividad con IA.",
  alternates: {
    canonical: "https://www.innovakidslatam.com/co",
  },
}

export default function ColombiaHub() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent(
    "Hola! Soy de Colombia y me interesa el programa de InnovaKids para mi hijo/a",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  const cities = [
    {
      name: "Bogotá",
      icon: "🏙️",
      neighborhoods: ["Chapinero", "Usaquén", "Chicó", "Zona G", "Suba"],
      link: "/co/clases-ia-ninos-bogota",
      featured: true,
    },
    {
      name: "Medellín",
      icon: "🏔️",
      neighborhoods: ["El Poblado", "Envigado", "Laureles"],
      link: "/co/cursos-ia-ninos-colombia#inscribirse",
    },
    {
      name: "Cali",
      icon: "🌴",
      neighborhoods: ["Norte de Cali", "Ciudad Jardín"],
      link: "/co/cursos-ia-ninos-colombia#inscribirse",
    },
    {
      name: "Barranquilla",
      icon: "⚓",
      neighborhoods: [],
      link: "/co/cursos-ia-ninos-colombia#inscribirse",
    },
    {
      name: "Cartagena",
      icon: "🏰",
      neighborhoods: [],
      link: "/co/cursos-ia-ninos-colombia#inscribirse",
    },
    {
      name: "Bucaramanga",
      icon: "⛰️",
      neighborhoods: [],
      link: "/co/cursos-ia-ninos-colombia#inscribirse",
    },
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#FCD116] via-[#003893] to-[#CE1126] py-24 md:py-32">
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              InnovaKids Colombia 🇨🇴
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-white/90 md:text-2xl">
              Inteligencia Artificial para Niños en Todo el País
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Niños colombianos de 8-14 años están creando el futuro con IA. Desde comics hasta apps, desde música hasta
              videojuegos. 100% online en vivo.
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
                <div className="text-3xl font-bold md:text-4xl">$197</div>
                <div className="text-sm text-white/80">USD total</div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#003893] shadow-2xl transition-all hover:scale-105"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación Gratis
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#003893]"
              >
                Consultar por WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* WHY INNOVAKIDS COLOMBIA */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">¿Por Qué InnovaKids Lidera en Colombia?</h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              El programa de IA para niños más completo del país
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "🏆",
                  title: "Grupos Ultra Reducidos",
                  desc: "Máximo 5 niños por grupo. Atención 100% personalizada para cada estudiante.",
                },
                {
                  icon: "🇨🇴",
                  title: "Adaptado a Colombia",
                  desc: "Horarios en zona horaria Colombia (GMT-5), métodos de pago locales como PSE y Nequi.",
                },
                {
                  icon: "💻",
                  title: "100% Online en Vivo",
                  desc: "Clases en vivo desde cualquier ciudad. Bogotá, Medellín, Cali, Barranquilla y más.",
                },
                {
                  icon: "🛡️",
                  title: "Garantía 10 Días",
                  desc: "Si no estás satisfecho, te devolvemos tu dinero completo. Sin preguntas.",
                },
              ].map((reason, i) => (
                <div key={i} className="rounded-2xl bg-card/50 p-6 text-center">
                  <div className="mb-4 text-4xl">{reason.icon}</div>
                  <h3 className="mb-2 text-xl font-bold">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CITIES MAP */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">InnovaKids en Todo Colombia</h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Nuestros estudiantes están en todo el país. 100% online en vivo.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cities.map((city, i) => (
                <Link
                  key={i}
                  href={city.link}
                  className={`group rounded-2xl bg-card p-6 transition-all hover:shadow-lg ${city.featured ? "border-2 border-[#FCD116] md:col-span-2 lg:col-span-1" : ""
                    }`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold">
                      {city.icon} {city.name}
                    </h3>
                    {city.featured && (
                      <span className="rounded-full bg-[#FCD116] px-3 py-1 text-xs font-bold text-[#003893]">
                        Popular
                      </span>
                    )}
                  </div>

                  {city.neighborhoods.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {city.neighborhoods.map((n, j) => (
                        <span key={j} className="rounded-full bg-muted px-3 py-1 text-xs">
                          📍 {n}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-primary group-hover:underline">
                    Ver clases <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-card p-6 text-center">
              <h3 className="mb-4 text-xl font-bold">¿Tu ciudad no está listada?</h3>
              <p className="mb-6 text-muted-foreground">
                No hay problema. Nuestras clases son 100% online en vivo. Puedes unirte desde cualquier lugar de
                Colombia con internet.
              </p>
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground"
              >
                Agendar Evaluación Gratis
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS BY CITY */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">Lo Que Dicen Familias de Todo Colombia</h2>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  location: "Bogotá - Chapinero",
                  text: "Santiago creó su primera app en 4 semanas. Los profes son muy bacanos y conoció peladitos con sus mismos gustos.",
                  author: "Carolina R., madre de Santiago (10 años)",
                },
                {
                  location: "Medellín - El Poblado",
                  text: "Mariana pasó de ver TikTok a CREAR contenido profesional. Ahora tiene su canal y está monetizado.",
                  author: "Andrés G., padre de Mariana (12 años)",
                },
                {
                  location: "Cali - Norte",
                  text: "Como ingeniero pensé que sería muy técnico. Me equivoqué. La metodología es perfecta para Sofía de 9 años.",
                  author: "Roberto M., padre de Sofía (9 años)",
                },
              ].map((testimonial, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <div className="mb-4 text-sm font-medium text-primary">📍 {testimonial.location}</div>
                  <p className="mb-6 text-muted-foreground">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="text-sm font-medium">— {testimonial.author}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UPCOMING EVENTS */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Eventos Presenciales en Colombia</h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Próximamente estaremos organizando talleres y hackathons presenciales en las principales ciudades de
              Colombia. Por ahora todas las clases son 100% online en vivo.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FCD116]/20 px-6 py-3 text-[#003893]">
              <span className="font-bold">Próximamente</span> - Eventos en Bogotá, Medellín y Cali
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#003893] to-[#001d4a] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Únete a la Comunidad InnovaKids Colombia</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              Familias colombianas ya confiaron en nosotros. Tu hijo puede ser el siguiente en crear proyectos
              increíbles con IA.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-[#FCD116] px-8 py-4 text-lg font-bold text-[#003893] shadow-2xl transition-all hover:scale-105"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación Gratis
              </Link>
              <Link
                href="/co/cursos-ia-ninos-colombia"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#003893]"
              >
                Ver Programa Completo
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Sin compromiso
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Evaluación gratis
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Garantía 10 días
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
