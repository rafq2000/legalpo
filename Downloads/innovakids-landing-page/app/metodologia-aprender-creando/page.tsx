import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Lightbulb, Rocket, Brain, Code, Palette } from "lucide-react"

export const metadata: Metadata = {
  title: "Metodología Aprender Creando | Innovakids - Curso de IA para Niños",
  description:
    "Descubre cómo los niños aprenden IA creando proyectos reales. Metodología práctica basada en proyectos donde tu hijo construye, experimenta y domina la Inteligencia Artificial haciendo.",
  keywords:
    "aprender haciendo, metodología práctica IA niños, proyectos IA para niños, aprendizaje basado en proyectos, curso práctico IA niños",
  openGraph: {
    title: "Metodología Aprender Creando | Innovakids",
    description: "Los niños no aprenden sobre IA. La crean. Metodología práctica basada en proyectos reales.",
    url: "https://innovakids.ai/metodologia-aprender-creando",
    type: "website",
  },
}

export default function MetodologiaPage() {
  const projects = [
    {
      week: "Semana 1",
      title: "Mi Asistente Personal",
      description: "Tu hijo programa su primer chatbot inteligente que puede responder preguntas y ayudar con tareas.",
      icon: Brain,
      skills: ["Prompting", "ChatGPT API", "Lógica de conversación"],
    },
    {
      week: "Semana 2",
      title: "Generador de Historias Visuales",
      description: "Crea una app que genera historias ilustradas automáticamente con texto e imágenes de IA.",
      icon: Palette,
      skills: ["DALL-E API", "Storytelling", "Diseño de interfaces"],
    },
    {
      week: "Semana 3",
      title: "Analizador de Emociones",
      description: "Construye una herramienta que detecta emociones en textos y sugiere respuestas empáticas.",
      icon: Lightbulb,
      skills: ["Análisis de sentimientos", "Ética en IA", "UX Design"],
    },
    {
      week: "Semana 4",
      title: "Mi Primer Videojuego con IA",
      description: "Diseña un juego donde los personajes tienen inteligencia artificial y toman decisiones propias.",
      icon: Code,
      skills: ["Game design", "NPCs inteligentes", "Vibe Coding"],
    },
    {
      week: "Semana 5",
      title: "Startup de IA - Proyecto Final",
      description: "Tu hijo presenta su propia idea de startup basada en IA ante compañeros y familias.",
      icon: Rocket,
      skills: ["Pitch", "Presentación", "Emprendimiento"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center space-y-12 max-w-5xl mx-auto">
            <div className="inline-block px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8">
              <p className="text-primary font-semibold text-lg">Metodología Aprender Creando</p>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white">
              Los niños no aprenden
              <br />
              <span className="text-primary">sobre IA.</span>
              <br />
              La crean.
            </h1>

            <p className="text-2xl lg:text-3xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
              Cada clase es un proyecto real. Tu hijo construye, experimenta, falla, aprende y domina la IA{" "}
              <span className="text-primary font-semibold">haciendo</span>.
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

      {/* Philosophy Section */}
      <section className="py-32 bg-card/30">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                La teoría sin práctica es conocimiento muerto.
              </h2>

              <div className="space-y-6 text-xl text-gray-300 leading-relaxed">
                <p>Tu hijo no necesita memorizar conceptos de IA que olvidará en semanas.</p>

                <p>
                  Necesita <span className="text-primary font-semibold">crear con sus propias manos</span>, ver sus
                  ideas cobrar vida, y experimentar el poder de la Inteligencia Artificial en acción.
                </p>

                <p className="text-2xl text-white font-semibold pt-4">Cada clase = 1 proyecto terminado.</p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/child-coding-and-building-ai-project-happily-on-co.jpg"
                alt="Niño creando proyecto de IA"
                width={600}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Timeline */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center space-y-6 mb-24">
            <h2 className="text-5xl lg:text-6xl font-bold text-white">5 semanas. 10 proyectos.</h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Tu hijo termina el curso con un portafolio de proyectos reales de IA.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <div
                  key={index}
                  className="group relative bg-card/40 backdrop-blur-sm border border-border rounded-3xl p-12 hover:bg-card/60 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-10 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                        <Icon className="w-12 h-12 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-6">
                      <div>
                        <p className="text-primary font-semibold text-lg mb-2">{project.week}</p>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{project.title}</h3>
                        <p className="text-xl text-gray-300 leading-relaxed">{project.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {project.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-card/30">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <h2 className="text-5xl lg:text-6xl font-bold text-white text-center mb-20">
            Cursos tradicionales vs Innovakids
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Traditional */}
            <div className="bg-background/50 border border-destructive/30 rounded-3xl p-10 space-y-6">
              <h3 className="text-3xl font-bold text-gray-400">Cursos Tradicionales</h3>
              <ul className="space-y-4 text-xl text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Tu hijo mira videos y toma apuntes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Ejercicios repetitivos y aburridos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✗</span>
                  <span>No hay nada tangible que mostrar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Olvida todo en semanas</span>
                </li>
              </ul>
            </div>

            {/* Innovakids */}
            <div className="bg-primary/5 border border-primary/30 rounded-3xl p-10 space-y-6 shadow-2xl shadow-primary/10">
              <h3 className="text-3xl font-bold text-white">Metodología Innovakids</h3>
              <ul className="space-y-4 text-xl text-white">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Tu hijo construye proyectos desde minuto 1</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Cada clase termina con algo funcionando</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Portafolio de 10 proyectos reales de IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Habilidades que usa inmediatamente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-16 text-center space-y-10">
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              ¿Tu hijo está listo para crear el futuro?
            </h2>

            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Quedan solo 5 cupos para el programa de Enero 2026. Agenda tu evaluación gratuita.
            </p>

            <Button
              size="lg"
              asChild
              className="bg-white hover:bg-gray-100 text-background px-16 py-8 text-xl font-semibold rounded-full shadow-2xl hover:scale-[1.02] transition-all"
            >
              <Link href="/#sesion-estrategica">
                <Sparkles className="mr-3 h-6 w-6" />
                Solicitar Evaluación Ahora
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
