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
  type DocumentData,
} from "firebase/firestore"

// Función para verificar si Firestore está disponible
const isFirestoreAvailable = () => {
  try {
    const firestore = db()
    return !!firestore
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Firestore no está disponible:", error)
    }
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
      if (process.env.NODE_ENV !== "production") {
        console.error("Firestore no está disponible para guardar evento")
      }
      throw new Error("Firestore no está disponible")
    }

    if (!tipo) {
      throw new Error("El tipo de evento es requerido")
    }

    const firestore = db()
    if (!firestore) {
      throw new Error("No se pudo obtener la instancia de Firestore")
    }

    const eventosRef = collection(firestore, "eventos")

    // Crear documento de evento
    const eventoDoc = {
      tipo,
      datos,
      userId,
      sessionId,
      timestamp: serverTimestamp(), // Usar serverTimestamp para la marca de tiempo del servidor
      createdAt: Timestamp.now(), // Usar Timestamp.now() para el tiempo de creación local
    }

    // Guardar en Firestore
    const docRef = await addDoc(eventosRef, eventoDoc)

    if (process.env.NODE_ENV !== "production") {
      console.log(`Evento "${tipo}" guardado correctamente con ID: ${docRef.id}`)
    }

    return docRef.id
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error al guardar evento en Firestore:", error)
    }
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
      if (process.env.NODE_ENV !== "production") {
        console.error("Firestore no está disponible para guardar pregunta")
      }
      throw new Error("Firestore no está disponible")
    }

    const firestore = db()
    if (!firestore) {
      throw new Error("No se pudo obtener la instancia de Firestore")
    }

    const eventosRef = collection(firestore, "eventos")

    // Crear documento de pregunta
    const preguntaDoc = {
      tipo: "pregunta_usuario",
      pregunta,
      tema,
      pagina,
      email,
      timestamp: serverTimestamp(), // Usar serverTimestamp para la marca de tiempo del servidor
      createdAt: Timestamp.now(), // Agregar createdAt para tener una referencia local
    }

    // Guardar en Firestore
    const docRef = await addDoc(eventosRef, preguntaDoc)

    if (process.env.NODE_ENV !== "production") {
      console.log(`Pregunta guardada correctamente con ID: ${docRef.id}`)
    }

    return docRef.id
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error al guardar pregunta en Firestore:", error)
    }
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
      if (process.env.NODE_ENV !== "production") {
        console.error("Firestore no está disponible para guardar sugerencia")
      }
      throw new Error("Firestore no está disponible")
    }

    const firestore = db()
    if (!firestore) {
      throw new Error("No se pudo obtener la instancia de Firestore")
    }

    const eventosRef = collection(firestore, "eventos")

    // Crear documento de sugerencia
    const sugerenciaDoc = {
      tipo: "sugerencia_usuario",
      mensaje,
      pagina,
      email,
      timestamp: serverTimestamp(), // Usar serverTimestamp para la marca de tiempo del servidor
      createdAt: Timestamp.now(), // Agregar createdAt para tener una referencia local
    }

    // Guardar en Firestore
    const docRef = await addDoc(eventosRef, sugerenciaDoc)

    if (process.env.NODE_ENV !== "production") {
      console.log(`Sugerencia guardada correctamente con ID: ${docRef.id}`)
    }

    return docRef.id
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error al guardar sugerencia en Firestore:", error)
    }
    throw error
  }
}

// Add the new guardarPreguntaUsuario function after the existing functions

// Función para guardar una pregunta de usuario
export async function guardarPreguntaUsuario2({
  email,
  tema,
  pregunta,
  sessionId,
}: {
  email: string | null
  tema: string
  pregunta: string
  sessionId?: string
}): Promise<string | null> {
  try {
    if (!isFirestoreAvailable()) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Firestore no está disponible para guardar pregunta")
      }
      throw new Error("Firestore no está disponible")
    }

    const firestore = db()
    if (!firestore) {
      throw new Error("No se pudo obtener la instancia de Firestore")
    }

    const preguntasRef = collection(firestore, "preguntas")

    // Crear documento de pregunta
    const preguntaDoc = {
      email,
      tema,
      pregunta,
      sessionId: sessionId || null,
      timestamp: serverTimestamp(),
      createdAt: Timestamp.now(), // Agregar createdAt para tener una referencia local
    }

    // Guardar en Firestore
    const docRef = await addDoc(preguntasRef, preguntaDoc)

    if (process.env.NODE_ENV !== "production") {
      console.log(`Pregunta guardada correctamente con ID: ${docRef.id}`)
    }

    return docRef.id
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error al guardar pregunta en Firestore:", error)
    }
    return null
  }
}

// Función para obtener preguntas de usuarios
export async function obtenerPreguntas(limite = 100): Promise<any[]> {
  try {
    if (!isFirestoreAvailable()) {
      return []
    }

    const firestore = db()
    if (!firestore) {
      throw new Error("No se pudo obtener la instancia de Firestore")
    }

    const preguntasRef = collection(firestore, "preguntas")

    // Consultar preguntas ordenadas por fecha
    const q = query(preguntasRef, orderBy("timestamp", "desc"), limit(limite))

    const querySnapshot = await getDocs(q)
    const preguntas: any[] = []

    querySnapshot.forEach((doc) => {
      const data = doc.data()
      preguntas.push({
        id: doc.id,
        email: data.email,
        tema: data.tema,
        pregunta: data.pregunta,
        timestamp: data.timestamp?.toDate() || new Date(),
        sessionId: data.sessionId,
      })
    })

    return preguntas
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error al obtener preguntas:", error)
    }
    return []
  }
}

// Función para obtener preguntas frecuentes
export async function obtenerPreguntasFrecuentes(limite = 10): Promise<any[]> {
  try {
    if (!isFirestoreAvailable()) {
      return []
    }

    const firestore = db()
    if (!firestore) {
      throw new Error("No se pudo obtener la instancia de Firestore")
    }

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
    if (process.env.NODE_ENV !== "production") {
      console.error("Error al obtener preguntas frecuentes:", error)
    }
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
    if (!firestore) {
      throw new Error("No se pudo obtener la instancia de Firestore")
    }

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
    if (process.env.NODE_ENV !== "production") {
      console.error("Error al obtener sugerencias:", error)
    }
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
    if (!firestore) {
      throw new Error("No se pudo obtener la instancia de Firestore")
    }

    const testRef = collection(firestore, "test_connection")
    await addDoc(testRef, {
      test: true,
      timestamp: serverTimestamp(),
      createdAt: Timestamp.now(),
    })

    if (process.env.NODE_ENV !== "production") {
      console.log("Conexión a Firestore verificada correctamente")
    }

    return true
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error al verificar conexión a Firestore:", error)
    }
    return false
  }
}

// Función para obtener todos los eventos sin límite
export async function obtenerTodosEventos(): Promise<DocumentData[]> {
  try {
    if (!isFirestoreAvailable()) {
      return []
    }

    const firestore = db()
    if (!firestore) {
      throw new Error("No se pudo obtener la instancia de Firestore")
    }

    const eventosRef = collection(firestore, "eventos")

    // Consultar todos los eventos sin límite práctico
    const q = query(eventosRef, orderBy("timestamp", "desc"), limit(1000000))

    const querySnapshot = await getDocs(q)
    const eventos: DocumentData[] = []

    querySnapshot.forEach((doc) => {
      eventos.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    if (process.env.NODE_ENV !== "production") {
      console.log(`Se obtuvieron ${eventos.length} eventos de Firestore`)
    }

    return eventos
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error al obtener todos los eventos:", error)
    }
    return []
  }
}

// Función para registrar un evento de prueba
export async function registrarEventoPrueba(): Promise<string | null> {
  try {
    const firestore = db()
    if (!firestore) {
      throw new Error("No se pudo obtener la instancia de Firestore")
    }

    const eventosRef = collection(firestore, "eventos")

    const docRef = await addDoc(eventosRef, {
      tipo: "test_event",
      timestamp: serverTimestamp(),
      createdAt: Timestamp.now(),
      email: "test@legalpo.cl",
      name: "Prueba",
      datos: {
        origen: "Botón de prueba",
        fecha: new Date().toISOString(),
      },
    })

    if (process.env.NODE_ENV !== "production") {
      console.log(`Evento de prueba registrado con ID: ${docRef.id}`)
    }

    return docRef.id
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error al registrar evento de prueba:", error)
    }
    return null
  }
}
