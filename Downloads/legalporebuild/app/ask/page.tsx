import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Phone, Mail, Clock, Shield, Users } from "lucide-react"
import Link from "next/link"
import { PageAds } from "@/components/page-ads"

export const metadata: Metadata = {
  title: "Consulta Legal Gratuita - Pregunta a un Abogado | LegalPO",
  description:
    "Haz tu consulta legal gratuita con abogados especializados en derecho chileno. Respuestas rápidas y confiables para tus dudas legales.",
  keywords: "consulta legal gratuita, abogado online chile, pregunta legal, asesoría jurídica",
}

export default function AskPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <MessageSquare className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Consulta Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
              Consulta Legal Gratuita
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Obtén asesoría legal especializada de abogados expertos en derecho chileno. Resuelve tus dudas legales de
              forma rápida y confiable.
            </p>
          </div>

          <PageAds />

          <div className="grid gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/5 border-white/10">
                <CardHeader className="text-center">
                  <Phone className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Consulta Telefónica</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-slate-300">
                  <p className="mb-4">Habla directamente con un abogado especializado</p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">Llamar Ahora</Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader className="text-center">
                  <MessageSquare className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Chat en Línea</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-slate-300">
                  <p className="mb-4">Chatea en tiempo real con nuestros expertos</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">Iniciar Chat</Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader className="text-center">
                  <Mail className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Consulta por Email</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-slate-300">
                  <p className="mb-4">Envía tu consulta y recibe respuesta detallada</p>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">Enviar Email</Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Shield className="h-6 w-6 text-emerald-400" />
                  ¿Por qué elegir LegalPO?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300">
                  <div>
                    <h3 className="font-semibold text-white mb-3">Ventajas de nuestro servicio:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-green-400 mr-2" />
                        Respuesta rápida (24-48 horas)
                      </li>
                      <li className="flex items-center">
                        <Users className="h-4 w-4 text-blue-400 mr-2" />
                        Abogados especializados
                      </li>
                      <li className="flex items-center">
                        <Shield className="h-4 w-4 text-purple-400 mr-2" />
                        Confidencialidad garantizada
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-3">Áreas de especialización:</h3>
                    <ul className="space-y-2">
                      <li>• Derecho laboral</li>
                      <li>• Derecho de familia</li>
                      <li>• Accidentes de tránsito</li>
                      <li>• Derecho civil</li>
                      <li>• Herencias y sucesiones</li>
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
