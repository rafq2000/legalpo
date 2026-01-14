"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function ContactoClient() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría obtener más información sobre el curso de IA para niños",
  )

  const openCalendly = () => {
    if (typeof window !== "undefined" && (window as any).Calendly) {
      ;(window as any).Calendly.initPopupWidget({
        url: "https://calendly.com/innovakidslatam/reunion-informativa-innovakids?hide_gdpr_banner=1&hide_event_type_details=1&primary_color=4dd0e1",
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-[#4DD0E1] mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>

          <div className="mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Contáctanos</h1>
            <p className="text-lg text-gray-300">Estamos aquí para responder todas tus preguntas</p>
          </div>

          <Card className="bg-gradient-to-br from-[#25D366] to-[#20BA5A] border-0 shadow-2xl mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-white p-4 rounded-full">
                  <MessageCircle className="w-10 h-10 text-[#25D366]" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-2xl mb-2">¡Hablemos por WhatsApp!</h2>
                  <p className="text-white/90 text-lg mb-6">
                    Chatea con nosotros ahora y resuelve todas tus dudas en tiempo real
                  </p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-white hover:bg-gray-100 text-[#25D366] font-bold text-lg px-8 py-6 shadow-lg hover:scale-105 transition-all"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Hablemos
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2942] border-[#2a3952] mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-2 text-center">Envíanos un mensaje</h2>
              <p className="text-gray-300 mb-6 text-center">Completa el formulario y te responderemos a la brevedad</p>
              <ContactForm />
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-[#1a2942] border-[#2a3952]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#4DD0E1]/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-[#4DD0E1]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Email</h3>
                    <a
                      href="mailto:innovakidslatam@gmail.com"
                      className="text-gray-300 hover:text-[#4DD0E1] transition-colors mb-2 block"
                    >
                      innovakidslatam@gmail.com
                    </a>
                    <p className="text-sm text-gray-400">Respondemos en 24 horas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2942] border-[#2a3952]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#4DD0E1]/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-[#4DD0E1]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Teléfono</h3>
                    <a
                      href="tel:+56964754219"
                      className="text-gray-300 hover:text-[#4DD0E1] transition-colors mb-2 block"
                    >
                      +56 9 6475 4219
                    </a>
                    <p className="text-sm text-gray-400">Lun - Sáb: 08:00 - 20:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2942] border-[#2a3952] md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#4DD0E1]/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#4DD0E1]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Ubicación</h3>
                    <p className="text-gray-300 mb-2">Diagonal Oriente 1620</p>
                    <p className="text-sm text-gray-400">Providencia, Chile</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-[#1a2942] border-[#2a3952]">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">¿Listo para que tu hijo aprenda IA?</h2>
              <p className="text-gray-300 mb-6">
                Agenda una sesión estratégica gratuita y descubre cómo podemos ayudar a tu hijo
              </p>
              <Button
                onClick={openCalendly}
                className="bg-[#4DD0E1] hover:bg-[#3BBFD1] text-[#0a1628] px-8 py-6 text-lg font-bold"
              >
                AGENDAR SESIÓN GRATUITA
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
