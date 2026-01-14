"use client"

import { Check, Gift, Shield, Sparkles, Video, X, Calendar, Star, Zap } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

// Animated counter hook
function useAnimatedCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return { count, ref }
}

export function PricingSimpleSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { count: priceCount, ref: priceRef } = useAnimatedCounter(297, 1500)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const comparisonData = [
    {
      feature: "El Resultado Final",
      youtube: "Consumo pasivo (mirar pantallas)",
      academias: "Un certificado de papel (PDF)",
      innovakids: "Portafolio Web Real con 10 proyectos",
    },
    {
      feature: "Herramientas",
      youtube: "Suscripciones caras obligatorias",
      academias: "Software viejo o aburrido",
      innovakids: "Herramientas gratuitas potentes",
    },
    {
      feature: "Seguridad",
      youtube: "Riesgoso (sin filtros)",
      academias: "Nula o básica",
      innovakids: "Masterclass Padres Seguridad & Deepfakes",
    },
    {
      feature: "Si el niño se atrasa...",
      youtube: '"Mala suerte"',
      academias: "Repite pagando de nuevo",
      innovakids: "Tutoría 1 a 1 GRATIS hasta que termine",
    },
    {
      feature: "Metodología",
      youtube: "Teoría aburrida",
      academias: "Código complejo (frustración)",
      innovakids: "IA + Diversión: Crean desde el día 1",
    },
    {
      feature: "Inversión",
      youtube: "Tiempo perdido",
      academias: "+$800 USD / mes",
      innovakids: "$297 USD (pago único)",
      isPrice: true,
    },
  ]

  return (
    <section ref={sectionRef} className="bg-[#030712] py-32 noise-overlay relative overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 aurora-bg opacity-50" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block holographic-card px-6 py-2 mb-6">
            <span className="relative z-10 font-bold text-sm text-white tracking-wide">
              PROGRAMA CREATOR 10X
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-premium">
            De Consumidor a <span className="premium-gradient-text">Creador</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            La única formación de IA donde tu hijo termina con un{" "}
            <span className="text-white font-semibold">Portafolio Web Profesional</span>, no un papel.
          </p>
        </motion.div>

        {/* Course Start Date */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="holographic-card p-6 text-center">
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Calendar className="w-6 h-6 text-primary" />
                <p className="text-white font-bold text-xl font-premium">Próximo Curso Inicia</p>
              </div>
              <p className="premium-gradient-text text-4xl font-black font-premium">26 de Enero, 2026</p>
              <p className="text-gray-400 text-sm mt-2">Cupos limitados - Solo 5 niños por grupo</p>
            </div>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-10 font-premium">
            Por Qué Somos <span className="text-primary">Diferentes</span>
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-4 text-left text-gray-400 font-medium border-b border-white/10">Característica</th>
                  <th className="p-4 text-center text-gray-400 font-medium border-b border-white/10">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-5 h-5 text-gray-500" />
                      <span>YouTube / Otros</span>
                    </div>
                  </th>
                  <th className="p-4 text-center text-gray-400 font-medium border-b border-white/10">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-5 h-5 text-gray-500" />
                      <span>Academias Tradicionales</span>
                    </div>
                  </th>
                  <th className="p-4 text-center font-bold border-b border-primary bg-primary/10">
                    <div className="flex items-center justify-center gap-2 text-primary">
                      <Check className="w-5 h-5" />
                      <span>INNOVAKIDS</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="interactive-row border-b border-white/5"
                  >
                    <td className="p-4 text-white font-medium">{row.feature}</td>
                    <td className="p-4 text-center text-gray-500">{row.youtube}</td>
                    <td className={`p-4 text-center ${row.isPrice ? "text-gray-400" : "text-gray-500"}`}>
                      {row.academias}
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <span className={row.isPrice ? "text-primary font-bold text-xl" : "text-primary font-semibold"}>
                        {row.innovakids}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Main Pricing Card - Holographic */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="holographic-card p-10 lg:p-12">
            <div className="relative z-10">
              {/* Offer Badge */}
              <div className="flex justify-center mb-8">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#8b5cf6] text-background px-8 py-3 rounded-full font-bold text-lg"
                >
                  <Zap className="w-5 h-5" />
                  OFERTA DE LANZAMIENTO 2026
                </motion.div>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-white text-center mb-10 font-premium">
                Todo lo que incluye el <span className="text-primary">Programa Creator 10X</span>
              </h3>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                <div className="bg-white/[0.03] rounded-2xl p-5 border border-white/10 flex items-start gap-4 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="text-white font-bold text-lg">10 Sesiones En Vivo</h4>
                      <span className="text-gray-500 line-through text-lg">$200 USD</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">
                      Creación de Videojuegos, Arte Digital & IA Generativa (grupos de máx. 5 niños)
                    </p>
                  </div>
                </div>

                {[
                  {
                    title: 'La "Biblia" de Prompts Secretos',
                    price: "$97 USD",
                    description: "PDF Interactivo con +100 prompts probados para crear arte, código y contenido",
                  },
                  {
                    title: "Masterclass Padres: Seguridad & Deepfakes",
                    price: "$100 USD",
                    description: "Aprende a proteger a tus hijos de los peligros reales de la IA",
                  },
                  {
                    title: "Acceso de Por Vida + Actualizaciones 2026",
                    price: "$100 USD",
                    description: "Grabaciones de todas las clases y acceso a futuras actualizaciones",
                  },
                ].map((bonus, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="bg-white/[0.03] rounded-2xl p-5 border border-primary/20 flex items-start gap-4 hover:border-primary/40 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Gift className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <span className="bg-gradient-to-r from-primary to-[#8b5cf6] text-background text-xs px-2 py-1 rounded-full font-bold">
                            BONUS
                          </span>
                          <h4 className="text-white font-bold text-lg">{bonus.title}</h4>
                        </div>
                        <span className="text-gray-500 line-through text-lg">{bonus.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">{bonus.description}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Early Bird Offer */}
                <motion.div
                  animate={{ boxShadow: ["0 0 20px rgba(77, 208, 225, 0.2)", "0 0 40px rgba(77, 208, 225, 0.4)", "0 0 20px rgba(77, 208, 225, 0.2)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-r from-primary/10 to-[#8b5cf6]/10 border-2 border-primary/40 rounded-xl p-6 mt-6"
                >
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <p className="text-white font-black text-xl font-premium">EARLY BIRD - Solo primeros 10 inscritos</p>
                  </div>
                  <p className="premium-gradient-text text-5xl font-black mb-2 font-premium">$247 USD</p>
                  <div className="inline-block bg-gradient-to-r from-primary to-[#8b5cf6] text-background px-4 py-1 rounded-full font-bold text-sm mb-2">
                    50% OFF - Ahorras $250 USD
                  </div>
                  <p className="text-gray-400 text-sm">Vence en 72 horas o al llenar 10 cupos</p>
                </motion.div>
              </div>

              {/* Main Price Display */}
              <div className="bg-white/[0.03] rounded-2xl p-8 mb-8 text-center border border-white/10">
                <p className="text-gray-400 text-sm mb-2">O si prefieres la</p>
                <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Valor Real</p>
                    <p className="text-4xl text-gray-500 line-through font-bold">$497 USD</p>
                  </div>
                  <div className="text-4xl text-gray-600">→</div>
                  <div ref={priceRef}>
                    <p className="text-primary text-sm mb-1 font-semibold">OFERTA LANZAMIENTO</p>
                    <p className="text-6xl lg:text-7xl text-white font-bold font-premium">
                      ${priceCount} <span className="text-3xl text-gray-400">USD</span>
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#8b5cf6] text-background px-8 py-3 rounded-full font-bold text-xl mb-4">
                  <Star className="w-5 h-5" />
                  Ahorras $200 USD (40% OFF)
                </div>
              </div>

              {/* Payment Options */}
              <div className="bg-white/[0.03] rounded-xl p-6 mb-8 border border-white/10">
                <p className="text-white font-bold text-lg mb-4 text-center font-premium">Opciones de Pago</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                  <div className="bg-white/[0.03] rounded-xl p-4 border border-white/10 hover:border-primary/30 transition-colors">
                    <p className="text-primary font-bold text-2xl">$297 USD</p>
                    <p className="text-gray-400 text-sm">pago completo con tarjeta</p>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-4 border border-primary/30 hover:border-primary/50 transition-colors">
                    <p className="text-primary font-bold text-2xl">$50 USD</p>
                    <p className="text-gray-400 text-sm">reserva tu cupo ahora</p>
                    <p className="text-gray-500 text-xs mt-1">y paga el resto antes de iniciar</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                {[
                  { icon: Shield, text: "Pago 100% Seguro" },
                  { icon: Sparkles, text: "Metodología Probada" },
                ].map((item, i) => (
                  <div key={i} className="trust-badge">
                    <item.icon className="w-5 h-5" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
