import type { Metadata } from "next"
import { cities } from "@/lib/cities"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AdUnit } from "@/components/ad-unit"
import { SEOOptimization } from "@/components/seo-optimization"
import { notFound } from "next/navigation"
import Link from "next/link"

type Props = {
  params: { city: string }
}

// Generate static params for all cities
export function generateStaticParams() {
  return cities.map((city) => ({
    city: city.toLowerCase().replace(/ /g, "-"),
  }))
}

// Generate metadata for each page
export function generateMetadata({ params }: Props): Metadata {
  // Decode the city name from URL format
  const decodedCity = decodeURIComponent(params.city).replace(/-/g, " ")

  // Find the matching city with proper capitalization
  const city = cities.find((c) => c.toLowerCase() === decodedCity.toLowerCase())

  if (!city) {
    return {
      title: "Página no encontrada",
      description: "La página que buscas no existe",
    }
  }

  return {
    title: `Asesoría legal gratuita en ${city} - LegalPO`,
    description: `Asesoría legal gratuita en ${city}. Resuelve tus dudas legales en arriendos, consumo, pensiones y más con la ayuda de LegalPO.`,
    keywords: `abogado en ${city}, asesoría legal gratuita, consultar abogado online, dudas legales en Chile`,
    openGraph: {
      title: `Asesoría legal gratuita en ${city} - LegalPO`,
      description: `Asesoría legal gratuita en ${city}. Resuelve tus dudas legales en arriendos, consumo, pensiones y más con la ayuda de LegalPO.`,
      url: `https://legalpo.cl/abogados-en-${params.city}`,
      siteName: "LegalPO",
      locale: "es_CL",
      type: "website",
    },
  }
}

export default function CityPage({ params }: Props) {
  // Decode the city name from URL format
  const decodedCity = decodeURIComponent(params.city).replace(/-/g, " ")

  // Find the matching city with proper capitalization
  const city = cities.find((c) => c.toLowerCase() === decodedCity.toLowerCase())

  if (!city) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SEOOptimization
        title={`Asesoría legal gratuita en ${city} - LegalPO`}
        description={`Asesoría legal gratuita en ${city}. Resuelve tus dudas legales en arriendos, consumo, pensiones y más con la ayuda de LegalPO.`}
        canonicalPath={`/abogados-en-${params.city}`}
        keywords={`abogado en ${city}, asesoría legal gratuita, consultar abogado online, dudas legales en Chile`}
        schemaType="LegalService"
      />

      <SiteHeader />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Asesoría legal gratuita en {city}</h1>

          <AdUnit slot="1234567890" format="horizontal" responsive={true} position="top" />

          <p className="my-4 text-gray-700">
            Vivir en {city} puede traer consigo múltiples desafíos legales: desde firmar un contrato de arriendo hasta
            enfrentar una deuda injusta o resolver una separación. Muchas personas no saben dónde acudir ni cómo
            entender sus derechos. En LegalPO, te ofrecemos orientación legal gratuita, fácil de entender y adaptada a
            las necesidades de la gente de {city}.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Dudas legales más comunes en {city}</h2>
          <p className="mb-4 text-gray-700">
            Entre los temas más consultados por nuestros usuarios en {city}, destacan:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Problemas con contratos de arriendo o garantías no devueltas.</li>
            <li>Despidos sin indemnización o dudas sobre el finiquito.</li>
            <li>Pensiones alimenticias no pagadas o mal calculadas.</li>
            <li>Compras con fallas o garantías negadas por tiendas.</li>
            <li>Estafas por internet o redes sociales.</li>
          </ul>

          <AdUnit slot="1234567890" format="in-article" responsive={true} position="middle" />

          <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">¿Qué es LegalPO y cómo puede ayudarte?</h2>
          <p className="mb-4 text-gray-700">
            LegalPO es una plataforma chilena que utiliza inteligencia artificial para ayudarte a resolver tus dudas
            legales. Puedes enviar preguntas sobre temas civiles, laborales, de consumo o familia y recibir una
            respuesta inmediata. Además, tenemos herramientas como:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Calculadora de pensión de alimentos</li>
            <li>Calculadora de finiquito</li>
            <li>Analizador de documentos legales (contratos, cartas, demandas)</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">
            Orientación legal desde tu celular o computador
          </h2>
          <p className="mb-6 text-gray-700">
            No necesitas ir a una oficina ni pagar una consulta. Solo accede a{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              LegalPO.cl
            </Link>
            , escribe tu consulta y obtén orientación clara y concreta. También puedes usar nuestras calculadoras
            gratuitas para revisar si tu pensión, herencia o despido fue bien calculado.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">
            ¿Vives en {city}? Esto es lo que puedes hacer hoy
          </h2>
          <p className="mb-6 text-gray-700">
            Si estás enfrentando un problema legal en {city} y no sabes por dónde partir, prueba nuestra herramienta de
            asistencia legal gratuita. Ya sea que te preocupe un contrato, un cobro indebido o una denuncia, LegalPO
            puede darte una primera orientación sin costo y con total privacidad.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Herramientas legales para residentes de {city}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/calculadora-finiquito"
                className="bg-white p-4 rounded-md shadow hover:shadow-md transition-shadow border border-blue-100 text-blue-700 font-medium"
              >
                Calculadora de Finiquito
              </Link>
              <Link
                href="/calculadora-pensiones"
                className="bg-white p-4 rounded-md shadow hover:shadow-md transition-shadow border border-blue-100 text-blue-700 font-medium"
              >
                Calculadora de Pensión Alimenticia
              </Link>
              <Link
                href="/analyze"
                className="bg-white p-4 rounded-md shadow hover:shadow-md transition-shadow border border-blue-100 text-blue-700 font-medium"
              >
                Analizar Documento Legal
              </Link>
              <Link
                href="/dudas-laborales"
                className="bg-white p-4 rounded-md shadow hover:shadow-md transition-shadow border border-blue-100 text-blue-700 font-medium"
              >
                Consultar Dudas Laborales
              </Link>
            </div>
          </div>

          <AdUnit slot="1234567890" format="horizontal" responsive={true} position="bottom" />

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Palabras clave relacionadas:</h3>
            <p className="text-gray-600">
              abogado en {city}, asesoría legal gratuita en {city}, consultar abogado online, resolver dudas legales
              gratis en Chile
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
