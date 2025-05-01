import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { analyticsService } from "@/lib/analytics-service"
import { authOptions } from "@/lib/auth"

export async function POST(req: Request) {
  try {
    console.log("🔄 Procesando solicitud de seguimiento de evento...")

    const session = await getServerSession(authOptions)
    let data

    try {
      data = await req.json()
    } catch (parseError) {
      console.error("❌ Error al parsear JSON de la solicitud:", parseError)
      return NextResponse.json({ error: "Formato de solicitud inválido" }, { status: 400 })
    }

    // Verificar datos mínimos requeridos
    if (!data.eventType) {
      console.warn("❌ Solicitud sin tipo de evento")
      return NextResponse.json({ error: "Tipo de evento requerido" }, { status: 400 })
    }

    // Obtener IP del cliente
    const ip = req.headers.get("x-forwarded-for") || "unknown"

    // Usar el ID de usuario de la sesión si está disponible
    const userId = session?.user?.id || data.userId || null

    console.log("📌 Datos de evento:", {
      eventType: data.eventType,
      userId,
      anonymousId: data.anonymousId,
      pagePath: data.pagePath,
      ip: ip.split(",")[0], // Solo la primera IP si hay múltiples
    })

    // Registrar el evento
    let success = false
    try {
      success = await analyticsService.trackEvent({
        userId,
        anonymousId: data.anonymousId,
        eventType: data.eventType,
        pagePath: data.pagePath,
        componentId: data.componentId,
        sessionId: data.sessionId,
        metadata: {
          ...data.metadata,
          ip,
          userAgent: req.headers.get("user-agent") || "unknown",
        },
        clientTimestamp: data.clientTimestamp,
      })

      console.log("✅ Evento registrado correctamente:", {
        eventType: data.eventType,
        success,
      })
    } catch (serviceError) {
      console.error("❌ Error en analyticsService.trackEvent:", serviceError)
      // No lanzamos error para no interrumpir la experiencia del usuario
    }

    if (!success) {
      console.warn("⚠️ No se pudo registrar el evento, pero continuamos sin error")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("❌ Error en track-event:", error)
    // Devolvemos éxito aunque haya error para no interrumpir la experiencia del usuario
    return NextResponse.json({ success: false, error: "Error interno" })
  }
}
