import Link from "next/link"
import { Shield, ArrowLeft, Users, BookOpen, Scale, Award, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdUnit } from "@/components/ad-unit"
import { SidebarAd } from "@/components/sidebar-ad"
import { SiteFooter } from "@/components/site-footer"

export default function AcercaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold">LegalPO AI</span>
            </Link>
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Anuncio en la parte superior */}
      <div className="container py-4 mt-2">
        <AdUnit slot="2109876543" format="horizontal" className="horizontal" />
      </div>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Acerca de LegalPO AI</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestra misión es hacer que la información legal sea accesible para todos a través de tecnología
                  avanzada
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Nuestra historia</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  LegalPO AI nació en 2023 con la visión de democratizar el acceso a la información legal. Fundada por
                  un equipo de abogados y desarrolladores de software, nuestra plataforma combina experiencia legal con
                  tecnología de vanguardia.
                </p>

                {/* Anuncio en medio del contenido */}
                <div className="my-6 lg:hidden">
                  <AdUnit slot="1098765432" format="horizontal" className="horizontal in-content" />
                </div>

                <p className="text-muted-foreground md:text-xl/relaxed">
                  Identificamos que muchas personas enfrentan barreras para acceder y comprender documentos legales, ya
                  sea por la complejidad del lenguaje o por la dificultad de extraer información de documentos
                  escaneados o fotografiados.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Hoy, LegalPO AI se ha convertido en una herramienta esencial para estudiantes, profesionales y
                  cualquier persona que necesite comprender documentos legales o consultar sobre sus derechos.
                </p>

                <h2 className="text-3xl font-bold tracking-tighter mt-8">Nuestra misión</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Creemos que el acceso a la información legal es un derecho fundamental. Nuestra misión es proporcionar
                  herramientas que permitan a cualquier persona:
                </p>
                <ul className="space-y-2 text-muted-foreground md:text-xl/relaxed">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary p-1 mt-1">
                      <svg
                        className="h-3 w-3 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Extraer y digitalizar texto de documentos legales escaneados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary p-1 mt-1">
                      <svg
                        className="h-3 w-3 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Comprender el contenido y las implicaciones de documentos legales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary p-1 mt-1">
                      <svg
                        className="h-3 w-3 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Obtener información clara sobre sus derechos y obligaciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary p-1 mt-1">
                      <svg
                        className="h-3 w-3 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Tomar decisiones informadas en asuntos legales cotidianos</span>
                  </li>
                </ul>
              </div>

              {/* Sidebar con anuncio */}
              <SidebarAd />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nuestro equipo</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Un grupo multidisciplinario de profesionales dedicados a hacer la información legal accesible
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Users className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Equipo legal</CardTitle>
                    <CardDescription>Expertos en derecho</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Nuestro equipo legal está compuesto por abogados con experiencia en diversas áreas del derecho,
                    quienes supervisan el contenido y aseguran la precisión de la información proporcionada.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Equipo de desarrollo</CardTitle>
                    <CardDescription>Ingenieros y diseñadores</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Desarrolladores de software e ingenieros de IA que construyen y mejoran constantemente nuestras
                    herramientas de procesamiento de documentos y asistentes virtuales.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Equipo de contenido</CardTitle>
                    <CardDescription>Comunicadores y educadores</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Especialistas en comunicación que transforman conceptos legales complejos en información clara y
                    accesible para todos nuestros usuarios.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Anuncio antes de la última sección */}
        <div className="container py-4">
          <AdUnit slot="0987654321" format="horizontal" className="horizontal in-content" />
        </div>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nuestros valores</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Los principios que guían nuestro trabajo y nuestras decisiones cada día
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-8">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-4">
                  <Scale className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Accesibilidad</h3>
                <p className="text-muted-foreground">
                  Creemos que la información legal debe ser accesible para todos, independientemente de su formación o
                  recursos.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-4">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Precisión</h3>
                <p className="text-muted-foreground">
                  Nos comprometemos a proporcionar información legal precisa y actualizada, respaldada por
                  profesionales.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-4">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Privacidad</h3>
                <p className="text-muted-foreground">
                  Protegemos la confidencialidad de los documentos y consultas de nuestros usuarios con los más altos
                  estándares.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-4">
                  <Lightbulb className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovación</h3>
                <p className="text-muted-foreground">
                  Buscamos constantemente nuevas formas de mejorar nuestras herramientas y servicios mediante la
                  tecnología.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
