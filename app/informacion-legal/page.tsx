import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Briefcase, Home, CreditCard, Car, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Información Legal | LegalPO",
  description:
    "Encuentra información legal sobre derecho laboral, familiar, deudas, cobranzas y más temas legales en Chile.",
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
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">Información Legal</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Derecho Laboral */}
            <Card className="border-l-4 border-blue-500">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl text-blue-900">
                  <Briefcase className="h-5 w-5 mr-2 text-blue-500" />
                  Derecho Laboral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-blue-500 shrink-0 mt-0.5" />
                    <Link href="/finiquito-chile" className="text-blue-600 hover:underline">
                      Finiquito Laboral
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-blue-500 shrink-0 mt-0.5" />
                    <Link href="/laboral" className="text-blue-600 hover:underline">
                      Derechos Laborales
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-blue-500 shrink-0 mt-0.5" />
                    <Link href="/calculadora-finiquito" className="text-blue-600 hover:underline">
                      Calculadora de Finiquito
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-blue-500 shrink-0 mt-0.5" />
                    <Link href="/contratos/trabajo" className="text-blue-600 hover:underline">
                      Contrato de Trabajo
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-blue-500 shrink-0 mt-0.5" />
                    <Link href="/calculadora-pensiones" className="text-blue-600 hover:underline">
                      Calculadora de Pensiones
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-blue-500 shrink-0 mt-0.5" />
                    <Link href="/dudas-laborales" className="text-blue-600 hover:underline">
                      Consultas Laborales
                    </Link>
                  </li>
                </ul>
                <Button variant="link" asChild className="mt-4 p-0 h-auto text-blue-600">
                  <Link href="/laboral" className="flex items-center">
                    Ver más
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Derecho Familiar */}
            <Card className="border-l-4 border-green-500">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl text-green-900">
                  <Home className="h-5 w-5 mr-2 text-green-500" />
                  Derecho Familiar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <Link href="/pension-alimentos" className="text-green-600 hover:underline">
                      Pensión de Alimentos
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <Link href="/herencias" className="text-green-600 hover:underline">
                      Herencias
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <Link href="/calculadora-herencia" className="text-green-600 hover:underline">
                      Calculadora de Herencia
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <Link href="/consulta-familia" className="text-green-600 hover:underline">
                      Consultas Familiares
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <Link href="/contratos/arriendo" className="text-green-600 hover:underline">
                      Contrato de Arriendo
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <Link href="/contratos/servicios" className="text-green-600 hover:underline">
                      Contrato de Servicios
                    </Link>
                  </li>
                </ul>
                <Button variant="link" asChild className="mt-4 p-0 h-auto text-green-600">
                  <Link href="/consulta-familia" className="flex items-center">
                    Ver más
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Deudas y Cobranzas */}
            <Card className="border-l-4 border-purple-500">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl text-purple-900">
                  <CreditCard className="h-5 w-5 mr-2 text-purple-500" />
                  Deudas y Cobranzas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-purple-500 shrink-0 mt-0.5" />
                    <Link href="/deudas" className="text-purple-600 hover:underline">
                      Cobranzas y DICOM
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-purple-500 shrink-0 mt-0.5" />
                    <Link href="/deudas-prescritas" className="text-purple-600 hover:underline">
                      Prescripción de Deudas
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-purple-500 shrink-0 mt-0.5" />
                    <Link href="/derechos-deudor" className="text-purple-600 hover:underline">
                      Derechos del Deudor
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-purple-500 shrink-0 mt-0.5" />
                    <Link href="/cobranza-falsa" className="text-purple-600 hover:underline">
                      Cobranzas Falsas
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-purple-500 shrink-0 mt-0.5" />
                    <Link href="/consulta-deudas" className="text-purple-600 hover:underline">
                      Consultas sobre Deudas
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-purple-500 shrink-0 mt-0.5" />
                    <Link href="/cobros-excesivos" className="text-purple-600 hover:underline">
                      Cobros Excesivos
                    </Link>
                  </li>
                </ul>
                <Button variant="link" asChild className="mt-4 p-0 h-auto text-purple-600">
                  <Link href="/deudas" className="flex items-center">
                    Ver más
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Otros Temas */}
            <Card className="border-l-4 border-orange-500">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl text-orange-900">
                  <Car className="h-5 w-5 mr-2 text-orange-500" />
                  Otros Temas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-orange-500 shrink-0 mt-0.5" />
                    <Link href="/accidentes-transito" className="text-orange-600 hover:underline">
                      Accidentes de Tránsito
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-orange-500 shrink-0 mt-0.5" />
                    <Link href="/derechos-consumidor" className="text-orange-600 hover:underline">
                      Derechos del Consumidor
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-orange-500 shrink-0 mt-0.5" />
                    <Link href="/victima-delito" className="text-orange-600 hover:underline">
                      Víctimas de Delitos
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-orange-500 shrink-0 mt-0.5" />
                    <Link href="/estafas-internet" className="text-orange-600 hover:underline">
                      Estafas por Internet
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-orange-500 shrink-0 mt-0.5" />
                    <Link href="/suplantacion-identidad" className="text-orange-600 hover:underline">
                      Suplantación de Identidad
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-orange-500 shrink-0 mt-0.5" />
                    <Link href="/clonacion-tarjeta" className="text-orange-600 hover:underline">
                      Clonación de Tarjetas
                    </Link>
                  </li>
                </ul>
                <Button variant="link" asChild className="mt-4 p-0 h-auto text-orange-600">
                  <Link href="/ask" className="flex items-center">
                    Ver más
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-900">Acceso Rápido</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Link href="/analyze" className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium mb-2">Analizar Documento</h3>
                    <p className="text-gray-600 text-sm">Sube tu documento legal y recibe un análisis detallado</p>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Link href="/contratos" className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600"
                      >
                        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium mb-2">Generar Contrato</h3>
                    <p className="text-gray-600 text-sm">Crea contratos personalizados para diferentes situaciones</p>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Link href="/ask" className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-600"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium mb-2">Consultar Abogado</h3>
                    <p className="text-gray-600 text-sm">Realiza consultas legales y recibe respuestas de expertos</p>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
