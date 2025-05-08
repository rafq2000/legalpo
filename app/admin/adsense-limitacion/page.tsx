import { AdminGuard } from "@/components/admin-guard"
import { AdsensePolicyChecker } from "@/components/adsense-policy-checker"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, CheckCircle, Info, Shield } from "lucide-react"

export default function AdsenseLimitationPage() {
  return (
    <AdminGuard>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-2">Resolver la limitación del servicio de anuncios</h1>
        <p className="text-gray-600 mb-8">
          Esta herramienta te ayudará a identificar y resolver los problemas que pueden estar causando la limitación del
          servicio de anuncios en tu cuenta de AdSense.
        </p>

        <Tabs defaultValue="checker">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="checker">Verificador de políticas</TabsTrigger>
            <TabsTrigger value="info">Información sobre la limitación</TabsTrigger>
            <TabsTrigger value="actions">Acciones recomendadas</TabsTrigger>
          </TabsList>

          <TabsContent value="checker">
            <AdsensePolicyChecker />
          </TabsContent>

          <TabsContent value="info">
            <Card>
              <CardHeader>
                <CardTitle>¿Qué significa "Limitación del servicio de anuncios"?</CardTitle>
                <CardDescription>
                  Información sobre la limitación temporal del servicio de anuncios en AdSense
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-blue-800">Definición</h3>
                      <p className="text-sm text-blue-700 mt-1">
                        Google limita temporalmente el número de anuncios que puede mostrar tu cuenta de AdSense
                        mientras evalúa la calidad de tu tráfico o si ha identificado tráfico no válido en tu cuenta.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Causas comunes de la limitación:</h3>

                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Evaluación de cuenta nueva</h4>
                      <p className="text-sm text-gray-600">
                        Las cuentas nuevas suelen pasar por un período de evaluación mientras Google analiza la calidad
                        del tráfico. Esto es normal y suele durar aproximadamente 30 días.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Tráfico no válido detectado</h4>
                      <p className="text-sm text-gray-600">
                        Google puede haber detectado patrones de tráfico sospechosos o no válidos en tu sitio, como
                        clics repetitivos, tráfico artificial o fuentes de tráfico prohibidas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Problemas de implementación de anuncios</h4>
                      <p className="text-sm text-gray-600">
                        La colocación incorrecta de anuncios, modificaciones no autorizadas del código de AdSense o
                        implementaciones que animan a los usuarios a hacer clic en los anuncios.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-amber-800">Duración de la limitación</h3>
                      <p className="text-sm text-amber-700 mt-1">
                        Normalmente, estas limitaciones se imponen durante 30 días, pero pueden durar más en algunos
                        casos. Google evaluará y actualizará automáticamente dicho límite a medida que estudie tu
                        tráfico.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="actions">
            <Card>
              <CardHeader>
                <CardTitle>Acciones recomendadas</CardTitle>
                <CardDescription>
                  Pasos que puedes seguir para resolver la limitación del servicio de anuncios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-md p-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-green-800">Acciones inmediatas</h3>
                        <ul className="text-sm text-green-700 mt-1 space-y-2 list-disc pl-5">
                          <li>
                            Verifica que tu sitio cumpla con todas las políticas de AdSense utilizando el verificador de
                            políticas
                          </li>
                          <li>Revisa tus fuentes de tráfico y asegúrate de que sean legítimas</li>
                          <li>
                            Comprueba la implementación de tus anuncios para asegurarte de que cumplen con las
                            directrices
                          </li>
                          <li>No hagas clic en tus propios anuncios ni pidas a otros que lo hagan</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium">Plan de acción detallado:</h3>

                  <div className="space-y-4">
                    <div className="border rounded-md p-4">
                      <h4 className="font-medium text-blue-700">1. Revisar y mejorar la calidad del contenido</h4>
                      <ul className="text-sm mt-2 space-y-1 list-disc pl-5">
                        <li>Asegúrate de que tu contenido sea original, útil y de alta calidad</li>
                        <li>Actualiza regularmente tu contenido para mantenerlo relevante</li>
                        <li>Evita el contenido duplicado o generado automáticamente</li>
                        <li>Asegúrate de que tu contenido no incluya temas restringidos por AdSense</li>
                      </ul>
                    </div>

                    <div className="border rounded-md p-4">
                      <h4 className="font-medium text-blue-700">2. Verificar las fuentes de tráfico</h4>
                      <ul className="text-sm mt-2 space-y-1 list-disc pl-5">
                        <li>Analiza tus fuentes de tráfico en Google Analytics</li>
                        <li>Identifica y elimina cualquier fuente de tráfico sospechosa o no válida</li>
                        <li>No compres tráfico ni uses programas de pago por clic</li>
                        <li>
                          Enfócate en generar tráfico orgánico a través de SEO, redes sociales y marketing de contenidos
                        </li>
                      </ul>
                    </div>

                    <div className="border rounded-md p-4">
                      <h4 className="font-medium text-blue-700">3. Revisar la implementación de anuncios</h4>
                      <ul className="text-sm mt-2 space-y-1 list-disc pl-5">
                        <li>Usa el código de AdSense tal como lo proporciona Google, sin modificaciones</li>
                        <li>
                          Asegúrate de que los anuncios estén claramente diferenciados del contenido y la navegación
                        </li>
                        <li>No coloques anuncios en lugares inapropiados como ventanas emergentes o correos</li>
                        <li>
                          Considera usar anuncios automáticos para que Google coloque los anuncios en los lugares
                          óptimos
                        </li>
                      </ul>
                    </div>

                    <div className="border rounded-md p-4">
                      <h4 className="font-medium text-blue-700">4. Mejorar la experiencia del usuario</h4>
                      <ul className="text-sm mt-2 space-y-1 list-disc pl-5">
                        <li>Asegúrate de que tu sitio sea fácil de navegar y rápido</li>
                        <li>Evita redirecciones no deseadas, malware o ventanas emergentes</li>
                        <li>Mejora la velocidad de carga de tu sitio</li>
                        <li>Asegúrate de que tu sitio sea responsive y se vea bien en dispositivos móviles</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mt-4">
                    <div className="flex items-start">
                      <Shield className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-blue-800">Paciencia y persistencia</h3>
                        <p className="text-sm text-blue-700 mt-1">
                          La limitación del servicio de anuncios es temporal. Continúa generando contenido de calidad,
                          mejorando tu sitio y asegurándote de cumplir con todas las políticas de AdSense. La paciencia
                          y la persistencia son clave para superar esta limitación.
                        </p>
                      </div>
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
