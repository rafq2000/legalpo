import Link from "next/link"
import { Shield, HelpCircle, FileText, Calculator, MessageSquare, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import type { Metadata } from "next"
import { SiteFooter } from "@/components/site-footer"
import { PopularQuestions } from "@/components/popular-questions"
import { AdUnit } from "@/components/ad-unit"
import { RegisterHero } from "@/components/register-hero"

export const metadata: Metadata = {
  title: "LegalPO - Herramientas legales con IA para documentos y consultas jurídicas en Chile",
  description:
    "Analiza documentos legales, calcula finiquitos, pensiones alimenticias y obtén respuestas a tus consultas sobre deudas y derecho laboral en Chile con inteligencia artificial.",
  keywords:
    "documentos legales, análisis legal, finiquito, pensión alimenticia, deudas, derecho laboral, Chile, asesoría legal, inteligencia artificial",
  authors: [{ name: "LegalPO" }],
  creator: "LegalPO",
  publisher: "LegalPO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "LegalPO - Análisis de documentos legales y consultas jurídicas en Chile",
    description:
      "Analiza documentos legales, calcula finiquitos, pensiones alimenticias y obtén respuestas a tus consultas sobre deudas y derecho laboral en Chile.",
    url: "https://legalpo.cl",
    siteName: "LegalPO",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LegalPO - Análisis de documentos legales y consultas jurídicas en Chile",
    description:
      "Analiza documentos legales, calcula finiquitos, pensiones alimenticias y obtén respuestas a tus consultas sobre deudas y derecho laboral en Chile.",
  },
  generator: "Next.js",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen layout-stable">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section - Optimizado para CLS */}
        <section className="bg-blue-800 text-white hero-container">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-blue-700/50 p-4 rounded-xl icon-container w-20 h-20">
                <Shield className="h-16 w-16 text-blue-200" />
              </div>
            </div>
            <h1 className="text-5xl font-bold tracking-tight mb-4">¿Tienes dudas legales?</h1>
            <h2 className="text-4xl font-semibold text-green-300 mb-6">
              Nosotros te las explicamos claro, sin vueltas.
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              LegalPO analiza tus documentos, responde tus consultas laborales o deudas, y calcula lo que te
              corresponde. Todo en lenguaje simple.
            </p>
          </div>
        </section>

        {/* Servicios Principales - Grid optimizado para CLS */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Nuestros Servicios</h2>

            <div className="services-grid">
              {/* Grupo 1: Consultas */}
              <div className="service-card bg-blue-50 rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
                  <div className="icon-container mr-2">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  Consultas Legales
                </h3>
                <p className="text-gray-700 mb-6">Resuelve tus dudas legales con nuestros asistentes especializados</p>
                <div className="stable-list">
                  <Button
                    asChild
                    variant="outline"
                    className="stable-button w-full justify-start text-left border-blue-200 text-blue-700 hover:bg-blue-100"
                  >
                    <Link href="/dudas-laborales" className="stable-list-item">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 icon-container">
                        <HelpCircle className="h-4 w-4" />
                      </span>
                      Consultas Laborales
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="stable-button w-full justify-start text-left border-blue-200 text-blue-700 hover:bg-blue-100"
                  >
                    <Link href="/deudas" className="stable-list-item">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 icon-container">
                        <HelpCircle className="h-4 w-4" />
                      </span>
                      Consultas sobre Deudas
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="stable-button w-full justify-start text-left border-blue-200 text-blue-700 hover:bg-blue-100"
                  >
                    <Link href="/consulta-familia" className="stable-list-item">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 icon-container">
                        <HelpCircle className="h-4 w-4" />
                      </span>
                      Consultas Familiares
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="stable-button w-full justify-start text-left border-blue-200 text-blue-700 hover:bg-blue-100"
                  >
                    <Link href="/ask" className="stable-list-item">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 icon-container">
                        <HelpCircle className="h-4 w-4" />
                      </span>
                      Consultas Generales
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Grupo 2: Calculadoras */}
              <div className="service-card bg-green-50 rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <div className="icon-container mr-2">
                    <Calculator className="h-6 w-6" />
                  </div>
                  Calculadoras Legales
                </h3>
                <p className="text-gray-700 mb-6">
                  Calcula montos y plazos legales con nuestras herramientas especializadas
                </p>
                <div className="stable-list">
                  <Button
                    asChild
                    variant="outline"
                    className="stable-button w-full justify-start text-left border-green-200 text-green-700 hover:bg-green-100"
                  >
                    <Link href="/calculadora-finiquito" className="stable-list-item">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2 icon-container">
                        <Calculator className="h-4 w-4" />
                      </span>
                      Calculadora de Finiquito
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="stable-button w-full justify-start text-left border-green-200 text-green-700 hover:bg-green-100"
                  >
                    <Link href="/calculadora-pensiones" className="stable-list-item">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2 icon-container">
                        <Calculator className="h-4 w-4" />
                      </span>
                      Calculadora de Pensión Alimenticia
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="stable-button w-full justify-start text-left border-green-200 text-green-700 hover:bg-green-100"
                  >
                    <Link href="/calculadora-herencia" className="stable-list-item">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2 icon-container">
                        <Calculator className="h-4 w-4" />
                      </span>
                      Calculadora de Herencia
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Grupo 3: Documentos */}
              <div className="service-card bg-purple-50 rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
                  <div className="icon-container mr-2">
                    <FileText className="h-6 w-6" />
                  </div>
                  Documentos
                </h3>
                <p className="text-gray-700 mb-6">Analiza y genera documentos legales con nuestra tecnología</p>
                <div className="stable-list">
                  <Button
                    asChild
                    variant="outline"
                    className="stable-button w-full justify-start text-left border-purple-200 text-purple-700 hover:bg-purple-100"
                  >
                    <Link href="/analyze" className="stable-list-item">
                      <span className="bg-purple-100 text-purple-600 p-1 rounded-full mr-2 icon-container">
                        <FileText className="h-4 w-4" />
                      </span>
                      Analizar Documento
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="stable-button w-full justify-start text-left border-purple-200 text-purple-700 hover:bg-purple-100"
                  >
                    <Link href="/generador-contratos" className="stable-list-item">
                      <span className="bg-purple-100 text-purple-600 p-1 rounded-full mr-2 icon-container">
                        <FileText className="h-4 w-4" />
                      </span>
                      Generador de Contratos
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="stable-button w-full justify-start text-left border-purple-200 text-purple-700 hover:bg-purple-100"
                  >
                    <Link href="/contratos/arriendo" className="stable-list-item">
                      <span className="bg-purple-100 text-purple-600 p-1 rounded-full mr-2 icon-container">
                        <FileText className="h-4 w-4" />
                      </span>
                      Contrato de Arriendo
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="stable-button w-full justify-start text-left border-purple-200 text-purple-700 hover:bg-purple-100"
                  >
                    <Link href="/contratos/trabajo" className="stable-list-item">
                      <span className="bg-purple-100 text-purple-600 p-1 rounded-full mr-2 icon-container">
                        <FileText className="h-4 w-4" />
                      </span>
                      Contrato de Trabajo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Información Legal - Optimizada para CLS */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Información Legal</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Tarjeta 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden min-h-[200px]">
                <div className="h-2 bg-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Derecho Laboral</h3>
                  <ul className="stable-list text-gray-700">
                    <li className="stable-list-item">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 icon-container">
                        <CheckCircle className="h-3 w-3" />
                      </span>
                      <Link href="/finiquito-chile" className="hover:text-blue-600">
                        Finiquito Laboral
                      </Link>
                    </li>
                    <li className="stable-list-item">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 icon-container">
                        <CheckCircle className="h-3 w-3" />
                      </span>
                      <Link href="/laboral" className="hover:text-blue-600">
                        Derechos Laborales
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tarjeta 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden min-h-[200px]">
                <div className="h-2 bg-green-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Derecho Familiar</h3>
                  <ul className="stable-list text-gray-700">
                    <li className="stable-list-item">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2 icon-container">
                        <CheckCircle className="h-3 w-3" />
                      </span>
                      <Link href="/pension-alimentos" className="hover:text-green-600">
                        Pensión de Alimentos
                      </Link>
                    </li>
                    <li className="stable-list-item">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2 icon-container">
                        <CheckCircle className="h-3 w-3" />
                      </span>
                      <Link href="/herencias" className="hover:text-green-600">
                        Herencias
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tarjeta 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden min-h-[200px]">
                <div className="h-2 bg-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Deudas y Cobranzas</h3>
                  <ul className="stable-list text-gray-700">
                    <li className="stable-list-item">
                      <span className="bg-purple-100 text-purple-600 p-1 rounded-full mr-2 icon-container">
                        <CheckCircle className="h-3 w-3" />
                      </span>
                      <Link href="/deudas" className="hover:text-purple-600">
                        Cobranzas y DICOM
                      </Link>
                    </li>
                    <li className="stable-list-item">
                      <span className="bg-purple-100 text-purple-600 p-1 rounded-full mr-2 icon-container">
                        <CheckCircle className="h-3 w-3" />
                      </span>
                      <Link href="/consulta-deudas" className="hover:text-purple-600">
                        Prescripción de Deudas
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tarjeta 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden min-h-[200px]">
                <div className="h-2 bg-amber-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Otros Temas</h3>
                  <ul className="stable-list text-gray-700">
                    <li className="stable-list-item">
                      <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2 icon-container">
                        <CheckCircle className="h-3 w-3" />
                      </span>
                      <Link href="/accidentes-transito" className="hover:text-amber-600">
                        Accidentes de Tránsito
                      </Link>
                    </li>
                    <li className="stable-list-item">
                      <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2 icon-container">
                        <CheckCircle className="h-3 w-3" />
                      </span>
                      <Link href="/derechos-consumidor" className="hover:text-amber-600">
                        Derechos del Consumidor
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Acceso Rápido - Botones grandes optimizados */}
        <section className="py-12 bg-blue-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Acceso Rápido</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button asChild size="lg" className="stable-button h-auto py-6 bg-blue-700 hover:bg-blue-600">
                <Link href="/analyze" className="flex flex-col items-center">
                  <div className="icon-container mb-2">
                    <FileText className="h-8 w-8" />
                  </div>
                  <span className="text-lg font-medium">Analizar Documento</span>
                </Link>
              </Button>
              <Button asChild size="lg" className="stable-button h-auto py-6 bg-green-600 hover:bg-green-500">
                <Link href="/calculadora-herencia" className="flex flex-col items-center">
                  <div className="icon-container mb-2">
                    <Calculator className="h-8 w-8" />
                  </div>
                  <span className="text-lg font-medium">Calculadora Herencia</span>
                </Link>
              </Button>
              <Button asChild size="lg" className="stable-button h-auto py-6 bg-purple-600 hover:bg-purple-500">
                <Link href="/dudas-laborales" className="flex flex-col items-center">
                  <div className="icon-container mb-2">
                    <MessageSquare className="h-8 w-8" />
                  </div>
                  <span className="text-lg font-medium">Consultas Laborales</span>
                </Link>
              </Button>
              <Button asChild size="lg" className="stable-button h-auto py-6 bg-amber-600 hover:bg-amber-500">
                <Link href="/generador-contratos" className="flex flex-col items-center">
                  <div className="icon-container mb-2">
                    <FileText className="h-8 w-8" />
                  </div>
                  <span className="text-lg font-medium">Generar Contrato</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Sección de consultas populares */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Consultas Populares</h2>
            <div className="layout-stable">
              <PopularQuestions />
            </div>
          </div>
        </section>

        {/* Sección de registro */}
        <div className="layout-stable">
          <RegisterHero />
        </div>

        {/* Sección de publicidad con espacio reservado */}
        <section className="py-8 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="ad-container horizontal">
              <AdUnit slot="1234567890" format="horizontal" responsive={true} position="footer" />
            </div>
          </div>
        </section>
      </main>

      <div className="footer-stable">
        <SiteFooter />
      </div>
    </div>
  )
}
