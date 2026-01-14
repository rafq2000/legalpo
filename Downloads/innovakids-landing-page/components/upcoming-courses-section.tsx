"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Palette, Cpu, Rocket, Check, Clock, Users, Star } from "lucide-react"

const upcomingCourses = [
  {
    level: 2,
    title: "Creadores de Universos",
    subtitle: "Consistencia y Narrativa",
    description:
      "Aprende a crear personajes consistentes, dirigir películas con IA, diseñar tu marca personal y dominar YouTube.",
    classes: "Clases 11-22",
    skills: ["Personajes consistentes", "Director de cine", "YouTube & Thumbnails", "Marca personal"],
    icon: Palette,
  },
  {
    level: 3,
    title: "Maestros de la Automatización",
    subtitle: "Lógica y Flujos",
    description:
      "Crea tu propio GPT personalizado, anima fotos en 3D, diseña prototipos de apps y aprende ciberseguridad.",
    classes: "Clases 23-33",
    skills: ["Custom GPTs", "Animación 3D", "Prototipado de Apps", "Ciberseguridad"],
    icon: Cpu,
  },
  {
    level: 4,
    title: "Inventores & Emprendedores",
    subtitle: "Tech & Business",
    description: "Crea tu startup digital, aprende Python con IA, edita como MrBeast y presenta en Shark Tank.",
    classes: "Clases 34-44",
    skills: ["Startup Digital", "Python con IA", "Edición MrBeast", "Pitch Deck"],
    icon: Rocket,
  },
]

export function UpcomingCoursesSection() {
  const [email, setEmail] = useState("")
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState<number[]>([])

  const handleSubmit = async (level: number) => {
    if (!email) return
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted([...submitted, level])
    setIsSubmitting(false)
    setSelectedCourse(null)
    setEmail("")
  }

  return (
    <section className="py-32 bg-[#030712]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Próximamente</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cursos en <span className="text-primary">Desarrollo</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Después del Nivel 1, tu hijo podrá continuar su camino hacia convertirse en un
            <strong className="text-white"> experto en IA</strong>. Únete a la lista de espera.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/30">
            <Check className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Nivel 1: Exploradores de IA</span>
            <span className="text-gray-400">- Disponible ahora</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {upcomingCourses.map((course, index) => (
            <div
              key={course.level}
              className="relative rounded-3xl bg-white/[0.03] border border-white/10 p-8 transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:bg-primary/5 group"
            >
              {/* Badge */}
              <div className="absolute -top-4 left-8 px-4 py-1 rounded-full bg-primary text-background text-sm font-bold shadow-lg">
                Nivel {course.level}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mt-4 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                <course.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
              <p className="text-sm font-medium text-primary mb-4">{course.subtitle}</p>
              <p className="text-gray-400 mb-6 leading-relaxed">{course.description}</p>

              {/* Classes indicator */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Users className="w-4 h-4" />
                <span>{course.classes}</span>
                <span className="mx-2">•</span>
                <span>12 semanas</span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {course.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs text-gray-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Waitlist Form */}
              {submitted.includes(course.level) ? (
                <div className="flex items-center gap-2 text-primary font-medium">
                  <Check className="w-5 h-5" />
                  <span>¡Estás en la lista!</span>
                </div>
              ) : selectedCourse === course.level ? (
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/[0.05] border-white/10"
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleSubmit(course.level)}
                      disabled={!email || isSubmitting}
                      className="flex-1 bg-primary hover:bg-primary/90 text-background"
                    >
                      {isSubmitting ? "Enviando..." : "Confirmar"}
                    </Button>
                    <Button variant="outline" onClick={() => setSelectedCourse(null)} className="border-white/10">
                      Cancelar
                    </Button>
                  </div>
                </div>
              ) : (
                <Button
                  onClick={() => setSelectedCourse(course.level)}
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary hover:text-background hover:border-primary transition-all"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Unirme a Lista de Espera
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">¿Quieres empezar desde el principio?</p>
          <Button
            size="lg"
            className="bg-white text-background hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl hover:scale-105 transition-all"
            onClick={() => window.open("https://calendly.com/innovakidslatam/evaluacion-gratuita", "_blank")}
          >
            <Star className="w-5 h-5 mr-2" />
            Comenzar con Nivel 1 - Evaluación Gratuita
          </Button>
        </div>
      </div>
    </section>
  )
}
