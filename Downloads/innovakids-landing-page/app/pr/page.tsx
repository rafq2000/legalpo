import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Clock, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "InnovaKids Puerto Rico | Cursos de IA para Niños | San Juan 🇵🇷",
    description:
        "Cursos de inteligencia artificial para niños en Puerto Rico. San Juan, Bayamón, Ponce. Clases online con grupos de 5 alumnos. $197 USD. 🇵🇷",
    keywords: [
        "ia para niños puerto rico",
        "cursos ia niños san juan",
        "clases inteligencia artificial puerto rico",
        "innovakids puerto rico",
        "programación niños boricuas",
    ],
    openGraph: {
        title: "InnovaKids Puerto Rico | Cursos de IA para Niños",
        description: "Cursos de inteligencia artificial para niños en Puerto Rico.",
        url: "https://www.innovakidslatam.com/pr",
        locale: "es_PR",
    },
    alternates: {
        canonical: "https://www.innovakidslatam.com/pr",
    },
}

const ciudades = [
    { nombre: "San Juan", emoji: "🏰", link: "/pr/clases-ia-ninos-san-juan", desc: "Viejo San Juan, Condado, Isla Verde" },
    { nombre: "Bayamón", emoji: "🏙️", link: "/pr/cursos-ia-ninos-puerto-rico", desc: "Área Metro" },
    { nombre: "Ponce", emoji: "🎭", link: "/pr/cursos-ia-ninos-puerto-rico", desc: "La Perla del Sur" },
    { nombre: "Carolina", emoji: "✈️", link: "/pr/cursos-ia-ninos-puerto-rico", desc: "Zona Aeropuerto" },
    { nombre: "Mayagüez", emoji: "🌊", link: "/pr/cursos-ia-ninos-puerto-rico", desc: "Costa Oeste" },
]

export default function PuertoRicoHubPage() {
    return (
        <>
            <Navigation />
            <WhatsAppButton />
            <main className="min-h-screen bg-background">
                <section className="relative pt-32 pb-24 bg-gradient-to-b from-background to-[#0a1628] noise-overlay">
                    <div className="absolute inset-0 aurora-bg opacity-30" />
                    <div className="container mx-auto px-6 max-w-6xl text-center relative z-10">
                        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-6 py-2 mb-8">
                            <span className="text-4xl">🇵🇷</span>
                            <span className="text-white font-medium">InnovaKids en Puerto Rico</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 font-premium">
                            Cursos de IA para Niños
                            <br />
                            <span className="premium-gradient-text">en Puerto Rico</span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            El mejor curso de inteligencia artificial para niños boricuas de 8-14 años. Online en vivo con grupos de máximo 5 alumnos.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <div className="flex items-center gap-2 text-gray-400">
                                <Users className="w-5 h-5 text-primary" />
                                <span>Máx. 5 niños/clase</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Clock className="w-5 h-5 text-primary" />
                                <span>10 clases en vivo</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Shield className="w-5 h-5 text-primary" />
                                <span>Garantía 10 días</span>
                            </div>
                        </div>

                        <Link href="/#sesion-estrategica">
                            <Button className="magnetic-btn bg-gradient-to-r from-primary to-[#8b5cf6] hover:opacity-90 text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full shadow-2xl">
                                🎯 Reservar Evaluación Gratis
                            </Button>
                        </Link>
                    </div>
                </section>

                <section className="py-24 bg-[#0a1628]">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <h2 className="text-3xl font-bold text-white text-center mb-12 font-premium">
                            Disponible en <span className="text-primary">Todo Puerto Rico</span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {ciudades.map((ciudad, i) => (
                                <Link key={i} href={ciudad.link}>
                                    <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-1">
                                        <span className="text-4xl mb-4 block">{ciudad.emoji}</span>
                                        <h3 className="text-xl font-bold text-white mb-2">{ciudad.nombre}</h3>
                                        <p className="text-gray-500 text-sm mb-4">{ciudad.desc}</p>
                                        <div className="flex items-center gap-2 text-primary text-sm">
                                            <MapPin className="w-4 h-4" />
                                            <span>Ver clases →</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6 max-w-3xl text-center">
                        <div className="holographic-card p-10">
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold text-white mb-4 font-premium">Inversión</h2>
                                <div className="text-5xl font-bold text-white mb-2">$197 USD</div>
                                <p className="text-gray-400 mb-6">Pago único • 10 clases completas</p>
                                <Link href="/#sesion-estrategica">
                                    <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-10 py-6 text-lg font-bold rounded-full">
                                        Agendar Evaluación Gratuita
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
