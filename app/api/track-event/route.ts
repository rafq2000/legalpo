import { NextResponse } from "next/server"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/utils/firebaseClient"
import { adminDb } from "@/utils/firebaseAdmin"

// Especificar runtime nodejs para Firebase
export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    console.log("📩 API track-event llamada")

    const data = await request.json()
    const { tipo, userId, datos } = data

    console.log("📝 Datos recibidos:", { tipo, userId, datos })

    if (!tipo) {
      console.error("❌ Error: Tipo de evento requerido")
      return NextResponse.json({ error: "Tipo de evento requerido" }, { status: 400 })
    }

    // Intentar usar Firebase Admin primero (más seguro en el servidor)
    if (adminDb) {
      console.log("🔥 Usando Firebase Admin SDK")

      try {
        const eventoRef = await adminDb.collection("eventos").add({
          tipo,
          userId: userId || null,
          datos: datos || {},
          timestamp: adminDb.FieldValue.serverTimestamp(),
          createdAt: new Date().toISOString(), // Para compatibilidad
        })

        console.log("✅ Evento registrado con Firebase Admin:", eventoRef.id)

        return NextResponse.json({
          success: true,
          eventId: eventoRef.id,
          method: "admin",
          message: "Evento registrado correctamente con Firebase Admin",
        })
      } catch (adminError) {
        console.error("❌ Error con Firebase Admin:", adminError)
        // Continuar con el cliente si falla Admin
      }
    }

    // Fallback al cliente de Firebase
    console.log("🔄 Fallback a Firebase Client SDK")

    // Verificar que db esté disponible
    if (!db) {
      console.error("❌ Error: Firestore no disponible")
      return NextResponse.json({ error: "Firestore no disponible" }, { status: 500 })
    }

    // Crear documento de evento
    const eventoRef = await addDoc(collection(db, "eventos"), {
      tipo,
      userId: userId || null,
      datos: datos || {},
      timestamp: serverTimestamp(),
    })

    console.log("✅ Evento registrado con Firebase Client:", eventoRef.id)

    return NextResponse.json({
      success: true,
      eventId: eventoRef.id,
      method: "client",
      message: "Evento registrado correctamente con Firebase Client",
    })
  } catch (error) {
    console.error("❌ Error al registrar evento:", error)
    return NextResponse.json(
      {
        error: "Error al registrar evento",
        details: (error as Error).message,
      },
      { status: 500 },
    )
  }
}
