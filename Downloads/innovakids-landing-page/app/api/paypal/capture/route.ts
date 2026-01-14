import { type NextRequest, NextResponse } from "next/server"

const PAYPAL_API_URL = process.env.PAYPAL_API_URL || "https://api-m.paypal.com"

async function getPayPalAccessToken(): Promise<string> {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    throw new Error("PayPal credentials not configured")
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64")

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
    console.error("[v0] Failed to get PayPal access token:", data)
    throw new Error("Failed to authenticate with PayPal")
  }

  return data.access_token
}

export async function POST(request: NextRequest) {
  try {
    const { orderID } = await request.json()

    if (!orderID) {
      return NextResponse.json({ error: "Order ID is required" }, { status: 400 })
    }

    console.log("[v0] Capturing PayPal order:", orderID)

    const accessToken = await getPayPalAccessToken()

    const response = await fetch(`${PAYPAL_API_URL}/v2/checkout/orders/${orderID}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const data = await response.json()
    console.log("[v0] PayPal capture response:", data)

    if (data.status === "COMPLETED") {
      return NextResponse.json({
        success: true,
        orderId: data.id,
        status: data.status,
        payer: data.payer,
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "Payment capture failed",
          details: data,
        },
        { status: 400 },
      )
    }
  } catch (error) {
    console.error("[v0] PayPal capture error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Error capturing payment",
      },
      { status: 500 },
    )
  }
}
