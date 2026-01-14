import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Target, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Cursos de IA para Niños Latinos en USA: Guía Completa 2026 | InnovaKids",
  description:
    "Guía definitiva sobre cursos de inteligencia artificial en español para niños latinos en Estados Unidos. Beneficios del bilingüismo, qué aprenden, precios y cómo elegir el mejor programa.",
  keywords:
    "cursos ia niños latinos usa, clases inteligencia artificial español estados unidos, programación niños hispanos, educación tecnología bilingüe, innovakids guia",
  alternates: {
    canonical: "https://www.innovakidslatam.com/us/blog/cursos-inteligencia-artificial-ninos-latinos-usa-guia",
  },
  openGraph: {
    type: "article",
    publishedTime: "2026-01-01T00:00:00Z",
    authors: ["InnovaKids"],
  },
}

export default function GuiaIANinosLatinosUSA() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent(
    "Hola! Leí la guía y me interesa el curso de IA en español para mi hijo en USA.",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#002868] to-[#001744] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">15 min de lectura • Actualizado Enero 2026</span>
            </div>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Cursos de Inteligencia Artificial para Niños Latinos en USA: Guía Completa 2026
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Todo lo que necesitas saber para elegir el mejor curso de IA en español para tu hijo en Estados Unidos.
            </p>
          </div>
        </section>

        {/* ARTICLE */}
        <article className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>¿Por Qué los Niños Latinos en USA Deberían Aprender IA en Español?</h2>

              <p>
                Si eres padre latino viviendo en Estados Unidos, probablemente te has preguntado: ¿debería mi hijo
                aprender tecnología en inglés o en español? La respuesta, respaldada por investigación en neurociencia y
                educación, es sorprendente: <strong>aprender en ambos idiomas es la mejor opción</strong>.
              </p>

              <p>
                Los niños bilingües desarrollan mayor flexibilidad cognitiva, mejor capacidad de resolución de
                problemas, y tienen ventajas significativas en el mercado laboral global. Cuando tu hijo aprende IA en
                español, no solo adquiere habilidades técnicas de vanguardia, sino que también:
              </p>

              <ul>
                <li>
                  <strong>Refuerza su español</strong> en un contexto moderno y relevante
                </li>
                <li>
                  <strong>Conecta con su familia</strong>: abuelos y parientes pueden participar e involucrarse
                </li>
                <li>
                  <strong>Duplica sus oportunidades</strong>: 500+ millones de hispanohablantes en el mundo
                </li>
                <li>
                  <strong>Preserva su identidad cultural</strong> mientras se prepara para el futuro
                </li>
              </ul>

              <div className="my-8 rounded-2xl bg-[#002868]/10 p-6">
                <h3 className="mt-0 text-[#002868]">El Problema de las Clases Solo en Inglés</h3>
                <p className="mb-0">
                  Muchos padres latinos reportan que sus hijos pierden el español después de unos años en el sistema
                  educativo estadounidense. Las clases de tecnología en inglés aceleran este proceso. Con InnovaKids, tu
                  hijo aprende la tecnología del futuro sin perder su idioma materno.
                </p>
              </div>

              <h2>¿Qué Aprenden los Niños en un Curso de IA?</h2>

              <p>
                Un buen curso de inteligencia artificial para niños no se trata de programación aburrida o teoría
                complicada. Se trata de <strong>crear proyectos reales</strong> que los niños puedan mostrar con
                orgullo:
              </p>

              <h3>Proyectos Típicos en un Curso de 10 Clases:</h3>

              <ol>
                <li>
                  <strong>Comics ilustrados con IA</strong> - Usando ChatGPT para escribir historias y Midjourney para
                  ilustrarlas
                </li>
                <li>
                  <strong>Música original</strong> - Componiendo canciones con Suno AI
                </li>
                <li>
                  <strong>Videos con efectos especiales</strong> - Editando con Runway y CapCut
                </li>
                <li>
                  <strong>Apps funcionales</strong> - Programando con asistencia de IA
                </li>
                <li>
                  <strong>Chatbots personalizados</strong> - Creando asistentes virtuales
                </li>
                <li>
                  <strong>Videojuegos</strong> - Desarrollando juegos desde cero
                </li>
              </ol>

              <h2>¿Cuánto Cuesta un Curso de IA para Niños en USA?</h2>

              <p>Los precios varían significativamente dependiendo del formato y la calidad del programa:</p>

              <div className="my-8 overflow-hidden rounded-2xl border">
                <table className="m-0 w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-4 text-left">Tipo de Programa</th>
                      <th className="p-4 text-left">Precio Típico</th>
                      <th className="p-4 text-left">Alumnos/Clase</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4">Cursos masivos online</td>
                      <td className="p-4">$50-100</td>
                      <td className="p-4">20-50+</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Bootcamps presenciales</td>
                      <td className="p-4">$500-1000</td>
                      <td className="p-4">10-20</td>
                    </tr>
                    <tr className="border-t bg-[#002868]/5">
                      <td className="p-4 font-bold">InnovaKids (recomendado)</td>
                      <td className="p-4 font-bold">$200</td>
                      <td className="p-4 font-bold">Máximo 5</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>¿Qué Buscar en un Curso de IA en Español?</h2>

              <p>No todos los cursos son iguales. Antes de inscribir a tu hijo, verifica estos puntos:</p>

              <div className="my-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-green-50 p-4 dark:bg-green-950">
                  <h4 className="mt-0 text-green-700 dark:text-green-300">✅ Lo Que SÍ Debes Buscar</h4>
                  <ul className="mb-0 text-sm">
                    <li>Grupos pequeños (máx 5-8 niños)</li>
                    <li>Clases en vivo (no pregrabadas)</li>
                    <li>Proyectos prácticos reales</li>
                    <li>Profesores hispanohablantes nativos</li>
                    <li>Garantía de devolución</li>
                    <li>Horarios en tu zona horaria</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-red-50 p-4 dark:bg-red-950">
                  <h4 className="mt-0 text-red-700 dark:text-red-300">❌ Señales de Alerta</h4>
                  <ul className="mb-0 text-sm">
                    <li>Clases de 20+ niños</li>
                    <li>Solo videos pregrabados</li>
                    <li>Promesas de "programador en 1 semana"</li>
                    <li>Sin garantía de devolución</li>
                    <li>Profesores no nativos en español</li>
                    <li>Sin soporte para padres</li>
                  </ul>
                </div>
              </div>

              <h2>Ciudades con Mayor Demanda de Cursos de IA en Español</h2>

              <p>
                La demanda de educación tecnológica en español está creciendo en todas las ciudades con población latina
                significativa:
              </p>

              <ul>
                <li>
                  <strong>Miami, Florida</strong> - 2.7 millones de latinos, la mayor concentración de hispanohablantes
                </li>
                <li>
                  <strong>Los Angeles, California</strong> - 4.9 millones de latinos, hub tecnológico
                </li>
                <li>
                  <strong>Houston, Texas</strong> - 2.3 millones de latinos, economía en crecimiento
                </li>
                <li>
                  <strong>New York</strong> - 2.5 millones de latinos, diversidad de orígenes
                </li>
                <li>
                  <strong>Chicago, Illinois</strong> - 1.4 millones de latinos, comunidad mexicana fuerte
                </li>
              </ul>

              <h2>¿Cómo Funciona InnovaKids para Latinos en USA?</h2>

              <p>
                InnovaKids es el programa de IA en español más completo para niños latinos en Estados Unidos. Así
                funciona:
              </p>

              <ol>
                <li>
                  <strong>Evaluación gratuita</strong> - Agendas una videollamada de 30 minutos donde evaluamos a tu
                  hijo
                </li>
                <li>
                  <strong>Grupo personalizado</strong> - Asignamos a tu hijo a un grupo de máximo 5 niños de edad
                  similar
                </li>
                <li>
                  <strong>10 clases en vivo</strong> - Una vez por semana, 90 minutos, 100% en español
                </li>
                <li>
                  <strong>Proyectos reales</strong> - Tu hijo termina con 6+ proyectos publicables
                </li>
                <li>
                  <strong>Certificado</strong> - Al completar, recibe certificado de finalización
                </li>
              </ol>

              <div className="my-8 rounded-2xl bg-[#002868] p-8 text-white">
                <h3 className="mt-0 text-white">Garantía de 10 Días</h3>
                <p className="mb-0">
                  Si después de las primeras clases no estás 100% satisfecho, te devolvemos tu dinero completo. Sin
                  preguntas, sin complicaciones. Queremos que estés completamente seguro antes de comprometerte.
                </p>
              </div>

              <h2>Preguntas Frecuentes de Padres Latinos en USA</h2>

              <h3>¿Mi hijo necesita saber español perfecto?</h3>
              <p>
                No. Aceptamos niños con cualquier nivel de español, desde heritage speakers hasta niños que están
                aprendiendo. Las clases ayudan a reforzar el idioma mientras aprenden tecnología.
              </p>

              <h3>¿Los horarios funcionan con el school en USA?</h3>
              <p>
                Sí. Tenemos horarios para todas las zonas horarias: Eastern (EST), Central (CST), Mountain (MST) y
                Pacific (PST). Las clases son después del school, generalmente entre 4pm-8pm hora local.
              </p>

              <h3>¿Qué necesita mi hijo para tomar las clases?</h3>
              <p>
                Solo una computadora o laptop con conexión a internet. No necesita software especial - todas las
                herramientas de IA que usamos son online y gratuitas.
              </p>

              <h3>¿Puedo participar como padre?</h3>
              <p>
                ¡Absolutamente! Muchos padres (y abuelos) participan junto a sus hijos. Es una excelente oportunidad de
                aprender juntos y fortalecer el vínculo familiar.
              </p>
            </div>

            {/* CTA BOX */}
            <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#002868] to-[#001744] p-8 text-center text-white md:p-12">
              <h2 className="mb-4 text-3xl font-bold">¿Listo para Inscribir a Tu Hijo?</h2>
              <p className="mx-auto mb-8 max-w-xl text-white/80">
                Agenda una evaluación gratuita y descubre si InnovaKids es el programa ideal para tu familia.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#002868] transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Evaluación GRATIS
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-bold transition-all hover:bg-white hover:text-[#002868]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
              <p className="mt-6 text-sm text-white/60">$200 USD • 10 clases • Máximo 5 niños • Garantía 10 días</p>
            </div>

            {/* RELATED LINKS */}
            <div className="mt-16">
              <h3 className="mb-6 text-xl font-bold">Artículos Relacionados</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <Link
                  href="/us/cursos-ia-ninos-latinos-usa"
                  className="group rounded-xl bg-card p-4 transition-all hover:shadow-lg"
                >
                  <h4 className="font-bold group-hover:text-primary">Curso de IA para Latinos en USA →</h4>
                  <p className="text-sm text-muted-foreground">Información completa del programa</p>
                </Link>
                <Link
                  href="/us/clases-ia-ninos-miami"
                  className="group rounded-xl bg-card p-4 transition-all hover:shadow-lg"
                >
                  <h4 className="font-bold group-hover:text-primary">Clases de IA en Miami →</h4>
                  <p className="text-sm text-muted-foreground">Programa para familias en Florida</p>
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Cursos de Inteligencia Artificial para Niños Latinos en USA: Guía Completa 2026",
              description: "Guía definitiva sobre cursos de IA en español para niños latinos en Estados Unidos.",
              author: { "@type": "Organization", name: "InnovaKids" },
              publisher: { "@type": "Organization", name: "InnovaKids" },
              datePublished: "2026-01-01",
              dateModified: "2026-01-01",
              inLanguage: "es",
              mainEntityOfPage:
                "https://www.innovakidslatam.com/us/blog/cursos-inteligencia-artificial-ninos-latinos-usa-guia",
            }),
          }}
        />
      </main>
    </>
  )
}
