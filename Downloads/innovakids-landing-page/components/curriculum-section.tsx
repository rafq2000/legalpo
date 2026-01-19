"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle2, Sparkles, Code2, Rocket, Brain } from "lucide-react"

const modules = {
  explorer: {
    title: "Módulo 1: Vibe Explorer",
    subtitle: "Fundamentos & Creatividad con IA",
    icon: Sparkles,
    color: "text-yellow-400",
    description: "El punto de partida obligatorio. Domina los fundamentos de la IA Generativa, Prompts y Creatividad.",
    lessons: [
      "Vibe IA: Tu nuevo superpoder (Configuración)",
      "Prompt Engineering: El arte de hablar con máquinas",
      "Vibe Voice: Clonación de voz y narración",
      "Vibe Music: Composición musical con IA",
      "Generative Art I: De la imaginación a la imagen",
      "Generative Art II: Storytelling visual consistente",
      "Vibe Cinema: Creación de video con IA",
      "Digital Twin: Creando tu avatar 3D parlante",
      "Cyber Ethics: Deepfakes y seguridad digital",
      "The Vibe Project: Presentación final de identidad",
    ],
  },
  coding: {
    title: "Especialidad: Vibe Coding",
    subtitle: "Programación Asistida por IA",
    icon: Code2,
    color: "text-cyan-400",
    description:
      "Deja que la IA escriba el código mientras tú diriges la lógica. Crea webs, juegos y apps reales.",
    lessons: [
      "Algorithmic Vibe: Lógica sin código aburrido",
      "Vision to Reality: De dibujo a Web real",
      "Instant Deploy: Publicando tu sitio en la nube",
      "Interactive JS: Magia y movimiento web",
      "Game Vibe I: Diseño de mecánicas de juego",
      "Remixing Classics: Recreando juegos retro con IA",
      "Original Game: Tu videojuego desde cero",
      "App Design AI: Interfaces de usuario automáticas",
      "Smart Apps: WebApps que resuelven problemas",
      "Data Vibe: Análisis de datos con Python + IA",
    ],
  },
  enterprise: {
    title: "Especialidad: Vibe Enterprise",
    subtitle: "Incubadora de Startups con IA",
    icon: Rocket,
    color: "text-purple-400",
    description: "Tu co-founder es una IA. Metodología Silicon Valley adaptada: De la idea al Pitch.",
    lessons: [
      "Pain Detective: Detectando problemas reales",
      "AI Brainstorming: 100 ideas en 10 minutos",
      "Canvas Co-Pilot: Modelo de negocio con IA",
      "Avatar Creation: Entrevistando a tu cliente ideal",
      "MVP Speedrun: Prototipado rápido de producto",
      "Vibe Validation: Landing pages para validar",
      "Brand Genes: Creación de marca e identidad",
      "Smart Finance: Proyecciones financieras con IA",
      "Sales Simulator: Roleplay de ventas con bot",
      "Perfect Pitch: Oratoria para Shark Tank",
    ],
  },
  learning: {
    title: "Especialidad: Vibe Learning",
    subtitle: "Hackea tu Escuela",
    icon: Brain,
    color: "text-emerald-400",
    description: "Aprende el doble en la mitad de tiempo. Productividad académica extrema.",
    lessons: [
      "Neuro-AI: Aprendizaje acelerado personalizado",
      "Visual Mind: Mapas mentales automáticos",
      "Turbo Reading: Resúmenes y comprensión veloz",
      "Socratic Bot: Tu tutor particular 24/7",
      "Polyglot Vibe: Idiomas en tiempo real",
      "Elite Writing: Ensayos académicos de nivel",
      "Math Visualization: Viendo las matemáticas",
      "Presentation God: Slides espectaculares en segundos",
      "Deep Research: Investigación profunda con fuentes",
      "Master Project: Tesis final multimedia",
    ],
  },
}

export function CurriculumSection() {
  return (
    <section id="temario" className="bg-[#0a1628] py-20 md:py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-4 py-1">
            40 Clases Premium
          </Badge>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
            El Currículum <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Vibe Academy</span>
          </h2>
          <p className="text-xl text-gray-400">
            Un sistema modular diseñado para transformar consumidores de tecnología en creadores del futuro.
          </p>
        </div>

        <Tabs defaultValue="explorer" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-2 bg-[#0f1f3a] border border-white/10 rounded-xl mb-8">
            <TabsTrigger
              value="explorer"
              className="py-3 px-2 data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400 text-gray-400"
            >
              <div className="flex flex-col items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <span className="font-bold">Explorer</span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="coding"
              className="py-3 px-2 data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 text-gray-400"
            >
              <div className="flex flex-col items-center gap-2">
                <Code2 className="h-5 w-5" />
                <span className="font-bold">Coding</span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="enterprise"
              className="py-3 px-2 data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400 text-gray-400"
            >
              <div className="flex flex-col items-center gap-2">
                <Rocket className="h-5 w-5" />
                <span className="font-bold">Enterprise</span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="learning"
              className="py-3 px-2 data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400 text-gray-400"
            >
              <div className="flex flex-col items-center gap-2">
                <Brain className="h-5 w-5" />
                <span className="font-bold">Learning</span>
              </div>
            </TabsTrigger>
          </TabsList>

          {Object.entries(modules).map(([key, module]) => (
            <TabsContent key={key} value={key} className="mt-0 animate-in fade-in-50 slide-in-from-bottom-4">
              <Card className="bg-[#0f1f3a]/50 border-white/10 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-white/5 to-transparent border-b border-white/5 p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ${module.color} text-sm font-bold mb-3`}>
                        <module.icon className="h-4 w-4" />
                        {module.title}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">{module.subtitle}</h3>
                      <p className="text-lg text-gray-400 max-w-2xl">{module.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-x-12 md:gap-y-6">
                    {module.lessons.map((lesson, idx) => (
                      <div key={idx} className="flex items-start gap-4 group">
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-white font-bold text-sm group-hover:bg-white/10 transition-colors ${module.color.replace('text', 'bg').replace('400', '500')}/20`}>
                          {idx + 1}
                        </div>
                        <div className="pt-1">
                          <p className="font-medium text-gray-200 group-hover:text-white transition-colors">
                            {lesson}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">Cada módulo consta de 10 clases maestras de 90 minutos.</p>
        </div>
      </div>
    </section>
  )
}
