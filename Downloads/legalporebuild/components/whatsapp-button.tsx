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
    <>
      {/* Backdrop */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Expanded Card */}
        {isExpanded && (
          <Card className="mb-4 w-80 bg-white shadow-2xl border-0 animate-in slide-in-from-bottom-4 duration-300">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg relative">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 h-8 w-8 p-0 text-white hover:bg-white/20"
                onClick={() => setIsExpanded(false)}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold">LegalPO - Asistencia Legal</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-green-100">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <span>En línea - Respuesta inmediata</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="text-sm font-semibold text-gray-900">5,000+</div>
                  <div className="text-xs text-gray-600">Consultas</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  </div>
                  <div className="text-sm font-semibold text-gray-900">4.9/5</div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Zap className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="text-sm font-semibold text-gray-900">24/7</div>
                  <div className="text-xs text-gray-600">Disponible</div>
                </div>
              </div>

              {/* Services */}
              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-gray-900 text-sm">Servicios Legales:</h3>
                <div className="space-y-2">
                  {[
                    "Consultas laborales y finiquitos",
                    "Derecho de familia y pensiones",
                    "Herencias y sucesiones",
                    "Accidentes de tránsito",
                    "Deudas y DICOM",
                    "Arriendos y propiedades",
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-900">Horarios de Atención</span>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Lunes a Viernes: 9:00 - 18:00</div>
                  <div>Sábados: 9:00 - 14:00</div>
                  <div className="flex items-center gap-1">
                    <Shield className="h-3 w-3 text-green-600" />
                    <span className="text-green-700 font-medium">Respuesta garantizada en 5 min</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Iniciar Consulta Legal por WhatsApp
              </Button>

              <p className="text-xs text-gray-500 text-center mt-3">
                Consulta gratuita • Sin compromiso • Respuesta inmediata
              </p>
            </CardContent>
          </Card>
        )}

        {/* Main WhatsApp Button */}
        <Button
          onClick={toggleExpanded}
          className={`h-16 w-16 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group ${
            animate ? "animate-bounce" : ""
          }`}
        >
          <MessageCircle className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />

          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>

          {/* Notification Badge */}
          <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center animate-pulse">
            1
          </Badge>
        </Button>

        {/* Tooltip */}
        {!isExpanded && (
          <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            ¿Necesitas ayuda legal? ¡Haz clic aquí!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        )}
      </div>
    </>
  )
}
