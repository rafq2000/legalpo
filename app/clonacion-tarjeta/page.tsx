import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Clock, AlertTriangle, CreditCard, ShieldCheck, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageAds } from "@/components/page-ads"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Me clonaron la tarjeta: ¿Puedo recuperar mi dinero? | LegalPO",
  description:
    "Guía completa sobre qué hacer si te clonaron la tarjeta de crédito o débito en Chile. Pasos legales para recuperar tu dinero y proteger tus cuentas.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/clonacion-tarjeta",
  },
}

export default function ClonacionTarjetaPage() {
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
                <li className="font-medium text-foreground">Clonación de tarjeta</li>
              </ol>
            </nav>
          </div>

          <PageAds />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                  Me clonaron la tarjeta: ¿Puedo recuperar mi dinero?
                </h1>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>Actualizado: Mayo 2025</span>
                  <span className="mx-2">•</span>
                  <FileText className="mr-1 h-4 w-4" />
                  <span>Tiempo de lectura: 10 min</span>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                  <p className="text-lg font-medium text-red-900">
                    Si descubres cargos no reconocidos en tu tarjeta, actúa rápido. En Chile, la Ley 20.009 te protege y
                    puedes recuperar tu dinero si denuncias dentro de los primeros 7 días hábiles desde que te
                    enteraste.
                  </p>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2>¿Qué es la clonación de tarjetas y cómo ocurre?</h2>

                <p>
                  La clonación de tarjetas es un delito donde los estafadores copian la información de tu tarjeta de
                  crédito o débito para realizar compras fraudulentas. En Chile, este delito ha aumentado
                  significativamente, especialmente con el auge de las compras online.
                </p>

                <p>Las formas más comunes de clonación son:</p>

                <ul>
                  <li>
                    <strong>Skimming:</strong> Dispositivos instalados en cajeros automáticos o terminales de pago que
                    copian la información de la banda magnética.
                  </li>
                  <li>
                    <strong>Phishing:</strong> Correos o mensajes falsos que te piden ingresar tus datos bancarios en
                    sitios que imitan a tu banco.
                  </li>
                  <li>
                    <strong>Filtración de datos:</strong> Hackeos a tiendas online donde guardaste tus datos de tarjeta.
                  </li>
                  <li>
                    <strong>Manipulación física:</strong> Cuando alguien con acceso a tu tarjeta (como un mesero o
                    vendedor) copia tus datos.
                  </li>
                </ul>

                <h2>¿Cómo saber si me clonaron la tarjeta?</h2>

                <p>Estas son las señales más comunes:</p>

                <ul>
                  <li>Cargos o retiros que no reconoces en tu cuenta o cartola.</li>
                  <li>Notificaciones de compras que tú no realizaste.</li>
                  <li>Montos pequeños extraños (los estafadores suelen probar primero con cantidades menores).</li>
                  <li>Compras en lugares donde nunca has estado o en horarios imposibles.</li>
                  <li>Rechazo de tu tarjeta por fondos insuficientes cuando sabes que tienes saldo.</li>
                </ul>

                <p>
                  Si detectas cualquiera de estas señales, no esperes. Cada minuto cuenta para poder recuperar tu
                  dinero.
                </p>
              </div>

              <Tabs defaultValue="recuperar" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="recuperar" className="text-sm">
                    Cómo recuperar el dinero
                  </TabsTrigger>
                  <TabsTrigger value="denunciar" className="text-sm">
                    Cómo denunciar
                  </TabsTrigger>
                  <TabsTrigger value="prevenir" className="text-sm">
                    Cómo prevenirlo
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="recuperar" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <CreditCard className="h-5 w-5 mr-2 text-blue-500" />
                        Pasos para recuperar tu dinero
                      </CardTitle>
                      <CardDescription>Actúa rápido siguiendo estos pasos</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-4 mt-2">
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            1
                          </div>
                          <div>
                            <h3 className="font-medium">Bloquea inmediatamente tu tarjeta</h3>
                            <p className="text-muted-foreground">
                              Llama al número de atención al cliente de tu banco (generalmente está en el reverso de la
                              tarjeta) o usa la app bancaria para bloquear la tarjeta. Esto evitará nuevos cargos
                              fraudulentos.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            2
                          </div>
                          <div>
                            <h3 className="font-medium">Haz el reclamo formal al banco</h3>
                            <p className="text-muted-foreground">
                              Presenta un reclamo formal por escrito detallando los cargos no reconocidos. Puedes
                              hacerlo por la app, web del banco o presencialmente. Pide un número de reclamo y guárdalo.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            3
                          </div>
                          <div>
                            <h3 className="font-medium">Haz la denuncia policial</h3>
                            <p className="text-muted-foreground">
                              Acude a Carabineros o PDI para hacer una denuncia por uso fraudulento de tarjeta. Esta
                              denuncia es crucial para que el banco te devuelva el dinero según la Ley 20.009.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            4
                          </div>
                          <div>
                            <h3 className="font-medium">Entrega la denuncia al banco</h3>
                            <p className="text-muted-foreground">
                              Lleva una copia de la denuncia policial al banco dentro de los 7 días hábiles desde que
                              detectaste el fraude. Esto activará la protección de la Ley 20.009.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            5
                          </div>
                          <div>
                            <h3 className="font-medium">Seguimiento del caso</h3>
                            <p className="text-muted-foreground">
                              El banco tiene 5 días hábiles para devolverte el dinero una vez que presentas la denuncia.
                              Haz seguimiento constante y guarda todos los comprobantes de comunicación.
                            </p>
                          </div>
                        </li>
                      </ol>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                        <h4 className="font-medium text-yellow-800 mb-1">¡Importante!</h4>
                        <p className="text-sm text-yellow-700">
                          Si el banco se niega a devolverte el dinero a pesar de haber cumplido con todos los pasos,
                          puedes reclamar ante la Comisión para el Mercado Financiero (CMF) en www.cmf.cl o llamando al
                          800 600 0247. También puedes acudir al SERNAC.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="denunciar" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                        Cómo hacer la denuncia correctamente
                      </CardTitle>
                      <CardDescription>Pasos para denunciar el fraude</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          La denuncia es un paso crucial para recuperar tu dinero. Según la Ley 20.009, debes denunciar
                          dentro de 7 días hábiles desde que te enteraste del fraude.
                        </p>

                        <h3 className="font-medium text-lg">¿Dónde denunciar?</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>Carabineros:</strong> En cualquier comisaría. Es la opción más rápida y accesible.
                          </li>
                          <li>
                            <strong>PDI:</strong> En cualquier cuartel de la Policía de Investigaciones.
                          </li>
                          <li>
                            <strong>Fiscalía:</strong> En www.fiscaliadechile.cl puedes hacer la denuncia online.
                          </li>
                        </ul>

                        <h3 className="font-medium text-lg">¿Qué información llevar?</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Tu carnet de identidad</li>
                          <li>Cartola o comprobante de los movimientos fraudulentos</li>
                          <li>Número de la tarjeta afectada</li>
                          <li>Fechas y montos de las transacciones no reconocidas</li>
                          <li>Comprobante del bloqueo de la tarjeta</li>
                        </ul>

                        <div className="bg-blue-50 p-4 rounded-lg mt-4">
                          <h4 className="font-medium text-blue-800 mb-2">Consejos para la denuncia</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Sé específico sobre las fechas y montos</li>
                            <li>Menciona explícitamente que invocas la Ley 20.009</li>
                            <li>Pide una copia de la denuncia para llevar al banco</li>
                            <li>Pregunta por el número de parte o causa para seguimiento</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="prevenir" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <ShieldCheck className="h-5 w-5 mr-2 text-green-500" />
                        Cómo prevenir la clonación de tarjetas
                      </CardTitle>
                      <CardDescription>Medidas de seguridad para proteger tus tarjetas</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          La prevención es la mejor defensa contra el fraude. Estas medidas te ayudarán a proteger tus
                          tarjetas y evitar ser víctima de clonación:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="border rounded-lg p-4 bg-green-50">
                            <h4 className="font-medium mb-2 text-green-800">En cajeros automáticos</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Revisa que no haya dispositivos extraños en la ranura</li>
                              <li>Cubre el teclado al digitar tu clave</li>
                              <li>Prefiere cajeros dentro de sucursales bancarias</li>
                              <li>Configura límites de retiro diario</li>
                              <li>Revisa que nadie te observe o te grabe</li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-4 bg-blue-50">
                            <h4 className="font-medium mb-2 text-blue-800">En compras físicas</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Nunca pierdas de vista tu tarjeta</li>
                              <li>Verifica que el POS no tenga dispositivos adicionales</li>
                              <li>Revisa el monto antes de ingresar tu clave</li>
                              <li>Guarda los comprobantes y compáralos con tu cartola</li>
                              <li>Prefiere pagar con chip o contactless en vez de banda magnética</li>
                            </ul>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="border rounded-lg p-4 bg-purple-50">
                            <h4 className="font-medium mb-2 text-purple-800">En compras online</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Verifica que la página tenga https:// y candado de seguridad</li>
                              <li>No guardes tus datos de tarjeta en sitios poco confiables</li>
                              <li>Usa tarjetas virtuales para compras online</li>
                              <li>Activa las notificaciones de compra</li>
                              <li>No ingreses datos de tarjeta en redes públicas de WiFi</li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-4 bg-orange-50">
                            <h4 className="font-medium mb-2 text-orange-800">Medidas adicionales</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Activa la verificación en dos pasos de tu app bancaria</li>
                              <li>Revisa tus movimientos frecuentemente</li>
                              <li>Nunca respondas correos o SMS que pidan tus datos bancarios</li>
                              <li>Cambia tus claves periódicamente</li>
                              <li>Configura límites de compra por internet</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="prose max-w-none mt-8 mb-8">
                <h2>La Ley 20.009: Tu escudo legal contra el fraude</h2>

                <p>
                  La Ley 20.009 es tu principal protección legal en caso de clonación de tarjetas. Esta ley establece
                  que los bancos y emisores de tarjetas deben devolverte el dinero si cumples con ciertos requisitos:
                </p>

                <ul>
                  <li>
                    <strong>Plazo de denuncia:</strong> Debes denunciar dentro de 7 días hábiles desde que te enteraste
                    del fraude (no desde que ocurrió).
                  </li>
                  <li>
                    <strong>Denuncia formal:</strong> Debes hacer la denuncia en Carabineros, PDI o Fiscalía.
                  </li>
                  <li>
                    <strong>Aviso al emisor:</strong> Debes informar al banco o emisor de la tarjeta y entregarles copia
                    de la denuncia.
                  </li>
                </ul>

                <p>
                  Si cumples con estos requisitos, el banco debe devolverte el dinero en un plazo máximo de 5 días
                  hábiles. No pueden negarse argumentando negligencia de tu parte, a menos que puedan probar que tú
                  facilitaste el fraude intencionalmente.
                </p>

                <h3>¿Qué pasa si el banco se niega a devolver el dinero?</h3>

                <p>
                  Si el banco rechaza tu reclamo a pesar de haber cumplido con todos los requisitos, tienes estas
                  opciones:
                </p>

                <ol>
                  <li>
                    <strong>Reclamo ante la CMF:</strong> La Comisión para el Mercado Financiero puede mediar y
                    sancionar al banco si no cumple con la ley.
                  </li>
                  <li>
                    <strong>Reclamo en SERNAC:</strong> El Servicio Nacional del Consumidor también puede mediar.
                  </li>
                  <li>
                    <strong>Demanda judicial:</strong> Puedes presentar una demanda en el Juzgado de Policía Local por
                    infracción a la Ley del Consumidor.
                  </li>
                </ol>

                <h3>Caso real: Recuperación exitosa</h3>

                <p>
                  Carlos notó cargos por $450.000 en compras que nunca realizó. Bloqueó su tarjeta inmediatamente, hizo
                  la denuncia en Carabineros el mismo día y llevó la copia al banco. Inicialmente el banco se resistió,
                  alegando que pudo haber sido negligencia suya, pero al citar específicamente la Ley 20.009 y amenazar
                  con un reclamo en la CMF, el banco accedió a devolver el dinero en 3 días hábiles.
                </p>

                <div className="bg-gray-100 p-4 rounded-lg my-6">
                  <h3 className="text-lg font-medium mb-2">Preguntas frecuentes</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">¿Qué pasa si me doy cuenta después de los 7 días?</h4>
                      <p className="text-sm">
                        Aún puedes denunciar, pero el banco podría rechazar la devolución amparado en la ley. Sin
                        embargo, muchos bancos evalúan caso a caso, especialmente si puedes demostrar que no tuviste
                        forma de enterarte antes.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">¿Puedo recuperar dinero de compras internacionales?</h4>
                      <p className="text-sm">
                        Sí, la ley aplica independientemente de dónde se realizó el cargo fraudulento. Lo importante es
                        que sea tu tarjeta emitida en Chile.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">¿Qué pasa con mi historial crediticio?</h4>
                      <p className="text-sm">
                        El fraude no debería afectar tu historial crediticio. Si notas que aparece como deuda impaga,
                        debes reclamar al banco para que lo corrija.
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
                        <Link href="/estafas-internet" className="text-blue-600 hover:underline flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Estafas por internet: cómo denunciar
                        </Link>
                      </li>
                      <li>
                        <Link href="/derechos-consumidor" className="text-blue-600 hover:underline flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Derechos del consumidor
                        </Link>
                      </li>
                      <li>
                        <Link href="/phishing-bancario" className="text-blue-600 hover:underline flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Cómo identificar correos bancarios falsos
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
                        <span className="font-medium">PDI Cibercrimen:</span>
                        <span className="ml-2">+56 2 2708 1000</span>
                      </li>
                      <li className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-red-600" />
                        <span className="font-medium">CMF:</span>
                        <span className="ml-2">800 600 0247</span>
                      </li>
                      <li className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-red-600" />
                        <span className="font-medium">SERNAC:</span>
                        <span className="ml-2">800 700 100</span>
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
                      Si tienes dudas específicas sobre tu caso de clonación de tarjeta, nuestros abogados pueden
                      orientarte.
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
