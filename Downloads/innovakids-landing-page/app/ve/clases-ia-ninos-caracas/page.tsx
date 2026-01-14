import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Clases de IA para Niños en Caracas 2026 | Chacao, Altamira | InnovaKids 🇻🇪",
    description:
        "Clases de inteligencia artificial para niños en Caracas. Chacao, Altamira, Las Mercedes, El Rosal. Online en vivo, grupos de 5 alumnos. Horarios flexibles.",
    keywords: [
        "clases ia niños caracas",
        "cursos inteligencia artificial caracas",
        "ia para niños chacao",
        "clases programación niños altamira",
        "innovakids caracas",
    ],
    openGraph: {
        title: "Clases de IA para Niños en Caracas | InnovaKids",
        description: "Aprende IA en Caracas. Clases online para niños de 8-14 años.",
        url: "https://www.innovakidslatam.com/ve/clases-ia-ninos-caracas",
    },
    alternates: {
        canonical: "https://www.innovakidslatam.com/ve/clases-ia-ninos-caracas",
    },
}

export default function ClasesCaracasPage() {
    return (
        <>
            <Navigation />
            <WhatsAppButton />
            <main className="min-h-screen bg-background">
                <section className="relative pt-32 pb-24 bg-gradient-to-b from-background to-[#0a1628]">
                    <div className="container mx-auto px-6 max-w-5xl text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 font-premium">
                            Clases de IA para Niños
                            <br />
                            <span className="text-primary">en Caracas</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            El mejor curso de inteligencia artificial para niños caraqueños. Online en vivo con grupos de máximo 5 alumnos, adaptado a tu horario.
                        </p>
                        <Link href="/#sesion-estrategica">
                            <Button className="bg-primary hover:bg-primary/90 text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full">
                                Reservar Clase GRATIS
                            </Button>
                        </Link>
                    </div>
                </section>

                <section className="py-20 bg-[#0a1628]">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl font-bold text-white text-center mb-8">Zonas que Atendemos en Caracas</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            {["Chacao", "Altamira", "Las Mercedes", "El Rosal", "La Castellana", "Los Palos Grandes", "Baruta", "El Hatillo"].map((zona) => (
                                <div key={zona} className="bg-white/5 rounded-lg p-4 border border-white/10">
                                    <span className="text-white">{zona}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-background">
                    <div className="container mx-auto px-6 max-w-3xl text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">¿Listo para Empezar?</h2>
                        <p className="text-gray-400 mb-8">Agenda una sesión estratégica gratuita y descubre cómo tu hijo puede dominar la IA.</p>
                        <Link href="/#sesion-estrategica">
                            <Button className="bg-primary hover:bg-primary/90 text-[#0a1628] px-10 py-6 text-lg font-bold rounded-full">
                                Agendar Ahora →
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
