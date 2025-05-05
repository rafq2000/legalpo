import { getFirestore, collection, getDocs } from "firebase/firestore"
import { app } from "./firebase"
import type { ActionLog } from "./logActionEvent"
import { isToday, parseISO } from "date-fns"

const db = getFirestore(app)

export async function getUserActionsToday(uid: string | null): Promise<ActionLog[]> {
  if (!uid) return []

  try {
    const actionsRef = collection(db, "actionLogs")
    const snapshot = await getDocs(actionsRef)
    const actionsToday: ActionLog[] = []

    snapshot.forEach((doc) => {
      const data = doc.data() as ActionLog
      if (data.uid === uid && data.createdAt) {
        const createdAt = parseISO(data.createdAt)
        if (isToday(createdAt)) {
          actionsToday.push(data)
        }
      }
    })

    return actionsToday
  } catch (error) {
    console.error("Error al obtener acciones del usuario:", error)
    return []
  }
}
