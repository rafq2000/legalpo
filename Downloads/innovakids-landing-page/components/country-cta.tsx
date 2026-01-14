"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import type { CountryConfig } from "@/lib/countries-config"

interface CountryCTAProps {
  country: CountryConfig
}

export function CountryCTA({ country }: CountryCTAProps) {
  const scrollToBooking = () => {
    const element = document.getElementById("sesion-estrategica")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="sesion-estrategica" className="py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Reserva la Evaluación Gratuita para tu Hijo/a en {country.name}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          En 30 minutos descubrirás si tu {country.childTerm.slice(0, -1)} está listo para aprender inteligencia
          artificial y transformar su futuro.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["Sin compromiso de compra", `Horarios ${country.name}`, "Evaluación personalizada", "100% online"].map(
            (benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{benefit}</span>
              </div>
            ),
          )}
        </div>

        <div className="bg-card border rounded-2xl p-8 max-w-md mx-auto mb-8">
          <p className="text-sm text-muted-foreground mb-2">Inversión programa completo</p>
          <p className="text-4xl font-bold text-primary mb-2">
            {country.currencySymbol}
            {country.priceLocal.toLocaleString()} {country.currency}
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            ~${country.priceUSD} USD | Pagos con {country.paymentMethods[0]}
          </p>

          <Button size="lg" onClick={scrollToBooking} className="w-full text-lg py-6 rounded-full">
            Agendar Evaluación Gratis {country.flag}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <p className="text-xs text-muted-foreground mt-4">Solo 2 cupos disponibles para {country.name}</p>
        </div>
      </div>
    </section>
  )
}
