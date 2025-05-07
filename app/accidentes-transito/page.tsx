import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Car,
  AlertTriangle,
  FileText,
  Phone,
  Scale,
  Clock,
  HelpCircle,
  CheckCircle,
  Info,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PageAds } from "@/components/page-ads"
import { SidebarAds } from "@/components/sidebar-ads"
import { AdUnit } from "@/components/ad-unit"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Accidentes de Tránsito en Chile: Qué Hacer y Tus Derechos | LegalPO",
  description:
    "Aprende qué hacer después de un accidente de tránsito en Chile, conoce tus derechos, qué cubre el SOAP y cuándo demandar para recibir compensación.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/accidentes-transito",
  },
}

export default function AccidentesTransitoPage() {
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
                <li className="font-medium text-foreground">Accidentes de tránsito</li>
              </ol>
            </nav>
          </div>

          <PageAds />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                  Accidentes de Tránsito en Chile: Guía Completa
                </h1>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>Actualizado: Mayo 2025</span>
                  <span className="mx-2">•</span>
                  <FileText className="mr-1 h-4 w-4" />
                  <span>Tiempo de lectura: 15 min</span>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <p className="text-lg font-medium text-blue-900">
                    En Chile, toda persona que sufre un accidente de tránsito tiene derecho a recibir atención médica
                    inmediata, determinar responsabilidades y, en ciertos casos, obtener una indemnización por los daños
                    sufridos.
                  </p>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2>Introducción a los accidentes de tránsito en Chile</h2>

                <p>
                  Los accidentes de tránsito representan una de las principales causas de lesiones y fallecimientos en
                  Chile. Según estadísticas de la Comisión Nacional de Seguridad de Tránsito (CONASET), cada año se
                  registran aproximadamente 85.000 accidentes de tránsito en el país, con más de 1.500 fallecidos y
                  cerca de 50.000 lesionados.
                </p>

                <p>
                  Enfrentarse a un accidente de tránsito puede ser una experiencia traumática y confusa. Conocer tus
                  derechos y las acciones que debes tomar inmediatamente después del accidente es fundamental para
                  proteger tu salud, tus derechos legales y asegurar una compensación justa por los daños sufridos.
                </p>

                <p>
                  En esta guía completa, abordaremos todos los aspectos relacionados con los accidentes de tránsito en
                  Chile: desde qué hacer inmediatamente después del accidente, cómo funcionan los seguros, cuáles son
                  tus derechos legales, hasta cómo obtener una compensación adecuada por los daños sufridos.
                </p>

                <h2>Marco legal de los accidentes de tránsito en Chile</h2>

                <p>
                  En Chile, los accidentes de tránsito están regulados principalmente por la Ley de Tránsito (Ley N°
                  18.290), la Ley del Seguro Obligatorio de Accidentes Personales (SOAP, Ley N° 18.490), el Código Civil
                  y el Código Penal.
                </p>

                <p>
                  La Ley de Tránsito establece las normas de circulación, los deberes de los conductores y las sanciones
                  por infracciones. También define lo que constituye un accidente de tránsito: "suceso imprevisto en el
                  que participa un vehículo en marcha en vías de uso público, causando daños a personas o bienes".
                </p>

                <p>
                  Por su parte, la Ley del SOAP establece la obligatoriedad de contar con un seguro que cubra los daños
                  personales causados por accidentes de tránsito. Este seguro es obligatorio para todos los vehículos
                  motorizados que circulen en el territorio nacional.
                </p>

                <p>
                  El Código Civil, en sus artículos 2314 y siguientes, regula la responsabilidad civil por los daños
                  causados a terceros, estableciendo la obligación de indemnizar cuando existe culpa o negligencia.
                </p>

                <p>
                  Finalmente, el Código Penal tipifica los cuasidelitos de homicidio y lesiones (artículos 490 a 492),
                  aplicables cuando un accidente de tránsito resulta en lesiones graves o muerte debido a imprudencia o
                  negligencia del conductor.
                </p>
              </div>

              <Tabs defaultValue="que-hacer" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="que-hacer" className="text-sm">
                    Qué hacer
                  </TabsTrigger>
                  <TabsTrigger value="derechos" className="text-sm">
                    Tus derechos
                  </TabsTrigger>
                  <TabsTrigger value="compensacion" className="text-sm">
                    Compensación
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="que-hacer" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />
                        Pasos inmediatos tras un accidente
                      </CardTitle>
                      <CardDescription>
                        Acciones que debes tomar en los primeros momentos después de un accidente
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-4 mt-2">
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            1
                          </div>
                          <div>
                            <h3 className="font-medium">Llamar a Carabineros (133)</h3>
                            <p className="text-muted-foreground">
                              Es fundamental que Carabineros acuda al lugar para constatar los hechos y realizar el
                              parte policial, que será clave para cualquier trámite posterior. Si hay lesionados,
                              también debes llamar a una ambulancia (131).
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            2
                          </div>
                          <div>
                            <h3 className="font-medium">Registrar datos de los involucrados</h3>
                            <p className="text-muted-foreground">
                              Anota nombres, RUT, teléfonos, direcciones, datos del vehículo (patente, marca, modelo),
                              compañía de seguros y número de póliza. Si el conductor no es el dueño del vehículo,
                              registra también los datos del propietario.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            3
                          </div>
                          <div>
                            <h3 className="font-medium">Documentar la escena</h3>
                            <p className="text-muted-foreground">
                              Toma fotografías del lugar, posición de los vehículos, daños visibles y cualquier elemento
                              relevante como señales de tránsito o marcas en el pavimento. Estas evidencias serán
                              cruciales para determinar responsabilidades y para los trámites con las aseguradoras.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            4
                          </div>
                          <div>
                            <h3 className="font-medium">Buscar testigos</h3>
                            <p className="text-muted-foreground">
                              Si hay testigos, solicita sus datos de contacto (nombre, teléfono, correo electrónico). Su
                              testimonio puede ser crucial para determinar responsabilidades, especialmente en casos
                              donde hay versiones contradictorias sobre cómo ocurrió el accidente.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            5
                          </div>
                          <div>
                            <h3 className="font-medium">Atención médica</h3>
                            <p className="text-muted-foreground">
                              Acude a un centro asistencial (SAPU o servicio de urgencia) incluso si no presentas
                              lesiones evidentes. Algunas lesiones pueden manifestarse horas o días después. Es
                              importante que quede un registro médico de tu estado de salud después del accidente.
                            </p>
                          </div>
                        </li>
                      </ol>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                        <h4 className="font-medium text-yellow-800 mb-1">Importante</h4>
                        <p className="text-sm text-yellow-700">
                          Nunca admitas culpabilidad en el lugar del accidente. Las declaraciones que hagas pueden ser
                          utilizadas posteriormente en tu contra. Limítate a intercambiar información y esperar a que
                          Carabineros tome las declaraciones correspondientes.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="derechos" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <Scale className="h-5 w-5 mr-2 text-blue-500" />
                        Tus derechos legales
                      </CardTitle>
                      <CardDescription>
                        Derechos que te asisten como víctima de un accidente de tránsito
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="font-medium text-blue-900 mb-2">Derecho a atención médica</h3>
                          <p>
                            Toda persona lesionada en un accidente de tránsito tiene derecho a recibir atención médica
                            de urgencia, independientemente de su situación previsional. Los centros asistenciales están
                            obligados a prestar atención sin exigir garantías previas.
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="font-medium text-blue-900 mb-2">Derecho a cobertura del SOAP</h3>
                          <p>
                            El Seguro Obligatorio de Accidentes Personales (SOAP) cubre gastos médicos, incapacidad y
                            muerte, con límites establecidos por ley. Este seguro opera independientemente de quién sea
                            el responsable del accidente y cubre a todas las personas afectadas, incluidos peatones y
                            pasajeros.
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="font-medium text-blue-900 mb-2">Derecho a indemnización</h3>
                          <p>
                            Si no fuiste responsable del accidente, tienes derecho a reclamar indemnización por daños
                            materiales, lesiones físicas y daño moral. Esta indemnización puede incluir gastos médicos
                            no cubiertos por el SOAP, lucro cesante (ingresos no percibidos debido a la incapacidad),
                            daño emergente (gastos directos causados por el accidente) y daño moral (sufrimiento
                            psicológico).
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="font-medium text-blue-900 mb-2">Derecho a asistencia jurídica</h3>
                          <p>
                            Puedes acceder a asistencia jurídica gratuita a través de la Corporación de Asistencia
                            Judicial si no cuentas con recursos para contratar un abogado. También tienes derecho a ser
                            informado sobre el proceso judicial y a participar en él como víctima.
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="font-medium text-blue-900 mb-2">Derecho a la reparación del vehículo</h3>
                          <p>
                            Si cuentas con seguro contra daños a terceros o seguro automotriz completo, tienes derecho a
                            que la compañía aseguradora cubra los costos de reparación según los términos de tu póliza.
                            Si el responsable del accidente es el otro conductor, su seguro debería cubrir los daños a
                            tu vehículo.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="compensacion" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-green-500" />
                        Compensación y seguros
                      </CardTitle>
                      <CardDescription>Información sobre seguros y cómo obtener compensación</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <h3 className="font-medium text-lg">¿Qué cubre el SOAP?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-2">Gastos médicos</h4>
                            <p className="text-sm text-muted-foreground">
                              Hasta 300 UF por persona para gastos de hospitalización, medicamentos, rehabilitación y
                              otros tratamientos médicos. Incluye traslados, prótesis, implantes y todo lo necesario
                              para la recuperación del paciente.
                            </p>
                          </div>
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-2">Incapacidad</h4>
                            <p className="text-sm text-muted-foreground">
                              Hasta 300 UF por incapacidad permanente total o parcial, según tabla de porcentajes
                              establecida. La incapacidad debe ser certificada por un médico y el monto dependerá del
                              grado de invalidez determinado.
                            </p>
                          </div>
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-2">Muerte</h4>
                            <p className="text-sm text-muted-foreground">
                              300 UF por fallecimiento, que se pagan a los herederos de la víctima. Este monto se
                              distribuye según las reglas de la sucesión intestada, salvo que exista testamento.
                            </p>
                          </div>
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-2">Gastos funerarios</h4>
                            <p className="text-sm text-muted-foreground">
                              Incluidos dentro del monto por fallecimiento. Cubren los costos del funeral, cremación o
                              inhumación de la víctima.
                            </p>
                          </div>
                        </div>

                        <h3 className="font-medium text-lg mt-6">Tipos de indemnización que puedes reclamar</h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium">Daño emergente</h4>
                              <p className="text-sm text-muted-foreground">
                                Comprende todos los gastos directos ocasionados por el accidente: reparación del
                                vehículo, gastos médicos no cubiertos por el SOAP, medicamentos, traslados, etc.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium">Lucro cesante</h4>
                              <p className="text-sm text-muted-foreground">
                                Son los ingresos que dejaste de percibir debido a la incapacidad temporal o permanente
                                causada por el accidente. Se calcula en base a tus ingresos habituales y el tiempo de
                                recuperación o incapacidad.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium">Daño moral</h4>
                              <p className="text-sm text-muted-foreground">
                                Comprende el sufrimiento psicológico, dolor, angustia, alteración de la calidad de vida
                                y otros perjuicios no patrimoniales causados por el accidente. Su valoración es
                                subjetiva y depende de cada caso.
                              </p>
                            </div>
                          </div>
                        </div>

                        <h3 className="font-medium text-lg mt-6">¿Cuándo demandar?</h3>
                        <p className="mb-4">Es recomendable presentar una demanda civil en los siguientes casos:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Cuando hay lesiones graves o secuelas permanentes</li>
                          <li>Cuando los daños materiales son significativos</li>
                          <li>Cuando el SOAP no cubre todos los gastos médicos</li>
                          <li>Cuando hay pérdida de ingresos por incapacidad laboral</li>
                          <li>Cuando hay daño moral (sufrimiento, dolor, afectación psicológica)</li>
                          <li>Cuando la aseguradora rechaza o minimiza injustamente tu reclamación</li>
                        </ul>

                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                          <h4 className="font-medium text-yellow-800 mb-1">Importante: Plazos</h4>
                          <p className="text-sm text-yellow-700">
                            El plazo para presentar una demanda civil por daños y perjuicios es de 4 años desde la fecha
                            del accidente. Para acciones penales, los plazos varían según la gravedad del delito. Para
                            el cobro del SOAP, el plazo es de un año desde la fecha del accidente.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="prose max-w-none mt-8 mb-8">
                <h2>Procedimiento para reclamar el SOAP</h2>

                <p>
                  El Seguro Obligatorio de Accidentes Personales (SOAP) es un seguro que todo propietario de vehículo
                  motorizado debe contratar por ley. Su objetivo es cubrir los daños corporales que sufran las personas
                  como consecuencia de accidentes de tránsito.
                </p>

                <p>Para reclamar el SOAP, debes seguir estos pasos:</p>

                <ol>
                  <li>
                    <strong>Identificar la compañía aseguradora:</strong> Debes determinar qué compañía aseguradora
                    emitió el SOAP del vehículo involucrado en el accidente. Esta información aparece en el certificado
                    del SOAP, que debe llevarse siempre en el vehículo.
                  </li>
                  <li>
                    <strong>Reunir la documentación necesaria:</strong> Necesitarás el parte policial o constancia del
                    accidente, certificados médicos que acrediten las lesiones, boletas o facturas de gastos médicos, y
                    tu identificación personal.
                  </li>
                  <li>
                    <strong>Presentar la reclamación:</strong> Debes presentar todos los documentos a la compañía
                    aseguradora dentro del plazo de un año desde la fecha del accidente. La reclamación puede hacerse
                    directamente en las oficinas de la aseguradora o a través de su sitio web.
                  </li>
                  <li>
                    <strong>Seguimiento:</strong> La compañía aseguradora tiene un plazo de 10 días hábiles para
                    responder a tu reclamación. Si no recibes respuesta o esta es insatisfactoria, puedes reclamar ante
                    la Comisión para el Mercado Financiero (CMF).
                  </li>
                </ol>

                <p>
                  Es importante destacar que el SOAP opera independientemente de la responsabilidad en el accidente.
                  Esto significa que cubre a todas las víctimas, incluso al conductor responsable del accidente.
                </p>

                <h2>Responsabilidad en los accidentes de tránsito</h2>

                <p>
                  Determinar la responsabilidad en un accidente de tránsito es fundamental para establecer quién debe
                  indemnizar los daños causados. En Chile, la responsabilidad se basa principalmente en el concepto de
                  culpa, que implica negligencia, imprudencia o infracción a las normas de tránsito.
                </p>

                <p>Existen varios factores que se consideran para determinar la responsabilidad:</p>

                <ul>
                  <li>
                    <strong>Infracción a las normas de tránsito:</strong> Si un conductor violó alguna norma de tránsito
                    (exceso de velocidad, no respetar señales, conducir bajo los efectos del alcohol, etc.),
                    generalmente se le atribuirá la responsabilidad.
                  </li>
                  <li>
                    <strong>Presunciones legales:</strong> La Ley de Tránsito establece ciertas presunciones de
                    responsabilidad. Por ejemplo, en colisiones por alcance, generalmente se presume la responsabilidad
                    del conductor que impacta por detrás.
                  </li>
                  <li>
                    <strong>Evidencia física:</strong> Las marcas de frenado, la posición final de los vehículos, los
                    daños en cada vehículo y otras evidencias físicas son fundamentales para reconstruir cómo ocurrió el
                    accidente.
                  </li>
                  <li>
                    <strong>Testimonios:</strong> Las declaraciones de testigos, de los propios conductores y de los
                    pasajeros son importantes para establecer los hechos.
                  </li>
                </ul>

                <p>
                  En algunos casos, puede existir responsabilidad compartida, donde cada conductor tiene un porcentaje
                  de culpa en el accidente. En estos casos, la indemnización se ajusta proporcionalmente según el grado
                  de responsabilidad de cada parte.
                </p>

                <p>
                  Es importante destacar que la determinación de responsabilidad que hace Carabineros en el parte
                  policial no es definitiva. Un juez puede llegar a una conclusión diferente basándose en todas las
                  pruebas presentadas en un juicio.
                </p>

                <h2>El proceso judicial en casos de accidentes de tránsito</h2>

                <p>
                  Cuando un accidente de tránsito resulta en daños significativos, lesiones graves o muerte, es probable
                  que se inicie un proceso judicial. Este proceso puede desarrollarse en el ámbito civil, penal o ambos.
                </p>

                <h3>Proceso civil</h3>

                <p>
                  El proceso civil busca la reparación económica de los daños causados. Se inicia con la presentación de
                  una demanda ante el juzgado civil correspondiente. El demandante (la víctima) debe probar:
                </p>

                <ul>
                  <li>La existencia del accidente</li>
                  <li>Los daños sufridos (materiales y/o personales)</li>
                  <li>La relación causal entre el accidente y los daños</li>
                  <li>La responsabilidad del demandado</li>
                </ul>

                <p>
                  El proceso incluye la presentación de pruebas documentales (parte policial, informes médicos,
                  facturas, etc.), testimoniales (declaraciones de testigos) y periciales (informes de expertos).
                  Finalmente, el juez dictará sentencia estableciendo si procede la indemnización y su monto.
                </p>

                <h3>Proceso penal</h3>

                <p>
                  El proceso penal se inicia cuando el accidente ha provocado lesiones graves o muerte, y existe una
                  posible responsabilidad penal por cuasidelito de lesiones u homicidio. Este proceso puede iniciarse
                  por denuncia de Carabineros, por querella de la víctima o sus familiares, o de oficio por el
                  Ministerio Público.
                </p>

                <p>
                  El fiscal a cargo de la investigación recopilará evidencias, solicitará pericias (como alcoholemia,
                  reconstrucción del accidente, etc.) y tomará declaraciones a los involucrados y testigos. Si considera
                  que hay antecedentes suficientes, formalizará la investigación contra el imputado.
                </p>

                <p>
                  El proceso puede terminar con un juicio oral, donde se determinará la culpabilidad o inocencia del
                  imputado, y en caso de condena, se establecerá la pena correspondiente. También puede terminar con
                  salidas alternativas como la suspensión condicional del procedimiento o acuerdos reparatorios,
                  dependiendo de la gravedad del caso.
                </p>

                <h3>Relación entre ambos procesos</h3>

                <p>
                  Es importante destacar que los procesos civil y penal son independientes, aunque pueden influirse
                  mutuamente. Por ejemplo, una condena penal puede facilitar la obtención de una indemnización civil, ya
                  que establece la responsabilidad del conductor en el accidente.
                </p>

                <p>
                  Sin embargo, incluso si no hay condena penal (por ejemplo, porque se llegó a una salida alternativa),
                  la víctima puede igualmente demandar civilmente para obtener una indemnización por los daños sufridos.
                </p>
              </div>

              <AdUnit slot="1357924680" format="horizontal" position="in-content" />

              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Preguntas frecuentes</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>¿Qué debo hacer si la otra parte no tiene seguro?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">
                        Si el otro conductor no tiene seguro o circula con documentos vencidos, puedes:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Solicitar a Carabineros que deje constancia de esta situación en el parte policial</li>
                        <li>
                          Presentar una demanda civil directamente contra el conductor y/o propietario del vehículo
                        </li>
                        <li>
                          En caso de lesiones, utilizar tu propio SOAP, que cubre a todos los afectados
                          independientemente de la responsabilidad
                        </li>
                        <li>
                          Si el vehículo sin seguro es de propiedad de una empresa, puedes demandar también a la empresa
                          por responsabilidad solidaria
                        </li>
                      </ul>
                      <p className="mt-2">
                        Recuerda que circular sin SOAP es una infracción grave a la Ley de Tránsito, sancionada con
                        multas y posible retención del vehículo.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>¿Cómo se determina la responsabilidad en un accidente?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">La responsabilidad se determina considerando varios factores:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Informe policial de Carabineros</li>
                        <li>Declaraciones de testigos</li>
                        <li>Evidencia física (daños en los vehículos, marcas en el pavimento)</li>
                        <li>Fotografías y videos del accidente</li>
                        <li>Pericias técnicas (cuando son necesarias)</li>
                        <li>Aplicación de las normas de tránsito (Ley 18.290)</li>
                      </ul>
                      <p className="mt-2">
                        En algunos casos, puede haber responsabilidad compartida, donde cada parte asume un porcentaje
                        de la responsabilidad. Por ejemplo, si un conductor excedía la velocidad pero el otro se pasó
                        una luz roja, ambos podrían ser parcialmente responsables.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>¿Cuánto tiempo tengo para cobrar el SOAP?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        El plazo para solicitar la cobertura del SOAP es de un año desde la fecha del accidente. Para
                        hacer efectivo el cobro, debes presentar:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Certificado de atención médica que acredite las lesiones</li>
                        <li>Parte policial o constancia del accidente</li>
                        <li>Boletas o facturas de gastos médicos</li>
                        <li>
                          Certificado de defunción y documentos que acrediten calidad de heredero (en caso de
                          fallecimiento)
                        </li>
                      </ul>
                      <p className="mt-2">
                        Es recomendable iniciar el trámite lo antes posible, presentando la documentación directamente a
                        la compañía aseguradora. Si la aseguradora rechaza injustificadamente tu reclamación, puedes
                        presentar un reclamo ante la Comisión para el Mercado Financiero (CMF).
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>¿Qué pasa si el accidente fue causado por mal estado de la vía?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">
                        Si el accidente fue causado por el mal estado de la vía pública, puedes presentar una demanda
                        contra el organismo responsable del mantenimiento:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Municipalidad: para calles y caminos urbanos</li>
                        <li>Ministerio de Obras Públicas: para rutas nacionales y autopistas concesionadas</li>
                        <li>Empresa concesionaria: en caso de autopistas concesionadas</li>
                      </ul>
                      <p className="mt-2">
                        Para estos casos, es fundamental documentar adecuadamente el estado de la vía (fotografías,
                        videos) y contar con el parte policial que mencione esta circunstancia. También es recomendable
                        solicitar una inspección pericial del lugar para certificar las condiciones deficientes.
                      </p>
                      <p className="mt-2">
                        Estos casos suelen ser más complejos y generalmente requieren la asistencia de un abogado
                        especializado.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>¿Puedo reclamar por daños psicológicos tras un accidente?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">
                        Sí, los daños psicológicos forman parte del daño moral que puede ser indemnizado. Estos pueden
                        incluir:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Estrés postraumático</li>
                        <li>Ansiedad y depresión derivadas del accidente</li>
                        <li>Fobias (como miedo a conducir o a viajar en vehículos)</li>
                        <li>Alteraciones del sueño</li>
                        <li>Deterioro de la calidad de vida</li>
                      </ul>
                      <p className="mt-2">
                        Para acreditar estos daños, es recomendable contar con informes de psicólogos o psiquiatras que
                        diagnostiquen y documenten las afecciones psicológicas sufridas como consecuencia del accidente.
                        También es útil presentar testimonios de familiares o amigos que puedan dar cuenta de los
                        cambios en tu comportamiento o estado emocional.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <AdUnit slot="2468013579" format="horizontal" position="in-content" />

              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-blue-500" />
                  ¿Necesitas ayuda con tu caso?
                </h2>
                <p className="mb-4">
                  En LegalPO podemos ayudarte a analizar tu situación específica y orientarte sobre los pasos a seguir
                  después de un accidente de tránsito.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="flex-1">
                    <Link href="/analyze">
                      <FileText className="h-4 w-4 mr-2" />
                      Analizar mi documento
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href="https://wa.me/56961458118">
                      <Phone className="h-4 w-4 mr-2" />
                      Contactar abogado
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <SidebarAds />

              <Card className="mt-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Recursos útiles</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="https://www.conaset.cl/programa/conduccion-segura/"
                        className="text-blue-600 hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Car className="h-4 w-4 mr-2" />
                        Consejos de conducción segura (CONASET)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.svs.cl/portal/principal/605/w3-article-12818.html"
                        className="text-blue-600 hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Información oficial sobre el SOAP
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.chileatiende.gob.cl/fichas/5275-denuncia-por-accidente-de-transito-con-lesionados-o-fallecidos"
                        className="text-blue-600 hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Denuncias por accidentes (ChileAtiende)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.bcn.cl/leychile/navegar?idNorma=29708"
                        className="text-blue-600 hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Scale className="h-4 w-4 mr-2" />
                        Ley de Tránsito (18.290)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.bcn.cl/leychile/navegar?idNorma=29889"
                        className="text-blue-600 hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Info className="h-4 w-4 mr-2" />
                        Ley del SOAP (18.490)
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-blue-50 border-blue-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Scale className="h-5 w-5 mr-2 text-blue-500" />
                    Marco legal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="text-sm">
                      <strong className="block text-blue-800">Ley de Tránsito (18.290)</strong>
                      <span className="text-muted-foreground">
                        Regula la circulación de vehículos y las normas de conducción
                      </span>
                    </li>
                    <li className="text-sm">
                      <strong className="block text-blue-800">Ley del SOAP (18.490)</strong>
                      <span className="text-muted-foreground">
                        Establece el seguro obligatorio de accidentes personales
                      </span>
                    </li>
                    <li className="text-sm">
                      <strong className="block text-blue-800">Código Civil (Art. 2314 y siguientes)</strong>
                      <span className="text-muted-foreground">Regula la responsabilidad civil por daños</span>
                    </li>
                    <li className="text-sm">
                      <strong className="block text-blue-800">Código Penal (Art. 490-492)</strong>
                      <span className="text-muted-foreground">Tipifica los cuasidelitos de homicidio y lesiones</span>
                    </li>
                    <li className="text-sm">
                      <strong className="block text-blue-800">Ley 20.850 (Ley Emilia)</strong>
                      <span className="text-muted-foreground">
                        Aumenta sanciones para conductores en estado de ebriedad que causen lesiones graves o muerte
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Estadísticas de accidentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-2">
                    <p>Según CONASET, en Chile ocurren aproximadamente:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>85.000 accidentes de tránsito al año</li>
                      <li>1.500 fallecidos</li>
                      <li>50.000 lesionados</li>
                    </ul>
                    <p className="mt-2">Las principales causas son:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Imprudencia del conductor (30%)</li>
                      <li>Velocidad imprudente (20%)</li>
                      <li>Alcohol en el conductor (15%)</li>
                      <li>Imprudencia del peatón (10%)</li>
                      <li>Otras causas (25%)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <PageAds />
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
