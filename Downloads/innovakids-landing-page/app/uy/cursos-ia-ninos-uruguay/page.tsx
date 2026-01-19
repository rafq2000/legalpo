import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Check, Users, Shield, Star, Award } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cursos de IA para Niños Uruguay 2026 | Prueba Gratis | InnovaKids",
  description:
    "Curso de inteligencia artificial para niños de 8-14 años en Uruguay. Aprende ChatGPT, Midjourney, creá apps. Primera clase GRATIS. 10 clases en vivo. ¡Inscribite hoy! 🇺🇾",
  keywords: [
    "cursos de ia para niños",
    "cursos de ia para niños uruguay",
    "cursos de inteligencia artificial para niños",
    "clases de ia para niños",
    "ia para niños uruguay",
    "curso ia niños montevideo",
    "inteligencia artificial niños punta del este",
  ],
  openGraph: {
    title: "Cursos de IA para Niños en Uruguay | InnovaKids",
    description: "Curso de IA para niños 8-14 años. ChatGPT, Midjourney, apps. Primera clase gratis.",
    url: "https://www.innovakidslatam.com/uy/cursos-ia-ninos-uruguay",
    siteName: "InnovaKids",
    locale: "es_UY",
    type: "website",
    images: [
      {
        url: "https://www.innovakidslatam.com/og-uruguay.jpg",
        width: 1200,
        height: 630,
        alt: "Cursos de IA para Niños en Uruguay - InnovaKids",
      },
    ],
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/uy/cursos-ia-ninos-uruguay",
    languages: {
      "es-UY": "https://www.innovakidslatam.com/uy/cursos-ia-ninos-uruguay",
      "es-MX": "https://www.innovakidslatam.com/mx/cursos-ia-ninos-mexico",
      "es-CO": "https://www.innovakidslatam.com/co/cursos-ia-ninos-colombia",
      "es-AR": "https://www.innovakidslatam.com/ar/cursos-ia-chicos-argentina",
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
      name: "Curso de Inteligencia Artificial para Niños - Uruguay",
      description:
        "Curso de IA para niños de 8-14 años en Uruguay. 10 clases en vivo con grupos de máximo 5 alumnos. Aprenden ChatGPT, Midjourney, creación de apps y proyectos reales.",
      provider: {
        "@type": "Organization",
        name: "InnovaKids",
        url: "https://www.innovakidslatam.com",
      },
      offers: {
        "@type": "Offer",
        price: "197",
        priceCurrency: "USD",
        availability: "https://schema.org/LimitedAvailability",
        validFrom: "2026-01-01",
      },
      courseMode: "online",
      educationalLevel: "beginner",
      teaches: ["Inteligencia Artificial", "ChatGPT", "Midjourney", "Programación", "Creación de Apps"],
      numberOfCredits: "10",
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        startDate: "2026-01-26",
        endDate: "2026-02-28",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "InnovaKids Uruguay",
      description: "Cursos de inteligencia artificial para niños en Uruguay",
      url: "https://www.innovakidslatam.com/uy/cursos-ia-ninos-uruguay",
      telephone: "+56964754219",
      address: {
        "@type": "PostalAddress",
        addressCountry: "UY",
        addressLocality: "Montevideo",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "187",
        bestRating: "5",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuánto cuesta el curso de IA para niños en Uruguay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El programa completo tiene un valor de $497 USD. Actualmente hay una oferta de lanzamiento 2026 por $197 USD (60% OFF). Incluye 10 clases en vivo, grupos de máximo 5 niños, acceso a grabaciones, certificado y garantía de devolución de 10 días.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué edad deben tener los niños para el curso?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El curso está diseñado para niños de 8 a 14 años. Agrupamos por edades similares para mejor aprendizaje.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuántos niños hay por clase?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Máximo 5 niños por grupo para garantizar atención personalizada y que cada estudiante pueda participar activamente.",
          },
        },
      ],
    },
  ],
}

export default function UruguayCursosIAPage() {
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
              <div className="inline-flex items-center gap-2 bg-[#0038A8]/10 border border-[#0038A8]/30 rounded-full px-6 py-2">
                <Star className="w-5 h-5 text-[#FCD116] fill-[#FCD116]" />
                <span className="text-white font-medium">4.9/5 de 187+ familias uruguayas</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Cursos de Inteligencia Artificial
                <br />
                <span className="text-[#0038A8]">para Niños en Uruguay</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Tu hijo aprenderá a <strong className="text-white">crear con IA</strong> desde la primera clase.
                ChatGPT, Midjourney, apps y más. Edad: 8-14 años. 🇺🇾
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto py-8">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#0038A8]">252</div>
                  <div className="text-gray-400 text-sm mt-1">Niños graduados</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#0038A8]">10</div>
                  <div className="text-gray-400 text-sm mt-1">Clases en vivo</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#0038A8]">5</div>
                  <div className="text-gray-400 text-sm mt-1">Niños máx/clase</div>
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
                  <Users className="w-4 h-4 text-[#0038A8]" /> Grupos de 5 niños
                </span>
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#FCD116]" /> Certificación oficial
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO TESTIMONIAL */}
        <section className="py-24 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Familias Uruguayas Confían en InnovaKids
            </h2>

            <div className="bg-[#0f2744] rounded-2xl p-8 border border-white/10">
              <blockquote className="text-xl text-gray-300 italic text-center mb-6">
                "Mi hijo de 10 años creó su primer videojuego con IA en solo 3 semanas. No puedo creer lo que aprendió.
                Vale cada peso invertido."
              </blockquote>
              <cite className="block text-center text-[#0038A8] font-semibold">
                — Carolina Rodríguez, mamá de Martín (Montevideo)
              </cite>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10 text-center">
                <p className="text-gray-300 italic mb-4">
                  "Mi hijo ahora quiere ser programador gracias a este curso."
                </p>
                <span className="text-[#0038A8] text-sm font-medium">— Fernando P., Punta del Este</span>
              </div>
              <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10 text-center">
                <p className="text-gray-300 italic mb-4">
                  "Los grupos chicos hacen toda la diferencia. Atención personalizada real."
                </p>
                <span className="text-[#0038A8] text-sm font-medium">— Lucía M., Maldonado</span>
              </div>
              <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10 text-center">
                <p className="text-gray-300 italic mb-4">
                  "La mejor inversión educativa que hemos hecho para nuestros hijos."
                </p>
                <span className="text-[#0038A8] text-sm font-medium">— Roberto S., Colonia</span>
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
              Cada clase es 100% práctica. Los niños crean proyectos reales que pueden mostrar a familia y amigos.
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
                  className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10 hover:border-[#0038A8]/50 transition-all"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Clase {i + 1}: {item.title}
                  </h3>
                  <p className="text-gray-400 mb-3">{item.desc}</p>
                  <span className="text-[#0038A8] text-sm">Herramientas: {item.tools}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/#sesion-estrategica">
                <Button className="bg-[#0038A8] hover:bg-[#002d86] text-white px-10 py-6 text-lg font-bold rounded-full">
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
                  <div className="w-16 h-16 rounded-full bg-[#0038A8] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
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
                      <th className="text-center py-4 px-4 text-[#0038A8]">InnovaKids</th>
                      <th className="text-center py-4 px-4 text-gray-500">Otros Cursos</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      ["Enfoque", "Proyecto-práctica desde clase 1", "Teoría primero, práctica después"],
                      ["Herramientas", "10+ IAs profesionales", "1-2 herramientas básicas"],
                      ["Proyectos", "10 proyectos completos", "Ejercicios sin aplicación real"],
                      ["Grupos", "Máximo 5 niños por clase", "20-30 estudiantes por sesión"],
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
            <div className="bg-gradient-to-br from-[#0f2744] to-[#1a3a5c] rounded-3xl p-12 border border-[#0038A8]/30 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Inversión en el Futuro de Tu Hijo</h2>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0038A8]/20 border border-[#0038A8]/50 px-6 py-3">
                <span className="text-[#0038A8] font-bold">Próximo curso: 26 de Enero 2026</span>
              </div>

              <div className="mb-8">
                <div className="text-xl text-gray-400 line-through mb-2">$497 USD</div>
                <div className="text-6xl font-bold text-white mb-2">$197 USD</div>
                <span className="bg-[#0038A8] text-white px-3 py-1 rounded-full text-sm font-bold">40% OFF</span>
                <p className="text-gray-400 mt-2">Programa completo de 10 clases</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 text-left">
                {[
                  "10 clases en vivo (90 min cada una)",
                  "Grupos de máximo 5 niños",
                  "Acceso de por vida a grabaciones",
                  "Certificado oficial internacional",
                  "Kit de prompts exclusivos",
                  "Comunidad privada de estudiantes",
                  "Soporte WhatsApp 24/7",
                  "Demo Day con presentación",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#0038A8] flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#FCD116]/10 border border-[#FCD116]/30 rounded-xl p-6 mb-8">
                <div className="text-[#FCD116] font-bold mb-2">🔥 EARLY BIRD - Primeros 10 inscritos</div>
                <div className="text-3xl font-bold text-white">
                  $197 USD <span className="text-lg text-gray-400">(60% OFF)</span>
                </div>
                <p className="text-gray-400 mt-2">Aprovecha el precio de lanzamiento</p>
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

              <Link href="/#sesion-estrategica">
                <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all">
                  Reservar Mi Lugar Ahora
                </Button>
              </Link>
              <p className="text-gray-400 text-sm mt-4">O reserva con $50 USD y paga el resto antes de iniciar</p>
            </div>
          </div>
        </section>

        {/* CIUDADES URUGUAY */}
        <section className="py-24 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">Disponible en Todo Uruguay</h2>
            <p className="text-gray-400 text-center mb-12">
              Clases 100% online. Conectate desde cualquier departamento.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Montevideo",
                "Punta del Este",
                "Maldonado",
                "Salto",
                "Colonia",
                "Paysandú",
                "Rivera",
                "Las Piedras",
                "Ciudad de la Costa",
                "Melo",
                "Mercedes",
                "Durazno",
              ].map((city, i) => (
                <div key={i} className="bg-[#0f2744]/50 rounded-lg p-4 text-center border border-white/10">
                  <span className="text-gray-300">{city}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 mt-8">
              ¿No ves tu ciudad? No importa, nuestras clases son 100% online.
            </p>
          </div>
        </section>

        {/* INTERNAL LINKING */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Explora Más Sobre InnovaKids Uruguay</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/uy"
                className="bg-[#0f2744]/50 hover:bg-[#0f2744] text-gray-300 hover:text-white px-6 py-3 rounded-full border border-white/10 transition-all"
              >
                InnovaKids Uruguay
              </Link>
              <Link
                href="/uy/clases-ia-ninos-montevideo"
                className="bg-[#0f2744]/50 hover:bg-[#0f2744] text-gray-300 hover:text-white px-6 py-3 rounded-full border border-white/10 transition-all"
              >
                Clases IA Montevideo
              </Link>
              <Link
                href="/uy/blog/cursos-inteligencia-artificial-ninos-uruguay-guia"
                className="bg-[#0f2744]/50 hover:bg-[#0f2744] text-gray-300 hover:text-white px-6 py-3 rounded-full border border-white/10 transition-all"
              >
                Guía Completa IA Uruguay
              </Link>
              <Link
                href="/metodologia-aprender-creando"
                className="bg-[#0f2744]/50 hover:bg-[#0f2744] text-gray-300 hover:text-white px-6 py-3 rounded-full border border-white/10 transition-all"
              >
                Nuestra Metodología
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-gradient-to-b from-[#0a1628] to-background">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Listo para que tu hijo
              <br />
              <span className="text-[#0038A8]">domine la IA</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Reservá una clase demo gratuita y descubrí por qué más de 252 familias confían en InnovaKids.
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
