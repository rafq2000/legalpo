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

const country = getCountryConfig("cl")

export const metadata: Metadata = {
  title: `Cursos de Inteligencia Artificial para Niños en Chile | Santiago, Valparaíso | Innovakids`,
  description: `⭐ Los mejores cursos de IA para niños chilenos de 8-14 años. Clases online de inteligencia artificial con grupos de 5 alumnos. Inversión en el futuro de tus hijos. ¡Evaluación gratuita!`,
  keywords: [
    ...country.keywords,
    ...country.longTailKeywords,
    "cursos ia niños online chile",
    "clases inteligencia artificial infantil santiago",
  ],
  openGraph: {
    title: `Cursos de IA para Niños en Chile | Innovakids`,
    description: `El mejor curso de inteligencia artificial para niños chilenos. Grupos reducidos de 5 alumnos. Santiago, Valparaíso, Concepción y todo Chile.`,
    url: "https://www.innovakidslatam.com/chile",
    siteName: "Innovakids",
    locale: country.locale,
    type: "website",
  },
  alternates: {
    canonical: "/chile",
    languages: {
      "es-CL": "/chile",
      "es-MX": "/mexico",
      "es-ES": "/espana",
      "es-CO": "/colombia",
      "es-AR": "/argentina",
      "es-PE": "/peru",
      "x-default": "/",
    },
  },
}

export default function ChilePage() {
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
              Cursos de Inteligencia Artificial para Niños en Chile
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                En <strong>Innovakids</strong> ofrecemos los <strong>mejores cursos de IA para niños en Chile</strong>.
                Nuestra metodología está diseñada para niños chilenos de 8 a 14 años que quieren aprender{" "}
                <strong>inteligencia artificial</strong> como inversión para su futuro.
              </p>
              <p>
                Con clases disponibles para familias de Santiago, Valparaíso, Concepción, La Serena, Antofagasta y todo
                Chile, nuestras <strong>clases de IA para niños</strong> se imparten online en grupos reducidos de
                máximo 5 alumnos.
              </p>
              <h3>¿Por qué elegir Innovakids en Chile?</h3>
              <ul>
                <li>
                  <strong>Grupos ultra reducidos:</strong> Máximo 5 niños por clase
                </li>
                <li>
                  <strong>Horarios flexibles:</strong> Adaptados al horario de Chile
                </li>
                <li>
                  <strong>Metodología práctica:</strong> Los niños crean proyectos reales desde la primera clase
                </li>
                <li>
                  <strong>Pagos locales:</strong> Aceptamos Webpay, Mercado Pago, PayPal y transferencia bancaria
                </li>
                <li>
                  <strong>Precio especial:</strong> $290,000 CLP
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
