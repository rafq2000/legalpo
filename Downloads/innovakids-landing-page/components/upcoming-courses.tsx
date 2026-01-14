"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Gamepad2, TrendingUp, GraduationCap } from "lucide-react"

const upcomingCourses = [
  {
    id: 1,
    title: "Maestros del Storytelling Digital",
    subtitle: "De la idea a la película animada",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    description:
      "Crear una historia épica con voces y visuales de IA. Aprende a ser el director de tu propia película usando inteligencia artificial como tu equipo de artistas.",
    features: [
      "Crear personajes con el 'Prompt Maestro'",
      "Generar escenarios con estilos artísticos",
      "Guion profesional (estructura de 3 actos)",
      "Clonar voces y dar personalidad al audio",
      "Montaje mágico y música épica generada por IA",
      "Presentación final tipo estreno de cine",
    ],
  },
  {
    id: 2,
    title: "Creador de Juegos Inteligentes",
    subtitle: "IA + Coding: Programar videojuegos que piensan",
    icon: Gamepad2,
    color: "from-green-500 to-emerald-500",
    description:
      "No programamos juegos normales, le damos un 'cerebro' a los personajes para que reaccionen a lo que hacemos. Aprende Machine Learning jugando.",
    features: [
      "Cómo aprende una máquina (entrenamiento)",
      "Conectar IA a bloques de código",
      "Entrenar la cámara para reconocer objetos",
      "Controlar personajes con gestos",
      "Crear NPCs inteligentes que conversan",
      "Testing y ajuste de modelos de IA",
    ],
  },
  {
    id: 3,
    title: "Lanza tu Idea: Mini Startup con IA",
    subtitle: "Crear una marca real y presencia digital",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
    description:
      "Crea una marca real en tiempo récord. Desde el logo hasta tu web funcional, aprende a lanzar tu idea al mercado como un verdadero emprendedor.",
    features: [
      "Encontrar problemas reales para resolver",
      "Crear identidad visual completa (logo, colores)",
      "Avatar influencer que habla por tu negocio",
      "Landing page funcional sin código",
      "Escribir textos que venden",
      "Presentación final tipo Shark Tank",
    ],
  },
  {
    id: 4,
    title: "Super Estudiante: El Cerebro Aumentado",
    subtitle: "Domina el aprendizaje con técnicas de élite",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    description:
      "Transforma tu forma de estudiar. Aprende Matemáticas, Idiomas y Lenguaje con técnicas de élite usadas por los mejores estudiantes del mundo.",
    features: [
      "Técnica Pomodoro y gestión del tiempo",
      "Palacio Mental para memorización",
      "Inmersión en idiomas con IA conversacional",
      "Matemáticas visuales y analogías",
      "Método de la Pirámide para síntesis",
      "Pensamiento crítico y verificación de datos",
    ],
  },
]

const commonTools = [
  "ChatGPT",
  "Leonardo.ai",
  "ElevenLabs",
  "Canva",
  "ML4Kids",
  "Scratch",
  "Notion",
  "Perplexity.ai",
  "D-ID",
  "CapCut",
  "Gamma",
  "Photomath",
]

export function UpcomingCourses() {
  return (
    <section className="bg-gradient-to-b from-[#0a1628] to-background py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 md:mb-12 max-w-3xl text-center">
          <Badge className="bg-[#4DD0E1] text-[#0a1628] hover:bg-[#4DD0E1] mb-4 px-4 py-2 text-sm font-bold">
            PRÓXIMAMENTE
          </Badge>
          <h2 className="mb-4 text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight px-2">
            Próximos Cursos <span className="block text-[#4DD0E1]">Innovakids</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg">
            4 cursos integrales diseñados para potenciar la mente de niños de 8 a 14 años
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto mb-12 md:mb-16">
          {upcomingCourses.map((course) => {
            const Icon = course.icon
            return (
              <Card
                key={course.id}
                className="bg-[#0f1f3a] border-[#1e3a5f] hover:border-[#4DD0E1] transition-all duration-300 hover:scale-[1.02] overflow-hidden group"
              >
                <CardHeader className="pb-3">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-bold text-white mb-2">{course.title}</CardTitle>
                  <p className="text-sm md:text-base text-slate-400 font-medium">{course.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">{course.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs md:text-sm font-semibold text-[#4DD0E1] uppercase tracking-wide">
                      Lo que aprenderás:
                    </p>
                    <ul className="space-y-2">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#4DD0E1] flex-shrink-0 mt-1.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#0f1f3a] to-[#1a2942] border-2 border-[#4DD0E1] rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">Herramientas que Usaremos</h3>
            <p className="text-slate-300 text-sm md:text-base text-center mb-6">
              Trabajaremos con las mejores herramientas de IA del mercado
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {commonTools.map((tool, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="bg-[#1e3a5f] text-white hover:bg-[#4DD0E1] hover:text-[#0a1628] transition-colors px-3 md:px-4 py-2 text-xs md:text-sm font-medium"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <div className="inline-block bg-[#0f1f3a] border-2 border-[#4DD0E1] rounded-xl p-6 md:p-8">
              <p className="text-white text-base md:text-lg font-semibold mb-2">¿Te interesa alguno de estos cursos?</p>
              <p className="text-slate-300 text-sm md:text-base">
                Contáctanos por WhatsApp para ser el primero en enterarte cuando estén disponibles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
