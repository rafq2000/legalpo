"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Clock, AlertCircle, Check, Sparkles } from "lucide-react"
import { SpotCounter } from "./spot-counter"
import { CountdownTimer } from "./countdown-timer"
import { useState } from "react"

const valueStack = [
  { item: "El Programa Acelerador de IA (5 Semanas)", value: 350 },
  { item: "Acceso de por Vida a la Comunidad Privada", value: 150 },
  { item: "Biblioteca de Grabaciones de Clases", value: 100 },
  { item: "Kit de Prompts Infalibles para la escuela", value: 50 },
  { item: 'Certificado Digital de "Creador de IA"', value: 25 },
  { item: "Bono: Sesión de 'Presentación de Proyectos' para Padres", value: 50 },
]

const paymentOptions = [
  {
    id: "reserve",
    title: "Reserva tu Cupo",
    price: 20,
    description: "Asegura tu lugar ahora",
    badge: "Más Popular",
    features: ["Reserva inmediata", "Pagas el resto después", "Sin compromiso adicional"],
  },
  {
    id: "remaining",
    title: "Completa tu Pago",
    price: 180,
    description: "Para quienes ya reservaron",
    features: ["Completa tu inscripción", "Acceso inmediato al curso", "Todos los beneficios incluidos"],
  },
  {
    id: "full",
    title: "Pago Completo",
    price: 200,
    description: "Pago único sin cuotas",
    badge: "Mejor Valor",
    features: ["Acceso inmediato", "Sin pagos adicionales", "Todos los beneficios incluidos"],
  },
]

export function PricingSection() {
  const [selectedOption, setSelectedOption] = useState("reserve")
  const scrollToBooking = () => {
    document.getElementById("sesion-estrategica")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="inversion" className="bg-background py-12 md:py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 md:mb-12 lg:mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight px-2">
            Una Inversión, no un Gasto.
            <br />
            Esto es lo que recibes en el <span className="text-[#4DD0E1]">Programa Acelerador:</span>
          </h2>
        </div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-6 md:gap-8 items-start">
          {/* Value Stack */}
          <div className="space-y-3 md:space-y-4 order-2 lg:order-1">
            {valueStack.map((item, index) => (
              <div
                key={index}
                className="flex flex-col xs:flex-row items-start xs:items-center justify-between bg-[#0f1f3a] border border-[#1e3a5f] rounded-lg p-3 md:p-4 hover:border-[#4DD0E1] transition-colors gap-2"
              >
                <span className="text-white font-medium flex-1 text-sm md:text-base">{item.item}</span>
                <span className="text-gray-400 font-semibold whitespace-nowrap text-sm md:text-base">
                  <span className="text-xs md:text-sm">(Valor: </span>${item.value}
                  <span className="text-xs md:text-sm">)</span>
                </span>
              </div>
            ))}
            <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between bg-[#1a2942] border-2 border-[#4DD0E1] rounded-lg p-4 md:p-6 mt-4 md:mt-6 gap-2">
              <span className="text-base md:text-lg lg:text-xl font-bold text-white">VALOR TOTAL DEL PROGRAMA:</span>
              <span className="text-2xl md:text-3xl font-bold text-[#4DD0E1]">$725 USD</span>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-2 border-green-500 rounded-xl p-4 md:p-6 mt-4">
              <div className="text-center space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-white">🎯 Oferta de Lanzamiento</h3>
                <div className="space-y-2">
                  <p className="text-green-400 font-bold text-lg md:text-xl">Paga en los primeros 5 días: $200 USD</p>
                  <p className="text-gray-300 text-sm md:text-base">Después del día 5: $300 USD</p>
                </div>
                <p className="text-xs md:text-sm text-gray-400 italic">
                  ¡Ahorra $100 USD siendo de los primeros en inscribirse!
                </p>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="space-y-4 order-1 lg:order-2">
            <Card className="bg-gradient-to-br from-[#4DD0E1] to-[#26C6DA] border-0 shadow-2xl">
              <CardHeader className="text-center pb-3 md:pb-4 px-4 md:px-6">
                <Badge className="bg-[#0f1f3a] text-white hover:bg-[#0f1f3a] mx-auto mb-3 md:mb-4 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-bold">
                  Acceso Exclusivo por Invitación
                </Badge>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0a1628] mb-3 md:mb-4 leading-tight">
                  La inscripción es solo a través de la Sesión de Diagnóstico
                </h3>

                <div className="bg-[#0a1628] rounded-lg p-3 md:p-4 lg:p-6 text-left space-y-2 md:space-y-3">
                  <p className="text-white text-xs md:text-sm leading-relaxed">
                    La única forma de inscribirse es a través de la{" "}
                    <span className="font-bold text-[#4DD0E1]">Sesión de Diagnóstico Gratuita</span>, donde evaluamos si
                    tu hijo es un buen candidato para el programa.
                  </p>
                  <ul className="space-y-2 mt-3 md:mt-4">
                    <li className="flex items-start gap-2 text-white text-xs md:text-sm">
                      <Check className="h-3 w-3 md:h-4 md:w-4 text-[#4DD0E1] flex-shrink-0 mt-0.5" />
                      <span>Evaluación personalizada del perfil de tu hijo</span>
                    </li>
                    <li className="flex items-start gap-2 text-white text-xs md:text-sm">
                      <Check className="h-3 w-3 md:h-4 md:w-4 text-[#4DD0E1] flex-shrink-0 mt-0.5" />
                      <span>Diagnóstico de su potencial en IA</span>
                    </li>
                    <li className="flex items-start gap-2 text-white text-xs md:text-sm">
                      <Check className="h-3 w-3 md:h-4 md:w-4 text-[#4DD0E1] flex-shrink-0 mt-0.5" />
                      <span>Plan personalizado de aprendizaje</span>
                    </li>
                    <li className="flex items-start gap-2 text-white text-xs md:text-sm">
                      <Check className="h-3 w-3 md:h-4 md:w-4 text-[#4DD0E1] flex-shrink-0 mt-0.5" />
                      <span>Confirmación de cupos disponibles para tu zona horaria</span>
                    </li>
                  </ul>
                </div>
              </CardHeader>

              <CardContent className="px-4 md:px-6 pb-4 md:pb-6 space-y-3 md:space-y-4">
                <div className="bg-red-600 rounded-lg p-3 md:p-4 text-center border-2 border-red-800 shadow-lg">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <AlertCircle className="h-4 w-4 md:h-5 md:w-5 text-white animate-pulse flex-shrink-0" />
                    <p className="text-white font-bold text-xs md:text-sm uppercase tracking-wide">¡Cupos Limitados!</p>
                  </div>
                  <p className="text-white font-extrabold text-sm md:text-base lg:text-lg">
                    Solo quedan{" "}
                    <span className="text-white">
                      <SpotCounter />
                    </span>{" "}
                    de 20 cupos
                  </p>
                </div>

                <div className="bg-[#0f1f3a] rounded-lg p-3 md:p-4 border-2 border-[#4DD0E1]">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Clock className="h-4 w-4 md:h-5 md:w-5 text-[#4DD0E1] animate-pulse flex-shrink-0" />
                    <p className="text-white font-bold text-xs md:text-sm uppercase tracking-wide">
                      La oferta termina en:
                    </p>
                  </div>
                  <CountdownTimer />
                </div>

                <Button
                  size="lg"
                  onClick={scrollToBooking}
                  className="w-full bg-[#0a1628] hover:bg-[#0f1f3a] text-white font-bold text-sm md:text-base lg:text-lg py-4 md:py-5 lg:py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <Sparkles className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Agendar mi Sesión de Diagnóstico Gratuita →
                </Button>

                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-2 border-green-500/50 rounded-lg p-3 md:p-4">
                  <div className="flex flex-col gap-2 md:gap-3">
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="h-4 w-4 md:h-5 md:w-5 lg:h-8 lg:w-8 text-green-400 flex-shrink-0" />
                      <span className="text-[#0a1628] font-bold text-xs md:text-sm">
                        Sin Compromiso • 100% Gratuito
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-8 md:mt-12">
          <div className="bg-[#0f1f3a] border-2 border-[#4DD0E1] rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 lg:gap-6">
              <div className="rounded-full bg-[#4DD0E1] p-3 md:p-4 flex-shrink-0 mx-auto sm:mx-0">
                <Shield className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-[#0a1628]" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl font-bold text-white">
                  Garantía de Satisfacción Innovakids: 100% sin Riesgo
                </h4>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
                  Estamos tan seguros de la transformación que vivirá tu hijo, que si después de la primera clase
                  sientes que no es lo que esperabas, te devolvemos el{" "}
                  <span className="font-bold text-[#4DD0E1]">100% de tu inversión. Sin preguntas.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
