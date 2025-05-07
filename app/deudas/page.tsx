import type { Metadata } from "next"
import { PreguntasChat } from "@/components/preguntas-chat"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AdUnit } from "@/components/ad-unit"

export const metadata: Metadata = {
  title: "Consultas sobre Deudas en Chile - Asesoría Legal | LegalPo",
  description:
    "Resuelve tus dudas sobre deudas, cobranzas, prescripción y DICOM con nuestro asistente legal especializado en normativa chilena.",
  keywords: "consulta deudas Chile, cobranzas, prescripción deudas, DICOM, embargos, deudas bancarias",
  openGraph: {
    title: "Consultas sobre Deudas en Chile - Asesoría Legal | LegalPo",
    description:
      "Resuelve tus dudas sobre deudas, cobranzas, prescripción y DICOM con nuestro asistente legal especializado en normativa chilena.",
    url: "https://legalpo.cl/deudas",
    siteName: "LegalPo",
    locale: "es_CL",
    type: "website",
  },
  alternates: {
    canonical: "https://legalpo.cl/deudas",
  },
}

export default function DeudasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Consultas sobre Deudas en Chile</h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <PreguntasChat tema="deudas" />
            </div>

            <div className="lg:col-span-4">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
                <h2 className="text-xl font-semibold mb-4 text-blue-900">Temas Frecuentes</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                    <span>Prescripción de deudas bancarias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                    <span>Cobranzas judiciales y extrajudiciales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                    <span>Embargos y medidas precautorias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                    <span>Registro DICOM y boletines comerciales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                    <span>Repactaciones y convenios de pago</span>
                  </li>
                </ul>
              </div>

              <AdUnit slot="1234567890" format="rectangle" className="mb-6" />

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold mb-4 text-blue-900">Información Legal</h2>
                <p className="text-gray-700 mb-4">
                  En Chile, las deudas están reguladas principalmente por el Código Civil y leyes especiales como la Ley
                  20.720 de Reorganización y Liquidación.
                </p>
                <p className="text-gray-700">
                  Según el Código Civil, las acciones ordinarias prescriben en 5 años, mientras que algunas deudas
                  comerciales pueden prescribir en plazos más cortos.
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
