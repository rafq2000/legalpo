import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Calculator, MessageSquare, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-6xl font-bold text-blue-800 dark:text-blue-300">404</h1>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Página no encontrada
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <Button asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Volver al inicio
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/deudas">Consultar sobre deudas</Link>
              </Button>
            </div>

            <div className="mt-16">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                O quizás buscabas una de nuestras herramientas:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card className="text-left hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5 text-green-600" />
                      Calculadoras
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/calculadora-finiquito" className="text-blue-700 hover:underline">
                          Calculadora de Finiquito
                        </Link>
                      </li>
                      <li>
                        <Link href="/calculadora-pensiones" className="text-blue-700 hover:underline">
                          Calculadora de Pensiones
                        </Link>
                      </li>
                      <li>
                        <Link href="/calculadora-herencia" className="text-blue-700 hover:underline">
                          Calculadora de Herencia
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="text-left hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-purple-600" />
                      Documentos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/analyze" className="text-blue-700 hover:underline">
                          Analizar Documentos
                        </Link>
                      </li>
                      <li>
                        <Link href="/generador-contratos" className="text-blue-700 hover:underline">
                          Generador de Contratos
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="text-left hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                      Consultas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/dudas-laborales" className="text-blue-700 hover:underline">
                          Consultas Laborales
                        </Link>
                      </li>
                      <li>
                        <Link href="/deudas" className="text-blue-700 hover:underline">
                          Consultas sobre Deudas
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
