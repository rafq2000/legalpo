import { getFirestore, collection, addDoc } from "firebase/firestore"
import { app } from "./firebase"

const db = getFirestore(app)

export interface ActionLog {
  uid?: string | null
  action: string
  route?: string
  createdAt: string
  metadata?: Record<string, any>
}

export async function logActionEvent(data: Omit<ActionLog, "createdAt">) {
  try {
    const actionsRef = collection(db, "actionLogs")
    await addDoc(actionsRef, {
      ...data,
      createdAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error al registrar evento en Firestore:", error)
  }
}
