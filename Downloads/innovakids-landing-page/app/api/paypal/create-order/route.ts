import { type NextRequest, NextResponse } from "next/server"

const PAYPAL_API_URL = process.env.PAYPAL_API_URL || "https://api-m.paypal.com"

async function getPayPalAccessToken(): Promise<string> {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    throw new Error("PayPal credentials not configured")
  }

  const credentials = `${clientId}:${clientSecret}`
  const auth = Buffer.from(credentials).toString("base64")

  const response = await fetch(`${PAYPAL_API_URL}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  })

  const data = await response.json()

  if (!data.access_token) {
    throw new Error("Failed to authenticate with PayPal")
  }

  return data.access_token
}

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json()

    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET
    const apiUrl = process.env.PAYPAL_API_URL || "https://api-m.paypal.com"

    if (!clientId || !clientSecret) {
      return NextResponse.json({ error: "PayPal no está configurado" }, { status: 500 })
    }

    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64")

    const response = await fetch(`${apiUrl}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: amount,
            },
          },
        ],
        application_context: {
          brand_name: "Innovakids",
          landing_page: "NO_PREFERENCE",
          user_action: "PAY_NOW",
          shipping_preference: "NO_SHIPPING",
        },
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("[v0] PayPal error:", data)
      throw new Error(data.message || "Error al crear orden")
    }

    return NextResponse.json(data)
  } catch (error: any) {
    console.error("[v0] Create order error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
