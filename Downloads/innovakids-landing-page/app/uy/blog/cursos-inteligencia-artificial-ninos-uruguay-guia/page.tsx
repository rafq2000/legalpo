import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Check, Clock, User, Calendar } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cursos de Inteligencia Artificial para Niños en Uruguay 2026: Guía Completa",
  description:
    "Guía definitiva de cursos de IA para niños en Uruguay. Comparamos precios, metodologías y resultados. Descubrí por qué InnovaKids es el #1 en Montevideo y todo el país.",
  keywords: [
    "cursos inteligencia artificial niños uruguay",
    "mejores cursos ia niños montevideo",
    "clases ia niños uruguay 2026",
    "aprender ia niños uruguay",
    "curso programación niños montevideo",
  ],
  openGraph: {
    title: "Cursos de IA para Niños en Uruguay 2026: Guía Completa",
    description: "Todo lo que necesitás saber sobre cursos de inteligencia artificial para niños en Uruguay.",
    url: "https://www.innovakidslatam.com/uy/blog/cursos-inteligencia-artificial-ninos-uruguay-guia",
    siteName: "InnovaKids",
    locale: "es_UY",
    type: "article",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/uy/blog/cursos-inteligencia-artificial-ninos-uruguay-guia",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cursos de Inteligencia Artificial para Niños en Uruguay 2026: Guía Completa",
  description: "Guía definitiva de cursos de IA para niños en Uruguay. Comparamos precios, metodologías y resultados.",
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
}

export default function UruguayBlogGuiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO ARTICLE */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-background to-[#0a1628]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#0038A8]/20 text-[#0038A8] px-4 py-2 rounded-full text-sm font-medium mb-6">
                Guía Completa 2026
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Cursos de Inteligencia Artificial para Niños en Uruguay
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Todo lo que necesitás saber para elegir el mejor curso de IA para tu hijo en Uruguay.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Actualizado: Enero 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 15 min de lectura
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" /> Por el equipo InnovaKids
              </span>
            </div>
          </div>
        </section>

        {/* CONTENIDO */}
        <article className="py-16 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg prose-invert max-w-none">
              {/* INTRO */}
              <div className="bg-[#0f2744]/50 rounded-2xl p-8 border border-white/10 mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">¿Por qué enseñar IA a los niños uruguayos?</h2>
                <p className="text-gray-300 leading-relaxed">
                  Uruguay es líder en tecnología educativa en América Latina gracias al Plan Ceibal. Sin embargo, la
                  inteligencia artificial está transformando el mundo más rápido que cualquier tecnología anterior. Los
                  niños que aprendan a crear con IA hoy serán los líderes del mañana.
                </p>
              </div>

              {/* SECCIÓN 1 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">1. Estado de la IA en la Educación Uruguaya</h2>
                <p className="text-gray-300 mb-4">
                  Uruguay ha sido pionero en tecnología educativa con el Plan Ceibal, pero la enseñanza específica de
                  inteligencia artificial para niños aún está en desarrollo. Esto representa una oportunidad única para
                  que los niños uruguayos se adelanten a sus pares regionales.
                </p>
                <div className="grid md:grid-cols-2 gap-4 my-8">
                  <div className="bg-[#0f2744] rounded-xl p-6 border border-white/10">
                    <h4 className="text-lg font-bold text-white mb-2">Ventajas de Uruguay</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Alta conectividad a internet (Plan Ceibal)</li>
                      <li>• Familiaridad con tecnología desde temprana edad</li>
                      <li>• Sistema educativo de calidad</li>
                      <li>• Cultura de innovación</li>
                    </ul>
                  </div>
                  <div className="bg-[#0f2744] rounded-xl p-6 border border-white/10">
                    <h4 className="text-lg font-bold text-white mb-2">Oportunidades</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Pocos cursos especializados en IA para niños</li>
                      <li>• Alta demanda de habilidades tecnológicas</li>
                      <li>• Mercado laboral tech en crecimiento</li>
                      <li>• Startups uruguayas exitosas</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* SECCIÓN 2 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">2. ¿Qué Debe Incluir un Buen Curso de IA?</h2>
                <p className="text-gray-300 mb-6">
                  No todos los cursos de tecnología son iguales. Un curso de IA efectivo para niños debe incluir:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Herramientas Reales",
                      desc: "ChatGPT, Midjourney, DALL-E, Suno AI - las mismas herramientas que usan los profesionales.",
                    },
                    {
                      title: "Proyectos Prácticos",
                      desc: "Los niños aprenden creando: chatbots, arte, música, videojuegos y apps funcionales.",
                    },
                    {
                      title: "Grupos Pequeños",
                      desc: "Máximo 5 niños por clase para garantizar atención personalizada.",
                    },
                    {
                      title: "Ética y Seguridad",
                      desc: "Enseñanza responsable sobre los límites y riesgos de la IA.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 bg-[#0f2744]/50 rounded-xl p-6 border border-white/10"
                    >
                      <Check className="w-6 h-6 text-[#0038A8] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECCIÓN 3 - COMPARATIVA */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">3. Comparativa de Opciones en Uruguay</h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-[#0f2744] rounded-xl border border-white/10">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-4 px-6 text-gray-400">Aspecto</th>
                        <th className="text-center py-4 px-6 text-[#0038A8]">InnovaKids</th>
                        <th className="text-center py-4 px-6 text-gray-500">Otros Cursos</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        ["Precio", "$200 USD (10 clases)", "$150-400 USD"],
                        ["Alumnos por clase", "Máximo 5", "15-30"],
                        ["Herramientas IA", "10+ profesionales", "1-3 básicas"],
                        ["Metodología", "100% práctica", "Teoría + práctica"],
                        ["Garantía", "10 días devolución", "Sin garantía"],
                        ["Soporte", "WhatsApp 24/7", "Solo en clase"],
                      ].map(([aspect, innovakids, others], i) => (
                        <tr key={i} className="border-b border-white/5">
                          <td className="py-4 px-6 text-gray-300">{aspect}</td>
                          <td className="py-4 px-6 text-center text-white font-medium">{innovakids}</td>
                          <td className="py-4 px-6 text-center text-gray-500">{others}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECCIÓN 4 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">4. ¿Por Qué InnovaKids es el #1 en Uruguay?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-bold text-white mb-3">Resultados Comprobados</h4>
                    <p className="text-gray-400">
                      187+ niños uruguayos graduados con proyectos reales: videojuegos, apps, arte generativo y más.
                    </p>
                  </div>
                  <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-bold text-white mb-3">Atención Personalizada</h4>
                    <p className="text-gray-400">
                      Máximo 5 niños por clase. Tu hijo no será uno más en una clase masiva.
                    </p>
                  </div>
                  <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-bold text-white mb-3">Horarios Flexibles</h4>
                    <p className="text-gray-400">
                      Nos adaptamos a la agenda de las familias uruguayas. Clases en horarios convenientes.
                    </p>
                  </div>
                  <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-bold text-white mb-3">Garantía Total</h4>
                    <p className="text-gray-400">
                      10 días de garantía. Si no te convence, devolvemos el 100% de tu dinero.
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA INTERMEDIO */}
              <div className="bg-gradient-to-br from-[#0f2744] to-[#1a3a5c] rounded-2xl p-8 border border-[#0038A8]/30 text-center my-12">
                <h3 className="text-2xl font-bold text-white mb-4">¿Querés que tu hijo aprenda IA?</h3>
                <p className="text-gray-300 mb-6">
                  Reservá una clase demo gratuita y descubrí el potencial de tu hijo.
                </p>
                <Link href="/#sesion-estrategica">
                  <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-10 py-6 text-lg font-bold rounded-full">
                    Reservar Clase Demo GRATIS
                  </Button>
                </Link>
              </div>

              {/* SECCIÓN 5 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">5. Preguntas Frecuentes</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "¿Qué edad debe tener mi hijo?",
                      a: "El curso está diseñado para niños de 8 a 14 años. Agrupamos por edades similares.",
                    },
                    {
                      q: "¿Necesita conocimientos previos?",
                      a: "No, partimos desde cero. Solo necesita saber leer, escribir y usar una computadora básicamente.",
                    },
                    {
                      q: "¿Cómo son las clases online?",
                      a: "Clases en vivo por Zoom con máximo 5 niños. Interactivas y 100% prácticas.",
                    },
                    {
                      q: "¿Qué pasa si no me convence?",
                      a: "Tenés 10 días de garantía. Si no estás satisfecho, devolvemos el 100% de tu dinero.",
                    },
                    {
                      q: "¿Cómo puedo pagar desde Uruguay?",
                      a: "Aceptamos tarjeta de crédito, débito internacional y transferencia bancaria. $200 USD el programa completo.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10">
                      <h4 className="text-lg font-bold text-white mb-2">{item.q}</h4>
                      <p className="text-gray-400">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CONCLUSIÓN */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Conclusión</h2>
                <p className="text-gray-300 mb-4">
                  Uruguay tiene una ventaja única en tecnología educativa gracias al Plan Ceibal. Ahora es el momento de
                  que los niños uruguayos den el siguiente paso y aprendan a crear con inteligencia artificial.
                </p>
                <p className="text-gray-300">
                  InnovaKids ofrece el programa más completo de IA para niños en Uruguay: 10 clases, grupos de máximo 5
                  alumnos, herramientas profesionales y garantía de 10 días.
                  <strong className="text-white"> Reservá tu clase demo gratuita hoy.</strong>
                </p>
              </section>
            </div>
          </div>
        </article>

        {/* INTERNAL LINKING */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Artículos Relacionados</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/uy/cursos-ia-ninos-uruguay"
                className="bg-[#0f2744]/50 hover:bg-[#0f2744] text-gray-300 hover:text-white px-6 py-3 rounded-full border border-white/10 transition-all"
              >
                Cursos IA Niños Uruguay
              </Link>
              <Link
                href="/uy/clases-ia-ninos-montevideo"
                className="bg-[#0f2744]/50 hover:bg-[#0f2744] text-gray-300 hover:text-white px-6 py-3 rounded-full border border-white/10 transition-all"
              >
                Clases IA Montevideo
              </Link>
              <Link
                href="/uy"
                className="bg-[#0f2744]/50 hover:bg-[#0f2744] text-gray-300 hover:text-white px-6 py-3 rounded-full border border-white/10 transition-all"
              >
                InnovaKids Uruguay
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-gradient-to-b from-[#0a1628] to-background">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Dale a Tu Hijo la Ventaja del Futuro</h2>
            <p className="text-xl text-gray-300 mb-8">
              Reservá una clase demo gratuita y descubrí por qué más de 187 familias uruguayas confían en InnovaKids.
            </p>
            <Link href="/#sesion-estrategica">
              <Button className="bg-[#FCD116] hover:bg-[#e5bc14] text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all">
                Reservar Clase Demo GRATIS
              </Button>
            </Link>
            <p className="text-gray-500 text-sm mt-6">Sin compromiso • Cupos limitados • Garantía 10 días</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
