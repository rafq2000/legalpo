import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Cursos de Inteligencia Artificial para Niños en Costa Rica 2026: Guía Completa",
  description:
    "Guía definitiva sobre cursos de IA para niños en Costa Rica. Qué aprenden, mejores opciones, precios, edades recomendadas. Todo lo que necesitas saber.",
}

export default function BlogCursosIANinosCostaRica() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent(
    "Hola! Leí la guía de IA para niños en Costa Rica y quiero más información.",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#002B7F] to-[#001a4d] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-4 text-sm font-medium text-[#CE1126]">GUÍA COMPLETA 2026</div>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Cursos de Inteligencia Artificial para Niños en Costa Rica
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Todo lo que necesitas saber para elegir el mejor curso de IA para tu hijo. ¡Pura vida!
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <article className="py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="prose prose-lg max-w-none">
              <h2>¿Por Qué Enseñar IA a Niños en Costa Rica?</h2>
              <p>
                Costa Rica es líder en desarrollo sostenible y tecnología en Centroamérica. Con empresas como Intel,
                Amazon y Microsoft operando en el país, los niños ticos que aprendan IA hoy tendrán acceso a las mejores
                oportunidades laborales del futuro.
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
              <p>
                En InnovaKids trabajamos con niños de 8 a 14 años. Esta es la edad ideal porque ya tienen habilidades de
                lectura desarrolladas y su creatividad está en su punto máximo.
              </p>

              <h2>¿Clases Presenciales o Online?</h2>
              <p>
                Todas nuestras clases son 100% online en vivo. Tu hijo puede participar desde cualquier provincia: San
                José, Heredia, Alajuela, Cartago, Guanacaste, etc.
              </p>
              <p>
                <strong>Próximamente</strong> estaremos organizando talleres presenciales en las principales ciudades de
                Costa Rica.
              </p>

              <h2>¿Cuánto Cuesta un Curso de IA para Niños en Costa Rica?</h2>
              <p>
                El programa completo de InnovaKids cuesta <strong>$197 USD</strong> e incluye:
              </p>
              <ul>
                <li>10 clases en vivo de 90 minutos cada una</li>
                <li>Grupos de máximo 5 niños</li>
                <li>Acceso a 10+ herramientas de IA profesionales</li>
                <li>Proyectos reales publicables</li>
                <li>Certificado de finalización</li>
                <li>Soporte por WhatsApp</li>
                <li>Garantía de 10 días</li>
              </ul>

              <h2>Métodos de Pago en Costa Rica</h2>
              <p>
                Aceptamos tarjetas de crédito/débito, SINPE Móvil y PayPal. Todas las opciones son seguras y el precio
                es $197 USD.
              </p>

              <h2>Testimonios de Familias Ticas</h2>
              <blockquote>
                "Mi hijo Mateo creó su primera app en un mes. ¡Pura vida! Los profes son tuanis y el contenido está muy
                actualizado. Los grupos pequeños hacen toda la diferencia."
                <footer>— Carolina Jiménez, Escazú</footer>
              </blockquote>
            </div>

            {/* CTA BOX */}
            <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#002B7F] to-[#001a4d] p-8 text-center text-white">
              <h2 className="mb-4 text-2xl font-bold">¿Listo para Inscribir a Tu Hijo?</h2>
              <p className="mb-8 text-white/80">
                Agenda una evaluación gratuita y descubre si InnovaKids es ideal para tu familia
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-[#CE1126] px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Evaluación Gratuita
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#002B7F]"
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
                  href="/cr/cursos-ia-ninos-costa-rica"
                  className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
                >
                  Cursos IA Niños Costa Rica
                </Link>
                <Link
                  href="/cr/clases-ia-ninos-san-jose"
                  className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
                >
                  Clases IA San José
                </Link>
                <Link
                  href="/cr"
                  className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
                >
                  Todas las Provincias
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
