"use client"

import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

export function FinalCTA() {
    const scrollToChat = () => {
        const chatSection = document.getElementById("chat-interface")
        if (chatSection) {
            chatSection.scrollIntoView({
                behavior: "smooth",
                block: "center",
            })

            setTimeout(() => {
                const inputElement = document.querySelector('input[placeholder*="Ej:"]') as HTMLInputElement
                if (inputElement) {
                    inputElement.focus()
                }
            }, 500)
        }
    }

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-amber-600/20 to-amber-700/20 border-t border-amber-500/30">
            <div className="container text-center px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
                    Comienza a Usar Nuestro <span className="text-amber-400">Abogado Gratis Online</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                    Obtén <strong>asesoría legal gratis con inteligencia artificial</strong> ahora mismo. Nuestro{" "}
                    <strong>abogado virtual gratis</strong> está listo para responder tus{" "}
                    <strong>consultas legales gratis</strong>.
                </p>
                <Button
                    onClick={scrollToChat}
                    size="lg"
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
                >
                    <Rocket className="h-6 w-6 mr-3" />
                    OBTENER ASESORÍA LEGAL GRATIS CON IA AHORA
                </Button>
            </div>
        </section>
    )
}
