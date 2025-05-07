import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Clock, AlertTriangle, MessageSquare, ShieldCheck, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageAds } from "@/components/page-ads"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Me hackearon WhatsApp: ¿Puedo denunciar? | LegalPO",
  description:
    "Guía completa sobre qué hacer si te hackearon WhatsApp. Pasos para recuperar tu cuenta, evitar estafas y denunciar legalmente en Chile.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/hackeo-whatsapp",
  },
}

export default function HackeoWhatsAppPage() {
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
                <li className="font-medium text-foreground">Hackeo de WhatsApp</li>
              </ol>
            </nav>
          </div>

          <PageAds />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                  Me hackearon WhatsApp: ¿Puedo denunciar?
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
                    El hackeo de WhatsApp ha aumentado un 200% en Chile. Si te robaron tu cuenta, actúa rápido para
                    recuperarla y evitar que los estafadores contacten a tus amigos y familiares pidiendo dinero.
                  </p>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2>¿Cómo saber si me hackearon WhatsApp?</h2>

                <p>
                  El hackeo o secuestro de cuentas de WhatsApp es cada vez más común en Chile. Los estafadores acceden a
                  tu cuenta y la utilizan para pedir dinero a tus contactos o para cometer otros fraudes. Estas son las
                  señales de que tu WhatsApp fue hackeado:
                </p>

                <ul>
                  <li>Recibiste un mensaje con un código de verificación que no solicitaste</li>
                  <li>WhatsApp te expulsó de tu sesión repentinamente</li>
                  <li>No puedes acceder a tu cuenta aunque ingreses el código correcto</li>
                  <li>Tus contactos reciben mensajes tuyos que no enviaste</li>
                  <li>Aparecen conversaciones o grupos que no creaste</li>
                  <li>Tu perfil, foto o estado fueron modificados sin tu autorización</li>
                </ul>

                <h2>¿Cómo hackean las cuentas de WhatsApp?</h2>

                <p>Los métodos más comunes que usan los estafadores para hackear cuentas de WhatsApp en Chile son:</p>

                <ol>
                  <li>
                    <strong>Método del código de verificación:</strong> El estafador te contacta haciéndose pasar por un
                    amigo, familiar o servicio (como delivery o banco) y te dice que te enviará un código por SMS que
                    debes reenviarle. Este código es en realidad el código de verificación de WhatsApp, y al
                    compartirlo, le das acceso a tu cuenta.
                  </li>
                  <li>
                    <strong>Suplantación de WhatsApp Web:</strong> Te envían un enlace falso que simula ser WhatsApp Web
                    y al ingresar tus datos, los estafadores obtienen acceso a tu cuenta.
                  </li>
                  <li>
                    <strong>Acceso físico al teléfono:</strong> Alguien con acceso a tu teléfono desbloqueado puede
                    escanear el código QR de WhatsApp Web y acceder a tu cuenta desde otro dispositivo.
                  </li>
                  <li>
                    <strong>Aplicaciones espía:</strong> Instalan aplicaciones maliciosas en tu teléfono que pueden
                    capturar tus datos y claves.
                  </li>
                </ol>
              </div>

              <Tabs defaultValue="recuperar" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="recuperar" className="text-sm">
                    Recuperar cuenta
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
                        <MessageSquare className="h-5 w-5 mr-2 text-green-500" />
                        Pasos para recuperar tu cuenta de WhatsApp
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
                            <h3 className="font-medium">Solicita un nuevo código de verificación</h3>
                            <p className="text-muted-foreground">
                              Abre WhatsApp en tu teléfono e ingresa tu número. Solicita un nuevo código de verificación
                              por SMS. Esto desconectará al hacker de tu cuenta.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            2
                          </div>
                          <div>
                            <h3 className="font-medium">Ingresa el código y recupera tu cuenta</h3>
                            <p className="text-muted-foreground">
                              Cuando recibas el código por SMS, ingrésalo en WhatsApp. Si el hacker activó la
                              verificación en dos pasos, tendrás que esperar 7 días para recuperar tu cuenta sin el PIN.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            3
                          </div>
                          <div>
                            <h3 className="font-medium">Activa la verificación en dos pasos</h3>
                            <p className="text-muted-foreground">
                              Una vez recuperada tu cuenta, activa inmediatamente la verificación en dos pasos. Ve a
                              Configuración &gt; Cuenta &gt; Verificación en dos pasos y crea un PIN de 6 dígitos.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            4
                          </div>
                          <div>
                            <h3 className="font-medium">Verifica dispositivos conectados</h3>
                            <p className="text-muted-foreground">
                              Revisa si hay dispositivos desconocidos conectados a tu WhatsApp. Ve a Configuración &gt;
                              WhatsApp Web/Escritorio y cierra todas las sesiones que no reconozcas.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            5
                          </div>
                          <div>
                            <h3 className="font-medium">Avisa a tus contactos</h3>
                            <p className="text-muted-foreground">
                              Informa a tus contactos que tu cuenta fue hackeada y que no respondan a mensajes
                              sospechosos que hayan recibido durante ese tiempo, especialmente si pedían dinero o
                              códigos.
                            </p>
                          </div>
                        </li>
                      </ol>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                        <h4 className="font-medium text-yellow-800 mb-1">¿No puedes recuperar tu cuenta?</h4>
                        <p className="text-sm text-yellow-700">
                          Si el hacker activó la verificación en dos pasos y no puedes esperar 7 días, contacta
                          directamente al soporte de WhatsApp a través de su app o enviando un correo a
                          support@whatsapp.com explicando tu situación.
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
                        Cómo denunciar legalmente el hackeo
                      </CardTitle>
                      <CardDescription>Pasos para hacer la denuncia en Chile</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          El hackeo de WhatsApp es un delito informático en Chile, tipificado en la Ley 21.459. Puedes y
                          debes denunciarlo, especialmente si los estafadores usaron tu cuenta para pedir dinero o
                          cometer otros fraudes.
                        </p>

                        <h3 className="font-medium text-lg">1. Reúne evidencia</h3>
                        <p>Antes de denunciar, recopila toda la evidencia posible:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Capturas de pantalla de mensajes enviados por el hacker</li>
                          <li>Testimonios de contactos que recibieron mensajes fraudulentos</li>
                          <li>Comprobantes de transferencias si hubo estafas monetarias</li>
                          <li>Correos o mensajes donde te pidieron el código de verificación</li>
                          <li>Notificaciones de inicio de sesión en dispositivos desconocidos</li>
                        </ul>

                        <h3 className="font-medium text-lg">2. Denuncia en la PDI o Carabineros</h3>
                        <p>
                          Puedes denunciar en la Brigada Investigadora de Cibercrimen de la PDI o en cualquier comisaría
                          de Carabineros. También puedes hacer la denuncia online en:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            <a href="https://www.pdichile.cl/denuncia-online" className="text-blue-600 hover:underline">
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
                        </ul>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">¿Qué delitos se configuran?</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>
                              <strong>Acceso ilícito:</strong> Artículo 2 de la Ley 21.459 - Pena de presidio menor en
                              su grado mínimo a medio (61 días a 3 años)
                            </li>
                            <li>
                              <strong>Suplantación de identidad:</strong> Si usaron tu identidad para estafar
                            </li>
                            <li>
                              <strong>Estafa:</strong> Si pidieron dinero a tus contactos
                            </li>
                          </ul>
                        </div>

                        <h3 className="font-medium text-lg">3. Denuncia a WhatsApp</h3>
                        <p>
                          Además de la denuncia legal, reporta el incidente directamente a WhatsApp enviando un correo a
                          support@whatsapp.com con el asunto "Cuenta hackeada" y explicando la situación.
                        </p>

                        <h3 className="font-medium text-lg">4. Si hubo estafa monetaria</h3>
                        <p>
                          Si el hacker logró estafar a alguno de tus contactos pidiendo dinero, la víctima también debe
                          hacer una denuncia por estafa y contactar a su banco para intentar revertir la transferencia.
                        </p>

                        <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                          <h4 className="font-medium text-yellow-800 mb-2">Caso real</h4>
                          <p className="text-sm">
                            En 2023, la PDI logró identificar a un grupo que hackeaba cuentas de WhatsApp en Santiago y
                            pedía dinero a los contactos de las víctimas. Gracias a las denuncias coordinadas de
                            múltiples afectados, se pudo rastrear las cuentas bancarias donde recibían el dinero y
                            detener a los responsables.
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
                        Cómo prevenir el hackeo de WhatsApp
                      </CardTitle>
                      <CardDescription>Medidas de seguridad para proteger tu cuenta</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          La prevención es la mejor defensa contra el hackeo de WhatsApp. Estas medidas te ayudarán a
                          proteger tu cuenta:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="border rounded-lg p-4 bg-green-50">
                            <h4 className="font-medium mb-2 text-green-800">Medidas básicas</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>
                                <strong>Activa la verificación en dos pasos</strong> (Configuración &gt; Cuenta &gt;
                                Verificación en dos pasos)
                              </li>
                              <li>
                                <strong>Nunca compartas</strong> códigos de verificación que recibas por SMS
                              </li>
                              <li>
                                <strong>Desconfía de mensajes</strong> que piden reenviar códigos, incluso si parecen
                                venir de amigos
                              </li>
                              <li>
                                <strong>Cierra sesiones remotas</strong> periódicamente en WhatsApp Web
                              </li>
                              <li>
                                <strong>Mantén actualizada</strong> la aplicación de WhatsApp
                              </li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-4 bg-blue-50">
                            <h4 className="font-medium mb-2 text-blue-800">Medidas avanzadas</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>
                                <strong>Configura un PIN complejo</strong> para la verificación en dos pasos
                              </li>
                              <li>
                                <strong>Añade un correo de recuperación</strong> a tu cuenta de WhatsApp
                              </li>
                              <li>
                                <strong>Revisa periódicamente</strong> los dispositivos conectados
                              </li>
                              <li>
                                <strong>Activa el bloqueo biométrico</strong> (huella o facial) para WhatsApp
                              </li>
                              <li>
                                <strong>No uses WhatsApp Web</strong> en computadoras públicas o no confiables
                              </li>
                            </ul>
                          </div>
                        </div>

                        <h3 className="font-medium text-lg mt-4">Señales de alerta</h3>
                        <p>Presta atención a estas señales que podrían indicar un intento de hackeo:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>Mensajes sospechosos</strong> de contactos pidiendo códigos o información personal
                          </li>
                          <li>
                            <strong>Códigos de verificación</strong> que no solicitaste
                          </li>
                          <li>
                            <strong>Notificaciones</strong> de inicio de sesión en nuevos dispositivos
                          </li>
                          <li>
                            <strong>Cambios en tu perfil</strong> que no realizaste
                          </li>
                          <li>
                            <strong>Mensajes de WhatsApp</strong> sobre intentos de registro con tu número
                          </li>
                        </ul>

                        <div className="bg-red-50 p-4 rounded-lg mt-4">
                          <h4 className="font-medium text-red-800 mb-2">Estafas comunes a través de WhatsApp</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>
                              <strong>"Mamá/Papá, cambié de número"</strong> - Estafadores se hacen pasar por tus hijos
                              diciendo que cambiaron de número y necesitan dinero urgente
                            </li>
                            <li>
                              <strong>"Te enviaré un código para verificar"</strong> - Intentan obtener tu código de
                              verificación de WhatsApp
                            </li>
                            <li>
                              <strong>"Ganaste un premio/sorteo"</strong> - Te piden datos personales o un pago para
                              reclamar un premio inexistente
                            </li>
                            <li>
                              <strong>"Soy del banco, detectamos un problema"</strong> - Intentan obtener tus datos
                              bancarios
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="prose max-w-none mt-8 mb-8">
                <h2>¿Qué dice la ley sobre el hackeo de WhatsApp en Chile?</h2>

                <p>
                  En Chile, el hackeo de WhatsApp está tipificado como delito informático según la Ley 21.459,
                  promulgada en junio de 2022, que actualizó la legislación anterior sobre delitos informáticos.
                </p>

                <p>Los delitos que pueden configurarse en un hackeo de WhatsApp son:</p>

                <ul>
                  <li>
                    <strong>Acceso ilícito (Art. 2):</strong> Acceder indebidamente a un sistema informático. La pena
                    puede ser de 61 días a 3 años de presidio.
                  </li>
                  <li>
                    <strong>Interceptación ilícita (Art. 3):</strong> Interceptar, interrumpir o interferir
                    indebidamente comunicaciones entre sistemas informáticos.
                  </li>
                  <li>
                    <strong>Suplantación de identidad (Art. 6):</strong> Suplantar la identidad de una persona natural o
                    jurídica en sistemas informáticos.
                  </li>
                  <li>
                    <strong>Estafa informática (Art. 7):</strong> Si se utiliza la cuenta para defraudar económicamente
                    a otros.
                  </li>
                </ul>

                <p>
                  Además, si el hackeo se utiliza para cometer otros delitos como extorsión, amenazas o difusión de
                  contenido privado, se pueden aplicar las penas correspondientes a esos delitos.
                </p>

                <h3>¿Qué pasa si el hacker está en otro país?</h3>

                <p>
                  Muchos hackeos se realizan desde el extranjero, lo que complica la investigación. Sin embargo, la ley
                  chilena contempla la cooperación internacional para perseguir estos delitos. La PDI tiene convenios
                  con policías de otros países y puede solicitar información a empresas como Meta (propietaria de
                  WhatsApp) para rastrear a los responsables.
                </p>

                <h3>Caso real: Operación "WhatsApp Seguro"</h3>

                <p>
                  En 2024, la PDI realizó la operación "WhatsApp Seguro", donde se desarticuló una red que operaba desde
                  Chile y Argentina. Los estafadores hackeaban cuentas de WhatsApp y pedían dinero a los contactos de
                  las víctimas, haciéndose pasar por ellas. Gracias a la denuncia coordinada de más de 50 víctimas, se
                  logró identificar a los responsables y recuperar parte del dinero estafado.
                </p>

                <div className="bg-gray-100 p-4 rounded-lg my-6">
                  <h3 className="text-lg font-medium mb-2">Preguntas frecuentes</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">
                        ¿Soy responsable si hackean mi WhatsApp y estafan a mis contactos?
                      </h4>
                      <p className="text-sm">
                        No, legalmente no eres responsable por los actos que cometa un tercero usando tu cuenta
                        hackeada. Sin embargo, es recomendable que informes inmediatamente a tus contactos para evitar
                        que caigan en la estafa.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">¿Puedo recuperar conversaciones perdidas después de un hackeo?</h4>
                      <p className="text-sm">
                        Si tenías copias de seguridad activadas en WhatsApp, es posible recuperar las conversaciones
                        hasta la fecha de la última copia. Si no, lamentablemente es difícil recuperar mensajes
                        perdidos.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">¿Vale la pena denunciar si no hubo pérdida económica?</h4>
                      <p className="text-sm">
                        Sí, es importante denunciar aunque no haya habido pérdida económica. Tu denuncia puede ayudar a
                        identificar patrones y prevenir futuros ataques. Además, el acceso ilícito a tu cuenta es un
                        delito por sí mismo.
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
                        <span className="font-medium">Fiscalía:</span>
                        <span className="ml-2">600 333 0000</span>
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
                      Si fuiste víctima de hackeo de WhatsApp, nuestros abogados pueden orientarte sobre los pasos a
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
