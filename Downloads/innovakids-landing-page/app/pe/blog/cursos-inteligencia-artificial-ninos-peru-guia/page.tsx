import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CheckCircle, Target, ArrowRight, Clock, Users, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Cursos de Inteligencia Artificial para Niños en Perú: Guía Completa 2026",
  description:
    "Guía definitiva sobre cursos de IA para niños en Perú. Qué aprenden, metodología, herramientas, precios y cómo elegir el mejor programa. Información actualizada 2026.",
  keywords:
    "cursos inteligencia artificial niños peru, ia para niños lima, como enseñar ia a niños, programación para niños peru, innovakids peru guia",
  alternates: {
    canonical: "https://www.innovakidslatam.com/pe/blog/cursos-inteligencia-artificial-ninos-peru-guia",
  },
  openGraph: {
    title: "Cursos de Inteligencia Artificial para Niños en Perú: Guía Completa 2026",
    description: "Todo lo que necesitas saber sobre cursos de IA para niños en Perú.",
    type: "article",
    publishedTime: "2026-01-01",
    authors: ["InnovaKids"],
  },
}

export default function GuiaIANinosPeru() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent(
    "Hola! Leí la guía de IA para niños en Perú y me interesa más información.",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* ARTICLE HEADER */}
        <section className="bg-gradient-to-br from-[#D91023] to-[#8B0000] py-20 md:py-28">
          <div className="container mx-auto px-4 text-white">
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 flex items-center gap-4 text-sm text-white/70">
                <span>Guía Educativa</span>
                <span>•</span>
                <span>Actualizado Enero 2026</span>
                <span>•</span>
                <span>15 min lectura</span>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Cursos de Inteligencia Artificial para Niños en Perú: Guía Completa 2026
              </h1>

              <p className="text-xl text-white/90">
                Todo lo que necesitas saber para elegir el mejor curso de IA para tu hijo en Perú. Metodologías,
                herramientas, precios y recomendaciones actualizadas.
              </p>
            </div>
          </div>
        </section>

        {/* TABLE OF CONTENTS */}
        <section className="border-b py-8">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-4 font-bold">Contenido de esta guía:</h2>
              <div className="grid gap-2 md:grid-cols-2">
                <a href="#que-es-ia" className="text-[#D91023] hover:underline">
                  1. ¿Qué es la IA para niños?
                </a>
                <a href="#beneficios" className="text-[#D91023] hover:underline">
                  2. Beneficios de aprender IA temprano
                </a>
                <a href="#que-aprenden" className="text-[#D91023] hover:underline">
                  3. ¿Qué aprenden los niños?
                </a>
                <a href="#herramientas" className="text-[#D91023] hover:underline">
                  4. Herramientas de IA para niños
                </a>
                <a href="#como-elegir" className="text-[#D91023] hover:underline">
                  5. Cómo elegir el mejor curso
                </a>
                <a href="#innovakids" className="text-[#D91023] hover:underline">
                  6. Programa InnovaKids en Perú
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLE CONTENT */}
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              {/* Section 1 */}
              <section id="que-es-ia" className="mb-16">
                <h2 className="mb-6 text-3xl font-bold">1. ¿Qué es la Inteligencia Artificial para Niños?</h2>
                <p className="mb-4 text-lg text-muted-foreground">
                  La inteligencia artificial para niños no es programación compleja ni matemáticas avanzadas. Es
                  enseñarles a usar herramientas de IA como ChatGPT, Midjourney, Suno AI y otras para crear proyectos
                  reales: desde comics y música hasta aplicaciones y videojuegos.
                </p>
                <p className="mb-4 text-lg text-muted-foreground">
                  En Perú, cada vez más familias en Lima, Arequipa, Trujillo y otras ciudades buscan programas que
                  preparen a sus hijos para el futuro digital. La IA no es el futuro, es el presente, y los niños que
                  aprenden a usarla hoy tendrán una ventaja competitiva enorme.
                </p>
              </section>

              {/* Section 2 */}
              <section id="beneficios" className="mb-16">
                <h2 className="mb-6 text-3xl font-bold">2. Beneficios de Aprender IA Desde Temprana Edad</h2>
                <div className="space-y-4">
                  {[
                    { title: "Pensamiento Crítico", desc: "Aprenden a evaluar y mejorar resultados generados por IA" },
                    {
                      title: "Creatividad Amplificada",
                      desc: "La IA les permite materializar ideas que antes eran imposibles",
                    },
                    {
                      title: "Resolución de Problemas",
                      desc: "Desarrollan metodologías para abordar desafíos complejos",
                    },
                    {
                      title: "Preparación Laboral",
                      desc: "El 85% de los trabajos del 2030 requerirán habilidades de IA",
                    },
                    { title: "Emprendimiento", desc: "Pueden crear productos y servicios reales desde niños" },
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4 rounded-xl bg-card p-4">
                      <CheckCircle className="h-6 w-6 shrink-0 text-[#D91023]" />
                      <div>
                        <h3 className="font-bold">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3 */}
              <section id="que-aprenden" className="mb-16">
                <h2 className="mb-6 text-3xl font-bold">3. ¿Qué Aprenden los Niños en un Curso de IA?</h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  Un buen curso de IA para niños en Perú debe incluir proyectos prácticos, no solo teoría. Los niños
                  aprenden mejor creando, no memorizando conceptos abstractos.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { emoji: "📚", title: "Creación de Comics con IA", tools: "ChatGPT, Midjourney" },
                    { emoji: "🎵", title: "Composición Musical", tools: "Suno AI, Udio" },
                    { emoji: "🎬", title: "Edición de Video con IA", tools: "Runway, CapCut" },
                    { emoji: "📱", title: "Desarrollo de Apps", tools: "Cursor, Replit" },
                    { emoji: "🤖", title: "Chatbots Personalizados", tools: "GPT-4, Make.com" },
                    { emoji: "🎮", title: "Creación de Videojuegos", tools: "Phaser, GPT-4" },
                  ].map((project, i) => (
                    <div key={i} className="rounded-xl bg-muted/50 p-4">
                      <div className="mb-2 text-2xl">{project.emoji}</div>
                      <h3 className="font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">Herramientas: {project.tools}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4 */}
              <section id="herramientas" className="mb-16">
                <h2 className="mb-6 text-3xl font-bold">4. Herramientas de IA Populares para Niños</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse rounded-xl bg-card">
                    <thead>
                      <tr className="border-b">
                        <th className="p-4 text-left">Herramienta</th>
                        <th className="p-4 text-left">Uso Principal</th>
                        <th className="p-4 text-left">Edad Recomendada</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "ChatGPT", use: "Escritura, ideas, código", age: "8+" },
                        { name: "Midjourney", use: "Generación de imágenes", age: "10+" },
                        { name: "Suno AI", use: "Creación de música", age: "8+" },
                        { name: "Runway", use: "Edición de video", age: "10+" },
                        { name: "Cursor", use: "Programación asistida", age: "12+" },
                        { name: "Canva AI", use: "Diseño gráfico", age: "8+" },
                      ].map((tool, i) => (
                        <tr key={i} className="border-b last:border-0">
                          <td className="p-4 font-medium">{tool.name}</td>
                          <td className="p-4 text-muted-foreground">{tool.use}</td>
                          <td className="p-4">{tool.age}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5 */}
              <section id="como-elegir" className="mb-16">
                <h2 className="mb-6 text-3xl font-bold">5. Cómo Elegir el Mejor Curso de IA para Niños en Perú</h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  No todos los cursos son iguales. Aquí te explicamos qué buscar:
                </p>
                <div className="space-y-6">
                  <div className="rounded-xl border-l-4 border-[#D91023] bg-card p-6">
                    <h3 className="mb-2 font-bold">Grupos Reducidos</h3>
                    <p className="text-muted-foreground">
                      Evita clases masivas de 20-30 niños. Busca programas con máximo 5 niños por grupo para atención
                      personalizada.
                    </p>
                  </div>
                  <div className="rounded-xl border-l-4 border-[#D91023] bg-card p-6">
                    <h3 className="mb-2 font-bold">Proyectos Prácticos</h3>
                    <p className="text-muted-foreground">
                      El curso debe enfocarse en crear proyectos reales, no en teoría abstracta. Los niños aprenden
                      haciendo.
                    </p>
                  </div>
                  <div className="rounded-xl border-l-4 border-[#D91023] bg-card p-6">
                    <h3 className="mb-2 font-bold">Garantía de Satisfacción</h3>
                    <p className="text-muted-foreground">
                      Un buen programa ofrece garantía de devolución. Si no estás satisfecho, recuperas tu dinero.
                    </p>
                  </div>
                  <div className="rounded-xl border-l-4 border-[#D91023] bg-card p-6">
                    <h3 className="mb-2 font-bold">Horarios Flexibles</h3>
                    <p className="text-muted-foreground">
                      Asegúrate de que los horarios estén adaptados a la zona horaria de Perú y a la agenda de tu
                      familia.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6 - InnovaKids */}
              <section id="innovakids" className="mb-16">
                <h2 className="mb-6 text-3xl font-bold">6. Programa InnovaKids en Perú</h2>
                <div className="rounded-2xl bg-gradient-to-br from-[#D91023]/10 to-transparent p-8">
                  <p className="mb-6 text-lg">
                    InnovaKids es el programa de IA para niños más completo disponible en Perú. Ofrecemos clases 100%
                    online en vivo para familias en Lima, Arequipa, Trujillo, Cusco y todo el país.
                  </p>

                  <div className="mb-8 grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl bg-card p-4 text-center">
                      <Users className="mx-auto mb-2 h-8 w-8 text-[#D91023]" />
                      <div className="font-bold">5 niños máx</div>
                      <div className="text-sm text-muted-foreground">Por grupo</div>
                    </div>
                    <div className="rounded-xl bg-card p-4 text-center">
                      <Clock className="mx-auto mb-2 h-8 w-8 text-[#D91023]" />
                      <div className="font-bold">10 clases</div>
                      <div className="text-sm text-muted-foreground">En vivo</div>
                    </div>
                    <div className="rounded-xl bg-card p-4 text-center">
                      <Shield className="mx-auto mb-2 h-8 w-8 text-[#D91023]" />
                      <div className="font-bold">10 días</div>
                      <div className="text-sm text-muted-foreground">Garantía total</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="mb-4 text-2xl font-bold">$200 USD - Programa Completo</p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                      <Link
                        href={calendlyLink}
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D91023] px-8 py-4 font-bold text-white transition-all hover:scale-105"
                      >
                        <Target className="h-5 w-5" />
                        Agendar Evaluación Gratuita
                      </Link>
                      <Link
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D91023] px-8 py-4 font-bold text-[#D91023] transition-all hover:bg-[#D91023] hover:text-white"
                      >
                        Consultar por WhatsApp
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Internal Links */}
              <section className="rounded-2xl bg-muted/30 p-8">
                <h3 className="mb-6 text-xl font-bold">Más recursos sobre InnovaKids en Perú:</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <Link
                    href="/pe/cursos-ia-ninos-peru"
                    className="group flex items-center gap-2 rounded-xl bg-card p-4 transition-all hover:shadow-lg"
                  >
                    <span className="font-medium group-hover:text-[#D91023]">Cursos IA Niños Perú</span>
                    <ArrowRight className="h-4 w-4 text-[#D91023]" />
                  </Link>
                  <Link
                    href="/pe/clases-ia-ninos-lima"
                    className="group flex items-center gap-2 rounded-xl bg-card p-4 transition-all hover:shadow-lg"
                  >
                    <span className="font-medium group-hover:text-[#D91023]">Clases IA Lima</span>
                    <ArrowRight className="h-4 w-4 text-[#D91023]" />
                  </Link>
                  <Link
                    href="/pe"
                    className="group flex items-center gap-2 rounded-xl bg-card p-4 transition-all hover:shadow-lg"
                  >
                    <span className="font-medium group-hover:text-[#D91023]">Hub Perú</span>
                    <ArrowRight className="h-4 w-4 text-[#D91023]" />
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#D91023] to-[#8B0000] py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">¿Listo para Inscribir a Tu Hijo?</h2>
            <p className="mx-auto mb-10 max-w-2xl text-white/80">
              Agenda una evaluación gratuita y descubre si tu hijo califica para el programa InnovaKids.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#D91023] transition-all hover:scale-105"
              >
                Agendar Evaluación Gratuita
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#D91023]"
              >
                WhatsApp Directo
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
            "@type": "Article",
            headline: "Cursos de Inteligencia Artificial para Niños en Perú: Guía Completa 2026",
            author: {
              "@type": "Organization",
              name: "InnovaKids",
            },
            publisher: {
              "@type": "Organization",
              name: "InnovaKids",
              url: "https://www.innovakidslatam.com",
            },
            datePublished: "2026-01-01",
            dateModified: "2026-01-08",
            mainEntityOfPage: "https://www.innovakidslatam.com/pe/blog/cursos-inteligencia-artificial-ninos-peru-guia",
          }),
        }}
      />
    </>
  )
}
