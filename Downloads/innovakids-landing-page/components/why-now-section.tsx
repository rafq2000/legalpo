"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sun, Rocket, DollarSign, Calendar } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const reasons = [
  {
    icon: Sun,
    emoji: "☀️",
    number: 1,
    title: "Está de Vacaciones",
    description: "Sin estrés de clases ni tareas. Tu hijo puede enfocarse 100% en aprender IA mientras disfruta sus vacaciones de verano.",
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/30",
  },
  {
    icon: Rocket,
    emoji: "🚀",
    number: 2,
    title: "Ventaja Temprana",
    description: "Los que empiezan en Enero tienen ventaja todo el año. Cuando vuelva a clases, tendrá habilidades que sus compañeros no tienen.",
    color: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    icon: DollarSign,
    emoji: "💰",
    number: 3,
    title: "Precio de Lanzamiento 2026",
    description: "Oferta especial solo para los primeros del año. Este precio no se repetirá.",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
  },
  {
    icon: Calendar,
    emoji: "📅",
    number: 4,
    title: "Termina en Marzo",
    description: "5 semanas intensivas. Tu hijo tendrá certificación y proyectos antes de volver al colegio.",
    color: "from-primary/20 to-[#8b5cf6]/20",
    borderColor: "border-primary/30",
  },
]

export function WhyNowSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={sectionRef} className="relative bg-[#030712] py-32 overflow-hidden noise-overlay">
      {/* Aurora Background */}
      <div className="absolute inset-0 aurora-bg opacity-30" />

      {/* Floating orbs with different colors */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-[10%] w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(77, 208, 225, 0.3) 0%, transparent 70%)" }}
      />

      <div className="relative container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-premium">
            Por Qué Este es el <span className="premium-gradient-text">Momento Perfecto</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className={`relative h-full rounded-2xl p-8 border-2 ${reason.borderColor} bg-gradient-to-br ${reason.color} backdrop-blur-xl transition-all duration-500`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Emoji with bounce */}
                  <motion.div
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {reason.emoji}
                  </motion.div>

                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-3xl font-bold text-white mb-4 font-premium">
                    {reason.number}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-premium">
                    {reason.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div className="absolute inset-0 shimmer" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("sesion-estrategica")}
            className="magnetic-btn group relative bg-gradient-to-r from-primary via-[#26C6DA] to-[#8b5cf6] hover:opacity-90 text-background px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-500 overflow-hidden"
          >
            <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
            <span className="relative flex items-center">
              Sí, Quiero Aprovechar Esta Oportunidad
              <ArrowRight className="ml-2 h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Button>
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-20 max-w-4xl mx-auto" />
      </div>
    </section>
  )
}
