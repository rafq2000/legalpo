import type { Metadata } from "next"
import { PreguntasChat } from "@/components/preguntas-chat"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AdUnit } from "@/components/ad-unit"

export const metadata: Metadata = {
  title: "Consultas Laborales en Chile - Asesoría Legal | LegalPo",
  description:
    "Resuelve tus dudas sobre contratos de trabajo, despidos, finiquitos, licencias médicas y derechos laborales en Chile. Obtén respuestas claras basadas en el Código del Trabajo.",
  keywords:
    "consulta laboral Chile, despido, finiquito, licencia médica, contrato trabajo, derechos laborales, indemnización",
  openGraph: {
    title: "Consultas Laborales en Chile - Asesoría Legal | LegalPo",
    description:
      "Resuelve tus dudas sobre contratos de trabajo, despidos, finiquitos, licencias médicas y derechos laborales en Chile. Obtén respuestas claras basadas en el Código del Trabajo.",
    url: "https://legalpo.cl/laboral",
    siteName: "LegalPo",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://legalpo.cl/og-laboral.jpg",
        width: 1200,
        height: 630,
        alt: "Consultas Laborales en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultas Laborales en Chile - Asesoría Legal | LegalPo",
    description:
      "Resuelve tus dudas sobre contratos de trabajo, despidos, finiquitos, licencias médicas y derechos laborales en Chile.",
    images: ["https://legalpo.cl/og-laboral.jpg"],
  },
  alternates: {
    canonical: "https://legalpo.cl/laboral",
  },
}

export default function LaboralPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Consultas Laborales en Chile</h1>
            <AdUnit slot="1234567890" format="horizontal" className="my-8" />
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                ¿Tienes dudas sobre tus derechos laborales, despidos, licencias médicas o finiquitos? Nuestro asistente
                legal especializado te ayuda a entender la normativa laboral chilena.
              </p>
              <p className="text-gray-700 mb-6">Puedes consultar sobre:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Contratos de trabajo y sus cláusulas</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Despidos y causales de término</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Cálculo de finiquitos e indemnizaciones</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Licencias médicas y permisos</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Jornada laboral y horas extras</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Acoso laboral y discriminación</span>
                </li>
              </ul>
            </div>
          </section>

          <PreguntasChat tema="laboral" />

          <section className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Información Legal Laboral en Chile</h2>
            <div className="prose max-w-none">
              <p>
                La legislación laboral chilena está principalmente contenida en el Código del Trabajo (DFL-1), que
                regula las relaciones entre empleadores y trabajadores.
              </p>

              <h3 className="text-xl font-medium mt-4 mb-2 text-blue-800">Contratos de Trabajo</h3>
              <p>
                El contrato de trabajo puede ser escrito o verbal, pero debe escriturarse dentro de los 15 días de
                iniciada la relación laboral (5 días para contratos por obra o faena). La falta de contrato escrito hace
                presumir que las cláusulas son las que declare el trabajador.
              </p>

              <h3 className="text-xl font-medium mt-4 mb-2 text-blue-800">Término del Contrato</h3>
              <p>
                Las causales de término están taxativamente señaladas en los artículos 159, 160 y 161 del Código del
                Trabajo:
              </p>
              <ul>
                <li>Art. 159: Causales objetivas (mutuo acuerdo, renuncia, muerte, vencimiento del plazo)</li>
                <li>Art. 160: Causales subjetivas o de caducidad (conductas graves del trabajador)</li>
                <li>Art. 161: Necesidades de la empresa o desahucio</li>
              </ul>

              <h3 className="text-xl font-medium mt-4 mb-2 text-blue-800">Indemnizaciones</h3>
              <p>En caso de despido por necesidades de la empresa (Art. 161), corresponde:</p>
              <ul>
                <li>Indemnización por años de servicio: 1 mes por año trabajado, con tope de 11 años</li>
                <li>
                  Indemnización sustitutiva del aviso previo: 1 mes de remuneración si no se dio aviso con 30 días de
                  anticipación
                </li>
              </ul>

              <h3 className="text-xl font-medium mt-4 mb-2 text-blue-800">Jornada Laboral</h3>
              <p>
                La jornada ordinaria máxima es de 45 horas semanales, distribuidas en no más de 6 ni menos de 5 días.
                Las horas extraordinarias se pagan con un recargo del 50% sobre el valor de la hora ordinaria.
              </p>
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
