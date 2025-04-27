import Link from "next/link"
import { FileImage, MessageSquare, Search, Shield, Scale, Zap, Lock, BarChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// Importar el nuevo componente PageLayout
import { PageLayout } from "@/components/page-layout"

// Reemplazar toda la estructura de la página por el nuevo componente
export default function CaracteristicasPage() {
  return (
    <PageLayout
      title="Características de LegalPO"
      description="Descubre todas las herramientas y funcionalidades que ofrecemos para el análisis de documentos y consultas legales"
    >
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Tecnología OCR</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Extracción de texto avanzada</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nuestra tecnología OCR permite extraer texto de cualquier documento con precisión
              </p>
            </div>
          </div>

          {/* Mantener el resto del contenido igual */}
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <FileImage className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Múltiples formatos</CardTitle>
                  <CardDescription>Soporte para diversos tipos de archivos</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Procesa documentos en formato JPG, PNG, PDF y otros formatos de imagen comunes. Extrae texto de
                  cualquier documento escaneado o fotografiado.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Zap className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Procesamiento rápido</CardTitle>
                  <CardDescription>Resultados en segundos</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Nuestros algoritmos optimizados procesan tus documentos en cuestión de segundos, permitiéndote obtener
                  el texto extraído de forma inmediata.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Search className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Ajustes en tiempo real</CardTitle>
                  <CardDescription>Optimiza la extracción</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Ajusta el brillo, contraste y orientación de la imagen en tiempo real para obtener los mejores
                  resultados de OCR posibles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <MessageSquare className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Análisis de contenido</CardTitle>
                  <CardDescription>Comprensión del texto</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Analizamos automáticamente el contenido extraído para identificar el tipo de documento, partes
                  involucradas y disposiciones importantes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Lock className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Privacidad garantizada</CardTitle>
                  <CardDescription>Tus datos están seguros</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Todos los documentos procesados se eliminan automáticamente de nuestros servidores después del
                  análisis, garantizando la confidencialidad de tu información.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <BarChart className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Estadísticas detalladas</CardTitle>
                  <CardDescription>Análisis completo</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Obtén estadísticas detalladas sobre el texto extraído, incluyendo número de palabras, párrafos y
                  secciones identificadas en el documento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ... Resto de secciones ... */}

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Asistencia legal</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Consultas sobre deudas</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nuestro asistente legal te proporciona información actualizada sobre tus derechos como deudor
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Scale className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Información legal actualizada</CardTitle>
                  <CardDescription>Leyes y normativas vigentes</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Accede a información actualizada sobre las leyes y normativas vigentes relacionadas con deudas,
                  cobranzas y prescripción en Chile.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <MessageSquare className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Asistente conversacional</CardTitle>
                  <CardDescription>Consultas en lenguaje natural</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Realiza consultas en lenguaje natural sobre tus deudas y recibe respuestas claras y precisas adaptadas
                  a tu situación específica.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Shield className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Protección al consumidor</CardTitle>
                  <CardDescription>Conoce tus derechos</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Aprende sobre tus derechos como consumidor y deudor, incluyendo protecciones contra prácticas abusivas
                  de cobranza y acoso.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">¿Listo para comenzar?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Prueba LegalPO hoy mismo y descubre todas sus funcionalidades
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/analyze">Analizar documento</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/ask">Consultar sobre deudas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
