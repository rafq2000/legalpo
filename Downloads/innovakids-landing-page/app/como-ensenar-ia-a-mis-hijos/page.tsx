import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Shield, Star } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cómo Enseñar IA a Mis Hijos en 2026: Guía Completa para Padres | Innovakids",
  description:
    "Descubre cómo enseñar inteligencia artificial a tus hijos de 8-14 años con métodos probados. Guía paso a paso para padres en Latinoamérica sobre educación en IA para niños.",
  keywords: [
    "cómo enseñar ia a mis hijos",
    "cómo aprender ia",
    "enseñar inteligencia artificial a niños",
    "cómo trabajar ia con niños",
    "educación ia infantil",
    "guía padres ia niños",
    "enseñar ia paso a paso",
    "herramientas ia niños gratis",
  ],
  openGraph: {
    title: "Cómo Enseñar IA a Mis Hijos: Guía Completa 2026",
    description: "Descubre cómo enseñar inteligencia artificial a tus hijos con métodos probados por +500 familias.",
    url: "https://www.innovakidslatam.com/como-ensenar-ia-a-mis-hijos",
  },
}

export default function ComoEnsenarIAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
              Cómo Enseñar IA
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                a Tus Hijos
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              La guía definitiva para padres que quieren preparar a sus hijos para el futuro
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <div className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full">
                <p className="text-cyan-400 font-bold">+500 Familias</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full">
                <p className="text-purple-400 font-bold">Método Probado</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full">
                <p className="text-pink-400 font-bold">100% Práctico</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">Por Qué Enseñar IA Ahora</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">El Mundo Cambió</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                La IA ya no es futuro, es presente. Los niños que no aprendan a usarla estarán en desventaja, como
                quienes no aprendieron a usar computadoras en los 90.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Ventaja Competitiva</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Los niños que dominan IA hoy serán los líderes del mañana. Es la habilidad más demandada en
                universidades y empleos del futuro.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Desarrollo Cognitivo</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Aprender IA desarrolla pensamiento crítico, creatividad y resolución de problemas. Son habilidades que
                usarán toda la vida.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Momento Perfecto</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Entre 8-14 años es la edad ideal. Tienen la madurez cognitiva necesaria y la curiosidad para aprender
                sin miedo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">Cómo Enseñar IA Paso a Paso</h2>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl font-bold text-white">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-4">Empieza con lo Divertido</h3>
                <p className="text-xl text-gray-300 mb-6">
                  No empieces con teoría aburrida. Deja que tu hijo juegue con ChatGPT, cree historias, genere imágenes.
                  Que se enamore primero, aprenda después.
                </p>
                <div className="bg-cyan-900/20 p-6 rounded-lg border border-cyan-500/20">
                  <p className="text-cyan-300 font-semibold mb-2">Herramientas recomendadas:</p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• ChatGPT (para conversaciones y creatividad)</li>
                    <li>• DALL-E (para generar imágenes)</li>
                    <li>• Runway (para crear videos)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-white">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-4">Proyectos Reales, No Tareas</h3>
                <p className="text-xl text-gray-300 mb-6">
                  Los niños aprenden haciendo cosas que les importan. Que creen un chatbot de su personaje favorito, un
                  videojuego con IA, o una app que resuelva un problema real.
                </p>
                <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/20">
                  <p className="text-purple-300 font-semibold mb-2">Ideas de proyectos:</p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Chatbot personalizado de su héroe favorito</li>
                    <li>• Generador de historias con sus personajes</li>
                    <li>• Analizador de emociones en textos</li>
                    <li>• Videojuego simple con NPCs inteligentes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-2xl font-bold text-white">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-4">Enséñales a Pensar Críticamente</h3>
                <p className="text-xl text-gray-300 mb-6">
                  La IA no es mágica. Enséñales que puede equivocarse, que tiene sesgos, que deben verificar
                  información. El pensamiento crítico es más importante que memorizar comandos.
                </p>
                <div className="bg-pink-900/20 p-6 rounded-lg border border-pink-500/20">
                  <p className="text-pink-300 font-semibold mb-2">Habilidades clave:</p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Verificar información (detectar fake news)</li>
                    <li>• Entender sesgos algorítmicos</li>
                    <li>• Uso ético de la tecnología</li>
                    <li>• Privacidad y seguridad digital</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-4">Grupos Pequeños Son Clave</h3>
                <p className="text-xl text-gray-300 mb-6">
                  Tu hijo necesita atención personalizada. En grupos de 30+ nunca recibirá feedback real. Los grupos de
                  5 alumnos garantizan que cada niño avance a su ritmo.
                </p>
                <div className="bg-cyan-900/20 p-6 rounded-lg border border-cyan-500/20">
                  <p className="text-cyan-300 font-semibold mb-2">Por qué máximo 5 alumnos:</p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Atención personalizada del instructor</li>
                    <li>• Feedback inmediato en cada proyecto</li>
                    <li>• Ritmo adaptado a cada estudiante</li>
                    <li>• Espacio para hacer preguntas sin presión</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">Errores que Debes Evitar</h2>

          <div className="space-y-6">
            <div className="bg-red-900/20 p-8 rounded-2xl border border-red-500/30">
              <h3 className="text-2xl font-bold text-red-400 mb-4">❌ Empezar con Teoría Compleja</h3>
              <p className="text-gray-300 text-lg">
                No intentes explicar redes neuronales o algoritmos complejos. Eso mata la motivación. Empieza con crear
                algo cool y la teoría vendrá después naturalmente.
              </p>
            </div>

            <div className="bg-red-900/20 p-8 rounded-2xl border border-red-500/30">
              <h3 className="text-2xl font-bold text-red-400 mb-4">❌ Clases Masivas Online</h3>
              <p className="text-gray-300 text-lg">
                Los cursos de 50+ estudiantes son para adultos disciplinados, no para niños. Tu hijo necesita atención
                personal o se frustrará y abandonará.
              </p>
            </div>

            <div className="bg-red-900/20 p-8 rounded-2xl border border-red-500/30">
              <h3 className="text-2xl font-bold text-red-400 mb-4">❌ Solo Ver Videos de YouTube</h3>
              <p className="text-gray-300 text-lg">
                Ver videos pasivamente no enseña. Tu hijo necesita HACER proyectos reales con feedback de expertos para
                aprender de verdad.
              </p>
            </div>

            <div className="bg-red-900/20 p-8 rounded-2xl border border-red-500/30">
              <h3 className="text-2xl font-bold text-red-400 mb-4">❌ Esperar al Colegio</h3>
              <p className="text-gray-300 text-lg">
                La educación tradicional va 5 años atrás de la tecnología. Si esperas a que el colegio enseñe IA, tu
                hijo perderá años valiosos de ventaja competitiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovakids Solution */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Cómo Innovakids Te Ayuda</h2>
            <p className="text-2xl text-gray-300">
              Hemos perfeccionado la forma de enseñar IA a niños con +500 familias
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-900/10 p-8 rounded-2xl border border-cyan-500/30">
              <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Grupos de 5 Máximo</h3>
              <p className="text-gray-300 text-lg">
                Tu hijo recibe atención personalizada en cada clase. El instructor conoce su nombre, sus proyectos y sus
                desafíos específicos.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-900/10 p-8 rounded-2xl border border-purple-500/30">
              <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proyectos Reales</h3>
              <p className="text-gray-300 text-lg">
                No hacemos ejercicios aburridos. Tu hijo crea apps, videos, juegos y su propia startup con IA desde el
                primer día.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/30 to-pink-900/10 p-8 rounded-2xl border border-pink-500/30">
              <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Garantía Total</h3>
              <p className="text-gray-300 text-lg">
                Si después de la primera clase no estás satisfecho, te devolvemos el 100%. Sin preguntas, sin
                complicaciones.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 p-12 rounded-3xl border-2 border-cyan-500/50 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Solo 2 de 20 Cupos Disponibles</h3>
            <p className="text-xl text-gray-300 mb-8">Próximo ciclo inicia el 26 de enero de 2026</p>
            <Link href="/#sesion-estrategica">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 text-xl px-12 py-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Agendar Evaluación Gratuita
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <p className="text-sm text-gray-400 mt-6">Proceso de selección personalizado • Sin compromiso</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-white text-center mb-16">Preguntas Frecuentes</h2>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">¿Mi hijo necesita saber programar antes?</h3>
              <p className="text-gray-300 text-lg">
                No. El 95% de nuestros estudiantes nunca habían programado. Empezamos desde cero y avanzamos
                gradualmente. La clave es la curiosidad, no el conocimiento previo.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">¿Qué edad es la ideal para empezar?</h3>
              <p className="text-gray-300 text-lg">
                Entre 8-14 años es perfecto. Tienen la madurez cognitiva para entender conceptos abstractos y la
                creatividad para aplicarlos sin límites.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">¿Cuánto tiempo necesita dedicar mi hijo?</h3>
              <p className="text-gray-300 text-lg">
                2 clases de 90 minutos por semana durante 5 semanas. Es un compromiso manejable que cabe perfectamente
                en el horario escolar.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">¿Por qué no puedo enseñarle yo mismo?</h3>
              <p className="text-gray-300 text-lg">
                Puedes, pero necesitas: 1) Conocer las herramientas más actualizadas, 2) Tener un curriculum progresivo,
                3) Dar feedback técnico preciso, 4) Mantener la motivación durante semanas. Los padres que lo intentan
                solos suelen frustrarse o abandonar a las 2 semanas.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">¿Qué hace diferente a Innovakids?</h3>
              <p className="text-gray-300 text-lg">
                Grupos de MÁXIMO 5 alumnos (otros tienen 30+), proyectos reales desde el día 1 (no ejercicios teóricos),
                instructores que conocen a cada estudiante por nombre, y una comunidad de familias comprometidas con el
                futuro de sus hijos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
