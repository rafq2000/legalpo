import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Clock, AlertTriangle, ShieldCheck, Phone, UserX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageAds } from "@/components/page-ads"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Suplantación de identidad: Qué hacer y cómo denunciar en Chile | LegalPO",
  description:
    "Guía completa sobre qué hacer si suplantan tu identidad en Chile. Aprende a identificar, denunciar y protegerte legalmente contra el robo de identidad.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/suplantacion-identidad",
  },
}

export default function SuplantacionIdentidadPage() {
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
                <li className="font-medium text-foreground">Suplantación de identidad</li>
              </ol>
            </nav>
          </div>

          <PageAds />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                  Suplantación de identidad: Qué hacer y cómo denunciar
                </h1>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>Actualizado: Mayo 2025</span>
                  <span className="mx-2">•</span>
                  <FileText className="mr-1 h-4 w-4" />
                  <span>Tiempo de lectura: 9 min</span>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                  <p className="text-lg font-medium text-red-900">
                    La suplantación de identidad ha aumentado un 280% en Chile. Si alguien está usando tu nombre, fotos
                    o datos personales sin tu consentimiento, tienes derecho a denunciar y tomar acciones legales para
                    protegerte.
                  </p>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2>¿Qué es la suplantación de identidad?</h2>

                <p>
                  La suplantación de identidad (también conocida como robo de identidad o identity theft) ocurre cuando
                  alguien utiliza tus datos personales, nombre, fotos u otra información identificable sin tu
                  consentimiento, generalmente con fines fraudulentos o para causarte daño.
                </p>

                <p>
                  En Chile, este delito está tipificado en la Ley 21.459 de Delitos Informáticos, promulgada en 2022.
                </p>

                <h3>Tipos de suplantación de identidad más comunes</h3>

                <p>
                  Según datos de la PDI y el Ministerio Público, estas son las formas más frecuentes de suplantación de
                  identidad en Chile:
                </p>

                <ol>
                  <li>
                    <strong>Suplantación en redes sociales:</strong> Creación de perfiles falsos usando tu nombre y
                    fotos.
                  </li>
                  <li>
                    <strong>Suplantación financiera:</strong> Uso de tus datos para solicitar créditos, abrir cuentas
                    bancarias o realizar compras.
                  </li>
                  <li>
                    <strong>Suplantación telefónica:</strong> Alguien se hace pasar por ti en llamadas o mensajes para
                    estafar a tus contactos.
                  </li>
                  <li>
                    <strong>Suplantación documental:</strong> Falsificación de tu carnet de identidad, pasaporte u otros
                    documentos oficiales.
                  </li>
                  <li>
                    <strong>Suplantación laboral:</strong> Uso de tu currículum o credenciales profesionales para
                    obtener empleo.
                  </li>
                  <li>
                    <strong>Suplantación en servicios públicos:</strong> Uso de tu identidad para acceder a beneficios
                    estatales o realizar trámites.
                  </li>
                </ol>

                <h3>¿Cómo ocurre la suplantación de identidad?</h3>

                <p>Los delincuentes pueden obtener tus datos personales de diversas formas:</p>

                <ul>
                  <li>Robo de documentos físicos (carnet, tarjetas, etc.)</li>
                  <li>Phishing (correos o mensajes fraudulentos que solicitan tus datos)</li>
                  <li>Filtración de datos en brechas de seguridad de empresas</li>
                  <li>Malware o virus que roban información de tu dispositivo</li>
                  <li>Recolección de información pública en redes sociales</li>
                  <li>Compra de datos en el mercado negro</li>
                </ul>
              </div>

              <Tabs defaultValue="identificar" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="identificar" className="text-sm">
                    Cómo identificarlo
                  </TabsTrigger>
                  <TabsTrigger value="denunciar" className="text-sm">
                    Cómo denunciar
                  </TabsTrigger>
                  <TabsTrigger value="prevenir" className="text-sm">
                    Cómo prevenirlo
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="identificar" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
                        Señales de que han suplantado tu identidad
                      </CardTitle>
                      <CardDescription>Aprende a reconocer los indicadores de suplantación</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          Identificar una suplantación de identidad a tiempo puede evitar daños mayores. Estas son las
                          señales de alerta más comunes:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="border rounded-lg p-4 bg-red-50">
                            <h4 className="font-medium mb-2 text-red-800">Señales financieras</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Cargos desconocidos en tus tarjetas o cuentas bancarias</li>
                              <li>Rechazo inesperado de créditos por deudas que no reconoces</li>
                              <li>Aparición en DICOM por deudas que no contrajiste</li>
                              <li>Recepción de estados de cuenta de tarjetas que no solicitaste</li>
                              <li>Notificaciones de intentos de acceso a tus cuentas bancarias</li>
                              <li>Llamadas de cobranza por préstamos que no solicitaste</li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-4 bg-yellow-50">
                            <h4 className="font-medium mb-2 text-yellow-800">Señales digitales</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Contactos que te mencionan conversaciones que no tuviste</li>
                              <li>Perfiles en redes sociales con tu nombre y fotos</li>
                              <li>Correos sobre cambios de contraseña que no solicitaste</li>
                              <li>Notificaciones de inicio de sesión desde dispositivos desconocidos</li>
                              <li>Publicaciones o mensajes en tu nombre que no escribiste</li>
                              <li>Recepción de respuestas a correos que no enviaste</li>
                            </ul>
                          </div>
                        </div>

                        <h3 className="font-medium text-lg mt-4">Señales específicas por tipo de suplantación</h3>

                        <div className="space-y-4">
                          <div className="border-l-4 border-red-400 pl-4 py-2">
                            <h4 className="font-medium">Suplantación en redes sociales</h4>
                            <p className="text-sm">
                              <strong>Cómo identificarla:</strong> Amigos o familiares te comentan sobre un perfil con
                              tu nombre y fotos. Recibes solicitudes de amistad de personas que ya son tus contactos.
                              Encuentras publicaciones o comentarios con tu nombre que no escribiste.
                            </p>
                          </div>

                          <div className="border-l-4 border-red-400 pl-4 py-2">
                            <h4 className="font-medium">Suplantación financiera</h4>
                            <p className="text-sm">
                              <strong>Cómo identificarla:</strong> Recibes llamadas de cobranza por deudas que no
                              reconoces. Te rechazan solicitudes de crédito por estar en DICOM sin saberlo. Encuentras
                              movimientos bancarios que no realizaste. Recibes tarjetas de crédito o estados de cuenta
                              que no solicitaste.
                            </p>
                          </div>

                          <div className="border-l-4 border-red-400 pl-4 py-2">
                            <h4 className="font-medium">Suplantación telefónica</h4>
                            <p className="text-sm">
                              <strong>Cómo identificarla:</strong> Contactos te mencionan llamadas o mensajes tuyos que
                              nunca realizaste, generalmente pidiendo dinero o datos personales. Recibes respuestas a
                              mensajes que no enviaste.
                            </p>
                          </div>

                          <div className="border-l-4 border-red-400 pl-4 py-2">
                            <h4 className="font-medium">Suplantación documental</h4>
                            <p className="text-sm">
                              <strong>Cómo identificarla:</strong> Te informan sobre infracciones de tránsito que no
                              cometiste. Descubres contratos a tu nombre que no firmaste. Te notifican sobre trámites o
                              gestiones que no realizaste.
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg mt-4">
                          <h4 className="font-medium text-blue-800 mb-2">Caso real</h4>
                          <p className="text-sm">
                            Carolina descubrió que habían suplantado su identidad cuando varios amigos le preguntaron
                            por qué estaba pidiendo dinero por Facebook. Al investigar, encontró un perfil falso con sus
                            fotos y datos personales que estaba contactando a sus amigos solicitando transferencias
                            urgentes por una supuesta emergencia médica. Además de denunciar el perfil en Facebook,
                            presentó una denuncia en la PDI, que logró rastrear al responsable.
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
                        <UserX className="h-5 w-5 mr-2 text-red-500" />
                        Cómo denunciar una suplantación de identidad
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
                              <li>Capturas de pantalla de perfiles falsos o mensajes fraudulentos</li>
                              <li>URLs de los perfiles o sitios donde ocurre la suplantación</li>
                              <li>Testimonios de personas que han recibido comunicaciones falsas en tu nombre</li>
                              <li>Documentos relacionados con deudas o contratos fraudulentos</li>
                              <li>Fechas y horas de los incidentes</li>
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
                              Presenta una denuncia formal en la Brigada Investigadora de Cibercrimen de la PDI o en
                              cualquier comisaría. También puedes hacer la denuncia online:
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
                            <h3 className="font-medium">Reporta en las plataformas correspondientes</h3>
                            <p className="text-muted-foreground">
                              Dependiendo del tipo de suplantación, debes reportar en diferentes lugares:
                            </p>
                            <ul className="list-disc pl-5 mt-2 text-sm">
                              <li>
                                <strong>Redes sociales:</strong> Reporta los perfiles falsos directamente en la
                                plataforma (Facebook, Instagram, etc.)
                              </li>
                              <li>
                                <strong>Suplantación financiera:</strong> Contacta a tu banco, la CMF y solicita un
                                bloqueo de Dicom
                              </li>
                              <li>
                                <strong>Suplantación telefónica:</strong> Reporta a tu compañía de telefonía
                              </li>
                              <li>
                                <strong>Suplantación documental:</strong> Denuncia en el Registro Civil y solicita
                                bloqueo de documento
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            4
                          </div>
                          <div>
                            <h3 className="font-medium">Alerta a tus contactos</h3>
                            <p className="text-muted-foreground">
                              Informa a tus amigos, familiares y contactos sobre la suplantación para evitar que caigan
                              en engaños. Publica un aviso en tus redes sociales auténticas advirtiendo sobre el perfil
                              falso.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            5
                          </div>
                          <div>
                            <h3 className="font-medium">Toma medidas de protección adicionales</h3>
                            <p className="text-muted-foreground">
                              Dependiendo del tipo de suplantación, considera estas acciones:
                            </p>
                            <ul className="list-disc pl-5 mt-2 text-sm">
                              <li>Cambia todas tus contraseñas</li>
                              <li>Activa la verificación en dos pasos en todas tus cuentas</li>
                              <li>Solicita un informe de DICOM para verificar si hay deudas fraudulentas</li>
                              <li>Bloquea tu documento de identidad en el Registro Civil si fue robado</li>
                              <li>Solicita a tu banco el bloqueo preventivo de tus productos financieros</li>
                            </ul>
                          </div>
                        </li>
                      </ol>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                        <h4 className="font-medium text-yellow-800 mb-1">
                          ¿Qué hacer en caso de suplantación financiera?
                        </h4>
                        <p className="text-sm text-yellow-700">
                          Si la suplantación involucra créditos, tarjetas o productos financieros fraudulentos, es
                          crucial actuar rápidamente. Además de la denuncia policial, presenta un reclamo formal en la
                          Comisión para el Mercado Financiero (CMF) y en el SERNAC. Solicita un certificado de bloqueo
                          de DICOM y contacta a todas las instituciones financieras involucradas para iniciar procesos
                          de desconocimiento de deuda.
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
                        Cómo prevenir la suplantación de identidad
                      </CardTitle>
                      <CardDescription>Medidas de seguridad para proteger tu identidad</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          La prevención es la mejor defensa contra la suplantación de identidad. Estas medidas te
                          ayudarán a protegerte:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="border rounded-lg p-4 bg-green-50">
                            <h4 className="font-medium mb-2 text-green-800">Protección de datos personales</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>
                                <strong>Limita la información personal</strong> que compartes en redes sociales
                              </li>
                              <li>
                                <strong>Configura la privacidad</strong> de tus perfiles para limitar quién puede ver tu
                                contenido
                              </li>
                              <li>
                                <strong>No publiques fotos de documentos</strong> oficiales (carnet, pasaporte,
                                licencia)
                              </li>
                              <li>
                                <strong>Evita compartir tu RUT</strong> a menos que sea absolutamente necesario
                              </li>
                              <li>
                                <strong>Destruye documentos</strong> con información personal antes de desecharlos
                              </li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-4 bg-blue-50">
                            <h4 className="font-medium mb-2 text-blue-800">Seguridad digital</h4>
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
                                <strong>No hagas clic en enlaces sospechosos</strong> ni descargues archivos de fuentes
                                desconocidas
                              </li>
                              <li>
                                <strong>Revisa regularmente</strong> tus estados de cuenta bancarios
                              </li>
                            </ul>
                          </div>
                        </div>

                        <h3 className="font-medium text-lg mt-4">Consejos específicos por tipo de suplantación</h3>

                        <div className="space-y-4">
                          <div className="border-l-4 border-green-400 pl-4 py-2">
                            <h4 className="font-medium">Contra la suplantación en redes sociales</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Configura alertas de Google con tu nombre para detectar perfiles falsos</li>
                              <li>Usa fotos de perfil que no aparezcan en búsquedas públicas</li>
                              <li>Verifica periódicamente si existen perfiles con tu nombre o fotos</li>
                              <li>Considera usar marcas de agua en fotos profesionales o importantes</li>
                            </ul>
                          </div>

                          <div className="border-l-4 border-green-400 pl-4 py-2">
                            <h4 className="font-medium">Contra la suplantación financiera</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Revisa regularmente tu informe crediticio (DICOM)</li>
                              <li>Configura alertas de movimientos en tus cuentas bancarias</li>
                              <li>No respondas a llamadas o correos que soliciten datos financieros</li>
                              <li>Considera contratar servicios de monitoreo de crédito</li>
                            </ul>
                          </div>

                          <div className="border-l-4 border-green-400 pl-4 py-2">
                            <h4 className="font-medium">Contra la suplantación documental</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Reporta inmediatamente el robo o pérdida de documentos oficiales</li>
                              <li>Nunca entregues fotocopias de tu carnet sin un propósito claro y legítimo</li>
                              <li>
                                Considera solicitar la renovación de tu carnet si sospechas que tus datos han sido
                                comprometidos
                              </li>
                              <li>Mantén un registro de dónde has presentado copias de tus documentos</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg mt-4">
                          <h4 className="font-medium text-red-800 mb-2">Recuerda siempre</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>
                              <strong>Tu RUT es información sensible.</strong> No lo compartas en redes sociales ni lo
                              envíes por correo electrónico sin cifrar.
                            </li>
                            <li>
                              <strong>Las instituciones legítimas nunca te pedirán</strong> contraseñas completas,
                              claves de coordenadas o códigos de seguridad por teléfono o correo.
                            </li>
                            <li>
                              <strong>Revisa regularmente tus cuentas</strong> para detectar actividad sospechosa lo
                              antes posible.
                            </li>
                            <li>
                              <strong>Configura alertas de seguridad</strong> en todos tus servicios financieros y
                              digitales importantes.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="prose max-w-none mt-8 mb-8">
                <h2>¿Qué dice la ley sobre la suplantación de identidad en Chile?</h2>

                <p>
                  En Chile, la suplantación de identidad está tipificada como delito en la Ley 21.459 de Delitos
                  Informáticos, promulgada en junio de 2022, que actualizó la legislación anterior para adaptarla a las
                  nuevas tecnologías.
                </p>

                <p>Específicamente, el Artículo 6 de esta ley establece:</p>

                <blockquote>
                  "El que suplantare la identidad de una persona natural o jurídica en sistemas de información, redes o
                  sitios de internet, será castigado con la pena de presidio menor en su grado mínimo a medio [61 días a
                  3 años]."
                </blockquote>

                <p>Además, dependiendo del tipo de suplantación, pueden aplicarse otros delitos:</p>

                <ul>
                  <li>
                    <strong>Estafa (Art. 468 del Código Penal):</strong> Si la suplantación se utiliza para defraudar
                    económicamente a otros.
                  </li>
                  <li>
                    <strong>Falsificación de instrumento público (Art. 193 del Código Penal):</strong> Si se falsifican
                    documentos oficiales.
                  </li>
                  <li>
                    <strong>Uso malicioso de instrumento privado falso (Art. 198 del Código Penal):</strong> Si se
                    utilizan documentos falsos para obtener beneficios.
                  </li>
                  <li>
                    <strong>Violación de secretos (Art. 231 del Código Penal):</strong> Si se accede indebidamente a
                    información confidencial.
                  </li>
                </ul>

                <h3>¿Qué pasa si el suplantador está en otro país?</h3>

                <p>
                  La suplantación de identidad a menudo ocurre desde el extranjero, lo que complica la investigación y
                  persecución. Sin embargo, Chile ha firmado acuerdos internacionales de cooperación en materia de
                  ciberdelincuencia, como el Convenio de Budapest, que facilitan la colaboración entre países para
                  investigar estos delitos.
                </p>

                <p>
                  La PDI, a través de su Brigada Investigadora del Cibercrimen (BRICIB), trabaja con agencias
                  internacionales como Interpol y Europol para perseguir a delincuentes que operan desde otros países.
                  Aunque el proceso puede ser más largo y complejo, no es imposible.
                </p>

                <h3>Caso real: Operación "Identidad Segura"</h3>

                <p>
                  En 2023, la PDI desarticuló una red que operaba desde Chile y Perú, dedicada a la suplantación de
                  identidad para cometer fraudes financieros. Los delincuentes obtenían datos personales a través de
                  phishing y creaban perfiles falsos para solicitar créditos y realizar compras. Gracias a la denuncia
                  coordinada de más de 80 víctimas y la colaboración internacional, se logró identificar a los
                  responsables y recuperar parte del dinero defraudado.
                </p>

                <div className="bg-gray-100 p-4 rounded-lg my-6">
                  <h3 className="text-lg font-medium mb-2">Preguntas frecuentes</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">¿Puedo demandar civilmente al suplantador?</h4>
                      <p className="text-sm">
                        Sí, además de la denuncia penal, puedes iniciar una demanda civil por daños y perjuicios contra
                        el suplantador. Esto te permitiría reclamar una indemnización por los daños materiales (pérdidas
                        económicas) y morales (daño a tu reputación, angustia psicológica) causados por la suplantación.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">¿Qué hago si no logro que eliminen un perfil falso?</h4>
                      <p className="text-sm">
                        Si la plataforma no responde a tus reportes, puedes escalar el caso presentando una denuncia
                        formal ante la PDI y solicitando una orden judicial para la eliminación del contenido. También
                        puedes contactar a organizaciones como ONG Datos Protegidos o la Unidad de Derechos Digitales,
                        que pueden ayudarte en estos casos.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">
                        ¿Cómo afecta a mi historial crediticio una suplantación financiera?
                      </h4>
                      <p className="text-sm">
                        Una suplantación financiera puede afectar negativamente tu historial crediticio si el
                        suplantador contrae deudas a tu nombre y no las paga. Para corregir esto, debes presentar
                        reclamos formales ante la CMF, el SERNAC y las instituciones financieras involucradas, aportando
                        la denuncia policial como evidencia. El proceso puede tomar tiempo, pero es posible limpiar tu
                        historial.
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
                        <Link href="/hackeo-whatsapp" className="text-blue-600 hover:underline flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Me hackearon WhatsApp: ¿Puedo denunciar?
                        </Link>
                      </li>
                      <li>
                        <Link href="/clonacion-tarjeta" className="text-blue-600 hover:underline flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Me clonaron la tarjeta: ¿puedo recuperar mi dinero?
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
                      Si fuiste víctima de suplantación de identidad, nuestros abogados pueden orientarte sobre los
                      pasos a seguir.
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
