"use client"

import { TrendingUp, Users, Award, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Estudiantes Activos",
    description: "Niños aprendiendo IA en toda Latinoamérica",
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    label: "Tasa de Finalización",
    description: "Los niños completan el curso completo",
  },
  {
    icon: TrendingUp,
    value: 4.9,
    suffix: "/5",
    label: "Calificación",
    description: "Basado en +300 reseñas verificadas",
  },
  {
    icon: Zap,
    value: 12,
    suffix: "",
    label: "Clases Prácticas",
    description: "Con proyectos reales de IA",
  },
]

function AnimatedCounter({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = Date.now()
          const animate = () => {
            const now = Date.now()
            const progress = Math.min((now - startTime) / duration, 1)
            setCount(end * progress)
            if (progress < 1) requestAnimationFrame(animate)
          }
          animate()
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <div
      ref={ref}
      className="text-5xl font-extrabold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
    >
      {count.toFixed(end % 1 !== 0 ? 1 : 0)}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="relative bg-gradient-to-br from-card via-background to-card py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(77,208,225,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(77,208,225,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-flow" />

      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-white md:text-4xl animate-fadeInUp">
            Resultados que Hablan por Sí Mismos
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group relative animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                <div className="relative rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-xl p-8 text-center transition-all duration-500 group-hover:scale-105 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20">
                  <div className="mb-4 inline-flex rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  <div className="mb-2 text-xl font-bold text-white">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
