import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function TerminosLegalesPage() {
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
            <CardTitle className="text-3xl font-bold text-center">Términos y Condiciones Legales</CardTitle>
            <CardDescription className="text-center text-lg">
              Información legal sobre el uso de DocuScan AI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-3">1. Introducción</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Estos Términos y Condiciones regulan el uso del servicio DocuScan AI, accesible a través de nuestro
                sitio web. Al utilizar nuestros servicios, usted acepta estos términos en su totalidad. Si no está de
                acuerdo con estos términos, por favor, no utilice nuestro servicio.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">2. Descripción del Servicio</h2>
              <p className="text-gray-700 dark:text-gray-300">
                DocuScan AI proporciona herramientas de análisis de documentos legales, calculadoras especializadas,
                consultas sobre normativa laboral y generación de documentos legales. Nuestros servicios utilizan
                tecnología de inteligencia artificial para procesar y analizar información.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">3. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 dark:text-gray-300">
                La información proporcionada por DocuScan AI tiene carácter informativo y no constituye asesoramiento
                legal profesional. No nos hacemos responsables de las decisiones tomadas basadas en la información
                proporcionada por nuestro servicio. Recomendamos consultar con un abogado para casos específicos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">4. Privacidad y Protección de Datos</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Respetamos su privacidad y protegemos sus datos personales de acuerdo con nuestra Política de
                Privacidad. Los documentos subidos a nuestra plataforma son procesados con estrictas medidas de
                seguridad y confidencialidad. No compartimos su información con terceros sin su consentimiento
                explícito.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">5. Propiedad Intelectual</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Todo el contenido presente en DocuScan AI, incluyendo textos, gráficos, logotipos, iconos y software,
                está protegido por derechos de propiedad intelectual. No está permitida la reproducción, distribución o
                modificación de dicho contenido sin autorización previa.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">6. Modificaciones de los Términos</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán
                en vigor inmediatamente después de su publicación en nuestro sitio web. El uso continuado de nuestros
                servicios después de cualquier modificación constituye la aceptación de los nuevos términos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">7. Ley Aplicable</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Estos términos se rigen por las leyes de la República de Chile. Cualquier disputa relacionada con estos
                términos será sometida a la jurisdicción exclusiva de los tribunales de Santiago de Chile.
              </p>
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
