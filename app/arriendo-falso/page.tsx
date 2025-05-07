import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Clock, AlertTriangle, Home, ShieldCheck, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageAds } from "@/components/page-ads"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "¿Cómo denunciar un arriendo falso por redes sociales? | LegalPO",
  description:
    "Guía completa sobre qué hacer si fuiste víctima de una estafa de arriendo falso en redes sociales. Pasos para denunciar y recuperar tu dinero.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/arriendo-falso",
  },
}

export default function ArriendoFalsoPage() {
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
                <li className="font-medium text-foreground">Arriendo falso</li>
              </ol>
            </nav>
          </div>

          <PageAds />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                  ¿Cómo denunciar un arriendo falso por redes sociales?
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
                    Las estafas de arriendos falsos han aumentado un 300% en los últimos años. Si pagaste por un
                    arriendo que resultó ser falso, actúa rápido. Puedes denunciar y, en algunos casos, recuperar tu
                    dinero.
                  </p>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2>¿Qué son las estafas de arriendos falsos?</h2>

                <p>
                  Las estafas de arriendos falsos son un tipo de fraude donde los estafadores publican propiedades
                  inexistentes o que no les pertenecen en redes sociales, Marketplace, grupos de Facebook o sitios como
                  Yapo.cl. Ofrecen precios atractivos (generalmente por debajo del mercado) y piden un adelanto o
                  garantía para "reservar" la propiedad, pero luego desaparecen con el dinero.
                </p>

                <p>Las señales más comunes de un arriendo falso son:</p>

                <ul>
                  <li>Precios muy por debajo del mercado para la zona</li>
                  <li>Fotos profesionales que parecen sacadas de sitios inmobiliarios</li>
                  <li>El "propietario" no puede mostrar la propiedad personalmente</li>
                  <li>Piden depósitos o garantías antes de mostrar el inmueble</li>
                  <li>Presionan para que tomes una decisión rápida</li>
                  <li>Perfiles recién creados o con poca información</li>
                  <li>Errores gramaticales o de ortografía en las comunicaciones</li>
                </ul>

                <h2>¿Cómo operan los estafadores?</h2>

                <p>
                  Los estafadores suelen seguir un patrón similar. Primero, publican fotos de propiedades que no les
                  pertenecen (muchas veces robadas de sitios inmobiliarios legítimos). Luego, cuando alguien muestra
                  interés, inventan una historia para justificar por qué no pueden mostrar la propiedad personalmente:
                  están fuera del país, tienen problemas de salud, etc.
                </p>

                <p>
                  Para generar confianza, pueden enviar copias falsas de documentos de identidad o títulos de propiedad.
                  Finalmente, piden un depósito para "reservar" el inmueble, prometiendo entregar las llaves después.
                  Una vez recibido el dinero, desaparecen o continúan pidiendo más pagos con diferentes excusas.
                </p>
              </div>

              <Tabs defaultValue="denunciar" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="denunciar" className="text-sm">
                    Cómo denunciar
                  </TabsTrigger>
                  <TabsTrigger value="recuperar" className="text-sm">
                    Recuperar el dinero
                  </TabsTrigger>
                  <TabsTrigger value="prevenir" className="text-sm">
                    Cómo prevenirlo
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="denunciar" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                        Pasos para denunciar un arriendo falso
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
                            <h3 className="font-medium">Reúne todas las pruebas</h3>
                            <p className="text-muted-foreground">
                              Guarda capturas de pantalla de la publicación, todas las conversaciones (WhatsApp,
                              Messenger, correos), comprobantes de transferencia, datos del estafador (nombre, RUT,
                              teléfono, cuenta bancaria) y cualquier documento que te hayan enviado.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            2
                          </div>
                          <div>
                            <h3 className="font-medium">Denuncia en la plataforma</h3>
                            <p className="text-muted-foreground">
                              Reporta el perfil y la publicación en la plataforma donde encontraste el arriendo
                              (Facebook, Instagram, Yapo, etc.). Esto puede ayudar a que cierren la cuenta del estafador
                              y evitar más víctimas.
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
                              Acude a Carabineros, PDI o Fiscalía para hacer una denuncia formal por estafa. Puedes
                              hacerlo presencialmente o en línea a través de www.fiscaliadechile.cl. Lleva todas las
                              pruebas que recopilaste.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            4
                          </div>
                          <div>
                            <h3 className="font-medium">Contacta a tu banco</h3>
                            <p className="text-muted-foreground">
                              Si hiciste una transferencia bancaria, contacta inmediatamente a tu banco para reportar el
                              fraude. En algunos casos, si actúas muy rápido, pueden intentar revertir la transferencia.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            5
                          </div>
                          <div>
                            <h3 className="font-medium">Denuncia en el SERNAC</h3>
                            <p className="text-muted-foreground">
                              Aunque el SERNAC no puede recuperar tu dinero en estos casos, es importante que dejes
                              constancia para que tengan registro de este tipo de estafas y puedan alertar a otros
                              consumidores.
                            </p>
                          </div>
                        </li>
                      </ol>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                        <h4 className="font-medium text-yellow-800 mb-1">¡Importante!</h4>
                        <p className="text-sm text-yellow-700">
                          Si conoces la dirección real de la propiedad que usaron para la estafa, considera contactar al
                          verdadero propietario o administrador. Podrían estar usando sus fotos para estafar a más
                          personas y ellos también pueden presentar una denuncia.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="recuperar" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <Home className="h-5 w-5 mr-2 text-green-500" />
                        ¿Puedo recuperar mi dinero?
                      </CardTitle>
                      <CardDescription>Opciones para intentar recuperar lo perdido</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          Recuperar el dinero en estos casos puede ser difícil, pero no imposible. Estas son tus
                          opciones:
                        </p>

                        <h3 className="font-medium text-lg">1. Actuar inmediatamente con el banco</h3>
                        <p>
                          Si acabas de hacer la transferencia (idealmente en las últimas horas), llama a tu banco y
                          solicita un bloqueo o reversión de la transferencia por fraude. Algunos bancos pueden intentar
                          contactar al banco receptor para congelar los fondos si aún no han sido retirados.
                        </p>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">¿Qué decir al banco?</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Explica que fuiste víctima de una estafa de arriendo</li>
                            <li>Proporciona el número y fecha exacta de la transferencia</li>
                            <li>Solicita específicamente que intenten revertir la operación</li>
                            <li>Pregunta si tienen un protocolo para casos de fraude</li>
                          </ul>
                        </div>

                        <h3 className="font-medium text-lg">2. Proceso judicial</h3>
                        <p>
                          Si tienes los datos reales del estafador (nombre completo, RUT), puedes iniciar acciones
                          legales. Esto implica:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Presentar una querella por estafa</li>
                          <li>
                            Solicitar medidas precautorias para congelar cuentas bancarias del estafador si es
                            identificado
                          </li>
                          <li>
                            Demandar civilmente para recuperar el dinero (esto requiere abogado, pero puedes solicitar
                            asistencia gratuita en la Corporación de Asistencia Judicial)
                          </li>
                        </ul>

                        <h3 className="font-medium text-lg">3. Seguimiento de la investigación</h3>
                        <p>
                          La PDI, especialmente la Brigada de Cibercrimen, puede investigar estos casos, sobre todo si
                          hay múltiples víctimas. Mantén contacto regular con la fiscalía para conocer avances en la
                          investigación.
                        </p>

                        <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                          <h4 className="font-medium text-yellow-800 mb-2">Caso real de éxito</h4>
                          <p className="text-sm">
                            En 2023, un grupo de 15 personas estafadas por el mismo individuo que ofrecía arriendos
                            falsos en La Florida se organizaron y presentaron una denuncia colectiva. La PDI logró
                            identificar al estafador, quien operaba con diferentes cuentas bancarias. Se recuperó
                            parcialmente el dinero y el responsable fue procesado por estafa reiterada.
                          </p>
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
                        Cómo prevenir ser víctima de un arriendo falso
                      </CardTitle>
                      <CardDescription>Señales de alerta y consejos de prevención</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          La prevención es la mejor defensa contra las estafas de arriendos. Estos consejos te ayudarán
                          a identificar y evitar arriendos falsos:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="border rounded-lg p-4 bg-red-50">
                            <h4 className="font-medium mb-2 text-red-800">Señales de alerta</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Precios muy por debajo del mercado</li>
                              <li>No quieren mostrar la propiedad en persona</li>
                              <li>Piden dinero antes de firmar contrato o mostrar el inmueble</li>
                              <li>Perfiles de redes sociales recién creados</li>
                              <li>Fotos profesionales que parecen de inmobiliarias</li>
                              <li>Urgencia para cerrar el trato ("hay muchos interesados")</li>
                              <li>Historias elaboradas sobre por qué están en el extranjero</li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-4 bg-green-50">
                            <h4 className="font-medium mb-2 text-green-800">Medidas de seguridad</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Siempre visita la propiedad antes de pagar cualquier monto</li>
                              <li>Verifica la identidad del arrendador (pide carnet)</li>
                              <li>Solicita documentos que acrediten la propiedad</li>
                              <li>Busca la dirección en Google para ver si aparece en otras publicaciones</li>
                              <li>Prefiere inmobiliarias establecidas o portales con verificación</li>
                              <li>Nunca pagues en efectivo; usa transferencias rastreables</li>
                              <li>Firma un contrato formal antes de cualquier pago importante</li>
                            </ul>
                          </div>
                        </div>

                        <h3 className="font-medium text-lg mt-4">Verificación de la propiedad</h3>
                        <p>Antes de pagar, realiza estas verificaciones:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>Búsqueda inversa de imágenes:</strong> Sube las fotos de la propiedad a Google
                            Images para ver si aparecen en otros sitios.
                          </li>
                          <li>
                            <strong>Consulta el Conservador de Bienes Raíces:</strong> Puedes verificar quién es el
                            verdadero propietario del inmueble.
                          </li>
                          <li>
                            <strong>Verifica la dirección:</strong> Visita la propiedad y confirma que existe y está
                            disponible para arriendo.
                          </li>
                          <li>
                            <strong>Consulta con vecinos:</strong> Si es posible, pregunta a vecinos sobre el
                            propietario o si saben que la propiedad está en arriendo.
                          </li>
                        </ul>

                        <div className="bg-blue-50 p-4 rounded-lg mt-4">
                          <h4 className="font-medium text-blue-800 mb-2">Plataformas más seguras</h4>
                          <p className="text-sm mb-2">
                            Algunas plataformas ofrecen mayor seguridad para buscar arriendos:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>
                              <strong>Portal Inmobiliario:</strong> Trabaja principalmente con corredoras verificadas
                            </li>
                            <li>
                              <strong>TocToc:</strong> Cuenta con verificación de propiedades
                            </li>
                            <li>
                              <strong>Airbnb:</strong> Para arriendos temporales, tiene sistema de pagos protegidos
                            </li>
                            <li>
                              <strong>Inmobiliarias establecidas:</strong> Ofrecen mayor seguridad aunque pueden cobrar
                              comisión
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="prose max-w-none mt-8 mb-8">
                <h2>¿Qué dice la ley sobre las estafas de arriendos?</h2>

                <p>
                  En Chile, las estafas de arriendos falsos están tipificadas como delito en el Código Penal,
                  específicamente:
                </p>

                <ul>
                  <li>
                    <strong>Artículo 468:</strong> Establece el delito de estafa, que consiste en engañar a otro
                    causándole perjuicio económico.
                  </li>
                  <li>
                    <strong>Artículo 473:</strong> Se refiere a estafas y otros engaños, aplicable cuando alguien
                    defrauda a otro usando nombre fingido, calidad simulada, falsos pretextos o aparentando bienes,
                    crédito, comisión, empresa o negociación.
                  </li>
                </ul>

                <p>
                  Las penas por estos delitos varían según el monto defraudado, pero pueden incluir presidio menor en
                  sus grados mínimo a medio (61 días a 3 años) y multas.
                </p>

                <h3>¿Qué pasa si el estafador usa una identidad falsa?</h3>

                <p>
                  Muchos estafadores usan identidades falsas o usurpadas, lo que complica la investigación. Sin embargo,
                  la PDI tiene herramientas para rastrear transferencias bancarias y actividad en redes sociales. Si el
                  estafador usa la identidad de otra persona real, también comete el delito de suplantación de
                  identidad.
                </p>

                <h3>Caso real: Estafa masiva de arriendos en Santiago</h3>

                <p>
                  En 2024, la PDI desarticuló una red que ofrecía arriendos falsos en Santiago Centro y Providencia. Los
                  estafadores publicaban propiedades inexistentes o ya arrendadas, cobraban garantías de entre $150.000
                  y $300.000, y luego desaparecían. Operaban con múltiples cuentas bancarias a nombre de terceros.
                  Gracias a la denuncia coordinada de más de 30 víctimas, se logró identificar a los responsables y
                  recuperar parte del dinero.
                </p>

                <div className="bg-gray-100 p-4 rounded-lg my-6">
                  <h3 className="text-lg font-medium mb-2">Preguntas frecuentes</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">¿Qué pasa si pagué con efectivo?</h4>
                      <p className="text-sm">
                        Lamentablemente, es mucho más difícil rastrear y recuperar pagos en efectivo. Aun así, debes
                        denunciar el hecho a la policía, especialmente si tienes alguna prueba del pago o datos del
                        estafador.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">¿Puedo denunciar si el arriendo era informal (sin contrato)?</h4>
                      <p className="text-sm">
                        Sí, la estafa existe independientemente de si había un contrato formal. Lo importante es que
                        hubo un engaño que te causó perjuicio económico.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">¿Qué pasa si el estafador está en otro país?</h4>
                      <p className="text-sm">
                        Esto complica la investigación, pero no la imposibilita. Las autoridades pueden cooperar
                        internacionalmente, especialmente si hay múltiples víctimas o montos significativos.
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
                        <Link href="/clonacion-tarjeta" className="text-blue-600 hover:underline flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Me clonaron la tarjeta: ¿puedo recuperar mi dinero?
                        </Link>
                      </li>
                      <li>
                        <Link href="/derechos-arrendatario" className="text-blue-600 hover:underline flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Derechos del arrendatario en Chile
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
                        <span className="font-medium">Carabineros:</span>
                        <span className="ml-2">133</span>
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
                      Si fuiste víctima de una estafa de arriendo, nuestros abogados pueden orientarte sobre los pasos a
                      seguir.
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
