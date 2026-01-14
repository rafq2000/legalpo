import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Check, Users, Shield, Star, Award, Zap } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cursos de IA para Chicos Argentina 2026 | Prueba Gratis | InnovaKids",
  description:
    "Curso de inteligencia artificial para chicos 8-14 años en Argentina. Aprende ChatGPT, Midjourney, creá apps. Primera clase GRATIS. 10 clases en vivo. ¡Inscribite hoy! 🚀",
  keywords: [
    "cursos de ia para chicos",
    "cursos de ia para chicos argentina",
    "cursos de inteligencia artificial para chicos",
    "clases de ia para chicos",
    "ia para chicos argentina",
    "curso ia chicos buenos aires",
    "inteligencia artificial chicos cordoba",
    "curso ia rosario chicos",
  ],
  openGraph: {
    title: "Cursos de IA para Chicos en Argentina | InnovaKids",
    description: "Curso de IA para chicos de 8-14 años. ChatGPT, Midjourney, apps. Primera clase gratis.",
    url: "https://www.innovakidslatam.com/ar/cursos-ia-chicos-argentina",
    siteName: "InnovaKids",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://www.innovakidslatam.com/og-argentina.jpg",
        width: 1200,
        height: 630,
        alt: "Cursos de IA para Chicos en Argentina - InnovaKids",
      },
    ],
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/ar/cursos-ia-chicos-argentina",
    languages: {
      "es-AR": "https://www.innovakidslatam.com/ar/cursos-ia-chicos-argentina",
      "es-MX": "https://www.innovakidslatam.com/mx/cursos-ia-ninos-mexico",
      "es-CO": "https://www.innovakidslatam.com/co/cursos-ia-ninos-colombia",
      "es-CL": "https://www.innovakidslatam.com/cl/cursos-ia-ninos-chile",
      "es-PE": "https://www.innovakidslatam.com/pe/cursos-ia-ninos-peru",
      "es-ES": "https://www.innovakidslatam.com/es/cursos-ia-ninos-espana",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "Curso de Inteligencia Artificial #1 para Chicos - Argentina",
      description:
        "El mejor curso de IA para chicos de 8-14 años en Argentina y Latinoamérica. 10 clases en vivo con grupos de máximo 5 alumnos. Aprenden ChatGPT, Midjourney, creación de apps y proyectos reales. Metodología 100% práctica.",
      provider: {
        "@type": "Organization",
        name: "InnovaKids",
        url: "https://www.innovakidslatam.com",
        description: "La academia #1 de IA para niños y adolescentes en Latinoamérica y España",
      },
      courseMode: "online",
      educationalLevel: "beginner",
      teaches: ["Inteligencia Artificial", "ChatGPT", "Midjourney", "Programación", "Creación de Apps"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "52",
        bestRating: "5",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuál es el mejor curso de IA para chicos en Argentina?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "InnovaKids es el curso #1 de inteligencia artificial para chicos en Argentina y Latinoamérica. Con 4.9 estrellas de 52 evaluaciones, grupos de máximo 5 chicos, metodología 100% práctica, y más de 2,000 graduados, InnovaKids se destaca por su enfoque en creación real de proyectos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta el curso de IA para chicos en Argentina?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El programa completo tiene un valor de $497 USD. Actualmente hay oferta de lanzamiento 2026 por $297 USD (40% de descuento). Incluye 10 clases en vivo, grupos de máximo 5 chicos, portafolio web, acceso de por vida, y garantía de 10 días.",
          },
        },
      ],
    },
  ],
}

export default function ArgentinaCursosIAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-24 bg-gradient-to-b from-background to-[#0a1628]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-[#75AADB]/10 border border-[#75AADB]/30 rounded-full px-6 py-2">
                <Star className="w-5 h-5 text-[#F6B40E] fill-[#F6B40E]" />
                <span className="text-white font-medium">4.9/5 de 52+ familias argentinas</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Cursos de Inteligencia Artificial
                <br />
                <span className="text-[#75AADB]">para Chicos en Argentina</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Tu hijo aprenderá a <strong className="text-white">crear con IA</strong> desde la primera clase.
                ChatGPT, Midjourney, apps y más. Edad: 8-14 años. 🇦🇷
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto py-8">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#75AADB]">2,000+</div>
                  <div className="text-gray-400 text-sm mt-1">Chicos graduados</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#75AADB]">10</div>
                  <div className="text-gray-400 text-sm mt-1">Clases en vivo</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#75AADB]">5</div>
                  <div className="text-gray-400 text-sm mt-1">Chicos máx/clase</div>
                </div>
              </div>

              {/* CTA Primary */}
              <div className="space-y-4">
                <Link href="/#sesion-estrategica">
                  <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all">
                    Reservar Clase Demo GRATIS
                  </Button>
                </Link>
                <p className="text-gray-400 text-sm">Sin compromiso - Cupo limitado - Solo hoy</p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" /> Garantía 10 días
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#75AADB]" /> Grupos de 5 chicos
                </span>
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#F6B40E]" /> Certificación oficial
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO TESTIMONIAL */}
        <section className="py-24 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Familias Argentinas Confían en InnovaKids
            </h2>

            <div className="bg-[#0f2744] rounded-2xl p-8 border border-white/10">
              <blockquote className="text-xl text-gray-300 italic text-center mb-6">
                "Mi hijo de 11 años creó su primer videojuego con IA en solo 3 semanas. No puedo creer lo que aprendió.
                Vale cada peso invertido."
              </blockquote>
              <cite className="block text-center text-[#75AADB] font-semibold">
                — María González, mamá de Santiago (Buenos Aires)
              </cite>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10 text-center">
                <p className="text-gray-300 italic mb-4">
                  "Mi hijo ahora quiere ser programador gracias a este curso."
                </p>
                <span className="text-[#75AADB] text-sm font-medium">— Carlos R., Córdoba</span>
              </div>
              <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10 text-center">
                <p className="text-gray-300 italic mb-4">
                  "Los grupos chicos hacen toda la diferencia. Atención personalizada real."
                </p>
                <span className="text-[#75AADB] text-sm font-medium">— Ana M., Rosario</span>
              </div>
              <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10 text-center">
                <p className="text-gray-300 italic mb-4">
                  "La mejor inversión educativa que hemos hecho para nuestros hijos."
                </p>
                <span className="text-[#75AADB] text-sm font-medium">— Roberto L., Mendoza</span>
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ APRENDERÁN - 10 CLASES */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
              ¿Qué Aprenderá Tu Hijo en las 10 Clases?
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Cada clase es 100% práctica. Los chicos crean proyectos reales que pueden mostrar a familia y amigos.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🤖",
                  title: "Chatbots Inteligentes",
                  desc: "Crean su propio asistente virtual con ChatGPT",
                  tools: "ChatGPT, Claude",
                },
                {
                  icon: "🎨",
                  title: "Arte con IA",
                  desc: "Generan ilustraciones y arte digital profesional",
                  tools: "Midjourney, DALL-E",
                },
                {
                  icon: "🎵",
                  title: "Música Original",
                  desc: "Componen canciones personalizadas con IA",
                  tools: "Suno AI, Udio",
                },
                {
                  icon: "📱",
                  title: "Apps Funcionales",
                  desc: "Programan aplicaciones reales sin código previo",
                  tools: "Cursor, Replit",
                },
                {
                  icon: "🎮",
                  title: "Videojuegos",
                  desc: "Desarrollan juegos desde cero con ayuda de IA",
                  tools: "GPT-4, Phaser",
                },
                {
                  icon: "📚",
                  title: "Comics con IA",
                  desc: "Crean historias ilustradas completas",
                  tools: "ChatGPT, Midjourney",
                },
                {
                  icon: "🎬",
                  title: "Videos Profesionales",
                  desc: "Editan videos con efectos especiales de IA",
                  tools: "Runway, Descript",
                },
                {
                  icon: "📊",
                  title: "Presentaciones",
                  desc: "Diseñan presentaciones impactantes",
                  tools: "Gamma AI, Canva",
                },
                {
                  icon: "🧠",
                  title: "Ética en IA",
                  desc: "Aprenden uso responsable de la tecnología",
                  tools: "Casos prácticos",
                },
                { icon: "🚀", title: "Proyecto Final", desc: "Presentan su startup ante jurado", tools: "Demo Day" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10 hover:border-[#75AADB]/50 transition-all"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Clase {i + 1}: {item.title}
                  </h3>
                  <p className="text-gray-400 mb-3">{item.desc}</p>
                  <span className="text-[#75AADB] text-sm">Herramientas: {item.tools}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/#sesion-estrategica">
                <Button className="bg-[#75AADB] hover:bg-[#5a8fc0] text-white px-10 py-6 text-lg font-bold rounded-full">
                  Ver Programa Completo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* METODOLOGÍA */}
        <section className="py-24 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
              Metodología InnovaKids: Aprenden Creando
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Olvidamos las clases aburridas de teoría. En InnovaKids tus hijos
              <strong className="text-white"> crean proyectos reales desde el minuto 1</strong>.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {[
                { num: "1", title: "Exploración Guiada", desc: "Cada clase comienza con un desafío creativo real." },
                {
                  num: "2",
                  title: "Construcción Práctica",
                  desc: "Usan herramientas profesionales de Silicon Valley.",
                },
                { num: "3", title: "Iteración y Mejora", desc: "Aprenden que la primera versión nunca es definitiva." },
                { num: "4", title: "Presentación", desc: "Presentan su trabajo y construyen su portfolio." },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#75AADB] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="bg-[#0f2744] rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white text-center mb-8">InnovaKids vs Cursos Tradicionales</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4 text-gray-400">Aspecto</th>
                      <th className="text-center py-4 px-4 text-[#75AADB]">InnovaKids</th>
                      <th className="text-center py-4 px-4 text-gray-500">Otros Cursos</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      ["Enfoque", "Proyecto-práctica desde clase 1", "Teoría primero, práctica después"],
                      ["Herramientas", "10+ IAs profesionales", "1-2 herramientas básicas"],
                      ["Proyectos", "10 proyectos completos", "Ejercicios sin aplicación real"],
                      ["Grupos", "Máximo 5 chicos por clase", "20-30 estudiantes por sesión"],
                      ["Garantía", "10 días devolución completa", "Sin garantía"],
                      ["Soporte", "WhatsApp 24/7 + comunidad", "Solo durante clase"],
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
            </div>
          </div>
        </section>

        {/* PRECIO Y GARANTÍA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-gradient-to-br from-[#0f2744] to-[#1a3a5c] rounded-3xl p-12 border border-[#75AADB]/30 text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1 mb-6">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">Oferta Lanzamiento 2026 - 40% OFF</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Inversión en el Futuro de Tu Hijo</h2>

              <div className="mb-8">
                <div className="text-xl text-gray-400 line-through">$497 USD</div>
                <div className="text-6xl font-bold text-white mb-2">$297 USD</div>
                <p className="text-[#75AADB] font-medium">Ahorrás $200 USD - Programa completo de 10 clases</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 text-left">
                {[
                  "10 clases en vivo (90 min cada una)",
                  "Grupos de máximo 5 chicos",
                  "Portafolio web con 10 proyectos",
                  "Acceso de por vida a grabaciones",
                  "Kit de prompts exclusivos ($97 valor)",
                  "Masterclass Seguridad para Padres ($150)",
                  "Soporte WhatsApp 24/7",
                  "Garantía de aprendizaje con tutoría 1-1",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#75AADB] flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-center gap-3 text-green-400">
                  <Shield className="w-6 h-6" />
                  <span className="text-xl font-bold">Garantía de 10 Días</span>
                </div>
                <p className="text-gray-400 mt-2">
                  Si no quedás satisfecho, te devolvemos el 100% de tu dinero. Sin preguntas.
                </p>
              </div>

              <div className="space-y-4">
                <Link href="/#sesion-estrategica">
                  <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all">
                    Reservar Mi Lugar Ahora
                  </Button>
                </Link>
                <p className="text-gray-400 text-sm">O reservá con $50 USD y pagás el resto antes de iniciar</p>
              </div>

              {/* Early Bird */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-[#75AADB] font-medium mb-1">Early Bird: Primeros 10 inscritos</p>
                <p className="text-white text-2xl font-bold">
                  $247 USD <span className="text-gray-400 text-base font-normal">(50% OFF)</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Preguntas Frecuentes - Argentina
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "¿Cuánto cuesta el curso de IA para chicos?",
                  a: "El programa completo tiene un valor de $497 USD. Actualmente hay oferta de lanzamiento 2026 por $297 USD (40% de descuento). Incluye 10 clases en vivo, grupos de máximo 5 chicos, portafolio web, acceso de por vida, y garantía de 10 días.",
                },
                {
                  q: "¿Las clases son online o presenciales?",
                  a: "Todas las clases son 100% online en vivo via Zoom. Esto permite que chicos de Buenos Aires, Córdoba, Rosario, Mendoza y toda Argentina puedan participar desde casa.",
                },
                {
                  q: "¿Qué edad deben tener los chicos?",
                  a: "El curso está diseñado para chicos de 8 a 14 años. Agrupamos por edades similares para mejor aprendizaje.",
                },
                {
                  q: "¿Cuántos chicos hay por clase?",
                  a: "Máximo 5 chicos por grupo para garantizar atención personalizada y que cada estudiante pueda participar activamente.",
                },
                {
                  q: "¿Qué pasa si mi hijo falta a una clase?",
                  a: "Todas las clases quedan grabadas con acceso de por vida. Tu hijo puede verlas cuando quiera.",
                },
                {
                  q: "¿Cómo puedo pagar desde Argentina?",
                  a: "Aceptamos PayPal, tarjetas de crédito internacionales y transferencia bancaria. El precio es de $297 USD durante la oferta de lanzamiento.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-[#0f2744] rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-gradient-to-b from-[#0a1628] to-background">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Dale a Tu Hijo la Ventaja del Futuro</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Mientras otros chicos aprenden a usar IA, el tuyo aprenderá a{" "}
              <strong className="text-white">crearla</strong>.
            </p>

            <Link href="/#sesion-estrategica">
              <Button className="bg-[#75AADB] hover:bg-[#5a8fc0] text-white px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all">
                Reservar Clase Demo GRATIS
              </Button>
            </Link>

            <p className="text-gray-500 mt-6 text-sm">Solo 2 cupos disponibles para Argentina esta semana</p>

            {/* Internal Links for SEO */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm mb-4">Más información sobre cursos de IA para chicos en Argentina:</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/ar" className="text-[#75AADB] hover:underline">
                  Cursos IA Argentina
                </Link>
                <Link href="/ar/clases-ia-chicos-buenos-aires" className="text-[#75AADB] hover:underline">
                  Clases IA Buenos Aires
                </Link>
                <Link
                  href="/ar/blog/cursos-inteligencia-artificial-chicos-argentina-guia"
                  className="text-[#75AADB] hover:underline"
                >
                  Guía Completa IA Chicos
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
