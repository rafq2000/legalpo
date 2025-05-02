import { NextResponse } from "next/server"
import { adminDb } from "@/utils/firebaseAdmin"
import { FieldValue } from "firebase-admin/firestore"

// Especificar runtime nodejs para Firebase Admin
export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    // Debug logging
    console.log("🔥 Firebase event API called")

    const body = await request.json()
    const { tipo, datos } = body

    if (!tipo) {
      console.error("❌ Error: Event type is required")
      return NextResponse.json(
        {
          success: false,
          error: "Event type is required",
        },
        { status: 400 },
      )
    }

    // Verificar que adminDb esté disponible
    if (!adminDb) {
      console.error("❌ Error: Firebase Admin SDK no está inicializado correctamente")

      // Verificar variables de entorno críticas
      const envVars = {
        FIREBASE_PROJECT_ID: !!process.env.FIREBASE_PROJECT_ID,
        FIREBASE_CLIENT_EMAIL: !!process.env.FIREBASE_CLIENT_EMAIL,
        FIREBASE_PRIVATE_KEY: !!process.env.FIREBASE_PRIVATE_KEY,
      }

      console.error("Variables de entorno disponibles:", envVars)

      return NextResponse.json(
        {
          success: false,
          error: "Firebase Admin SDK no está disponible",
          details: "Verifica las variables de entorno en el servidor",
          envCheck: envVars,
        },
        { status: 500 },
      )
    }

    // Crear el documento de evento
    const evento = {
      tipo,
      datos: datos || {},
      timestamp: FieldValue.serverTimestamp(), // Usar serverTimestamp de Admin SDK
      createdAt: new Date().toISOString(), // Fecha ISO para compatibilidad
    }

    console.log("📝 Guardando evento:", { tipo, timestamp: new Date().toISOString() })

    // Agregar documento a Firestore usando Admin SDK
    const docRef = await adminDb.collection("eventos").add(evento)

    console.log(`✅ Event registered successfully: ${tipo}, ID: ${docRef.id}`)

    return NextResponse.json({
      success: true,
      message: "Event registered successfully",
      id: docRef.id,
    })
  } catch (error: any) {
    console.error("❌ Error saving event:", error)
    // Detailed error logging for debugging
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    })

    return NextResponse.json(
      {
        success: false,
        error: error.message || "Unknown error",
        stack: process.env.NODE_ENV !== "production" ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}
