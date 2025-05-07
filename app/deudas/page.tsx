import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ChatTabs } from "@/components/chat-tabs"

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
  const informacionDeudas = (
    <>
      <h2 className="text-2xl font-semibold mb-6 text-blue-900">Información Legal sobre Deudas en Chile</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium mb-3 text-blue-800">Prescripción de Deudas</h3>
          <p className="text-gray-700 mb-2">
            En Chile, las deudas prescriben después de cierto tiempo si no hay acciones de cobro. Según el Código Civil:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Las acciones ordinarias prescriben en 5 años (Art. 2515 del Código Civil)</li>
            <li>Las acciones ejecutivas prescriben en 3 años</li>
            <li>Las deudas comerciales pueden prescribir en plazos más cortos según su naturaleza</li>
          </ul>
          <p className="text-gray-700">
            La prescripción debe ser alegada como excepción en un juicio, no opera automáticamente.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-3 text-blue-800">Cobranza de Deudas</h3>
          <p className="text-gray-700 mb-2">
            La cobranza puede ser extrajudicial (llamadas, cartas) o judicial (demandas). La Ley 19.496 regula las
            prácticas de cobranza extrajudicial:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Prohíbe el hostigamiento y establece horarios para las gestiones de cobro</li>
            <li>Las empresas solo pueden realizar gestiones de cobranza de lunes a sábado entre 8:00 y 20:00 horas</li>
            <li>Está prohibido enviar documentos que aparenten ser escritos judiciales</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-3 text-blue-800">DICOM y Boletines Comerciales</h3>
          <p className="text-gray-700 mb-2">
            La Ley 20.575 regula el tratamiento de datos personales relativos a obligaciones económicas:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Las deudas impagas pueden permanecer en DICOM por un máximo de 5 años o hasta que sean pagadas</li>
            <li>
              Existe el derecho a solicitar la eliminación de datos bajo ciertas circunstancias (pago de la deuda)
            </li>
            <li>Las deudas menores a 2,5 UTM que tengan más de 12 meses de morosidad no pueden ser informadas</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-3 text-blue-800">Ley 20.720 de Reorganización y Liquidación</h3>
          <p className="text-gray-700 mb-2">
            Esta ley establece procedimientos para personas y empresas con problemas financieros:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Procedimiento de Reorganización: permite renegociar deudas con acreedores bajo un plan aprobado</li>
            <li>Procedimiento de Liquidación: permite liquidar bienes para pagar deudas y obtener una "descarga"</li>
            <li>Renegociación para Personas Naturales: procedimiento especial para personas con deudas</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Nota:</strong> Esta información es de carácter general. Para casos específicos, te recomendamos
            consultar con un abogado especializado.
          </p>
        </div>
      </div>
    </>
  )

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Dudas sobre Deudas</h1>
          <p className="text-gray-600 mb-8">
            Consulta sobre deudas, cobranzas, prescripción y DICOM y recibe respuestas basadas en el Código Civil y
            leyes complementarias
          </p>

          <ChatTabs tema="deudas" informacionContent={informacionDeudas} />
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
