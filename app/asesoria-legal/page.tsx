import type { Metadata } from "next"
import Link from "next/link"
import { getCiudades } from "@/lib/ciudades"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdUnit } from "@/components/ad-unit"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata: Metadata = {
  title: "Asesoría legal gratuita en Chile - LegalPO",
  description:
    "Encuentra asesoría legal gratuita en tu ciudad. Resuelve dudas sobre temas laborales, civiles, de familia y más con LegalPO.",
  keywords: "asesoría legal gratuita, abogado online, consulta legal gratis, dudas legales Chile",
}

export default async function AsesoriaLegalPage() {
  const ciudades = await getCiudades()

  // Agrupar ciudades por letra inicial para mostrarlas organizadas
  const ciudadesPorLetra: Record<string, typeof ciudades> = {}

  ciudades.forEach((ciudad) => {
    const inicial = ciudad.nombre.charAt(0).toUpperCase()
    if (!ciudadesPorLetra[inicial]) {
      ciudadesPorLetra[inicial] = []
    }
    ciudadesPorLetra[inicial].push(ciudad)
  })

  // Ordenar las letras iniciales
  const letrasOrdenadas = Object.keys(ciudadesPorLetra).sort()

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1 container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Asesoría Legal", href: "/asesoria-legal" },
          ]}
        />

        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Asesoría legal gratuita en Chile</h1>

        <div className="prose prose-blue max-w-none mb-12">
          <p className="text-lg">
            En LegalPO ofrecemos asesoría legal gratuita para todas las ciudades de Chile. Nuestra plataforma utiliza
            inteligencia artificial para responder tus consultas legales de forma clara y precisa, sin importar dónde te
            encuentres.
          </p>

          <p>Selecciona tu ciudad para obtener información específica sobre asesoría legal en tu localidad:</p>
        </div>

        <AdUnit slot="1234567890" format="horizontal" position="content" className="my-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Ciudades principales</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Santiago", "Viña del Mar", "Valparaíso", "Concepción", "Antofagasta", "Temuco"].map((nombreCiudad) => {
                const ciudad = ciudades.find((c) => c.nombre === nombreCiudad)
                if (!ciudad) return null

                return (
                  <li key={ciudad.slug}>
                    <Link
                      href={`/abogados-en-${ciudad.slug}`}
                      className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <span className="font-medium text-blue-700">Abogados en {ciudad.nombre}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Servicios legales gratuitos</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">✓</span>
                <div>
                  <Link href="/dudas-laborales" className="font-medium text-blue-700 hover:underline">
                    Consultas laborales
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    Resuelve dudas sobre contratos, despidos y derechos laborales
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">✓</span>
                <div>
                  <Link href="/calculadora-finiquito" className="font-medium text-blue-700 hover:underline">
                    Calculadora de finiquito
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">Verifica si tu finiquito está bien calculado</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">✓</span>
                <div>
                  <Link href="/calculadora-pensiones" className="font-medium text-blue-700 hover:underline">
                    Calculadora de pensión alimenticia
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">Estima el monto de pensión según tus ingresos</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">✓</span>
                <div>
                  <Link href="/analyze" className="font-medium text-blue-700 hover:underline">
                    Analizador de documentos
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">Comprende contratos y documentos legales</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-blue-800 mb-6">Todas las ciudades</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {letrasOrdenadas.map((letra) => (
            <div key={letra} className="mb-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-3 border-b border-gray-200 pb-2">{letra}</h3>
              <ul className="space-y-2">
                {ciudadesPorLetra[letra].map((ciudad) => (
                  <li key={ciudad.slug}>
                    <Link href={`/abogados-en-${ciudad.slug}`} className="text-blue-600 hover:underline">
                      Abogados en {ciudad.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      <SchemaMarkup
        type="WebPage"
        data={{
          name: "Asesoría legal gratuita en Chile",
          description:
            "Encuentra asesoría legal gratuita en tu ciudad. Resuelve dudas sobre temas laborales, civiles, de familia y más con LegalPO.",
          url: "https://legalpo.cl/asesoria-legal",
          provider: {
            "@type": "Organization",
            name: "LegalPO",
            url: "https://legalpo.cl",
          },
        }}
      />

      <SiteFooter />
    </div>
  )
}
