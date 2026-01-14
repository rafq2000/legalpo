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

const country = getCountryConfig("pe")

export const metadata: Metadata = {
  title: `Cursos de Inteligencia Artificial para Niños en Perú | Lima, Arequipa | Innovakids`,
  description: `⭐ Los mejores cursos de IA para niños peruanos de 8-14 años. Clases online de inteligencia artificial con grupos de 5 alumnos. Educación de clase mundial. ¡Evaluación gratuita!`,
  keywords: [
    ...country.keywords,
    ...country.longTailKeywords,
    "cursos ia niños online peru",
    "clases inteligencia artificial infantil lima",
  ],
  openGraph: {
    title: `Cursos de IA para Niños en Perú | Innovakids`,
    description: `El mejor curso de inteligencia artificial para niños peruanos. Grupos reducidos de 5 alumnos. Lima, Arequipa, Trujillo y todo Perú.`,
    url: "https://www.innovakidslatam.com/peru",
    siteName: "Innovakids",
    locale: country.locale,
    type: "website",
  },
  alternates: {
    canonical: "/peru",
    languages: {
      "es-PE": "/peru",
      "es-MX": "/mexico",
      "es-ES": "/espana",
      "es-CO": "/colombia",
      "es-AR": "/argentina",
      "es-CL": "/chile",
      "x-default": "/",
    },
  },
}

export default function PeruPage() {
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
              Cursos de Inteligencia Artificial para Niños en Perú
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                En <strong>Innovakids</strong> ofrecemos los <strong>mejores cursos de IA para niños en Perú</strong>.
                Nuestra metodología está diseñada para niños peruanos de 8 a 14 años que quieren acceder a{" "}
                <strong>educación de clase mundial en inteligencia artificial</strong>.
              </p>
              <p>
                Con clases disponibles para familias de Lima, Arequipa, Trujillo, Cusco, Piura y todo Perú, nuestras{" "}
                <strong>clases de IA para niños</strong> se imparten online en grupos reducidos de máximo 5 alumnos.
              </p>
              <h3>¿Por qué elegir Innovakids en Perú?</h3>
              <ul>
                <li>
                  <strong>Grupos ultra reducidos:</strong> Máximo 5 niños por clase
                </li>
                <li>
                  <strong>Horarios flexibles:</strong> Adaptados al horario de Perú
                </li>
                <li>
                  <strong>Metodología práctica:</strong> Los niños crean proyectos reales desde la primera clase
                </li>
                <li>
                  <strong>Pagos locales:</strong> Aceptamos Yape, Plin, Mercado Pago, PayPal y BCP
                </li>
                <li>
                  <strong>Precio especial:</strong> S/ 1,150 PEN
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
