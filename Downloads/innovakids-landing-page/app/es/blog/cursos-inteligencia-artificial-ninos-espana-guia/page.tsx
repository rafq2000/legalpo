import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Calendar, Clock, User, ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Cursos de Inteligencia Artificial para Niños en España: Guía Completa 2026",
  description:
    "Guía definitiva sobre cursos de IA para niños en España. Comparativa de opciones, precios, metodologías y cómo elegir el mejor curso para tu hijo de 8-14 años.",
  keywords:
    "cursos inteligencia artificial niños españa, mejores cursos ia niños madrid, curso programación ia barcelona, educación ia niños valencia, innovakids españa guia",
  alternates: {
    canonical: "https://www.innovakidslatam.com/es/blog/cursos-inteligencia-artificial-ninos-espana-guia",
  },
  openGraph: {
    title: "Cursos de Inteligencia Artificial para Niños en España: Guía Completa 2026",
    description: "Todo lo que necesitas saber para elegir el mejor curso de IA para tu hijo en España.",
    type: "article",
    publishedTime: "2026-01-01T00:00:00.000Z",
    authors: ["InnovaKids España"],
  },
}

export default function GuiaCompletaEspana() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Leí la guía de cursos de IA para niños en España y me gustaría más información.",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* ARTICLE HEADER */}
        <article className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              {/* Breadcrumb */}
              <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/es" className="hover:text-primary">
                  España
                </Link>
                <span>/</span>
                <Link href="/es/blog" className="hover:text-primary">
                  Blog
                </Link>
                <span>/</span>
                <span>Guía Completa</span>
              </nav>

              {/* Title */}
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                Cursos de Inteligencia Artificial para Niños en España: Guía Completa 2026
              </h1>

              {/* Meta */}
              <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Enero 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>15 min de lectura</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Equipo InnovaKids</span>
                </div>
              </div>

              {/* Featured Image Placeholder */}
              <div className="mb-12 aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-[#C60B1E] to-[#FFC400]">
                <div className="flex h-full items-center justify-center text-white">
                  <div className="text-center">
                    <span className="text-6xl">🇪🇸</span>
                    <p className="mt-4 text-2xl font-bold">Guía Completa: IA para Niños en España</p>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl text-muted-foreground">
                  La inteligencia artificial está transformando la educación en España y en todo el mundo. Como padre o
                  madre, probablemente te preguntas: ¿debería mi hijo aprender sobre IA? ¿Qué cursos hay disponibles?
                  ¿Cuál es el mejor para su edad? En esta guía completa responderemos todas tus dudas.
                </p>

                <h2 className="mt-12 text-2xl font-bold">¿Por Qué Es Importante que los Niños Aprendan IA en 2026?</h2>

                <p>
                  Según el último informe del Observatorio Nacional de Tecnología y Sociedad (ONTSI), el 78% de los
                  empleos en España requerirán competencias digitales avanzadas para 2030. La inteligencia artificial no
                  es una moda pasajera, es el futuro del trabajo y la educación.
                </p>

                <div className="my-8 rounded-2xl bg-muted/50 p-6">
                  <h3 className="mb-4 text-xl font-bold">Datos clave sobre IA y educación en España:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#C60B1E]" />
                      <span>
                        El 65% de los niños que empiezan primaria hoy trabajarán en empleos que aún no existen
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#C60B1E]" />
                      <span>España tiene déficit de 120.000 profesionales tecnológicos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#C60B1E]" />
                      <span>Los salarios en IA son un 40% superiores a la media del sector tech</span>
                    </li>
                  </ul>
                </div>

                <h2 className="mt-12 text-2xl font-bold">¿Qué Debe Incluir un Buen Curso de IA para Niños?</h2>

                <p>
                  No todos los cursos de inteligencia artificial para niños son iguales. Aquí te explicamos qué buscar:
                </p>

                <h3 className="mt-8 text-xl font-bold">1. Metodología Práctica (Learning by Doing)</h3>
                <p>
                  Los niños aprenden mejor haciendo que escuchando. Un buen curso debe incluir proyectos reales desde el
                  primer día: crear cómics con IA, componer música, programar aplicaciones, diseñar videojuegos...
                </p>

                <h3 className="mt-8 text-xl font-bold">2. Grupos Reducidos</h3>
                <p>
                  Evita cursos con 20 o 30 niños por clase. La atención personalizada es fundamental para que tu hijo
                  avance a su ritmo y resuelva sus dudas. Lo ideal son grupos de máximo 5 alumnos.
                </p>

                <h3 className="mt-8 text-xl font-bold">3. Herramientas Actualizadas</h3>
                <p>
                  La IA evoluciona constantemente. Asegúrate de que el curso utilice herramientas actuales como ChatGPT,
                  Claude, Midjourney, DALL-E, Suno AI, Runway y no software obsoleto.
                </p>

                <h3 className="mt-8 text-xl font-bold">4. Profesores Especializados</h3>
                <p>
                  Los docentes deben tener experiencia real trabajando con IA, no solo conocimientos teóricos. Además,
                  deben saber cómo enseñar a niños, que es muy diferente a enseñar a adultos.
                </p>

                <h2 className="mt-12 text-2xl font-bold">Comparativa: Opciones de Cursos de IA para Niños en España</h2>

                <div className="my-8 overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="p-4 text-left">Característica</th>
                        <th className="p-4 text-left">InnovaKids</th>
                        <th className="p-4 text-left">Academias locales</th>
                        <th className="p-4 text-left">Cursos grabados</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Modalidad</td>
                        <td className="p-4">Online en vivo</td>
                        <td className="p-4">Presencial</td>
                        <td className="p-4">Grabado</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Alumnos por grupo</td>
                        <td className="p-4 text-[#C60B1E] font-bold">Máx 5</td>
                        <td className="p-4">15-25</td>
                        <td className="p-4">Ilimitado</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Interacción</td>
                        <td className="p-4">Alta (en vivo)</td>
                        <td className="p-4">Alta</td>
                        <td className="p-4">Ninguna</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Flexibilidad horaria</td>
                        <td className="p-4">Alta</td>
                        <td className="p-4">Baja</td>
                        <td className="p-4">Total</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Desplazamiento</td>
                        <td className="p-4">No necesario</td>
                        <td className="p-4">Sí</td>
                        <td className="p-4">No necesario</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Garantía devolución</td>
                        <td className="p-4 text-[#C60B1E] font-bold">10 días</td>
                        <td className="p-4">Variable</td>
                        <td className="p-4">Variable</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Precio aprox.</td>
                        <td className="p-4">$197 USD</td>
                        <td className="p-4">€300-600</td>
                        <td className="p-4">€50-150</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="mt-12 text-2xl font-bold">¿Qué Aprenderá Tu Hijo en un Curso de IA?</h2>

                <p>En un curso completo como el de InnovaKids, tu hijo aprenderá a:</p>

                <div className="my-8 grid gap-4 md:grid-cols-2">
                  {[
                    "Crear imágenes y arte digital con Midjourney y DALL-E",
                    "Escribir historias y guiones con ChatGPT y Claude",
                    "Componer música original con Suno AI",
                    "Editar vídeos profesionales con Runway",
                    "Programar aplicaciones con asistencia de IA",
                    "Desarrollar videojuegos desde cero",
                    "Construir chatbots personalizados",
                    "Usar IA de forma ética y responsable",
                  ].map((skill, i) => (
                    <div key={i} className="flex items-start gap-2 rounded-lg bg-card p-4">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#C60B1E]" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

                <h2 className="mt-12 text-2xl font-bold">¿Tienen Eventos Presenciales en España?</h2>

                <p>
                  Próximamente estaremos organizando talleres y eventos presenciales en las principales ciudades de
                  España: Madrid, Barcelona, Valencia, Sevilla, Bilbao y más. Por ahora, todas nuestras clases son 100%
                  online en vivo, lo que permite participar desde cualquier punto de España con la misma calidad.
                </p>

                <h2 className="mt-12 text-2xl font-bold">Preguntas Frecuentes</h2>

                <div className="my-8 space-y-6">
                  {[
                    {
                      q: "¿A qué edad puede empezar mi hijo?",
                      a: "Nuestro programa está diseñado para niños de 8 a 14 años. Es la edad ideal para desarrollar pensamiento computacional y habilidades con IA de forma lúdica y práctica.",
                    },
                    {
                      q: "¿Necesita mi hijo saber programar?",
                      a: "No. El curso empieza desde cero. Tu hijo aprenderá a usar herramientas de IA sin necesidad de conocimientos previos de programación.",
                    },
                    {
                      q: "¿Qué ordenador necesita?",
                      a: "Cualquier ordenador con conexión a internet y navegador actualizado es suficiente. No hace falta un equipo potente ni software especial.",
                    },
                    {
                      q: "¿Cómo son los horarios?",
                      a: "Ofrecemos horarios adaptados a España (CET/CEST), entre semana después del cole y fines de semana. Nos adaptamos a tu agenda.",
                    },
                    {
                      q: "¿Qué pasa si no me convence el curso?",
                      a: "Tienes 10 días de garantía. Si por cualquier razón no estás satisfecho, te devolvemos el 100% de tu dinero sin preguntas.",
                    },
                  ].map((faq, i) => (
                    <div key={i} className="rounded-2xl bg-card p-6">
                      <h3 className="mb-2 text-lg font-bold">{faq.q}</h3>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </div>
                  ))}
                </div>

                <h2 className="mt-12 text-2xl font-bold">Conclusión: ¿Merece la Pena un Curso de IA para Mi Hijo?</h2>

                <p>
                  Rotundamente sí. La inteligencia artificial no es el futuro, es el presente. Los niños que aprenden a
                  usar estas herramientas hoy tendrán una ventaja enorme mañana. No se trata de convertirlos en
                  programadores, sino de darles las herramientas para crear, innovar y adaptarse a un mundo en constante
                  cambio.
                </p>

                <p>
                  En InnovaKids ofrecemos exactamente eso: un programa de 10 clases en vivo, con grupos de máximo 5
                  niños, metodología 100% práctica, y garantía de devolución de 10 días. Si quieres que tu hijo sea
                  creador de tecnología en lugar de solo consumidor, agenda una evaluación gratuita.
                </p>
              </div>

              {/* CTA Box */}
              <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#C60B1E] to-[#8B0000] p-8 text-center text-white">
                <h3 className="mb-4 text-2xl font-bold">¿Listo para que Tu Hijo Aprenda IA?</h3>
                <p className="mb-6 text-white/80">
                  Agenda una evaluación gratuita y descubre si InnovaKids es ideal para tu hijo.
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link
                    href={calendlyLink}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#C60B1E] transition-all hover:scale-105"
                  >
                    Agendar Evaluación GRATIS
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href={whatsappLink}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-[#C60B1E]"
                  >
                    Consultar por WhatsApp
                  </Link>
                </div>
              </div>

              {/* Internal Links */}
              <div className="mt-12 border-t pt-8">
                <h3 className="mb-6 text-lg font-bold">Artículos Relacionados</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <Link
                    href="/es/cursos-ia-ninos-espana"
                    className="group rounded-xl bg-card p-4 transition-all hover:shadow-lg"
                  >
                    <h4 className="font-bold group-hover:text-[#C60B1E]">Cursos IA España</h4>
                    <p className="text-sm text-muted-foreground">Programa completo de 10 clases</p>
                  </Link>
                  <Link
                    href="/es/clases-ia-ninos-madrid"
                    className="group rounded-xl bg-card p-4 transition-all hover:shadow-lg"
                  >
                    <h4 className="font-bold group-hover:text-[#C60B1E]">Clases IA Madrid</h4>
                    <p className="text-sm text-muted-foreground">Info para familias madrileñas</p>
                  </Link>
                  <Link href="/es" className="group rounded-xl bg-card p-4 transition-all hover:shadow-lg">
                    <h4 className="font-bold group-hover:text-[#C60B1E]">Hub España</h4>
                    <p className="text-sm text-muted-foreground">Todas las ciudades españolas</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
