import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Phone, Clock, HelpCircle, FileCheck, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageAds } from "@/components/page-ads"
import { SidebarAds } from "@/components/sidebar-ads"
import { AdUnit } from "@/components/ad-unit"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

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
                </ul>
              </div>

              <AdUnit slot="1357924680" format="horizontal" position="in-content" />

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
