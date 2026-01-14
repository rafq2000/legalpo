import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CountryHeroSection } from "@/components/country-hero-section"
import { CountryFAQ } from "@/components/country-faq"
import { CountryCTA } from "@/components/country-cta"
import { ProgramSection } from "@/components/program-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { getCountryConfig } from "@/lib/countries-config"

const country = getCountryConfig("es")

export const metadata: Metadata = {
  title: `Cursos de Inteligencia Artificial para Niños en España | Madrid, Barcelona | Innovakids`,
  description: `⭐ Los mejores cursos de IA para niños españoles de 8-14 años. Clases online de inteligencia artificial con grupos de 5 alumnos. Formación seria y metodología validada. ¡Evaluación gratuita!`,
  keywords: [
    ...country.keywords,
    ...country.longTailKeywords,
    "cursos ia niños online españa",
    "clases inteligencia artificial infantil",
  ],
  openGraph: {
    title: `Cursos de IA para Niños en España | Innovakids`,
    description: `Formación en inteligencia artificial para niños españoles. Metodología validada, grupos reducidos de 5 alumnos. Madrid, Barcelona y toda España.`,
    url: "https://www.innovakidslatam.com/espana",
    siteName: "Innovakids",
    locale: country.locale,
    type: "website",
  },
  alternates: {
    canonical: "/espana",
    languages: {
      "es-ES": "/espana",
      "es-MX": "/mexico",
      "es-CO": "/colombia",
      "es-AR": "/argentina",
      "es-CL": "/chile",
      "es-PE": "/peru",
      "x-default": "/",
    },
  },
}

export default function EspanaPage() {
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
                En <strong>Innovakids</strong> ofrecemos los{" "}
                <strong>mejores cursos de IA para niños en {country.name}</strong>. Nuestra metodología está diseñada
                específicamente para {country.childTerm} {country.demonym} de 8 a 14 años que quieren aprender{" "}
                <strong>inteligencia artificial</strong> de forma práctica y divertida.
              </p>
              <p>
                Con sede en {country.mainCity} y disponible en {country.otherCities.join(", ")} y toda {country.name},
                nuestras <strong>clases de IA para niños</strong> se imparten online en grupos reducidos de máximo 5
                alumnos, garantizando atención personalizada y un aprendizaje efectivo.
              </p>
              <h3>¿Por qué elegir Innovakids en {country.name}?</h3>
              <ul>
                <li>
                  <strong>Grupos ultra reducidos:</strong> Máximo 5 {country.childTerm} por clase
                </li>
                <li>
                  <strong>Horarios flexibles:</strong> Adaptados a la zona horaria de {country.name}
                </li>
                <li>
                  <strong>Metodología práctica:</strong> Los {country.childTerm} crean proyectos reales desde la primera
                  clase
                </li>
                <li>
                  <strong>Pagos locales:</strong> Aceptamos {country.paymentMethods.join(", ")}
                </li>
                <li>
                  <strong>Precio especial:</strong> {country.currencySymbol}
                  {country.priceLocal.toLocaleString()} {country.currency}
                </li>
              </ul>
              <h3>Ciudades donde ofrecemos cursos de IA para niños</h3>
              <p>
                Nuestros cursos online están disponibles para {country.childTerm} de {country.mainCity},
                {country.otherCities.map((city, i) => (
                  <span key={city}>
                    {i === country.otherCities.length - 1 ? " y " : ", "}
                    {city}
                  </span>
                ))}{" "}
                y cualquier ciudad de {country.name} con conexión a internet.
              </p>
            </div>
          </div>
        </section>

        <ProgramSection />
        <TestimonialsSection country={country.name} />
        <CountryFAQ country={country} />
        <CountryCTA country={country} />
      </main>
      <Footer />
    </>
  )
}
