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

const country = getCountryConfig("ar")

export const metadata: Metadata = {
  title: `Cursos de Inteligencia Artificial para Chicos en Argentina | Buenos Aires, Córdoba | Innovakids`,
  description: `⭐ Los mejores cursos de IA para chicos argentinos de 8-14 años. Clases online de inteligencia artificial con grupos de 5 alumnos. Creatividad y pensamiento crítico. ¡Evaluación gratuita!`,
  keywords: [
    ...country.keywords,
    ...country.longTailKeywords,
    "cursos ia chicos online argentina",
    "clases inteligencia artificial infantil buenos aires",
  ],
  openGraph: {
    title: `Cursos de IA para Chicos en Argentina | Innovakids`,
    description: `El mejor curso de inteligencia artificial para chicos argentinos. Grupos reducidos de 5 alumnos. Buenos Aires, Córdoba, Rosario y toda Argentina.`,
    url: "https://www.innovakidslatam.com/argentina",
    siteName: "Innovakids",
    locale: country.locale,
    type: "website",
  },
  alternates: {
    canonical: "/argentina",
    languages: {
      "es-AR": "/argentina",
      "es-MX": "/mexico",
      "es-ES": "/espana",
      "es-CO": "/colombia",
      "es-CL": "/chile",
      "es-PE": "/peru",
      "x-default": "/",
    },
  },
}

export default function ArgentinaPage() {
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
              Cursos de Inteligencia Artificial para Chicos en Argentina
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                En <strong>Innovakids</strong> ofrecemos los{" "}
                <strong>mejores cursos de IA para chicos en Argentina</strong>. Nuestra metodología está diseñada para
                chicos argentinos de 8 a 14 años que quieren aprender <strong>inteligencia artificial</strong> de forma
                creativa y práctica.
              </p>
              <p>
                Con clases disponibles para familias de Buenos Aires, Córdoba, Rosario, Mendoza, La Plata y toda
                Argentina, nuestras <strong>clases de IA para chicos</strong> se imparten online en grupos reducidos de
                máximo 5 alumnos.
              </p>
              <h3>¿Por qué elegir Innovakids en Argentina?</h3>
              <ul>
                <li>
                  <strong>Grupos ultra reducidos:</strong> Máximo 5 chicos por clase
                </li>
                <li>
                  <strong>Horarios flexibles:</strong> Adaptados al horario de Argentina
                </li>
                <li>
                  <strong>Metodología práctica:</strong> Los chicos crean proyectos reales desde la primera clase
                </li>
                <li>
                  <strong>Pagos locales:</strong> Aceptamos Mercado Pago, transferencia bancaria y PayPal
                </li>
                <li>
                  <strong>Precio especial:</strong> $290,000 ARS
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
