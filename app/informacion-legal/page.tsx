import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Book, FileText, Shield, Scale, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { PageAds } from "@/components/page-ads"
import { SidebarAds } from "@/components/sidebar-ads"
import { AdUnit } from "@/components/ad-unit"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Información Legal en Chile: Guías y Recursos | LegalPO",
  description:
    "Encuentra guías legales completas sobre derechos del consumidor, víctimas de delitos, deudas, arriendos y más temas legales en Chile explicados en lenguaje simple.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/informacion-legal",
  },
}

export default function InformacionLegalPage() {
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
                <li className="font-medium text-foreground">Información Legal</li>
              </ol>
            </nav>
          </div>

          <PageAds />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                  Información Legal en Chile: Guías y Recursos
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  Encuentra información legal clara y actualizada sobre tus derechos y obligaciones en Chile. Nuestras
                  guías están escritas en lenguaje simple para ayudarte a entender y resolver situaciones legales
                  cotidianas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-blue-500" />
                      <Link href="/victima-delito" className="hover:text-blue-600">
                        Víctimas de Delitos
                      </Link>
                    </CardTitle>
                    <CardDescription>Qué hacer si eres víctima de un delito en Chile</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Aprende sobre tus derechos como víctima, cómo denunciar correctamente y qué instituciones pueden
                      ayudarte.
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/victima-delito">Leer más</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-green-500" />
                      <Link href="/cobros-excesivos" className="hover:text-blue-600">
                        Cobros Excesivos
                      </Link>
                    </CardTitle>
                    <CardDescription>Cómo reclamar por cobros excesivos de servicios básicos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Guía para enfrentar cobros injustificados de luz, agua o gas, y cómo presentar reclamos efectivos.
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/cobros-excesivos">Leer más</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Scale className="h-5 w-5 mr-2 text-purple-500" />
                      <Link href="/derechos-consumidor" className="hover:text-blue-600">
                        Derechos del Consumidor
                      </Link>
                    </CardTitle>
                    <CardDescription>Lo que nadie te explicó pero necesitas saber</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Conoce tus derechos al comprar productos o contratar servicios, y cómo reclamar si no se cumplen.
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/derechos-consumidor">Leer más</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Info className="h-5 w-5 mr-2 text-red-500" />
                      <Link href="/mala-atencion-medica" className="hover:text-blue-600">
                        Mala Atención Médica
                      </Link>
                    </CardTitle>
                    <CardDescription>Cómo reclamar por mala atención en salud</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Qué hacer si recibiste una atención médica deficiente y cómo presentar reclamos efectivos.
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/mala-atencion-medica">Leer más</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-blue-500" />
                      <Link href="/garantia-legal" className="hover:text-blue-600">
                        Garantía Legal
                      </Link>
                    </CardTitle>
                    <CardDescription>Conoce tus derechos cuando un producto falla</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Todo sobre la garantía legal de 6 meses, cómo exigirla y qué hacer si te la niegan.
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/garantia-legal">Leer más</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Book className="h-5 w-5 mr-2 text-yellow-500" />
                      <Link href="/problemas-arriendo" className="hover:text-blue-600">
                        Problemas de Arriendo
                      </Link>
                    </CardTitle>
                    <CardDescription>Derechos y deberes de arrendatarios</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Guía legal para inquilinos: subidas de arriendo, garantías, desalojos y más.
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/problemas-arriendo">Leer más</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Scale className="h-5 w-5 mr-2 text-red-500" />
                      <Link href="/deudas-cobranzas" className="hover:text-blue-600">
                        Deudas y Cobranzas
                      </Link>
                    </CardTitle>
                    <CardDescription>Cómo enfrentar las cobranzas sin miedo</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Conoce tus derechos frente a cobranzas, prescripción de deudas y alternativas para salir adelante.
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/deudas-cobranzas">Leer más</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-orange-500" />
                      <Link href="/estafas-internet" className="hover:text-blue-600">
                        Estafas por Internet
                      </Link>
                    </CardTitle>
                    <CardDescription>Qué hacer si fuiste víctima de fraude digital</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Cómo identificar estafas, dónde denunciar y cómo protegerte en el futuro.
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/estafas-internet">Leer más</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-purple-500" />
                      <Link href="/clausulas-abusivas" className="hover:text-blue-600">
                        Cláusulas Abusivas
                      </Link>
                    </CardTitle>
                    <CardDescription>Cómo identificarlas y qué hacer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Aprende a detectar cláusulas ilegales en contratos y cómo defenderte legalmente.
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/clausulas-abusivas">Leer más</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-blue-500" />
                      <Link href="/vuelos-cancelados" className="hover:text-blue-600">
                        Vuelos Cancelados
                      </Link>
                    </CardTitle>
                    <CardDescription>Tus derechos si tu vuelo fue cancelado o retrasado</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Qué compensaciones puedes exigir y cómo reclamar ante aerolíneas y autoridades.
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/vuelos-cancelados">Leer más</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <AdUnit slot="1357924680" format="horizontal" position="in-content" />

              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-blue-500" />
                  ¿Necesitas ayuda con un tema legal específico?
                </h2>
                <p className="mb-4">
                  En LegalPO contamos con asistencia legal personalizada para ayudarte a resolver tus dudas y problemas
                  legales de forma rápida y efectiva.
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
                      <WhatsAppButton />
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
                  <CardTitle className="text-lg">Temas más consultados</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/deudas" className="text-blue-600 hover:underline flex items-center">
                        <Scale className="h-4 w-4 mr-2" />
                        Consultas sobre deudas
                      </Link>
                    </li>
                    <li>
                      <Link href="/derechos-consumidor" className="text-blue-600 hover:underline flex items-center">
                        <Shield className="h-4 w-4 mr-2" />
                        Derechos del consumidor
                      </Link>
                    </li>
                    <li>
                      <Link href="/problemas-arriendo" className="text-blue-600 hover:underline flex items-center">
                        <Book className="h-4 w-4 mr-2" />
                        Problemas de arriendo
                      </Link>
                    </li>
                    <li>
                      <Link href="/victima-delito" className="text-blue-600 hover:underline flex items-center">
                        <Shield className="h-4 w-4 mr-2" />
                        Víctimas de delitos
                      </Link>
                    </li>
                    <li>
                      <Link href="/garantia-legal" className="text-blue-600 hover:underline flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        Garantía legal
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-blue-50 border-blue-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Info className="h-5 w-5 mr-2 text-blue-500" />
                    Disclaimer legal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    La información proporcionada en esta sección tiene carácter meramente informativo y no constituye
                    asesoramiento legal. Para casos específicos, te recomendamos consultar con un abogado especializado.
                  </p>
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
