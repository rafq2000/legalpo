import Link from "next/link"
import { Shield, FileText, Calculator, MessageSquare, CheckCircle, HelpCircle, Scale, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { LegalDisclaimer } from "@/components/legal-disclaimer"
import { WhatsappContactButton } from "@/components/whatsapp-contact-button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1 bg-blue-800 text-white">
        <div className="container mx-auto py-16 px-4 flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="flex justify-center">
              <div className="bg-blue-700/50 p-4 rounded-xl">
                <Shield className="h-16 w-16 text-blue-200" />
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">¿Tienes dudas legales?</h1>
              <h2 className="text-4xl font-semibold text-green-300">Nosotros te las explicamos claro, sin vueltas.</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Legal Po analiza tus documentos, responde tus consultas laborales o de deudas, y calcula lo que te
                corresponde. Todo en lenguaje simple.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link href="/upload">Analizar documento</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-blue-700 text-lg"
              >
                <Link href="/ask">Hacer una consulta</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <section className="py-4 bg-white border-b border-gray-200">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4">
            <div className="flex-1">
              <p className="text-sm text-gray-500 font-medium">Publicidad</p>
              <div className="h-16 flex items-center">
                <p className="text-gray-700">Espacio publicitario - Banner horizontal principal</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-xs">
              Anunciar aquí
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de beneficios clave */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Lenguaje simple</h3>
              <p className="text-gray-600">Explicamos temas legales sin tecnicismos ni palabras complicadas.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Scale className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Respuestas precisas</h3>
              <p className="text-gray-600">Información exacta sobre tus derechos y obligaciones legales.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <HelpCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Ayuda inmediata</h3>
              <p className="text-gray-600">Respuestas al instante, sin esperas ni trámites complicados.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-3xl font-bold">"</span>
                      </div>
                      <p className="text-xl font-medium">Testimonios reales</p>
                    </div>
                  </div>

                  <div className="md:w-2/3 p-8 md:p-10">
                    <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                      "Tenía miedo de que me estuvieran cobrando de más en mi finiquito. Usé la calculadora y descubrí
                      que me debían 3 meses más. Gracias a Legal Po pude reclamar lo que me correspondía por ley."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-700 font-bold">M</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">María González</p>
                        <p className="text-gray-500 text-sm">Profesora, 34 años</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                  <div className="p-4 bg-gray-100 border-b border-gray-200">
                    <p className="text-sm text-gray-500 font-medium">Publicidad</p>
                  </div>
                  <div className="p-6 flex flex-col justify-center items-center h-[calc(100%-56px)]">
                    <p className="text-gray-700 text-center mb-4">Espacio publicitario - Banner lateral</p>
                    <Button variant="outline" size="sm" className="text-xs">
                      Anunciar aquí
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarjetas visuales con funciones claras */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Te ayudamos a entender tus derechos</h2>
            <p className="text-xl text-gray-600">Herramientas diseñadas para personas comunes, no para abogados</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Tarjeta 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-xl overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <FileText className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Analiza tu documento</h3>
                <p className="text-gray-600 mb-5">
                  Sube cualquier resolución, contrato o carta. Te explicamos qué significa en palabras simples.
                </p>
                <Button asChild variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                  <Link href="/analyze">Subir documento</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Tarjeta 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-xl overflow-hidden">
              <div className="h-2 bg-green-600"></div>
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-5">
                  <Calculator className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Calcula lo que te corresponde</h3>
                <p className="text-gray-600 mb-5">
                  ¿Te deben dinero? Averigua exactamente cuánto con nuestras calculadoras simples.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Button asChild variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                    <Link href="/calculadora-pensiones">Pensiones</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                    <Link href="/calculadora-finiquito">Finiquito</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tarjeta 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-xl overflow-hidden">
              <div className="h-2 bg-purple-600"></div>
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                  <MessageSquare className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Consulta tus dudas</h3>
                <p className="text-gray-600 mb-5">
                  Dudas sobre trabajo o deudas. Te respondemos de forma clara y directa, sin tecnicismos.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Button asChild variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                    <Link href="/dudas-laborales">Laborales</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                    <Link href="/ask">Deudas</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tarjeta 4 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-xl overflow-hidden">
              <div className="h-2 bg-amber-600"></div>
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                  <CheckCircle className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Genera documentos</h3>
                <p className="text-gray-600 mb-5">
                  Crea contratos y documentos legales simples, sin lenguaje complicado ni cláusulas confusas.
                </p>
                <Button asChild variant="outline" className="w-full border-amber-200 text-amber-700 hover:bg-amber-50">
                  <Link href="/generador-contratos">Crear documento</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección de confianza y alivio */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-8 md:mb-0 md:pr-10">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-12 h-12 text-blue-600" />
                  </div>
                </div>

                <div className="md:w-2/3 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                    Tranquilo, estás en el lugar correcto
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Sabemos que enfrentar temas legales puede ser estresante y confuso. Por eso creamos Legal Po: para
                    que puedas entender tus derechos sin necesidad de ser abogado o gastar en consultas caras.
                  </p>
                  <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-8">
                    <Link href="/ask">Resolver mi duda ahora</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-t border-b border-gray-200">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-100 rounded-xl p-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <p className="text-sm text-gray-500 font-medium mb-2">Publicidad</p>
                  <p className="text-gray-700 font-medium">Espacio publicitario - Banner horizontal secundario</p>
                </div>
                <Button variant="outline" size="sm" className="text-xs">
                  Anunciar aquí
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Preguntas frecuentes</h2>
            <p className="text-xl text-gray-600">Respuestas claras a tus dudas más comunes</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">¿Cómo funciona Legal Po?</h3>
                <p className="text-gray-600">
                  Simplemente sube tu documento o escribe tu consulta. Nuestro sistema analiza el contenido y te da una
                  explicación clara, en lenguaje simple, sobre lo que significa y cuáles son tus derechos.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">¿Es seguro subir mis documentos?</h3>
                <p className="text-gray-600">
                  Absolutamente. Todos los documentos se procesan de forma segura y confidencial. No almacenamos tus
                  documentos más tiempo del necesario para analizarlos y nunca compartimos tu información.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">¿Necesito registrarme para usar Legal Po?</h3>
                <p className="text-gray-600">
                  No es necesario para usar las herramientas básicas. Sin embargo, crear una cuenta te permite acceder a
                  todas las funcionalidades de la plataforma.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">¿Las calculadoras son precisas?</h3>
                <p className="text-gray-600">
                  Nuestras calculadoras utilizan las fórmulas y parámetros establecidos por la ley actual. Sin embargo,
                  cada caso puede tener particularidades, por lo que te recomendamos usar los resultados como una
                  referencia informativa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección de registro */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-800 to-blue-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Crea tu cuenta gratuita y accede a todas las herramientas
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Regístrate para acceder a todas las funcionalidades de Legal Po.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Acceso a todas las herramientas de la plataforma</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Consultas ilimitadas sobre temas legales</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Soporte personalizado</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                    <Link href="/auth/google">
                      <span className="flex items-center">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="currentColor"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                        Continuar con Google
                      </span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    <Link href="/register">Registrarse con email</Link>
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-lg">Legal Po</span>
                    </div>
                    <div className="bg-green-500/20 text-green-300 text-xs font-medium px-3 py-1 rounded-full">
                      Cuenta Gratuita
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4 flex items-center">
                      <FileText className="w-5 h-5 text-blue-300 mr-3" />
                      <div>
                        <p className="font-medium">Análisis de documentos</p>
                        <p className="text-sm text-blue-200">Acceso ilimitado</p>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 flex items-center">
                      <Calculator className="w-5 h-5 text-green-300 mr-3" />
                      <div>
                        <p className="font-medium">Calculadoras legales</p>
                        <p className="text-sm text-blue-200">Todas las herramientas</p>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 flex items-center">
                      <MessageSquare className="w-5 h-5 text-purple-300 mr-3" />
                      <div>
                        <p className="font-medium">Consultas personalizadas</p>
                        <p className="text-sm text-blue-200">Respuestas claras y precisas</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-blue-200 text-sm">Todas las herramientas en un solo lugar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer con mensaje final de empatía */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Legal Po. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Legal Disclaimer */}
      <LegalDisclaimer />

      {/* WhatsApp Contact Button */}
      <WhatsappContactButton />
    </div>
  )
}
