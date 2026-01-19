import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FileText, ShoppingCart, UserCheck, AlertCircle } from "lucide-react"

export const metadata = {
  title: "Términos y Condiciones - Innovakids LATAM",
  description: "Lee nuestros términos y condiciones de servicio",
}

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 text-center">
            <FileText className="h-16 w-16 mx-auto mb-6 text-[#4DD0E1]" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Términos y Condiciones</h1>
            <p className="text-xl text-gray-300">Condiciones de uso de nuestros servicios</p>
            <p className="text-sm text-gray-400 mt-2">Última actualización: Enero 2026</p>
          </div>

          <div className="bg-[#1a2942] rounded-2xl p-8 md:p-12 space-y-8 text-gray-200">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-[#4DD0E1]" />
                <h2 className="text-2xl font-bold text-white">1. Aceptación de los Términos</h2>
              </div>
              <p className="text-lg leading-relaxed">
                Al acceder y utilizar el sitio web de Innovakids LATAM (www.innovakidslatam.com) y nuestros servicios
                educativos, aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte
                de estos términos, no debes utilizar nuestros servicios.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="h-6 w-6 text-[#4DD0E1]" />
                <h2 className="text-2xl font-bold text-white">2. Descripción del Servicio</h2>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                Innovakids LATAM ofrece cursos y programas educativos de Inteligencia Artificial para niños de 8 a 14
                años. Nuestros servicios incluyen:
              </p>
              <ul className="space-y-3 ml-6 list-disc">
                <li className="leading-relaxed">Clases en vivo online con grupos reducidos de máximo 5 alumnos</li>
                <li className="leading-relaxed">Acceso de por vida a grabaciones de las clases</li>
                <li className="leading-relaxed">Material educativo y recursos descargables</li>
                <li className="leading-relaxed">Comunidad privada para alumnos</li>
                <li className="leading-relaxed">Certificado de finalización del programa</li>
                <li className="leading-relaxed">Sesión diagnóstica gratuita</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <ShoppingCart className="h-6 w-6 text-[#4DD0E1]" />
                <h2 className="text-2xl font-bold text-white">3. Pagos y Facturación</h2>
              </div>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  <strong className="text-white">3.1 Precios:</strong> Todos los precios están expresados en dólares
                  estadounidenses (USD). Los precios están sujetos a cambios sin previo aviso, pero los cambios no
                  afectarán a pedidos ya confirmados.
                </p>
                <p>
                  <strong className="text-white">3.2 Métodos de Pago:</strong> Aceptamos pagos a través de PayPal y
                  Mercado Pago. Todas las transacciones son procesadas de forma segura.
                </p>
                <p>
                  <strong className="text-white">3.3 Opciones de Pago:</strong> Ofrecemos opciones de pago en una sola
                  exhibición o en cuotas según disponibilidad en tu país.
                </p>
                <p>
                  <strong className="text-white">3.4 Confirmación:</strong> Una vez realizado el pago, recibirás una
                  confirmación por correo electrónico con los detalles de tu compra y las instrucciones para acceder al
                  curso.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-[#4DD0E1]" />
                <h2 className="text-2xl font-bold text-white">4. Política de Reembolso</h2>
              </div>
              <p className="text-lg leading-relaxed mb-4">Ofrecemos una garantía de satisfacción del 100%:</p>
              <ul className="space-y-3 ml-6 list-disc">
                <li className="leading-relaxed">
                  Si después de la primera clase no estás satisfecho con el programa, puedes solicitar un reembolso
                  completo dentro de las primeras 48 horas posteriores a la primera clase.
                </li>
                <li className="leading-relaxed">
                  Para solicitar un reembolso, contacta a innovakidslatam@gmail.com o WhatsApp +56 9 6475 4219
                </li>
                <li className="leading-relaxed">
                  Los reembolsos se procesarán en un plazo de 5-10 días hábiles al método de pago original
                </li>
                <li className="leading-relaxed">
                  Después del período de garantía, no se realizarán reembolsos, pero puedes transferir tu cupo a otro
                  estudiante
                </li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-[#4DD0E1]" />
                <h2 className="text-2xl font-bold text-white">5. Propiedad Intelectual</h2>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                Todo el contenido del sitio web y los cursos (incluyendo textos, gráficos, logos, videos, audios y
                software) es propiedad de Innovakids LATAM y está protegido por las leyes de propiedad intelectual. Los
                usuarios tienen derecho a:
              </p>
              <ul className="space-y-3 ml-6 list-disc">
                <li className="leading-relaxed">Acceder y utilizar el contenido para su aprendizaje personal</li>
                <li className="leading-relaxed">Descargar materiales para uso personal y no comercial</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                <strong className="text-white">Está prohibido:</strong> copiar, modificar, distribuir, vender o
                sublicenciar cualquier contenido sin autorización escrita previa.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="h-6 w-6 text-[#4DD0E1]" />
                <h2 className="text-2xl font-bold text-white">6. Responsabilidades del Usuario</h2>
              </div>
              <p className="text-lg leading-relaxed mb-4">Al utilizar nuestros servicios, te comprometes a:</p>
              <ul className="space-y-3 ml-6 list-disc">
                <li className="leading-relaxed">Proporcionar información precisa y actualizada durante el registro</li>
                <li className="leading-relaxed">Mantener la confidencialidad de tus credenciales de acceso</li>
                <li className="leading-relaxed">No compartir el acceso al contenido del curso con terceros</li>
                <li className="leading-relaxed">Utilizar el servicio de manera responsable y respetuosa</li>
                <li className="leading-relaxed">Supervisar la participación de menores en las clases</li>
                <li className="leading-relaxed">Asistir puntualmente a las clases programadas</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-[#4DD0E1]" />
                <h2 className="text-2xl font-bold text-white">7. Cancelaciones y Reprogramaciones</h2>
              </div>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  <strong className="text-white">7.1 Por parte del alumno:</strong> Si necesitas faltar a una clase,
                  todas las sesiones quedan grabadas y disponibles de por vida. No es necesario notificar ausencias.
                </p>
                <p>
                  <strong className="text-white">7.2 Por parte de Innovakids:</strong> En caso excepcional de que
                  debamos cancelar una clase, se reprogramará a la brevedad posible y se notificará con al menos 24
                  horas de anticipación.
                </p>
                <p>
                  <strong className="text-white">7.3 Transferencias:</strong> Puedes transferir tu cupo a otro
                  estudiante notificando con 48 horas de anticipación al inicio del programa.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-[#4DD0E1]" />
                <h2 className="text-2xl font-bold text-white">8. Limitación de Responsabilidad</h2>
              </div>
              <p className="text-lg leading-relaxed">
                Innovakids LATAM no se hace responsable por: daños indirectos, incidentales o consecuentes; pérdida de
                datos o interrupciones del servicio por causas fuera de nuestro control; resultados específicos del
                aprendizaje, ya que estos varían según el estudiante; problemas técnicos en el equipo o conexión del
                usuario; o uso indebido del contenido o información proporcionada en los cursos.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-[#4DD0E1]" />
                <h2 className="text-2xl font-bold text-white">9. Privacidad y Protección de Datos</h2>
              </div>
              <p className="text-lg leading-relaxed">
                El uso de tus datos personales está regido por nuestra{" "}
                <a href="/privacidad" className="text-[#4DD0E1] hover:underline font-medium">
                  Política de Privacidad
                </a>
                . Al aceptar estos términos, también aceptas nuestra política de privacidad.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-[#4DD0E1]" />
                <h2 className="text-2xl font-bold text-white">10. Modificaciones</h2>
              </div>
              <p className="text-lg leading-relaxed">
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las
                modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web. El uso
                continuado de nuestros servicios después de cualquier modificación constituye tu aceptación de los
                nuevos términos.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-[#4DD0E1]" />
                <h2 className="text-2xl font-bold text-white">11. Contacto</h2>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                Para preguntas sobre estos Términos y Condiciones, contáctanos:
              </p>
              <div className="space-y-2 ml-6">
                <p>
                  <strong className="text-white">Email:</strong>{" "}
                  <a href="mailto:innovakidslatam@gmail.com" className="text-[#4DD0E1] hover:underline">
                    innovakidslatam@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="text-white">WhatsApp:</strong>{" "}
                  <a href="https://wa.me/56964754219" className="text-[#4DD0E1] hover:underline">
                    +56 9 6475 4219
                  </a>
                </p>
                <p>
                  <strong className="text-white">Dirección:</strong> Diagonal Oriente 1620, Providencia, Santiago, Chile
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-[#4DD0E1]" />
                <h2 className="text-2xl font-bold text-white">12. Ley Aplicable</h2>
              </div>
              <p className="text-lg leading-relaxed">
                Estos Términos y Condiciones se rigen por las leyes de Chile. Cualquier disputa relacionada con estos
                términos estará sujeta a la jurisdicción exclusiva de los tribunales de Santiago, Chile.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
