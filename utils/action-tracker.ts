import { db } from "@/lib/firebase/client"
import { collection, addDoc } from "firebase/firestore"

export const trackAction = async (actionType: string, userData: Record<string, any> = {}) => {
  try {
    // Intentar guardar en Firestore
    await addDoc(collection(db, "userActions"), {
      actionType,
      ...userData,
      timestamp: new Date().toISOString(),
    })
    return true
  } catch (error) {
    console.error("Error al registrar acción en Firestore:", error)

    // Usar localStorage como fallback
    try {
      if (typeof window !== "undefined") {
        const localActions = JSON.parse(localStorage.getItem("localActions") || "[]")
        localActions.push({
          actionType,
          ...userData,
          timestamp: new Date().toISOString(),
        })
        localStorage.setItem("localActions", JSON.stringify(localActions))
      }
    } catch (localError) {
      console.error("Error al usar almacenamiento local:", localError)
    }

    return false
  }
}

export const getLocalActions = () => {
  try {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("localActions") || "[]")
    }
    return []
  } catch (error) {
    console.error("Error al obtener acciones locales:", error)
    return []
  }
}

export const syncLocalActions = async () => {
  try {
    if (typeof window !== "undefined") {
      const localActions = getLocalActions()

      if (localActions.length === 0) return

      // Intentar sincronizar con Firestore
      for (const action of localActions) {
        try {
          await addDoc(collection(db, "userActions"), action)
        } catch (error) {
          console.error("Error al sincronizar acción:", error)
        }
      }

      // Limpiar acciones locales
      localStorage.setItem("localActions", "[]")
    }
  } catch (error) {
    console.error("Error al sincronizar acciones locales:", error)
  }
}
