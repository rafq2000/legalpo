import { db } from "./firebaseClient"
import {
  collection,
  addDoc,
  serverTimestamp,
  Timestamp,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from "firebase/firestore"

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

// Función para guardar una pregunta de usuario
export async function guardarPreguntaUsuario({
  pregunta,
  tema,
  pagina,
  email,
}: {
  pregunta: string
  tema: string
  pagina: string
  email: string | null
}): Promise<string> {
  try {
    if (!isFirestoreAvailable()) {
      console.error("Firestore no está disponible para guardar pregunta")
      throw new Error("Firestore no está disponible")
    }

    const firestore = db()
    const eventosRef = collection(firestore, "eventos")

    // Crear documento de pregunta
    const preguntaDoc = {
      tipo: "pregunta_usuario",
      pregunta,
      tema,
      pagina,
      email,
      timestamp: serverTimestamp(),
    }

    // Guardar en Firestore
    const docRef = await addDoc(eventosRef, preguntaDoc)
    return docRef.id
  } catch (error) {
    console.error("Error al guardar pregunta en Firestore:", error)
    throw error
  }
}

// Función para guardar una sugerencia de usuario
export async function guardarSugerenciaUsuario({
  mensaje,
  pagina,
  email,
}: {
  mensaje: string
  pagina: string
  email: string | null
}): Promise<string> {
  try {
    if (!isFirestoreAvailable()) {
      console.error("Firestore no está disponible para guardar sugerencia")
      throw new Error("Firestore no está disponible")
    }

    const firestore = db()
    const eventosRef = collection(firestore, "eventos")

    // Crear documento de sugerencia
    const sugerenciaDoc = {
      tipo: "sugerencia_usuario",
      mensaje,
      pagina,
      email,
      timestamp: serverTimestamp(),
    }

    // Guardar en Firestore
    const docRef = await addDoc(eventosRef, sugerenciaDoc)
    return docRef.id
  } catch (error) {
    console.error("Error al guardar sugerencia en Firestore:", error)
    throw error
  }
}

// Función para obtener preguntas frecuentes
export async function obtenerPreguntasFrecuentes(limite = 10): Promise<any[]> {
  try {
    if (!isFirestoreAvailable()) {
      return []
    }

    const firestore = db()
    const eventosRef = collection(firestore, "eventos")

    // Consultar preguntas de usuario
    const q = query(eventosRef, where("tipo", "==", "pregunta_usuario"), orderBy("timestamp", "desc"), limit(limite))

    const querySnapshot = await getDocs(q)
    const preguntas: any[] = []

    querySnapshot.forEach((doc) => {
      const data = doc.data()
      preguntas.push({
        id: doc.id,
        pregunta: data.pregunta,
        tema: data.tema,
        pagina: data.pagina,
        email: data.email,
        timestamp: data.timestamp?.toDate() || new Date(),
      })
    })

    return preguntas
  } catch (error) {
    console.error("Error al obtener preguntas frecuentes:", error)
    return []
  }
}

// Función para obtener sugerencias
export async function obtenerSugerencias(limite = 50): Promise<any[]> {
  try {
    if (!isFirestoreAvailable()) {
      return []
    }

    const firestore = db()
    const eventosRef = collection(firestore, "eventos")

    // Consultar sugerencias de usuario
    const q = query(eventosRef, where("tipo", "==", "sugerencia_usuario"), orderBy("timestamp", "desc"), limit(limite))

    const querySnapshot = await getDocs(q)
    const sugerencias: any[] = []

    querySnapshot.forEach((doc) => {
      const data = doc.data()
      sugerencias.push({
        id: doc.id,
        mensaje: data.mensaje,
        pagina: data.pagina,
        email: data.email,
        timestamp: data.timestamp?.toDate() || new Date(),
      })
    })

    return sugerencias
  } catch (error) {
    console.error("Error al obtener sugerencias:", error)
    return []
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
