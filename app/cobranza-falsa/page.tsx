import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Clock, AlertTriangle, FileWarning, ShieldCheck, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageAds } from "@/components/page-ads"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "¿Qué hacer si me llega una carta falsa de cobranza judicial? | LegalPO",
  description:
    "Guía completa sobre cómo identificar y actuar ante cartas falsas de cobranza judicial en Chile. Aprende a defenderte de cobranzas abusivas o fraudulentas.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/cobranza-falsa",
  },
}

export default function CobranzaFalsaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6 flex items-center">
            <Button variant="outline" size="sm" asChild className="mr-4">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
            <nav className="flex">
              <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Inicio
                  </Link>
                </li>
                <li>/</li>
                <li className="font-medium text-foreground">Cobranza falsa</li>
              </ol>
            </nav>
          </div>

          <PageAds />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                  ¿Qué hacer si me llega una carta falsa de cobranza judicial?
                </h1>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>Actualizado: Mayo 2025</span>
                  <span className="mx-2">•</span>
                  <FileText className="mr-1 h-4 w-4" />
                  <span>Tiempo de lectura: 8 min</span>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                  <p className="text-lg font-medium text-red-900">
                    Las cartas falsas de cobranza judicial han aumentado un 250% en Chile. Estas comunicaciones buscan
                    intimidarte para que pagues deudas prescritas, inexistentes o por montos inflados. Conoce cómo
                    identificarlas y defenderte.
                  </p>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2>¿Qué son las cartas falsas de cobranza judicial?</h2>

                <p>
                  Las cartas falsas de cobranza judicial son documentos que simulan ser notificaciones oficiales de
                  tribunales o estudios jurídicos, pero que en realidad son intentos de intimidación para que pagues
                  deudas que podrían estar prescritas, ser inexistentes o estar infladas con intereses y gastos
                  abusivos.
                </p>

                <p>Estas cartas suelen tener características como:</p>

                <ul>
                  <li>Apariencia oficial con sellos, timbres o logos que imitan documentos judiciales</li>
                  <li>Lenguaje legal intimidante con términos como "embargo inminente" o "orden judicial"</li>
                  <li>Amenazas de consecuencias graves si no pagas inmediatamente</li>
                  <li>Montos inflados con intereses, multas y gastos de cobranza excesivos</li>
                  <li>Información vaga sobre el origen de la deuda o fechas imprecisas</li>
                  <li>Solicitud de pago a cuentas personales o mediante métodos poco convencionales</li>
                </ul>

                <h2>¿Por qué son peligrosas estas cartas?</h2>

                <p>
                  Estas comunicaciones son particularmente dañinas porque juegan con el miedo y la desinformación.
                  Muchas personas, especialmente adultos mayores o quienes desconocen sus derechos, pagan por temor a un
                  embargo o a problemas legales, sin verificar si la deuda es real, está prescrita o si los montos son
                  correctos.
                </p>

                <p>
                  Además, estas cartas pueden ser parte de intentos de estafa más elaborados, donde te piden datos
                  personales o bancarios para "regularizar" tu situación, exponiendo tu información sensible a
                  delincuentes.
                </p>
              </div>

              <Tabs defaultValue="identificar" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="identificar" className="text-sm">
                    Cómo identificarlas
                  </TabsTrigger>
                  <TabsTrigger value="actuar" className="text-sm">
                    Qué hacer
                  </TabsTrigger>
                  <TabsTrigger value="derechos" className="text-sm">
                    Tus derechos
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="identificar" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <FileWarning className="h-5 w-5 mr-2 text-amber-500" />
                        Cómo identificar una carta falsa de cobranza
                      </CardTitle>
                      <CardDescription>Señales de alerta que debes conocer</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          Identificar una carta falsa de cobranza judicial es el primer paso para protegerte. Estas son
                          las señales de alerta más comunes:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="border rounded-lg p-4 bg-red-50">
                            <h4 className="font-medium mb-2 text-red-800">Señales en el formato</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Uso excesivo de sellos, timbres o logos que parecen oficiales</li>
                              <li>Errores ortográficos o gramaticales en un documento "legal"</li>
                              <li>Mezcla de formatos (parte impresa, parte manuscrita)</li>
                              <li>Ausencia de número de causa o rol de tribunal</li>
                              <li>Falta de firma de un funcionario judicial identificable</li>
                              <li>Uso de papel común en lugar de papel membretado oficial</li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-4 bg-yellow-50">
                            <h4 className="font-medium mb-2 text-yellow-800">Señales en el contenido</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Amenazas exageradas o poco realistas (cárcel por deudas)</li>
                              <li>Plazos extremadamente cortos para pagar (24-48 horas)</li>
                              <li>Información vaga sobre el origen de la deuda</li>
                              <li>Montos que no coinciden con lo que recuerdas deber</li>
                              <li>Referencias a leyes inexistentes o mal citadas</li>
                              <li>Uso de términos legales incorrectos o mal aplicados</li>
                            </ul>
                          </div>
                        </div>

                        <h3 className="font-medium text-lg mt-4">Diferencias con notificaciones reales</h3>
                        <p>Las notificaciones judiciales legítimas en Chile tienen estas características:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>Son entregadas personalmente</strong> por un receptor judicial o funcionario del
                            tribunal, no llegan por correo común.
                          </li>
                          <li>
                            <strong>Contienen información específica:</strong> número de causa, tribunal, partes
                            involucradas, motivo exacto.
                          </li>
                          <li>
                            <strong>No solicitan pagos inmediatos</strong> a cuentas personales o mediante
                            transferencias.
                          </li>
                          <li>
                            <strong>Incluyen plazos razonables</strong> para responder o comparecer (generalmente más de
                            5 días hábiles).
                          </li>
                          <li>
                            <strong>Están firmadas por un funcionario judicial</strong> identificable.
                          </li>
                        </ul>

                        <div className="bg-blue-50 p-4 rounded-lg mt-4">
                          <h4 className="font-medium text-blue-800 mb-2">Ejemplo real</h4>
                          <p className="text-sm">
                            María recibió una carta con logos del Poder Judicial que amenazaba con "embargo inmediato de
                            bienes" por una supuesta deuda de tarjeta de crédito de hace 7 años. La carta pedía
                            transferir $450.000 a una cuenta personal para "detener el proceso judicial". Al verificar,
                            descubrió que no existía tal causa en tribunales y que la deuda estaba prescrita hace años.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="actuar" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                        Qué hacer si recibes una carta sospechosa
                      </CardTitle>
                      <CardDescription>Pasos a seguir para protegerte</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-4 mt-2">
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            1
                          </div>
                          <div>
                            <h3 className="font-medium">No pagues inmediatamente</h3>
                            <p className="text-muted-foreground">
                              Aunque la carta parezca urgente, tómate tiempo para verificar su legitimidad. Las
                              cobranzas legítimas siempre te dan un plazo razonable para responder.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            2
                          </div>
                          <div>
                            <h3 className="font-medium">Verifica la existencia de la causa judicial</h3>
                            <p className="text-muted-foreground">
                              Busca el número de causa en el sitio del Poder Judicial (www.pjud.cl) o llama directamente
                              al tribunal mencionado. Si la carta es legítima, debe existir un registro oficial.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            3
                          </div>
                          <div>
                            <h3 className="font-medium">Investiga la deuda mencionada</h3>
                            <p className="text-muted-foreground">
                              Verifica si realmente tuviste esa deuda, cuándo fue la última vez que la pagaste o
                              reconociste, y si podría estar prescrita (5 años para deudas comerciales, 3 años para
                              facturas).
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            4
                          </div>
                          <div>
                            <h3 className="font-medium">Guarda la carta como evidencia</h3>
                            <p className="text-muted-foreground">
                              No deseches la carta. Guárdala junto con el sobre en que llegó, ya que puede servir como
                              prueba si decides denunciar o si necesitas defenderte legalmente.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            5
                          </div>
                          <div>
                            <h3 className="font-medium">Denuncia la situación</h3>
                            <p className="text-muted-foreground">
                              Si confirmas que es una carta falsa, puedes denunciar en:
                            </p>
                            <ul className="list-disc pl-5 mt-2 text-sm">
                              <li>SERNAC: Por prácticas de cobranza abusivas</li>
                              <li>PDI o Carabineros: Si hay intento de estafa</li>
                              <li>
                                Superintendencia de Insolvencia y Reemprendimiento: Si involucra a empresas de cobranza
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ol>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                        <h4 className="font-medium text-yellow-800 mb-1">
                          ¿Y si la deuda es real pero está prescrita?
                        </h4>
                        <p className="text-sm text-yellow-700">
                          Si la deuda existió pero han pasado más de 5 años desde el último pago o reconocimiento (3
                          años para facturas), puedes alegar prescripción. No reconozcas la deuda ni hagas pagos
                          parciales, ya que esto reinicia el plazo de prescripción.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="derechos" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <ShieldCheck className="h-5 w-5 mr-2 text-green-500" />
                        Tus derechos frente a las cobranzas
                      </CardTitle>
                      <CardDescription>Lo que la ley te protege</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          En Chile, existen leyes que te protegen contra prácticas abusivas de cobranza. Conocer tus
                          derechos es fundamental para defenderte:
                        </p>

                        <h3 className="font-medium text-lg">Ley del Consumidor (Ley 19.496)</h3>
                        <p>Esta ley establece que las empresas de cobranza NO pueden:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Enviar documentos que aparenten ser escritos judiciales</li>
                          <li>
                            Hacer llamadas o visitas durante horarios inapropiados (antes de 8 AM o después de 8 PM)
                          </li>
                          <li>Amenazar con consecuencias falsas (como prisión por deudas)</li>
                          <li>Informar de la deuda a terceros o avergonzarte públicamente</li>
                          <li>Cobrar intereses o gastos de cobranza por encima de lo permitido por ley</li>
                        </ul>

                        <h3 className="font-medium text-lg">Prescripción de deudas</h3>
                        <p>
                          Las deudas prescriben después de cierto tiempo si no hay acciones legales o reconocimiento:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            <strong>5 años:</strong> Deudas comerciales generales (tarjetas de crédito, préstamos
                            personales)
                          </li>
                          <li>
                            <strong>3 años:</strong> Facturas y boletas
                          </li>
                          <li>
                            <strong>2 años:</strong> Intereses de préstamos
                          </li>
                        </ul>
                        <p className="text-sm mt-2">
                          Importante: La prescripción no es automática, debes alegarla si te demandan. Y si reconoces la
                          deuda o haces un pago parcial, el plazo se reinicia.
                        </p>

                        <h3 className="font-medium text-lg">Derecho a información clara</h3>
                        <p>
                          Tienes derecho a solicitar información detallada sobre cualquier deuda que te cobren,
                          incluyendo:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Origen exacto de la deuda</li>
                          <li>Monto original y desglose de intereses y gastos</li>
                          <li>Fecha del último pago o gestión</li>
                          <li>Identificación clara del acreedor actual</li>
                        </ul>

                        <div className="bg-green-50 p-4 rounded-lg mt-4">
                          <h4 className="font-medium text-green-800 mb-2">Caso de éxito</h4>
                          <p className="text-sm">
                            Carlos recibió una carta que simulaba ser judicial por una deuda de $1.200.000 de una tienda
                            departamental de hace 6 años. Verificó que no había juicio real, presentó un reclamo en
                            SERNAC y una denuncia en la PDI. La empresa de cobranza fue multada y tuvo que enviar una
                            carta de disculpas, además de cesar todo intento de cobro de esa deuda prescrita.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="prose max-w-none mt-8 mb-8">
                <h2>¿Qué dice la ley sobre las falsas notificaciones judiciales?</h2>

                <p>
                  Enviar documentos que simulan ser judiciales no solo es una práctica abusiva, sino que puede
                  constituir varios delitos según la legislación chilena:
                </p>

                <ul>
                  <li>
                    <strong>Estafa (Art. 468 del Código Penal):</strong> Si se busca obtener un beneficio económico
                    mediante engaño.
                  </li>
                  <li>
                    <strong>Uso malicioso de instrumento privado falso (Art. 198 del Código Penal):</strong> Al crear
                    documentos que simulan ser oficiales.
                  </li>
                  <li>
                    <strong>Suplantación de identidad:</strong> Si se hacen pasar por funcionarios judiciales o
                    abogados.
                  </li>
                  <li>
                    <strong>Infracción a la Ley del Consumidor (Art. 37 de la Ley 19.496):</strong> Específicamente
                    prohíbe el envío de comunicaciones que parezcan escritos judiciales.
                  </li>
                </ul>

                <p>
                  Las sanciones pueden incluir multas significativas e incluso penas de cárcel, dependiendo de la
                  gravedad del caso y si hay un patrón sistemático de conducta.
                </p>

                <h3>¿Quiénes suelen enviar estas cartas falsas?</h3>

                <p>Los remitentes más comunes de estas comunicaciones fraudulentas son:</p>

                <ol>
                  <li>
                    <strong>Empresas de cobranza extrajudicial</strong> que utilizan tácticas intimidatorias para cobrar
                    deudas prescritas o con montos inflados.
                  </li>
                  <li>
                    <strong>Estudios jurídicos de dudosa reputación</strong> que trabajan a comisión para recuperar
                    carteras de deuda antigua.
                  </li>
                  <li>
                    <strong>Estafadores</strong> que buscan obtener pagos por deudas inexistentes o acceder a
                    información personal.
                  </li>
                  <li>
                    <strong>Compradores de cartera morosa</strong> que adquieren deudas antiguas por un precio muy bajo
                    y buscan recuperar el máximo posible.
                  </li>
                </ol>

                <h3>Caso real: Operación "Falso Embargo"</h3>

                <p>
                  En 2023, la PDI desarticuló una red que enviaba falsas notificaciones judiciales a miles de personas
                  en Santiago, Valparaíso y Concepción. Las cartas amenazaban con embargos inminentes por supuestas
                  deudas bancarias antiguas. Los estafadores lograron recaudar más de $200 millones antes de ser
                  detenidos. Fueron formalizados por estafa, uso de instrumento privado falso y asociación ilícita.
                </p>

                <div className="bg-gray-100 p-4 rounded-lg my-6">
                  <h3 className="text-lg font-medium mb-2">Preguntas frecuentes</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">¿Pueden embargarme sin notificarme personalmente?</h4>
                      <p className="text-sm">
                        No. Para que proceda un embargo, primero debe existir una demanda judicial y debes ser
                        notificado personalmente o por cédula (dejada en tu domicilio por un receptor judicial). Nunca
                        se notifica un embargo solo por carta.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">¿Qué pasa si la carta menciona una deuda que no reconozco?</h4>
                      <p className="text-sm">
                        Tienes derecho a solicitar información detallada sobre el origen de la deuda. Si no reconoces la
                        deuda, puedes exigir verificación y pruebas de su existencia antes de realizar cualquier pago.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">¿Me pueden meter a DICOM por no pagar una deuda prescrita?</h4>
                      <p className="text-sm">
                        No. Si la deuda está prescrita, no pueden ingresarte al boletín comercial (DICOM). Si lo hacen,
                        puedes exigir tu eliminación inmediata y denunciar ante la Comisión para el Mercado Financiero
                        (CMF).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <Card className="mb-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Contenido relacionado</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/deudas-prescritas" className="text-blue-600 hover:underline flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          ¿Cuándo prescriben las deudas en Chile?
                        </Link>
                      </li>
                      <li>
                        <Link href="/estafas-internet" className="text-blue-600 hover:underline flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Estafas por internet: cómo denunciar
                        </Link>
                      </li>
                      <li>
                        <Link href="/derechos-deudor" className="text-blue-600 hover:underline flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Derechos del deudor en Chile
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-red-50 border-red-100 mb-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Líneas de emergencia</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-red-600" />
                        <span className="font-medium">SERNAC:</span>
                        <span className="ml-2">800 700 100</span>
                      </li>
                      <li className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-red-600" />
                        <span className="font-medium">PDI:</span>
                        <span className="ml-2">134</span>
                      </li>
                      <li className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-red-600" />
                        <span className="font-medium">Superintendencia de Insolvencia:</span>
                        <span className="ml-2">800 800 512</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-100 mb-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">¿Necesitas ayuda?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">
                      Si recibiste una carta sospechosa de cobranza, nuestros abogados pueden orientarte sobre los pasos
                      a seguir.
                    </p>
                    <Button asChild className="w-full">
                      <Link href="/ask">Consultar ahora</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
