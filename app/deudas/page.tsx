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
    description:
      "Resuelve tus dudas sobre deudas, cobranzas, prescripción y DICOM con nuestro asistente legal especializado en normativa chilena.",
    images: ["https://legalpo.cl/og-deudas.jpg"],
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
          <section className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Consultas sobre Deudas en Chile</h1>
            <AdUnit slot="1234567890" format="horizontal" className="my-8" />
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                ¿Tienes dudas sobre tus deudas, cobranzas, prescripción o DICOM? Nuestro asistente legal especializado
                te ayuda a entender la normativa chilena sobre deudas.
              </p>
              <p className="text-gray-700 mb-6">Puedes consultar sobre:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Prescripción de deudas bancarias y comerciales</span>
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
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Procedimiento concursal (Ley 20.720)</span>
                </li>
              </ul>
            </div>
          </section>

          <PreguntasChat tema="deudas" />

          <section className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Información Legal sobre Deudas en Chile</h2>
            <div className="prose max-w-none">
              <p>
                En Chile, las deudas están reguladas principalmente por el Código Civil y leyes especiales como la Ley
                20.720 de Reorganización y Liquidación, la Ley 19.496 sobre Protección de los Derechos de los
                Consumidores, y la Ley 18.010 sobre Operaciones de Crédito de Dinero.
              </p>

              <h3 className="text-xl font-medium mt-4 mb-2 text-blue-800">Prescripción de Deudas</h3>
              <p>
                Las deudas prescriben después de cierto tiempo si no hay acciones de cobro. Según el Código Civil, las
                acciones ordinarias prescriben en 5 años, mientras que algunas deudas comerciales pueden prescribir en
                plazos más cortos.
              </p>

              <h3 className="text-xl font-medium mt-4 mb-2 text-blue-800">Cobranza de Deudas</h3>
              <p>
                La cobranza puede ser extrajudicial (llamadas, cartas) o judicial (demandas). La Ley 19.496 regula las
                prácticas de cobranza extrajudicial, prohibiendo el hostigamiento y estableciendo horarios para las
                gestiones de cobro.
              </p>

              <h3 className="text-xl font-medium mt-4 mb-2 text-blue-800">DICOM y Boletines Comerciales</h3>
              <p>
                La Ley 20.575 regula el tratamiento de datos personales relativos a obligaciones de carácter económico,
                financiero, bancario o comercial. Establece plazos para la permanencia de información en los registros y
                el derecho a solicitar la eliminación de datos bajo ciertas circunstancias.
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
