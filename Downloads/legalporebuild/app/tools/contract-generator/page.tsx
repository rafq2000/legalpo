"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileSignature, ArrowLeft, AlertTriangle, Sparkles, FileText, Home, Briefcase } from "lucide-react"
import Link from "next/link"

export default function ContractGeneratorPage() {
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
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
              <FileSignature className="h-4 w-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">Generador Legal</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
              Generador de <span className="text-indigo-400">Contratos</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Crea contratos legales personalizados y válidos según la legislación chilena. Herramientas profesionales
              para generar documentos jurídicos confiables.
            </p>
          </div>
        </div>
      </section>

      {/* Contract Types */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Tipos de <span className="text-indigo-400">Contratos</span>
            </h2>
            <p className="text-slate-400">Selecciona el tipo de contrato que necesitas generar</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contrato de Arriendo */}
            <Card className="group bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden hover:bg-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              <CardHeader className="bg-gradient-to-r from-indigo-600/20 to-indigo-700/20 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-indigo-600/20 rounded-xl backdrop-blur-sm">
                    <Home className="h-8 w-8 text-indigo-400" />
                  </div>
                  <div className="flex items-center gap-1 bg-amber-500/20 border border-amber-400/30 backdrop-blur-sm text-amber-300 px-3 py-1 rounded-full text-xs font-bold">
                    <Sparkles className="h-3 w-3" />
                    Popular
                  </div>
                </div>
                <CardTitle className="text-xl text-white">Contrato de Arriendo</CardTitle>
                <p className="text-sm text-slate-300">
                  Genera un contrato de arriendo completo y legal para propiedades residenciales o comerciales
                </p>
              </CardHeader>

              <CardContent className="p-6 relative z-10">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    Cláusulas estándar incluidas
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    Cumple normativa chilena
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    Personalizable según necesidades
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl h-11 font-semibold"
                  disabled
                >
                  Crear Contrato (Próximamente)
                </Button>
              </CardContent>
            </Card>

            {/* Contrato de Trabajo */}
            <Card className="group bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden hover:bg-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              <CardHeader className="bg-gradient-to-r from-slate-600/20 to-slate-700/20 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-600/20 rounded-xl backdrop-blur-sm">
                    <Briefcase className="h-8 w-8 text-slate-400" />
                  </div>
                </div>
                <CardTitle className="text-xl text-white">Contrato de Trabajo</CardTitle>
                <p className="text-sm text-slate-300">Crea contratos laborales según el Código del Trabajo chileno</p>
              </CardHeader>

              <CardContent className="p-6 relative z-10">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                    Indefinido, plazo fijo o por obra
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                    Cláusulas laborales esenciales
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                    Conforme al Código del Trabajo
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl h-11 font-semibold"
                  disabled
                >
                  Crear Contrato (Próximamente)
                </Button>
              </CardContent>
            </Card>

            {/* Contrato de Servicios */}
            <Card className="group bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden hover:bg-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              <CardHeader className="bg-gradient-to-r from-teal-600/20 to-teal-700/20 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-teal-600/20 rounded-xl backdrop-blur-sm">
                    <FileText className="h-8 w-8 text-teal-400" />
                  </div>
                </div>
                <CardTitle className="text-xl text-white">Contrato de Servicios</CardTitle>
                <p className="text-sm text-slate-300">Genera contratos para prestación de servicios profesionales</p>
              </CardHeader>

              <CardContent className="p-6 relative z-10">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                    Servicios profesionales
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                    Honorarios y condiciones
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                    Cláusulas de responsabilidad
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl h-11 font-semibold"
                  disabled
                >
                  Crear Contrato (Próximamente)
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Legal Disclaimer */}
          <Card className="mt-12 bg-amber-500/5 border-amber-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-300 mb-2">Aviso Legal</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Los contratos generados son plantillas basadas en la legislación chilena vigente y buenas prácticas
                    legales. Sin embargo, cada situación es única y puede requerir cláusulas específicas o
                    modificaciones particulares. Se recomienda siempre revisar los contratos con un abogado antes de su
                    firma, especialmente para casos complejos o de alto valor. LegalPO no se hace responsable por el uso
                    inadecuado de los contratos generados.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features Card */}
          <Card className="mt-8 bg-white/5 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-xl text-white">Características de nuestros contratos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-slate-200">Conformes a la ley chilena</h4>
                    <p className="text-sm text-slate-400">Actualizados según la legislación vigente</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-slate-200">Completamente personalizables</h4>
                    <p className="text-sm text-slate-400">Adapta cada cláusula a tus necesidades</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-slate-200">Formato profesional</h4>
                    <p className="text-sm text-slate-400">Listos para imprimir y firmar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-slate-200">Cláusulas protectoras</h4>
                    <p className="text-sm text-slate-400">Incluyen protecciones para ambas partes</p>
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
