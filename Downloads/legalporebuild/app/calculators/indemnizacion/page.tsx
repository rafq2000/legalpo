"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Users, AlertTriangle, Info } from "lucide-react"
import Link from "next/link"

export default function IndemnizacionCalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-slate-800/30 to-transparent border-b border-white/5">
        <div className="container">
          <Link href="/">
            <Button variant="ghost" className="mb-6 -ml-4 text-slate-300 hover:text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
              <Users className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-300">Calculadora Laboral</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
              Calculadora de <span className="text-amber-400">Indemnización</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Calcula la indemnización que te corresponde según el tipo de despido y años de servicio en Chile.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="container max-w-2xl">
          <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-amber-600/20 to-amber-700/20 border-b border-white/10">
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <div className="p-2 bg-amber-600/20 rounded-lg">
                  <Users className="h-6 w-6 text-amber-400" />
                </div>
                Calculadora de Indemnización por Despido
              </CardTitle>
              <p className="text-slate-300">Estima tu indemnización según la causal de término y años trabajados</p>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-8">
                <div className="space-y-3">
                  <Label htmlFor="salario" className="text-slate-200 font-medium">
                    Último salario mensual bruto (CLP)
                  </Label>
                  <Input
                    id="salario"
                    type="number"
                    placeholder="Ej: 600000"
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-amber-500/50 focus:ring-amber-500/20 rounded-xl"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="anos-servicio" className="text-slate-200 font-medium">
                    Años de servicio
                  </Label>
                  <Input
                    id="anos-servicio"
                    type="number"
                    placeholder="Ej: 3"
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-amber-500/50 focus:ring-amber-500/20 rounded-xl"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-slate-200 font-medium">Tipo de despido</Label>
                  <Card className="bg-amber-500/5 border-amber-500/20">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Info className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-amber-300 mb-2">En Desarrollo</h4>
                          <p className="text-sm text-slate-300">
                            La funcionalidad de cálculo automático según causal específica está en desarrollo.
                            Próximamente podrás obtener cálculos precisos para despido injustificado, necesidades de la
                            empresa, desahucio, y otras causales.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
                  disabled
                >
                  Calcular Indemnización (Próximamente)
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Legal Disclaimer */}
          <Card className="mt-8 bg-amber-500/5 border-amber-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-300 mb-2">Aviso Legal</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Este cálculo es solo una estimación basada en las disposiciones generales del Código del Trabajo de
                    Chile. La indemnización real puede variar según la causal específica de despido, convenios
                    colectivos, circunstancias particulares del caso, y interpretaciones legales. Para casos
                    específicos, consulta con un abogado laboralista.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information Card */}
          <Card className="mt-8 bg-white/5 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-xl text-white">Tipos de indemnización en Chile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-slate-200">Indemnización por años de servicio</h4>
                    <p className="text-sm text-slate-400">
                      30 días de remuneración por cada año trabajado (máximo 330 días)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-slate-200">Indemnización sustitutiva del aviso previo</h4>
                    <p className="text-sm text-slate-400">30 días de remuneración cuando no se da aviso previo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-slate-200">Recargo por despido injustificado</h4>
                    <p className="text-sm text-slate-400">
                      Entre 30% y 100% adicional si el despido es declarado injustificado
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-slate-200">Indemnización especial</h4>
                    <p className="text-sm text-slate-400">Para trabajadores con fuero o en casos especiales</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
