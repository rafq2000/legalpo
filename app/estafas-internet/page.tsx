import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Clock, AlertTriangle, ShieldCheck, Phone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageAds } from "@/components/page-ads"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Estafas por internet: Cómo denunciar en Chile | LegalPO",
  description:
    "Guía completa sobre cómo identificar, prevenir y denunciar estafas por internet en Chile. Conoce tus derechos y los pasos legales para protegerte.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/estafas-internet",
  },
}

export default function EstafasInternetPage() {
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
                <li className="font-medium text-foreground">Estafas por internet</li>
              </ol>
            </nav>
          </div>

          <PageAds />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                  Estafas por internet: Cómo denunciar en Chile
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
                    Las estafas por internet han aumentado un 320% en Chile durante los últimos años. Conoce cómo
                    identificarlas, prevenirlas y denunciarlas correctamente para protegerte y recuperar tu dinero.
                  </p>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2>¿Qué son las estafas por internet?</h2>

                <p>
                  Las estafas por internet son delitos informáticos donde los estafadores utilizan medios digitales para
                  engañar a las personas y obtener beneficios económicos o información personal. En Chile, estos delitos
                  están tipificados en la Ley 21.459 de Delitos Informáticos, promulgada en 2022, que actualizó la
                  legislación anterior para adaptarla a las nuevas tecnologías.
                </p>

                <h3>Tipos de estafas más comunes en Chile</h3>

                <p>
                  Según datos de la PDI y el Ministerio Público, estas son las estafas por internet más frecuentes en
                  Chile:
                </p>

                <ol>
                  <li>
                    <strong>Phishing bancario:</strong> Correos o mensajes falsos que suplantan a bancos para robar
                    credenciales.
                  </li>
                  <li>
                    <strong>Estafas de compraventa:</strong> Ventas falsas en Marketplace, Yapo o MercadoLibre.
                  </li>
                  <li>
                    <strong>Suplantación de identidad:</strong> Perfiles falsos que se hacen pasar por familiares,
                    amigos o empresas.
                  </li>
                  <li>
                    <strong>Ofertas laborales fraudulentas:</strong> Trabajos con pagos adelantados o solicitud de datos
                    bancarios.
                  </li>
                  <li>
                    <strong>Estafas románticas:</strong> Relaciones falsas para solicitar dinero por emergencias
                    inventadas.
                  </li>
                  <li>
                    <strong>Falsos arriendos:</strong> Propiedades inexistentes o que no pertenecen al estafador.
                  </li>
                  <li>
                    <strong>Inversiones fraudulentas:</strong> Esquemas piramidales o inversiones con retornos irreales.
                  </li>
                  <li>
                    <strong>Premios o herencias inesperadas:</strong> Notificaciones de premios que requieren un pago
                    previo.
                  </li>
                </ol>
              </div>

              <Tabs defaultValue="identificar" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="identificar" className="text-sm">
                    Cómo identificarlas
                  </TabsTrigger>
                  <TabsTrigger value="denunciar" className="text-sm">
                    Cómo denunciar
                  </TabsTrigger>
                  <TabsTrigger value="prevenir" className="text-sm">
                    Cómo prevenirlas
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="identificar" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
                        Señales de alerta: Cómo identificar una estafa
                      </CardTitle>
                      <CardDescription>Aprende a reconocer los indicadores de fraude</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          Identificar una estafa a tiempo puede ahorrarte muchos problemas. Estas son las señales de
                          alerta más comunes:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="border rounded-lg p-4 bg-red-50">
                            <h4 className="font-medium mb-2 text-red-800">Señales en comunicaciones</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Errores ortográficos o gramaticales en comunicaciones "oficiales"</li>
                              <li>Dominios de correo o URLs ligeramente modificados (bancochlle.cl)</li>
                              <li>Comunicaciones no solicitadas que piden acción urgente</li>
                              <li>Saludos genéricos ("Estimado cliente") en vez de tu nombre</li>
                              <li>Enlaces sospechosos o acortados</li>
                              <li>Archivos adjuntos inesperados</li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-4 bg-yellow-50">
                            <h4 className="font-medium mb-2 text-yellow-800">Señales en transacciones</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Precios demasiado bajos para ser reales</li>
                              <li>
                                Solicitud de pago por métodos no rastreables (transferencias a cuentas personales)
                              </li>
                              <li>Negativa a usar plataformas seguras de pago</li>
                              <li>Presión para decidir rápidamente ("oferta por tiempo limitado")</li>
                              <li>Solicitud de pagos adelantados por servicios no recibidos</li>
                              <li>Vendedores que no permiten ver el producto antes de pagar</li>
                            </ul>
                          </div>
                        </div>

                        <h3 className="font-medium text-lg mt-4">Estafas específicas y cómo reconocerlas</h3>

                        <div className="space-y-4">
                          <div className="border-l-4 border-red-400 pl-4 py-2">
                            <h4 className="font-medium">Phishing bancario</h4>
                            <p className="text-sm">
                              <strong>Cómo identificarlo:</strong> Correos que alertan sobre problemas con tu cuenta,
                              enlaces a sitios que imitan al banco pero con URLs diferentes, solicitud de credenciales
                              completas. Recuerda que los bancos nunca piden tus claves por correo o SMS.
                            </p>
                          </div>

                          <div className="border-l-4 border-red-400 pl-4 py-2">
                            <h4 className="font-medium">Estafas de compraventa</h4>
                            <p className="text-sm">
                              <strong>Cómo identificarlas:</strong> Perfiles recién creados, fotos genéricas o copiadas
                              de internet, vendedores que no quieren mostrar el producto en persona, solicitud de
                              depósitos para "reservar" el producto.
                            </p>
                          </div>

                          <div className="border-l-4 border-red-400 pl-4 py-2">
                            <h4 className="font-medium">Ofertas laborales fraudulentas</h4>
                            <p className="text-sm">
                              <strong>Cómo identificarlas:</strong> Ofertas con sueldos desproporcionados, empresas que
                              no tienen presencia verificable, solicitud de pago por "materiales" o "capacitación",
                              entrevistas solo por chat.
                            </p>
                          </div>

                          <div className="border-l-4 border-red-400 pl-4 py-2">
                            <h4 className="font-medium">Inversiones fraudulentas</h4>
                            <p className="text-sm">
                              <strong>Cómo identificarlas:</strong> Promesas de retornos irreales (30% mensual), presión
                              para invitar a amigos y familiares, empresas no registradas en la CMF, dificultad para
                              retirar ganancias.
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg mt-4">
                          <h4 className="font-medium text-blue-800 mb-2">Caso real</h4>
                          <p className="text-sm">
                            Juan recibió un correo aparentemente del Banco Estado alertando sobre una "actividad
                            sospechosa" en su cuenta. El correo tenía el logo del banco pero venía de
                            "soporte@bancoestado-seguridad.com" (dominio falso). Al hacer clic en el enlace, lo llevaba
                            a una página idéntica al sitio del banco pero con URL diferente. Afortunadamente, Juan notó
                            estas señales y reportó el intento de phishing.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="denunciar" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <Globe className="h-5 w-5 mr-2 text-blue-500" />
                        Cómo denunciar una estafa por internet
                      </CardTitle>
                      <CardDescription>Pasos para hacer una denuncia efectiva</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-4 mt-2">
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            1
                          </div>
                          <div>
                            <h3 className="font-medium">Reúne toda la evidencia</h3>
                            <p className="text-muted-foreground">
                              Antes de denunciar, recopila toda la información posible:
                            </p>
                            <ul className="list-disc pl-5 mt-2 text-sm">
                              <li>Capturas de pantalla de conversaciones, publicaciones o correos</li>
                              <li>Comprobantes de transferencias o pagos</li>
                              <li>Datos del estafador (nombre, RUT, teléfono, cuenta bancaria, perfiles)</li>
                              <li>URLs de sitios fraudulentos</li>
                              <li>Fechas y horas de las comunicaciones</li>
                            </ul>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            2
                          </div>
                          <div>
                            <h3 className="font-medium">Denuncia en la PDI o Carabineros</h3>
                            <p className="text-muted-foreground">
                              Puedes denunciar en la Brigada Investigadora de Cibercrimen de la PDI o en cualquier
                              comisaría. También puedes hacer la denuncia online:
                            </p>
                            <ul className="list-disc pl-5 mt-2 text-sm">
                              <li>
                                <a
                                  href="https://www.pdichile.cl/denuncia-online"
                                  className="text-blue-600 hover:underline"
                                >
                                  PDI Denuncia Online
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.fiscaliadechile.cl/Fiscalia/quienes/formularios.jsp"
                                  className="text-blue-600 hover:underline"
                                >
                                  Fiscalía de Chile
                                </a>
                              </li>
                              <li>
                                <a href="https://comisariavirtual.cl" className="text-blue-600 hover:underline">
                                  Comisaría Virtual
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            3
                          </div>
                          <div>
                            <h3 className="font-medium">Contacta a tu banco</h3>
                            <p className="text-muted-foreground">
                              Si realizaste transferencias o pagos con tarjeta, contacta inmediatamente a tu banco:
                            </p>
                            <ul className="list-disc pl-5 mt-2 text-sm">
                              <li>Reporta la operación como fraudulenta</li>
                              <li>Solicita el bloqueo de tu tarjeta si fue comprometida</li>
                              <li>
                                Pide información sobre el proceso de reclamo (algunos bancos tienen plazos muy cortos)
                              </li>
                              <li>
                                Si fue una transferencia reciente (menos de 24 horas), solicita intentar revertirla
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            4
                          </div>
                          <div>
                            <h3 className="font-medium">Denuncia en la plataforma</h3>
                            <p className="text-muted-foreground">
                              Reporta el fraude en la plataforma donde ocurrió (Facebook, Instagram, MercadoLibre,
                              etc.):
                            </p>
                            <ul className="list-disc pl-5 mt-2 text-sm">
                              <li>Reporta perfiles, publicaciones o mensajes fraudulentos</li>
                              <li>
                                Contacta al servicio de atención al cliente de la plataforma (especialmente en sitios de
                                compraventa)
                              </li>
                              <li>
                                Si usaste sistemas de pago como MercadoPago o PayPal, inicia una disputa inmediatamente
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            5
                          </div>
                          <div>
                            <h3 className="font-medium">Denuncia en el SERNAC</h3>
                            <p className="text-muted-foreground">
                              Si la estafa involucra a una empresa o servicio, presenta un reclamo en el Servicio
                              Nacional del Consumidor:
                            </p>
                            <ul className="list-disc pl-5 mt-2 text-sm">
                              <li>
                                <a
                                  href="https://www.sernac.cl/portal/618/w3-propertyvalue-62972.html"
                                  className="text-blue-600 hover:underline"
                                >
                                  Formulario de reclamo SERNAC
                                </a>
                              </li>
                              <li>Llama al 800 700 100</li>
                            </ul>
                          </div>
                        </li>
                      </ol>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                        <h4 className="font-medium text-yellow-800 mb-1">¿Puedo recuperar mi dinero?</h4>
                        <p className="text-sm text-yellow-700">
                          La posibilidad de recuperar el dinero depende de varios factores: el tiempo transcurrido, el
                          método de pago utilizado y la información disponible del estafador. Si denuncias
                          inmediatamente (dentro de las primeras 24 horas), las posibilidades son mayores. Los bancos
                          pueden intentar revertir transferencias recientes, y plataformas como MercadoLibre o PayPal
                          ofrecen protección al comprador si sigues sus procesos.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="prevenir" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <ShieldCheck className="h-5 w-5 mr-2 text-green-500" />
                        Cómo prevenir estafas por internet
                      </CardTitle>
                      <CardDescription>Medidas de seguridad para protegerte</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          La prevención es la mejor defensa contra las estafas por internet. Estas medidas te ayudarán a
                          protegerte:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="border rounded-lg p-4 bg-green-50">
                            <h4 className="font-medium mb-2 text-green-800">Seguridad general</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>
                                <strong>Usa contraseñas robustas y diferentes</strong> para cada servicio
                              </li>
                              <li>
                                <strong>Activa la verificación en dos pasos</strong> en todas tus cuentas importantes
                              </li>
                              <li>
                                <strong>Mantén actualizados</strong> tu sistema operativo y aplicaciones
                              </li>
                              <li>
                                <strong>Usa un antivirus confiable</strong> y mantenlo actualizado
                              </li>
                              <li>
                                <strong>No compartas información personal</strong> en redes sociales públicas
                              </li>
                              <li>
                                <strong>Revisa regularmente</strong> tus estados de cuenta bancarios
                              </li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-4 bg-blue-50">
                            <h4 className="font-medium mb-2 text-blue-800">En compras online</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>
                                <strong>Verifica la reputación</strong> del vendedor o sitio web
                              </li>
                              <li>
                                <strong>Usa plataformas seguras</strong> con protección al comprador
                              </li>
                              <li>
                                <strong>Desconfía de precios</strong> demasiado bajos para ser reales
                              </li>
                              <li>
                                <strong>Prefiere pagar con tarjetas</strong> que ofrecen protección contra fraudes
                              </li>
                              <li>
                                <strong>Verifica que la URL</strong> comience con "https://" y tenga un candado
                              </li>
                              <li>
                                <strong>Nunca compres presionado</strong> por ofertas "por tiempo limitado"
                              </li>
                            </ul>
                          </div>
                        </div>

                        <h3 className="font-medium text-lg mt-4">Consejos específicos por tipo de estafa</h3>

                        <div className="space-y-4">
                          <div className="border-l-4 border-green-400 pl-4 py-2">
                            <h4 className="font-medium">Contra el phishing</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>
                                Nunca hagas clic en enlaces de correos o SMS que soliciten datos bancarios, aunque
                                parezcan legítimos
                              </li>
                              <li>
                                Accede a tu banco escribiendo la dirección directamente en el navegador, no a través de
                                enlaces
                              </li>
                              <li>
                                Verifica siempre la URL completa antes de ingresar credenciales (fíjate en errores
                                sutiles como "bancochíle.cl")
                              </li>
                              <li>
                                Recuerda que los bancos nunca piden tus claves completas, coordenadas de tarjeta o
                                códigos de seguridad por correo o teléfono
                              </li>
                            </ul>
                          </div>

                          <div className="border-l-4 border-green-400 pl-4 py-2">
                            <h4 className="font-medium">En compraventa entre particulares</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Siempre verifica el producto en persona antes de pagar, si es posible</li>
                              <li>
                                Prefiere hacer transacciones en lugares públicos y seguros (muchas comisarías ofrecen
                                sus dependencias para esto)
                              </li>
                              <li>
                                Investiga al vendedor: revisa su historial de ventas, antigüedad del perfil y
                                valoraciones
                              </li>
                              <li>
                                Desconfía de vendedores que solo aceptan transferencias a cuentas personales y rechazan
                                otros métodos de pago
                              </li>
                            </ul>
                          </div>

                          <div className="border-l-4 border-green-400 pl-4 py-2">
                            <h4 className="font-medium">En inversiones</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>
                                Verifica que la empresa esté registrada en la Comisión para el Mercado Financiero (CMF)
                              </li>
                              <li>
                                Desconfía de retornos anormalmente altos (si parece demasiado bueno para ser verdad,
                                probablemente lo es)
                              </li>
                              <li>
                                Investiga a fondo antes de invertir: busca noticias, opiniones y alertas sobre la
                                empresa
                              </li>
                              <li>
                                Nunca inviertas dinero que no puedas permitirte perder, especialmente en esquemas poco
                                conocidos
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg mt-4">
                          <h4 className="font-medium text-red-800 mb-2">Recuerda siempre</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>
                              <strong>Si parece demasiado bueno para ser verdad, probablemente lo es.</strong> Nadie
                              regala dinero ni vende productos de alta gama a precios irrisorios.
                            </li>
                            <li>
                              <strong>La urgencia es una táctica de presión.</strong> Los estafadores quieren que actúes
                              rápido, sin tiempo para pensar o verificar.
                            </li>
                            <li>
                              <strong>Nunca compartas códigos de verificación</strong> que recibas por SMS o correo, ni
                              siquiera si quien los pide parece ser un familiar o amigo.
                            </li>
                            <li>
                              <strong>Desconfía de contactos inesperados</strong> que te ofrecen oportunidades,
                              inversiones o premios.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="prose max-w-none mt-8 mb-8">
                <h2>¿Qué dice la ley sobre las estafas por internet en Chile?</h2>

                <p>
                  En Chile, las estafas por internet están tipificadas principalmente en la Ley 21.459 de Delitos
                  Informáticos, promulgada en junio de 2022, que actualizó la legislación anterior para adaptarla a las
                  nuevas tecnologías y al Convenio de Budapest sobre Ciberdelincuencia.
                </p>

                <p>Los delitos relacionados con estafas por internet incluyen:</p>

                <ul>
                  <li>
                    <strong>Estafa informática (Art. 7):</strong> Causar perjuicio patrimonial a otro mediante la
                    manipulación de datos informáticos o sistemas informáticos. Las penas van desde 541 días hasta 5
                    años de presidio, dependiendo del monto defraudado.
                  </li>
                  <li>
                    <strong>Suplantación de identidad (Art. 6):</strong> Suplantar la identidad de una persona natural o
                    jurídica en sistemas informáticos. La pena es de 61 días a 3 años de presidio.
                  </li>
                  <li>
                    <strong>Acceso ilícito (Art. 2):</strong> Acceder indebidamente a un sistema informático. La pena es
                    de 61 días a 3 años de presidio.
                  </li>
                  <li>
                    <strong>Interceptación ilícita (Art. 3):</strong> Interceptar, interrumpir o interferir
                    indebidamente comunicaciones entre sistemas informáticos.
                  </li>
                </ul>

                <p>
                  Además, el Código Penal chileno contiene disposiciones que se aplican a las estafas tradicionales y
                  que también pueden aplicarse a estafas por internet:
                </p>

                <ul>
                  <li>
                    <strong>Estafa (Art. 468):</strong> Defraudar a otro usando nombre fingido, atribuyéndose poder,
                    influencia o cualidades supuestas, aparentando bienes, crédito, comisión, empresa o negociación
                    imaginarios.
                  </li>
                  <li>
                    <strong>Apropiación indebida (Art. 470 N°1):</strong> Apropiarse o distraer dinero, efectos o
                    cualquier cosa mueble recibida en depósito, comisión o administración.
                  </li>
                </ul>

                <h3>¿Qué pasa si el estafador está en otro país?</h3>

                <p>
                  Muchas estafas por internet se realizan desde el extranjero, lo que complica la investigación y
                  persecución. Sin embargo, Chile ha firmado acuerdos internacionales de cooperación en materia de
                  ciberdelincuencia, como el Convenio de Budapest, que facilitan la colaboración entre países para
                  investigar estos delitos.
                </p>

                <p>
                  La PDI, a través de su Brigada Investigadora del Cibercrimen (BRICIB), trabaja con agencias
                  internacionales como Interpol y Europol para perseguir a estafadores que operan desde otros países.
                  Aunque el proceso puede ser más largo y complejo, no es imposible.
                </p>

                <h3>Caso real: Operación "Phishing Masivo"</h3>

                <p>
                  En 2023, la PDI desarticuló una red internacional que operaba desde Chile y Colombia, dedicada al
                  phishing bancario. Los estafadores enviaban correos masivos suplantando a bancos chilenos y robaban
                  credenciales para realizar transferencias fraudulentas. Gracias a la denuncia coordinada de más de 100
                  víctimas y la colaboración internacional, se logró identificar a los responsables y recuperar parte
                  del dinero estafado.
                </p>

                <div className="bg-gray-100 p-4 rounded-lg my-6">
                  <h3 className="text-lg font-medium mb-2">Preguntas frecuentes</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">¿Qué pasa si la estafa involucra montos pequeños?</h4>
                      <p className="text-sm">
                        Aunque el monto sea pequeño, sigue siendo un delito y puedes denunciarlo. Sin embargo, en la
                        práctica, las autoridades suelen priorizar casos que involucran montos mayores o múltiples
                        víctimas. Aun así, tu denuncia puede ayudar a identificar patrones y prevenir futuros fraudes.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">¿Cuánto tiempo tengo para denunciar una estafa por internet?</h4>
                      <p className="text-sm">
                        Legalmente, los delitos informáticos prescriben en 5 años. Sin embargo, para maximizar las
                        posibilidades de recuperar tu dinero o identificar al estafador, es crucial denunciar lo antes
                        posible, idealmente dentro de las primeras 24-48 horas.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">¿El banco me devolverá el dinero si fui víctima de phishing?</h4>
                      <p className="text-sm">
                        Depende de las circunstancias. Si demostraste diligencia razonable y fuiste víctima de una
                        suplantación sofisticada, algunos bancos pueden reembolsar el dinero. Sin embargo, si
                        compartiste voluntariamente tus claves o ignoraste advertencias de seguridad, puede ser más
                        difícil obtener un reembolso. Cada banco tiene sus propias políticas al respecto.
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
                        <Link href="/clonacion-tarjeta" className="text-blue-600 hover:underline flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Me clonaron la tarjeta: ¿puedo recuperar mi dinero?
                        </Link>
                      </li>
                      <li>
                        <Link href="/hackeo-whatsapp" className="text-blue-600 hover:underline flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Me hackearon WhatsApp: ¿Puedo denunciar?
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/suplantacion-identidad"
                          className="text-blue-600 hover:underline flex items-center"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Suplantación de identidad: qué hacer
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
                      Si fuiste víctima de una estafa por internet, nuestros abogados pueden orientarte sobre los pasos
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
