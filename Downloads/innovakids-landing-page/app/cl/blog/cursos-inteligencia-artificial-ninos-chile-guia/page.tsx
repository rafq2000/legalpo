import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CheckCircle, Target, Clock, Star, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Cursos de Inteligencia Artificial para Niños en Chile: Guía Completa 2026",
  description:
    "Guía definitiva sobre cursos de IA para niños en Chile. Compara opciones, precios, metodologías. Descubre cómo tu hijo puede aprender ChatGPT, Midjourney y más.",
  keywords:
    "cursos inteligencia artificial niños chile, guía ia para niños, aprender ia santiago, cursos programación niños chile, innovakids chile guía",
  alternates: {
    canonical: "https://www.innovakidslatam.com/cl/blog/cursos-inteligencia-artificial-ninos-chile-guia",
  },
  openGraph: {
    title: "Cursos de IA para Niños en Chile: Guía Completa 2026",
    description: "Todo lo que necesitas saber sobre cursos de inteligencia artificial para niños en Chile.",
    type: "article",
    publishedTime: "2026-01-01",
    authors: ["InnovaKids"],
  },
}

export default function GuiaIANinosChile() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Leí la guía de IA para niños y me interesa más información.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO ARTÍCULO */}
        <section className="bg-gradient-to-br from-[#0039A6] to-[#001d53] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>Actualizado Enero 2026 • 15 min lectura</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Cursos de Inteligencia Artificial para Niños en Chile: Guía Completa 2026
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Todo lo que necesitas saber para elegir el mejor curso de IA para tu hijo en Chile. Comparamos opciones,
              precios, metodologías y te ayudamos a tomar la mejor decisión.
            </p>
          </div>
        </section>

        {/* CONTENIDO ARTÍCULO */}
        <article className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            {/* INTRO */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl text-muted-foreground">
                La inteligencia artificial está transformando el mundo laboral a una velocidad sin precedentes. En
                Chile, cada vez más padres se preguntan:{" "}
                <strong>¿cómo preparo a mi hijo para este nuevo futuro?</strong> Esta guía te dará todas las respuestas.
              </p>

              <h2 className="mt-12 text-3xl font-bold">¿Por Qué Aprender IA es Importante para Niños Chilenos?</h2>

              <p>
                Según estudios recientes, el 85% de los trabajos que existirán en 2030 aún no se han inventado. La
                inteligencia artificial será tan fundamental como saber leer o usar un computador. Los niños que
                aprendan IA hoy tendrán una ventaja competitiva enorme.
              </p>

              <div className="my-8 rounded-2xl bg-[#D52B1E]/10 p-6">
                <h3 className="mb-4 text-xl font-bold text-[#0039A6]">Dato Importante</h3>
                <p className="text-muted-foreground">
                  Chile es uno de los países latinoamericanos con mayor adopción de tecnología. Sin embargo, solo el 3%
                  de los niños chilenos tiene acceso a educación en IA de calidad. Esta es una oportunidad única para
                  darle ventaja a tu hijo.
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold">¿Qué Debe Incluir un Buen Curso de IA para Niños?</h2>

              <h3 className="mt-8 text-2xl font-bold">1. Herramientas Reales, No Simuladores</h3>
              <p>
                Tu hijo debe aprender con las mismas herramientas que usan profesionales: ChatGPT, Midjourney, Cursor,
                Runway. Los simuladores o versiones "para niños" no preparan para el mundo real.
              </p>

              <h3 className="mt-8 text-2xl font-bold">2. Proyectos Prácticos</h3>
              <p>
                La teoría sin práctica no sirve. Un buen curso debe permitir que tu hijo cree proyectos reales: apps,
                chatbots, videos, música. Cosas que pueda mostrar y usar.
              </p>

              <h3 className="mt-8 text-2xl font-bold">3. Grupos Pequeños</h3>
              <p>
                Las clases masivas de 20 o 30 niños no funcionan para enseñar habilidades técnicas. Busca cursos con
                máximo 5 niños por grupo para garantizar atención personalizada.
              </p>

              <h3 className="mt-8 text-2xl font-bold">4. Profesores con Experiencia Real</h3>
              <p>
                El profesor debe usar IA en su trabajo diario, no solo conocer la teoría. Esto marca una diferencia
                enorme en la calidad de la enseñanza.
              </p>
            </div>

            {/* CTA INTERMEDIO */}
            <div className="my-12 rounded-3xl bg-gradient-to-br from-[#0039A6] to-[#001d53] p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Quieres que tu hijo aprenda IA de verdad?</h3>
              <p className="mb-6 text-white/80">
                En InnovaKids cumplimos todos estos requisitos. Evaluación gratuita sin compromiso.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-[#D52B1E] px-6 py-3 font-bold transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Evaluación Gratis
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-bold transition-all hover:bg-white hover:text-[#0039A6]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
            </div>

            {/* COMPARACIÓN */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="mt-12 text-3xl font-bold">Comparación: InnovaKids vs Otras Opciones en Chile</h2>

              <div className="my-8 overflow-hidden rounded-2xl border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-4 font-bold">Característica</th>
                      <th className="p-4 font-bold text-[#0039A6]">InnovaKids</th>
                      <th className="p-4 font-bold">Otros Cursos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4">Niños por grupo</td>
                      <td className="p-4 font-bold text-[#0039A6]">Máximo 5</td>
                      <td className="p-4 text-muted-foreground">15-30</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Herramientas</td>
                      <td className="p-4 font-bold text-[#0039A6]">10+ profesionales</td>
                      <td className="p-4 text-muted-foreground">2-3 básicas</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Proyectos reales</td>
                      <td className="p-4 font-bold text-[#0039A6]">6+ proyectos</td>
                      <td className="p-4 text-muted-foreground">1-2 proyectos</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Garantía</td>
                      <td className="p-4 font-bold text-[#0039A6]">10 días devolución</td>
                      <td className="p-4 text-muted-foreground">Sin garantía</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Soporte</td>
                      <td className="p-4 font-bold text-[#0039A6]">WhatsApp directo</td>
                      <td className="p-4 text-muted-foreground">Email</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Precio</td>
                      <td className="p-4 font-bold text-[#0039A6]">$197 USD</td>
                      <td className="p-4 text-muted-foreground">$150-$400 USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mt-12 text-3xl font-bold">¿Qué Aprenderá Tu Hijo en InnovaKids?</h2>

              <p>
                Nuestro programa de 10 clases está diseñado para que tu hijo pase de consumidor a creador de tecnología.
                Estos son algunos de los proyectos que realizará:
              </p>

              <ul className="my-6 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0039A6]" />
                  <span>
                    <strong>Comics con IA:</strong> Historias ilustradas usando ChatGPT y Midjourney
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0039A6]" />
                  <span>
                    <strong>Música original:</strong> Canciones personalizadas con Suno AI
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0039A6]" />
                  <span>
                    <strong>Videos profesionales:</strong> Edición con efectos especiales usando Runway
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0039A6]" />
                  <span>
                    <strong>Apps funcionales:</strong> Aplicaciones reales con Cursor y Replit
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0039A6]" />
                  <span>
                    <strong>Chatbots inteligentes:</strong> Asistentes virtuales con GPT-4
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0039A6]" />
                  <span>
                    <strong>Videojuegos:</strong> Juegos desde cero con ayuda de IA
                  </span>
                </li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold">Testimonios de Familias Chilenas</h2>
            </div>

            {/* TESTIMONIOS */}
            <div className="my-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  name: "Francisca M.",
                  location: "Las Condes, Santiago",
                  text: "Tomás creó su primera app en 4 semanas. Como ingeniera quedé impresionada con el nivel.",
                },
                {
                  name: "Rodrigo V.",
                  location: "Providencia, Santiago",
                  text: "La Cata pasaba todo el día en TikTok. Ahora usa IA para crear sus propios videos.",
                },
              ].map((t, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <div className="mb-4 flex text-[#D52B1E]">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">📍 {t.location}</div>
                </div>
              ))}
            </div>

            {/* PREGUNTAS FRECUENTES */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="mt-12 text-3xl font-bold">Preguntas Frecuentes</h2>

              <h3 className="mt-8 text-xl font-bold">¿Las clases son presenciales o online?</h3>
              <p>
                Todas las clases son 100% online en vivo. Tu hijo puede participar desde Santiago, Viña del Mar,
                Concepción o cualquier ciudad de Chile. Solo necesita computador e internet.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Qué edad es la ideal para empezar?</h3>
              <p>
                Nuestro programa está diseñado para niños de 8 a 14 años. En la evaluación gratuita determinamos si tu
                hijo está listo para comenzar.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Tienen garantía?</h3>
              <p>
                Sí. Ofrecemos garantía de 10 días. Si no estás 100% satisfecho por cualquier razón, te devolvemos tu
                dinero completo sin preguntas.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Tienen eventos presenciales en Chile?</h3>
              <p>
                Próximamente estaremos organizando talleres y eventos presenciales en las principales ciudades de Chile.
                Por ahora todas las clases son 100% online en vivo.
              </p>
            </div>

            {/* CTA FINAL */}
            <div className="my-12 rounded-3xl bg-gradient-to-br from-[#0039A6] to-[#001d53] p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Listo para darle a tu hijo la ventaja del futuro?</h3>
              <p className="mb-6 text-white/80">
                Agenda una evaluación gratuita y descubre si InnovaKids es para tu familia.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-[#D52B1E] px-8 py-4 text-lg font-bold transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Evaluación Gratis
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold transition-all hover:bg-white hover:text-[#0039A6]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
              <p className="mt-4 text-sm text-white/60">$197 USD • 10 clases • Máx 5 niños • Garantía 10 días</p>
            </div>

            {/* LINKS RELACIONADOS */}
            <div className="mt-12">
              <h3 className="mb-6 text-xl font-bold">Artículos Relacionados</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/cl/cursos-ia-ninos-chile"
                  className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Cursos IA Chile <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/cl/clases-ia-ninos-santiago"
                  className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Clases en Santiago <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/cl"
                  className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Todas las Ciudades <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
