import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Briefcase, AlertTriangle, FileText, Scale, Users, Clock } from "lucide-react"
import Link from "next/link"
import { PageAds } from "@/components/page-ads"

export const metadata: Metadata = {
  title: "Dudas Laborales Chile - Asesoría Legal Especializada | LegalPO",
  description:
    "Resuelve tus dudas laborales con abogados especializados en derecho del trabajo chileno. Finiquitos, despidos, contratos y más.",
  keywords: "dudas laborales chile, derecho trabajo, finiquito, despido, contrato trabajo, asesoría laboral",
}

export default function DudasLaboralesPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Briefcase className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Derecho Laboral</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
              Dudas Laborales en Chile
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Obtén asesoría legal especializada en derecho del trabajo. Resuelve tus dudas sobre finiquitos, despidos,
              contratos y más.
            </p>
          </div>

          <PageAds />

          <div className="grid gap-8">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <FileText className="h-6 w-6 text-emerald-400" />
                  Temas más consultados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2">Finiquitos</h3>
                      <p className="text-sm text-slate-300">Cálculo, componentes y derechos al término del contrato</p>
                      <Link href="/calculators/finiquito">
                        <Button size="sm" className="mt-2 bg-emerald-600 hover:bg-emerald-700">
                          Calcular finiquito
                        </Button>
                      </Link>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2">Despidos</h3>
                      <p className="text-sm text-slate-300">Causales, procedimientos e indemnizaciones</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2">Contratos de trabajo</h3>
                      <p className="text-sm text-slate-300">Tipos, cláusulas y modificaciones</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2">Vacaciones</h3>
                      <p className="text-sm text-slate-300">Derechos, cálculo y compensaciones</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2">Horas extras</h3>
                      <p className="text-sm text-slate-300">Límites, pagos y recargos legales</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2">Licencias médicas</h3>
                      <p className="text-sm text-slate-300">Procedimientos y subsidios</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Scale className="h-6 w-6 text-blue-400" />
                  Tus derechos laborales
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-white mb-3">Derechos fundamentales:</h3>
                    <ul className="space-y-2">
                      <li>• Derecho a remuneración justa</li>
                      <li>• Jornada laboral limitada</li>
                      <li>• Descanso semanal</li>
                      <li>• Vacaciones anuales</li>
                      <li>• Protección contra despido injustificado</li>
                      <li>• Ambiente laboral seguro</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-3">¿Dónde reclamar?</h3>
                    <ul className="space-y-2">
                      <li>• Inspección del Trabajo</li>
                      <li>• Tribunales del Trabajo</li>
                      <li>• Mediación laboral</li>
                      <li>• Sindicatos</li>
                      <li>• Defensoría Laboral</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-amber-500/10 border-amber-500/20 text-amber-200">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Importante:</strong> Los plazos para reclamar derechos laborales son limitados. No dejes pasar
                el tiempo y busca asesoría legal oportuna.
              </AlertDescription>
            </Alert>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Users className="h-6 w-6 text-purple-400" />
                  ¿Necesitas asesoría especializada?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p className="mb-4">
                  Si tienes dudas específicas sobre tu situación laboral, nuestros abogados especializados pueden
                  ayudarte a entender tus derechos y las opciones legales disponibles.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/ask">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      <Clock className="h-4 w-4 mr-2" />
                      Consulta Legal Gratuita
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
