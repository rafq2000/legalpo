"use server"

import { mercadoPagoClient } from "@/lib/mercadopago"

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
  | "remaining"

const paymentTitles: Record<PaymentOption, string> = {
  reserve: "Innovakids - Reserva de Cupo",
  remaining: "Innovakids - Pago Restante",
  full: "Innovakids - Curso Completo",
  promo180: "Innovakids - Oferta Especial",
  first: "Innovakids - Reserva",
  second: "Innovakids - Pago Restante",
  earlybird: "Innovakids - Early Bird",
  complete: "Innovakids - Programa Completo",
  custom360: "Innovakids - Pago Personalizado",
  explorer: "Innovakids Explorer",
  start_pack: "Vibe Start Pack",
  pro_pack: "Vibe Pro Pack",
  university: "Academy University Pass",
  restante177: "Innovakids - Pago Restante $177",
}

const paymentDescriptions: Record<PaymentOption, string> = {
  reserve: "Reserva tu lugar en el Curso de IA para Niños",
  remaining: "Completa tu pago del Curso de IA para Niños",
  full: "Curso Completo de IA para Niños - 12 clases + Proyectos + Certificado",
  promo180: "Acceso Completo al Curso de IA para Niños - Precio Especial",
  first: "Reserva de cupo",
  second: "Pago restante del programa",
  earlybird: "Precio especial primeros inscritos",
  complete: "Programa completo Innovakids",
  custom360: "Pago único programa completo",
  explorer: "Módulo 1 Base - 10 Clases",
  start_pack: "Explorer + 1 Especialidad",
  pro_pack: "Explorer + 2 Especialidades",
  university: "Acceso Total 4 Módulos",
  restante177: "Pago restante de $177 USD",
}

export async function createMercadoPagoCheckout(
  studentName: string,
  parentEmail: string,
  paymentOption: PaymentOption,
  amount: number,
) {
  try {
    const preference = await mercadoPagoClient.create({
      body: {
        items: [
          {
            id: `innovakids-${paymentOption}`,
            title: paymentTitles[paymentOption],
            description: paymentDescriptions[paymentOption],
            unit_price: amount,
            quantity: 1,
            currency_id: "USD",
          },
        ],
        payer: {
          email: parentEmail,
          name: studentName,
        },
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_APP_URL}/gracias?method=mercadopago&amount=${amount}`,
          failure: `${process.env.NEXT_PUBLIC_APP_URL}/pago/error`,
          pending: `${process.env.NEXT_PUBLIC_APP_URL}/pago/pendiente`,
        },
        auto_return: "approved",
        statement_descriptor: "INNOVAKIDS",
        external_reference: `${paymentOption}-${parentEmail}-${Date.now()}`,
        notification_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/mercadopago`,
      },
    })

    return {
      success: true,
      checkoutUrl: preference.init_point,
      sandboxUrl: preference.sandbox_init_point,
    }
  } catch (error) {
    console.error("[v0] Mercado Pago error:", error)
    return {
      success: false,
      error: "Error al crear el checkout. Por favor intenta nuevamente.",
    }
  }
}
