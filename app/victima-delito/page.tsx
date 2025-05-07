import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Shield,
  AlertTriangle,
  FileText,
  Phone,
  Scale,
  Clock,
  HelpCircle,
  User,
  Building,
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
  title: "Qué Hacer si Eres Víctima de un Delito en Chile | LegalPO",
  description:
    "Guía completa sobre los pasos a seguir si eres víctima de un delito en Chile: cómo denunciar, tus derechos, asistencia legal y compensación.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/victima-delito",
  },
}

export default function VictimaDelitoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6 flex items-center">
            <Button variant="outline" size="sm" asChild className="mr-4">
              <Link href="/informacion-legal">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Información Legal
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
                <li>
                  <Link href="/informacion-legal" className="hover:text-primary">
                    Información Legal
                  </Link>
                </li>
                <li>/</li>
                <li className="font-medium text-foreground">Víctima de delito</li>
              </ol>
            </nav>
          </div>

          <PageAds />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                  ¿Qué hacer si eres víctima de un delito en Chile?
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
                    Ser víctima de un delito es una experiencia difícil y, muchas veces, traumática. En Chile, la ley
                    protege a las víctimas y les entrega una serie de derechos y mecanismos para buscar justicia y
                    reparación.
                  </p>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2>1. 🚨 Primer paso: resguardar tu integridad</h2>

                <p>
                  Lo más importante es tu seguridad. Si estás en peligro, llama al 133 (Carabineros) o al 134 (PDI). Si
                  sufriste lesiones, busca atención médica lo antes posible y guarda todos los comprobantes (boletas,
                  informes, constancias).
                </p>

                <p>
                  Recuerda que tu bienestar físico y emocional es prioritario. Si el delito acaba de ocurrir y estás en
                  un lugar inseguro, busca ayuda inmediata o dirígete a un lugar donde haya otras personas que puedan
                  asistirte.
                </p>

                <h2>2. 📝 Hacer la denuncia</h2>

                <p>Puedes denunciar un delito en:</p>

                <ul>
                  <li>
                    <strong>Carabineros de Chile</strong> - En cualquier comisaría, las 24 horas del día.
                  </li>
                  <li>
                    <strong>Policía de Investigaciones (PDI)</strong> - En cualquier cuartel o brigada especializada.
                  </li>
                  <li>
                    <strong>Fiscalía Local</strong> - Directamente en la fiscalía correspondiente a tu comuna.
                  </li>
                  <li>
                    <strong>Juzgado de Garantía</strong> - Si estás en una audiencia o cerca de un tribunal.
                  </li>
                </ul>

                <p>
                  La denuncia es gratuita y puedes hacerla de forma presencial o, en algunos casos, por internet a
                  través del sitio web de la Fiscalía. No necesitas abogado para denunciar.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                  <p className="text-yellow-800 font-medium">Importante:</p>
                  <p className="text-yellow-800">
                    No necesitas tener pruebas para denunciar, pero mientras más información entregues (fecha, hora,
                    lugar, testigos, descripción del agresor), más útil será para la investigación.
                  </p>
                </div>

                <h2>3. ⚖️ ¿Qué hace la Fiscalía?</h2>

                <p>
                  Una vez hecha la denuncia, el Ministerio Público (Fiscalía) se encarga de investigar. Puede pedir
                  diligencias a la policía (tomas de declaración, revisión de cámaras, informes periciales, etc.). En
                  caso de que existan antecedentes suficientes, puede formalizar al imputado y llevarlo a juicio.
                </p>

                <p>
                  La víctima <strong>puede presentar una querella</strong> si quiere participar activamente en el
                  proceso penal. Para esto necesitas un abogado, pero si no puedes pagarlo, puedes pedir representación
                  gratuita en la <strong>Corporación de Asistencia Judicial</strong>.
                </p>

                <p>
                  La querella te permite tener un rol más activo en el proceso, pudiendo solicitar diligencias
                  específicas, acceder a la carpeta investigativa y presentar pruebas directamente.
                </p>

                <h2>4. 🧍 Derechos de la víctima</h2>

                <p>Según la Ley 20.886 y otros cuerpos normativos, tienes derecho a:</p>

                <ul>
                  <li>
                    <strong>Ser informado del estado del proceso penal</strong> - Puedes solicitar información sobre el
                    avance de la investigación y las resoluciones que se adopten.
                  </li>
                  <li>
                    <strong>Solicitar medidas de protección</strong> - Como órdenes de alejamiento, custodia policial,
                    cambio temporal de domicilio, entre otras.
                  </li>
                  <li>
                    <strong>Recibir atención médica, psicológica y jurídica gratuita</strong> - A través de los
                    programas de apoyo a víctimas.
                  </li>
                  <li>
                    <strong>No ser revictimizado</strong> - Por ejemplo, evitar declaraciones innecesarias o
                    repetitivas.
                  </li>
                  <li>
                    <strong>Pedir reparación del daño sufrido</strong> - Ya sea económica o simbólica.
                  </li>
                  <li>
                    <strong>Acompañamiento psicosocial</strong> - Si el delito fue grave o traumático.
                  </li>
                </ul>
              </div>

              <Tabs defaultValue="instituciones" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="instituciones" className="text-sm">
                    Ayuda institucional
                  </TabsTrigger>
                  <TabsTrigger value="sin-avances" className="text-sm">
                    Si no hay avances
                  </TabsTrigger>
                  <TabsTrigger value="resumen" className="text-sm">
                    Resumen
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="instituciones" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <Building className="h-5 w-5 mr-2 text-green-500" />
                        Ayuda institucional
                      </CardTitle>
                      <CardDescription>
                        Instituciones que pueden ayudarte si fuiste víctima de un delito
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <div className="border rounded-lg p-4 bg-white">
                          <h3 className="font-medium mb-2 flex items-center">
                            <Shield className="h-4 w-4 mr-2 text-blue-600" />
                            Fiscalía de Chile
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Institución encargada de investigar los delitos y representar a la sociedad en el proceso
                            penal. Cuenta con fiscales especializados según el tipo de delito.
                          </p>
                          <p className="text-sm font-medium">
                            Sitio web:{" "}
                            <Link href="https://www.fiscaliadechile.cl" className="text-blue-600 hover:underline">
                              www.fiscaliadechile.cl
                            </Link>
                          </p>
                        </div>

                        <div className="border rounded-lg p-4 bg-white">
                          <h3 className="font-medium mb-2 flex items-center">
                            <User className="h-4 w-4 mr-2 text-purple-600" />
                            Programa de Apoyo a Víctimas del Ministerio del Interior
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Ofrece atención psicológica, social y jurídica gratuita a víctimas de delitos violentos.
                            Cuenta con centros en todo el país.
                          </p>
                          <p className="text-sm font-medium">Contacto: 600 818 1000</p>
                        </div>

                        <div className="border rounded-lg p-4 bg-white">
                          <h3 className="font-medium mb-2 flex items-center">
                            <Scale className="h-4 w-4 mr-2 text-red-600" />
                            Corporación de Asistencia Judicial (CAJ)
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Abogados gratuitos en caso de querellas o procesos civiles asociados. Atiende a personas de
                            escasos recursos.
                          </p>
                          <p className="text-sm font-medium">
                            Sitio web:{" "}
                            <Link href="https://www.cajmetro.cl" className="text-blue-600 hover:underline">
                              www.cajmetro.cl
                            </Link>{" "}
                            (RM) o busca tu CAJ regional
                          </p>
                        </div>

                        <div className="border rounded-lg p-4 bg-white">
                          <h3 className="font-medium mb-2 flex items-center">
                            <User className="h-4 w-4 mr-2 text-green-600" />
                            SernamEG
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Si eres mujer y víctima de violencia de género, el Servicio Nacional de la Mujer y Equidad
                            de Género ofrece atención especializada.
                          </p>
                          <p className="text-sm font-medium">Contacto: 1455 (Fono Mujer)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="sin-avances" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />
                        ¿Y si no hay avances?
                      </CardTitle>
                      <CardDescription>Qué hacer si sientes que tu denuncia no avanza</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>Si sientes que tu denuncia no avanza, tienes derecho a:</p>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="font-medium text-blue-900 mb-2">Solicitar reuniones con el fiscal a cargo</h3>
                          <p>
                            Puedes pedir una reunión con el fiscal para conocer el estado de la investigación y expresar
                            tus inquietudes. Es recomendable llevar un escrito con tus preguntas.
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="font-medium text-blue-900 mb-2">Pedir una nueva revisión del caso</h3>
                          <p>
                            Si no estás conforme con la actuación del fiscal, puedes solicitar al Fiscal Regional que
                            revise el caso y eventualmente asigne un nuevo fiscal.
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="font-medium text-blue-900 mb-2">Recurrir a la Defensoría de Víctimas</h3>
                          <p>
                            En algunas comunas existe la Defensoría de Víctimas, que puede ayudarte a hacer seguimiento
                            de tu caso y orientarte sobre los pasos a seguir.
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="font-medium text-blue-900 mb-2">Reclamar ante la Corte</h3>
                          <p>
                            Si tus derechos como víctima fueron vulnerados durante el proceso, puedes presentar un
                            reclamo ante la Corte de Apelaciones correspondiente.
                          </p>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                          <h4 className="font-medium text-yellow-800 mb-1">Importante</h4>
                          <p className="text-sm text-yellow-700">
                            Recuerda que algunas investigaciones pueden tomar tiempo, especialmente si son complejas.
                            Sin embargo, tienes derecho a estar informado sobre los avances y a que tu caso sea tratado
                            con la debida diligencia.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="resumen" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-blue-500" />
                        En resumen
                      </CardTitle>
                      <CardDescription>Puntos clave para víctimas de delitos</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p className="font-medium text-lg">
                          Denunciar es tu derecho y también tu primer paso hacia la justicia. Como víctima, no estás
                          sola ni solo: el sistema debe protegerte y acompañarte.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-2">Seguridad primero</h4>
                            <p className="text-sm text-muted-foreground">
                              Prioriza tu seguridad física y emocional. Busca ayuda médica si la necesitas y no dudes en
                              solicitar medidas de protección.
                            </p>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-2">Denuncia oportuna</h4>
                            <p className="text-sm text-muted-foreground">
                              Denuncia lo antes posible para preservar evidencias. Recuerda que no necesitas pruebas
                              para denunciar.
                            </p>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-2">Conoce tus derechos</h4>
                            <p className="text-sm text-muted-foreground">
                              Tienes derecho a información, protección, participación, asistencia y reparación durante
                              todo el proceso.
                            </p>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-2">Busca apoyo</h4>
                            <p className="text-sm text-muted-foreground">
                              No dudes en buscar ayuda profesional, exigir tus derechos y hacer seguimiento de tu causa.
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg mt-4">
                          <p className="text-center text-blue-800 font-medium">
                            No dudes en buscar ayuda profesional, exigir tus derechos y hacer seguimiento de tu causa.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <AdUnit slot="1357924680" format="horizontal" position="in-content" />

              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Preguntas frecuentes</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>¿Puedo denunciar un delito de forma anónima?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Sí, existen mecanismos para denunciar de forma anónima:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Denuncia Seguro: 600 400 0101 (programa del Ministerio del Interior)</li>
                        <li>Formulario de denuncia anónima en el sitio web de la PDI</li>
                        <li>Denuncia anónima en la Fiscalía</li>
                      </ul>
                      <p className="mt-2">
                        Sin embargo, es importante considerar que las denuncias anónimas pueden limitar la
                        investigación, ya que no podrás aportar más antecedentes posteriormente ni ser notificado de los
                        avances.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>¿Cuánto tiempo tengo para denunciar un delito?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Los plazos para denunciar varían según el tipo de delito:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Delitos graves (homicidio, secuestro, violación): no tienen plazo de prescripción para
                          denunciar
                        </li>
                        <li>Delitos menos graves: generalmente entre 5 y 10 años</li>
                        <li>Faltas: 6 meses</li>
                      </ul>
                      <p className="mt-2">
                        En el caso de delitos sexuales contra menores de edad, el plazo comienza a contar desde que la
                        víctima cumple 18 años.
                      </p>
                      <p className="mt-2">
                        Sin embargo, es recomendable denunciar lo antes posible para facilitar la investigación y la
                        recolección de evidencias.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>¿Qué pasa si el agresor es un familiar o conocido?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">
                        Si el agresor es un familiar o conocido, el proceso es el mismo, pero existen consideraciones
                        adicionales:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Si es violencia intrafamiliar, puedes solicitar medidas de protección inmediatas</li>
                        <li>Existen programas especializados para víctimas de violencia intrafamiliar</li>
                        <li>Puedes solicitar prohibición de acercamiento y contacto</li>
                        <li>En casos graves, se puede ordenar el abandono del hogar común por parte del agresor</li>
                      </ul>
                      <p className="mt-2">
                        Es importante saber que la denuncia puede ser un paso difícil, pero existen redes de apoyo para
                        acompañarte en el proceso.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>¿Puedo obtener compensación económica por el delito sufrido?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Sí, existen varias vías para obtener compensación económica:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          <strong>Demanda civil dentro del proceso penal:</strong> Puedes solicitar indemnización por
                          daños materiales y morales
                        </li>
                        <li>
                          <strong>Demanda civil independiente:</strong> En un juicio civil separado
                        </li>
                        <li>
                          <strong>Acuerdos reparatorios:</strong> En algunos delitos menos graves, puedes llegar a un
                          acuerdo con el imputado
                        </li>
                      </ul>
                      <p className="mt-2">
                        Para estos procesos, es recomendable contar con asesoría legal. Si no puedes costear un abogado,
                        la Corporación de Asistencia Judicial puede representarte gratuitamente.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <AdUnit slot="2468013579" format="horizontal" position="in-content" />

              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-blue-500" />
                  ¿Tienes dudas específicas?
                </h2>
                <p className="mb-4">
                  En LegalPO te orientamos gratis con inteligencia artificial y abogados reales. Podemos ayudarte a
                  entender mejor tus derechos como víctima y los pasos a seguir en tu caso específico.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="flex-1">
                    <Link href="/ask">
                      <FileText className="h-4 w-4 mr-2" />
                      Hacer una consulta
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
                        href="https://www.fiscaliadechile.cl/Fiscalia/victimas/derechos.jsp"
                        className="text-blue-600 hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Shield className="h-4 w-4 mr-2" />
                        Derechos de las víctimas (Fiscalía)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="http://www.apoyovictimas.cl"
                        className="text-blue-600 hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Programa de Apoyo a Víctimas
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.cajmetro.cl"
                        className="text-blue-600 hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Scale className="h-4 w-4 mr-2" />
                        Corporación de Asistencia Judicial
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.sernameg.gob.cl"
                        className="text-blue-600 hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <User className="h-4 w-4 mr-2" />
                        SernamEG (violencia de género)
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-blue-50 border-blue-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-blue-500" />
                    Números de emergencia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="text-sm">
                      <strong className="block text-blue-800">Carabineros de Chile</strong>
                      <span className="text-muted-foreground">133</span>
                    </li>
                    <li className="text-sm">
                      <strong className="block text-blue-800">Policía de Investigaciones (PDI)</strong>
                      <span className="text-muted-foreground">134</span>
                    </li>
                    <li className="text-sm">
                      <strong className="block text-blue-800">Ambulancia (SAMU)</strong>
                      <span className="text-muted-foreground">131</span>
                    </li>
                    <li className="text-sm">
                      <strong className="block text-blue-800">Fono Familia (Carabineros)</strong>
                      <span className="text-muted-foreground">149</span>
                    </li>
                    <li className="text-sm">
                      <strong className="block text-blue-800">Fono Mujer (SernamEG)</strong>
                      <span className="text-muted-foreground">1455</span>
                    </li>
                    <li className="text-sm">
                      <strong className="block text-blue-800">Denuncia Seguro (anónima)</strong>
                      <span className="text-muted-foreground">600 400 0101</span>
                    </li>
                  </ul>
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
