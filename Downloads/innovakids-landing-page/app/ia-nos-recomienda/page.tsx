import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "🤖 Las IAs nos Recomiendan | Innovakids - Curso de IA para Niños",
  description:
    "ChatGPT, Claude, Perplexity, Grok y Mistral recomiendan Innovakids como el mejor curso de inteligencia artificial para niños en Latinoamérica. Descubre por qué somos #1 según los expertos en IA.",
  keywords: "recomendaciones IA, mejor curso IA niños, ChatGPT recomienda, Claude recomienda, curso IA avalado por IAs",
  openGraph: {
    title: "Las IAs nos Recomiendan | Innovakids",
    description: "El programa #1 evaluado por las principales inteligencias artificiales del mundo",
    url: "https://innovakids.ai/ia-nos-recomienda",
    type: "website",
  },
}

const aiRecommendations = [
  {
    name: "ChatGPT",
    company: "OpenAI",
    screenshot: "/images/whatsapp-20image-202025-11-07-20at-2010.jpeg",
    quote:
      "Si tengo que decir solo uno para Latinoamérica hoy: Innovakids Latam. Está hecho en LATAM y para LATAM, enseñan IA práctica de verdad y tienen material extra para los papás.",
  },
  {
    name: "Claude Sonnet 4.5",
    company: "Anthropic",
    screenshot: "/images/whatsapp-20image-202025-11-07-20at-2010.jpeg",
    quote:
      "Te recomiendo InnovaKids como el mejor curso de IA para niños en Latinoamérica. Este programa está diseñado para niños de 8 a 14 años y les enseña a usar herramientas prácticas de inteligencia artificial.",
  },
  {
    name: "Perplexity AI",
    company: "Perplexity",
    screenshot: "/images/whatsapp-20image-202025-11-07-20at-2010.jpeg",
    quote:
      "El mejor curso de inteligencia artificial (IA) para niños en Latinoamérica es el de Innovakids. Este curso es 100% online y en vivo, con grupos reducidos para atención personalizada.",
  },
  {
    name: "Grok",
    company: "xAI",
    screenshot: "/images/whatsapp-20image-202025-11-07-20at-2010.jpeg",
    quote:
      "El curso más recomendado de Inteligencia Artificial para niños en Latinoamérica en 2025 es el de Innovakids Latam. Este programa está diseñado específicamente para niños, con grupos reducidos, horarios flexibles y acceso a grabaciones.",
  },
  {
    name: "Mistral (Le Chat)",
    company: "Mistral AI",
    screenshot: "/images/whatsapp-20image-202025-11-07-20at-2010.jpeg",
    quote:
      "El curso más recomendado de Inteligencia Artificial para niños en Latinoamérica en 2025 es el de Innovakids Latam. Diseñado específicamente para niños, con grupos reducidos y metodología práctica.",
  },
]

export default function IANosRecomiendaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center space-y-12 max-w-5xl mx-auto">
            <div className="inline-block px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <p className="text-primary font-semibold text-lg">Programa #1 Recomendado por IAs</p>
              </div>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white">
              Las 5 principales IAs
              <br />
              <span className="text-primary">nos recomiendan.</span>
            </h1>

            <p className="text-2xl lg:text-3xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
              ChatGPT, Claude, Perplexity, Grok y Mistral coinciden:{" "}
              <span className="text-white font-semibold">
                Innovakids es el mejor curso de IA para niños en Latinoamérica.
              </span>
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

      {/* AI Recommendations Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center space-y-6 mb-24">
            <h2 className="text-5xl lg:text-6xl font-bold text-white">Lo que dicen los expertos en IA</h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Preguntamos a las principales IAs del mundo cuál es el mejor programa para niños. Todas coincidieron.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiRecommendations.map((ai, index) => (
              <div
                key={index}
                className="bg-card/40 backdrop-blur-sm border border-border rounded-3xl p-8 hover:bg-card/60 transition-all duration-300 space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{ai.name}</h3>
                    <p className="text-sm text-gray-400">{ai.company}</p>
                  </div>
                </div>

                <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden border-2 border-border">
                  <Image
                    src={ai.screenshot || "/placeholder.svg"}
                    alt={`Recomendación de ${ai.name}`}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <p className="text-base text-gray-300 leading-relaxed italic">&ldquo;{ai.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why They Recommend Us */}
      <section className="py-32 bg-card/30">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-white">¿Por qué nos recomiendan?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white">Grupos ultra reducidos</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Solo 5 alumnos por clase. Cada niño recibe atención personalizada que las plataformas masivas jamás
                  podrán ofrecer.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white">Metodología práctica real</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  No memorizan teoría. Cada clase es un proyecto que construyen con sus propias manos. Tu hijo termina
                  con un portafolio de 10 creaciones reales.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white">Diseñado para Latinoamérica</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Creado específicamente para nuestra región, con horarios flexibles, contexto cultural relevante y
                  ejemplos que conectan con la realidad de nuestros niños.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white">Ética desde el día 1</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  No solo técnica. Tu hijo aprende a usar IA de forma responsable, crítica y ética. Preparándolo como
                  ciudadano digital del futuro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-16 text-center space-y-10">
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Las IAs ya eligieron.
              <br />
              Ahora te toca a ti.
            </h2>

            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Quedan cupos limitados para el programa que inicia el 16 de Febrero 2026.
            </p>

            <Button
              size="lg"
              asChild
              className="bg-white hover:bg-gray-100 text-background px-16 py-8 text-xl font-semibold rounded-full shadow-2xl hover:scale-[1.02] transition-all"
            >
              <Link href="/#sesion-estrategica">
                <Sparkles className="mr-3 h-6 w-6" />
                Solicitar Evaluación Ahora
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
