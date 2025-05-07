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
                  La pensión de alimentos es un derecho esencial para garantizar el bienestar y desarrollo integral de
                  los niños, niñas y adolescentes en Chile. Este derecho está consagrado en diversas normativas
                  nacionales e internacionales, como la Convención sobre los Derechos del Niño, la Constitución Política
                  de la República y el Código Civil chileno.
                </p>

                <p>
                  En términos legales, la pensión de alimentos comprende todo lo necesario para la subsistencia del
                  alimentario: alimentación, habitación, vestimenta, salud, educación, recreación y otros gastos
                  indispensables para su desarrollo. No se limita, por tanto, a la comida, sino que abarca todas las
                  necesidades básicas de la persona.
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
                              vivienda, etc.), liquidaciones de sueldo o boletas de honorarios del demandado.
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
                              Corporación de Asistencia Judicial.
                            </p>
                          </div>
                        </li>
                      </ol>
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
                      <p>En Chile, no existe una fórmula matemática exacta para calcular la pensión de alimentos.</p>
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
                      <p>
                        Desde 2022, con la Ley 21.389, existe el Registro Nacional de Deudores de Pensiones de
                        Alimentos.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
