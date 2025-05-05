import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "./firebase/client"

export const logActionEvent = async (data: any) => {
  try {
    // Usar correctamente db como primer argumento de collection()
    const docRef = await addDoc(collection(db, "actionLogs"), {
      ...data,
      timestamp: serverTimestamp(),
    })
    console.log("Acción registrada correctamente con ID:", docRef.id)
    return docRef.id
  } catch (error) {
    console.error("Error al registrar evento en Firestore:", error)
    return null
  }
}
