import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"

export function FeaturedQuestion() {
  return (
    <Card className="border-blue-100 shadow-sm">
      <CardHeader className="bg-blue-50 border-b border-blue-100">
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-5 w-5 text-blue-600" />
          <CardTitle className="text-lg">Consulta destacada</CardTitle>
        </div>
        <CardDescription>Ejemplo de cómo LegalPO responde a tus consultas legales</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="font-medium text-gray-800">
              ¿Qué debo hacer si mi empleador no me ha pagado las horas extras del último mes?
            </p>
          </div>

          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-gray-800">Si tu empleador no ha pagado tus horas extras, tienes varias opciones:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1 text-gray-700">
              <li>
                Primero, conversa directamente con tu empleador o departamento de RRHH, presentando evidencia de las
                horas trabajadas.
              </li>
              <li>
                Si no hay respuesta, puedes presentar una denuncia formal ante la Inspección del Trabajo más cercana.
              </li>
              <li>La Inspección citará a una mediación entre las partes para resolver el conflicto.</li>
              <li>Si la mediación no funciona, puedes iniciar una demanda laboral por no pago de remuneraciones.</li>
            </ol>
            <p className="mt-2 text-gray-800">
              Recuerda que las horas extras deben pagarse con un recargo del 50% sobre el valor de la hora ordinaria y
              tienen un límite de 2 horas diarias.
            </p>
          </div>

          <div className="flex justify-end">
            <Link href="/dudas-laborales">
              <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                Hacer mi consulta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
