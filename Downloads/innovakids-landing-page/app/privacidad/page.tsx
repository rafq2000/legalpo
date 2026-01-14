import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Mail, UserX, FileText } from "lucide-react"

export const metadata = {
  title: "Política de Privacidad - Innovakids LATAM",
  description: "Conoce cómo protegemos tu información y utilizamos tu correo electrónico",
}

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-[#4DD0E1]" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Política de Privacidad</h1>
            <p className="text-xl text-gray-300">Tu privacidad es importante para nosotros</p>
            <p className="text-sm text-gray-400 mt-2">Última actualización: Noviembre 2025</p>
          </div>

          <div className="bg-[#1a2942] rounded-2xl p-8 md:p-12 space-y-8 text-gray-200">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-6 w-6 text-[#4DD0E1]" />
                <h2 className="text-2xl font-bold text-white">Uso de tu Correo Electrónico</h2>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                Al proporcionar tu dirección de correo electrónico en nuestro sitio web, aceptas que Innovakids LATAM
                pueda utilizarla para:
              </p>
              <ul className="space-y-3 ml-6 list-disc">
                <li className="leading-relaxed">
                  Enviarte información sobre nuestros cursos de Inteligencia Artificial para niños
                </li>
                <li className="leading-relaxed">Compartir contenido educativo y recursos gratuitos</li>
                <li className="leading-relaxed">Notificarte sobre fechas de inicio de nuevos grupos</li>
                <li className="leading-relaxed">Enviarte promociones y ofertas especiales</li>
                <li className="leading-relaxed">Comunicarte novedades relevantes sobre Innovakids</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-[#4DD0E1]" />
                <h2 className="text-2xl font-bold text-white">Protección de tus Datos</h2>
              </div>
              <p className="text-lg leading-relaxed">
                Nos comprometemos a proteger tu información personal. Tu correo electrónico nunca será vendido,
                alquilado o compartido con terceros para fines comerciales sin tu consentimiento explícito. Utilizamos
                medidas de seguridad apropiadas para proteger tu información contra acceso no autorizado.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserX className="h-6 w-6 text-[#4DD0E1]" />
                <h2 className="text-2xl font-bold text-white">Derecho a Darte de Baja</h2>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                Respetamos tu decisión si decides no recibir más comunicaciones de nuestra parte. Tienes derecho a darte
                de baja en cualquier momento:
              </p>
              <ul className="space-y-3 ml-6 list-disc">
                <li className="leading-relaxed">
                  Haciendo clic en el enlace de "Cancelar suscripción" que aparece en todos nuestros correos
                </li>
                <li className="leading-relaxed">
                  Enviando un correo a{" "}
                  <a href="mailto:innovakidslatam@gmail.com" className="text-[#4DD0E1] hover:underline font-medium">
                    innovakidslatam@gmail.com
                  </a>{" "}
                  con el asunto "Baja de lista"
                </li>
                <li className="leading-relaxed">
                  Contactándonos por WhatsApp al{" "}
                  <a href="tel:+56964754219" className="text-[#4DD0E1] hover:underline font-medium">
                    +56 9 6475 4219
                  </a>
                </li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                Procesaremos tu solicitud en un plazo máximo de 48 horas y dejarás de recibir comunicaciones de
                inmediato.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-[#4DD0E1]" />
                <h2 className="text-2xl font-bold text-white">Consentimiento</h2>
              </div>
              <p className="text-lg leading-relaxed">
                Al proporcionar tu correo electrónico a través de nuestros formularios, descargas de material gratuito o
                solicitudes de información, confirmas que has leído y aceptado esta Política de Privacidad y consientes
                el uso de tu correo electrónico según lo descrito anteriormente.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-6 w-6 text-[#4DD0E1]" />
                <h2 className="text-2xl font-bold text-white">Contacto</h2>
              </div>
              <p className="text-lg leading-relaxed">
                Si tienes preguntas sobre nuestra Política de Privacidad o el manejo de tus datos, no dudes en
                contactarnos:
              </p>
              <div className="mt-4 space-y-2 ml-6">
                <p>
                  Email:{" "}
                  <a href="mailto:innovakidslatam@gmail.com" className="text-[#4DD0E1] hover:underline font-medium">
                    innovakidslatam@gmail.com
                  </a>
                </p>
                <p>
                  Teléfono:{" "}
                  <a href="tel:+56964754219" className="text-[#4DD0E1] hover:underline font-medium">
                    +56 9 6475 4219
                  </a>
                </p>
                <p>Dirección: Diagonal Oriente 1620, Providencia, Chile</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
