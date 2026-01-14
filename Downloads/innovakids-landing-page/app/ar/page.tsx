import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cursos de IA para Chicos en Argentina | Buenos Aires, Córdoba, Rosario | InnovaKids",
  description:
    "Cursos de inteligencia artificial para chicos argentinos de 8-14 años. Clases online desde Buenos Aires, Córdoba, Rosario, Mendoza y toda Argentina. Grupos de 5 alumnos.",
  keywords: [
    "cursos ia chicos argentina",
    "clases inteligencia artificial chicos buenos aires",
    "curso ia chicos cordoba",
    "ia para chicos rosario",
    "cursos programacion chicos argentina",
  ],
  openGraph: {
    title: "Cursos de IA para Chicos en Argentina | InnovaKids",
    description:
      "El mejor curso de inteligencia artificial para chicos argentinos. Buenos Aires, Córdoba, Rosario y toda Argentina.",
    url: "https://www.innovakidslatam.com/ar",
    siteName: "InnovaKids",
    locale: "es_AR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/ar",
  },
}

const ciudades = [
  { nombre: "Buenos Aires", slug: "buenos-aires", familias: "180+" },
  { nombre: "Córdoba", slug: "cordoba", familias: "95+" },
  { nombre: "Rosario", slug: "rosario", familias: "67+" },
  { nombre: "Mendoza", slug: "mendoza", familias: "45+" },
  { nombre: "La Plata", slug: "la-plata", familias: "38+" },
  { nombre: "Tucumán", slug: "tucuman", familias: "28+" },
  { nombre: "Mar del Plata", slug: "mar-del-plata", familias: "25+" },
  { nombre: "Salta", slug: "salta", familias: "22+" },
]

export default function ArgentinaHubPage() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative pt-32 pb-24 bg-gradient-to-b from-background to-[#0a1628]">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 bg-[#75AADB]/10 border border-[#75AADB]/30 rounded-full px-6 py-2 mb-8">
              <span className="text-2xl">🇦🇷</span>
              <span className="text-white font-medium">523+ familias argentinas confían en nosotros</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Cursos de IA para Chicos
              <br />
              <span className="text-[#75AADB]">en Argentina</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Clases 100% online para chicos de 8-14 años desde Buenos Aires, Córdoba, Rosario, Mendoza y toda
              Argentina.
              <strong className="text-white"> Grupos de máximo 5 alumnos.</strong>
            </p>

            <Link href="/#sesion-estrategica">
              <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all">
                Reservar Clase Demo GRATIS
              </Button>
            </Link>
          </div>
        </section>

        {/* CIUDADES */}
        <section className="py-24 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
              Cursos de IA Disponibles en Toda Argentina
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Nuestras clases son 100% online, así que chicos de cualquier ciudad pueden participar. Acá están las
              ciudades con más estudiantes:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ciudades.map((ciudad) => (
                <Link
                  key={ciudad.slug}
                  href={ciudad.slug === "buenos-aires" ? "/ar/clases-ia-chicos-buenos-aires" : "/#sesion-estrategica"}
                  className="bg-[#0f2744] rounded-xl p-6 border border-white/10 hover:border-[#75AADB]/50 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-[#75AADB]" />
                    <h3 className="text-lg font-bold text-white">{ciudad.nombre}</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{ciudad.familias} familias</span>
                    <ArrowRight className="w-4 h-4 text-[#75AADB] group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFICIOS ARGENTINA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              ¿Por Qué Familias Argentinas Eligen InnovaKids?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#75AADB]/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#75AADB]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Grupos Reducidos</h3>
                <p className="text-gray-400">
                  Máximo 5 chicos por clase para atención 100% personalizada. No son clases masivas.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#F6B40E]/20 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-[#F6B40E]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Precio Accesible</h3>
                <p className="text-gray-400">
                  $200 USD por el programa completo de 10 clases. Aceptamos PayPal y tarjetas internacionales.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Garantía 10 Días</h3>
                <p className="text-gray-400">
                  Si no quedás satisfecho, te devolvemos el 100% de tu dinero. Sin preguntas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRÓXIMO INICIO */}
        <section className="py-24 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Próximo Inicio: Semana del 17 de Enero 2026
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Solo 2 cupos disponibles para Argentina. Los grupos se llenan rápido.
            </p>

            <Link href="/#sesion-estrategica">
              <Button className="bg-[#75AADB] hover:bg-[#5a8fc0] text-white px-12 py-8 text-xl font-bold rounded-full shadow-2xl">
                Reservar Mi Cupo Ahora
              </Button>
            </Link>

            {/* Internal Links */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm mb-4">Páginas relacionadas:</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/ar/cursos-ia-chicos-argentina" className="text-[#75AADB] hover:underline">
                  Cursos IA Chicos Argentina
                </Link>
                <Link href="/ar/clases-ia-chicos-buenos-aires" className="text-[#75AADB] hover:underline">
                  Clases IA Buenos Aires
                </Link>
                <Link
                  href="/ar/blog/cursos-inteligencia-artificial-chicos-argentina-guia"
                  className="text-[#75AADB] hover:underline"
                >
                  Guía Completa
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
