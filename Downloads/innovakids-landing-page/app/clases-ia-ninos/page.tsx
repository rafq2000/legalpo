import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Clases de IA para Niños Online | Innovakids - Inteligencia Artificial 8-14 Años LATAM",
  description:
    "🎓 Clases de inteligencia artificial para niños en Latinoamérica. Grupos de 5 alumnos, instructores expertos, proyectos reales con ChatGPT. ✅ Clase de Prueba GRATIS. México, Colombia, Argentina, Chile, Perú.",
  openGraph: {
    title: "Clases de IA para Niños | Innovakids LATAM",
    description: "Aprende inteligencia artificial en grupos reducidos. ¡Clase de prueba GRATIS!",
  },
}

export default function ClasesIANinos() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Clases de IA para Niños: Aprende Inteligencia Artificial Jugando
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 text-center mb-12">
                Las mejores <strong>clases de inteligencia artificial para niños</strong> de 8 a 14 años. Aprende
                ChatGPT, crea videos con IA, programa apps y domina las herramientas del futuro.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-12">
                <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-8 rounded-xl border border-cyan-500/30">
                  <div className="text-4xl mb-4">👨‍🏫</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Instructores Expertos</h3>
                  <p className="text-gray-300">
                    Profesores certificados con experiencia en educación infantil y tecnología
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-500/30">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Atención Personalizada</h3>
                  <p className="text-gray-300">
                    Solo 5 alumnos por clase para garantizar que cada niño reciba atención individual
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-900/30 to-red-900/30 p-8 rounded-xl border border-pink-500/30">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Proyectos Reales</h3>
                  <p className="text-gray-300">
                    Tu hijo creará apps, videos, juegos y más usando inteligencia artificial real
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-900/30 to-yellow-900/30 p-8 rounded-xl border border-orange-500/30">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Certificación Oficial</h3>
                  <p className="text-gray-300">Certificado verificable al completar el programa de clases de IA</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">¿Cómo son las Clases de IA para Niños?</h2>

              <p className="text-gray-300">
                Nuestras <strong>clases de inteligencia artificial para niños</strong> son 100% prácticas y dinámicas.
                Cada clase incluye:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 text-2xl">•</span>
                  <span className="text-gray-300">
                    <strong>15 min de teoría:</strong> Conceptos de IA explicados de forma simple y visual
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 text-2xl">•</span>
                  <span className="text-gray-300">
                    <strong>60 min de práctica:</strong> Uso hands-on de herramientas de IA reales
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 text-2xl">•</span>
                  <span className="text-gray-300">
                    <strong>15 min de proyecto:</strong> Aplicación práctica del aprendizaje del día
                  </span>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl border border-cyan-500/30 my-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Lo que Aprenderán en las Clases</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-white mb-3">🎨 Creatividad con IA</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Generación de imágenes profesionales</li>
                      <li>• Creación de videos y animaciones</li>
                      <li>• Diseño de personajes y avatares</li>
                      <li>• Producción de contenido multimedia</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-3">💻 Tecnología Práctica</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Programación de apps con IA</li>
                      <li>• Uso avanzado de ChatGPT</li>
                      <li>• Creación de páginas web</li>
                      <li>• Desarrollo de videojuegos</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Horarios Flexibles para Toda Latinoamérica</h2>

              <p className="text-gray-300 mb-6">
                Nuestras <strong>clases de IA para niños</strong> están disponibles en horarios adaptados a cada zona
                horaria de LATAM:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h4 className="font-bold text-cyan-400 mb-3">🌎 Zona Horaria México/Centro</h4>
                  <p className="text-gray-300 text-sm">Clases disponibles de lunes a viernes 4:00 PM - 7:00 PM</p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h4 className="font-bold text-purple-400 mb-3">🌎 Zona Horaria Colombia/Perú</h4>
                  <p className="text-gray-300 text-sm">Clases disponibles de lunes a viernes 5:00 PM - 8:00 PM</p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h4 className="font-bold text-pink-400 mb-3">🌎 Zona Horaria Argentina/Chile</h4>
                  <p className="text-gray-300 text-sm">Clases disponibles de lunes a viernes 6:00 PM - 9:00 PM</p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h4 className="font-bold text-orange-400 mb-3">📅 Fines de Semana</h4>
                  <p className="text-gray-300 text-sm">Horarios especiales sábados y domingos 10:00 AM - 1:00 PM</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-xl border-2 border-purple-500/50 my-12 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">🎁 Prueba una Clase GRATIS</h3>
                <p className="text-xl text-gray-200 mb-6">
                  Agenda una sesión de diagnóstico gratuita y descubre cómo tu hijo puede aprender IA
                </p>
                <p className="text-lg text-cyan-300 mb-8">
                  ⏰ Próximo grupo inicia el 26 de enero de 2026 • Cupos limitados
                </p>
                <Link href="/#sesion-estrategica">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold text-lg px-8 py-6 h-auto"
                  >
                    Agendar Clase de Prueba GRATIS
                  </Button>
                </Link>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Testimonios de Padres</h2>

              <div className="space-y-4 my-8">
                <blockquote className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-cyan-500 italic">
                  <p className="mb-3 text-gray-300">
                    "Las clases son excepcionales. El profesor se asegura de que cada niño entienda antes de avanzar. Mi
                    hijo está emocionado con cada clase."
                  </p>
                  <cite className="text-cyan-400 not-italic font-semibold">- Laura Martínez, Chile 🇨🇱</cite>
                </blockquote>

                <blockquote className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-purple-500 italic">
                  <p className="mb-3 text-gray-300">
                    "Lo mejor son los grupos pequeños. Mi hija recibe atención constante y ha creado proyectos
                    increíbles en solo 3 semanas."
                  </p>
                  <cite className="text-purple-400 not-italic font-semibold">- Roberto Sánchez, México 🇲🇽</cite>
                </blockquote>

                <blockquote className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-pink-500 italic">
                  <p className="mb-3 text-gray-300">
                    "Mi hijo pasó de no saber nada de IA a crear una app funcional. Las clases son dinámicas y muy bien
                    estructuradas."
                  </p>
                  <cite className="text-pink-400 not-italic font-semibold">- Patricia López, Perú 🇵🇪</cite>
                </blockquote>
              </div>

              <div className="text-center my-12">
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold text-lg px-8 py-4 bg-transparent"
                  >
                    Ver Programa Completo de Clases
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
