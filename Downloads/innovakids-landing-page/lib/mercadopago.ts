import { MercadoPagoConfig, Preference } from "mercadopago"

// Initialize Mercado Pago client
const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
  options: { timeout: 5000 },
})

export const mercadoPagoClient = new Preference(client)
