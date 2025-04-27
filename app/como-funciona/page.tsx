import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  ArrowLeft,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  FileText,
  Calculator,
  MessageSquare,
  FileCheck,
} from "lucide-react"

export default function ComoFuncionaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Cómo Funciona LegalPO</CardTitle>
            <CardDescription className="text-center text-lg">
              Descubre cómo LegalPO puede ayudarte con tus consultas legales
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-3">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-semibold">Análisis de Documentos</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Sube tus documentos legales y nuestro sistema de inteligencia artificial los analizará en segundos.
                  Recibirás un resumen claro y comprensible de los puntos más importantes, identificando posibles
                  problemas o cláusulas que requieran atención.
                </p>
                <div className="mt-4">
                  <Button asChild>
                    <Link href="/analyze">Analizar documento</Link>
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Análisis de documentos"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Calculadoras legales"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-3">
                  <Calculator className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-semibold">Calculadoras Legales</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Utiliza nuestras calculadoras especializadas para determinar finiquitos, pensiones alimenticias y
                  otros cálculos legales relevantes. Nuestras herramientas te proporcionan estimaciones precisas basadas
                  en la legislación chilena vigente.
                </p>
                <div className="mt-4 space-x-2">
                  <Button asChild>
                    <Link href="/calculadora-finiquito">Calculadora de Finiquito</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/calculadora-pensiones">Calculadora de Pensiones</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-3">
                  <MessageSquare className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-semibold">Consultas Legales</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Realiza consultas sobre normativa laboral chilena y recibe respuestas basadas en el Código del Trabajo
                  y leyes complementarias. Nuestro asistente virtual está disponible 24/7 para resolver tus dudas
                  legales de manera rápida y precisa.
                </p>
                <div className="mt-4">
                  <Button asChild>
                    <Link href="/dudas-laborales">Consultar dudas</Link>
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Consultas legales"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Generación de documentos"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-3">
                  <FileCheck className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-semibold">Generación de Documentos</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Crea documentos legales personalizados en minutos. Desde contratos de trabajo hasta cartas de
                  renuncia, nuestro sistema te guiará paso a paso para generar documentos que cumplan con todos los
                  requisitos legales necesarios.
                </p>
                <div className="mt-4">
                  <Button asChild>
                    <Link href="/generar-contrato">Generar contrato</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <h2 className="text-2xl font-semibold mb-4">Síguenos en redes sociales</h2>
              <div className="flex space-x-4">
                <Link href="https://facebook.com" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="https://twitter.com" className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="p-2 bg-pink-600 text-white rounded-full hover:bg-pink-700"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="https://linkedin.com" className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-900">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </div>
  )
}
