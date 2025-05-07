import type { Metadata } from "next"
import { AdUnit } from "@/components/ad-unit"
import PreguntasChat from "@/components/preguntas-chat"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CanonicalUrl } from "@/components/canonical-url"

export const metadata: Metadata = {
  title: "Consultas sobre Derecho de Familia en Chile | LegalPO",
  description:
    "Resuelve tus dudas sobre matrimonio, divorcio, pensión alimenticia, custodia de hijos y otros temas de derecho familiar en Chile con respuestas claras y precisas.",
  keywords:
    "derecho familia chile, consulta legal familia, divorcio chile, pensión alimenticia, custodia hijos, matrimonio civil, unión civil",
}

export default function ConsultaFamiliaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CanonicalUrl path="/consulta-familia" />
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-blue-800 to-blue-700 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Consultas sobre Derecho de Familia</h1>
              <p className="text-xl text-blue-100">
                Resuelve tus dudas sobre matrimonio, divorcio, pensión alimenticia, custodia de hijos y otros temas de
                derecho familiar en Chile.
              </p>
            </div>
          </div>
        </section>

        <section className="py-4 bg-white border-b border-gray-200">
          <div className="container px-4 mx-auto">
            <AdUnit slot="1234567890" format="horizontal" responsive={true} position="header" />
          </div>
        </section>

        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">¿Qué temas puedes consultar?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
                    <p className="font-medium text-blue-800">Matrimonio y divorcio</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
                    <p className="font-medium text-blue-800">Pensión de alimentos</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
                    <p className="font-medium text-blue-800">Custodia y régimen de visitas</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
                    <p className="font-medium text-blue-800">Acuerdo de Unión Civil</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
                    <p className="font-medium text-blue-800">Filiación y adopción</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
                    <p className="font-medium text-blue-800">Violencia intrafamiliar</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
                    <p className="font-medium text-blue-800">Derechos de niños y adolescentes</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
                    <p className="font-medium text-blue-800">Cambio de nombre y género</p>
                  </div>
                </div>
              </div>

              <PreguntasChat tema="familia" />

              <div className="mt-12 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                  Leyes y normas de Derecho de Familia en Chile
                </h2>
                <p className="text-gray-700 mb-6">
                  Nuestro sistema responde consultas basándose en las siguientes leyes y normativas chilenas:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-blue-800 mb-2">Normativa General</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Constitución Política de la República de Chile (1980)</li>
                      <li>Código Civil de Chile (Ley 13.495 de 14-XII-1855)</li>
                      <li>Código de Procedimiento Civil de Chile (Ley 1.552 de 28-VIII-1902)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-800 mb-2">Matrimonio y Uniones</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Ley N.º 19.947 (17-V-2004) – Matrimonio Civil y Divorcio Vincular</li>
                      <li>Ley N.º 20.830 (15-IV-2015) – Acuerdo de Unión Civil</li>
                      <li>Ley N.º 21.400 (10-XII-2021) – Matrimonio Igualitario</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-800 mb-2">Filiación y Adopción</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Ley N.º 19.585 (26-X-1998) – Igualdad de la Filiación</li>
                      <li>Ley N.º 19.620 (5-VIII-1999) – Adopción de Menores</li>
                      <li>Decreto Supremo 944/2000 – Reglamento de la Ley de Adopción</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-800 mb-2">Tribunales y Procedimientos</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Ley N.º 19.968 (30-VIII-2004) – Creación de los Tribunales de Familia</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-800 mb-2">Violencia Intrafamiliar</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Ley N.º 20.066 (7-X-2005) – Violencia Intrafamiliar</li>
                      <li>Ley N.º 21.212 (2-III-2020) – Ley "Gabriela" (amplía femicidio y violencia intrafamiliar)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-800 mb-2">Derechos de Niños y Adolescentes</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>
                        Ley N.º 20.430 (15-III-2022) – Protección Integral de los Derechos de la Niñez y Adolescencia
                      </li>
                      <li>Ley N.º 20.084 (7-XII-2005) – Responsabilidad Penal Adolescente</li>
                      <li>Ley N.º 20.680 (21-VI-2013) – "Ley Amor de Papá" (cuidado personal compartido)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-800 mb-2">Pensiones Alimenticias</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Ley N.º 14.908 (5-X-1961) – Abandono de Familia y Pago de Pensiones Alimenticias</li>
                      <li>Ley N.º 21.389 (18-XI-2021) – Registro Nacional de Deudores de Pensiones de Alimentos</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-800 mb-2">Identidad de Género</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Ley N.º 21.120 (10-XII-2018) – Identidad de Género y Cambio Registral de Nombre/Sexo</li>
                      <li>
                        Ley N.º 21.331 (11-V-2021) – Ley de Salud Mental (protege derechos de personas con trastornos,
                        incluyendo identidad de género)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <AdUnit slot="2345678901" format="horizontal" responsive={true} position="footer" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
