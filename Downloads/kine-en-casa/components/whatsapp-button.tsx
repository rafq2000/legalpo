"use client"

import { MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 1500) // Delay appearance for dramatic effect
        return () => clearTimeout(timer)
    }, [])

    return (
        <div
            className={cn(
                "fixed bottom-8 right-8 z-50 transition-all duration-700 ease-out transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative group">
                {/* Pulse Effect - Subtle & Gold */}
                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-20 animate-pulse group-hover:opacity-40 transition-opacity duration-500"></div>

                <Button
                    onClick={() => window.open("https://wa.me/56999679593?text=Hola, me interesa información sobre kinesiología premium", "_blank")}
                    className={cn(
                        "relative h-14 pl-5 pr-6 rounded-full shadow-2xl transition-all duration-300 border border-white/20 backdrop-blur-md",
                        "bg-slate-900/90 hover:bg-slate-800 text-white", // Dark premium base
                        "flex items-center gap-3 group-hover:scale-105"
                    )}
                >
                    {/* Icon Container */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500 blur-sm opacity-50 rounded-full"></div>
                        <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-700 p-2 rounded-full border border-emerald-400/50">
                            <MessageCircle className="h-5 w-5 text-white fill-white" />
                        </div>
                        {/* Online Dot */}
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-slate-900"></span>
                        </span>
                    </div>

                    {/* Text Content */}
                    <div className="hidden md:flex flex-col items-start transition-all duration-300">
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider leading-none mb-0.5">
                            Disponible Ahora
                        </span>
                        <span className="text-sm font-serif font-medium text-slate-100 leading-none">
                            Agenda tu Sesión
                        </span>
                    </div>

                    {/* Arrow */}
                    <div className={cn(
                        "w-0 overflow-hidden transition-all duration-300 opacity-0",
                        isHovered && "w-4 opacity-100 ml-1"
                    )}>
                        <ArrowRight className="h-4 w-4 text-emerald-400" />
                    </div>
                </Button>
            </div>
        </div>
    )
}
