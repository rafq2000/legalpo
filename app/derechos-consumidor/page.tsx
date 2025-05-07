import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  FileText,
  Phone,
  Clock,
  HelpCircle,
  Scale,
  ShoppingCart,
  FileCheck,
  Info,
  AlertTriangle,
  CheckCircle,
  Building,
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
  title: "Tus Derechos como Consumidor en Chile: Lo que Nadie te Explicó | LegalPO",
  description:
    "Guía completa sobre tus derechos como consumidor en Chile: garantía legal, derecho a retracto, cómo reclamar y obtener compensación cuando no se respetan tus derechos.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/derechos-consumidor",
  },
}

export default function DerechosConsumidorPage() {
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
                <li className="font-medium text-foreground">Derechos del Consumidor</li>
              </ol>
            </nav>
          </div>

          <PageAds />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                  Tus derechos como consumidor en Chile: Lo que nadie te explicó pero necesitas saber
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
                    Cada día, las personas compramos productos, contratamos servicios o pagamos suscripciones. Pero,
                    ¿sabías que tienes derechos protegidos por ley en cada una de esas transacciones? En Chile, la Ley
                    N° 19.496 establece una serie de normas para proteger al consumidor frente a abusos, incumplimientos
                    o prácticas engañosas por parte de empresas.
                  </p>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2>1. 📖 ¿Qué dice la Ley del Consumidor?</h2>

                <p>
                  La Ley sobre Protección de los Derechos de los Consumidores (LPC) rige desde 1997 y ha sido modificada
                  varias veces para adaptarse a la realidad digital. Esta ley establece que todo consumidor tiene
                  derecho a:
                </p>

                <ul>
                  <li>Recibir información veraz, oportuna y completa sobre lo que está comprando.</li>
                  <li>Acceder a productos seguros y de calidad.</li>
                  <li>Obtener reparación o indemnización en caso de incumplimientos.</li>
                  <li>Reclamar si fue engañado o discriminado.</li>
                  <li>Que se respeten los términos del contrato o la publicidad asociada al producto o servicio.</li>
                </ul>

                <p>
                  Esta ley se aplica a todas las relaciones de consumo, es decir, cuando compras un producto o contratas
                  un servicio como consumidor final. No aplica para compras entre empresas o para uso profesional.
                </p>

                <h2>2. 💳 ¿Qué pasa si compré algo defectuoso?</h2>

                <p>
                  Cuando compras un producto nuevo (sea presencial o por internet), tienes derecho a una garantía legal
                  de 6 meses si el producto tiene una falla. Puedes elegir entre:
                </p>

                <ul>
                  <li>Cambiar el producto por uno nuevo.</li>
                  <li>Devolverlo y recuperar el dinero.</li>
                  <li>Repararlo sin costo.</li>
                </ul>

                <p>
                  Este derecho aplica aunque el producto esté en oferta o liquidación, y no necesitas contratar una
                  garantía extendida para ejercerlo. Solo debes presentar la boleta o algún comprobante (puede ser
                  incluso una transferencia bancaria o correo electrónico).
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                  <p className="text-yellow-800">
                    <strong>Importante:</strong> muchas tiendas intentan "reparar primero", pero tú eliges la opción. No
                    pueden imponerte cuál.
                  </p>
                </div>

                <h2>3. 🌐 ¿Y si compré por internet?</h2>

                <p>
                  Las compras digitales están protegidas por la misma ley. Además, la normativa considera un derecho a
                  retracto de 10 días si la compra fue hecha fuera del local comercial (como vía web, teléfono o
                  catálogo).
                </p>

                <p>
                  Este derecho implica que puedes devolver el producto sin necesidad de dar explicaciones, siempre que
                  esté sin uso y con su empaque original. La empresa debe devolverte todo lo pagado, incluyendo el
                  despacho si así lo señala la normativa vigente o la publicidad.
                </p>

                <p>
                  Sin embargo, hay excepciones al derecho a retracto, como productos personalizados, perecederos,
                  servicios ya prestados, entre otros.
                </p>

                <h2>4. 🧾 ¿Qué pasa con los contratos de servicios?</h2>

                <p>
                  Cuando contratas servicios como gimnasios, internet, planes móviles, suscripciones o colegios, también
                  estás protegido. Por ejemplo:
                </p>

                <ul>
                  <li>Si el servicio no se presta como fue ofrecido, puedes reclamar.</li>
                  <li>Si te cobran por un servicio que no solicitaste, puedes exigir devolución.</li>
                  <li>
                    Si quieres poner fin al contrato, la empresa debe tener un mecanismo simple, gratuito y no
                    condicionado (¡nada de llamar mil veces para cancelar!).
                  </li>
                </ul>

                <p>
                  Las empresas no pueden establecer cláusulas abusivas en los contratos, como aquellas que te obligan a
                  renunciar a tus derechos o que les permiten modificar unilateralmente las condiciones sin previo
                  aviso.
                </p>

                <h2>5. 🛠️ ¿Cómo reclamar si no respetan mis derechos?</h2>

                <p>Tienes varias vías para hacer valer tus derechos:</p>

                <h3>Paso 1: Reclama a la empresa</h3>
                <ul>
                  <li>Guarda registros de tu compra, boletas, correos, conversaciones, etc.</li>
                  <li>Reclama por correo o formulario web y exige respuesta por escrito.</li>
                </ul>

                <h3>Paso 2: Reclama ante el SERNAC</h3>
                <ul>
                  <li>
                    Puedes hacerlo online en{" "}
                    <a href="https://www.sernac.cl" target="_blank" rel="noopener noreferrer">
                      www.sernac.cl
                    </a>
                  </li>
                  <li>También puedes llamar al 800 700 100</li>
                  <li>SERNAC actúa como mediador y muchas veces logra acuerdos rápidos.</li>
                </ul>

                <h3>Paso 3: Demanda en el Juzgado de Policía Local</h3>
                <ul>
                  <li>Si el reclamo no prospera, puedes demandar.</li>
                  <li>No necesitas abogado.</li>
                  <li>Puedes pedir indemnización por daño directo (si te generó un perjuicio real).</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h2 className="text-xl font-semibold mb-4">🧠 Ejemplo real:</h2>
                <p className="mb-4">
                  Si compraste un refrigerador que dejó de funcionar al mes, tienes derecho a devolverlo o cambiarlo. La
                  tienda no puede decirte que "solo se repara". Si compraste por internet y llegó roto, puedes
                  retractarte o exigir garantía. Y si contrataste una caja de alimentos y nunca llegó, puedes
                  denunciarlo como incumplimiento de contrato.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-4 text-left">Derecho</th>
                        <th className="py-2 px-4 text-left">¿Qué implica?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="py-2 px-4 font-medium">Garantía legal</td>
                        <td className="py-2 px-4">6 meses para pedir cambio, reparación o devolución</td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-2 px-4 font-medium">Información clara</td>
                        <td className="py-2 px-4">Conocer bien lo que compras, sin engaños</td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-2 px-4 font-medium">Derecho a retracto</td>
                        <td className="py-2 px-4">10 días en compras fuera del local físico</td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-2 px-4 font-medium">Reclamo simple</td>
                        <td className="py-2 px-4">Deben tener canales efectivos para resolver</td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-2 px-4 font-medium">Indemnización</td>
                        <td className="py-2 px-4">Si te causaron daño, puedes exigir compensación</td>
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
                    <AccordionTrigger>¿Qué pasa si la tienda se niega a aplicar la garantía legal?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Si la tienda se niega a aplicar la garantía legal, tienes varias opciones:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Solicita el libro de reclamos y deja constancia por escrito</li>
                        <li>Presenta un reclamo formal en el SERNAC (online o por teléfono)</li>
                        <li>Acude al Juzgado de Policía Local de la comuna donde está la tienda</li>
                      </ul>
                      <p className="mt-2">
                        Recuerda guardar todas las pruebas: boleta, fotos del producto, correos o mensajes
                        intercambiados con la tienda, y cualquier documento que respalde tu reclamo.
                      </p>
                      <p className="mt-2">
                        La negativa a cumplir con la garantía legal puede resultar en multas para la empresa, además de
                        la obligación de cumplir con tus derechos.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>¿Puedo cancelar una suscripción en cualquier momento?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Depende del tipo de contrato:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          <strong>Contratos de plazo indefinido:</strong> Sí, puedes cancelar en cualquier momento,
                          siguiendo el procedimiento establecido por la empresa
                        </li>
                        <li>
                          <strong>Contratos a plazo fijo:</strong> Depende de las condiciones. Si hay cláusulas de
                          permanencia, podrían aplicar multas por término anticipado, pero estas deben ser
                          proporcionales
                        </li>
                        <li>
                          <strong>Suscripciones digitales:</strong> La ley exige que tengan un mecanismo de cancelación
                          tan simple como el de contratación
                        </li>
                      </ul>
                      <p className="mt-2">
                        En todos los casos, la empresa debe tener un procedimiento claro y accesible para cancelar. No
                        pueden poner trabas excesivas como "solo cancelaciones presenciales" para servicios contratados
                        online.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>¿Qué puedo hacer si me cobran por un servicio que no contraté?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Si te cobran por un servicio que no contrataste:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          <strong>Exige la devolución inmediata:</strong> Contacta a la empresa y solicita el reembolso
                          del cobro indebido
                        </li>
                        <li>
                          <strong>Presenta un reclamo formal:</strong> Si no hay respuesta, reclama ante el SERNAC
                        </li>
                        <li>
                          <strong>Solicita compensación:</strong> Además de la devolución, puedes pedir indemnización
                          por los perjuicios causados
                        </li>
                        <li>
                          <strong>Revisa tus extractos bancarios:</strong> Verifica si hay otros cobros no autorizados
                        </li>
                      </ul>
                      <p className="mt-2">
                        La ley establece que no puedes ser obligado a pagar por servicios que no has solicitado
                        expresamente. Cualquier cobro no autorizado debe ser reembolsado, con intereses y reajustes.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>¿Qué derechos tengo si compro en una tienda extranjera?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">
                        Cuando compras en tiendas extranjeras que no tienen representación en Chile:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>La Ley del Consumidor chilena generalmente no aplica</li>
                        <li>Te rigen las leyes del país donde está establecida la empresa</li>
                        <li>Puedes acogerte a las políticas propias de la tienda (devoluciones, garantías, etc.)</li>
                        <li>
                          Si pagas con tarjeta de crédito, puedes solicitar un "chargeback" en caso de problemas graves
                        </li>
                      </ul>
                      <p className="mt-2">
                        Sin embargo, si la empresa extranjera tiene representación legal en Chile o dirige sus ofertas
                        específicamente al mercado chileno, podría aplicar la ley chilena. Cada caso debe analizarse
                        individualmente.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <AdUnit slot="2468013579" format="horizontal" position="in-content" />

              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-blue-500" />
                  ¿Tuviste un problema como consumidor?
                </h2>
                <p className="mb-4">
                  En LegalPO te ayudamos a redactar tu reclamo, orientarte legalmente y entender si tienes derecho a
                  compensación.
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
                        href="https://www.sernac.cl"
                        className="text-blue-600 hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Building className="h-4 w-4 mr-2" />
                        SERNAC - Servicio Nacional del Consumidor
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.bcn.cl/leychile/navegar?idNorma=61438"
                        className="text-blue-600 hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileCheck className="h-4 w-4 mr-2" />
                        Ley 19.496 - Ley del Consumidor
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.chileatiende.gob.cl/fichas/2341-reclamo-por-incumplimiento-de-la-garantia-legal"
                        className="text-blue-600 hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Info className="h-4 w-4 mr-2" />
                        ChileAtiende: Garantía Legal
                      </Link>
                    </li>
                    <li>
                      <Link href="/garantia-legal" className="text-blue-600 hover:underline flex items-center">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Guía completa sobre Garantía Legal
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
                      <strong className="block text-blue-800">Guarda todas tus boletas</strong>
                      <span className="text-muted-foreground">Digital o físicamente por al menos 6 meses</span>
                    </li>
                    <li className="text-sm">
                      <strong className="block text-blue-800">Toma capturas de pantalla</strong>
                      <span className="text-muted-foreground">De ofertas, publicidad y confirmaciones de compra</span>
                    </li>
                    <li className="text-sm">
                      <strong className="block text-blue-800">Lee los términos y condiciones</strong>
                      <span className="text-muted-foreground">Al menos las partes más importantes</span>
                    </li>
                    <li className="text-sm">
                      <strong className="block text-blue-800">Reclama por escrito</strong>
                      <span className="text-muted-foreground">Siempre deja constancia de tus reclamos</span>
                    </li>
                    <li className="text-sm">
                      <strong className="block text-blue-800">Conoce tus plazos</strong>
                      <span className="text-muted-foreground">Para garantías, retractos y reclamos</span>
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
                        <Scale className="h-4 w-4 mr-2 text-blue-500" />
                        Reclamos más frecuentes
                      </h3>
                      <ul className="mt-1 space-y-1 pl-6 list-disc text-muted-foreground">
                        <li>Telecomunicaciones (internet, telefonía)</li>
                        <li>Retail (productos defectuosos)</li>
                        <li>Servicios financieros (cobros indebidos)</li>
                        <li>Transporte (cancelaciones, retrasos)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500" />
                        Prácticas abusivas comunes
                      </h3>
                      <ul className="mt-1 space-y-1 pl-6 list-disc text-muted-foreground">
                        <li>Letra pequeña en contratos</li>
                        <li>Renovaciones automáticas sin aviso</li>
                        <li>Publicidad engañosa o ambigua</li>
                        <li>Obstáculos para cancelar servicios</li>
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
