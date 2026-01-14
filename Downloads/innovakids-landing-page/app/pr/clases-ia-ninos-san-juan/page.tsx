import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Clases de IA para Niños en San Juan 2026 | InnovaKids 🇵🇷",
    description: "Clases de inteligencia artificial para niños en San Juan. Online en vivo, grupos de 5 alumnos.",
    keywords: ["clases ia niños san juan", "cursos ia puerto rico", "ia niños boricuas"],
    alternates: { canonical: "https://www.innovakidslatam.com/pr/clases-ia-ninos-san-juan" },
}

export default function ClasesSanJuanPage() {
    return (
        <>
            <Navigation />
            <WhatsAppButton />
            <main className="min-h-screen bg-background">
                <section className="pt-32 pb-24 bg-gradient-to-b from-background to-[#0a1628]">
                    <div className="container mx-auto px-6 max-w-5xl text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-premium">
                            Clases de IA <span className="text-primary">en San Juan</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            El mejor curso de IA para niños de San Juan. Online en vivo, grupos de máximo 5 alumnos.
                        </p>
                        <Link href="/#sesion-estrategica">
                            <Button className="bg-primary text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full">
                                Agendar Ahora
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
