"use client"

import { useState, useRef } from "react"
import { ChevronDown, Gamepad2, Palette, Music, Video, Code, Brain, BookOpen, Shield, Trophy } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"

const classIcons = [
  Gamepad2, // Exploradores
  Palette,  // Prompt
  Music,    // Voces
  Music,    // Música
  Palette,  // Cómics
  Video,    // Videos
  Code,     // Vibe Coding
  BookOpen, // Estudio
  Shield,   // Ética
  Trophy,   // Proyecto Final
]

export function ProgramSection() {
  const [openClass, setOpenClass] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const classes = [
    {
      number: 1,
      title: "Exploradores de la IA",
      description: "Introducción al mundo de la IA y sus posibilidades. Conocerán qué es la inteligencia artificial y cómo está cambiando el mundo.",
      emoji: "🔍",
      project: "Mapa Mental de IA",
    },
    {
      number: 2,
      title: "El Prompt Perfecto",
      description: "Aprende a comunicarte efectivamente con la IA. Dominarán el arte de escribir prompts que generan resultados increíbles.",
      emoji: "✍️",
      project: "Biblioteca de Prompts",
    },
    {
      number: 3,
      title: "Voces y Personajes que Hablan",
      description: "Crea voces y personajes con IA. Darán vida a personajes únicos con voces personalizadas.",
      emoji: "🎭",
      project: "Avatar con Voz Propia",
    },
    {
      number: 4,
      title: "Música con IA",
      description: "Compón tu propia música usando herramientas de IA. Crearán canciones originales sin necesidad de saber música.",
      emoji: "🎵",
      project: "Canción Original",
    },
    {
      number: 5,
      title: "Cómics e Historias Visuales",
      description: "Diseña historias visuales y cómics profesionales. Crearán sus propias novelas gráficas con arte generado por IA.",
      emoji: "📚",
      project: "Cómic de 6 Páginas",
    },
    {
      number: 6,
      title: "Videos con IA + Avatar Digital",
      description: "Produce videos y crea tu avatar digital. Aprenderán a crear contenido de video profesional.",
      emoji: "🎬",
      project: "Video con Avatar",
    },
    {
      number: 7,
      title: "Vibe Coding: Apps, Web y Juegos",
      description: "Aprende a crear aplicaciones, sitios web y juegos usando IA como tu asistente de programación.",
      emoji: "💻",
      project: "Mini Videojuego",
    },
    {
      number: 8,
      title: "Estudio con IA: Tu Tutor Personal",
      description: "Convierte la IA en tu tutor personal para estudiar mejor, hacer resúmenes y preparar pruebas.",
      emoji: "📖",
      project: "Sistema de Estudio",
    },
    {
      number: 9,
      title: "Ética: Sesgos, Fake News y Riesgos",
      description: "Aprende a identificar información falsa, entender sesgos en la IA y usar la tecnología de forma responsable.",
      emoji: "🛡️",
      project: "Detector de Fake News",
    },
    {
      number: 10,
      title: "Proyecto Final: Mi Creación con IA",
      description: "Integra todo lo aprendido en un proyecto final que será parte de tu portafolio profesional.",
      emoji: "🏆",
      project: "Portafolio Completo",
    },
  ]

  const tools = [
    { name: "ChatGPT", logo: "🤖" },
    { name: "Google AI Studio", logo: "🧠" },
    { name: "Suno AI", logo: "🎵" },
    { name: "Canva AI", logo: "🎨" },
    { name: "NotebookLM", logo: "📓" },
    { name: "InVideo", logo: "🎬" },
  ]

  return (
    <section ref={sectionRef} id="programa" className="py-12 sm:py-16 md:py-20 bg-[#030712] noise-overlay relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 aurora-bg opacity-20" />

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-6 sm:mb-8 md:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight font-premium">
            El Viaje de 5 Semanas para Convertirse en un{" "}
            <span className="premium-gradient-text">Creador Digital</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">
            10 clases prácticas (2 por semana) con horarios flexibles que se adaptan a la rutina de los niños.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-[#8b5cf6] to-primary/20 hidden md:block" />

          <div className="space-y-3 sm:space-y-4">
            {classes.map((classItem, index) => {
              const Icon = classIcons[index]
              return (
                <motion.div
                  key={classItem.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-6 top-4 w-4 h-4 rounded-full bg-primary border-4 border-[#030712] z-10 hidden md:block" />

                  <div
                    className={`md:ml-16 rounded-xl border-2 overflow-hidden transition-all duration-300 ${openClass === classItem.number
                      ? "border-primary bg-primary/5"
                      : "border-white/10 bg-white/[0.02] hover:border-primary/30"
                      }`}
                  >
                    <button
                      onClick={() => setOpenClass(openClass === classItem.number ? null : classItem.number)}
                      className="w-full flex items-center justify-between p-3 sm:p-4 md:p-5 text-left hover:bg-white/[0.02] transition-colors gap-2 sm:gap-3"
                    >
                      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        {/* Number Badge */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-[#8b5cf6] flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20"
                        >
                          <span className="text-[#0a1628] font-bold text-lg sm:text-xl">
                            {classItem.number}
                          </span>
                        </motion.div>

                        {/* Emoji + Title */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-2xl">{classItem.emoji}</span>
                          <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">
                            {classItem.title}
                          </h3>
                        </div>
                      </div>

                      <motion.div
                        animate={{ rotate: openClass === classItem.number ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openClass === classItem.number && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                            <div className="pl-0 sm:pl-14 md:pl-16">
                              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
                                {classItem.description}
                              </p>
                              {/* Project Preview Badge */}
                              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-[#8b5cf6]/20 border border-primary/30">
                                <span className="text-lg">🎯</span>
                                <span className="text-sm font-medium text-white">Proyecto:</span>
                                <span className="text-sm text-primary font-bold">{classItem.project}</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-sm sm:text-base md:text-lg font-semibold text-white mb-6 font-premium">
            Herramientas que dominarán:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.1 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-white/[0.03] border border-white/10 hover:border-primary/30 transition-all flex items-center gap-2"
              >
                <span className="text-xl">{tool.logo}</span>
                <span className="text-gray-300 font-medium text-sm sm:text-base">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-16 max-w-4xl mx-auto" />
      </div>
    </section>
  )
}
