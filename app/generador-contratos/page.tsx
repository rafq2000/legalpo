import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AdUnit } from "@/components/ad-unit"

function GeneradorContratosPageContent() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center mb-4">
        <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span>Volver al inicio</span>
        </Link>
      </div>

      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Generador de Contratos</h1>
        <p className="text-gray-600 mt-2">Crea contratos legales personalizados según la legislación chilena vigente</p>
      </div>

      <AdUnit slot="1234567890" format="horizontal" className="my-8" />

      <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Contrato Laboral</h3>
            <p className="text-gray-600 mb-4">Crea un contrato laboral personalizado según el Código del Trabajo</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 text-sm">
              <li>Jornada laboral</li>
              <li>Remuneración</li>
              <li>Vacaciones</li>
              <li>Causales de término</li>
            </ul>
            <Link href="/contratos/trabajo" className="w-full">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Crear contrato</Button>
            </Link>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Contrato de Arriendo</h3>
            <p className="text-gray-600 mb-4">Genera un contrato de arriendo seguro y completo</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 text-sm">
              <li>Duración del arriendo</li>
              <li>Monto y forma de pago</li>
              <li>Garantías</li>
              <li>Condiciones de uso</li>
            </ul>
            <Link href="/contratos/arriendo" className="w-full">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Crear contrato</Button>
            </Link>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Contrato General</h3>
            <p className="text-gray-600 mb-4">Crea un contrato para servicios profesionales independientes</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 text-sm">
              <li>Descripción de servicios</li>
              <li>Honorarios</li>
              <li>Plazos de entrega</li>
              <li>Confidencialidad</li>
            </ul>
            <Link href="/contratos/general" className="w-full">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Crear contrato</Button>
            </Link>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-amber-800 text-sm">
          <p className="font-medium">¿Necesitas un tipo de contrato diferente?</p>
          <p className="mt-1">Puedes crear un contrato personalizado adaptado a tus necesidades específicas.</p>
          <div className="mt-3">
            <Link href="/contratos/personalizado">
              <Button variant="outline" className="border-amber-200 hover:bg-amber-100 text-amber-800">
                Crear contrato personalizado
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <AdUnit slot="1234567890" format="rectangle" />
      </div>
    </div>
  )
}

export default function GeneradorContratosPage() {
  return <GeneradorContratosPageContent />
}
