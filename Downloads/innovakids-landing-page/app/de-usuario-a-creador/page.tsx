import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Gamepad2, Lightbulb, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "🧠 De Usuario a Creador | Innovakids - Curso de IA para Niños",
  description:
    "Que tu hijo deje de solo jugar y consumir tecnología. Enséñale a programar el futuro. Transforma a tu hijo de consumidor pasivo a creador activo con IA.",
  keywords:
    "niños creadores de IA, de consumidor a creador, programar IA niños, crear tecnología niños, proyectos IA niños",
  openGraph: {
    title: "De Usuario a Creador | Innovakids",
    description: "Que dejen de solo jugar. Enséñales a programar el futuro.",
    url: "https://innovakids.ai/de-usuario-a-creador",
    type: "website",
  },
}

export default function DeUsuarioACreadorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center space-y-12 max-w-5xl mx-auto">
            <div className="inline-block px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <p className="text-primary font-semibold text-lg">Transformación Real</p>
              </div>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white">
              De usuario
              <br />
              <span className="text-primary">a creador.</span>
            </h1>

            <p className="text-2xl lg:text-3xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
              Que tu hijo deje de solo jugar.{" "}
              <span className="text-white font-semibold">Enséñale a programar el futuro.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button
                size="lg"
                asChild
                className="bg-white hover:bg-gray-100 text-background px-12 py-8 text-xl font-semibold rounded-full shadow-2xl hover:scale-[1.02] transition-all"
              >
                <Link href="/#sesion-estrategica">
                  <Sparkles className="mr-3 h-6 w-6" />
                  Solicitar Evaluación Gratuita
                </Link>
              </Button>

              <p className="text-sm text-gray-500">5 semanas • 10 proyectos reales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <h2 className="text-5xl lg:text-6xl font-bold text-white text-center mb-20">La transformación</h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Antes */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                  <Gamepad2 className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-4xl font-bold text-gray-400">Antes</h3>
              </div>

              <div className="space-y-6 bg-muted/30 border border-border rounded-3xl p-10">
                <div className="space-y-3">
                  <p className="text-2xl font-semibold text-gray-300">🎮 Solo consume tecnología</p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Juega, ve videos, usa apps... pero no entiende cómo funcionan.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-2xl font-semibold text-gray-300">⏰ Tiempo de pantalla improductivo</p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Horas frente a la tablet sin aprender nada útil para su futuro.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-2xl font-semibold text-gray-300">"¿Cómo hace la IA eso?"</p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Usa ChatGPT, pero no comprende la tecnología detrás. Es solo magia.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-2xl font-semibold text-gray-300">😔 Usuario pasivo</p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Consume lo que otros crean. No tiene voz ni agencia propia.
                  </p>
                </div>
              </div>
            </div>

            {/* Después */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold text-primary">Después</h3>
              </div>

              <div className="space-y-6 bg-primary/5 border border-primary/30 rounded-3xl p-10 shadow-2xl shadow-primary/10">
                <div className="space-y-3">
                  <p className="text-2xl font-semibold text-white">💡 Crea sus propias herramientas</p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Programa chatbots, genera arte, analiza emociones. La tecnología obedece su creatividad.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-2xl font-semibold text-white">🚀 Tiempo de pantalla productivo</p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Construye proyectos reales que puede mostrar con orgullo a familia y amigos.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-2xl font-semibold text-white">"¡Yo puedo hacer eso!"</p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Entiende los fundamentos de la IA. No es magia, es ciencia que domina.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-2xl font-semibold text-white">⚡ Creador activo</p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Da forma al futuro. Tiene las habilidades para convertir ideas en realidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 bg-card/30">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-white">Lo que tu hijo creará en 5 semanas</h2>
          </div>

          <div className="space-y-8">
            {[
              {
                num: "1",
                title: "Chatbot Personalizado con IA",
                desc: "Un asistente virtual que responde preguntas sobre sus temas favoritos: dinosaurios, espacio, deportes... lo que sea que le apasione.",
              },
              {
                num: "2",
                title: "Generador de Historias Ilustradas",
                desc: "Crea cuentos completos con texto e imágenes generadas por IA. Historias únicas que puede compartir con familia.",
              },
              {
                num: "3",
                title: "Analizador de Emociones",
                desc: "Una app que detecta emociones en rostros o textos. Tecnología real de machine learning en sus manos.",
              },
              {
                num: "4",
                title: "Videojuego con IA",
                desc: "Un juego donde los personajes toman decisiones inteligentes gracias a IA. De jugador a desarrollador.",
              },
              {
                num: "5",
                title: "Startup Final: Su Propia Creación",
                desc: "Un proyecto completamente original que resuelve un problema real. Con presentación profesional tipo Demo Day.",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="flex gap-6 bg-card/40 backdrop-blur-sm border border-border rounded-3xl p-8 hover:bg-card/60 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                  <span className="text-3xl font-bold text-primary">{project.num}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">{project.title}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-16 text-center space-y-10">
            <Zap className="mx-auto h-20 w-20 text-primary" />

            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">Transforma a tu hijo en creador</h2>

            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Quedan cupos limitados para el grupo que inicia el 16 de Febrero 2026. No dejes que siga siendo solo un usuario
              más.
            </p>

            <Button
              size="lg"
              asChild
              className="bg-white hover:bg-gray-100 text-background px-16 py-8 text-xl font-semibold rounded-full shadow-2xl hover:scale-[1.02] transition-all"
            >
              <Link href="/#sesion-estrategica">
                <Sparkles className="mr-3 h-6 w-6" />
                Reservar Mi Cupo Ahora
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
