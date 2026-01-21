import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MapPin, Users, Clock, Shield, Target, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Curso de IA para Niños en Chile 🇨🇱 | ¡Clase GRATIS! InnovaKids",
  description:
    "⭐ Niños chilenos crean apps, videojuegos y startups con IA. Grupos de 5 niños máximo. Santiago, Viña, Concepción y todo Chile. WhatsApp: +56 9 6475 4219 ¡Cupos limitados!",
  keywords:
    "cursos ia niños chile, clases ia santiago, ia para niños viña del mar, curso inteligencia artificial concepción, innovakids chile",
  alternates: {
    canonical: "https://www.innovakidslatam.com/cl",
    languages: {
      "es-CL": "https://www.innovakidslatam.com/cl",
      "es-MX": "https://www.innovakidslatam.com/mx",
      "es-CO": "https://www.innovakidslatam.com/co",
      "es-AR": "https://www.innovakidslatam.com/ar",
      "es-PE": "https://www.innovakidslatam.com/pe",
      "es-ES": "https://www.innovakidslatam.com/es",
    },
  },
}

export default function ChileHub() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Me interesa el curso de IA para niños en Chile.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  const ciudades = [
    {
      name: "Santiago",
      comunas: [
        "Las Condes",
        "Providencia",
        "Vitacura",
        "Ñuñoa",
        "La Reina",
        "Lo Barnechea",
        "Peñalolén",
        "Maipú",
        "Puente Alto",
      ],
    },
    { name: "Viña del Mar", comunas: ["Reñaca", "Recreo", "Miraflores", "Agua Santa"] },
    { name: "Concepción", comunas: ["San Pedro", "Talcahuano", "Hualpén", "Chiguayante"] },
    { name: "Valparaíso", comunas: ["Cerro Alegre", "Cerro Concepción", "Playa Ancha"] },
    { name: "Antofagasta", comunas: ["Centro", "Norte", "Sur"] },
    { name: "Temuco", comunas: ["Centro", "Padre Las Casas", "Labranza"] },
    { name: "La Serena", comunas: ["Centro", "Coquimbo", "La Florida"] },
    { name: "Puerto Montt", comunas: ["Centro", "Puerto Varas", "Pelluco"] },
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#D52B1E] via-[#0039A6] to-[#FFFFFF] py-24 md:py-32">
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <span className="text-2xl">🇨🇱</span>
              <span className="font-medium">Chile</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Cursos de IA para Niños en Todo Chile
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Clases 100% online en vivo para niños de Santiago, Viña del Mar, Concepción y todas las ciudades de Chile.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#0039A6] shadow-2xl transition-all hover:scale-105"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#0039A6]"
              >
                Consultar por WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* CIUDADES CHILE */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Disponible en Todas las Ciudades de Chile
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Clases 100% online en vivo - Tu hijo puede participar desde cualquier lugar
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {ciudades.map((ciudad, i) => (
                <div key={i} className="rounded-2xl bg-card p-6 transition-all hover:shadow-lg">
                  <div className="mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#D52B1E]" />
                    <h3 className="text-xl font-bold">{ciudad.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ciudad.comunas.map((comuna, j) => (
                      <span key={j} className="rounded-full bg-muted px-3 py-1 text-sm">
                        {comuna}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/cl/clases-ia-ninos-santiago"
                className="inline-flex items-center gap-2 rounded-full bg-[#0039A6] px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105"
              >
                Ver Clases en Santiago
              </Link>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">¿Por Qué Familias Chilenas Nos Eligen?</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D52B1E]/20">
                  <Users className="h-8 w-8 text-[#0039A6]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Máximo 5 Niños</h3>
                <p className="text-muted-foreground">Grupos pequeños para atención personalizada</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D52B1E]/20">
                  <Clock className="h-8 w-8 text-[#0039A6]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Horarios Chile</h3>
                <p className="text-muted-foreground">Zona horaria GMT-4 adaptada a tu familia</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D52B1E]/20">
                  <Shield className="h-8 w-8 text-[#0039A6]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Garantía 10 Días</h3>
                <p className="text-muted-foreground">Devolución completa si no estás satisfecho</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D52B1E]/20">
                  <Target className="h-8 w-8 text-[#0039A6]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">$197 USD</h3>
                <p className="text-muted-foreground">10 clases completas con certificado</p>
              </div>
            </div>
          </div>
        </section>

        {/* PÁGINAS RELACIONADAS */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">Explora Más Sobre Nuestro Programa en Chile</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/cl/cursos-ia-ninos-chile"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Cursos IA Chile
              </Link>
              <Link
                href="/cl/clases-ia-ninos-santiago"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Clases en Santiago
              </Link>
              <Link
                href="/cl/blog/cursos-inteligencia-artificial-ninos-chile-guia"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Guía Completa IA para Niños
              </Link>
            </div>
          </div>
        </section>

        {/* OTROS PAÍSES */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">También Disponible en Otros Países</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/mx/cursos-ia-ninos-mexico"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                🇲🇽 México
              </Link>
              <Link
                href="/co/cursos-ia-ninos-colombia"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                🇨🇴 Colombia
              </Link>
              <Link
                href="/ar/cursos-ia-chicos-argentina"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                🇦🇷 Argentina
              </Link>
              <Link
                href="/pe/cursos-ia-ninos-peru"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                🇵🇪 Perú
              </Link>
              <Link
                href="/es/cursos-ia-ninos-espana"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                🇪🇸 España
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-gradient-to-br from-[#0039A6] to-[#001d53] py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Dale a Tu Hijo la Ventaja del Futuro</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              Niños de todo Chile ya están creando con IA. Tu hijo puede ser el siguiente.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-[#D52B1E] px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105"
              >
                Agendar Evaluación Gratuita
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#0039A6]"
              >
                Consultar por WhatsApp
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Sin compromiso
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Garantía 10 días
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Grupos máx 5 niños
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
