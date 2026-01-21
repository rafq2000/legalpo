import MercadoPagoCheckout from "@/components/mercado-pago-checkout"
import PayPalCheckout from "@/components/paypal-checkout"
import { ArrowLeft, Shield, Lock, CreditCard, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const dynamic = "force-dynamic"

type PaymentOption =
  | "first"
  | "second"
  | "full"
  | "reserve"
  | "earlybird"
  | "complete"
  | "custom360"
  | "explorer"
  | "start_pack"
  | "pro_pack"
  | "university"
  | "promo180"
  | "restante177"

interface PaymentDetails {
  title: string
  price: number
  description: string
}

const paymentDetails: Record<PaymentOption, PaymentDetails> = {
  explorer: {
    title: "Innovakids Explorer",
    price: 197,
    description: "Módulo 1 Base - 10 Clases Fundamentales",
  },
  start_pack: {
    title: "Vibe Start Pack",
    price: 494,
    description: "Explorer + 1 Especialidad a elección",
  },
  pro_pack: {
    title: "Vibe Pro Pack",
    price: 691,
    description: "Explorer + 2 Especialidades (Ahorras $100)",
  },
  university: {
    title: "Academy University Pass",
    price: 788,
    description: "Acceso Total: 4 Módulos (Ahorras $300)",
  },
  custom360: {
    title: "Pago Personalizado",
    price: 360,
    description: "Pago único de $360 USD - Programa Completo Innovakids",
  },
  reserve: {
    title: "Reserva tu Cupo",
    price: 20,
    description: "Reserva con $20 USD - Paga el resto antes de iniciar",
  },
  earlybird: {
    title: "Early Bird - Primeros 10",
    price: 197,
    description: "Precio especial para los primeros 10 inscritos (60% OFF)",
  },
  complete: {
    title: "Programa Completo",
    price: 297,
    description: "Precio de lanzamiento 2026 (60% OFF - Valor real $497)",
  },
  first: {
    title: "Reserva",
    price: 50,
    description: "Asegura tu lugar con $50 USD",
  },
  second: {
    title: "Pago Restante",
    price: 247,
    description: "Completa tu inscripción - Restante del programa",
  },
  full: {
    title: "Pago Completo",
    price: 297,
    description: "Acceso inmediato al curso completo",
  },
  promo180: {
    title: "Oferta Especial Limitada",
    price: 180,
    description: "Acceso completo - Precio Especial",
  },
  restante177: {
    title: "Pago Restante del Programa",
    price: 177,
    description: "Completa tu inscripción - $177 USD restantes después de reserva",
  },
}

export default async function PagarPage({
  searchParams,
}: {
  searchParams: Promise<{ option?: string }>
}) {
  const params = await searchParams
  const option = (params.option as PaymentOption) || "explorer"
  const details = paymentDetails[option] || paymentDetails.explorer

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link href="/#inversion" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4" />
          Volver a la página principal
        </Link>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-2 border-green-500/50 rounded-xl p-4 mb-6">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm font-semibold text-white">Pago 100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-green-400" />
                <span className="text-sm font-semibold text-white">Encriptación SSL</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-sm font-semibold text-white">Garantía 10 Días</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Inscribe a tu hijo en Innovakids</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Curso de Inteligencia Artificial para Niños y Adolescentes
            </p>
            <div className="mt-4 p-4 md:p-6 bg-primary/10 rounded-lg inline-block">
              <p className="text-xl font-semibold text-primary mb-1">{details.title}</p>
              <p className="text-3xl font-bold text-white mb-2">${details.price} USD</p>
              <p className="text-sm text-muted-foreground">{details.description}</p>
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-lg p-4 md:p-6">
            <Tabs defaultValue="paypal" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="paypal" className="text-sm md:text-base">
                  <span className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    <span className="hidden sm:inline">Tarjeta / PayPal</span>
                    <span className="sm:hidden">Tarjeta</span>
                  </span>
                </TabsTrigger>
                <TabsTrigger value="mercadopago" className="text-sm md:text-base">
                  <span className="flex items-center gap-2">
                    🌎 <span className="hidden sm:inline">Mercado Pago</span>
                    <span className="sm:hidden">MP</span>
                  </span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="paypal">
                <PayPalCheckout paymentOption={option} amount={details.price} />
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-center gap-2 text-sm text-green-400">
                    <Lock className="h-4 w-4" />
                    <p className="font-semibold">Pago 100% seguro procesado por PayPal</p>
                  </div>
                  <p className="text-center text-sm text-muted-foreground">
                    Acepta tarjetas de crédito y débito de todo el mundo
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <p className="text-xs text-muted-foreground">
                      Tus datos están protegidos con encriptación SSL de nivel bancario. Nunca almacenamos información
                      de tarjetas.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mercadopago">
                <MercadoPagoCheckout paymentOption={option} amount={details.price} />
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-center gap-2 text-sm text-green-400">
                    <Lock className="h-4 w-4" />
                    <p className="font-semibold">Pago 100% seguro procesado por Mercado Pago</p>
                  </div>
                  <p className="text-center text-sm text-muted-foreground">
                    Aceptamos tarjetas de crédito y débito de toda América Latina
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <p className="text-xs text-muted-foreground">
                      Tus datos están protegidos con encriptación SSL de nivel bancario. Nunca almacenamos información
                      de tarjetas.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-6 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border-2 border-cyan-500/50 rounded-xl p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="rounded-full bg-cyan-500/20 p-3 flex-shrink-0">
                <Shield className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Garantía de Satisfacción 100%</h3>
                <p className="text-sm md:text-base text-gray-300">
                  Si después de los primeros 10 días no estás satisfecho, te devolvemos el 100% de tu inversión. Sin
                  preguntas, sin complicaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
