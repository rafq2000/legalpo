// utils/firestore-service.ts
import { db } from "./firebaseClient"
import {
  collection,
  addDoc,
  serverTimestamp,
  type Timestamp,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore"

// Interfaz para los eventos
export interface EventoFirestore {
  tipo: string
  datos?: Record<string, any>
  userId?: string
  sessionId?: string
  timestamp?: Timestamp
}

// Función para guardar un evento en Firestore
export async function guardarEvento(
  tipo: string,
  datos: Record<string, any> = {},
  userId?: string,
  sessionId?: string,
): Promise<string> {
  try {
    const evento: EventoFirestore = {
      tipo,
      datos,
      userId,
      sessionId,
      timestamp: serverTimestamp() as Timestamp,
    }

    const docRef = await addDoc(collection(db, "eventos"), evento)
    console.log(`Evento "${tipo}" guardado con ID: ${docRef.id}`)
    return docRef.id
  } catch (error) {
    console.error("Error al guardar evento:", error)
    throw error
  }
}

// Función para obtener eventos por tipo
export async function obtenerEventosPorTipo(tipo: string, limite = 100) {
  try {
    const q = query(collection(db, "eventos"), where("tipo", "==", tipo), orderBy("timestamp", "desc"), limit(limite))

    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error(`Error al obtener eventos de tipo ${tipo}:`, error)
    throw error
  }
}
