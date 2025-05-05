import { getFirestore, collection, addDoc } from "firebase/firestore"
import { app } from "./firebase"

const db = getFirestore(app)

export interface ActionLog {
  identifier: string
  action: string
  route?: string
  createdAt: string
  isAuthenticated: boolean
  metadata?: Record<string, any>
}

export async function logActionEvent(data: Omit<ActionLog, "createdAt">) {
  try {
    const actionsRef = collection(db, "actionLogs") // Ahora usamos db correctamente
    await addDoc(actionsRef, {
      ...data,
      createdAt: new Date().toISOString(),
    })
    console.log("Acción registrada correctamente")
    return true
  } catch (error) {
    console.error("Error al registrar evento en Firestore:", error)
    return false
  }
}
