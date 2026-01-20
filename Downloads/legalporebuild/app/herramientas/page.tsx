import ToolsGrid from "@/components/tools-grid"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calculator, Brain, Zap, Target, Users, Star, TrendingUp } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Calculadoras Legales Chile #1 - Herramientas Jurídicas con IA | LegalPO",
  description:
    "🧮 Las calculadoras legales más precisas de Chile. Finiquito, pensión alimenticia, herencia, indemnización y más. ⚡ Resultados instantáneos basados en legislación chilena 2025. ✅ 100% Gratis. +50,000 usuarios.",
  keywords:
    "calculadoras legales chile, calculadora finiquito, calculadora pension alimenticia, calculadora herencia, calculadora indemnizacion, herramientas juridicas, calculadoras derecho, finiquito laboral, pension alimentos, herencia chile, indemnizacion accidentes, calculadora legal gratis, herramientas legales online, calculadoras juridicas chile, derecho laboral calculadora, derecho familia calculadora, codigo trabajo chile, ley 14908, codigo civil chile, calculadora juridica, herramientas derecho, legal tools chile, calculadoras abogados, herramientas legales ia, calculadoras con inteligencia artificial, legal calculators chile, juridical tools, law calculators, chile legal tools, abogado online, consulta legal, dudas legales, asesoría jurídica, legalpo herramientas",
}

export default function HerramientasPage() {
  const stats = [
    {
      icon: <Users className="h-6 w-6 text-emerald-400" />,
      value: "50,000+",
      label: "Usuarios Activos",
    },
    {
      icon: <Calculator className="h-6 w-6 text-blue-400" />,
      value: "15+",
      label: "Calculadoras",
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-400" />,
      value: "4.9/5",
      label: "Calificación",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-400" />,
      value: "99.9%",
      label: "Precisión",
    },
  ]

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      title: "Inteligencia Artificial",
      description: "Calculadoras potenciadas con IA para mayor precisión y análisis legal avanzado",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Resultados Instantáneos",
      description: "Obtén cálculos precisos en segundos, no en horas como métodos tradicionales",
    },
    {
      icon: <Target className="h-8 w-8 text-green-500" />,
      title: "Precisión Legal",
      description: "Basadas en legislación chilena vigente 2025, actualizadas constantemente",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-slate-800/30 to-transparent border-b border-white/5">
        <div className="container">
          <Link href="/">
            <Button variant="ghost" className="mb-6 -ml-4 text-slate-300 hover:text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
              <Calculator className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">Calculadoras Legales #1 en Chile</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
              Calculadoras Legales Chile
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-emerald-400">
              Las Herramientas Jurídicas más Precisas y Confiables de Chile
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              <strong className="text-white">Más de 50,000 profesionales y ciudadanos</strong> confían en nuestras
              calculadoras legales. Herramientas especializadas basadas en la legislación chilena vigente 2025,
              potenciadas con inteligencia artificial para mayor precisión.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-b border-white/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Por qué elegir nuestras <span className="text-emerald-400">Calculadoras Legales?</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Tecnología avanzada aplicada al derecho chileno para brindarte la mejor experiencia legal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Todas las <span className="text-emerald-400">Calculadoras Legales</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Herramientas especializadas para cada área del derecho chileno
            </p>
          </div>

          <ToolsGrid showAll={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 border-t border-emerald-500/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitas una <span className="text-emerald-400">Calculadora Específica?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Si no encuentras la calculadora que necesitas, nuestro asistente legal con IA puede ayudarte con cualquier
            cálculo legal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Brain className="h-5 w-5 mr-2" />
                Consultar con IA
              </Button>
            </Link>
            <Link href="/ask">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm"
              >
                Asesoría Legal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
