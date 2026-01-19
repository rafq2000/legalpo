import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Users, Crown, X, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "👥 Solo 5 Alumnos por Clase | Innovakids - Tutoría de Élite",
  description:
    "Grupos ultra reducidos de máximo 5 niños por clase. Atención personalizada real, no clases masivas. Descubre la diferencia de una educación premium en IA para tu hijo.",
  keywords:
    "clases pequeñas IA niños, grupos reducidos, atención personalizada, tutoría élite IA, clases individualizadas",
  openGraph: {
    title: "Solo 5 Alumnos por Clase | Innovakids",
    description: "Tutoría de élite personalizada. Atención real, no clases masivas.",
    url: "https://innovakids.ai/grupos-pequenos-5-alumnos",
    type: "website",
  },
}

export default function GruposPequenosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center space-y-12 max-w-5xl mx-auto">
            <div className="inline-block px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8">
              <div className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-primary" />
                <p className="text-primary font-semibold text-lg">Educación Premium</p>
              </div>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white">
              Solo 5 alumnos
              <br />
              <span className="text-primary">por clase.</span>
            </h1>

            <p className="text-2xl lg:text-3xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
              Tutoría de élite personalizada.{" "}
              <span className="text-white font-semibold">Atención real, no clases masivas.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button
                size="lg"
                asChild
                className="bg-white hover:bg-gray-100 text-background px-12 py-8 text-xl font-semibold rounded-full shadow-2xl hover:scale-[1.02] transition-all"
              >
                <Link href="/#sesion-estrategica">
                  <Sparkles className="mr-3 h-6 w-6" />
                  Solicitar Evaluación Gratuita
                </Link>
              </Button>

              <p className="text-sm text-gray-500">Solo 5 cupos disponibles • Inicio 11 Enero 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <h2 className="text-5xl lg:text-6xl font-bold text-white text-center mb-20">La diferencia es abismal</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Cursos Masivos */}
            <div className="bg-background/50 border border-destructive/30 rounded-3xl p-10 space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center">
                  <X className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-3xl font-bold text-gray-400">Cursos Masivos</h3>
              </div>

              <ul className="space-y-4 text-xl text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✗</span>
                  <span>20-30 alumnos por clase</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✗</span>
                  <span>El profesor no recuerda tu nombre</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Preguntas sin responder por falta de tiempo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Ritmo demasiado rápido o demasiado lento</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Sin feedback personalizado en proyectos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Educación en masa, resultados promedio</span>
                </li>
              </ul>
            </div>

            {/* Innovakids */}
            <div className="bg-primary/5 border border-primary/30 rounded-3xl p-10 space-y-6 shadow-2xl shadow-primary/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-white">Innovakids</h3>
              </div>

              <ul className="space-y-4 text-xl text-white">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    <strong>Máximo 5 niños</strong> por clase
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    El profesor conoce a <strong>cada alumno</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    Todas las dudas resueltas en <strong>tiempo real</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    Ritmo adaptado al <strong>nivel de cada niño</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    Feedback <strong>detallado</strong> en cada proyecto
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    <strong>Tutoría de élite</strong>, resultados excepcionales
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Deep Dive */}
      <section className="py-32 bg-card/30">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="text-center space-y-6 mb-24">
            <h2 className="text-5xl lg:text-6xl font-bold text-white">¿Qué significa realmente 5 alumnos?</h2>
          </div>

          <div className="space-y-16">
            <div className="bg-card/40 backdrop-blur-sm border border-border rounded-3xl p-12 hover:bg-card/60 transition-all duration-300">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">🎯 El profesor sabe quién es tu hijo</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                No es un número más. Conoce sus fortalezas, sus desafíos, y adapta la enseñanza a su estilo de
                aprendizaje único.
              </p>
            </div>

            <div className="bg-card/40 backdrop-blur-sm border border-border rounded-3xl p-12 hover:bg-card/60 transition-all duration-300">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                💬 Todas las preguntas tienen respuesta
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Con solo 5 niños, hay tiempo para explicar, reexplicar, y asegurarse de que cada concepto quedó 100%
                claro.
              </p>
            </div>

            <div className="bg-card/40 backdrop-blur-sm border border-border rounded-3xl p-12 hover:bg-card/60 transition-all duration-300">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">🚀 Proyectos únicos y personalizados</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Tu hijo puede crear un chatbot sobre dinosaurios si le apasionan, o un analizador de emociones para
                ayudar en casa. Los proyectos se adaptan a sus intereses.
              </p>
            </div>

            <div className="bg-card/40 backdrop-blur-sm border border-border rounded-3xl p-12 hover:bg-card/60 transition-all duration-300">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">🎓 Mentoría, no solo instrucción</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                El profesor se convierte en mentor personal, guiando el desarrollo de tu hijo más allá de solo "pasar el
                curso".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-16 text-center space-y-10">
            <Users className="mx-auto h-20 w-20 text-primary" />

            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">Solo quedan 5 cupos disponibles</h2>

            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Para el grupo que inicia el 26 de Enero 2026. Una vez llenos, no hay más espacio hasta el próximo grupo.
            </p>

            <Button
              size="lg"
              asChild
              className="bg-white hover:bg-gray-100 text-background px-16 py-8 text-xl font-semibold rounded-full shadow-2xl hover:scale-[1.02] transition-all"
            >
              <Link href="/#sesion-estrategica">
                <Sparkles className="mr-3 h-6 w-6" />
                Reservar Mi Cupo Ahora
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
