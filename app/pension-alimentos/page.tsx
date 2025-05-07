import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Calculator, AlertTriangle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageAds } from "@/components/page-ads"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Pensión de Alimentos: Cómo se Calcula y Qué Hacer si No Pagan | LegalPO",
  description:
    "Todo lo que necesitas saber sobre la pensión de alimentos en Chile: cómo se solicita, cómo se calcula y qué hacer si no pagan.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/pension-alimentos",
  },
}

export default function PensionAlimentosPage() {
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
                <li className="font-medium text-foreground">Pensión de alimentos</li>
              </ol>
            </nav>
          </div>

          <PageAds />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                  Pensión de Alimentos: Todo lo que necesitas saber
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
                    La pensión de alimentos en Chile es un derecho fundamental de niños, niñas y adolescentes. Se
                    calcula considerando las necesidades del menor y la capacidad económica del alimentante, y existen
                    mecanismos legales para garantizar su cumplimiento.
                  </p>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2>Introducción a la pensión de alimentos en Chile</h2>
                
                <p>
                  La pensión de alimentos es un derecho esencial para garantizar el bienestar y desarrollo integral de los 
                  niños, niñas y adolescentes en Chile. Este derecho está consagrado en diversas normativas nacionales e 
                  internacionales, como la Convención sobre los Derechos del Niño, la Constitución Política de la República 
                  y el Código Civil chileno.
                </p>
                
                <p>
                  En términos legales, la pensión de alimentos comprende todo lo necesario para la subsistencia del alimentario: 
                  alimentación, habitación, vestimenta, salud, educación, recreación y otros gastos indispensables para su 
                  desarrollo. No se limita, por tanto, a la comida, sino que abarca todas las necesidades básicas de la persona.
                </p>
                
                <p>
                  En Chile, según estadísticas del Poder Judicial, anualmente se presentan más de 60.000 demandas por pensión 
                  de alimentos, lo que refleja la importancia y frecuencia de este tema en nuestra sociedad. Además, con la 
                  reciente implementación del Registro Nacional de Deudores de Pensiones de Alimentos en 2022, el Estado ha 
                  fortalecido los mecanismos para garantizar el cumplimiento de esta obligación.
                </p>

                <h2>Marco legal de la pensión de alimentos</h2>
                
                <p>
                  El derecho a alimentos y la obligación de proporcionarlos están regulados principalmente por las siguientes 
                  normativas:
                </p>
                
                <ul>
                  <li>
                    <strong>Código Civil (artículos 321 a 337):</strong> Establece quiénes están obligados a proporcionar 
                    alimentos, el orden de prelación entre los obligados, y los criterios para determinar el monto.
                  </li>
                  <li>
                    <strong>Ley 14.908 sobre Abandono de Familia y Pago de Pensiones Alimenticias:</strong> Regula el 
                    procedimiento para solicitar alimentos, las medidas para asegurar su cumplimiento y las sanciones 
                    por incumplimiento.
                  </li>
                  <li>
                    <strong>Ley 19.968 que crea los Tribunales de Familia:</strong> Establece el procedimiento especial 
                    para tramitar las causas de alimentos ante los Tribunales de Familia.
                  </li>
                  <li>
                    <strong>Ley 21.389 (2022):</strong> Crea el Registro Nacional de Deudores de Pensiones de Alimentos 
                    y establece nuevas medidas para garantizar el pago de las pensiones.
                  </li>
                  <li>
                    <strong>Convención sobre los Derechos del Niño:</strong> Tratado internacional ratificado por Chile 
                    que reconoce el derecho de todo niño a un nivel de vida adecuado para su desarrollo.
                  </li>
                </ul>
                
                <p>
                  Este marco legal establece que los padres son los primeros obligados a proporcionar alimentos a sus hijos, 
                  independientemente de si tienen o no el cuidado personal de ellos. La obligación alimenticia es de orden 
                  público, lo que significa que no se puede renunciar a ella y tiene preferencia sobre cualquier otra obligación 
                  económica del alimentante.
                </p>
              </div>

              <Tabs defaultValue="solicitud" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="solicitud" className="text-sm">
                    Cómo solicitarla
                  </TabsTrigger>
                  <TabsTrigger value="calculo" className="text-sm">
                    Cómo se calcula
                  </TabsTrigger>
                  <TabsTrigger value="impago" className="text-sm">
                    Qué hacer si no pagan
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="solicitud" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-blue-500" />
                        Procedimiento para solicitar pensión de alimentos
                      </CardTitle>
                      <CardDescription>
                        Pasos para iniciar el proceso de demanda por pensión de alimentos
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-4 mt-2">
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            1
                          </div>
                          <div>
                            <h3 className="font-medium">Reunir documentación</h3>
                            <p className="text-muted-foreground">
                              Certificados de nacimiento de los hijos, comprobantes de gastos (educación, salud,
                              vivienda, etc.), liquidaciones de sueldo o boletas de honorarios del demandado (si se
                              tienen), y cualquier otro documento que acredite las necesidades del alimentario y la
                              capacidad económica del alimentante.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            2
                          </div>
                          <div>
                            <h3 className="font-medium">Presentar la demanda</h3>
                            <p className="text-muted-foreground">
                              Puedes hacerlo a través de un abogado particular o solicitar asistencia gratuita en la
                              Corporación de Asistencia Judicial. La demanda se presenta ante el Juzgado de Familia
                              correspondiente al domicilio del demandado o del niño. También puedes presentarla en línea
                              a través del portal del Poder Judicial.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            3
                          </div>
                          <div>
                            <h3 className="font-medium">Audiencia preparatoria</h3>
                            <p className="text-muted-foreground">
                              El tribunal fijará una fecha para la audiencia preparatoria donde se intentará llegar a un
                              acuerdo. Si no hay acuerdo, se fijarán los puntos de prueba y se citará a audiencia de
                              juicio. En esta audiencia, el juez puede fijar una pensión provisoria mientras dura el juicio.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            4
                          </div>
                          <div>
                            <h3 className="font-medium">Audiencia de juicio</h3>
                            <p className="text-muted-foreground">
                              Se presentan las pruebas (testigos, documentos, etc.) y el juez dictará sentencia,
                              estableciendo el monto de la pensión y la forma de pago. La sentencia puede ser apelada
                              dentro de los 10 días siguientes a su notificación.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                            5
                          </div>
                          <div>
                            <h3 className="font-medium">Liquidación y pago</h3>
                            <p className="text-muted-foreground">
                              Una vez dictada la sentencia, se establece la forma de pago (depósito en cuenta, descuento
                              por planilla, etc.) y se inicia el pago mensual de la pensión. El tribunal puede ordenar
                              la retención del monto de la pensión directamente del sueldo del alimentante.
                            </p>
                          </div>
                        </li>
                      </ol>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                        <h4 className="font-medium text-yellow-800 mb-1">Importante</h4>
                        <p className="text-sm text-yellow-700">
                          Desde la presentación de la demanda, el juez puede fijar una pensión provisoria mientras dura
                          el juicio, si existen antecedentes suficientes. Esta pensión se paga hasta que se dicte la
                          sentencia definitiva y puede ser modificada durante el proceso si cambian las circunstancias.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="calculo" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <Calculator className="h-5 w-5 mr-2 text-green-500" />
                        Cómo se calcula la pensión de alimentos
                      </CardTitle>
                      <CardDescription>Factores que determinan el monto de la pensión</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          En Chile, no existe una fórmula matemática exacta para calcular la pensión de alimentos. El
                          juez considera diversos factores para determinar el monto, buscando un equilibrio entre las
                          necesidades del alimentario y la capacidad económica del alimentante.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="border rounded-lg p-4 bg-blue-50">
                            <h4 className="font-medium mb-2 text-blue-800">Necesidades del alimentario</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Gastos de alimentación diaria</li>
                              <li>Educación (matrícula, mensualidad, útiles, uniforme, transporte escolar)</li>
                              <li>Salud (tratamientos, medicamentos, controles médicos, seguros)</li>
                              <li>Vivienda (proporcional al arriendo o dividendo, gastos comunes)</li>
                              <li>Vestuario y calzado</li>
                              <li>Recreación y actividades extracurriculares</li>
                              <li>Movilización</li>
                              <li>Gastos básicos (luz, agua, gas, internet)</li>
                              <li>Cuidado personal (artículos de aseo, peluquería)</li>
                              <li>Necesidades especiales (tratamientos específicos, terapias)</li>
                            </ul>
                          </div>
                          <div className="border rounded-lg p-4 bg-green-50">
                            <h4 className="font-medium mb-2 text-green-800">Capacidad económica del alimentante</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Ingresos mensuales (sueldo, honorarios, comisiones)</li>
                              <li>Patrimonio (bienes raíces, vehículos, inversiones)</li>
                              <li>Habilidades laborales, profesión y nivel educacional</li>
                              <li>Otras cargas familiares (otros hijos, padres dependientes)</li>
                              <li>Gastos personales razonables (arriendo, alimentación, transporte)</li>
                              <li>Deudas y compromisos financieros</li>
                              <li>Situación laboral actual (empleado, independiente, cesante)</li>
                              <li>Beneficios adicionales (bonos, gratificaciones, utilidades)</li>
                              <li>Expectativas de ingresos futuros</li>
                            </ul>
                          </div>
                        </div>

                        <h3 className="font-medium text-lg mt-4">Montos referenciales</h3>
                        <p className="mb-2">Aunque no hay montos fijos, existen algunos parámetros referenciales:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            <strong>Mínimo legal:</strong> 40% del ingreso mínimo mensual por cada hijo (aproximadamente
                            $160.000 en 2025). Este monto aplica cuando no se puede determinar la capacidad económica
                            del alimentante o cuando este no tiene ingresos suficientes.
                          </li>
                          <li>
                            <strong>Porcentaje habitual:</strong> Entre el 20% y 30% de los ingresos del alimentante por
                            cada hijo. Este porcentaje puede variar según la cantidad de hijos y las necesidades específicas
                            de cada uno.
                          </li>
                          <li>
                            <strong>Tope máximo:</strong> 50% de los ingresos totales del alimentante (considerando
                            todas sus cargas alimentarias). Este límite busca garantizar que el alimentante pueda
                            mantener su propia subsistencia.
                          </li>
                        </ul>

                        <div className="bg-blue-50 p-4 rounded-lg mt-4">
                          <h4 className="font-medium text-blue-800 mb-2">Pensión compartida</h4>
                          <p className="text-sm">
                            Cuando ambos padres tienen ingresos similares y el cuidado personal es compartido, el juez
                            puede establecer una pensión proporcional a los ingresos de cada uno y al tiempo que el hijo
                            pasa con cada padre. En estos casos, se considera el principio de corresponsabilidad parental,
                            donde ambos padres contribuyen equitativamente según sus posibilidades.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="impago" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                        Qué hacer si no pagan la pensión
                      </CardTitle>
                      <CardDescription>Medidas legales ante el incumplimiento del pago</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          Desde 2022, con la Ley 21.389, existe el Registro Nacional de Deudores de Pensiones de
                          Alimentos. Si alguien debe más de 3 cuotas consecutivas o 5 discontinuas, se pueden tomar
                          diversas medidas:
                        </p>

                        <div className="space-y-4 mt-4">
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h4 className="font-medium text-red-800 mb-2 flex items-center">
                              <AlertTriangle className="h-4 w-4 mr-2" />
                              Medidas inmediatas
                            </h4>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Retención de la devolución de impuestos por parte del SII</li>
                              <li>Retención de fondos en cuentas bancarias</li>
                              <li>Suspensión de licencia de conducir hasta por 6 meses</li>
                              <li>Arraigo nacional (prohibición de salir del país)</li>
                              <li>Retención de cualquier pago que deba recibir de instituciones públicas</li>
                            </ul>
                          </div>

                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h4 className="font-medium text-orange-800 mb-2">Restricciones adicionales</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Imposibilidad de renovar pasaporte</li>
                              <li>Bloqueo para obtener créditos bancarios y tarjetas de crédito</li>
                              <li>Impedimento para postular a cargos públicos</li>
                              <li>Imposibilidad de inscribir vehículos a su nombre</li>
                              <li>Inclusión en boletines comerciales (DICOM)</li>
                              <li>Prohibición de renovar carnet de identidad por más de 5 años</li>
                              <li>Imposibilidad de recibir pagos del Estado por servicios prestados</li>
                            </ul>
                          </div>

                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-medium text-purple-800 mb-2">Procedimiento judicial</h4>
                            <ol className="list-decimal pl-5 space-y-1">
                              <li>Solicitar liquidación de deuda ante el tribunal (se calcula el monto total adeudado)</li>
                              <li>Presentar solicitud de apremios (arresto, arraigo, retención)</li>
                              <li>El tribunal puede decretar arresto nocturno (22:00 a 06:00 hrs)</li>
                              <li>En caso de reincidencia, puede decretarse arresto completo hasta por 15 días</li>
                              <li>Solicitar retención de remuneraciones directamente al empleador (hasta el 50% del sueldo)</li>
                              <li>Embargar y rematar bienes del deudor para pagar la deuda</li>
                            </ol>
                          </div>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                          <h4 className="font-medium text-blue-800 mb-1">Nuevo: Pago garantizado</h4>
                          <p className="text-sm">
                            La nueva ley establece que, en caso de incumplimiento, el Estado puede adelantar hasta el
                            50% de la pensión con un tope de 3 UTM (aproximadamente $180.000), monto que luego cobrará
                            al deudor. Este beneficio se solicita a través del tribunal que dictó la sentencia de alimentos
                            y está sujeto a ciertos requisitos.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="prose max-w-none mt-8 mb-8">
                <h2>El proceso judicial de pensión de alimentos</h2>
                
                <p>
                  El proceso judicial de pensión de alimentos se tramita ante los Tribunales de Familia y se rige por un 
                  procedimiento especial establecido en la Ley 19.968. A continuación, explicamos en detalle cada etapa 
                  del proceso:
                </p>
                
                <h3>Presentación de la demanda</h3>
                
                <p>
                  La demanda debe contener:
                </p>
                
                <ul>
                  <li>Identificación completa del demandante y del demandado</li>
                  <li>Relación de parentesco o vínculo legal que justifica la obligación alimenticia</li>
                  <li>Descripción de las necesidades del alimentario</li>
                  <li>Información sobre la capacidad económica del alimentante</li>
                  <li>Monto de pensión solicitado</li>
                  <li>Documentos que respaldan la demanda (certificados de nacimiento, comprobantes de gastos, etc.)</li>
                </ul>
                
                <p>
                  La demanda puede presentarse personalmente en el tribunal, a través de un abogado, o en línea mediante 
                  la Oficina Judicial Virtual del Poder Judicial.
                </p>
                
                <h3>Admisión y notificación</h3>
                
                <p>
                  Una vez presentada la demanda, el tribunal verifica que cumpla con los requisitos legales y la admite a 
                  tramitación. Luego, ordena notificar al demandado, quien tendrá un plazo para contestar la demanda. La 
                  notificación debe ser personal, lo que a veces puede complicar el proceso si el demandado es difícil de ubicar.
                </p>
                
                <h3>Audiencia preparatoria</h3>
                
                <p>
                  En esta audiencia, que es obligatoria para ambas partes, el juez:
                </p>
                
                <ul>
                  <li>Intenta que las partes lleguen a un acuerdo</li>
                  <li>Si no hay acuerdo, fija los puntos de prueba</li>
                  <li>Determina qué pruebas se admitirán</li>
                  <li>Puede fijar una pensión provisoria si hay antecedentes suficientes</li>
                  <li>Cita a la audiencia de juicio</li>
                </ul>
                
                <p>
                  Si el demandado no asiste a esta audiencia sin causa justificada, el juez puede presumir que acepta los 
                  hechos expuestos en la demanda.
                </p>
                
                <h3>Audiencia de juicio</h3>
                
                <p>
                  En esta audiencia:
                </p>
                
                <ul>
                  <li>Se reciben las pruebas (documentos, testigos, informes periciales, etc.)</li>
                  <li>Las partes exponen sus argumentos</li>
                  <li>El juez dicta sentencia, idealmente en la misma audiencia o dentro de los 15 días siguientes</li>
                </ul>
                
                <p>
                  La sentencia establece el monto de la pensión, la forma de pago, la fecha de inicio del pago y cualquier 
                  otra medida necesaria para asegurar su cumplimiento.
                </p>
                
                <h3>Recursos</h3>
                
                <p>
                  La sentencia puede ser apelada dentro de los 10 días siguientes a su notificación. La apelación se presenta 
                  ante el mismo tribunal que dictó la sentencia y es resuelta por la Corte de Apelaciones correspondiente.
                </p>
                
                <h3>Cumplimiento</h3>
                
                <p>
                  Una vez firme la sentencia, el tribunal ordena su cumplimiento. Si el alimentante no paga voluntariamente, 
                  se pueden solicitar medidas de apremio como las mencionadas anteriormente.
                </p>

                <h2>Modificación y cese de la pensión de alimentos</h2>
                
                <p>
                  La pensión de alimentos no es inmutable y puede ser modificada cuando cambian las circunstancias que se 
                  tuvieron en cuenta al fijarla.
                </p>
                
                <h3>Aumento de pensión</h3>
                
                <p>
                  Se puede solicitar un aumento de la pensión cuando:
                </p>
                
                <ul>
                  <li>Aumentan las necesidades del alimentario (por ejemplo, ingreso a la universidad)</li>
                  <li>Mejora la situación económica del alimentante (aumento de sueldo, herencia, etc.)</li>
                  <li>La pensión fijada ha quedado desactualizada por el paso del tiempo e inflación</li>
                </ul>
                
                <h3>Rebaja de pensión</h3>
                
                <p>
                  El alimentante puede solicitar una rebaja de la pensión cuando:
                </p>
                
                <ul>
                  <li>Disminuye su capacidad económica (pérdida del empleo, enfermedad, etc.)</li>
                  <li>Disminuyen las necesidades del alimentario</li>
                  <li>Nacen nuevos hijos que también requieren alimentos</li>
                  <li>Cambia el régimen de cuidado personal o relación directa y regular</li>
                </ul>
                
                <h3>Cese de la obligación alimenticia</h3>
                
                <p>
                  La obligación de pagar pensión de alimentos cesa cuando:
                </p>
                
                <ul>
                  <li>El alimentario cumple 21 años, salvo que esté estudiando una profesión u oficio</li>
                  <li>Si el alimentario está estudiando, la pensión se extiende hasta los 28 años</li>
                  <li>El alimentario adquiere medios para subsistir por sí mismo</li>
                  <li>Fallece el alimentante o el alimentario</li>
                </ul>
                
                <p>
                  En el caso de hijos con discapacidad que les impida valerse por sí mismos, la pensión puede ser vitalicia.
                </p>
                
                <h3>Procedimiento de modificación</h3>
                
                <p>
                  Para modificar la pensión, se debe presentar una demanda de aumento o rebaja ante el mismo tribunal que
                  fijó la pensión original.
                </p>\
