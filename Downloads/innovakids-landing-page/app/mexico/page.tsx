import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CountryHeroSection } from "@/components/country-hero-section"
import { CountryTestimonials } from "@/components/country-testimonials"
import { CountryFAQ } from "@/components/country-faq"
import { CountryCTA } from "@/components/country-cta"
import { ProgramSection } from "@/components/program-section"
import { getCountryConfig } from "@/lib/countries-config"

const country = getCountryConfig("mx")

export const metadata: Metadata = {
  title: `Cursos de Inteligencia Artificial para Niños en México | CDMX, Guadalajara, Monterrey | Innovakids`,
  description: `⭐ Los mejores cursos de IA para niños mexicanos de 8-14 años. Clases online de inteligencia artificial con grupos de 5 alumnos. Prepara a tus hijos para el futuro. ¡Evaluación gratuita!`,
  keywords: [
    ...country.keywords,
    ...country.longTailKeywords,
    "cursos ia niños online méxico",
    "clases inteligencia artificial infantil cdmx",
  ],
  openGraph: {
    title: `Cursos de IA para Niños en México | Innovakids`,
    description: `El mejor curso de inteligencia artificial para niños mexicanos. Grupos reducidos de 5 alumnos. CDMX, Guadalajara, Monterrey y todo México.`,
    url: "https://www.innovakidslatam.com/mexico",
    siteName: "Innovakids",
    locale: country.locale,
    type: "website",
  },
  alternates: {
    canonical: "/mexico",
    languages: {
      "es-MX": "/mexico",
      "es-ES": "/espana",
      "es-CO": "/colombia",
      "es-AR": "/argentina",
      "es-CL": "/chile",
      "es-PE": "/peru",
      "x-default": "/",
    },
  },
}

export default function MexicoPage() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />
      <main className="min-h-screen">
        <CountryHeroSection country={country} />

        {/* SEO Content Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Cursos de Inteligencia Artificial para Niños en {country.name}
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                En <strong>Innovakids</strong> ofrecemos los <strong>mejores cursos de IA para niños en México</strong>.
                Nuestra metodología está diseñada específicamente para niños mexicanos de 8 a 14 años que quieren
                aprender <strong>inteligencia artificial</strong> de forma práctica y divertida.
              </p>
              <p>
                Con clases disponibles para familias de CDMX, Guadalajara, Monterrey, Puebla, Tijuana y todo México,
                nuestras <strong>clases de IA para niños</strong> se imparten online en grupos reducidos de máximo 5
                alumnos, garantizando atención personalizada y un aprendizaje efectivo.
              </p>
              <h3>¿Por qué elegir Innovakids en México?</h3>
              <ul>
                <li>
                  <strong>Grupos ultra reducidos:</strong> Máximo 5 niños por clase
                </li>
                <li>
                  <strong>Horarios flexibles:</strong> Adaptados al horario de México
                </li>
                <li>
                  <strong>Metodología práctica:</strong> Los niños crean proyectos reales desde la primera clase
                </li>
                <li>
                  <strong>Pagos locales:</strong> Aceptamos OXXO, Mercado Pago, PayPal y tarjeta de crédito
                </li>
                <li>
                  <strong>Precio especial:</strong> $5,500 MXN
                </li>
              </ul>
            </div>
          </div>
        </section>

        <ProgramSection />
        <CountryTestimonials country={country} />
        <CountryFAQ country={country} />
        <CountryCTA country={country} />
      </main>
      <Footer />
    </>
  )
}
