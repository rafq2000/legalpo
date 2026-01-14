import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Users, Clock, Shield, Star, CheckCircle, Target, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Clases de IA para Niños Lima 2026 | Miraflores, Surco, San Isidro | InnovaKids 🇵🇪",
  description:
    "Clases de inteligencia artificial para niños en Lima. Miraflores, San Isidro, Surco, La Molina, San Borja. 100% online en vivo. Grupos de máx 5 niños. Evaluación gratis.",
  keywords:
    "clases ia niños lima, cursos inteligencia artificial miraflores, ia para niños surco, cursos programación san isidro, innovakids lima",
  alternates: {
    canonical: "https://www.innovakidslatam.com/pe/clases-ia-ninos-lima",
  },
  openGraph: {
    title: "Clases de IA para Niños en Lima | InnovaKids",
    description: "Clases de inteligencia artificial para niños en Lima. 100% online. Grupos de máx 5 niños.",
    url: "https://www.innovakidslatam.com/pe/clases-ia-ninos-lima",
    locale: "es_PE",
  },
}

export default function ClasesIANinosLima() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent(
    "Hola! Me interesa el curso de IA para niños en Lima. Quisiera agendar una evaluación gratuita.",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  const districts = [
    "Miraflores",
    "San Isidro",
    "Surco",
    "La Molina",
    "San Borja",
    "Barranco",
    "Magdalena",
    "Jesús María",
    "Lince",
    "Pueblo Libre",
    "San Miguel",
    "Chorrillos",
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#D91023] via-[#FFFFFF] to-[#D91023] py-24 md:py-32">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">Lima, Perú</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Clases de IA para Niños en Lima
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Tu hijo aprenderá a crear con IA desde la primera clase. Disponible para familias en Miraflores, San
              Isidro, Surco, La Molina y todo Lima.
            </p>

            {/* Stats */}
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold md:text-4xl">10</div>
                <div className="text-sm text-white/80">Clases en vivo</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold md:text-4xl">5</div>
                <div className="text-sm text-white/80">Niños máx/grupo</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold md:text-4xl">$200</div>
                <div className="text-sm text-white/80">USD total</div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#D91023] shadow-2xl transition-all hover:scale-105"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#D91023]"
              >
                Consultar por WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* DISTRICTS */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">Disponible en Todos los Distritos de Lima</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {districts.map((district) => (
                <span
                  key={district}
                  className="rounded-full bg-[#D91023]/10 px-4 py-2 text-sm font-medium text-[#D91023]"
                >
                  {district}
                </span>
              ))}
            </div>
            <p className="mt-6 text-center text-muted-foreground">
              Clases 100% online en vivo - Solo necesitas computadora e internet
            </p>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">¿Por Qué Familias Limeñas Eligen InnovaKids?</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-card p-6 text-center">
                <Users className="mx-auto mb-4 h-12 w-12 text-[#D91023]" />
                <h3 className="mb-2 font-bold">Grupos Reducidos</h3>
                <p className="text-sm text-muted-foreground">Máximo 5 niños por clase para atención personalizada</p>
              </div>
              <div className="rounded-2xl bg-card p-6 text-center">
                <Clock className="mx-auto mb-4 h-12 w-12 text-[#D91023]" />
                <h3 className="mb-2 font-bold">Horarios Flexibles</h3>
                <p className="text-sm text-muted-foreground">Horarios en zona horaria Perú (GMT-5)</p>
              </div>
              <div className="rounded-2xl bg-card p-6 text-center">
                <Shield className="mx-auto mb-4 h-12 w-12 text-[#D91023]" />
                <h3 className="mb-2 font-bold">Garantía 10 Días</h3>
                <p className="text-sm text-muted-foreground">Devolución completa si no quedas satisfecho</p>
              </div>
              <div className="rounded-2xl bg-card p-6 text-center">
                <Star className="mx-auto mb-4 h-12 w-12 text-[#D91023]" />
                <h3 className="mb-2 font-bold">Profesores Expertos</h3>
                <p className="text-sm text-muted-foreground">Especialistas en IA y educación infantil</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-2xl bg-card p-8 text-center">
              <div className="mb-4 flex justify-center text-[#D91023]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
              <p className="mb-6 text-lg text-muted-foreground">
                &ldquo;Mi hijo Mateo (10 años) estaba enganchado con los videojuegos. Ahora usa IA para crear sus
                propios juegos. En InnovaKids encontró su pasión real. Los profesores son excelentes y la metodología es
                perfecta.&rdquo;
              </p>
              <div>
                <div className="font-bold">Claudia Fernández</div>
                <div className="text-sm text-muted-foreground">Madre de Mateo - Miraflores, Lima</div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKING */}
        <section className="border-t py-12">
          <div className="container mx-auto px-4">
            <h3 className="mb-6 text-center text-lg font-semibold">Más información sobre InnovaKids en Perú</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/pe"
                className="rounded-full bg-muted px-4 py-2 text-sm transition-colors hover:bg-[#D91023] hover:text-white"
              >
                Hub Perú
              </Link>
              <Link
                href="/pe/cursos-ia-ninos-peru"
                className="rounded-full bg-muted px-4 py-2 text-sm transition-colors hover:bg-[#D91023] hover:text-white"
              >
                Cursos IA Niños Perú
              </Link>
              <Link
                href="/pe/blog/cursos-inteligencia-artificial-ninos-peru-guia"
                className="rounded-full bg-muted px-4 py-2 text-sm transition-colors hover:bg-[#D91023] hover:text-white"
              >
                Guía Completa
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#D91023] to-[#8B0000] py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Inscribe a Tu Hijo Hoy desde Lima</h2>
            <p className="mx-auto mb-10 max-w-2xl text-white/80">
              Agenda una evaluación gratuita y descubre si tu hijo califica para el programa.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#D91023] transition-all hover:scale-105"
              >
                Agendar Evaluación Gratuita
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#D91023]"
              >
                WhatsApp Directo
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Sin compromiso
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Garantía 10 días
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> $200 USD total
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Clases de IA para Niños en Lima",
            description: "Clases de inteligencia artificial para niños en Lima, Perú",
            provider: {
              "@type": "Organization",
              name: "InnovaKids",
            },
            areaServed: {
              "@type": "City",
              name: "Lima",
            },
            offers: {
              "@type": "Offer",
              price: "200",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </>
  )
}
