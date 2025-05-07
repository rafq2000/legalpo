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
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
            Consultas de Derecho de Familia en Chile
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <PreguntasChat tema="familia" />
            </div>

            <div className="lg:col-span-4">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
                <h2 className="text-xl font-semibold mb-4 text-blue-900">Temas Frecuentes</h2>
                <ul className="space-y-2">
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
                    <span>Pensión de alimentos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                    <span>Cuidado personal y relación directa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                    <span>Violencia intrafamiliar</span>
                  </li>
                </ul>
              </div>

              <AdUnit slot="1234567890" format="rectangle" className="mb-6" />

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold mb-4 text-blue-900">Información Legal</h2>
                <p className="text-gray-700 mb-4">
                  El Derecho de Familia en Chile está regulado por diversas leyes como la Ley N.º 19.947 de Matrimonio
                  Civil, la Ley N.º 20.830 de Acuerdo de Unión Civil y la Ley N.º 14.908 sobre Pensiones Alimenticias.
                </p>
                <p className="text-gray-700">
                  Los Tribunales de Familia, creados por la Ley N.º 19.968, son los encargados de resolver los
                  conflictos familiares mediante procedimientos especiales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
