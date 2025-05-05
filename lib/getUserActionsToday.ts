import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "./firebase/client"
import { isToday } from "date-fns"

export const getUserActionsToday = async (identifier: string): Promise<any[]> => {
  try {
    // Usar correctamente db como primer argumento de collection()
    const q = query(collection(db, "actionLogs"), where("identifier", "==", identifier))

    const snapshot = await getDocs(q)
    const actionsToday: any[] = []

    snapshot.forEach((doc) => {
      const data = doc.data()
      // Verificar si la acción es de hoy
      if (data.timestamp && isToday(new Date(data.timestamp.toDate()))) {
        actionsToday.push({
          id: doc.id,
          ...data,
        })
      }
    })

    return actionsToday
  } catch (error) {
    console.error("Error al obtener acciones de hoy:", error)
    return []
  }
}
