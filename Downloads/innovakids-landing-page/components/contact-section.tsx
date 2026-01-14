import { ContactForm } from "./contact-form"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-[#0a1628]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-300">¿Tienes preguntas? Estamos aquí para ayudarte</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#4DD0E1] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a
                        href="mailto:innovakidslatam@gmail.com"
                        className="text-gray-300 hover:text-[#4DD0E1] transition-colors"
                      >
                        innovakidslatam@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#4DD0E1] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">WhatsApp</p>
                      <a
                        href="https://wa.me/56964754219"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#4DD0E1] transition-colors"
                      >
                        +56 9 6475 4219
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#4DD0E1] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Ubicación</p>
                      <p className="text-gray-300">Santiago, Chile</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a2942] p-6 rounded-lg border border-[#2a3952]">
                <h4 className="text-xl font-bold text-white mb-3">Horario de Atención</h4>
                <p className="text-gray-300">Lunes a Viernes: 9:00 - 18:00</p>
                <p className="text-gray-300">Sábados: 10:00 - 14:00</p>
                <p className="text-gray-300 mt-2 text-sm">Respondemos todos los mensajes en menos de 24 horas</p>
              </div>
            </div>

            <div className="bg-[#1a2942] p-8 rounded-lg border border-[#2a3952]">
              <h3 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
