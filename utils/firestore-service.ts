import { db } from "./firebaseClient"
import { collection, addDoc, serverTimestamp, Timestamp } from "firebase/firestore"

// Función para verificar si Firestore está disponible
const isFirestoreAvailable = () => {
  try {
    const firestore = db()
    return !!firestore
  } catch (error) {
    console.error("Firestore no está disponible:", error)
    return false
  }
}

// Función para guardar un evento en Firestore
export async function guardarEvento(
  tipo: string,
  datos: Record<string, any> = {},
  userId?: string,
  sessionId?: string,
): Promise<string> {
  try {
    if (!isFirestoreAvailable()) {
      console.error("Firestore no está disponible para guardar evento")
      throw new Error("Firestore no está disponible")
    }

    if (!tipo) {
      throw new Error("El tipo de evento es requerido")
    }

    const firestore = db()
    const eventosRef = collection(firestore, "eventos")

    // Crear documento de evento
    const eventoDoc = {
      tipo,
      datos,
      userId,
      sessionId,
      timestamp: serverTimestamp(),
      createdAt: Timestamp.now(),
    }

    // Guardar en Firestore
    const docRef = await addDoc(eventosRef, eventoDoc)
    return docRef.id
  } catch (error) {
    console.error("Error al guardar evento en Firestore:", error)
    throw error
  }
}

// Función para verificar la conexión a Firestore
export async function verificarConexionFirestore(): Promise<boolean> {
  try {
    if (!isFirestoreAvailable()) {
      return false
    }

    const firestore = db()
    const testRef = collection(firestore, "test_connection")
    await addDoc(testRef, {
      test: true,
      timestamp: serverTimestamp(),
    })
    return true
  } catch (error) {
    console.error("Error al verificar conexión a Firestore:", error)
    return false
  }
}
