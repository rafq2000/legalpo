import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield } from "lucide-react"

export const metadata = {
  title: "Programa Acelerador de IA - Innovakids | Brochure Exclusivo",
  description:
    "Brochure detallado del Programa Acelerador de IA para niños de 8-14 años. Formando a los líderes tecnológicos del mañana.",
  robots: "noindex, nofollow",
}

export default function BrochurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated background patterns */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -right-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 -left-48 animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-16 space-y-6">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full" />
            <Image
              src="/logo-innovakids.png"
              alt="Innovakids"
              width={240}
              height={80}
              className="relative mx-auto drop-shadow-2xl h-16 w-auto"
            />
          </div>

          <div className="space-y-4">
            <Badge className="bg-cyan-400 text-slate-900 hover:bg-cyan-300 text-sm px-6 py-2 font-bold shadow-lg shadow-cyan-500/50">
              PROGRAMA EXCLUSIVO - ADMISIÓN LIMITADA
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              Programa Acelerador
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                de Inteligencia Artificial
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Formando a los Líderes Tecnológicos del Mañana</p>
          </div>
        </header>

        {/* Hero Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { number: "94%", label: "Mejora académica comprobada" },
            { number: "100%", label: "Proyectos reales creados" },
            { number: "5", label: "Alumnos máximo por grupo elite" },
          ].map((stat, idx) => (
            <Card
              key={idx}
              className="bg-white/5 border-cyan-500/20 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="pt-6 text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-300 text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Logistics */}
          <Card className="bg-white/5 border-cyan-500/20 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400 flex items-center gap-3">
                <span className="text-3xl">📅</span>
                Logística del Curso
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { icon: "🚀", label: "Inicio", value: "26 de Enero, 2026" },
                { icon: "💻", label: "Plataforma", value: "Clases en vivo vía Zoom" },
                { icon: "⏱️", label: "Duración", value: "5 semanas (10 clases exclusivas)" },
                { icon: "📆", label: "Frecuencia", value: "2 clases por semana (90 min c/u)" },
                { icon: "👦", label: "Edad", value: "8 a 14 años" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-300">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <span className="font-bold text-white">{item.label}:</span> {item.value}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* What's Included */}
          <Card className="bg-white/5 border-cyan-500/20 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400 flex items-center gap-3">
                <span className="text-3xl">🎁</span>
                ¿Qué incluye tu inversión?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { icon: "🎓", text: "Programa Acelerador completo" },
                { icon: "👥", text: "Acceso de por vida a Comunidad Privada" },
                { icon: "📚", text: "Biblioteca de grabaciones de por vida" },
                { icon: "🧠", text: "Kit de Prompts Infalibles para la escuela" },
                { icon: "🏆", text: 'Certificado Digital "Creador de IA"' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-300">
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Curriculum */}
        <Card className="bg-white/5 border-cyan-500/20 backdrop-blur-xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-cyan-400 flex items-center gap-3">
              <span className="text-4xl">📖</span>
              Estructura Académica
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "1. Introducción a la IA",
                "2. IA Conversacional",
                "3. Generación de Imágenes",
                "4. Creación de Video",
                "5. Producción Musical",
                "6. Síntesis de Voz",
                "7. Estudio Eficiente con IA",
                "8. Presentaciones Profesionales",
                "9. Ética y Seguridad Digital",
              ].map((module, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-4 text-center font-semibold text-white hover:scale-105 transition-transform duration-300"
                >
                  {module}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Ethics Section */}
        <Card className="bg-white/5 border-cyan-500/20 backdrop-blur-xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-cyan-400 flex items-center gap-3">
              <span className="text-4xl">🛡️</span>
              Ética y Seguridad Digital
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "🔒", text: "Protección de datos personales y privacidad en línea" },
                { icon: "⚠️", text: "Identificación de riesgos y amenazas digitales" },
                { icon: "⚖️", text: "Uso responsable y ético de herramientas de IA" },
                { icon: "✅", text: "Verificación de información y combate a fake news" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <p className="text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Tools */}
        <Card className="bg-white/5 border-cyan-500/20 backdrop-blur-xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-cyan-400 flex items-center gap-3">
              <span className="text-4xl">🤖</span>
              Herramientas de IA que Dominarán
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["ChatGPT", "Gemini", "Leonardo.ai", "InVideo", "Suno.ai", "ElevenLabs", "Notebook LM", "Gamma"].map(
                (tool, idx) => (
                  <div
                    key={idx}
                    className="bg-white text-slate-900 rounded-lg p-4 text-center font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
                  >
                    {tool}
                  </div>
                ),
              )}
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <Card className="bg-white/5 border-cyan-500/20 backdrop-blur-xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-cyan-400 flex items-center gap-3">
              <span className="text-4xl">💬</span>
              Testimonios de Padres
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  text: "Mi hijo de 10 años ha descubierto una pasión por la tecnología. Ahora me ayuda a crear presentaciones para el trabajo.",
                  author: "Ana M., Madre de estudiante",
                },
                {
                  text: "Las herramientas que aprendió mi hija le han ayudado a mejorar sus calificaciones y a ser más creativa.",
                  author: "Carlos R., Padre de estudiante",
                },
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white/10 rounded-lg p-6 relative">
                  <div className="text-6xl text-cyan-400/20 absolute top-2 left-2">"</div>
                  <p className="text-slate-300 italic mb-4 relative z-10">{testimonial.text}</p>
                  <p className="text-cyan-400 font-semibold text-right">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pricing Table */}
        <Card className="bg-white/5 border-cyan-500/20 backdrop-blur-xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-cyan-400 flex items-center gap-3">
              <span className="text-4xl">💰</span>
              Inversión en el Futuro de tu Hijo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Opción 1: Pago Completo */}
              <div className="flex flex-col justify-between p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-400/30 rounded-xl backdrop-blur-xl relative overflow-hidden group hover:border-cyan-400/60 transition-all">
                <div className="absolute top-0 right-0 bg-cyan-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MEJOR VALOR
                </div>
                <div>
                  <p className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    Programa Completo
                  </p>
                  <p className="text-slate-400 text-sm mb-4">Inversión Única</p>
                  <div className="text-5xl font-bold text-white mb-2">$197 <span className="text-xl text-cyan-400">USD</span></div>
                  <ul className="text-slate-300 text-sm space-y-2 mb-8 mt-6">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> 10 Clases en Vivo</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Grabaciones de por vida</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Certificado Incluido</li>
                  </ul>
                </div>
                <Button asChild size="lg" className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold">
                  <Link href="/pagar?option=explorer">Inscribir Ahora ($197)</Link>
                </Button>
              </div>

              {/* Opción 2: Reserva */}
              <div className="flex flex-col justify-between p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl hover:bg-white/10 transition-all">
                <div>
                  <p className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                    <span className="text-2xl">🔒</span>
                    Reserva Flexible
                  </p>
                  <p className="text-slate-400 text-sm mb-4">Asegura tu cupo hoy</p>
                  <div className="text-5xl font-bold text-white mb-2">$20 <span className="text-xl text-cyan-400">USD</span></div>
                  <p className="text-slate-400 text-xs mb-6">Paga el resto ($177 USD) antes de iniciar las clases.</p>
                  <ul className="text-slate-300 text-sm space-y-2 mb-8">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-slate-500" /> Asegura tu lugar</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-slate-500" /> Acceso inmediato a comunidad</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-slate-500" /> Cancela si cambias de opinión</li>
                  </ul>
                </div>
                <Button asChild size="lg" variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  <Link href="/pagar?option=reserve">Reservar por $20 USD</Link>
                </Button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" /> Garantía de Satisfacción de 10 días
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Highlight Box */}
        <div className="mb-16 p-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-l-4 border-cyan-400 rounded-r-2xl backdrop-blur-xl">
          <p className="text-xl text-white font-semibold flex items-center gap-4">
            <span className="text-4xl">⚡</span>
            <span>No es un curso más. Es una mentoría personalizada para líderes del mañana.</span>
          </p>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-br from-cyan-400 to-blue-500 border-0 shadow-2xl shadow-cyan-500/50">
          <CardContent className="text-center py-12 space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">¿Tu Hijo Está Listo?</h2>
            <p className="text-slate-900 text-lg max-w-2xl mx-auto">
              Solo aceptamos 5 alumnos por grupo para garantizar resultados. El primer paso es una breve entrevista.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform rounded-full"
              >
                <Link href="/#sesion-estrategica">Agendar Entrevista de Admisión</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/20 hover:bg-white/30 text-slate-900 border-slate-900 text-lg px-8 py-6 backdrop-blur-sm"
              >
                <Link href="https://wa.me/56964754219?text=Hola%2C%20quiero%20más%20información%20sobre%20el%20Programa%20Acelerador%20de%20IA">
                  Consultar por WhatsApp
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="mt-16 text-center text-slate-400 text-sm space-y-2">
          <p>© 2026 Innovakids Latam. Todos los derechos reservados.</p>
          <p className="flex items-center justify-center gap-2">
            <span>📧</span> contacto@innovakidslatam.com
            <span className="mx-2">|</span>
            <span>📱</span> +56 9 6475 4219
          </p>
        </footer>
      </div>
    </div>
  )
}
