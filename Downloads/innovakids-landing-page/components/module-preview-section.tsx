"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const lessons = [
    { num: 1, title: "Vibe IA: Tu nuevo superpoder", desc: "Configuración completa de herramientas" },
    { num: 2, title: "Prompt Engineering", desc: "El arte de hablar con máquinas" },
    { num: 3, title: "Vibe Voice", desc: "Clonación de voz y narración con IA" },
    { num: 4, title: "Vibe Music", desc: "Composición musical con IA" },
    { num: 5, title: "Generative Art I", desc: "De la imaginación a la imagen" },
    { num: 6, title: "Generative Art II", desc: "Storytelling visual consistente" },
    { num: 7, title: "Vibe Cinema", desc: "Creación de video con IA" },
    { num: 8, title: "Digital Twin", desc: "Creando tu avatar 3D parlante" },
    { num: 9, title: "Cyber Ethics", desc: "Deepfakes y seguridad digital" },
    { num: 10, title: "The Vibe Project", desc: "Presentación final de identidad" },
]

export function ModulePreviewSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section ref={sectionRef} id="que-aprende" className="relative bg-[#0a1628] py-16 md:py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-bold mb-4">
                        <Sparkles className="w-4 h-4" />
                        Módulo 1: Vibe Explorer • $197 USD
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Esto es lo que tu hijo <span className="premium-gradient-text">aprenderá</span>
                    </h2>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        10 clases en vivo de 90 minutos cada una. Grupos de máximo 5 niños.
                        <br />
                        <span className="text-white font-semibold">Empieza: Sábado 26 de Enero, 2025</span>
                    </p>
                </motion.div>

                {/* Lessons Grid */}
                <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
                    {lessons.map((lesson, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-500/30 hover:bg-yellow-500/5 transition-all group"
                        >
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold">
                                {lesson.num}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-semibold group-hover:text-yellow-400 transition-colors">
                                    {lesson.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{lesson.desc}</p>
                            </div>
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        </motion.div>
                    ))}
                </div>

                {/* What they create */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-8"
                >
                    <h3 className="text-xl font-bold text-white mb-4">Al terminar el módulo, tu hijo habrá creado:</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "🎨 Arte con IA",
                            "🎵 Música original",
                            "🎬 Video animado",
                            "🗣️ Voz clonada",
                            "🧑‍💻 Avatar 3D",
                            "📱 Identidad digital",
                        ].map((item, i) => (
                            <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium">
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-center"
                >
                    <Button
                        size="lg"
                        asChild
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black px-10 py-6 text-lg font-bold rounded-full shadow-2xl"
                    >
                        <Link href="https://calendly.com/innovakids/evaluacion" target="_blank">
                            Quiero que mi hijo aprenda esto →
                        </Link>
                    </Button>
                    <p className="mt-4 text-gray-500 text-sm">Solo 2 cupos disponibles para el grupo de Enero</p>
                </motion.div>
            </div>
        </section>
    )
}
