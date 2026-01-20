import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, Car, FileText, Phone, Shield, Users } from "lucide-react"
import Link from "next/link"
import { PageAds } from "@/components/page-ads"

export const metadata: Metadata = {
  title: "Accidentes de Tránsito en Chile - Asesoría Legal | LegalPO",
  description:
    "Asesoría legal especializada en accidentes de tránsito en Chile. Conoce tus derechos, cómo proceder y obtén compensación justa.",
  keywords: "accidentes tránsito chile, asesoría legal accidentes, compensación accidentes, derechos víctimas tránsito",
}

export default function AccidentesTransitoPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
              <Car className="h-4 w-4 text-red-400" />
              <span className="text-sm font-medium text-red-300">Accidentes de Tránsito</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
              Accidentes de Tránsito en Chile
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Obtén asesoría legal especializada para accidentes de tránsito. Conoce tus derechos y cómo obtener la
              compensación que mereces.
            </p>
          </div>

          <PageAds />

          <div className="grid gap-8">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Shield className="h-6 w-6 text-blue-400" />
                  ¿Qué hacer después de un accidente?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-white mb-3">Pasos inmediatos:</h3>
                    <ul className="space-y-2">
                      <li>• Mantén la calma y evalúa lesiones</li>
                      <li>• Llama a Carabineros (133)</li>
                      <li>• Solicita atención médica si es necesario</li>
                      <li>• Toma fotografías del lugar</li>
                      <li>• Intercambia datos con el otro conductor</li>
                      <li>• Busca testigos</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-3">Documentos importantes:</h3>
                    <ul className="space-y-2">
                      <li>• Parte policial</li>
                      <li>• Certificados médicos</li>
                      <li>• Fotografías del accidente</li>
                      <li>• Datos del seguro</li>
                      <li>• Licencias de conducir</li>
                      <li>• Permisos de circulación</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Users className="h-6 w-6 text-green-400" />
                  Tipos de compensación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-white mb-2">Daños materiales</h3>
                    <p className="text-sm">Reparación o reposición del vehículo, objetos personales dañados.</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-white mb-2">Daños corporales</h3>
                    <p className="text-sm">Gastos médicos, rehabilitación, incapacidad temporal o permanente.</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-white mb-2">Daño moral</h3>
                    <p className="text-sm">Compensación por sufrimiento, dolor y alteración de la vida normal.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-amber-500/10 border-amber-500/20 text-amber-200">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Importante:</strong> Tienes 4 años para presentar una demanda por accidente de tránsito desde la
                fecha del accidente. No dejes pasar el tiempo.
              </AlertDescription>
            </Alert>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <FileText className="h-6 w-6 text-purple-400" />
                  ¿Necesitas asesoría legal?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p className="mb-4">
                  Si has sufrido un accidente de tránsito, es importante que conozcas tus derechos y las opciones
                  legales disponibles. Un abogado especializado puede ayudarte a obtener la compensación justa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/ask">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      <Phone className="h-4 w-4 mr-2" />
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
