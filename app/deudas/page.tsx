import type { Metadata } from "next"
import { PreguntasChat } from "@/components/preguntas-chat"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Consultas sobre Deudas en Chile - Asesoría Legal | LegalPo",
  description:
    "Resuelve tus dudas sobre deudas, cobranzas, embargos y repactaciones en Chile. Obtén respuestas claras y precisas basadas en la legislación chilena actual.",
  keywords: "deudas Chile, cobranza judicial, embargo, repactación deudas, prescripción deudas, consulta legal deudas",
  openGraph: {
    title: "Consultas sobre Deudas en Chile - Asesoría Legal | LegalPo",
    description:
      "Resuelve tus dudas sobre deudas, cobranzas, embargos y repactaciones en Chile. Obtén respuestas claras y precisas basadas en la legislación chilena actual.",
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
      "Resuelve tus dudas sobre deudas, cobranzas, embargos y repactaciones en Chile. Obtén respuestas claras y precisas.",
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
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                ¿Tienes dudas sobre tus deudas, procesos de cobranza o embargos? Estamos aquí para ayudarte a entender
                tus derechos y opciones según la legislación chilena vigente.
              </p>
              <p className="text-gray-700 mb-6">
                Nuestro asistente legal especializado puede responder tus consultas sobre:
              </p>
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
                  <span>Embargos y medidas precautorias</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Repactaciones y convenios de pago</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Deudas con bancos y casas comerciales</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span>Boletín comercial y DICOM</span>
                </li>
              </ul>
            </div>
          </section>

          <PreguntasChat tema="deuda" />

          <section className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Información Legal sobre Deudas en Chile</h2>
            <div className="prose max-w-none">
              <p>
                En Chile, las deudas están reguladas principalmente por el Código Civil y leyes especiales como la Ley
                19.496 sobre Protección de los Derechos de los Consumidores y la Ley 18.010 sobre Operaciones de Crédito
                de Dinero.
              </p>

              <h3 className="text-xl font-medium mt-4 mb-2 text-blue-800">Prescripción de Deudas</h3>
              <p>
                Las deudas en Chile prescriben generalmente en 5 años desde que se hicieron exigibles, según el artículo
                2515 del Código Civil. Sin embargo, existen excepciones:
              </p>
              <ul>
                <li>Deudas tributarias: 3 años como regla general</li>
                <li>Deudas de servicios básicos: 2 años</li>
                <li>Cheques: 1 año desde su protesto</li>
              </ul>

              <h3 className="text-xl font-medium mt-4 mb-2 text-blue-800">Cobranza y Embargos</h3>
              <p>
                La Ley 19.496 regula las prácticas de cobranza extrajudicial, estableciendo horarios permitidos y
                prohibiendo conductas de hostigamiento. Para que proceda un embargo, debe existir un juicio previo con
                sentencia ejecutoriada, salvo excepciones como los títulos ejecutivos.
              </p>

              <h3 className="text-xl font-medium mt-4 mb-2 text-blue-800">Repactaciones</h3>
              <p>
                Las repactaciones son acuerdos voluntarios entre acreedor y deudor. Es importante considerar que al
                repactar, se reconoce la deuda y se interrumpe la prescripción. Antes de repactar, es recomendable
                verificar el monto real de la deuda y negociar condiciones favorables.
              </p>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
