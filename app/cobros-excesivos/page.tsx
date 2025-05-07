import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Phone, Clock, HelpCircle, Lightbulb, Droplet, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageAds } from "@/components/page-ads"
import { SidebarAds } from "@/components/sidebar-ads"
import { AdUnit } from "@/components/ad-unit"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

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
              </div>

              <AdUnit slot="1357924680" format="horizontal" position="in-content" />

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
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <PageAds />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
