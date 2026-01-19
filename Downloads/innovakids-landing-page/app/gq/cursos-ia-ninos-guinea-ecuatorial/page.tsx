import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Cursos de IA para Niños en Guinea Ecuatorial 2026 | InnovaKids 🇬🇶",
    description: "Cursos de inteligencia artificial en español para niños de Guinea Ecuatorial. ChatGPT, videojuegos, arte digital. $197 USD.",
    keywords: ["cursos ia niños guinea ecuatorial", "clases ia malabo", "aprender ia niños africa español"],
    alternates: { canonical: "https://www.innovakidslatam.com/gq/cursos-ia-ninos-guinea-ecuatorial" },
}

export default function CursosGuineaPage() {
    return (
        <>
            <Navigation />
            <WhatsAppButton />
            <main className="min-h-screen bg-background">
                <section className="pt-32 pb-24 bg-gradient-to-b from-background to-[#0a1628]">
                    <div className="container mx-auto px-6 max-w-5xl text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-premium">
                            Cursos de IA para Niños <span className="text-primary">en Guinea Ecuatorial</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            El único curso de inteligencia artificial 100% en español para niños ecuatoguineanos.
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
