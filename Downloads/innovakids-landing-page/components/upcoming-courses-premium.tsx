"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Brain, Film, Gamepad2, Rocket, CheckCircle2, Clock, Users, Sparkles } from "lucide-react"

const courses = [
  {
    id: "storytelling",
    title: "Maestros del Storytelling",
    subtitle: "Edición de Autor",
    description: "Dirección de Cine, Narrativa Mitológica y Estética Cinematográfica con IA",
    icon: Film,
    color: "from-purple-600 to-pink-600",
    highlights: [
      "Viaje del Héroe y Estructura Mítica",
      "Dirección de Arte y Cinematografía",
      "Post-Producción y VFX con IA",
      "Gala Final: Proyección de tu Film",
    ],
    duration: "6 semanas",
    classes: "12 clases",
    schedule: "2 clases/semana de 60 min",
  },
  {
    id: "gaming",
    title: "Arquitectos de Mundos",
    subtitle: "IA & Gameplay",
    description: "Lógica Heurística, Comportamiento Emergente y Diseño de Universos",
    icon: Gamepad2,
    color: "from-blue-600 to-cyan-600",
    highlights: [
      "Entrenar tu propia IA con ML4Kids",
      "NPCs que hablan con ChatGPT",
      "Mundos Infinitos Procedurales",
      "Torneo Final InnovKids Arcade",
    ],
    duration: "6 semanas",
    classes: "12 clases",
    schedule: "2 clases/semana de 60 min",
  },
  {
    id: "startup",
    title: "Generación Exponencial",
    subtitle: "IA Startup",
    description: "Emprendimiento de Impacto y Estrategia de Crecimiento 4.0",
    icon: Rocket,
    color: "from-orange-600 to-red-600",
    highlights: [
      "Crear tu Marca Mítica con IA",
      "Humanos Digitales como Embajadores",
      "Neuro-Copy y Video Marketing Viral",
      "Demo Day Final: Presentación de tu Startup",
    ],
    duration: "6 semanas",
    classes: "12 clases",
    schedule: "2 clases/semana de 60 min",
  },
  {
    id: "brain",
    title: "El Cerebro Aumentado",
    subtitle: "Elite Study",
    description: "Neurociencia, Memoria Foto-Espacial y Gestión del Conocimiento",
    icon: Brain,
    color: "from-green-600 to-emerald-600",
    highlights: [
      "Palacio Mental para Memoria Fotográfica",
      "Políglota IA: Aprende Idiomas sin Miedo",
      "Segundo Cerebro con Notion",
      "Detective IA: Fact-Checking Avanzado",
    ],
    duration: "6 semanas",
    classes: "12 clases",
    schedule: "2 clases/semana de 60 min",
  },
]

export function UpcomingCoursesPremium() {
  const [selectedCourse, setSelectedCourse] = useState<(typeof courses)[0] | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "CL",
    childAge: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    console.log("[v0] Submitting waitlist form:", { ...formData, courseName: selectedCourse?.title })

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          courseName: selectedCourse?.title,
        }),
      })

      console.log("[v0] Response status:", response.status)
      const data = await response.json()
      console.log("[v0] Response data:", data)

      if (response.ok) {
        setIsSuccess(true)
        setTimeout(() => {
          setSelectedCourse(null)
          setIsSuccess(false)
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            countryCode: "CL",
            childAge: "",
          })
        }, 3000)
      } else {
        setError(data.error || "Error al unirse a la lista de espera")
      }
    } catch (error) {
      console.error("[v0] Error joining waitlist:", error)
      setError("Error de conexión. Por favor intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.15),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Próximamente</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            Próximos Cursos de{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Innovakids</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto text-pretty">
            4 nuevos programas diseñados para llevar las habilidades de tus hijos al siguiente nivel
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <div
                key={course.id}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${course.color} mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 text-balance">{course.title}</h3>
                    <p
                      className={`text-sm font-semibold bg-gradient-to-r ${course.color} bg-clip-text text-transparent mb-3`}
                    >
                      {course.subtitle}
                    </p>
                    <p className="text-slate-300 text-pretty">{course.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 py-4 border-y border-slate-700/50">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-slate-300">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-slate-300">{course.classes}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {course.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    onClick={() => setSelectedCourse(course)}
                    className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 text-white font-semibold py-6 rounded-xl transition-all duration-300 group-hover:scale-105`}
                  >
                    Unirme a la Lista de Espera
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tools Section */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Herramientas de IA de Clase Mundial</h3>
          <p className="text-slate-300 mb-6 max-w-3xl mx-auto">
            En todos nuestros cursos utilizamos las mejores herramientas de Inteligencia Artificial
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span className="px-4 py-2 bg-slate-700/50 rounded-full">ChatGPT</span>
            <span className="px-4 py-2 bg-slate-700/50 rounded-full">Leonardo.ai</span>
            <span className="px-4 py-2 bg-slate-700/50 rounded-full">ElevenLabs</span>
            <span className="px-4 py-2 bg-slate-700/50 rounded-full">Suno</span>
            <span className="px-4 py-2 bg-slate-700/50 rounded-full">CapCut</span>
            <span className="px-4 py-2 bg-slate-700/50 rounded-full">Canva</span>
            <span className="px-4 py-2 bg-slate-700/50 rounded-full">ML4Kids</span>
            <span className="px-4 py-2 bg-slate-700/50 rounded-full">Scratch</span>
            <span className="px-4 py-2 bg-slate-700/50 rounded-full">Notion</span>
            <span className="px-4 py-2 bg-slate-700/50 rounded-full">Y muchas más...</span>
          </div>
        </div>
      </div>

      {/* Waitlist Dialog */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="sm:max-w-md">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-green-500/10 mb-4">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              </div>
              <DialogTitle className="text-2xl">¡Perfecto!</DialogTitle>
              <DialogDescription className="text-base">
                Te has unido a la lista de espera de{" "}
                <span className="font-semibold text-foreground">{selectedCourse?.title}</span>. Te avisaremos cuando
                abramos las inscripciones.
              </DialogDescription>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">Lista de Espera: {selectedCourse?.title}</DialogTitle>
                <DialogDescription>
                  Completa tus datos para ser el primero en enterarte cuando abramos inscripciones
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="countryCode">País</Label>
                    <Select
                      value={formData.countryCode}
                      onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
                    >
                      <SelectTrigger id="countryCode">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        <SelectItem value="AR">🇦🇷 Argentina</SelectItem>
                        <SelectItem value="BO">🇧🇴 Bolivia</SelectItem>
                        <SelectItem value="BR">🇧🇷 Brasil</SelectItem>
                        <SelectItem value="CL">🇨🇱 Chile</SelectItem>
                        <SelectItem value="CO">🇨🇴 Colombia</SelectItem>
                        <SelectItem value="CR">🇨🇷 Costa Rica</SelectItem>
                        <SelectItem value="CU">🇨🇺 Cuba</SelectItem>
                        <SelectItem value="EC">🇪🇨 Ecuador</SelectItem>
                        <SelectItem value="SV">🇸🇻 El Salvador</SelectItem>
                        <SelectItem value="ES">🇪🇸 España</SelectItem>
                        <SelectItem value="US">🇺🇸 Estados Unidos</SelectItem>
                        <SelectItem value="GT">🇬🇹 Guatemala</SelectItem>
                        <SelectItem value="HN">🇭🇳 Honduras</SelectItem>
                        <SelectItem value="MX">🇲🇽 México</SelectItem>
                        <SelectItem value="NI">🇳🇮 Nicaragua</SelectItem>
                        <SelectItem value="PA">🇵🇦 Panamá</SelectItem>
                        <SelectItem value="PY">🇵🇾 Paraguay</SelectItem>
                        <SelectItem value="PE">🇵🇪 Perú</SelectItem>
                        <SelectItem value="PR">🇵🇷 Puerto Rico</SelectItem>
                        <SelectItem value="DO">🇩🇴 Rep. Dominicana</SelectItem>
                        <SelectItem value="UY">🇺🇾 Uruguay</SelectItem>
                        <SelectItem value="VE">🇻🇪 Venezuela</SelectItem>
                        <SelectItem value="OTHER">🌎 Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="phone">Teléfono (WhatsApp)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+56 9 1234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="childAge">Edad de tu hijo/a</Label>
                  <Select
                    value={formData.childAge}
                    onValueChange={(value) => setFormData({ ...formData, childAge: value })}
                  >
                    <SelectTrigger id="childAge">
                      <SelectValue placeholder="Selecciona la edad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="8-10">8-10 años</SelectItem>
                      <SelectItem value="11-13">11-13 años</SelectItem>
                      <SelectItem value="14+">14+ años</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Error Display */}
                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  {isSubmitting ? "Registrando..." : "Unirme a la Lista de Espera"}
                </Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
