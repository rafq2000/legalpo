import type { Metadata } from "next"
import { DeudasChat } from "@/components/deudas-chat"
import { PageLayout } from "@/components/page-layout"
import { CanonicalUrl } from "@/components/canonical-url"

export const metadata: Metadata = {
  title: "Consulta sobre Deudas y Cobranzas | LegalPO",
  description:
    "Resuelve tus dudas sobre deudas, cobranzas, prescripción y DICOM con nuestro asistente legal especializado en Chile.",
}

export default function DeudasPage() {
  return (
    <PageLayout>
      <CanonicalUrl path="/deudas" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-legalpo-primary">Consulta sobre Deudas y Cobranzas</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="mb-6 text-gray-700">
            Nuestro asistente legal especializado puede ayudarte a resolver dudas sobre deudas, cobranzas, prescripción
            de deudas, DICOM y más, basado en la legislación chilena vigente.
          </p>

          <DeudasChat />
        </div>
      </div>
    </PageLayout>
  )
}
