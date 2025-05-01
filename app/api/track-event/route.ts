import { NextResponse } from "next/server"
import { db } from "@/utils/firebaseClient"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { tipo, userId, datos } = data

    if (!tipo) {
      return NextResponse.json({ error: "Tipo de evento requerido" }, { status: 400 })
    }

    const firestore = db()
    if (!firestore) {
      return NextResponse.json({ error: "Firestore no disponible" }, { status: 500 })
    }

    // Crear documento de evento
    const eventoRef = await addDoc(collection(firestore, "eventos"), {
      tipo,
      userId: userId || null,
      datos: datos || {},
      timestamp: serverTimestamp(),
    })

    return NextResponse.json({
      success: true,
      eventId: eventoRef.id,
      message: "Evento registrado correctamente",
    })
  } catch (error) {
    console.error("Error al registrar evento:", error)
    return NextResponse.json({ error: "Error al registrar evento", details: (error as Error).message }, { status: 500 })
  }
}
