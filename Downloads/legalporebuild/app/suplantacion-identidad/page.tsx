import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, AlertTriangle, Phone, FileText, Users, Eye } from "lucide-react"
import Link from "next/link"
import { PageAds } from "@/components/page-ads"

export const metadata: Metadata = {
  title: "Suplantación de Identidad en Chile - Asesoría Legal | LegalPO",
  description:
    "Asesoría legal especializada en casos de suplantación de identidad en Chile. Conoce tus derechos y cómo proceder legalmente.",
  keywords: "suplantación identidad chile, robo identidad, fraude identidad, asesoría legal identidad",
}

export default function SuplantacionIdentidadPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-red-400" />
              <span className="text-sm font-medium text-red-300">Suplantación de Identidad</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
              Suplantación de Identidad en Chile
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Obtén asesoría legal especializada para casos de suplantación de identidad. Conoce tus derechos y cómo
              protegerte.
            </p>
          </div>

          <PageAds />

          <div className="grid gap-8">
            <Alert className="bg-red-500/10 border-red-500/20 text-red-200">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Urgente:</strong> Si eres víctima de suplantación de identidad, actúa inmediatamente. El tiempo
                es crucial para minimizar los daños.
              </AlertDescription>
            </Alert>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Eye className="h-6 w-6 text-orange-400" />
                  ¿Qué es la suplantación de identidad?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <p>
                  La suplantación de identidad ocurre cuando una persona usa ilegalmente la información personal de otra
                  para cometer fraudes, obtener beneficios económicos o causar daños a la reputación de la víctima.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-white mb-3">Tipos comunes:</h3>
                    <ul className="space-y-2">
                      <li>• Uso fraudulento de RUT</li>
                      <li>• Apertura de cuentas bancarias</li>
                      <li>• Solicitud de créditos</li>
                      <li>• Suplantación en redes sociales</li>
                      <li>• Uso de documentos falsos</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-3">Señales de alerta:</h3>
                    <ul className="space-y-2">
                      <li>• Movimientos bancarios no reconocidos</li>
                      <li>• Deudas que no contraíste</li>
                      <li>• Llamadas de cobranza inexplicables</li>
                      <li>• Problemas con tu historial crediticio</li>
                      <li>• Actividad sospechosa en redes sociales</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Phone className="h-6 w-6 text-green-400" />
                  Pasos inmediatos a seguir
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-white mb-3">Acciones urgentes:</h3>
                    <ol className="space-y-2 list-decimal pl-5">
                      <li>Contacta inmediatamente a tu banco</li>
                      <li>Cambia todas tus contraseñas</li>
                      <li>Presenta denuncia en Carabineros o PDI</li>
                      <li>Notifica a DICOM y otras centrales de riesgo</li>
                      <li>Documenta todos los daños</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-3">Instituciones a contactar:</h3>
                    <ul className="space-y-2">
                      <li>• Carabineros de Chile (133)</li>
                      <li>• Policía de Investigaciones (134)</li>
                      <li>• SERNAC (servicio al consumidor)</li>
                      <li>• Superintendencia de Bancos</li>
                      <li>• Centrales de riesgo (DICOM, etc.)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <FileText className="h-6 w-6 text-blue-400" />
                  Consecuencias legales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <p>La suplantación de identidad es un delito grave en Chile, penado por el Código Penal con:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-white mb-2">Para el perpetrador:</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Presidio menor (61 días a 5 años)</li>
                      <li>• Multas económicas</li>
                      <li>• Inhabilitación para cargos públicos</li>
                      <li>• Antecedentes penales</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-white mb-2">Derechos de la víctima:</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Indemnización por daños</li>
                      <li>• Reparación del daño moral</li>
                      <li>• Limpieza del historial crediticio</li>
                      <li>• Protección de datos personales</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Users className="h-6 w-6 text-purple-400" />
                  ¿Necesitas asesoría legal?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p className="mb-4">
                  Los casos de suplantación de identidad pueden ser complejos y requieren acción legal especializada. Un
                  abogado experto puede ayudarte a recuperar tu identidad y obtener compensación por los daños.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/ask">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      Consulta Legal Urgente
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
