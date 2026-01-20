"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Clock, Star, CheckCircle, Users, Shield, Zap } from "lucide-react"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

export default function WhatsAppButton({ phoneNumber, message = "Hola, necesito ayuda legal" }: WhatsAppButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setTimeout(() => setAnimate(true), 100)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  if (!isVisible) return null

  return (
    {/* Backdrop */ }
      {
    isExpanded && (
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={() => setIsExpanded(false)}
      />
    )
  }

  {/* WhatsApp Button Container */ }
  <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end">
    {/* Expanded Card */}
    {isExpanded && (
      <Card className="mb-4 w-[350px] max-w-[calc(100vw-2rem)] bg-slate-900/95 border-emerald-500/30 backdrop-blur-xl shadow-2xl animate-in slide-in-from-bottom-4 zoom-in-95 duration-300 overflow-hidden">
        {/* Header */}
        <div className="relative p-4 bg-gradient-to-r from-emerald-900/50 to-emerald-800/50 border-b border-emerald-500/20">
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 h-8 w-8 p-0 text-slate-300 hover:text-white hover:bg-white/10 rounded-full"
            onClick={() => setIsExpanded(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="h-14 w-14 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                <MessageCircle className="h-7 w-7 text-emerald-400" />
              </div>
              <span className="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full ring-2 ring-slate-900 bg-emerald-500 animate-pulse" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">LegalPO Ayuda</h3>
              <p className="text-emerald-400 text-xs font-medium uppercase tracking-wider">Abogados en Línea</p>
            </div>
          </div>
        </div>

        <CardContent className="p-5 space-y-5">
          {/* Status Bar */}
          <div className="bg-emerald-950/30 rounded-lg p-3 border border-emerald-500/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-6 w-6 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center">
                    <Users className="h-3 w-3 text-slate-400" />
                  </div>
                ))}
              </div>
              <span className="text-xs text-slate-300">3 Abogados disponibles</span>
            </div>
            <Badge variant="outline" className="text-emerald-400 border-emerald-500/30 text-[10px] uppercase bg-emerald-500/5">
              En línea
            </Badge>
          </div>

          {/* Message Bubble */}
          <div className="bg-slate-800/50 rounded-2xl rounded-tl-sm p-4 border border-white/5 relative">
            <p className="text-slate-200 text-sm leading-relaxed">
              ¡Hola! 👋 Soy tu asistente legal de LegalPO. ¿En qué podemos ayudarte hoy?
            </p>
            <span className="text-[10px] text-slate-500 absolute bottom-1 right-3">Ahora</span>
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleWhatsAppClick}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-6 rounded-xl shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
          >
            <MessageCircle className="h-5 w-5 mr-2 transition-transform group-hover:rotate-12" />
            <span>Hablar por WhatsApp Ahora</span>
          </Button>

          <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500">
            <Shield className="h-3 w-3" />
            <span>Respuesta garantizada en menos de 5 minutos</span>
          </div>
        </CardContent>
      </Card>
    )}

    {/* Floating Trigger Button */}
    <div className="relative flex items-center group">
      {/* Tooltip Label (Desktop only) */}
      {!isExpanded && (
        <div className="absolute right-full mr-4 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none hidden md:block whitespace-nowrap border border-white/10">
          ¿Dudas legales? ¡Escríbenos!
          <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-slate-900 border-t border-r border-white/10 rotate-45 -translate-y-1/2"></div>
        </div>
      )}

      <Button
        onClick={toggleExpanded}
        className={`h-14 w-14 md:h-16 md:w-16 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-900/50 transition-all duration-300 hover:scale-110 relative z-50 ${animate ? 'animate-bounce-subtle' : ''}`}
        aria-label="Abrir chat de WhatsApp"
      >
        <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />

        {/* Notification Dot */}
        <span className="absolute top-0 right-0 h-4 w-4 md:h-5 md:w-5 bg-red-500 rounded-full border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold animate-pulse">
          1
        </span>

        {/* Ping Effect */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-20 animate-ping -z-10"></span>
      </Button>
    </div>
  </div>
    </>
  )
}
