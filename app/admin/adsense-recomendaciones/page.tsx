import { AdminGuard } from "@/components/admin-guard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, CheckCircle, Info, Shield } from "lucide-react"

export default function AdsenseRecommendationsPage() {
  return (
    <AdminGuard>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Recomendaciones para Resolver la Limitación de AdSense</h1>
        <p className="text-gray-600 mb-8">
          Sigue estas recomendaciones para resolver la limitación temporal del servicio de anuncios y asegurar el
          cumplimiento de las políticas de AdSense.
        </p>

        <Tabs defaultValue="content">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="content">Contenido</TabsTrigger>
            <TabsTrigger value="traffic">Tráfico</TabsTrigger>
            <TabsTrigger value="implementation">Implementación</TabsTrigger>
            <TabsTrigger value="compliance">Cumplimiento</TabsTrigger>
          </TabsList>
          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Recomendaciones de Contenido</CardTitle>
                <CardDescription>
                  Asegúrate de que tu contenido cumpla con las políticas de AdSense y sea de alta calidad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Contenido original y de calidad</h3>
                      <p className="text-sm text-gray-600">
                        Asegúrate de que todo el contenido sea original, útil y de alta calidad. Evita el contenido
                        duplicado o generado automáticamente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Actualización regular</h3>
                      <p className="text-sm text-gray-600">
                        Actualiza tu contenido regularmente para mantenerlo relevante y fresco. Google valora el
                        contenido actualizado.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Evitar contenido restringido</h3>
                      <p className="text-sm text-gray-600">
                        Asegúrate de que tu contenido no incluya temas restringidos por AdSense, como contenido para
                        adultos, drogas ilegales, armas, etc.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Valor para el usuario</h3>
                      <p className="text-sm text-gray-600">
                        Crea contenido que proporcione valor real a los usuarios. Responde preguntas, resuelve problemas
                        o proporciona información útil.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="traffic">
            <Card>
              <CardHeader>
                <CardTitle>Recomendaciones de Tráfico</CardTitle>
                <CardDescription>
                  Asegúrate de que tu tráfico provenga de fuentes legítimas y sea de alta calidad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Evitar tráfico no válido</h3>
                      <p className="text-sm text-gray-600">
                        No compres tráfico, no uses programas de pago por clic, ni envíes correos no deseados para
                        generar tráfico.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Fuentes de tráfico orgánico</h3>
                      <p className="text-sm text-gray-600">
                        Enfócate en generar tráfico orgánico a través de SEO, redes sociales y marketing de contenidos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Monitoreo de tráfico</h3>
                      <p className="text-sm text-gray-600">
                        Utiliza Google Analytics para monitorear tus fuentes de tráfico y detectar cualquier anomalía.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Evitar clics propios</h3>
                      <p className="text-sm text-gray-600">
                        Nunca hagas clic en tus propios anuncios ni pidas a otros que lo hagan. Esto viola las políticas
                        de AdSense.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="implementation">
            <Card>
              <CardHeader>
                <CardTitle>Recomendaciones de Implementación</CardTitle>
                <CardDescription>Asegúrate de que la implementación técnica de AdSense sea correcta</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Código de AdSense sin modificaciones</h3>
                      <p className="text-sm text-gray-600">
                        Usa el código de AdSense tal como lo proporciona Google, sin modificaciones que puedan afectar
                        su rendimiento.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Colocación adecuada de anuncios</h3>
                      <p className="text-sm text-gray-600">
                        Coloca los anuncios de manera que no interfieran con la navegación del sitio ni se confundan con
                        el contenido.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Anuncios automáticos</h3>
                      <p className="text-sm text-gray-600">
                        Considera usar anuncios automáticos para que Google coloque los anuncios en los lugares óptimos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Evitar demasiados anuncios</h3>
                      <p className="text-sm text-gray-600">
                        No sobrecargues tu sitio con demasiados anuncios. Esto puede afectar la experiencia del usuario
                        y violar las políticas.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="compliance">
            <Card>
              <CardHeader>
                <CardTitle>Recomendaciones de Cumplimiento</CardTitle>
                <CardDescription>Asegúrate de cumplir con todas las políticas y requisitos de AdSense</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Política de privacidad</h3>
                      <p className="text-sm text-gray-600">
                        Asegúrate de tener una política de privacidad clara que mencione el uso de cookies y la
                        recopilación de datos para publicidad.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Consentimiento de cookies</h3>
                      <p className="text-sm text-gray-600">
                        Implementa un banner de consentimiento de cookies que cumpla con las regulaciones de privacidad.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Revisión regular de políticas</h3>
                      <p className="text-sm text-gray-600">
                        Revisa regularmente las políticas de AdSense para asegurarte de que tu sitio sigue cumpliendo
                        con ellas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Contacto y dirección física</h3>
                      <p className="text-sm text-gray-600">
                        Incluye información de contacto y, si es posible, una dirección física en tu sitio para aumentar
                        la confianza.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-xl font-bold text-blue-800 mb-4">Paciencia y Persistencia</h2>
          <p className="text-blue-700 mb-4">
            La limitación del servicio de anuncios es temporal mientras Google evalúa la calidad de tu tráfico. Este
            proceso puede tomar hasta 30 días o más en algunos casos.
          </p>
          <p className="text-blue-700">
            Durante este período, continúa generando contenido de calidad, mejorando tu sitio y asegurándote de cumplir
            con todas las políticas de AdSense. La paciencia y la persistencia son clave para superar esta limitación.
          </p>
        </div>
      </div>
    </AdminGuard>
  )
}
