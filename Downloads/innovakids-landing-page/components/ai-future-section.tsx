"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, AlertTriangle, Sparkles } from "lucide-react"

export function AIFutureSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section ref={sectionRef} className="relative bg-gradient-to-b from-[#0a1628] to-[#030712] py-16 md:py-24 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Main stat card */}
                    <div className="text-center mb-10">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6"
                        >
                            <AlertTriangle className="w-4 h-4" />
                            Dato del Foro Económico Mundial 2024
                        </motion.div>

                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Para <span className="text-primary">2035</span>, el <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">85%</span> de los trabajos
                            <br className="hidden md:block" />
                            <span className="text-white">requerirán habilidades de IA</span>
                        </h2>

                        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                            Los niños que aprenden IA hoy tendrán <span className="text-white font-semibold">10 años de ventaja</span> sobre los demás.
                            <br />
                            ¿Tu hijo estará preparado?
                        </p>
                    </div>

                    {/* Stats grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            {
                                stat: "97M",
                                label: "Nuevos empleos de IA",
                                sublabel: "creados globalmente para 2025",
                                icon: TrendingUp,
                                color: "from-green-500/20 to-emerald-500/20",
                                borderColor: "border-green-500/30"
                            },
                            {
                                stat: "40%",
                                label: "De empresas Fortune 500",
                                sublabel: "buscan habilidades de IA en candidatos",
                                icon: Sparkles,
                                color: "from-primary/20 to-cyan-500/20",
                                borderColor: "border-primary/30"
                            },
                            {
                                stat: "3x",
                                label: "Mayor salario promedio",
                                sublabel: "para trabajadores con skills de IA",
                                icon: TrendingUp,
                                color: "from-purple-500/20 to-pink-500/20",
                                borderColor: "border-purple-500/30"
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className={`relative rounded-2xl p-6 border-2 ${item.borderColor} bg-gradient-to-br ${item.color} backdrop-blur-xl text-center`}
                            >
                                <item.icon className="w-8 h-8 text-white/50 mx-auto mb-3" />
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{item.stat}</div>
                                <div className="text-white font-semibold mb-1">{item.label}</div>
                                <div className="text-gray-400 text-sm">{item.sublabel}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-center"
                    >
                        <p className="text-lg text-gray-300 mb-4">
                            La pregunta no es <span className="text-white font-semibold">si</span> tu hijo necesitará IA,
                            <br />
                            sino <span className="text-primary font-bold">cuándo</span> empezará a aprenderla.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
