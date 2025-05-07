import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Clock, ShieldCheck, Phone, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageAds } from "@/components/page-ads"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Derechos del deudor en Chile: Protégete de cobranzas abusivas | LegalPO",
  description:
    "Guía completa sobre los derechos de los deudores en Chile. Conoce las leyes que te protegen contra prácticas abusivas de cobranza y cómo defenderte legalmente.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/derechos-deudor",
  },
}

export default function DerechosDeudorPage() {
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
                <li className="font-medium text-foreground">Derechos del deudor</li>
              </ol>
            </nav>
          </div>

          <PageAds />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                  Derechos del deudor en Chile: Protégete de cobranzas abusivas
                </h1>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>Actualizado: Mayo 2025</span>
                  <span className="mx-2">•</span>
                  <FileText className="mr-1 h-4 w-4" />
                  <span>Tiempo de lectura: 9 min</span>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <p className="text-lg font-medium text-blue-900">
                    Tener deudas no significa perder tus derechos. En Chile, existen leyes que protegen a los deudores
                    contra prácticas abusivas de cobranza. Conoce tus derechos y cómo hacerlos valer.
                  </p>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2>¿Qué derechos tienen los deudores en Chile?</h2>

                <p>
                  Aunque tengas deudas pendientes, sigues teniendo derechos que están protegidos por la legislación
                  chilena. Las principales leyes que protegen a los deudores son la Ley del Consumidor (Ley 19.496), el
                  Código Civil, la Ley de Reorganización y Liquidación de Activos (Ley 20.720), y diversas normativas de
                  la Comisión para el Mercado Financiero (CMF).
                </p>

                <p>
                  Estos derechos buscan equilibrar la relación entre acreedores y deudores, evitando que las personas
                  endeudadas sean sometidas a prácticas abusivas o humillantes durante los procesos de cobranza.
                </p>

                <h3>Principios fundamentales de protección al deudor</h3>

                <p>La legislación chilena se basa en varios principios fundamentales para proteger a los deudores:</p>

                <ul>
                  <li>
                    <strong>Dignidad de la persona:</strong> Las gestiones de cobranza no pueden atentar contra la
                    dignidad, privacidad o reputación del deudor.
                  </li>
                  <li>
                    <strong>Información clara y veraz:</strong> El deudor tiene derecho a recibir información completa,
                    clara y oportuna sobre sus deudas.
                  </li>
                  <li>
                    <strong>Proporcionalidad:</strong> Las medidas de cobro deben ser proporcionales a la deuda y no
                    pueden ser excesivas o desproporcionadas.
                  </li>
                  <li>
                    <strong>Prescripción:</strong> Las deudas prescriben después de cierto tiempo si no hay acciones
                    legales o reconocimiento por parte del deudor.
                  </li>
                  <li>
                    <strong>Debido proceso:</strong> Cualquier acción legal contra un deudor debe seguir los
                    procedimientos establecidos por la ley.
                  </li>
                </ul>
              </div>

              <Tabs defaultValue="cobranza" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="cobranza" className="text-sm">
                    Cobranza extrajudicial
                  </TabsTrigger>
                  <TabsTrigger value="judicial" className="text-sm">
                    Cobranza judicial
                  </TabsTrigger>
                  <TabsTrigger value="renegociacion" className="text-sm">
                    Renegociación y quiebra
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="cobranza" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <ShieldCheck className="h-5 w-5 mr-2 text-green-500" />
                        Derechos en la cobranza extrajudicial
                      </CardTitle>
                      <CardDescription>Protección contra prácticas abusivas de cobranza</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          La cobranza extrajudicial es aquella que se realiza fuera de los tribunales, generalmente a
                          través de llamadas telefónicas, cartas, correos electrónicos o visitas. La Ley del Consumidor
                          (Art. 37) establece claras limitaciones a estas prácticas:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="border rounded-lg p-4 bg-red-50">
                            <h4 className="font-medium mb-2 text-red-800">Prácticas prohibidas</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>
                                Llamadas o visitas en horarios inconvenientes (antes de las 8:00 y después de las 20:00
                                horas)
                              </li>
                              <li>Envío de comunicaciones que aparenten ser documentos judiciales</li>
                              <li>Visitas o llamadas al lugar de trabajo del deudor</li>
                              <li>
                                Comunicaciones a terceros ajenos a la deuda (vecinos, familiares, compañeros de trabajo)
                              </li>
                              <li>Amenazas, hostigamiento o uso de lenguaje ofensivo</li>
                              <li>Informar sobre la deuda a menores de edad o adultos mayores del hogar</li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-4 bg-green-50">
                            <h4 className="font-medium mb-2 text-green-800">Derechos del deudor</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>
                                Recibir información clara sobre el monto de la deuda, intereses y gastos de cobranza
                              </li>
                              <li>Conocer la identidad del acreedor y de la empresa de cobranza</li>
                              <li>Recibir comprobantes de los pagos realizados</li>
                              <li>Solicitar que las comunicaciones se realicen por escrito o a un correo específico</li>
                              <li>Exigir que cesen las comunicaciones en horarios inconvenientes</li>
                              <li>Denunciar prácticas abusivas ante el SERNAC</li>
                            </ul>
                          </div>
                        </div>

                        <h3 className="font-medium text-lg mt-4">Gastos de cobranza extrajudicial</h3>

                        <p>La ley establece límites a los gastos de cobranza extrajudicial que pueden cobrarte:</p>

                        <div className="overflow-x-auto">
                          <table className="min-w-full border-collapse">
                            <thead>
                              <tr className="bg-blue-50">
                                <th className="border px-4 py-2 text-left">Monto de la deuda</th>
                                <th className="border px-4 py-2 text-left">Porcentaje máximo de gastos de cobranza</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border px-4 py-2">Hasta 10 UF</td>
                                <td className="border px-4 py-2">9%</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border px-4 py-2">Por la parte que exceda de 10 UF y hasta 50 UF</td>
                                <td className="border px-4 py-2">6%</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2">Por la parte que exceda de 50 UF</td>
                                <td className="border px-4 py-2">3%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                          <h4 className="font-medium text-yellow-800 mb-2">¿Qué hacer ante prácticas abusivas?</h4>
                          <ol className="list-decimal pl-5 space-y-1 text-sm">
                            <li>Documenta las prácticas abusivas (graba llamadas, guarda cartas o correos)</li>
                            <li>Solicita por escrito el cese de las prácticas abusivas</li>
                            <li>Presenta una denuncia ante el SERNAC (www.sernac.cl o llamando al 800 700 100)</li>
                            <li>
                              Si las prácticas continúan, puedes presentar una demanda por infracción a la Ley del
                              Consumidor
                            </li>
                          </ol>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="judicial" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
                        Derechos en la cobranza judicial
                      </CardTitle>
                      <CardDescription>Protección durante procesos judiciales de cobro</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          La cobranza judicial ocurre cuando el acreedor presenta una demanda ante los tribunales para
                          exigir el pago de la deuda. Durante este proceso, tienes varios derechos importantes:
                        </p>

                        <div className="space-y-4">
                          <div className="border-l-4 border-blue-400 pl-4 py-2">
                            <h4 className="font-medium">Derecho a ser notificado correctamente</h4>
                            <p className="text-sm">
                              Toda demanda debe ser notificada personalmente o por cédula en tu domicilio. Si la
                              notificación no se realiza correctamente, puedes alegar la nulidad de todo lo obrado en el
                              juicio. Nunca ignores una notificación judicial, ya que podrías perder la oportunidad de
                              defenderte.
                            </p>
                          </div>

                          <div className="border-l-4 border-blue-400 pl-4 py-2">
                            <h4 className="font-medium">Derecho a contestar la demanda</h4>
                            <p className="text-sm">
                              Tienes un plazo para contestar la demanda (generalmente 15 días hábiles). En tu
                              contestación puedes alegar excepciones como la prescripción de la deuda, el pago, la falta
                              de legitimación del demandante, entre otras. Es recomendable buscar asesoría legal para
                              este proceso.
                            </p>
                          </div>

                          <div className="border-l-4 border-blue-400 pl-4 py-2">
                            <h4 className="font-medium">Derecho a solicitar la nulidad de cláusulas abusivas</h4>
                            <p className="text-sm">
                              Si el contrato que origina la deuda contiene cláusulas abusivas (intereses excesivos,
                              renuncias a derechos, etc.), puedes solicitar al juez que las declare nulas. La Ley del
                              Consumidor (Art. 16) establece qué cláusulas se consideran abusivas.
                            </p>
                          </div>

                          <div className="border-l-4 border-blue-400 pl-4 py-2">
                            <h4 className="font-medium">Derecho a oponerse a embargos excesivos</h4>
                            <p className="text-sm">
                              Si se decreta un embargo, tienes derecho a que este sea proporcional a la deuda. Además,
                              existen bienes inembargables como el menaje básico del hogar, herramientas de trabajo, y
                              parte de tu sueldo (solo es embargable hasta el 50% del excedente del sueldo mínimo).
                            </p>
                          </div>

                          <div className="border-l-4 border-blue-400 pl-4 py-2">
                            <h4 className="font-medium">Derecho a proponer formas de pago</h4>
                            <p className="text-sm">
                              En cualquier etapa del juicio, puedes proponer un acuerdo de pago. Si el acreedor acepta,
                              se puede poner término al juicio mediante una transacción judicial. También puedes
                              solicitar facilidades de pago al tribunal (Art. 466 del Código de Procedimiento Civil).
                            </p>
                          </div>
                        </div>

                        <h3 className="font-medium text-lg mt-4">Bienes inembargables</h3>

                        <p>La ley protege ciertos bienes que no pueden ser embargados, incluso si pierdes el juicio:</p>

                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Cama, ropa de cama y vestimenta necesaria para el deudor y su familia</li>
                          <li>Alimentos y combustible para subsistir durante un mes</li>
                          <li>Herramientas e instrumentos necesarios para el ejercicio de la profesión u oficio</li>
                          <li>Libros, máquinas e instrumentos del deudor que ejerce una profesión liberal</li>
                          <li>
                            Uniformes, equipos y elementos de trabajo de miembros de las Fuerzas Armadas y de Orden
                          </li>
                          <li>Parte del sueldo: solo es embargable hasta el 50% del excedente del sueldo mínimo</li>
                          <li>Pensiones alimenticias, de gracia, jubilación, retiro, montepío y otras similares</li>
                        </ul>

                        <div className="bg-red-50 p-4 rounded-lg mt-4">
                          <h4 className="font-medium text-red-800 mb-2">¡Cuidado con las notificaciones falsas!</h4>
                          <p className="text-sm">
                            Algunas empresas de cobranza envían cartas que simulan ser notificaciones judiciales para
                            intimidar a los deudores. Para verificar si realmente existe una demanda en tu contra,
                            puedes:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                            <li>Consultar en el sitio web del Poder Judicial (www.pjud.cl) ingresando tu RUT</li>
                            <li>Verificar que la notificación haya sido realizada por un receptor judicial</li>
                            <li>Comprobar que el documento tenga timbre del tribunal y firma del receptor</li>
                            <li>
                              Si sospechas que es falsa, denuncia al SERNAC por práctica de cobranza extrajudicial
                              abusiva
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="renegociacion" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <ShieldCheck className="h-5 w-5 mr-2 text-blue-500" />
                        Derechos en procedimientos de reorganización y liquidación
                      </CardTitle>
                      <CardDescription>Opciones para personas sobreendeudadas</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          La Ley 20.720 de Reorganización y Liquidación de Activos (conocida como "Ley de Quiebras")
                          establece procedimientos para personas con problemas graves de endeudamiento. Esta ley
                          reconoce dos procedimientos principales para personas naturales:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="border rounded-lg p-4 bg-blue-50">
                            <h4 className="font-medium mb-2 text-blue-800">Procedimiento de Renegociación</h4>
                            <p className="text-sm mb-2">
                              Permite renegociar tus deudas con todos tus acreedores en un solo procedimiento, bajo la
                              supervisión de la Superintendencia de Insolvencia y Reemprendimiento.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Es gratuito</li>
                              <li>Se suspenden los juicios ejecutivos en tu contra</li>
                              <li>Se congelan los intereses</li>
                              <li>No pueden cortarte servicios básicos</li>
                              <li>Puedes proponer un plan de pagos de hasta 5 años</li>
                              <li>Requiere que tus deudas superen las 80 UF y sean inferiores a 1.500 UF</li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-4 bg-purple-50">
                            <h4 className="font-medium mb-2 text-purple-800">Procedimiento de Liquidación</h4>
                            <p className="text-sm mb-2">
                              Permite liquidar (vender) tus bienes embargables para pagar a tus acreedores y obtener la
                              extinción de las deudas remanentes.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Se venden tus bienes embargables</li>
                              <li>Se extinguen las deudas no pagadas con el producto de la venta</li>
                              <li>Se suspenden todos los juicios en tu contra</li>
                              <li>Conservas los bienes inembargables</li>
                              <li>Puedes comenzar de nuevo sin deudas</li>
                              <li>Quedas en el Boletín Comercial por 5 años</li>
                            </ul>
                          </div>
                        </div>

                        <h3 className="font-medium text-lg mt-4">Derechos durante estos procedimientos</h3>

                        <div className="space-y-4">
                          <div className="border-l-4 border-green-400 pl-4 py-2">
                            <h4 className="font-medium">Derecho a la protección financiera</h4>
                            <p className="text-sm">
                              Durante el Procedimiento de Renegociación, se te concede una "Protección Financiera
                              Concursal" por 30 días (prorrogables por 30 días más). Durante este período:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                              <li>No pueden iniciarse juicios ejecutivos en tu contra</li>
                              <li>Se suspenden los juicios ejecutivos ya iniciados</li>
                              <li>No pueden embargarse tus bienes</li>
                              <li>No pueden cortarte servicios básicos por no pago</li>
                              <li>Se suspende el cómputo de intereses</li>
                            </ul>
                          </div>

                          <div className="border-l-4 border-green-400 pl-4 py-2">
                            <h4 className="font-medium">Derecho a proponer un plan de pagos</h4>
                            <p className="text-sm">
                              En el Procedimiento de Renegociación, tienes derecho a proponer un plan de pagos que puede
                              incluir:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                              <li>Nuevos plazos y condiciones para el pago de las deudas</li>
                              <li>Condonación parcial de las deudas</li>
                              <li>Condonación total o parcial de intereses</li>
                              <li>Venta de algunos bienes para pagar deudas</li>
                              <li>Constitución de garantías</li>
                            </ul>
                          </div>

                          <div className="border-l-4 border-green-400 pl-4 py-2">
                            <h4 className="font-medium">Derecho a la extinción de deudas</h4>
                            <p className="text-sm">
                              En el Procedimiento de Liquidación, una vez vendidos tus bienes embargables y distribuido
                              el producto entre tus acreedores, las deudas remanentes se extinguen. Esto te permite
                              comenzar de nuevo sin deudas, aunque quedarás en el Boletín Comercial por 5 años.
                            </p>
                          </div>

                          <div className="border-l-4 border-green-400 pl-4 py-2">
                            <h4 className="font-medium">Derecho a conservar bienes inembargables</h4>
                            <p className="text-sm">
                              Incluso en el Procedimiento de Liquidación, conservas los bienes inembargables mencionados
                              anteriormente, lo que te permite mantener condiciones mínimas de vida digna.
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg mt-4">
                          <h4 className="font-medium text-blue-800 mb-2">¿Cómo iniciar estos procedimientos?</h4>
                          <p className="text-sm">
                            Para iniciar un Procedimiento de Renegociación o Liquidación, debes presentar una solicitud
                            ante la Superintendencia de Insolvencia y Reemprendimiento. Puedes hacerlo:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                            <li>En línea a través del sitio web www.superir.gob.cl</li>
                            <li>Presencialmente en las oficinas de la Superintendencia</li>
                            <li>Con la asesoría gratuita de la misma Superintendencia</li>
                          </ul>
                          <p className="text-sm mt-2">
                            La Superintendencia ofrece asesoría gratuita para estos procedimientos. Puedes solicitar una
                            hora de atención llamando al 800 800 202.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="prose max-w-none mt-8 mb-8">
                <h2>Otros derechos importantes de los deudores</h2>

                <div className="space-y-6">
                  <div>
                    <h3>Derecho a la prescripción de deudas</h3>
                    <p>
                      Las deudas prescriben después de cierto tiempo si no hay acciones legales o reconocimiento por
                      parte del deudor. Los plazos de prescripción varían según el tipo de deuda:
                    </p>
                    <ul>
                      <li>Deudas comerciales generales: 5 años</li>
                      <li>Tarjetas de crédito y créditos de consumo: 5 años</li>
                      <li>Facturas y boletas: 3 años</li>
                      <li>Cheques, pagarés y letras de cambio: 3 años</li>
                      <li>Deudas de servicios básicos: 2 años</li>
                    </ul>
                    <p>
                      Recuerda que la prescripción no opera automáticamente. Debes alegarla expresamente cuando te
                      demandan.
                    </p>
                  </div>

                  <div>
                    <h3>Derecho a la protección de datos personales</h3>
                    <p>
                      La Ley 19.628 sobre Protección de la Vida Privada establece que los datos sobre obligaciones
                      económicas solo pueden permanecer en registros como DICOM por un tiempo limitado:
                    </p>
                    <ul>
                      <li>Deudas impagas: máximo 5 años desde que la obligación se hizo exigible</li>
                      <li>Deudas pagadas: máximo 3 años desde el pago</li>
                    </ul>
                    <p>
                      Además, tienes derecho a solicitar la eliminación de tus datos de estos registros si la deuda está
                      prescrita, ha sido pagada, o si la información es errónea.
                    </p>
                  </div>

                  <div>
                    <h3>Derecho a la información y educación financiera</h3>
                    <p>
                      La Ley 20.555 (conocida como "SERNAC Financiero") establece que las instituciones financieras
                      deben proporcionarte información clara, completa y oportuna sobre tus productos financieros,
                      incluyendo:
                    </p>
                    <ul>
                      <li>Carga Anual Equivalente (CAE) de los créditos</li>
                      <li>Costo total del crédito</li>
                      <li>Condiciones de prepago</li>
                      <li>Gastos asociados</li>
                      <li>Información periódica sobre el estado de tus deudas</li>
                    </ul>
                  </div>

                  <div>
                    <h3>Derecho al prepago</h3>
                    <p>
                      La Ley 18.010 establece que tienes derecho a pagar anticipadamente tus créditos, aunque el
                      acreedor puede cobrarte una comisión de prepago que no puede exceder:
                    </p>
                    <ul>
                      <li>1,5% del capital que prepagues, en créditos de hasta UF 5.000</li>
                      <li>3% del capital que prepagues, en créditos superiores a UF 5.000</li>
                    </ul>
                    <p>
                      En créditos hipotecarios para vivienda y créditos de consumo, no se puede cobrar comisión por
                      prepagos parciales inferiores al 20% del valor del crédito.
                    </p>
                  </div>
                </div>

                <h2>¿Qué hacer si tus derechos son vulnerados?</h2>

                <p>
                  Si consideras que tus derechos como deudor han sido vulnerados, puedes tomar las siguientes acciones:
                </p>

                <ol>
                  <li>
                    <strong>Reclamo directo:</strong> Presenta un reclamo formal por escrito ante la empresa o
                    institución financiera, detallando la situación y solicitando una solución. Guarda una copia del
                    reclamo y de la respuesta.
                  </li>
                  <li>
                    <strong>Denuncia al SERNAC:</strong> Si no obtienes respuesta o esta no es satisfactoria, presenta
                    una denuncia ante el Servicio Nacional del Consumidor (SERNAC) a través de su sitio web, oficinas o
                    llamando al 800 700 100.
                  </li>
                  <li>
                    <strong>Denuncia a la CMF:</strong> Si se trata de una institución financiera, también puedes
                    denunciar ante la Comisión para el Mercado Financiero (CMF) a través de su sitio web o llamando al
                    600 831 0000.
                  </li>
                  <li>
                    <strong>Acción judicial:</strong> Puedes presentar una demanda por infracción a la Ley del
                    Consumidor ante el Juzgado de Policía Local correspondiente a tu domicilio. Para montos pequeños, no
                    necesitas abogado.
                  </li>
                  <li>
                    <strong>Mediación colectiva:</strong> Si el problema afecta a muchos consumidores, el SERNAC puede
                    iniciar una mediación colectiva con la empresa.
                  </li>
                </ol>

                <div className="bg-gray-100 p-4 rounded-lg my-6">
                  <h3 className="text-lg font-medium mb-2">Recuerda siempre</h3>

                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Guarda toda la documentación:</strong> Contratos, comprobantes de pago, cartas de
                      cobranza, correos electrónicos y grabaciones de llamadas pueden ser evidencia crucial.
                    </li>
                    <li>
                      <strong>Comunícate por escrito:</strong> Siempre que sea posible, comunícate con los acreedores
                      por escrito y guarda copias de tus comunicaciones.
                    </li>
                    <li>
                      <strong>Conoce tus deudas:</strong> Solicita periódicamente tu informe de deudas en el Boletín
                      Comercial para verificar que la información sea correcta.
                    </li>
                    <li>
                      <strong>Busca asesoría legal:</strong> En casos complejos, es recomendable consultar con un
                      abogado especializado o con la Corporación de Asistencia Judicial.
                    </li>
                    <li>
                      <strong>No ignores las notificaciones judiciales:</strong> Si recibes una notificación judicial,
                      responde dentro del plazo legal aunque creas que la deuda está prescrita o es injusta.
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
                        <Link href="/deudas-prescritas" className="text-blue-600 hover:underline flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          ¿Cuándo prescriben las deudas en Chile?
                        </Link>
                      </li>
                      <li>
                        <Link href="/cobranza-falsa" className="text-blue-600 hover:underline flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          ¿Qué hacer si me llega una carta falsa de cobranza judicial?
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
                        <span className="font-medium">Superintendencia de Insolvencia:</span>
                        <span className="ml-2">800 800 202</span>
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
                      Si enfrentas problemas con cobranzas abusivas o necesitas orientación sobre tus derechos como
                      deudor, nuestros abogados pueden ayudarte.
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
