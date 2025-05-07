import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Clock, AlertTriangle, Calendar, ShieldCheck, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageAds } from "@/components/page-ads"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "¿Cuándo prescriben las deudas en Chile? | LegalPO",
  description:
    "Guía completa sobre la prescripción de deudas en Chile. Conoce los plazos legales, cómo funciona y qué hacer si te cobran una deuda prescrita.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/deudas-prescritas",
  },
}

export default function DeudasPrescritasPage() {
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
                <li className="font-medium text-foreground">Deudas prescritas</li>
              </ol>
            </nav>
          </div>

          <PageAds />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                  ¿Cuándo prescriben las deudas en Chile?
                </h1>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>Actualizado: Mayo 2025</span>
                  <span className="mx-2">•</span>
                  <FileText className="mr-1 h-4 w-4" />
                  <span>Tiempo de lectura: 10 min</span>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <p className="text-lg font-medium text-blue-900">
                    Las deudas en Chile prescriben después de cierto tiempo si no hay acciones legales o reconocimiento
                    por parte del deudor. Conoce los plazos, cómo funciona y qué hacer si te cobran una deuda prescrita.
                  </p>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2>¿Qué es la prescripción de deudas?</h2>

                <p>
                  La prescripción de deudas es un concepto legal que establece que, después de transcurrido cierto
                  tiempo sin que el acreedor haya ejercido acciones legales para cobrar o sin que el deudor haya
                  reconocido la deuda, ésta se extingue. Esto significa que el acreedor pierde su derecho a exigir
                  judicialmente el pago.
                </p>

                <p>
                  En Chile, este concepto está regulado principalmente en el Código Civil (artículos 2492 y siguientes)
                  y en leyes especiales para ciertos tipos de deudas.
                </p>

                <h3>¿Por qué existe la prescripción de deudas?</h3>

                <p>La prescripción existe por varias razones fundamentales:</p>

                <ul>
                  <li>
                    <strong>Seguridad jurídica:</strong> Evita que las personas estén indefinidamente expuestas a cobros
                    por deudas antiguas.
                  </li>
                  <li>
                    <strong>Presunción de pago:</strong> Se presume que una deuda muy antigua que no ha sido cobrada
                    podría haber sido pagada, pero se perdió el comprobante.
                  </li>
                  <li>
                    <strong>Sanción a la inactividad:</strong> Incentiva a los acreedores a ejercer sus derechos
                    oportunamente.
                  </li>
                  <li>
                    <strong>Orden económico:</strong> Permite que las personas puedan rehacer su vida financiera después
                    de un tiempo razonable.
                  </li>
                </ul>

                <h3>Importante: La prescripción no es automática</h3>

                <p>
                  Un punto crucial que debes entender es que la prescripción <strong>no opera automáticamente</strong>.
                  Aunque una deuda haya cumplido el plazo para prescribir, si no alegas la prescripción cuando te
                  demandan, el juez no la aplicará de oficio. Esto significa que debes invocarla expresamente como
                  excepción cuando te cobran judicialmente.
                </p>
              </div>

              <Tabs defaultValue="plazos" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="plazos" className="text-sm">
                    Plazos de prescripción
                  </TabsTrigger>
                  <TabsTrigger value="interrumpir" className="text-sm">
                    Interrupción y suspensión
                  </TabsTrigger>
                  <TabsTrigger value="defensa" className="text-sm">
                    Cómo defenderse
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="plazos" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                        Plazos de prescripción por tipo de deuda
                      </CardTitle>
                      <CardDescription>
                        Conoce cuánto tiempo debe pasar para que prescriba cada tipo de deuda
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          En Chile, los plazos de prescripción varían según el tipo de deuda. Estos son los principales:
                        </p>

                        <div className="overflow-x-auto">
                          <table className="min-w-full border-collapse">
                            <thead>
                              <tr className="bg-blue-50">
                                <th className="border px-4 py-2 text-left">Tipo de deuda</th>
                                <th className="border px-4 py-2 text-left">Plazo de prescripción</th>
                                <th className="border px-4 py-2 text-left">Base legal</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border px-4 py-2 font-medium">Deudas comerciales generales</td>
                                <td className="border px-4 py-2">5 años</td>
                                <td className="border px-4 py-2">Art. 2515 Código Civil</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border px-4 py-2 font-medium">
                                  Tarjetas de crédito y créditos de consumo
                                </td>
                                <td className="border px-4 py-2">5 años</td>
                                <td className="border px-4 py-2">Art. 2515 Código Civil</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-medium">Créditos hipotecarios</td>
                                <td className="border px-4 py-2">5 años (cada cuota)</td>
                                <td className="border px-4 py-2">Art. 2515 Código Civil</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border px-4 py-2 font-medium">Facturas y boletas</td>
                                <td className="border px-4 py-2">3 años</td>
                                <td className="border px-4 py-2">Art. 2518 Código Civil</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-medium">Cheques</td>
                                <td className="border px-4 py-2">3 años</td>
                                <td className="border px-4 py-2">Art. 34 Ley de Cuentas Corrientes</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border px-4 py-2 font-medium">Pagarés</td>
                                <td className="border px-4 py-2">3 años</td>
                                <td className="border px-4 py-2">Art. 98 Ley de Letra de Cambio</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-medium">Letras de cambio</td>
                                <td className="border px-4 py-2">3 años</td>
                                <td className="border px-4 py-2">Art. 98 Ley de Letra de Cambio</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border px-4 py-2 font-medium">Deudas de servicios básicos</td>
                                <td className="border px-4 py-2">2 años</td>
                                <td className="border px-4 py-2">Art. 2521 Código Civil</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-medium">Intereses de préstamos</td>
                                <td className="border px-4 py-2">2 años</td>
                                <td className="border px-4 py-2">Art. 2521 Código Civil</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border px-4 py-2 font-medium">Multas de tránsito</td>
                                <td className="border px-4 py-2">2 años</td>
                                <td className="border px-4 py-2">Art. 2521 Código Civil</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-medium">Contribuciones (impuesto territorial)</td>
                                <td className="border px-4 py-2">3 años</td>
                                <td className="border px-4 py-2">Art. 200 Código Tributario</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border px-4 py-2 font-medium">Impuestos en general</td>
                                <td className="border px-4 py-2">3 años (6 años en caso de declaración maliciosa)</td>
                                <td className="border px-4 py-2">Art. 200 Código Tributario</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <h3 className="font-medium text-lg mt-4">Casos especiales</h3>

                        <div className="space-y-4">
                          <div className="border-l-4 border-blue-400 pl-4 py-2">
                            <h4 className="font-medium">Créditos hipotecarios</h4>
                            <p className="text-sm">
                              En los créditos hipotecarios, cada cuota prescribe a los 5 años desde su vencimiento. Sin
                              embargo, la hipoteca como garantía prescribe a los 10 años. Esto significa que aunque no
                              puedan cobrarte las cuotas antiguas, la hipoteca sigue vigente por más tiempo.
                            </p>
                          </div>

                          <div className="border-l-4 border-blue-400 pl-4 py-2">
                            <h4 className="font-medium">Deudas con sentencia judicial</h4>
                            <p className="text-sm">
                              Si ya existe una sentencia judicial que ordena el pago de la deuda, el plazo de
                              prescripción es de 10 años (prescripción de la acción ejecutiva). Esto aplica para deudas
                              que ya fueron demandadas y donde el juez dictó sentencia a favor del acreedor.
                            </p>
                          </div>

                          <div className="border-l-4 border-blue-400 pl-4 py-2">
                            <h4 className="font-medium">Deudas previsionales</h4>
                            <p className="text-sm">
                              Las cotizaciones previsionales (AFP, Isapre, etc.) prescriben a los 5 años desde que se
                              hicieron exigibles. Sin embargo, el derecho a cobrar pensiones ya declaradas no prescribe.
                            </p>
                          </div>

                          <div className="border-l-4 border-blue-400 pl-4 py-2">
                            <h4 className="font-medium">Pensiones alimenticias</h4>
                            <p className="text-sm">
                              Las pensiones de alimentos prescriben a los 5 años, pero solo para las mensualidades
                              vencidas. El derecho a recibir pensión alimenticia futura no prescribe mientras exista la
                              necesidad.
                            </p>
                          </div>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                          <h4 className="font-medium text-yellow-800 mb-2">¿Desde cuándo se cuenta el plazo?</h4>
                          <p className="text-sm">
                            El plazo de prescripción comienza a contarse desde que la deuda se hace exigible:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                            <li>En préstamos con cuotas: desde el vencimiento de cada cuota</li>
                            <li>En tarjetas de crédito: desde el vencimiento de cada estado de cuenta</li>
                            <li>En facturas: desde la fecha de emisión o vencimiento según corresponda</li>
                            <li>En cheques: desde la fecha de protesto</li>
                            <li>En servicios básicos: desde la fecha de vencimiento de cada boleta</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="interrumpir" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
                        Interrupción y suspensión de la prescripción
                      </CardTitle>
                      <CardDescription>
                        Factores que pueden reiniciar o detener el plazo de prescripción
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          Es crucial entender que el plazo de prescripción puede interrumpirse o suspenderse en ciertas
                          circunstancias, lo que afecta directamente tus derechos como deudor.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="border rounded-lg p-4 bg-red-50">
                            <h4 className="font-medium mb-2 text-red-800">Causas de interrupción</h4>
                            <p className="text-sm mb-2">
                              La interrupción hace que el plazo de prescripción se reinicie completamente, comenzando a
                              contar de nuevo desde cero.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>
                                <strong>Demanda judicial:</strong> Cuando el acreedor presenta una demanda judicial
                                contra ti, el plazo de prescripción se interrumpe y comienza a contar de nuevo.
                              </li>
                              <li>
                                <strong>Reconocimiento de la deuda:</strong> Cualquier acto que implique reconocer la
                                deuda (pago parcial, solicitud de prórroga, firma de un nuevo documento, etc.).
                              </li>
                              <li>
                                <strong>Requerimiento formal:</strong> En algunos casos, un requerimiento formal del
                                acreedor puede interrumpir la prescripción.
                              </li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-4 bg-yellow-50">
                            <h4 className="font-medium mb-2 text-yellow-800">Causas de suspensión</h4>
                            <p className="text-sm mb-2">
                              La suspensión detiene temporalmente el conteo del plazo, que continúa una vez que cesa la
                              causa de suspensión.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>
                                <strong>Incapacidad legal:</strong> Si el acreedor es menor de edad o está declarado
                                interdicto.
                              </li>
                              <li>
                                <strong>Fuerza mayor:</strong> Circunstancias que impiden al acreedor ejercer sus
                                derechos (catástrofes naturales, estado de excepción, etc.).
                              </li>
                              <li>
                                <strong>Acuerdos de suspensión:</strong> En algunos casos, las partes pueden acordar
                                suspender el plazo de prescripción.
                              </li>
                            </ul>
                          </div>
                        </div>

                        <h3 className="font-medium text-lg mt-4">Acciones que NO interrumpen la prescripción</h3>

                        <div className="space-y-4">
                          <p>Es importante saber que no todas las acciones de cobro interrumpen la prescripción:</p>

                          <ul className="list-disc pl-5 space-y-2">
                            <li>
                              <strong>Llamadas telefónicas de cobranza:</strong> Las llamadas o mensajes de empresas de
                              cobranza no interrumpen la prescripción.
                            </li>
                            <li>
                              <strong>Cartas de cobranza extrajudicial:</strong> El envío de cartas o correos
                              electrónicos reclamando el pago no interrumpe la prescripción, a menos que respondas
                              reconociendo la deuda.
                            </li>
                            <li>
                              <strong>Ingreso a registros de morosidad (DICOM):</strong> El hecho de que te ingresen a
                              DICOM no interrumpe ni suspende la prescripción.
                            </li>
                            <li>
                              <strong>Visitas de cobradores a domicilio:</strong> Las visitas de cobradores no
                              interrumpen la prescripción si no hay reconocimiento de la deuda.
                            </li>
                          </ul>

                          <div className="bg-red-50 p-4 rounded-lg mt-4">
                            <h4 className="font-medium text-red-800 mb-2">¡Cuidado con el reconocimiento de deuda!</h4>
                            <p className="text-sm">
                              Cualquier acto que implique reconocer la existencia de la deuda interrumpe la
                              prescripción. Esto incluye:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                              <li>Realizar un pago parcial de la deuda</li>
                              <li>Firmar un pagaré o documento reconociendo la deuda</li>
                              <li>Solicitar una renegociación o convenio de pago</li>
                              <li>Enviar un correo o carta reconociendo que debes el dinero</li>
                              <li>Aceptar verbalmente la deuda ante testigos</li>
                            </ul>
                            <p className="text-sm mt-2 font-medium">
                              Si una deuda está cerca de prescribir, cualquier reconocimiento reiniciará el plazo
                              completo.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="defensa" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <ShieldCheck className="h-5 w-5 mr-2 text-green-500" />
                        Cómo defenderse de cobros de deudas prescritas
                      </CardTitle>
                      <CardDescription>Pasos para protegerte legalmente</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-4 mt-2">
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            1
                          </div>
                          <div>
                            <h3 className="font-medium">Verifica si la deuda está realmente prescrita</h3>
                            <p className="text-muted-foreground">Antes de alegar prescripción, asegúrate de que:</p>
                            <ul className="list-disc pl-5 mt-2 text-sm">
                              <li>Ha transcurrido el plazo legal correspondiente al tipo de deuda</li>
                              <li>No has reconocido la deuda durante ese período</li>
                              <li>No has sido notificado de una demanda judicial por esa deuda</li>
                              <li>No existe una sentencia judicial previa sobre esa deuda</li>
                            </ul>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            2
                          </div>
                          <div>
                            <h3 className="font-medium">Responde adecuadamente a los intentos de cobro</h3>
                            <p className="text-muted-foreground">Si te contactan para cobrar una deuda prescrita:</p>
                            <ul className="list-disc pl-5 mt-2 text-sm">
                              <li>
                                <strong>No reconozcas la deuda</strong> ni verbal ni por escrito
                              </li>
                              <li>
                                <strong>No realices pagos parciales</strong>, pues reiniciarían el plazo
                              </li>
                              <li>
                                <strong>No firmes documentos</strong> relacionados con la deuda
                              </li>
                              <li>
                                Puedes informar por escrito que "según tus registros, la deuda estaría prescrita" sin
                                reconocerla expresamente
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            3
                          </div>
                          <div>
                            <h3 className="font-medium">Si te demandan judicialmente</h3>
                            <p className="text-muted-foreground">Si recibes una demanda por una deuda prescrita:</p>
                            <ul className="list-disc pl-5 mt-2 text-sm">
                              <li>
                                <strong>Contesta la demanda dentro del plazo</strong> (generalmente 15 días hábiles)
                              </li>
                              <li>
                                <strong>Alega expresamente la excepción de prescripción</strong> en tu contestación
                              </li>
                              <li>
                                Presenta pruebas de que ha transcurrido el plazo legal (fechas de los últimos pagos o
                                comunicaciones)
                              </li>
                              <li>Idealmente, busca asesoría legal para este proceso</li>
                            </ul>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            4
                          </div>
                          <div>
                            <h3 className="font-medium">Si apareces en DICOM por una deuda prescrita</h3>
                            <p className="text-muted-foreground">
                              Si te han ingresado a registros de morosidad por una deuda prescrita:
                            </p>
                            <ul className="list-disc pl-5 mt-2 text-sm">
                              <li>
                                Solicita por escrito al acreedor que te elimine del registro, argumentando la
                                prescripción
                              </li>
                              <li>
                                Si no responden, presenta un reclamo ante la Comisión para el Mercado Financiero (CMF)
                              </li>
                              <li>También puedes presentar una denuncia en el SERNAC</li>
                              <li>
                                Como último recurso, puedes iniciar una acción judicial de eliminación de datos
                                personales
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            5
                          </div>
                          <div>
                            <h3 className="font-medium">Si recibes cartas de cobranza judicial falsas</h3>
                            <p className="text-muted-foreground">
                              Algunas empresas de cobranza envían cartas que simulan ser notificaciones judiciales para
                              intimidar:
                            </p>
                            <ul className="list-disc pl-5 mt-2 text-sm">
                              <li>
                                Verifica si realmente existe una demanda en el sitio del Poder Judicial (www.pjud.cl)
                              </li>
                              <li>
                                Si es una carta falsa, denuncia al SERNAC por práctica de cobranza extrajudicial abusiva
                              </li>
                              <li>Guarda la carta como evidencia</li>
                              <li>No respondas ni realices pagos basados en estas comunicaciones</li>
                            </ul>
                          </div>
                        </li>
                      </ol>

                      <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
                        <h4 className="font-medium text-green-800 mb-1">Modelo de carta para alegar prescripción</h4>
                        <p className="text-sm text-green-700">
                          Si deseas comunicar formalmente que una deuda está prescrita, puedes usar un texto como este
                          (adaptándolo a tu caso):
                        </p>
                        <div className="bg-white p-3 mt-2 text-sm border border-green-200 rounded">
                          <p>
                            [Tu nombre y dirección]
                            <br />
                            [Fecha]
                            <br />
                            <br />
                            A: [Nombre del acreedor]
                            <br />
                            <br />
                            Ref: Deuda N° [número de referencia]
                            <br />
                            <br />
                            Por medio de la presente, acuso recibo de su comunicación de fecha [fecha] referente a una
                            supuesta deuda a mi nombre.
                            <br />
                            <br />
                            Al respecto, hago presente que según mis registros y la legislación vigente, la acción de
                            cobro de dicha obligación se encuentra prescrita, por haber transcurrido el plazo legal
                            establecido en el artículo [artículo correspondiente] del [Código Civil/ley aplicable], sin
                            que se haya interrumpido la prescripción mediante demanda judicial o reconocimiento de la
                            deuda.
                            <br />
                            <br />
                            Por lo anterior, solicito el cese inmediato de las gestiones de cobranza y mi eliminación de
                            cualquier registro de morosidad relacionado con esta deuda prescrita.
                            <br />
                            <br />
                            Esta comunicación no constituye reconocimiento de deuda alguna y se realiza con el único fin
                            de hacer valer mis derechos legales.
                            <br />
                            <br />
                            Atentamente,
                            <br />
                            <br />
                            [Tu firma]
                            <br />
                            [Tu nombre]
                            <br />
                            [Tu RUT]
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="prose max-w-none mt-8 mb-8">
                <h2>Preguntas frecuentes sobre deudas prescritas</h2>

                <div className="space-y-6">
                  <div>
                    <h3>¿La prescripción elimina la deuda?</h3>
                    <p>
                      Técnicamente, la prescripción no elimina la deuda, sino que extingue la acción judicial para
                      cobrarla. Esto significa que la deuda sigue existiendo como una "obligación natural", pero el
                      acreedor ya no puede exigir su pago a través de los tribunales. Tú puedes pagarla voluntariamente
                      si así lo deseas, pero no pueden obligarte legalmente a hacerlo.
                    </p>
                  </div>

                  <div>
                    <h3>¿Pueden seguir cobrándome una deuda prescrita?</h3>
                    <p>
                      Legalmente, los acreedores pueden seguir realizando gestiones de cobranza extrajudicial (llamadas,
                      cartas) por deudas prescritas, siempre que no incurran en prácticas abusivas. Sin embargo, no
                      pueden demandarte judicialmente, y si lo hacen, puedes alegar la prescripción para que la demanda
                      sea rechazada. Tampoco deberían mantenerte en registros de morosidad como DICOM por deudas
                      prescritas.
                    </p>
                  </div>

                  <div>
                    <h3>¿Qué pasa si pagué una deuda prescrita sin saberlo?</h3>
                    <p>
                      Si pagaste voluntariamente una deuda prescrita, generalmente no puedes solicitar la devolución del
                      dinero. El Código Civil establece que el pago voluntario de una obligación natural (como una deuda
                      prescrita) es válido y no da derecho a repetición (devolución). Sin embargo, si fuiste engañado o
                      coaccionado para pagar, podrías tener fundamentos para reclamar.
                    </p>
                  </div>

                  <div>
                    <h3>¿La prescripción aplica a todas las deudas?</h3>
                    <p>
                      La prescripción aplica a la mayoría de las deudas, pero hay algunas excepciones o casos
                      especiales:
                    </p>
                    <ul>
                      <li>
                        Las obligaciones propter rem (vinculadas a la propiedad de un bien) no prescriben mientras se
                        mantenga la propiedad
                      </li>
                      <li>Algunas obligaciones tributarias tienen reglas especiales</li>
                      <li>Las pensiones alimenticias futuras no prescriben mientras exista la necesidad</li>
                      <li>Ciertos crímenes y sus responsabilidades civiles tienen plazos especiales o no prescriben</li>
                    </ul>
                  </div>

                  <div>
                    <h3>¿Qué pasa con las deudas prescritas en caso de fallecimiento?</h3>
                    <p>
                      Si una persona fallece con deudas prescritas, estas siguen estando prescritas para sus herederos.
                      Los herederos pueden aceptar la herencia a beneficio de inventario, lo que significa que solo
                      responderán por las deudas del fallecido hasta el monto de los bienes heredados. Si una deuda
                      estaba prescrita antes del fallecimiento, los herederos pueden alegar la prescripción si son
                      demandados.
                    </p>
                  </div>

                  <div>
                    <h3>¿Puedo obtener un crédito si tengo deudas prescritas?</h3>
                    <p>
                      Técnicamente, si tus deudas están prescritas, no deberías aparecer en registros de morosidad como
                      DICOM, lo que facilitaría obtener nuevos créditos. Sin embargo, algunas instituciones financieras
                      mantienen registros internos de clientes con historial de impago, incluso si las deudas están
                      prescritas. Esto podría afectar tu evaluación crediticia en esas instituciones específicas, aunque
                      legalmente no deberían negarte un crédito solo por deudas prescritas que ya no aparecen en
                      registros oficiales.
                    </p>
                  </div>
                </div>

                <h2>Caso real: Jurisprudencia sobre deudas prescritas</h2>

                <p>
                  En 2022, la Corte Suprema de Chile (Rol N° 15.234-2021) estableció un importante precedente al
                  confirmar que las empresas no pueden mantener a consumidores en registros de morosidad por deudas
                  prescritas, incluso si no se ha declarado judicialmente la prescripción. La Corte determinó que
                  mantener a una persona en DICOM por una deuda prescrita constituye una práctica abusiva que afecta sus
                  derechos como consumidor.
                </p>

                <p>
                  Este fallo reforzó la protección a los deudores, estableciendo que basta con que haya transcurrido el
                  plazo de prescripción para que el acreedor tenga la obligación de eliminar al deudor de los registros
                  de morosidad, sin necesidad de una declaración judicial previa de prescripción.
                </p>

                <div className="bg-gray-100 p-4 rounded-lg my-6">
                  <h3 className="text-lg font-medium mb-2">Recuerda siempre</h3>

                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>La prescripción no es automática:</strong> Debes alegarla expresamente cuando te demandan.
                    </li>
                    <li>
                      <strong>No reconozcas deudas antiguas:</strong> Cualquier reconocimiento reinicia el plazo de
                      prescripción.
                    </li>
                    <li>
                      <strong>Guarda documentación:</strong> Conserva comprobantes de pago y comunicaciones para
                      demostrar cuándo se realizó la última gestión.
                    </li>
                    <li>
                      <strong>Busca asesoría legal:</strong> En casos complejos, es recomendable consultar con un
                      abogado especializado.
                    </li>
                    <li>
                      <strong>Conoce tus derechos:</strong> Las empresas de cobranza no pueden usar métodos abusivos ni
                      engañosos, incluso para deudas no prescritas.
                    </li>
                  </ul>
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
                        <Link href="/cobranza-falsa" className="text-blue-600 hover:underline flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          ¿Qué hacer si me llega una carta falsa de cobranza judicial?
                        </Link>
                      </li>
                      <li>
                        <Link href="/derechos-deudor" className="text-blue-600 hover:underline flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Derechos del deudor en Chile
                        </Link>
                      </li>
                      <li>
                        <Link href="/estafas-internet" className="text-blue-600 hover:underline flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Estafas por internet: cómo denunciar
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
                        <span className="font-medium">CMF:</span>
                        <span className="ml-2">600 831 0000</span>
                      </li>
                      <li className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-red-600" />
                        <span className="font-medium">Corporación de Asistencia Judicial:</span>
                        <span className="ml-2">600 440 0000</span>
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
                      Si tienes dudas sobre la prescripción de tus deudas o te están cobrando una deuda prescrita,
                      nuestros abogados pueden orientarte.
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
