import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Cursos de Inteligencia Artificial para Niños en Panamá 2026: Guía Completa",
  description:
    "Guía definitiva sobre cursos de IA para niños en Panamá. Qué aprenden, mejores opciones, precios, edades recomendadas. Todo lo que necesitas saber.",
  keywords:
    "cursos inteligencia artificial niños panama, ia para niños panama, aprender ia niños panama city, programación ia niños panama",
}

export default function BlogCursosIANinosPanama() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Leí la guía de IA para niños en Panamá y quiero más información.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#072357] to-[#041633] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-4 text-sm font-medium text-[#DA121A]">GUÍA COMPLETA 2026</div>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Cursos de Inteligencia Artificial para Niños en Panamá
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Todo lo que necesitas saber para elegir el mejor curso de IA para tu hijo
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <article className="py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="prose prose-lg max-w-none">
              <h2>¿Por Qué Enseñar IA a Niños en Panamá?</h2>
              <p>
                Panamá se está posicionando como hub tecnológico de Centroamérica. Con el Canal de Panamá siendo
                modernizado con tecnología de punta y empresas tech estableciéndose en la Ciudad del Saber, los niños
                panameños que aprendan IA hoy tendrán ventaja competitiva mañana.
              </p>

              <h2>¿Qué Aprenden los Niños en un Curso de IA?</h2>
              <ul>
                <li>
                  <strong>ChatGPT y prompting:</strong> Comunicarse efectivamente con inteligencias artificiales
                </li>
                <li>
                  <strong>Midjourney:</strong> Crear arte e ilustraciones con IA
                </li>
                <li>
                  <strong>Programación asistida:</strong> Desarrollar apps con ayuda de IA
                </li>
                <li>
                  <strong>Creación de contenido:</strong> Videos, música, historias generadas con IA
                </li>
                <li>
                  <strong>Pensamiento crítico:</strong> Evaluar y verificar información de IA
                </li>
              </ul>

              <h2>Edad Recomendada</h2>
              <p>En InnovaKids trabajamos con niños de 8 a 14 años. Esta es la edad ideal porque:</p>
              <ul>
                <li>Ya tienen habilidades de lectura y escritura desarrolladas</li>
                <li>Pueden seguir instrucciones complejas</li>
                <li>Su creatividad está en su punto máximo</li>
                <li>Están en edad de formar hábitos tecnológicos saludables</li>
              </ul>

              <h2>¿Clases Presenciales o Online?</h2>
              <p>
                Todas nuestras clases son 100% online en vivo. Esto significa que tu hijo puede participar desde
                cualquier ciudad de Panamá: Ciudad de Panamá, Colón, David, Santiago, Chitré, etc.
              </p>
              <p>
                <strong>Próximamente</strong> estaremos organizando talleres y eventos presenciales en las principales
                ciudades de Panamá. Por ahora el formato online nos permite ofrecer la mejor calidad con profesores
                especializados.
              </p>

              <h2>¿Cuánto Cuesta un Curso de IA para Niños en Panamá?</h2>
              <p>
                El programa completo de InnovaKids cuesta <strong>$200 USD</strong> e incluye:
              </p>
              <ul>
                <li>10 clases en vivo de 90 minutos cada una</li>
                <li>Grupos de máximo 5 niños (atención personalizada)</li>
                <li>Acceso a 10+ herramientas de IA profesionales</li>
                <li>Proyectos reales publicables</li>
                <li>Certificado de finalización</li>
                <li>Soporte por WhatsApp</li>
                <li>Garantía de 10 días</li>
              </ul>

              <h2>Comparativa con Otras Opciones en Panamá</h2>
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>InnovaKids</th>
                    <th>Otros</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Niños por grupo</td>
                    <td className="text-green-600 font-bold">Máx 5</td>
                    <td>15-30</td>
                  </tr>
                  <tr>
                    <td>Clases en vivo</td>
                    <td className="text-green-600 font-bold">Sí</td>
                    <td>Grabadas</td>
                  </tr>
                  <tr>
                    <td>Garantía</td>
                    <td className="text-green-600 font-bold">10 días</td>
                    <td>No tienen</td>
                  </tr>
                  <tr>
                    <td>Proyectos reales</td>
                    <td className="text-green-600 font-bold">6+</td>
                    <td>1-2</td>
                  </tr>
                </tbody>
              </table>

              <h2>Testimonios de Familias Panameñas</h2>
              <blockquote>
                "Mi hijo Diego creó su primera app en 4 semanas. Los profesores son excelentes y realmente se preocupan
                por cada niño. Los grupos pequeños hacen toda la diferencia."
                <footer>— María González, Ciudad de Panamá</footer>
              </blockquote>

              <h2>Preguntas Frecuentes</h2>

              <h3>¿Mi hijo necesita saber programar?</h3>
              <p>No. El curso está diseñado para principiantes completos. Empezamos desde cero.</p>

              <h3>¿Qué equipo necesita?</h3>
              <p>Solo un computador con internet. Puede ser Windows, Mac o Chromebook.</p>

              <h3>¿Los horarios son en zona Panamá?</h3>
              <p>Sí. Todos los horarios están en GMT-5 (hora de Panamá). Nos adaptamos a tu agenda.</p>

              <h3>¿Qué pasa si no me gusta el curso?</h3>
              <p>Tienes 10 días de garantía. Si no estás satisfecho, te devolvemos el 100% de tu dinero.</p>
            </div>

            {/* CTA BOX */}
            <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#072357] to-[#041633] p-8 text-center text-white">
              <h2 className="mb-4 text-2xl font-bold">¿Listo para Inscribir a Tu Hijo?</h2>
              <p className="mb-8 text-white/80">
                Agenda una evaluación gratuita y descubre si InnovaKids es ideal para tu familia
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-[#DA121A] px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Evaluación Gratuita
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#072357]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
            </div>

            {/* RELATED LINKS */}
            <div className="mt-12">
              <h3 className="mb-4 text-xl font-bold">Artículos Relacionados</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/pa/cursos-ia-ninos-panama"
                  className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
                >
                  Cursos IA Niños Panamá
                </Link>
                <Link
                  href="/pa/clases-ia-ninos-panama-city"
                  className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
                >
                  Clases IA Ciudad de Panamá
                </Link>
                <Link
                  href="/pa"
                  className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
                >
                  Todas las Ciudades de Panamá
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
