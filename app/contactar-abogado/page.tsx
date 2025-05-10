import type { Metadata } from "next"
import Link from "next/link"
import { Briefcase, Home, CreditCard, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contactar Abogado - LegalPO",
  description: "Selecciona la especialidad legal para contactar a un abogado especializado",
}

export default function ContactarAbogadoPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Contactar Abogado</h1>
        <p className="text-center text-gray-500 mb-8">
          Selecciona la especialidad legal para contactar a un abogado especializado
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-600" />
                Laboral
              </CardTitle>
              <CardDescription>Despidos, finiquitos, contratos de trabajo, acoso laboral</CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href={`https://wa.me/+56961458118?text=${encodeURIComponent("Hola, necesito asesoría legal LABORAL. Me contacto a través de LegalPO.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700">Contactar por WhatsApp</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-red-600" />
                Cobranza
              </CardTitle>
              <CardDescription>Deudas, cobranzas judiciales, prescripción de deudas</CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href={`https://wa.me/+56961458118?text=${encodeURIComponent("Hola, necesito asesoría legal en COBRANZA. Me contacto a través de LegalPO.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700">Contactar por WhatsApp</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Home className="h-5 w-5 text-purple-600" />
                Familia
              </CardTitle>
              <CardDescription>Pensión de alimentos, divorcio, cuidado personal, régimen de visitas</CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href={`https://wa.me/+56974095325?text=${encodeURIComponent("Hola, necesito asesoría legal en FAMILIA. Me contacto a través de LegalPO.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700">Contactar por WhatsApp</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-600" />
                Otros Temas
              </CardTitle>
              <CardDescription>Contratos, herencias, accidentes, arrendamiento, otros</CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href={`https://wa.me/+56961458118?text=${encodeURIComponent("Hola, necesito asesoría legal en OTRO TEMA. Me contacto a través de LegalPO.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700">Contactar por WhatsApp</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Al contactar a un abogado, aceptas que tus datos sean procesados para brindarte asesoría legal.
        </p>
      </div>
    </div>
  )
}
