import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function QuienesSomosPage() {
  // El contenido de la página permanece igual, ya que no contiene direcciones de correo electrónico específicas
  // Si hubiera alguna dirección de correo electrónico en esta página, la cambiaríamos a contacto@legalpo.cl
  return (
    // Contenido de la página
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
            <CardTitle className="text-3xl font-bold text-center">Quiénes Somos</CardTitle>
            <CardDescription className="text-center text-lg">Conoce más sobre LegalPO y nuestro equipo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Nuestra Misión</h2>
              <p className="text-gray-700 dark:text-gray-300">
                En LegalPO, nuestra misión es democratizar el acceso a la información legal en Chile, proporcionando
                herramientas tecnológicas que permitan a cualquier persona entender y gestionar sus asuntos legales de
                manera sencilla y eficiente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Nuestra Visión</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Aspiramos a transformar la manera en que las personas interactúan con el sistema legal, eliminando
                barreras y simplificando procesos complejos mediante el uso de inteligencia artificial y tecnologías
                avanzadas.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Nuestro Equipo</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Somos un equipo multidisciplinario de profesionales apasionados por la tecnología y el derecho. Contamos
                con abogados especializados en derecho laboral, ingenieros de software y expertos en inteligencia
                artificial, todos comprometidos con hacer la información legal más accesible para todos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Nuestros Valores</h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  <span className="font-medium">Accesibilidad:</span> Creemos que la información legal debe estar al
                  alcance de todos.
                </li>
                <li>
                  <span className="font-medium">Innovación:</span> Buscamos constantemente nuevas formas de mejorar
                  nuestros servicios.
                </li>
                <li>
                  <span className="font-medium">Precisión:</span> Nos comprometemos a proporcionar información precisa y
                  actualizada.
                </li>
                <li>
                  <span className="font-medium">Confidencialidad:</span> Respetamos y protegemos la privacidad de
                  nuestros usuarios.
                </li>
                <li>
                  <span className="font-medium">Empatía:</span> Entendemos las necesidades y preocupaciones de nuestros
                  usuarios.
                </li>
              </ul>
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
