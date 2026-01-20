import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, Users, Scale, FileText, Phone, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { PageAds } from "@/components/page-ads"

export const metadata: Metadata = {
  title: "Consultas de Derecho de Familia en Chile - Asesoría Legal | LegalPO",
  description:
    "Asesoría legal especializada en derecho de familia en Chile. Divorcios, pensión alimenticia, tuición, adopción y más.",
  keywords: "derecho familia chile, divorcio, pension alimenticia, tuicion, adopcion, asesoría familiar",
}

export default function ConsultaFamiliaPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-pink-400" />
              <span className="text-sm font-medium text-pink-300">Derecho de Familia</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
              Consultas de Derecho de Familia
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Obtén asesoría legal especializada en temas de familia. Divorcios, pensión alimenticia, tuición y más con
              abogados expertos.
            </p>
          </div>

          <PageAds />

          <div className="grid gap-8">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Users className="h-6 w-6 text-blue-400" />
                  Áreas de especialización
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2">Divorcios y Separaciones</h3>
                      <p className="text-sm text-slate-300">
                        Divorcio por mutuo acuerdo, unilateral, separación de bienes
                      </p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2">Pensión Alimenticia</h3>
                      <p className="text-sm text-slate-300">Cálculo, demanda, modificación y cumplimiento</p>
                      <Link href="/calculators/pension-alimentos">
                        <Button size="sm" className="mt-2 bg-emerald-600 hover:bg-emerald-700">
                          Calcular pensión
                        </Button>
                      </Link>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2">Tuición y Cuidado Personal</h3>
                      <p className="text-sm text-slate-300">Custodia de menores, régimen de visitas</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2">Adopción</h3>
                      <p className="text-sm text-slate-300">Procesos de adopción nacional e internacional</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2">Violencia Intrafamiliar</h3>
                      <p className="text-sm text-slate-300">Medidas de protección, denuncias, asesoría</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2">Herencias Familiares</h3>
                      <p className="text-sm text-slate-300">Sucesiones, testamentos, legítimas</p>
                      <Link href="/calculators/herencia">
                        <Button size="sm" className="mt-2 bg-purple-600 hover:bg-purple-700">
                          Calcular herencia
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Scale className="h-6 w-6 text-green-400" />
                  Proceso de mediación familiar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <p>
                  En Chile, muchos conflictos familiares deben pasar por mediación antes de llegar a tribunales. Este
                  proceso busca acuerdos consensuados que beneficien a toda la familia.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-white mb-3">Ventajas de la mediación:</h3>
                    <ul className="space-y-2">
                      <li>• Proceso más rápido y económico</li>
                      <li>• Soluciones consensuadas</li>
                      <li>• Menor desgaste emocional</li>
                      <li>• Confidencialidad garantizada</li>
                      <li>• Preserva las relaciones familiares</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-3">Casos que requieren mediación:</h3>
                    <ul className="space-y-2">
                      <li>• Pensión alimenticia</li>
                      <li>• Cuidado personal de menores</li>
                      <li>• Régimen de visitas</li>
                      <li>• Relación directa y regular</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-red-500/10 border-red-500/20 text-red-200">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Violencia Intrafamiliar:</strong> Si eres víctima de violencia, llama al 149 (Fono Familia) o al
                133 (Carabineros). Tu seguridad y la de tus hijos es lo más importante.
              </AlertDescription>
            </Alert>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <FileText className="h-6 w-6 text-purple-400" />
                  ¿Necesitas asesoría familiar?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p className="mb-4">
                  Los temas de familia requieren atención especializada y sensible. Nuestros abogados expertos en
                  derecho de familia pueden ayudarte a encontrar las mejores soluciones para tu situación.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/ask">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      Consulta Familiar Gratuita
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button
                      variant="outline"
                      className="border-white/20 text-slate-300 hover:bg-white/10 bg-transparent"
                    >
                      Volver al inicio
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <PageAds />
        </div>
      </div>
    </div>
  )
}
