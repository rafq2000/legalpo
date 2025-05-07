import { NextResponse } from "next/server"
import { BetaAnalyticsDataClient } from "@google-analytics/data"
import { createClient } from "@supabase/supabase-js"

// Create a properly configured analytics client
const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
})

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!)

const propertyId = process.env.GA4_PROPERTY_ID

export async function GET(request: Request) {
  try {
    console.log("🔍 Iniciando solicitud de analytics...")
    console.log(`📊 Usando property ID: ${propertyId}`)

    // Ensure we have a valid property ID
    if (!propertyId) {
      return NextResponse.json(
        {
          error: "GA4_PROPERTY_ID no está configurado",
          success: false,
        },
        { status: 500 },
      )
    }

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: "30daysAgo", // Datos de los últimos 30 días
          endDate: "today",
        },
      ],
      dimensions: [{ name: "date" }],
      metrics: [{ name: "activeUsers" }, { name: "screenPageViews" }],
    })

    console.log("✅ Respuesta de GA4 recibida correctamente")

    // Verificar si hay filas en la respuesta
    if (!response.rows || response.rows.length === 0) {
      console.log("⚠️ No se encontraron datos en GA4")
      return NextResponse.json({
        message: "No hay datos disponibles en este rango de fechas.",
        success: true,
        data: [],
      })
    }

    // Formatear los datos para mayor claridad
    const formattedData = response.rows.map((row) => ({
      date: row.dimensionValues?.[0]?.value || "",
      activeUsers: Number.parseInt(row.metricValues?.[0]?.value || "0"),
      pageViews: Number.parseInt(row.metricValues?.[1]?.value || "0"),
    }))

    // Intentar guardar en Supabase
    try {
      console.log("💾 Intentando guardar datos en Supabase...")

      const { error } = await supabase.from("analytics").insert({
        date: new Date().toISOString(),
        users: response.rows?.[0]?.metricValues?.[0]?.value || 0,
        views: response.rows?.[0]?.metricValues?.[1]?.value || 0,
      })

      if (error) {
        console.error("⚠️ Error al guardar en Supabase:", error)
      } else {
        console.log("✅ Datos guardados en Supabase correctamente")
      }
    } catch (supabaseError) {
      console.error("❌ Error con Supabase:", supabaseError)
      // Continuamos aunque falle Supabase
    }

    // Devolver respuesta exitosa
    return NextResponse.json({
      success: true,
      data: formattedData,
      rawData: response.rows,
      timestamp: new Date().toISOString(),
    })
  } catch (error: any) {
    console.error("❌ Analytics error:", error)

    // Devolver respuesta de error detallada
    return NextResponse.json(
      {
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
        success: false,
      },
      { status: 500 },
    )
  }
}
