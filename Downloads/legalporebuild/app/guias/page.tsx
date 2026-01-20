import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
    BookOpen,
    Briefcase,
    Heart,
    Scale,
    Home,
    CreditCard,
    ArrowRight,
    Clock,
    Star,
    Users,
} from "lucide-react"

export const metadata: Metadata = {
    title: "Guías Legales Chile 2026 | Tutoriales Paso a Paso | LegalPO",
    description:
        "📚 GUÍAS LEGALES COMPLETAS para Chile 2026. Finiquito, pensión alimenticia, herencias, arriendos y más. Tutoriales paso a paso con ejemplos prácticos y calculadoras gratis.",
    keywords: [
        "guias legales chile",
        "tutoriales legales",
        "como calcular finiquito",
        "guia pension alimentos",
        "guia herencia chile",
        "manual legal chile",
    ],
}

const guides = [
    {
        title: "Cómo Calcular tu Finiquito en Chile",
        description:
            "Guía completa con fórmulas actualizadas 2026, ejemplos prácticos paso a paso, y todo lo que necesitas saber para calcular exactamente cuánto te corresponde de finiquito.",
        href: "/guias/como-calcular-finiquito-completo",
        icon: Briefcase,
        color: "emerald",
        readTime: "15 min",
        readers: "50,000+",
        topics: ["Indemnización años servicio", "Vacaciones proporcionales", "Aviso previo", "Causales de despido"],
    },
    {
        title: "Guía Completa de Pensión de Alimentos Chile",
        description:
            "Todo sobre pensión alimenticia en Chile: cómo calcularla, cómo demandar, qué hacer si no pagan, y las nuevas reglas de la Ley de Pago Efectivo 2025-2026.",
        href: "/guias/guia-pension-alimentos-chile",
        icon: Heart,
        color: "rose",
        readTime: "12 min",
        readers: "35,000+",
        topics: ["Cálculo de pensión", "Demanda de alimentos", "Ley de Pago Efectivo", "Aumento de pensión"],
        comingSoon: true,
    },
    {
        title: "Guía de Herencias y Sucesiones Chile",
        description:
            "Aprende cómo se reparte una herencia en Chile, qué es la posesión efectiva, cuánto se paga de impuestos, y cuáles son tus derechos como heredero.",
        href: "/guias/guia-herencia-chile",
        icon: Scale,
        color: "purple",
        readTime: "10 min",
        readers: "25,000+",
        topics: ["Posesión efectiva", "Reparto de herencia", "Impuesto a la herencia", "Testamentos"],
        comingSoon: true,
    },
    {
        title: "Guía de Arriendos y Ley Devuélveme mi Casa",
        description:
            "Todo sobre arriendos en Chile: derechos del arrendador y arrendatario, la nueva Ley Devuélveme mi Casa, y cómo actuar en caso de conflictos.",
        href: "/guias/guia-arriendos-chile",
        icon: Home,
        color: "blue",
        readTime: "8 min",
        readers: "20,000+",
        topics: ["Contratos de arriendo", "Desalojo rápido", "Garantía", "Reparaciones"],
        comingSoon: true,
    },
    {
        title: "Guía de Deudas y Ley de Quiebras Personales",
        description:
            "Conoce tus derechos si tienes deudas: qué pueden embargarte, cuándo prescribe una deuda, cómo salir de DICOM, y opciones de renegociación.",
        href: "/guias/guia-deudas-chile",
        icon: CreditCard,
        color: "amber",
        readTime: "10 min",
        readers: "30,000+",
        topics: ["Prescripción de deudas", "DICOM", "Embargo de bienes", "Ley de Quiebras"],
        comingSoon: true,
    },
]

export default function GuiasPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Hero */}
            <section className="py-16 bg-gradient-to-b from-slate-800/30 to-transparent border-b border-white/5">
                <div className="container max-w-5xl mx-auto px-4 text-center">
                    <Badge className="mb-4 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Centro de Guías Legales
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                        Guías Legales Chile 2026
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        Tutoriales completos paso a paso sobre los temas legales más importantes en Chile. Información clara,
                        actualizada y 100% gratis.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex items-center gap-2 text-slate-300">
                            <Users className="h-5 w-5 text-emerald-400" />
                            <span>+150,000 lectores</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                            <Star className="h-5 w-5 text-yellow-400" />
                            <span>4.9/5 valoración</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                            <BookOpen className="h-5 w-5 text-blue-400" />
                            <span>5 guías disponibles</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guides Grid */}
            <section className="py-12">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="grid gap-6">
                        {guides.map((guide, index) => (
                            <Card
                                key={index}
                                className={`bg-white/5 border-white/10 hover:border-${guide.color}-500/30 transition-colors ${guide.comingSoon ? "opacity-70" : ""}`}
                            >
                                <CardContent className="p-6">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        {/* Icon */}
                                        <div className={`p-4 bg-${guide.color}-500/20 rounded-xl self-start`}>
                                            <guide.icon className={`h-8 w-8 text-${guide.color}-400`} />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h2 className="text-xl font-bold text-white">{guide.title}</h2>
                                                {guide.comingSoon && (
                                                    <Badge variant="outline" className="border-amber-500/50 text-amber-400">
                                                        Próximamente
                                                    </Badge>
                                                )}
                                            </div>
                                            <p className="text-slate-300 mb-4">{guide.description}</p>

                                            {/* Topics */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {guide.topics.map((topic, i) => (
                                                    <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded text-slate-400">
                                                        {topic}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Meta & Button */}
                                            <div className="flex flex-wrap items-center justify-between gap-4">
                                                <div className="flex items-center gap-4 text-sm text-slate-400">
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="h-4 w-4" />
                                                        {guide.readTime}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Users className="h-4 w-4" />
                                                        {guide.readers}
                                                    </span>
                                                </div>
                                                {!guide.comingSoon && (
                                                    <Link href={guide.href}>
                                                        <Button className={`bg-${guide.color}-600 hover:bg-${guide.color}-700`}>
                                                            Leer Guía Completa
                                                            <ArrowRight className="h-4 w-4 ml-2" />
                                                        </Button>
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-b from-transparent to-slate-800/30">
                <div className="container max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda personalizada?</h2>
                    <p className="text-slate-300 mb-6">
                        Nuestro abogado virtual con IA puede responder tus preguntas específicas 24/7, gratis.
                    </p>
                    <Link href="/">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                            Consultar Abogado IA Gratis
                            <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
