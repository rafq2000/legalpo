import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { orderID } = await request.json()

    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET
    const apiUrl = process.env.PAYPAL_API_URL || "https://api-m.paypal.com"

    if (!clientId || !clientSecret) {
      return NextResponse.json({ error: "PayPal no está configurado" }, { status: 500 })
    }

    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64")

    const response = await fetch(`${apiUrl}/v2/checkout/orders/${orderID}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("[v0] PayPal capture error:", data)
      throw new Error(data.message || "Error al capturar")
    }

    return NextResponse.json(data)
  } catch (error: any) {
    console.error("[v0] Capture error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
