import { Sparkles, Video, BookOpen, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const learningPoints = [
  {
    icon: Sparkles,
    title: "Dominio de Prompts",
    description: "Aprende a comunicarte efectivamente con la IA usando la técnica del 'Prompt Perfecto'.",
  },
  {
    icon: Video,
    title: "Creación de Contenido",
    description: "Crea videos, música, cómics y avatares digitales usando herramientas de IA.",
  },
  {
    icon: BookOpen,
    title: "Herramientas de Estudio",
    description: "Usa IA para estudiar mejor, preparar exámenes y hacer presentaciones escolares.",
  },
  {
    icon: Smartphone,
    title: "Desarrollo de Apps",
    description: "Construye aplicaciones y páginas web sin programar, usando IA.",
  },
]

export function LearningSection() {
  return (
    <section id="beneficios" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <Image src="/tech-pattern-background.jpg" alt="" fill quality={50} className="object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">¿Qué Aprenderán?</h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Un programa completo diseñado para despertar la curiosidad y desarrollar habilidades del futuro
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {learningPoints.map((point, index) => (
            <Card
              key={index}
              className="group border-2 transition-all hover:border-purple-600 hover:shadow-xl hover:shadow-purple-600/20"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 text-white transition-all group-hover:scale-110 group-hover:shadow-lg">
                  <point.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{point.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
