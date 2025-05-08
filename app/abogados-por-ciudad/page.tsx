import type { Metadata } from "next"
import Link from "next/link"
import { cities } from "@/lib/cities"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AdUnit } from "@/components/ad-unit"
import { SEOOptimization } from "@/components/seo-optimization"

export const metadata: Metadata = {
  title: "Abogados y asesoría legal gratuita por ciudad - LegalPO",
  description:
    "Encuentra asesoría legal gratuita en tu ciudad. Resuelve tus dudas legales en arriendos, consumo, pensiones y más con la ayuda de LegalPO.",
  keywords: "abogados por ciudad, asesoría legal gratuita, consultar abogado online, dudas legales en Chile",
}

export default function AbogadosPorCiudadPage() {
  // Agrupar ciudades por región (simplificado)
  const regionGroups = {
    "Región Metropolitana": cities.filter((city) =>
      [
        "Santiago",
        "Puente Alto",
        "Maipú",
        "La Florida",
        "Las Condes",
        "San Bernardo",
        "Peñaflor",
        "Peñalolén",
        "La Granja",
        "Pudahuel",
        "Estación Central",
        "Recoleta",
        "Providencia",
        "Ñuñoa",
        "Vitacura",
        "Lo Barnechea",
      ].includes(city),
    ),
    "Norte de Chile": cities.filter((city) =>
      ["Antofagasta", "Arica", "Iquique", "Calama", "Copiapó", "Coquimbo", "La Serena", "Ovalle"].includes(city),
    ),
    "Centro de Chile": cities.filter((city) =>
      [
        "Viña del Mar",
        "Valparaíso",
        "Rancagua",
        "Talca",
        "Quilpué",
        "Curicó",
        "Melipilla",
        "Quillota",
        "San Antonio",
        "San Felipe",
        "Los Andes",
        "Machalí",
        "Constitución",
        "San Fernando",
      ].includes(city),
    ),
    "Sur de Chile": cities.filter((city) =>
      [
        "Temuco",
        "Concepción",
        "Puerto Montt",
        "Chillán",
        "Osorno",
        "Valdivia",
        "Los Ángeles",
        "Punta Arenas",
        "Angol",
        "Coronel",
        "Talcahuano",
      ].includes(city),
    ),
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SEOOptimization
        title="Abogados y asesoría legal gratuita por ciudad - LegalPO"
        description="Encuentra asesoría legal gratuita en tu ciudad. Resuelve tus dudas legales en arriendos, consumo, pensiones y más con la ayuda de LegalPO."
        canonicalPath="/abogados-por-ciudad"
        keywords="abogados por ciudad, asesoría legal gratuita, consultar abogado online, dudas legales en Chile"
        schemaType="WebPage"
      />

      <SiteHeader />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Abogados y asesoría legal gratuita por ciudad</h1>

          <p className="my-4 text-gray-700">
            Encuentra asesoría legal gratuita en tu ciudad. En LegalPO ofrecemos orientación legal adaptada a las
            necesidades específicas de cada localidad en Chile, con información relevante sobre normativas municipales y
            recursos locales.
          </p>

          <AdUnit slot="1234567890" format="horizontal" responsive={true} position="top" />

          {Object.entries(regionGroups).map(([region, regionCities]) => (
            <div key={region} className="mt-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">{region}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {regionCities.map((city) => (
                  <Link
                    key={city}
                    href={`/abogados-en-${city.toLowerCase().replace(/ /g, "-")}`}
                    className="bg-blue-50 hover:bg-blue-100 p-3 rounded-md text-blue-700 font-medium transition-colors"
                  >
                    Abogados en {city}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-10 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">¿Por qué buscar asesoría legal en tu ciudad?</h2>
            <p className="mb-4 text-gray-700">
              Aunque muchas leyes son nacionales, cada ciudad tiene sus propias ordenanzas municipales y
              particularidades que pueden afectar tus derechos. Conocer los recursos legales disponibles en tu localidad
              puede marcar la diferencia en la resolución de tu caso.
            </p>
            <p className="text-gray-700">
              En LegalPO te ofrecemos información adaptada a tu ubicación, con orientación sobre:
            </p>
            <ul className="list-disc pl-6 mt-3 mb-6 text-gray-700 space-y-2">
              <li>Normativas municipales específicas</li>
              <li>Recursos legales gratuitos en tu comuna</li>
              <li>Problemas legales frecuentes en tu zona</li>
              <li>Soluciones adaptadas a la realidad local</li>
            </ul>
          </div>

          <AdUnit slot="1234567890" format="horizontal" responsive={true} position="bottom" />
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
