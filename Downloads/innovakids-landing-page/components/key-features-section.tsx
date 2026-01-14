"use client"

import { Users, Clock, Shield, Sparkles, Award, Heart } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function KeyFeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Users,
      title: "Máximo 5 Niños",
      description:
        "Grupos ultra reducidos para atención personalizada. Cada niño recibe feedback directo del instructor.",
      color: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
    },
    {
      icon: Clock,
      title: "Horarios Flexibles",
      description: "Nos adaptamos a tu agenda. Coordinamos el horario que mejor funcione para tu familia.",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400",
    },
    {
      icon: Shield,
      title: "Garantía 10 Días",
      description: "Si no estás 100% satisfecho en los primeros 10 días, te devolvemos tu dinero completo.",
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      iconColor: "text-emerald-400",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-24 px-4 overflow-hidden bg-[#030712] noise-overlay">
      {/* Aurora Background */}
      <div className="absolute inset-0 aurora-bg opacity-30" />

      {/* Section Divider at top */}
      <div className="section-divider mb-16 max-w-4xl mx-auto" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? "#4dd0e1" : "#8b5cf6",
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-premium">
            ¿Por qué <span className="premium-gradient-text">familias como la tuya</span> nos eligen?
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className={`relative h-full rounded-2xl p-8 border-2 ${feature.borderColor} bg-gradient-to-br ${feature.color} backdrop-blur-xl transition-all duration-500`}
              >
                {/* Background number */}
                <div className="absolute top-4 right-4 text-8xl font-black text-white/5 font-premium select-none">
                  0{index + 1}
                </div>

                {/* Icon with glow */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`rounded-2xl bg-white/10 p-5 inline-block transition-all duration-500 group-hover:shadow-lg ${feature.iconColor}`}
                    style={{
                      boxShadow: "0 0 30px rgba(77, 208, 225, 0)",
                    }}
                  >
                    <feature.icon className="h-10 w-10" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-2xl font-bold text-white font-premium">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 shimmer" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {[
            { icon: Award, value: "250+", label: "Familias Felices" },
            { icon: Sparkles, value: "5.0", label: "Rating Promedio" },
            { icon: Heart, value: "100%", label: "Recomendación" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
            >
              <stat.icon className="w-8 h-8 text-primary" />
              <div>
                <p className="text-3xl font-bold text-white font-premium">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Section Divider at bottom */}
        <div className="section-divider mt-16 max-w-4xl mx-auto" />
      </div>
    </section>
  )
}
