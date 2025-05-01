import { db } from "@/utils/firebaseClient"
import { addDoc, collection } from "firebase/firestore"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { tipo, datos } = body

    // Add a document to Firestore
    const docRef = await addDoc(collection(db, "eventos"), {
      tipo,
      datos,
      fecha: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Evento registrado correctamente",
      id: docRef.id,
    })
  } catch (error: any) {
    console.error("Error al guardar evento:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    )
  }
}
