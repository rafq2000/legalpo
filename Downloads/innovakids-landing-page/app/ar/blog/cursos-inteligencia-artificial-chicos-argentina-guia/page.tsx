import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cursos de Inteligencia Artificial para Chicos en Argentina: Guía Completa 2026",
  description:
    "Guía definitiva sobre cursos de IA para chicos en Argentina. Comparativa de programas, precios, edades y qué aprenden. Todo lo que necesitás saber antes de inscribir a tu hijo.",
  keywords: [
    "cursos inteligencia artificial chicos argentina",
    "mejores cursos ia chicos",
    "donde estudiar ia chicos argentina",
    "cursos programacion chicos buenos aires",
    "ia para chicos online argentina",
  ],
  openGraph: {
    title: "Cursos de IA para Chicos en Argentina: Guía Completa 2026",
    description: "Todo lo que necesitás saber sobre cursos de inteligencia artificial para chicos en Argentina.",
    url: "https://www.innovakidslatam.com/ar/blog/cursos-inteligencia-artificial-chicos-argentina-guia",
    siteName: "InnovaKids",
    locale: "es_AR",
    type: "article",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/ar/blog/cursos-inteligencia-artificial-chicos-argentina-guia",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cursos de Inteligencia Artificial para Chicos en Argentina: Guía Completa 2026",
  description: "Guía definitiva sobre cursos de IA para chicos en Argentina. Comparativa, precios y qué aprenden.",
  author: {
    "@type": "Organization",
    name: "InnovaKids",
  },
  publisher: {
    "@type": "Organization",
    name: "InnovaKids",
    url: "https://www.innovakidslatam.com",
  },
  datePublished: "2026-01-08",
  dateModified: "2026-01-08",
}

export default function ArgentinaBlogGuiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO ARTICLE */}
        <section className="relative pt-32 pb-16 bg-gradient-to-b from-background to-[#0a1628]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> 8 Enero 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 12 min lectura
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" /> Equipo InnovaKids
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Cursos de Inteligencia Artificial para Chicos en Argentina: Guía Completa 2026
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Si estás buscando el mejor curso de IA para tu hijo en Argentina, esta guía te va a ayudar a tomar la
              decisión correcta. Analizamos opciones, precios, metodologías y qué deberías buscar en un programa de
              calidad.
            </p>
          </div>
        </section>

        {/* ARTICLE CONTENT */}
        <article className="py-16 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">¿Por Qué Tu Hijo Debería Aprender IA en 2026?</h2>

              <p className="text-gray-300 mb-6">
                La inteligencia artificial ya no es el futuro: es el presente. Según el Foro Económico Mundial, el 65%
                de los chicos que hoy están en primaria trabajarán en empleos que todavía no existen. Y la mayoría de
                esos empleos estarán relacionados con IA.
              </p>

              <p className="text-gray-300 mb-6">
                En Argentina, la demanda de profesionales con conocimientos en IA creció un 340% en los últimos 3 años.
                Las empresas tecnológicas argentinas como Mercado Libre, Globant y Ualá buscan constantemente talento
                con habilidades en inteligencia artificial.
              </p>

              <div className="bg-[#0f2744] rounded-xl p-6 border border-white/10 my-8">
                <h3 className="text-xl font-bold text-[#75AADB] mb-4">Dato Importante</h3>
                <p className="text-gray-300">
                  Los chicos que aprenden IA entre los 8 y 14 años tienen 3 veces más probabilidades de elegir carreras
                  STEM (ciencia, tecnología, ingeniería y matemáticas) según estudios de la Universidad de Stanford.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
                ¿Qué Debe Incluir un Buen Curso de IA para Chicos?
              </h2>

              <p className="text-gray-300 mb-6">
                No todos los cursos de IA son iguales. Acá te cuento qué características debés buscar:
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">1. Grupos Reducidos</h3>
              <p className="text-gray-300 mb-6">
                Un curso con 20 o 30 chicos por clase no funciona. La IA es un tema complejo que requiere atención
                personalizada. Buscá programas con máximo 5 alumnos por grupo. Así cada chico puede hacer preguntas y
                recibir feedback individual.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">2. Enfoque Práctico</h3>
              <p className="text-gray-300 mb-6">
                Los chicos aprenden haciendo, no escuchando. Un buen curso debe tener al menos 80% de práctica. Tu hijo
                debería crear proyectos reales: chatbots, arte con IA, música, apps y hasta videojuegos.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">3. Herramientas Profesionales</h3>
              <p className="text-gray-300 mb-6">
                Evitá cursos que usen herramientas "para chicos" simplificadas. Los mejores programas enseñan con las
                mismas herramientas que usan los profesionales: ChatGPT, Claude, Midjourney, Cursor, etc.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">4. Garantía de Satisfacción</h3>
              <p className="text-gray-300 mb-6">
                Un programa serio ofrece garantía de devolución. Si no estás satisfecho con las primeras clases,
                deberías poder recuperar tu inversión.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
                Comparativa: InnovaKids vs Otros Cursos en Argentina
              </h2>

              <div className="overflow-x-auto my-8">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4 text-gray-400">Característica</th>
                      <th className="text-center py-4 px-4 text-[#75AADB]">InnovaKids</th>
                      <th className="text-center py-4 px-4 text-gray-500">Otros Cursos</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      ["Chicos por clase", "Máximo 5", "15-30"],
                      ["Clases totales", "10 clases", "4-8 clases"],
                      ["Proyectos reales", "10 proyectos", "1-3 ejercicios"],
                      ["Herramientas", "10+ IAs profesionales", "1-2 básicas"],
                      ["Garantía", "10 días devolución", "Sin garantía"],
                      ["Precio", "$200 USD", "$150-400 USD"],
                      ["Certificado", "Internacional", "Local o ninguno"],
                    ].map(([aspect, innovakids, others], i) => (
                      <tr key={i} className="border-b border-white/5">
                        <td className="py-4 px-4 text-gray-300">{aspect}</td>
                        <td className="py-4 px-4 text-center text-white">{innovakids}</td>
                        <td className="py-4 px-4 text-center text-gray-500">{others}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
                ¿Qué Proyectos Crean los Chicos en InnovaKids?
              </h2>

              <p className="text-gray-300 mb-6">
                En 10 semanas, tu hijo va a crear proyectos increíbles que puede mostrar a familia y amigos:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                {[
                  "Chatbot personalizado con ChatGPT",
                  "Arte digital profesional con Midjourney",
                  "Canción original compuesta con IA",
                  "App funcional sin código previo",
                  "Videojuego completo",
                  "Comic ilustrado con IA",
                  "Video con efectos especiales",
                  "Presentación tipo TED",
                  "Análisis de datos con IA",
                  "Startup presentada en Demo Day",
                ].map((proyecto, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#0f2744]/50 rounded-lg p-4">
                    <span className="text-[#75AADB]">✓</span>
                    <span className="text-gray-300">{proyecto}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Preguntas Frecuentes</h2>

              <div className="space-y-6 my-8">
                {[
                  {
                    q: "¿Mi hijo necesita saber programar?",
                    a: "No. El curso está diseñado para principiantes absolutos. Empezamos desde cero.",
                  },
                  {
                    q: "¿Las clases son en vivo o grabadas?",
                    a: "Son en vivo via Zoom, con grupos de máximo 5 chicos. También quedan grabadas para ver después.",
                  },
                  {
                    q: "¿Qué pasa si mi hijo falta a una clase?",
                    a: "Todas las clases quedan grabadas con acceso de por vida.",
                  },
                  {
                    q: "¿Cómo puedo pagar desde Argentina?",
                    a: "Aceptamos PayPal, tarjetas de crédito internacionales y transferencia bancaria.",
                  },
                ].map((faq, i) => (
                  <div key={i} className="bg-[#0f2744] rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                    <p className="text-gray-400">{faq.a}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
                Conclusión: ¿Vale la Pena Invertir en un Curso de IA?
              </h2>

              <p className="text-gray-300 mb-6">
                La respuesta corta es sí. La IA está transformando todas las industrias y los chicos que aprendan a
                usarla ahora tendrán una ventaja enorme en el futuro.
              </p>

              <p className="text-gray-300 mb-6">
                Lo más importante es elegir un curso con grupos reducidos, enfoque práctico y garantía de satisfacción.
                No te dejes llevar solo por el precio: un curso barato con 30 chicos por clase no le va a servir a tu
                hijo.
              </p>
            </div>

            {/* CTA BOX */}
            <div className="bg-gradient-to-br from-[#0f2744] to-[#1a3a5c] rounded-2xl p-8 border border-[#75AADB]/30 text-center mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">¿Querés que tu hijo aprenda IA de verdad?</h3>
              <p className="text-gray-300 mb-6">
                Reservá una clase demo gratuita y conocé nuestra metodología. Sin compromiso.
              </p>
              <Link href="/#sesion-estrategica">
                <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-8 py-6 text-lg font-bold rounded-full">
                  Reservar Clase Demo GRATIS <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Internal Links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Artículos Relacionados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/ar/cursos-ia-chicos-argentina"
                  className="bg-[#0f2744]/50 rounded-lg p-4 hover:bg-[#0f2744] transition-colors"
                >
                  <span className="text-[#75AADB] font-medium">Cursos de IA para Chicos en Argentina</span>
                  <p className="text-gray-400 text-sm mt-1">Información completa sobre el programa</p>
                </Link>
                <Link
                  href="/ar/clases-ia-chicos-buenos-aires"
                  className="bg-[#0f2744]/50 rounded-lg p-4 hover:bg-[#0f2744] transition-colors"
                >
                  <span className="text-[#75AADB] font-medium">Clases de IA en Buenos Aires</span>
                  <p className="text-gray-400 text-sm mt-1">Información específica para Buenos Aires</p>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
