import type { Metadata } from "next"
import { PreguntasChat } from "@/components/preguntas-chat"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AdUnit } from "@/components/ad-unit"

export const metadata: Metadata = {
  title: "Consultas de Derecho de Familia en Chile - Asesoría Legal | LegalPo",
  description:
    "Resuelve tus dudas sobre matrimonio, divorcio, pensión alimenticia, custodia de hijos y derechos familiares en Chile. Obtén respuestas claras basadas en la legislación chilena vigente.",
  keywords:
    "derecho familia Chile, divorcio, pensión alimenticia, custodia hijos, matrimonio, unión civil, adopción, violencia intrafamiliar",
  openGraph: {
    title: "Consultas de Derecho de Familia en Chile - Asesoría Legal | LegalPo",
    description:
      "Resuelve tus dudas sobre matrimonio, divorcio, pensión alimenticia, custodia de hijos y derechos familiares en Chile. Obtén respuestas claras basadas en la legislación chilena vigente.",
    url: "https://legalpo.cl/consulta-familia",
    siteName: "LegalPo",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://legalpo.cl/og-familia.jpg",
        width: 1200,
        height: 630,
        alt: "Consultas de Derecho de Familia en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultas de Derecho de Familia en Chile - Asesoría Legal | LegalPo",
    description:
      "Resuelve tus dudas sobre matrimonio, divorcio, pensión alimenticia, custodia de hijos y derechos familiares en Chile.",
    images: ["https://legalpo.cl/og-familia.jpg"],
  },
  alternates: {
    canonical: "https://legalpo.cl/consulta-familia",
  },
}

export default function FamiliaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              Consultas de Derecho de Familia en Chile
            </h1>
            <AdUnit slot="1234567890" format="horizontal" className="my-8" />
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                ¿Tienes dudas sobre divorcio, pensión alimenticia, custodia de hijos o violencia intrafamiliar? Nuestro
                asistente legal especializado te ayuda a entender la normativa familiar chilena.
              </p>
              <p className="text-gray-700 mb-6">Puedes consultar sobre:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Matrimonio civil y divorcio</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Acuerdo de Unión Civil</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Pensión de alimentos y deudas alimenticias</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Cuidado personal y relación directa y regular</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Violencia intrafamiliar</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Adopción y filiación</span>
                </li>
              </ul>
            </div>
          </section>

          <PreguntasChat tema="familia" />

          <section className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Leyes y Normas de Derecho de Familia en Chile</h2>
            <div className="prose max-w-none">
              <p>
                El Derecho de Familia en Chile está regulado por diversas leyes y normas que establecen los derechos y
                obligaciones en las relaciones familiares. A continuación, presentamos las principales leyes que rigen
                esta materia:
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-blue-800">Leyes Fundamentales</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Constitución Política de la República de Chile (1980)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Código Civil de Chile (Ley 13.495 de 14-XII-1855)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Código de Procedimiento Civil de Chile (Ley 1.552 de 28-VIII-1902)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-blue-800">Matrimonio y Uniones</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Ley N.º 19.947 (17-V-2004) – Matrimonio Civil y Divorcio Vincular</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Ley N.º 20.830 (15-IV-2015) – Acuerdo de Unión Civil</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Ley N.º 21.400 (10-XII-2021) – Matrimonio Igualitario</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-blue-800">Filiación y Adopción</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Ley N.º 19.585 (26-X-1998) – Igualdad de la Filiación</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Ley N.º 19.620 (5-VIII-1999) – Adopción de Menores</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Decreto Supremo 944/2000 – Reglamento de la Ley de Adopción</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-blue-800">Tribunales y Procedimientos</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Ley N.º 19.968 (30-VIII-2004) – Creación de los Tribunales de Familia</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Ley N.º 20.066 (7-X-2005) – Violencia Intrafamiliar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>
                        Ley N.º 21.212 (2-III-2020) – Ley "Gabriela" (amplía femicidio y violencia intrafamiliar)
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-blue-800">Protección de Niños y Adolescentes</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>
                        Ley N.º 20.430 (15-III-2022) – Protección Integral de los Derechos de la Niñez y Adolescencia
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Ley N.º 20.084 (7-XII-2005) – Responsabilidad Penal Adolescente</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Ley N.º 20.680 (21-VI-2013) – "Ley Amor de Papá" (cuidado personal compartido)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-blue-800">Pensiones Alimenticias e Identidad</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Ley N.º 14.908 (5-X-1961) – Abandono de Familia y Pago de Pensiones Alimenticias</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Ley N.º 21.389 (18-XI-2021) – Registro Nacional de Deudores de Pensiones de Alimentos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Ley N.º 21.120 (10-XII-2018) – Identidad de Género y Cambio Registral de Nombre/Sexo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>
                        Ley N.º 21.331 (11-V-2021) – Ley de Salud Mental (protege derechos de personas con trastornos,
                        incluyendo identidad de género)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="mt-8">
          <AdUnit slot="1234567890" format="rectangle" />
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
