import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.warn("Missing Supabase credentials in MercadoPago webhook")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    const body = await request.json()

    console.log("[v0] Mercado Pago webhook received:", body)

    // Mercado Pago sends notifications for different events
    if (body.type === "payment") {
      const paymentId = body.data.id

      // Fetch payment details from Mercado Pago API
      const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
        headers: {
          Authorization: `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`,
        },
      })

      const payment = await response.json()

      // Store payment in database
      const { error } = await supabase.from("payments").insert({
        payment_id: payment.id,
        external_reference: payment.external_reference,
        status: payment.status,
        amount: payment.transaction_amount,
        currency: payment.currency_id,
        payer_email: payment.payer.email,
        payment_method: payment.payment_method_id,
        created_at: new Date().toISOString(),
      })

      if (error) {
        console.error("[v0] Error storing payment:", error)
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("[v0] Webhook error:", error)
    return NextResponse.json({ error: "Webhook error" }, { status: 400 })
  }
}
