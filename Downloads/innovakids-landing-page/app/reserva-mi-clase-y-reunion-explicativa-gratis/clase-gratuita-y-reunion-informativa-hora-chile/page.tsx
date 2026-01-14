import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Video, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Reserva tu Sesión de Evaluación Gratuita - Innovakids",
  description: "Agenda tu sesión de evaluación gratuita y reunión informativa sobre el curso de IA para niños",
}

export default function ReservaClasePage() {
  const calendlyUrl = "https://calendly.com/innovakids" // Reemplaza con tu URL de Calendly

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-[#4DD0E1] mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>

          <div className="mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Reserva tu Sesión de Evaluación Gratuita
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Agenda una sesión estratégica gratuita y descubre cómo tu hijo puede aprender IA de forma práctica y
              divertida
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">¿Qué incluye la sesión de evaluación gratuita?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4DD0E1] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-1">Demostración de IA en vivo</h3>
                    <p className="text-gray-300 text-sm">
                      Tu hijo experimentará cómo funcionan las herramientas de IA de forma práctica
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4DD0E1] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-1">Reunión informativa para padres</h3>
                    <p className="text-gray-300 text-sm">
                      Conoce el programa completo, metodología y beneficios para tu hijo
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4DD0E1] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-1">Evaluación personalizada</h3>
                    <p className="text-gray-300 text-sm">
                      Analizamos el nivel de tu hijo y recomendamos el mejor camino de aprendizaje
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4DD0E1] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-1">Resolución de dudas</h3>
                    <p className="text-gray-300 text-sm">
                      Responderemos todas tus preguntas sobre el curso, horarios y metodología
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-[#1a2942] border-[#2a3952] mt-8">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-[#4DD0E1]" />
                    <h3 className="text-white font-bold">Duración</h3>
                  </div>
                  <p className="text-gray-300">45-60 minutos</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1a2942] border-[#2a3952] mt-4">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Video className="w-5 h-5 text-[#4DD0E1]" />
                    <h3 className="text-white font-bold">Modalidad</h3>
                  </div>
                  <p className="text-gray-300">100% Online vía Zoom</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-[#1a2942] border-[#2a3952]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-6 h-6 text-[#4DD0E1]" />
                    <h2 className="text-xl font-bold text-white">Selecciona tu horario</h2>
                  </div>

                  <div className="bg-white rounded-lg p-4 mb-6">
                    <iframe
                      src={calendlyUrl}
                      width="100%"
                      height="600"
                      frameBorder="0"
                      title="Calendario de reservas"
                    ></iframe>
                  </div>

                  <div className="bg-[#4DD0E1]/10 border border-[#4DD0E1]/30 rounded-lg p-4">
                    <p className="text-sm text-gray-300">
                      <strong className="text-white">Nota:</strong> Recibirás un email de confirmación con el enlace de
                      Zoom para la sesión. Si no encuentras el horario ideal, contáctanos por WhatsApp.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-[#4DD0E1]/20 to-[#00BCD4]/20 border-[#4DD0E1]/30">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">¿Prefieres hablar directamente con nosotros?</h2>
              <p className="text-gray-300 mb-6">Contáctanos por WhatsApp y agendamos tu sesión personalizada</p>
              <a
                href="https://wa.me/56964754219?text=Hola,%20quiero%20agendar%20una%20sesión%20de%20evaluación%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-6 text-lg font-bold">
                  CONTACTAR POR WHATSAPP
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
