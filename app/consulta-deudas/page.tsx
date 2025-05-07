import type { Metadata } from "next"
import { PreguntasChat } from "@/components/preguntas-chat"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AdUnit } from "@/components/ad-unit"

export const metadata: Metadata = {
  title: "Consultas sobre Deudas en Chile - Asesoría Legal | LegalPo",
  description:
    "Resuelve tus dudas sobre deudas, cobranzas, embargos y prescripción de deudas en Chile. Obtén respuestas claras basadas en la legislación chilena vigente.",
  keywords:
    "deudas Chile, cobranza judicial, embargo, prescripción deudas, DICOM, renegociación deudas, insolvencia, quiebra personal",
  openGraph: {
    title: "Consultas sobre Deudas en Chile - Asesoría Legal | LegalPo",
    description:
      "Resuelve tus dudas sobre deudas, cobranzas, embargos y prescripción de deudas en Chile. Obtén respuestas claras basadas en la legislación chilena vigente.",
    url: "https://legalpo.cl/consulta-deudas",
    siteName: "LegalPo",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://legalpo.cl/og-deudas.jpg",
        width: 1200,
        height: 630,
        alt: "Consultas sobre Deudas en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultas sobre Deudas en Chile - Asesoría Legal | LegalPo",
    description: "Resuelve tus dudas sobre deudas, cobranzas, embargos y prescripción de deudas en Chile.",
    images: ["https://legalpo.cl/og-deudas.jpg"],
  },
  alternates: {
    canonical: "https://legalpo.cl/consulta-deudas",
  },
}

export default function DeudasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Consultas sobre Deudas en Chile</h1>
            <AdUnit slot="1234567890" format="horizontal" className="my-8" />
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                ¿Tienes dudas sobre cobranzas, embargos, prescripción de deudas o renegociaciones? Nuestro asistente
                legal especializado te ayuda a entender la normativa chilena sobre deudas.
              </p>
              <p className="text-gray-700 mb-6">Puedes consultar sobre:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Prescripción de deudas</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Cobranza judicial y extrajudicial</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Embargos y procedimientos ejecutivos</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Registro de deudores (DICOM)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Renegociación y repactación de deudas</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Procedimiento de insolvencia y quiebra personal</span>
                </li>
              </ul>
            </div>
          </section>

          <PreguntasChat tema="deudas" />

          <section className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Leyes y Normas sobre Deudas en Chile</h2>
            <div className="prose max-w-none">
              <p>
                La legislación chilena sobre deudas está regulada por diversas leyes y normas que establecen los
                derechos y obligaciones tanto de acreedores como deudores. A continuación, presentamos las principales
                leyes que rigen esta materia:
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-blue-800">Código Civil</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Artículos 1437 y siguientes: Definición y efectos de las obligaciones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Artículos 2503-2528: Prescripción extintiva de deudas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Plazo general de prescripción: 5 años para acciones ordinarias</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-blue-800">Ley de Protección al Consumidor</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Ley N° 19.496: Regula las cobranzas extrajudiciales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Artículo 37A: Establece límites a las acciones de cobranza</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Prohíbe el hostigamiento, llamadas constantes y amenazas</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-blue-800">Ley Anti-DICOM</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Ley N° 20.575: Regula el tratamiento de datos personales económicos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Establece cuándo pueden publicarse deudas en registros como DICOM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>No se pueden informar deudas vencidas hace más de 5 años</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-blue-800">Ley de Insolvencia</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Ley N° 20.720: Regula procedimientos de quiebra de personas naturales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Establece procedimientos de renegociación ante la Superintendencia</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Regula la liquidación voluntaria de bienes</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-blue-800">Operaciones de Crédito</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Ley N° 18.010: Regula intereses máximos convencionales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Establece cálculo de reajustes y requisitos de contratos de crédito</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Aplicable a créditos automotrices, hipotecarios, avances, etc.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-blue-800">Otras Normas Relevantes</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Ley N° 20.190: Sobre publicación de deudas en boletines comerciales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Ley N° 21.398 (Pro Consumidor): Fortalece derechos en situaciones de endeudamiento</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1 text-xs">•</span>
                      <span>Código de Procedimiento Civil: Regula notificaciones, embargos y juicios ejecutivos</span>
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
