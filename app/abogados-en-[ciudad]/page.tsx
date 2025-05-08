import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getCiudades, getCiudadData } from "@/lib/ciudades"
import { AdUnit } from "@/components/ad-unit"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SchemaMarkup } from "@/components/schema-markup"

// Generar metadatos dinámicos para SEO
export async function generateMetadata({
  params,
}: {
  params: { ciudad: string }
}): Promise<Metadata> {
  const ciudad = params.ciudad
  const ciudadData = await getCiudadData(ciudad)

  if (!ciudadData) {
    return {
      title: "Página no encontrada",
      description: "La página que buscas no existe",
    }
  }

  return {
    title: `Asesoría legal gratuita en ${ciudadData.nombre} - LegalPO`,
    description: `Asesoría legal gratuita en ${ciudadData.nombre}. Resuelve tus dudas legales en arriendos, consumo, pensiones y más con la ayuda de LegalPO.`,
    keywords: `abogado en ${ciudadData.nombre}, asesoría legal gratuita en ${ciudadData.nombre}, consultar abogado online, resolver dudas legales gratis en Chile`,
    openGraph: {
      title: `Asesoría legal gratuita en ${ciudadData.nombre} - LegalPO`,
      description: `Asesoría legal gratuita en ${ciudadData.nombre}. Resuelve tus dudas legales en arriendos, consumo, pensiones y más con la ayuda de LegalPO.`,
      url: `https://legalpo.cl/abogados-en-${ciudad}`,
      siteName: "LegalPO",
      locale: "es_CL",
      type: "website",
    },
  }
}

// Generar rutas estáticas para todas las ciudades
export async function generateStaticParams() {
  const ciudades = await getCiudades()
  return ciudades.map((ciudad) => ({
    ciudad: ciudad.slug,
  }))
}

export default async function AbogadosCiudadPage({
  params,
}: {
  params: { ciudad: string }
}) {
  const ciudad = params.ciudad
  const ciudadData = await getCiudadData(ciudad)

  // Si no existe la ciudad, mostrar 404
  if (!ciudadData) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1 container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Asesoría Legal", href: "/asesoria-legal" },
            { label: `Abogados en ${ciudadData.nombre}`, href: `/abogados-en-${ciudad}` },
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Asesoría legal gratuita en {ciudadData.nombre}
            </h1>

            <div className="prose prose-blue max-w-none">
              <p>
                Vivir en {ciudadData.nombre} puede traer consigo múltiples desafíos legales: desde firmar un contrato de
                arriendo hasta enfrentar una deuda injusta o resolver una separación. Muchas personas no saben dónde
                acudir ni cómo entender sus derechos. En LegalPO, te ofrecemos orientación legal gratuita, fácil de
                entender y adaptada a las necesidades de la gente de {ciudadData.nombre}.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">
                Dudas legales más comunes en {ciudadData.nombre}
              </h2>
              <p>Entre los temas más consultados por nuestros usuarios en {ciudadData.nombre}, destacan:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Problemas con contratos de arriendo o garantías no devueltas.</li>
                <li>Despidos sin indemnización o dudas sobre el finiquito.</li>
                <li>Pensiones alimenticias no pagadas o mal calculadas.</li>
                <li>Compras con fallas o garantías negadas por tiendas.</li>
                <li>Estafas por internet o redes sociales.</li>
              </ul>

              <AdUnit slot="3456789012" format="rectangle" position="content" className="my-8" />

              <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">¿Qué es LegalPO y cómo puede ayudarte?</h2>
              <p>
                LegalPO es una plataforma chilena que utiliza inteligencia artificial para ayudarte a resolver tus dudas
                legales. Puedes enviar preguntas sobre temas civiles, laborales, de consumo o familia y recibir una
                respuesta inmediata. Además, tenemos herramientas como:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Calculadora de pensión de alimentos</li>
                <li>Calculadora de finiquito</li>
                <li>Analizador de documentos legales (contratos, cartas, demandas)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">
                Orientación legal desde tu celular o computador
              </h2>
              <p>
                No necesitas ir a una oficina ni pagar una consulta. Solo accede a{" "}
                <a href="https://www.legalpo.cl" className="text-blue-600 hover:underline">
                  LegalPO.cl
                </a>
                , escribe tu consulta y obtén orientación clara y concreta. También puedes usar nuestras calculadoras
                gratuitas para revisar si tu pensión, herencia o despido fue bien calculado.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">
                ¿Vives en {ciudadData.nombre}? Esto es lo que puedes hacer hoy
              </h2>
              <p>
                Si estás enfrentando un problema legal en {ciudadData.nombre} y no sabes por dónde partir, prueba
                nuestra herramienta de asistencia legal gratuita. Ya sea que te preocupe un contrato, un cobro indebido
                o una denuncia, LegalPO puede darte una primera orientación sin costo y con total privacidad.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mt-8 border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Herramientas legales gratuitas para residentes de {ciudadData.nombre}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">✓</span>
                    <span>
                      <a href="/dudas-laborales" className="text-blue-600 hover:underline">
                        Consultas laborales
                      </a>{" "}
                      - Resuelve dudas sobre contratos, despidos y derechos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">✓</span>
                    <span>
                      <a href="/calculadora-finiquito" className="text-blue-600 hover:underline">
                        Calculadora de finiquito
                      </a>{" "}
                      - Verifica si tu finiquito está bien calculado
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">✓</span>
                    <span>
                      <a href="/calculadora-pensiones" className="text-blue-600 hover:underline">
                        Calculadora de pensión alimenticia
                      </a>{" "}
                      - Estima el monto de pensión según tus ingresos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">✓</span>
                    <span>
                      <a href="/analyze" className="text-blue-600 hover:underline">
                        Analizador de documentos
                      </a>{" "}
                      - Comprende contratos y documentos legales
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Consulta gratis ahora</h3>
              <p className="text-gray-700 mb-4">
                Resuelve tus dudas legales sin costo y desde la comodidad de tu hogar en {ciudadData.nombre}.
              </p>
              <a
                href="/ask"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded text-center transition-colors"
              >
                Hacer consulta gratuita
              </a>

              <div className="mt-8">
                <AdUnit slot="5678901234" format="vertical" position="sidebar" />
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-blue-800 mb-3">Temas populares en {ciudadData.nombre}:</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/deudas" className="text-blue-600 hover:underline">
                      Problemas con deudas
                    </a>
                  </li>
                  <li>
                    <a href="/contratos/arriendo" className="text-blue-600 hover:underline">
                      Contratos de arriendo
                    </a>
                  </li>
                  <li>
                    <a href="/laboral" className="text-blue-600 hover:underline">
                      Derechos laborales
                    </a>
                  </li>
                  <li>
                    <a href="/pension-alimentos" className="text-blue-600 hover:underline">
                      Pensión de alimentos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SchemaMarkup
        type="LegalService"
        data={{
          name: `Asesoría legal gratuita en ${ciudadData.nombre}`,
          description: `Servicio de orientación legal gratuita para residentes de ${ciudadData.nombre}. Resuelve dudas sobre temas laborales, civiles, de familia y más.`,
          url: `https://legalpo.cl/abogados-en-${ciudad}`,
          areaServed: ciudadData.nombre,
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
