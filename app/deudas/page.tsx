import type { Metadata } from "next"
import { DeudasChat } from "@/components/deudas-chat"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AdUnit } from "@/components/ad-unit"

export const metadata: Metadata = {
  title: "Consultas sobre Deudas en Chile | LegalPo",
  description:
    "Resuelve tus dudas sobre deudas, cobranzas y embargos con nuestro asistente legal especializado en normativa chilena.",
}

export default function DeudasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-6">Consultas sobre Deudas</h1>
          <AdUnit slot="1234567890" format="horizontal" className="my-8" />
          <p className="text-lg mb-8">
            Nuestro asistente legal especializado puede ayudarte con consultas sobre prescripción de deudas, cobranza
            judicial y extrajudicial, embargos, repactaciones y más.
          </p>

          <div className="mb-8">
            <DeudasChat />
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Información Legal sobre Deudas</h2>
            <p className="mb-2">
              En Chile, las deudas están reguladas principalmente por el Código Civil y leyes especiales como:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Ley 20.720 de Reorganización y Liquidación</li>
              <li>Código Civil, artículo 2515 sobre prescripción</li>
              <li>Ley 19.496 sobre Protección de los Derechos de los Consumidores</li>
              <li>Ley 18.010 sobre Operaciones de Crédito de Dinero</li>
            </ul>
            <p>
              Recuerda que esta información es de carácter general. Para casos específicos, te recomendamos consultar
              con un abogado especializado.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
      <div className="mt-8">
        <AdUnit slot="1234567890" format="rectangle" />
      </div>
      <WhatsAppButton />
    </div>
  )
}
