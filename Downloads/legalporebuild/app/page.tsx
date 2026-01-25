import Link from "next/link"
import Footer from "@/components/footer"
import { PageAds } from "@/components/page-ads"
import { SidebarAds } from "@/components/sidebar-ads"
import WhatsAppButton from "@/components/whatsapp-button"
import { HeroButtons } from "@/components/hero-buttons"
import { ChatInterface } from "@/components/chat-interface"
import { LegalAreasSection } from "@/components/legal-areas-section"
import { FinalCTA } from "@/components/final-cta"
import {
  MessageSquare,
  Bot,
  Users,
  Shield,
  Star,
  Clock,
  Calculator,
  CheckCircle,
  AlertTriangle,
  Zap,
  Globe,
} from "lucide-react"

// Server Component - No "use client"
export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Ads - Hidden on mobile */}
        <div className="hidden xl:block w-64 flex-shrink-0">
          <div className="sticky top-20 p-4">
            <SidebarAds />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full">
          {/* Hero Section - Abogado Gratis Online */}
          <section className="relative py-12 sm:py-20 md:py-32 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sidebar-primary/20 via-background to-background" />
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container relative px-4 sm:px-6 z-10">
              <div className="text-center max-w-5xl mx-auto">
                {/* Badge principal */}
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 sm:px-6 py-2 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-in fade-in zoom-in duration-500">
                  <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
                  <span className="text-emerald-300 font-semibold text-xs sm:text-sm tracking-wide">
                    🥇 ABOGADO GRATIS ONLINE #1 EN CHILE
                  </span>
                </div>

                {/* Título principal H1 - SEO OPTIMIZADO */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">Abogado Gratis</span>
                  <br className="hidden sm:block" />
                  <span className="text-gradient">Online 2026</span>
                </h1>

                {/* Subtítulo Premium */}
                <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-8 text-slate-300 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                  Asesoría Legal Inteligente <span className="text-emerald-400 font-medium">24/7</span> con Tecnología de Vanguardia
                </h2>

                {/* Descripción SEO Optimizada */}
                <div className="text-base sm:text-lg text-slate-400 leading-relaxed mb-10 max-w-3xl mx-auto px-4 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                  <p>
                    <strong className="text-slate-200">Abogado gratis online Chile</strong> - El asistente legal con IA más avanzado.
                    Resuelve tus dudas sobre <strong className="text-emerald-400">finiquitos, familia, deudas y más</strong> al instante.
                  </p>
                </div>

                {/* Componente de Botones Cliente */}
                <HeroButtons />

                {/* Stats Cards - Glassmorphism */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 px-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                  <div className="glass p-5 rounded-2xl flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <Users className="h-6 w-6 text-emerald-400 mb-2" />
                    <div className="text-2xl font-bold text-white">150k+</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Usuarios</div>
                  </div>
                  <div className="glass p-5 rounded-2xl flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-blue-400 mb-2" />
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Disponible</div>
                  </div>
                  <div className="glass p-5 rounded-2xl flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <Star className="h-6 w-6 text-amber-400 mb-2" />
                    <div className="text-2xl font-bold text-white">4.9</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Calificación</div>
                  </div>
                  <div className="glass p-5 rounded-2xl flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <Shield className="h-6 w-6 text-purple-400 mb-2" />
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Gratis</div>
                  </div>
                </div>

                {/* AI Chat Interface - Consumed as Client Component */}
                <div className="max-w-4xl mx-auto">
                  <ChatInterface />
                </div>


              </div>
            </div>
          </section>

          {/* SEO Content Section - Abogado Gratis Online */}
          <section className="py-12 sm:py-16 md:py-20 bg-slate-800/50 border-b border-white/5">
            <div className="container px-4 sm:px-6 max-w-6xl">
              <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                  ¿Qué es un Abogado Gratis Online con Inteligencia Artificial?
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                  Un <strong className="text-white">abogado gratis online</strong> es un{" "}
                  <strong className="text-emerald-400">asistente legal con inteligencia artificial</strong> que
                  proporciona <strong className="text-white">asesoría legal gratis</strong> instantánea sobre cualquier
                  tema de derecho chileno. Nuestro <strong className="text-white">abogado virtual gratis con IA</strong>{" "}
                  está entrenado específicamente en la legislación de Chile 2025 y puede responder{" "}
                  <strong className="text-white">consultas legales gratis</strong> las 24 horas del día, los 7 días de
                  la semana.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 mt-8">
                  Ventajas de Usar Nuestro Abogado Gratis Online
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 border border-white/10 rounded-xl">
                    <div className="p-6">
                      <div className="flex items-start gap-3">
                        <Clock className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-white mb-2">Asesoría Legal Gratis 24/7</h4>
                          <p className="text-slate-300 text-sm">
                            Nuestro <strong>abogado gratis online</strong> está disponible las 24 horas. No necesitas
                            agendar citas ni esperar horarios de atención para recibir{" "}
                            <strong>asesoría legal gratis</strong>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl">
                    <div className="p-6">
                      <div className="flex items-start gap-3">
                        <Shield className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-white mb-2">100% Gratis Sin Costo</h4>
                          <p className="text-slate-300 text-sm">
                            Todas las <strong>consultas legales gratis</strong> son completamente sin costo. Nuestro{" "}
                            <strong>abogado virtual gratis</strong> nunca te cobrará por asesoría legal.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl">
                    <div className="p-6">
                      <div className="flex items-start gap-3">
                        <Zap className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-white mb-2">Respuestas Instantáneas con IA</h4>
                          <p className="text-slate-300 text-sm">
                            La <strong>inteligencia artificial legal</strong> responde en segundos. Obtén{" "}
                            <strong>asesoría legal gratis</strong> inmediata sin esperas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl">
                    <div className="p-6">
                      <div className="flex items-start gap-3">
                        <Globe className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-white mb-2">Especializado en Legislación Chilena</h4>
                          <p className="text-slate-300 text-sm">
                            Nuestro <strong>abogado gratis online</strong> conoce todas las leyes de Chile actualizadas
                            a 2025.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 mt-8">
                  ¿Cómo Funciona la Asesoría Legal Gratis con Inteligencia Artificial?
                </h3>

                <ol className="list-decimal list-inside space-y-4 text-slate-300 mb-8">
                  <li className="text-base sm:text-lg">
                    <strong className="text-white">Escribe tu consulta legal gratis</strong>: Formula tu pregunta sobre
                    cualquier tema legal de Chile en el chat del <strong>abogado gratis online con IA</strong>.
                  </li>
                  <li className="text-base sm:text-lg">
                    <strong className="text-white">La IA analiza tu consulta</strong>: Nuestro{" "}
                    <strong>asistente legal con inteligencia artificial</strong> procesa tu pregunta usando modelos de
                    IA avanzados entrenados en derecho chileno.
                  </li>
                  <li className="text-base sm:text-lg">
                    <strong className="text-white">Recibe asesoría legal gratis instantánea</strong>: El{" "}
                    <strong>abogado virtual gratis</strong> te responde en segundos con información legal precisa y
                    actualizada.
                  </li>
                  <li className="text-base sm:text-lg">
                    <strong className="text-white">Haz preguntas de seguimiento</strong>: Puedes hacer todas las{" "}
                    <strong>consultas legales gratis</strong> que necesites sin límite.
                  </li>
                </ol>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 mt-8">
                  Temas Legales que Cubre Nuestro Abogado Gratis Online
                </h3>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                  Nuestro <strong className="text-white">abogado gratis online con inteligencia artificial</strong>{" "}
                  puede responder <strong>consultas legales gratis</strong> sobre:
                </p>

                <ul className="list-disc list-inside space-y-3 text-slate-300 mb-8 ml-4">
                  <li>
                    <strong className="text-white">Derecho Laboral</strong>: Finiquitos, despidos, contratos de trabajo,
                    indemnizaciones, vacaciones, licencias médicas
                  </li>
                  <li>
                    <strong className="text-white">Derecho de Familia</strong>: Pensión alimenticia, divorcio, tuición,
                    régimen de visitas, matrimonio, adopción
                  </li>
                  <li>
                    <strong className="text-white">Herencias y Sucesiones</strong>: Distribución de herencia,
                    testamentos, legítimas, partición de bienes
                  </li>
                  <li>
                    <strong className="text-white">Derecho Inmobiliario</strong>: Arriendos, compraventas, desalojos,
                    contratos de arriendo, derechos del arrendatario
                  </li>
                  <li>
                    <strong className="text-white">Deudas y DICOM</strong>: Prescripción de deudas, renegociación,
                    cobranza judicial, derechos del deudor
                  </li>
                  <li>
                    <strong className="text-white">Accidentes de Tránsito</strong>: SOAP, indemnizaciones, seguros,
                    responsabilidad civil
                  </li>
                  <li>
                    <strong className="text-white">Derecho del Consumidor</strong>: SERNAC, garantías, devoluciones,
                    publicidad engañosa
                  </li>
                  <li>
                    <strong className="text-white">Derecho Comercial</strong>: Constitución de sociedades, contratos
                    comerciales, quiebras
                  </li>
                </ul>

                <div className="bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 p-6 sm:p-8 rounded-2xl border border-emerald-500/30 mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    ¿Por Qué Elegir Nuestro Abogado Gratis Online con IA?
                  </h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Más de 150,000 consultas legales gratis</strong> respondidas
                        exitosamente
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">99% de precisión</strong> en respuestas sobre legislación chilena
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Actualizado con leyes de Chile 2025</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Sin registro ni datos personales</strong> requeridos
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Respuestas en lenguaje simple</strong> y fácil de entender
                      </span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 mt-8">
                  Abogado Gratis Online vs Abogado Tradicional
                </h3>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="p-4 text-white font-bold">Característica</th>
                        <th className="p-4 text-emerald-400 font-bold">Abogado Gratis Online IA</th>
                        <th className="p-4 text-slate-400 font-bold">Abogado Tradicional</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/10">
                        <td className="p-4 font-semibold">Costo</td>
                        <td className="p-4 text-emerald-400">100% Gratis</td>
                        <td className="p-4">$50,000 - $500,000+ por consulta</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-4 font-semibold">Disponibilidad</td>
                        <td className="p-4 text-emerald-400">24/7 - 365 días</td>
                        <td className="p-4">Horario de oficina</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-4 font-semibold">Tiempo de respuesta</td>
                        <td className="p-4 text-emerald-400">Segundos</td>
                        <td className="p-4">Horas o días</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-4 font-semibold">Agendamiento</td>
                        <td className="p-4 text-emerald-400">No requiere</td>
                        <td className="p-4">Requiere cita previa</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-4 font-semibold">Acceso</td>
                        <td className="p-4 text-emerald-400">Desde cualquier lugar</td>
                        <td className="p-4">Presencial u oficina</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 mb-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-amber-300 mb-2">Importante</h4>
                      <p className="text-slate-300 text-sm">
                        Nuestro <strong>abogado gratis online con inteligencia artificial</strong> proporciona{" "}
                        <strong>asesoría legal gratis</strong> de carácter informativo y educativo. Para casos que
                        requieran representación legal en tribunales o documentos legales vinculantes, recomendamos
                        consultar con un abogado tradicional. Sin embargo, nuestro servicio es ideal para orientación
                        legal inicial, calculadoras legales, y comprensión de tus derechos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Legal Areas Section - Client Component */}
          <LegalAreasSection />

          {/* Page Ads */}
          <div className="py-6 sm:py-8">
            <PageAds />
          </div>

          {/* CTA Final - Client Component */}
          <FinalCTA />

        </div>

        {/* Right Sidebar Ads */}
        <div className="hidden xl:block w-64 flex-shrink-0">
          <div className="sticky top-20 p-4">
            <SidebarAds />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="+56931772346" message="Hola, necesito hablar con un abogado. Vengo de LegalPO." />
    </div>
  )
}
