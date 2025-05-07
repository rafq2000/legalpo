import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield, FileText, Phone, Clock, HelpCircle, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageAds } from "@/components/page-ads"
import { SidebarAds } from "@/components/sidebar-ads"
import { AdUnit } from "@/components/ad-unit"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

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
              </div>

              <AdUnit slot="1357924680" format="horizontal" position="in-content" />

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
