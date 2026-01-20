import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Shield, Heart, Lightbulb } from "lucide-react"
import Link from "next/link"
import { PageAds } from "@/components/page-ads"

export const metadata: Metadata = {
  title: "Quiénes Somos - LegalPO | Tu Asistente Legal Inteligente",
  description:
    "Conoce el equipo detrás de LegalPO, tu asistente legal con IA especializado en derecho chileno. Nuestra misión y valores.",
  keywords: "quienes somos legalpo, equipo legal, asistente legal ia, mision vision valores",
}

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Users className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Quiénes Somos</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
              Conoce a LegalPO
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Somos un equipo de expertos legales y tecnológicos comprometidos con democratizar el acceso a la justicia
              en Chile.
            </p>
          </div>

          <PageAds />

          <div className="grid gap-8">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Target className="h-6 w-6 text-emerald-400" />
                  Nuestra misión
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p className="text-lg leading-relaxed">
                  Democratizar el acceso a la justicia en Chile mediante tecnología inteligente, proporcionando
                  herramientas legales precisas, confiables y gratuitas que empoderan a las personas para conocer y
                  ejercer sus derechos.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Lightbulb className="h-6 w-6 text-yellow-400" />
                    Nuestra visión
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <p>
                    Ser la plataforma legal líder en Chile, donde cada persona pueda acceder fácilmente a información
                    jurídica confiable y herramientas que le permitan resolver sus problemas legales de manera
                    eficiente.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Heart className="h-6 w-6 text-red-400" />
                    Nuestros valores
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <ul className="space-y-2">
                    <li>
                      • <strong>Accesibilidad:</strong> Justicia para todos
                    </li>
                    <li>
                      • <strong>Precisión:</strong> Información confiable
                    </li>
                    <li>
                      • <strong>Transparencia:</strong> Procesos claros
                    </li>
                    <li>
                      • <strong>Innovación:</strong> Tecnología al servicio legal
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Award className="h-6 w-6 text-purple-400" />
                  ¿Por qué elegir LegalPO?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2 flex items-center">
                        <Shield className="h-4 w-4 mr-2 text-green-400" />
                        Experiencia comprobada
                      </h3>
                      <p className="text-sm text-slate-300">
                        Más de 50,000 usuarios han confiado en nuestras herramientas legales con resultados exitosos.
                      </p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2 flex items-center">
                        <Users className="h-4 w-4 mr-2 text-blue-400" />
                        Equipo especializado
                      </h3>
                      <p className="text-sm text-slate-300">
                        Abogados expertos en derecho chileno y desarrolladores especializados en IA legal.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-emerald-400" />
                        Precisión garantizada
                      </h3>
                      <p className="text-sm text-slate-300">
                        Nuestras calculadoras están basadas en la legislación chilena vigente y se actualizan
                        constantemente.
                      </p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2 flex items-center">
                        <Heart className="h-4 w-4 mr-2 text-red-400" />
                        Compromiso social
                      </h3>
                      <p className="text-sm text-slate-300">
                        Creemos que el acceso a la justicia es un derecho fundamental que debe estar al alcance de
                        todos.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Lightbulb className="h-6 w-6 text-yellow-400" />
                  Nuestra historia
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  LegalPO nació de la necesidad de hacer más accesible el derecho en Chile. Observamos que muchas
                  personas enfrentaban barreras para acceder a información legal básica y herramientas que les
                  permitieran conocer sus derechos.
                </p>
                <p>
                  Combinando la experiencia legal con tecnología de inteligencia artificial, creamos una plataforma que
                  democratiza el acceso a la justicia, proporcionando herramientas precisas y confiables de forma
                  gratuita.
                </p>
                <p>
                  Hoy, miles de chilenos utilizan nuestras herramientas diariamente para resolver sus dudas legales,
                  calcular indemnizaciones, generar documentos y obtener asesoría especializada.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 border-emerald-500/30">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">¿Listo para resolver tus dudas legales?</h3>
                <p className="text-emerald-200 mb-6">
                  Únete a los miles de chilenos que ya confían en LegalPO para sus necesidades legales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/herramientas">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Explorar herramientas</Button>
                  </Link>
                  <Link href="/ask">
                    <Button
                      variant="outline"
                      className="border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 bg-transparent"
                    >
                      Hacer consulta
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
