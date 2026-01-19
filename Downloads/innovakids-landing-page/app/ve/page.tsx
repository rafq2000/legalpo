import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Clock, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Curso IA Niños Venezuela $197 | Tu Hijo Crea Apps Reales | InnovaKids 🇻🇪",
    description:
        "Tu hijo aprende a CREAR con IA en Venezuela. 10 clases en vivo, grupos de 5 niños. Caracas, Maracaibo, Valencia. Crea apps, juegos, startups. 500+ graduados. Garantía 10 días.",
    keywords: [
        "ia para niños venezuela",
        "cursos ia niños caracas",
        "clases ia niños maracaibo",
        "cursos inteligencia artificial venezuela",
        "innovakids venezuela",
        "programación para niños venezuela",
    ],
    openGraph: {
        title: "Curso IA Niños Venezuela $197 | Tu Hijo Crea Apps Reales",
        description: "Tu hijo aprende a CREAR con IA. Caracas, Maracaibo, Valencia. 500+ graduados. Garantía 10 días.",
        url: "https://www.innovakidslatam.com/ve",
        locale: "es_VE",
    },
    alternates: {
        canonical: "https://www.innovakidslatam.com/ve",
    },
}

const ciudades = [
    { nombre: "Caracas", emoji: "🏙️", link: "/ve/clases-ia-ninos-caracas", desc: "Distrito Capital, Chacao, Altamira" },
    { nombre: "Maracaibo", emoji: "🌅", link: "/ve/cursos-ia-ninos-venezuela", desc: "Zulia, La Lago" },
    { nombre: "Valencia", emoji: "🏭", link: "/ve/cursos-ia-ninos-venezuela", desc: "Carabobo, Naguanagua" },
    { nombre: "Barquisimeto", emoji: "🌄", link: "/ve/cursos-ia-ninos-venezuela", desc: "Lara, Zona Este" },
    { nombre: "Mérida", emoji: "🏔️", link: "/ve/cursos-ia-ninos-venezuela", desc: "Mérida, Los Andes" },
    { nombre: "Puerto Ordaz", emoji: "⛏️", link: "/ve/cursos-ia-ninos-venezuela", desc: "Bolívar, Ciudad Guayana" },
]

export default function VenezuelaHubPage() {
    return (
        <>
            <Navigation />
            <WhatsAppButton />

            <main className="min-h-screen bg-background">
                <section className="relative pt-32 pb-24 bg-gradient-to-b from-background to-[#0a1628] noise-overlay">
                    <div className="absolute inset-0 aurora-bg opacity-30" />
                    <div className="container mx-auto px-6 max-w-6xl text-center relative z-10">
                        <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-6 py-2 mb-8">
                            <span className="text-4xl">🇻🇪</span>
                            <span className="text-white font-medium">InnovaKids en Venezuela</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 font-premium">
                            Cursos de IA para Niños
                            <br />
                            <span className="premium-gradient-text">en Venezuela</span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            El mejor curso de inteligencia artificial para niños venezolanos de 8-14 años. Online en vivo con grupos de máximo 5 alumnos.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <div className="flex items-center gap-2 text-gray-400">
                                <Users className="w-5 h-5 text-[#4DD0E1]" />
                                <span>Máx. 5 niños/clase</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Clock className="w-5 h-5 text-[#4DD0E1]" />
                                <span>10 clases en vivo</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Shield className="w-5 h-5 text-[#4DD0E1]" />
                                <span>Garantía 10 días</span>
                            </div>
                        </div>

                        <Link href="/#sesion-estrategica">
                            <Button className="magnetic-btn bg-gradient-to-r from-primary to-[#8b5cf6] hover:opacity-90 text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all">
                                🎯 Reservar Evaluación Gratis
                            </Button>
                        </Link>
                    </div>
                </section>

                <section className="py-24 bg-[#0a1628]">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4 font-premium">
                            Disponible en <span className="text-primary">Toda Venezuela</span>
                        </h2>
                        <p className="text-gray-400 text-center mb-12">Clases online en vivo adaptadas al horario venezolano</p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {ciudades.map((ciudad, i) => (
                                <Link key={i} href={ciudad.link}>
                                    <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10 hover:border-[#4DD0E1]/50 transition-all group cursor-pointer hover:-translate-y-1">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="text-4xl">{ciudad.emoji}</span>
                                            <div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-[#4DD0E1] transition-colors">
                                                    {ciudad.nombre}
                                                </h3>
                                                <p className="text-gray-500 text-sm">{ciudad.desc}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-[#4DD0E1] text-sm">
                                            <MapPin className="w-4 h-4" />
                                            <span>Ver clases disponibles →</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12 font-premium">
                            ¿Por Qué InnovaKids es Líder en Venezuela?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { icon: "🎯", title: "Grupos Ultra Reducidos", desc: "Máximo 5 niños por clase para atención 100% personalizada." },
                                { icon: "⏰", title: "Horarios Venezuela", desc: "Clases adaptadas a GMT-4. Mañana, tarde o fin de semana." },
                                { icon: "💵", title: "Pagos en USD", desc: "Zelle, PayPal, Binance, tarjetas internacionales. Como te sea más fácil." },
                                { icon: "🛡️", title: "Garantía 10 Días", desc: "No satisfecho = devolución completa. Sin preguntas." },
                                { icon: "📱", title: "Soporte WhatsApp", desc: "Atención 24/7 en español. Respuesta inmediata." },
                                { icon: "🏆", title: "Certificación", desc: "Diploma oficial + portfolio digital de proyectos creados." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="text-4xl flex-shrink-0">{item.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-[#0a1628]">
                    <div className="container mx-auto px-6 max-w-3xl text-center">
                        <h2 className="text-3xl font-bold text-white mb-8 font-premium">Inversión para Familias Venezolanas</h2>

                        <div className="holographic-card p-10">
                            <div className="relative z-10">
                                <div className="text-5xl font-bold text-white mb-2 font-premium">$197 USD</div>
                                <p className="text-gray-400 mb-6">Pago único • 10 clases completas</p>

                                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300 mb-8">
                                    <span>✅ Grupos de 5 niños</span>
                                    <span>✅ Garantía 10 días</span>
                                    <span>✅ Certificado oficial</span>
                                </div>

                                <Link href="/#sesion-estrategica">
                                    <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-10 py-6 text-lg font-bold rounded-full">
                                        Agendar Evaluación Gratuita
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-8 bg-[#0a1628] border-t border-white/5">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="flex flex-wrap gap-3 text-sm">
                            <Link href="/ve/cursos-ia-ninos-venezuela" className="text-[#4DD0E1] hover:underline">Cursos IA Niños Venezuela</Link>
                            <Link href="/ve/clases-ia-ninos-caracas" className="text-[#4DD0E1] hover:underline">Clases IA Caracas</Link>
                            <Link href="/ve/blog/cursos-inteligencia-artificial-ninos-venezuela-guia" className="text-[#4DD0E1] hover:underline">Guía Completa</Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
