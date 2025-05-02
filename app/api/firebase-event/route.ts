import { NextResponse } from "next/server"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { getFirestoreInstance } from "@/utils/firebaseClient"

// Set the runtime to nodejs instead of edge
export const runtime = "nodejs" // This is important for Firebase to work properly

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { tipo, datos } = body

    // Get Firestore instance
    const db = getFirestoreInstance()

    // Debug logging
    console.log("Firestore instance type:", typeof db)
    console.log("Firebase config available:", !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY)

    if (!db) {
      console.error("Failed to initialize Firestore")
      return NextResponse.json({ status: "error", message: "Failed to initialize Firestore" }, { status: 500 })
    }

    // Create the event object
    const evento = {
      tipo,
      datos: datos || {},
      timestamp: Timestamp.now(),
    }

    // Add document to Firestore
    const docRef = await addDoc(collection(db, "eventos"), evento)

    console.log(`Event registered successfully: ${tipo}, ID: ${docRef.id}`)

    return NextResponse.json({
      status: "ok",
      message: "Event registered successfully",
      id: docRef.id,
    })
  } catch (error: any) {
    console.error("Error registering event in Firestore:", error)
    return NextResponse.json(
      {
        status: "error",
        message: error.message || "Unknown error",
        stack: process.env.NODE_ENV !== "production" ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}
