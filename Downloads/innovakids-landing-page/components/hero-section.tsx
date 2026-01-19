"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef, useCallback } from "react"
import { Sparkles, ArrowRight, Play, Users, Shield, Award } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

// Scramble Text Effect Hook
function useScrambleText(text: string, duration: number = 2000) {
  const [displayText, setDisplayText] = useState("")
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

  useEffect(() => {
    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " "
            if (index < iteration) return text[index]
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )

      if (iteration >= text.length) {
        clearInterval(interval)
      }

      iteration += 1 / 3
    }, 30)

    return () => clearInterval(interval)
  }, [text])

  return displayText
}

// Live Viewer Counter Component
function LiveViewerCounter() {
  const [viewers, setViewers] = useState(0)

  useEffect(() => {
    // Simulate live viewers (in production, connect to analytics)
    const baseViewers = Math.floor(Math.random() * 15) + 25
    setViewers(baseViewers)

    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1
        return Math.max(20, Math.min(50, prev + change))
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
    >
      <span className="live-indicator text-sm text-gray-300">
        <span className="font-semibold text-white">{viewers}</span> familias viendo ahora
      </span>
    </motion.div>
  )
}

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  // Mouse tracking for magnetic effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Scramble text effect
  const scrambledText = useScrambleText("La IA es AHORA.", 2000)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set((e.clientX - centerX) / 50)
      mouseY.set((e.clientY - centerY) / 50)
    }
  }, [mouseX, mouseY])

  useEffect(() => {
    const startDate = new Date("2026-01-26T00:00:00")
    const updateCountdown = () => {
      const now = new Date()
      const diff = startDate.getTime() - now.getTime()
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        })
      }
    }
    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={heroRef}
      id="inicio"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] noise-overlay"
    >
      {/* Aurora Animated Background */}
      <div className="absolute inset-0 aurora-bg" />

      {/* Mesh Gradient Orbs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(77, 208, 225, 0.4) 0%, transparent 70%)",
          top: "-20%",
          left: "10%",
          x: useTransform(x, v => v * 3),
          y: useTransform(y, v => v * 3),
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
          bottom: "-10%",
          right: "5%",
          x: useTransform(x, v => v * -2),
          y: useTransform(y, v => v * -2),
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
          top: "40%",
          right: "30%",
          x: useTransform(x, v => v * 1.5),
          y: useTransform(y, v => v * 1.5),
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(77, 208, 225, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(77, 208, 225, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)",
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? "#4dd0e1" : "#8b5cf6",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="text-center space-y-8 sm:space-y-10 max-w-5xl mx-auto">

          {/* #1 Badge - Holographic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full holographic-card mt-12 md:mt-20"
          >
            <span className="text-2xl">🏆</span>
            <span className="text-sm sm:text-base text-white font-bold relative z-10">
              #1 en Latinoamérica y España
            </span>
          </motion.div>

          {/* Main Headline with Scramble Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight font-premium px-2">
              <span className="block text-white">Cursos de IA para Niños:</span>
              <span className="block text-white">Tu Hijo Aprende a</span>
              <span className="block premium-gradient-text"
                style={{ textShadow: "0 0 80px rgba(77, 208, 225, 0.5)" }}
              >
                CREAR con IA
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white/90"
            >
              No solo consume tecnología. <span className="text-primary">La domina.</span>
            </motion.p>

            <div
              className="absolute -inset-x-20 -inset-y-10 -z-10 opacity-50 blur-3xl"
              style={{
                background: "radial-gradient(ellipse at center, rgba(77, 208, 225, 0.2) 0%, transparent 70%)",
              }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            <span className="text-white font-semibold">10 clases en vivo</span> • Grupos de solo <span className="text-primary font-semibold">5 niños</span>
            <br className="hidden sm:block" />
            Crea <span className="text-white">apps, juegos y startups reales</span> con ChatGPT, Midjourney y más.
            <br />
            Para niños de <span className="text-primary font-semibold">8-14 años</span> • <span className="text-green-400 font-bold">$197 USD</span>
          </motion.p>

          {/* Countdown Timer - Premium Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="relative p-8 rounded-3xl overflow-hidden holographic-card"
          >
            <div className="relative z-10">
              <p className="text-gray-400 text-sm sm:text-base mb-4 uppercase tracking-[0.2em] font-premium">
                El programa inicia en
              </p>

              <div className="flex justify-center gap-4 sm:gap-8">
                {[
                  { value: timeLeft.days, label: "días" },
                  { value: timeLeft.hours, label: "horas" },
                  { value: timeLeft.minutes, label: "min" },
                  { value: timeLeft.seconds, label: "seg" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="relative group/item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className="text-center px-4 sm:px-6 py-4 rounded-2xl transition-all duration-300"
                      style={{
                        background: "rgba(77, 208, 225, 0.05)",
                        border: "1px solid rgba(77, 208, 225, 0.2)",
                      }}
                    >
                      <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-premium bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                        {item.value.toString().padStart(2, "0")}
                      </div>
                      <div className="text-gray-500 text-xs sm:text-sm uppercase mt-2 tracking-wider">
                        {item.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-white font-semibold mt-6 text-lg font-premium">
                Próximo curso: <span className="text-primary">26 de Enero, 2026</span>
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("sesion-estrategica")}
              className="magnetic-btn relative group bg-gradient-to-r from-primary via-primary to-[#8b5cf6] hover:opacity-90 text-background px-8 sm:px-12 py-6 sm:py-7 text-lg sm:text-xl font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_50px_rgba(77,208,225,0.5)] overflow-hidden"
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity shimmer"
              />
              <span className="relative flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                AGENDAR ENTREVISTA ADMISIÓN
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("programa")}
              className="group border-white/20 hover:border-primary/50 hover:bg-primary/5 text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Ver Programa
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-gray-400"
          >
            {[
              { icon: Users, text: "500+ graduados", highlight: true },
              { icon: Award, text: "4.9★ valoración", highlight: true },
              { icon: Shield, text: "Garantía 10 días" },
              { icon: Users, text: "Grupos de 5" },
            ].map((item, i) => (
              <motion.span
                key={i}
                className={`flex items-center gap-2 ${item.highlight ? 'text-primary font-semibold' : ''} hover:text-primary transition-colors`}
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="w-4 h-4 text-primary" />
                {item.text}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #030712, transparent)",
        }}
      />
    </section>
  )
}

export default HeroSection
