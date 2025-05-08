import { AdminGuard } from "@/components/admin-guard"
import { InvalidTrafficChecker } from "@/components/invalid-traffic-checker"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, CheckCircle, Info } from "lucide-react"

export default function VerifyTrafficPage() {
  return (
    <AdminGuard>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-2">Verificación de Tráfico</h1>
        <p className="text-gray-600 mb-8">
          Analiza y verifica tus fuentes de tráfico para asegurar el cumplimiento de las políticas de AdSense
        </p>

        <Tabs defaultValue="checker">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="checker">Verificador de tráfico</TabsTrigger>
            <TabsTrigger value="info">Información sobre tráfico no válido</TabsTrigger>
            <TabsTrigger value="recommendations">Recomendaciones</TabsTrigger>
          </TabsList>

          <TabsContent value="checker">
            <InvalidTrafficChecker />
          </TabsContent>

          <TabsContent value="info">
            <Card>
              <CardHeader>
                <CardTitle>¿Qué es el tráfico no válido?</CardTitle>
                <CardDescription>
                  Información sobre el tráfico no válido y cómo afecta a tu cuenta de AdSense
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-blue-800">Definición</h3>
                      <p className="text-sm text-blue-700 mt-1">
                        El tráfico no válido incluye cualquier clic o impresión que no sea el resultado de un interés
                        genuino del usuario. Esto puede incluir clics accidentales, clics automatizados, tráfico
                        incentivado y más.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Tipos de tráfico no válido:</h3>

                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Tráfico no válido general</h4>
                      <p className="text-sm text-gray-600">
                        Incluye clics accidentales, clics repetidos por el mismo usuario y otros tipos de actividad no
                        intencionada.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Tráfico no válido sofisticado</h4>
                      <p className="text-sm text-gray-600">
                        Incluye actividad maliciosa más avanzada, como bots, software malicioso, tráfico incentivado,
                        fuentes de tráfico artificiales y clics fraudulentos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Consecuencias del tráfico no válido:</h3>

                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Limitación del servicio de anuncios</h4>
                      <p className="text-sm text-gray-600">
                        Google puede limitar temporalmente el número de anuncios que puede mostrar tu cuenta mientras
                        evalúa la calidad de tu tráfico.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Inhabilitación de la cuenta</h4>
                      <p className="text-sm text-gray-600">
                        En casos graves o reincidentes, Google puede inhabilitar tu cuenta de AdSense de forma
                        permanente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Retención de pagos</h4>
                      <p className="text-sm text-gray-600">
                        Google puede retener los pagos relacionados con actividad no válida.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations">
            <Card>
              <CardHeader>
                <CardTitle>Recomendaciones para evitar el tráfico no válido</CardTitle>
                <CardDescription>Mejores prácticas para mantener la calidad de tu tráfico</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-md p-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-green-800">Mejores prácticas</h3>
                        <p className="text-sm text-green-700 mt-1">
                          Sigue estas recomendaciones para mantener la calidad de tu tráfico y evitar problemas con tu
                          cuenta de AdSense.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="border rounded-md p-4">
                      <h4 className="font-medium text-blue-700">1. No hagas clic en tus propios anuncios</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Nunca hagas clic en los anuncios de tu propio sitio web, ni pidas a amigos, familiares o colegas
                        que lo hagan. Esto viola las políticas de AdSense y puede considerarse fraude.
                      </p>
                    </div>

                    <div className="border rounded-md p-4">
                      <h4 className="font-medium text-blue-700">2. No compres tráfico</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Evita comprar tráfico de sitios web que prometen visitas o clics. Este tipo de tráfico suele ser
                        de baja calidad y puede considerarse no válido.
                      </p>
                    </div>

                    <div className="border rounded-md p-4">
                      <h4 className="font-medium text-blue-700">3. No uses programas de intercambio de tráfico</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Los programas que intercambian tráfico entre sitios web no generan tráfico genuino y pueden
                        violar las políticas de AdSense.
                      </p>
                    </div>

                    <div className="border rounded-md p-4">
                      <h4 className="font-medium text-blue-700">4. No incentives los clics</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        No ofrezcas incentivos a los usuarios para que hagan clic en los anuncios, como descuentos,
                        puntos o cualquier tipo de recompensa.
                      </p>
                    </div>

                    <div className="border rounded-md p-4">
                      <h4 className="font-medium text-blue-700">5. Monitorea tu tráfico</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Utiliza Google Analytics para monitorear tus fuentes de tráfico y detectar cualquier actividad
                        inusual o sospechosa.
                      </p>
                    </div>

                    <div className="border rounded-md p-4">
                      <h4 className="font-medium text-blue-700">6. Genera tráfico orgánico</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Enfócate en generar tráfico orgánico a través de SEO, redes sociales y marketing de contenidos.
                        Este tipo de tráfico es de alta calidad y cumple con las políticas de AdSense.
                      </p>
                    </div>

                    <div className="border rounded-md p-4">
                      <h4 className="font-medium text-blue-700">7. Protege tu sitio</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Implementa medidas de seguridad para proteger tu sitio de bots y actividades maliciosas, como
                        CAPTCHA en formularios y sistemas de autenticación seguros.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminGuard>
  )
}
