"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare, Calculator } from "lucide-react"
import Link from "next/link"

export function HeroButtons() {
    const scrollToChat = () => {
        const chatSection = document.querySelector("[data-chat-interface]")
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <Button
                onClick={scrollToChat}
                size="lg"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:shadow-[0_0_30px_rgba(5,150,105,0.6)] transition-all duration-300 border-none rounded-xl"
            >
                💬 CONSULTA LEGAL GRATIS
                <MessageSquare className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/calculators/finiquito" className="w-full sm:w-auto">
                <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white/10 text-slate-200 hover:bg-white/5 hover:text-white px-8 py-6 text-lg font-medium backdrop-blur-sm bg-white/5 rounded-xl transition-all duration-300"
                >
                    📊 CALCULADORAS
                    <Calculator className="ml-2 h-5 w-5" />
                </Button>
            </Link>
        </div>
    )
}
