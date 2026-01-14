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

const country = getCountryConfig("co")

export const metadata: Metadata = {
  title: `Cursos de Inteligencia Artificial para Niños en Colombia | Bogotá, Medellín, Cali | Innovakids`,
  description: `⭐ Los mejores cursos de IA para niños colombianos de 8-14 años. Clases online de inteligencia artificial con grupos de 5 alumnos. Innovación y emprendimiento. ¡Evaluación gratuita!`,
  keywords: [
    ...country.keywords,
    ...country.longTailKeywords,
    "cursos ia niños online colombia",
    "clases inteligencia artificial infantil bogotá",
  ],
  openGraph: {
    title: `Cursos de IA para Niños en Colombia | Innovakids`,
    description: `El mejor curso de inteligencia artificial para niños colombianos. Grupos reducidos de 5 alumnos. Bogotá, Medellín, Cali y todo Colombia.`,
    url: "https://www.innovakidslatam.com/colombia",
    siteName: "Innovakids",
    locale: country.locale,
    type: "website",
  },
  alternates: {
    canonical: "/colombia",
    languages: {
      "es-CO": "/colombia",
      "es-MX": "/mexico",
      "es-ES": "/espana",
      "es-AR": "/argentina",
      "es-CL": "/chile",
      "es-PE": "/peru",
      "x-default": "/",
    },
  },
}

export default function ColombiaPage() {
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
              Cursos de Inteligencia Artificial para Niños en Colombia
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                En <strong>Innovakids</strong> ofrecemos los{" "}
                <strong>mejores cursos de IA para niños en Colombia</strong>. Nuestra metodología está diseñada para
                niños colombianos de 8 a 14 años que quieren aprender <strong>inteligencia artificial</strong> y
                convertirse en creadores de tecnología.
              </p>
              <p>
                Con clases disponibles para familias de Bogotá, Medellín, Cali, Barranquilla, Cartagena y todo Colombia,
                nuestras <strong>clases de IA para niños</strong> se imparten online en grupos reducidos de máximo 5
                alumnos.
              </p>
              <h3>¿Por qué elegir Innovakids en Colombia?</h3>
              <ul>
                <li>
                  <strong>Grupos ultra reducidos:</strong> Máximo 5 niños por clase
                </li>
                <li>
                  <strong>Horarios flexibles:</strong> Adaptados al horario de Colombia
                </li>
                <li>
                  <strong>Metodología práctica:</strong> Los niños crean proyectos reales desde la primera clase
                </li>
                <li>
                  <strong>Pagos locales:</strong> Aceptamos PSE, Nequi, Daviplata, Mercado Pago y PayPal
                </li>
                <li>
                  <strong>Precio especial:</strong> $1,200,000 COP
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
