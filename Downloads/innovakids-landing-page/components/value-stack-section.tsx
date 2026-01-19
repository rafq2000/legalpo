"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
    CheckCircle2,
    Video,
    Users,
    MessageCircle,
    Award,
    BookOpen,
    Headphones,
    FileVideo,
    Palette,
    Shield,
    Gift,
    Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const included = [
    {
        icon: Video,
        title: "10 Clases en Vivo",
        desc: "90 minutos cada una con instructor experto",
        value: "$500",
    },
    {
        icon: Users,
        title: "Grupos de Máximo 5 Niños",
        desc: "Atención 100% personalizada para tu hijo",
        value: "$200",
    },
    {
        icon: FileVideo,
        title: "Grabaciones de Todas las Clases",
        desc: "Acceso ilimitado para repasar cuando quiera",
        value: "$150",
    },
    {
        icon: Palette,
        title: "Acceso a 15+ Herramientas de IA",
        desc: "ChatGPT, Midjourney, ElevenLabs, Runway y más",
        value: "$300",
    },
    {
        icon: BookOpen,
        title: "Material Descargable",
        desc: "Guías, plantillas y recursos exclusivos",
        value: "$100",
    },
    {
        icon: MessageCircle,
        title: "Comunidad Privada Discord",
        desc: "Conexión con otros alumnos y mentores",
        value: "$50",
    },
    {
        icon: Headphones,
        title: "Soporte WhatsApp 24/7",
        desc: "Respuestas en menos de 2 horas",
        value: "$100",
    },
    {
        icon: Award,
        title: "Certificado Digital",
        desc: "Reconocimiento oficial de InnovaKids",
        value: "$50",
    },
    {
        icon: Zap,
        title: "Portfolio de Proyectos",
        desc: "5+ proyectos reales para mostrar",
        value: "$200",
    },
    {
        icon: Gift,
        title: "BONUS: Clase de Seguridad Digital",
        desc: "Protección contra deepfakes y estafas",
        value: "$100",
    },
]

export function ValueStackSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    const totalValue = included.reduce((acc, item) => acc + parseInt(item.value.replace("$", "")), 0)

    return (
        <section ref={sectionRef} className="relative bg-gradient-to-b from-[#030712] to-[#0a1628] py-16 md:py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Todo lo que <span className="text-green-400">recibe</span> tu hijo
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        No solo son clases. Es un programa completo para transformar a tu hijo en un creador de tecnología.
                    </p>
                </motion.div>

                {/* Value items grid */}
                <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
                    {included.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/30 hover:bg-green-500/5 transition-all group"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                                <item.icon className="w-6 h-6 text-green-400" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="text-white font-semibold group-hover:text-green-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <span className="text-gray-500 line-through text-sm">{item.value}</span>
                                </div>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        </motion.div>
                    ))}
                </div>

                {/* Total value box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="max-w-2xl mx-auto mb-8"
                >
                    <div className="rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/30 p-6 text-center">
                        <p className="text-gray-400 mb-2">Valor total del programa:</p>
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <span className="text-3xl md:text-4xl text-gray-500 line-through">${totalValue} USD</span>
                            <span className="text-4xl md:text-5xl font-bold text-green-400">$197 USD</span>
                        </div>
                        <p className="text-white font-medium">
                            Ahorra <span className="text-green-400 font-bold">${totalValue - 197} USD</span> con el precio de lanzamiento 2026
                        </p>
                    </div>
                </motion.div>

                {/* Guarantee */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex items-center justify-center gap-4 mb-8"
                >
                    <Shield className="w-12 h-12 text-yellow-500" />
                    <div className="text-left">
                        <p className="text-white font-bold text-lg">Garantía de 10 días</p>
                        <p className="text-gray-400 text-sm">Si no estás satisfecho, te devolvemos el 100%. Sin preguntas.</p>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-center"
                >
                    <Button
                        size="lg"
                        asChild
                        className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-black px-10 py-6 text-lg font-bold rounded-full shadow-2xl"
                    >
                        <Link href="https://calendly.com/innovakids/evaluacion" target="_blank">
                            Sí, quiero todo esto por $197 →
                        </Link>
                    </Button>
                    <p className="mt-4 text-gray-500 text-sm">Solo 2 cupos disponibles • Inicia 26 de Enero</p>
                </motion.div>
            </div>
        </section>
    )
}
