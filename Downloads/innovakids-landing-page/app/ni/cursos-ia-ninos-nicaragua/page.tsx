import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generateHreflangs } from "@/lib/seo-config"

export const metadata: Metadata = {
    title: "Cursos de IA para Niños en Nicaragua 2026 | Clases Online | InnovaKids 🇳🇮",
    description:
        "🚀 Curso de IA para Niños Nicaragua. Aprende a CREAR Apps y Juegos (8-14 años). Clases en vivo. ⭐ 4.9/5. 🎁 ¡Agenda tu Clase GRATIS hoy!",
    keywords: ["cursos ia niños nicaragua", "clases inteligencia artificial managua", "aprender ia niños nicaragua"],
    alternates: {
        canonical: "https://www.innovakidslatam.com/ni/cursos-ia-ninos-nicaragua",
        languages: generateHreflangs("sales"),
    },
}

export default function CursosNicaraguaPage() {
    return (
        <>
            <Navigation />
            <WhatsAppButton />
            <main className="min-h-screen bg-background">
                <section className="pt-32 pb-24 bg-gradient-to-b from-background to-[#0a1628]">
                    <div className="container mx-auto px-6 max-w-5xl text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-premium">
                            Cursos de IA para Niños <span className="text-primary">en Nicaragua</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            10 clases en vivo donde tu hijo aprenderá a crear con inteligencia artificial.
                        </p>
                        <Link href="/#sesion-estrategica">
                            <Button className="bg-primary text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full">
                                Reservar Clase GRATIS
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
