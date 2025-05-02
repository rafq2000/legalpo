import { NextResponse } from "next/server"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/utils/firebaseClient"

// Specify nodejs runtime for Firebase compatibility
export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    // Debug logging
    console.log("Firebase event API called")

    const body = await request.json()
    const { tipo, datos } = body

    if (!tipo) {
      return NextResponse.json(
        {
          success: false,
          error: "Event type is required",
        },
        { status: 400 },
      )
    }

    // Add a document to Firestore with serverTimestamp
    const docRef = await addDoc(collection(db, "eventos"), {
      tipo,
      datos: datos || {},
      timestamp: serverTimestamp(), // Use serverTimestamp instead of client-side timestamp
    })

    console.log(`✅ Event registered successfully: ${tipo}, ID: ${docRef.id}`)

    return NextResponse.json({
      success: true,
      message: "Event registered successfully",
      id: docRef.id,
    })
  } catch (error: any) {
    console.error("Error saving event:", error)
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
      },
      { status: 500 },
    )
  }
}
