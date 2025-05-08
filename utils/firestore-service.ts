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
import { sendEmail } from "../lib/email-service"

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
    if (!tipo) {
      throw new Error("El tipo de evento es requerido")
    }

    const eventosRef = collection(db, "eventos")

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
    const eventosRef = collection(db, "eventos")

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
    const eventosRef = collection(db, "eventos")

    // Crear documento de sugerencia
    const sugerenciaDoc = {
      tipo: "sugerencia_usuario",
      mensaje,
      pagina,
      email,
      timestamp: serverTimestamp(),
      createdAt: Timestamp.now(),
    }

    // Guardar en Firestore
    const docRef = await addDoc(eventosRef, sugerenciaDoc)

    console.log(`Sugerencia guardada correctamente con ID: ${docRef.id}`)

    // Enviar notificación por email con manejo de errores mejorado
    try {
      console.log("Intentando enviar email de notificación de sugerencia...")

      const emailResult = await sendEmail({
        subject: `[SUGERENCIA] Nueva sugerencia de usuario en LegalPO - ${new Date().toLocaleDateString()}`,
        html: `
          <h2>Nueva sugerencia recibida</h2>
          <p><strong>Mensaje:</strong> ${mensaje}</p>
          <p><strong>Página:</strong> ${pagina}</p>
          <p><strong>Email del usuario:</strong> ${email || "No proporcionado"}</p>
          <p><strong>ID de la sugerencia:</strong> ${docRef.id}</p>
          <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
        `,
      })

      if (emailResult.success) {
        console.log(`Email de notificación enviado correctamente con ID: ${emailResult.id}`)

        // Registrar el éxito del envío en Firestore
        await addDoc(collection(db, "email_logs"), {
          tipo: "sugerencia_notificacion",
          sugerenciaId: docRef.id,
          emailId: emailResult.id,
          success: true,
          timestamp: serverTimestamp(),
        })
      } else {
        console.error("Error al enviar email de notificación:", emailResult.error)

        // Registrar el error en Firestore para seguimiento
        await addDoc(collection(db, "email_logs"), {
          tipo: "sugerencia_notificacion",
          sugerenciaId: docRef.id,
          error: JSON.stringify(emailResult.error),
          success: false,
          timestamp: serverTimestamp(),
        })
      }
    } catch (emailError) {
      console.error("Excepción al enviar notificación por email:", emailError)

      // Registrar el error en Firestore
      try {
        await addDoc(collection(db, "email_logs"), {
          tipo: "sugerencia_notificacion",
          sugerenciaId: docRef.id,
          error: JSON.stringify(emailError),
          success: false,
          timestamp: serverTimestamp(),
        })
      } catch (logError) {
        console.error("Error al registrar fallo de email:", logError)
      }
    }

    return docRef.id
  } catch (error) {
    console.error("Error al guardar sugerencia en Firestore:", error)
    throw error
  }
}

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
    const preguntasRef = collection(db, "preguntas")

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
export async function obtenerPreguntas(limite = 100) {
  try {
    const q = query(collection(db, "preguntas"), orderBy("timestamp", "desc"), limit(limite))
    const snapshot = await getDocs(q)

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error("Error al obtener preguntas:", error)
    return []
  }
}

// Función para obtener preguntas frecuentes
export async function obtenerPreguntasFrecuentes(limite = 10): Promise<any[]> {
  try {
    const eventosRef = collection(db, "eventos")

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
    const eventosRef = collection(db, "eventos")

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
    const testRef = collection(db, "test_connection")
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
export async function obtenerTodosEventos() {
  try {
    const firestore = db()
    if (!firestore) {
      console.error("Firestore instance is null")
      return []
    }

    const q = query(collection(firestore, "eventos"), orderBy("timestamp", "desc"), limit(100))
    const snapshot = await getDocs(q)

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error("Error al obtener todos los eventos:", error)
    return []
  }
}

// Función para registrar un evento de prueba
export async function registrarEventoPrueba() {
  try {
    const firestore = db()
    if (!firestore) {
      console.error("Firestore instance is null")
      return null
    }

    const docRef = await addDoc(collection(firestore, "eventos"), {
      tipo: "test_event",
      datos: {
        mensaje: "Este es un evento de prueba",
        fecha: new Date().toISOString(),
      },
      timestamp: serverTimestamp(),
    })

    return docRef.id
  } catch (error) {
    console.error("Error al registrar evento de prueba:", error)
    return null
  }
}

// Función para registrar un evento directamente
export async function registrarEvento(tipo: string, datos: any = {}) {
  try {
    const docRef = await addDoc(collection(db, "eventos"), {
      tipo,
      datos,
      timestamp: serverTimestamp(),
    })

    return { success: true, id: docRef.id }
  } catch (error) {
    console.error("Error al registrar evento:", error)
    return { success: false, error }
  }
}

// Función para convertir diferentes formatos de timestamp a Date
export function convertirTimestamp(timestamp: any): Date {
  if (!timestamp) return new Date()

  // Si es un Timestamp de Firestore
  if (timestamp && typeof timestamp.toDate === "function") {
    try {
      return timestamp.toDate()
    } catch (e) {
      return new Date()
    }
  }

  // Si es una cadena ISO
  if (typeof timestamp === "string") {
    return new Date(timestamp)
  }

  // Si ya es un Date
  if (timestamp instanceof Date) {
    return timestamp
  }

  return new Date()
}
