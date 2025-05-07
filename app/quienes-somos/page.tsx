import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, Facebook, Twitter, Instagram, Linkedin, Scale, BookOpen, Users, Shield } from "lucide-react"

export const metadata = {
  title: "Quiénes Somos | LegalPO - Democratizando el acceso al derecho en Chile",
  description:
    "Conoce a LegalPO, la plataforma que acerca el conocimiento legal a personas comunes sin reemplazar abogados. Nuestra misión es hacer el derecho accesible para todos en Chile.",
}

export default function QuienesSomosPage() {
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
            <CardTitle className="text-3xl font-bold text-center">Quiénes Somos</CardTitle>
            <CardDescription className="text-center text-lg">Acercando el derecho a todos los chilenos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-3">
                  <Scale className="h-6 w-6 mr-2 text-blue-600" />
                  <h2 className="text-2xl font-semibold">Nuestra Misión</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  En LegalPO, nuestra misión es democratizar el acceso a la información legal en Chile, proporcionando
                  herramientas tecnológicas que permitan a cualquier persona entender y gestionar sus asuntos legales de
                  manera sencilla y eficiente. <strong>No buscamos reemplazar a los abogados</strong>, sino complementar
                  su labor, acercando el conocimiento jurídico básico a quienes más lo necesitan.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-3">
                  <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
                  <h2 className="text-2xl font-semibold">Nuestra Visión</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Aspiramos a transformar la manera en que las personas interactúan con el sistema legal, eliminando
                  barreras y simplificando procesos complejos mediante el uso de inteligencia artificial y tecnologías
                  avanzadas. Creemos en un Chile donde todos, independientemente de su condición socioeconómica, puedan
                  comprender sus derechos y obligaciones legales.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-3">
                <Users className="h-6 w-6 mr-2 text-blue-600" />
                <h2 className="text-2xl font-semibold">Nuestro Equipo</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Somos un equipo multidisciplinario de profesionales apasionados por la tecnología y el derecho. Contamos
                con abogados especializados en diversas áreas del derecho chileno, ingenieros de software y expertos en
                inteligencia artificial, todos comprometidos con hacer la información legal más accesible para todos.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                Nuestro enfoque combina el rigor jurídico con la innovación tecnológica, permitiéndonos crear
                herramientas que simplifican conceptos legales complejos sin sacrificar la precisión. Trabajamos
                constantemente para mantenernos actualizados con los cambios en la legislación chilena y mejorar
                nuestras soluciones.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-3">
                <Shield className="h-6 w-6 mr-2 text-blue-600" />
                <h2 className="text-2xl font-semibold">Nuestros Valores</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Accesibilidad</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Creemos que la información legal debe estar al alcance de todos, independientemente de su formación
                    académica o recursos económicos.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Innovación</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Buscamos constantemente nuevas formas de mejorar nuestros servicios y hacer que la información legal
                    sea más comprensible y útil.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Precisión</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Nos comprometemos a proporcionar información precisa y actualizada, basada en la legislación vigente
                    y la doctrina jurídica chilena.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Empatía</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Entendemos las necesidades y preocupaciones de nuestros usuarios, y diseñamos nuestras soluciones
                    pensando en ellos y en sus circunstancias particulares.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-center">Nuestro Compromiso</h2>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                En LegalPO nos comprometemos a acercar el conocimiento del derecho a personas comunes, explicando
                conceptos jurídicos complejos en un lenguaje sencillo y accesible. Nuestra plataforma está diseñada para
                orientar y educar, pero siempre recomendamos consultar con un profesional del derecho para casos
                específicos.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-center mt-3">
                Creemos firmemente que un ciudadano informado puede tomar mejores decisiones y ejercer plenamente sus
                derechos. Por eso, trabajamos día a día para que el derecho deje de ser un mundo exclusivo de
                especialistas y se convierta en una herramienta al alcance de todos los chilenos.
              </p>
            </div>

            <div className="pt-6 border-t">
              <h2 className="text-2xl font-semibold mb-4 text-center">Síguenos en redes sociales</h2>
              <div className="flex justify-center space-x-4">
                <Link
                  href="https://facebook.com"
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://twitter.com"
                  className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://instagram.com"
                  className="p-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-500 dark:text-gray-400">
                ¿Tienes alguna pregunta o sugerencia? Escríbenos a{" "}
                <a href="mailto:contacto@legalpo.cl" className="text-blue-600 hover:underline">
                  contacto@legalpo.cl
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </div>
  )
}
