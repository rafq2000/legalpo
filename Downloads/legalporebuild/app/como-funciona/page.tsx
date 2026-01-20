import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageSquare, Calculator, FileText, Users, Shield } from "lucide-react"
import Link from "next/link"
import { PageAds } from "@/components/page-ads"

export const metadata: Metadata = {
  title: "Cómo Funciona LegalPO - Tu Asistente Legal Inteligente",
  description:
    "Descubre cómo funciona LegalPO, tu asistente legal con IA. Calculadoras, consultas y herramientas legales gratuitas para Chile.",
  keywords: "como funciona legalpo, asistente legal ia, calculadoras legales, consultas juridicas online",
}

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
              <HelpCircle className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">Cómo Funciona</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
              Cómo Funciona LegalPO
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Descubre cómo nuestro asistente legal inteligente te ayuda a resolver tus dudas legales de forma rápida y
              confiable.
            </p>
          </div>

          <PageAds />

          <div className="grid gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/5 border-white/10 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <CardTitle className="text-white">Selecciona tu herramienta</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <p>
                    Elige entre nuestras calculadoras legales, consultas con IA o herramientas especializadas según tu
                    necesidad.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <CardTitle className="text-white">Ingresa tu información</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <p>
                    Completa los datos solicitados de forma segura. Toda la información se procesa de manera
                    confidencial.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <CardTitle className="text-white">Obtén tu resultado</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <p>
                    Recibe resultados precisos basados en la legislación chilena vigente, con explicaciones detalladas.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Calculator className="h-6 w-6 text-emerald-400" />
                  Nuestras herramientas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2 flex items-center">
                        <Calculator className="h-4 w-4 mr-2 text-emerald-400" />
                        Calculadoras Legales
                      </h3>
                      <p className="text-sm text-slate-300 mb-3">
                        Herramientas precisas para calcular finiquitos, indemnizaciones, pensiones alimenticias y
                        herencias.
                      </p>
                      <Link href="/herramientas">
                        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                          Ver calculadoras
                        </Button>
                      </Link>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2 flex items-center">
                        <MessageSquare className="h-4 w-4 mr-2 text-blue-400" />
                        Consultas con IA
                      </h3>
                      <p className="text-sm text-slate-300 mb-3">
                        Haz preguntas específicas a nuestro asistente legal inteligente especializado en derecho
                        chileno.
                      </p>
                      <Link href="/ask">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Hacer consulta
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2 flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-purple-400" />
                        Generador de Documentos
                      </h3>
                      <p className="text-sm text-slate-300 mb-3">
                        Crea contratos, cartas legales y otros documentos jurídicos de forma automática.
                      </p>
                      <Link href="/tools/contract-generator">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          Generar documento
                        </Button>
                      </Link>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2 flex items-center">
                        <Users className="h-4 w-4 mr-2 text-orange-400" />
                        Asesoría Especializada
                      </h3>
                      <p className="text-sm text-slate-300 mb-3">
                        Conecta con abogados especializados para casos complejos que requieren atención personalizada.
                      </p>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        Contactar abogado
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Shield className="h-6 w-6 text-green-400" />
                  ¿Por qué confiar en LegalPO?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300">
                  <div>
                    <h3 className="font-semibold text-white mb-3">Precisión y confiabilidad:</h3>
                    <ul className="space-y-2">
                      <li>• Basado en legislación chilena vigente</li>
                      <li>• Desarrollado por expertos legales</li>
                      <li>• Actualizado constantemente</li>
                      <li>• Más de 50,000 usuarios satisfechos</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-3">Seguridad y privacidad:</h3>
                    <ul className="space-y-2">
                      <li>• Información completamente confidencial</li>
                      <li>• No almacenamos datos personales</li>
                      <li>• Conexión segura (SSL)</li>
                      <li>• Cumplimiento de normativas de privacidad</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Link href="/">
                <Button variant="outline" className="border-white/20 text-slate-300 hover:bg-white/10 bg-transparent">
                  Volver al inicio
                </Button>
              </Link>
            </div>
          </div>

          <PageAds />
        </div>
      </div>
    </div>
  )
}
