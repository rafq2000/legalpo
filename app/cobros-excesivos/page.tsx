import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  FileText,
  Phone,
  Clock,
  HelpCircle,
  Lightbulb,
  Droplet,
  BarChart,
  Building,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PageAds } from "@/components/page-ads"
import { SidebarAds } from "@/components/sidebar-ads"
import { AdUnit } from "@/components/ad-unit"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Cómo Reclamar por Cobros Excesivos de Luz, Agua o Gas en Chile | LegalPO",
  description:
    "Guía paso a paso para reclamar por cobros excesivos de servicios básicos en Chile: cómo revisar tu consumo, presentar reclamos y exigir soluciones.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/cobros-excesivos",
  },
}

export default function CobrosExcesivosPage() {
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
                <li className="font-medium text-foreground">Cobros Excesivos</li>
              </ol>
            </nav>
          </div>

          <PageAds />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                  ¿Cómo reclamar por un cobro excesivo de luz, agua o gas en Chile?
                </h1>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>Actualizado: Mayo 2025</span>
                  <span className="mx-2">•</span>
                  <FileText className="mr-1 h-4 w-4" />
                  <span>Tiempo de lectura: 8 min</span>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <p className="text-lg font-medium text-blue-900">
                    ¿Te llegó una cuenta impagable de luz, agua o gas y no sabes qué hacer? Tranquilo. En Chile, los
                    servicios básicos están regulados y los usuarios tienen derechos frente a cobros que no se
                    justifican.
                  </p>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2>1. 📈 ¿Cómo saber si el cobro es abusivo?</h2>

                <p>
                  Antes de reclamar, es importante verificar tu historial de consumo. Las boletas deben incluir un
                  gráfico con el consumo mensual de los últimos seis meses. Si ves una diferencia muy abrupta y no
                  cambió tu comportamiento de uso, es una señal de alerta.
                </p>

                <p>Otras señales de cobros abusivos:</p>

                <ul>
                  <li>Lecturas estimadas por mucho tiempo (no reales).</li>
                  <li>Corte y reposición injustificados con cargos excesivos.</li>
                  <li>Cambio de tarifa sin notificación.</li>
                  <li>Cobros duplicados o por conceptos no contratados.</li>
                </ul>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                  <p className="text-yellow-800">
                    <strong>Tip:</strong> Compara tu consumo con el mismo mes del año anterior. Los servicios como luz y
                    gas suelen tener variaciones estacionales (más consumo en invierno, por ejemplo).
                  </p>
                </div>

                <h2>2. 📞 Reclamar ante la empresa</h2>

                <p>El primer paso es contactar directamente a la empresa prestadora del servicio:</p>

                <ul>
                  <li>
                    <strong>Luz:</strong> Enel, CGE, Frontel, entre otras.
                  </li>
                  <li>
                    <strong>Agua:</strong> Aguas Andinas, Esval, Essbio, etc.
                  </li>
                  <li>
                    <strong>Gas:</strong> Metrogas, Lipigas, Gasco, Abastible.
                  </li>
                </ul>

                <p>
                  Haz el reclamo por teléfono, web o presencial. Solicita un número de caso y guarda registro del
                  reclamo. En muchos casos, la empresa revisará el consumo, enviará un técnico a revisar el medidor y
                  puede incluso refacturar.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                  <p className="text-blue-800">
                    <strong>Importante:</strong> No estás obligado a pagar el monto completo mientras se resuelve el
                    reclamo. Puedes solicitar que se congele el pago o hacer un abono mientras tanto.
                  </p>
                </div>

                <h2>3. 🧾 Revisa el medidor y pide una inspección</h2>

                <p>Tienes derecho a que revisen tu medidor si crees que está fallando. El procedimiento es:</p>

                <ul>
                  <li>
                    Solicitar formalmente la revisión (puede tener un costo, que se devuelve si se comprueba error).
                  </li>
                  <li>La empresa debe enviar un técnico en un plazo razonable.</li>
                  <li>Si el medidor estaba defectuoso o mal leído, deben corregir los cobros.</li>
                </ul>

                <p>
                  Es recomendable estar presente durante la revisión del medidor para verificar que se realice
                  correctamente. También puedes tomar fotografías del medidor regularmente para tener un registro propio
                  de tu consumo.
                </p>

                <h2>4. 🏛️ Reclamar ante la autoridad</h2>

                <p>
                  Si la empresa no responde o no soluciona tu reclamo, puedes acudir a las siguientes instituciones:
                </p>

                <h3>a) Superintendencia de Electricidad y Combustibles (SEC)</h3>
                <p>Para reclamos por luz o gas.</p>
                <ul>
                  <li>
                    Página web:{" "}
                    <a href="https://www.sec.cl" target="_blank" rel="noopener noreferrer">
                      www.sec.cl
                    </a>
                  </li>
                  <li>Puedes ingresar tu reclamo con el número de cliente y subir fotos del medidor o boleta.</li>
                </ul>

                <h3>b) Superintendencia de Servicios Sanitarios (SISS)</h3>
                <p>Para reclamos por agua potable.</p>
                <ul>
                  <li>
                    Página web:{" "}
                    <a href="https://www.siss.gob.cl" target="_blank" rel="noopener noreferrer">
                      www.siss.gob.cl
                    </a>
                  </li>
                </ul>

                <p>
                  Ambas entidades fiscalizan a las empresas y pueden ordenar refacturación o sanciones si se acredita
                  abuso.
                </p>

                <h2>5. 🛍️ Reclamos paralelos en SERNAC</h2>

                <p>
                  Aunque no es la vía más técnica, puedes ingresar también un reclamo en el SERNAC, sobre todo si
                  sientes que fuiste tratado de forma injusta o poco transparente. Ellos pueden mediar entre tú y la
                  empresa para alcanzar una solución amistosa.
                </p>

                <p>
                  El SERNAC tiene competencia en materia de servicios básicos cuando se trata de problemas relacionados
                  con la atención al cliente, información engañosa o cláusulas abusivas en los contratos.
                </p>

                <h2>6. ⚖️ ¿Y si aún no me hacen caso?</h2>

                <p>
                  Si no se soluciona el problema por ninguna vía administrativa, puedes presentar una demanda en el
                  Juzgado de Policía Local de tu comuna. No necesitas abogado y el trámite es gratuito. Es útil si
                  quieres una resolución judicial que ordene devolver lo cobrado o reparar el daño.
                </p>

                <p>Para presentar la demanda, necesitarás:</p>

                <ul>
                  <li>Copia de tu cédula de identidad</li>
                  <li>Boletas o facturas del servicio</li>
                  <li>Comprobantes de reclamos anteriores</li>
                  <li>Cualquier otra evidencia que respalde tu caso</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h2 className="text-xl font-semibold mb-4">📝 En resumen:</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-4 text-left">Paso</th>
                        <th className="py-2 px-4 text-left">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="py-2 px-4 font-medium">1️⃣</td>
                        <td className="py-2 px-4">Revisa el historial de consumo</td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-2 px-4 font-medium">2️⃣</td>
                        <td className="py-2 px-4">Reclama ante la empresa</td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-2 px-4 font-medium">3️⃣</td>
                        <td className="py-2 px-4">Solicita inspección del medidor</td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-2 px-4 font-medium">4️⃣</td>
                        <td className="py-2 px-4">Reclama ante SEC o SISS</td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-2 px-4 font-medium">5️⃣</td>
                        <td className="py-2 px-4">Acude al SERNAC como apoyo</td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-2 px-4 font-medium">6️⃣</td>
                        <td className="py-2 px-4">Demanda en el Juzgado de Policía Local</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <AdUnit slot="1357924680" format="horizontal" position="in-content" />

              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Preguntas frecuentes</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>¿Qué pasa si me cortan el servicio mientras reclamo?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">
                        Si presentaste un reclamo formal por el monto de la cuenta (ya sea ante la empresa o la
                        superintendencia correspondiente), la empresa no puede cortar el servicio mientras el reclamo
                        esté en trámite, siempre que:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Hayas pagado la parte no disputada de la cuenta (el promedio normal de consumo)</li>
                        <li>El reclamo haya sido presentado antes del vencimiento de la boleta</li>
                        <li>Tengas el número de reclamo o comprobante</li>
                      </ul>
                      <p className="mt-2">
                        Si aun así te cortan el servicio, puedes exigir la reposición inmediata sin costo y presentar un
                        reclamo adicional por esta situación.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      ¿Puedo negarme a pagar completamente mientras se resuelve el reclamo?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">No es recomendable negarse a pagar completamente. Lo más adecuado es:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Pagar el monto correspondiente a tu consumo habitual (promedio de los últimos 6 meses)</li>
                        <li>Solicitar formalmente a la empresa que congele el cobro del monto en disputa</li>
                        <li>Guardar todos los comprobantes de pago y comunicaciones</li>
                      </ul>
                      <p className="mt-2">
                        Esto te protege de cortes de servicio mientras se resuelve la controversia y demuestra tu buena
                        fe como consumidor.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>¿Cuánto tiempo tienen las empresas para responder mi reclamo?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Los plazos varían según el tipo de servicio y la vía de reclamo:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          <strong>Empresas de servicios básicos:</strong> Generalmente 30 días corridos
                        </li>
                        <li>
                          <strong>SEC (electricidad y gas):</strong> 30 días hábiles
                        </li>
                        <li>
                          <strong>SISS (agua):</strong> 30 días hábiles
                        </li>
                        <li>
                          <strong>SERNAC:</strong> 15 días hábiles para mediar
                        </li>
                      </ul>
                      <p className="mt-2">
                        Si no recibes respuesta en estos plazos, puedes escalar el reclamo a la instancia superior o
                        iniciar acciones legales.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      ¿Qué hago si descubro una fuga o problema técnico que causó el alto consumo?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Si descubres que el alto consumo se debió a una fuga o problema técnico:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Repara el problema lo antes posible y guarda comprobantes</li>
                        <li>Notifica a la empresa con evidencias (fotos, informe del técnico)</li>
                        <li>Solicita una refacturación considerando la situación excepcional</li>
                        <li>En caso de agua, algunas empresas tienen políticas especiales para fugas no visibles</li>
                      </ul>
                      <p className="mt-2">
                        Aunque el problema sea en tu instalación, algunas empresas ofrecen facilidades de pago o
                        descuentos parciales en estos casos, especialmente si es la primera vez que ocurre.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <AdUnit slot="2468013579" format="horizontal" position="in-content" />

              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-blue-500" />
                  ¿Tienes un problema con tus servicios básicos?
                </h2>
                <p className="mb-4">
                  En LegalPO puedes ingresar tu caso y recibir orientación gratuita. Te ayudamos a redactar tu reclamo,
                  entender tu boleta y guiarte paso a paso para recuperar lo que es justo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="flex-1">
                    <Link href="/ask">
                      <FileText className="h-4 w-4 mr-2" />
                      Consultar ahora
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
                  <CardTitle className="text-lg">Enlaces útiles</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="https://www.sec.cl/area-ciudadana/reclamos/"
                        className="text-blue-600 hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Lightbulb className="h-4 w-4 mr-2" />
                        Reclamos SEC (luz y gas)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.siss.gob.cl/586/w3-propertyvalue-6408.html"
                        className="text-blue-600 hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Droplet className="h-4 w-4 mr-2" />
                        Reclamos SISS (agua)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.sernac.cl/portal/618/w3-propertyvalue-20970.html"
                        className="text-blue-600 hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Building className="h-4 w-4 mr-2" />
                        Reclamos SERNAC
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.chileatiende.gob.cl/fichas/2030-reclamo-por-cobros-excesivos-de-electricidad"
                        className="text-blue-600 hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        ChileAtiende: Cobros excesivos
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-blue-50 border-blue-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    Consejos prácticos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="text-sm">
                      <strong className="block text-blue-800">Toma fotografías del medidor</strong>
                      <span className="text-muted-foreground">Registra periódicamente tu consumo real</span>
                    </li>
                    <li className="text-sm">
                      <strong className="block text-blue-800">Guarda todas tus boletas</strong>
                      <span className="text-muted-foreground">Mantén un historial de al menos 12 meses</span>
                    </li>
                    <li className="text-sm">
                      <strong className="block text-blue-800">Solicita todo por escrito</strong>
                      <span className="text-muted-foreground">Correos, cartas o formularios oficiales</span>
                    </li>
                    <li className="text-sm">
                      <strong className="block text-blue-800">Exige número de reclamo</strong>
                      <span className="text-muted-foreground">Es tu comprobante para seguimiento</span>
                    </li>
                    <li className="text-sm">
                      <strong className="block text-blue-800">Revisa tu instalación</strong>
                      <span className="text-muted-foreground">Descarta fugas o problemas técnicos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Datos de interés</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-4">
                    <div>
                      <h3 className="font-medium flex items-center">
                        <BarChart className="h-4 w-4 mr-2 text-blue-500" />
                        Consumo promedio en Chile
                      </h3>
                      <ul className="mt-1 space-y-1 pl-6 list-disc text-muted-foreground">
                        <li>Electricidad: 180 kWh mensual por hogar</li>
                        <li>Agua: 15-20 m³ mensual por hogar</li>
                        <li>Gas: 1-2 cilindros de 15kg mensual</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500" />
                        Señales de alerta
                      </h3>
                      <ul className="mt-1 space-y-1 pl-6 list-disc text-muted-foreground">
                        <li>Aumentos superiores al 30% sin explicación</li>
                        <li>Lecturas "estimadas" por más de 2 meses</li>
                        <li>Cobros por servicios no contratados</li>
                      </ul>
                    </div>
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
