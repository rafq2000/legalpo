"use client"

import { db } from "./firebaseClient"
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  startAfter,
  Timestamp,
  type DocumentData,
  type QueryDocumentSnapshot,
} from "firebase/firestore"
import * as XLSX from "xlsx"

// Interfaces
export interface EventoStats {
  id: string
  tipo: string
  timestamp: Date
  userId?: string
  email?: string
  datos?: any
  [key: string]: any
}

export interface EventosPorDia {
  fecha: string
  total: number
  [key: string]: any
}

export interface EventosPorTipo {
  tipo: string
  total: number
}

export interface FiltrosEventos {
  startDate?: Date
  endDate?: Date
  tipo?: string
  email?: string
}

export interface UsuarioUnico {
  id: string
  email: string
  primeraVisita: Date
  ultimaAccion: Date
  eventos: number
}

export interface PaginaPopular {
  ruta: string
  visitas: number
}

// Función para validar fechas
const isValidDate = (date: any): boolean => {
  if (!date) return false
  const d = new Date(date)
  return !isNaN(d.getTime())
}

// Función para convertir a fecha segura
const safeDate = (date: any): Date => {
  if (!date) return false
  if (date instanceof Date) return isValidDate(date) ? date : new Date()
  try {
    const d = new Date(date)
    return isValidDate(d) ? d : new Date()
  } catch (e) {
    return new Date()
  }
}

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

// Nueva función para obtener eventos por páginas
export async function obtenerEventosPorPaginas({
  desde,
  hasta,
  tipo,
  email,
  lastVisible = null,
}: {
  desde?: Date
  hasta?: Date
  tipo?: string
  email?: string
  lastVisible?: QueryDocumentSnapshot<DocumentData> | null
}) {
  try {
    if (!isFirestoreAvailable()) {
      return { eventos: [], siguienteCursor: null }
    }

    const firestore = db()
    const LOTE = 500
    const filtros = []

    if (desde && hasta) {
      filtros.push(where("timestamp", ">=", Timestamp.fromDate(new Date(desde))))
      filtros.push(where("timestamp", "<=", Timestamp.fromDate(new Date(hasta))))
    }

    if (tipo && tipo !== "todos") {
      filtros.push(where("tipo", "==", tipo))
    }

    if (email) {
      filtros.push(where("datos.email", "==", email))
    }

    const q = query(
      collection(firestore, "eventos"),
      orderBy("timestamp", "desc"),
      ...filtros,
      ...(lastVisible ? [startAfter(lastVisible)] : []),
      limit(LOTE),
    )

    const snapshot = await getDocs(q)

    const eventos = snapshot.docs.map((doc) => {
      const data = doc.data()
      let timestamp: Date

      // Manejar la fecha de manera segura
      if (data.timestamp) {
        if (typeof data.timestamp === "string") {
          timestamp = new Date(data.timestamp)
        } else if (typeof data.timestamp.toDate === "function") {
          try {
            timestamp = data.timestamp.toDate()
          } catch (e) {
            timestamp = new Date()
          }
        } else if (data.timestamp instanceof Date) {
          timestamp = data.timestamp
        } else {
          timestamp = new Date()
        }

        if (!isValidDate(timestamp)) {
          timestamp = new Date()
        }
      } else {
        timestamp = new Date()
      }

      return {
        id: doc.id,
        tipo: data.tipo || "desconocido",
        timestamp,
        userId: data.userId,
        email: data.datos?.email || data.email,
        datos: data.datos,
        ...data,
      }
    })

    const siguienteCursor = snapshot.docs[snapshot.docs.length - 1] || null

    return { eventos, siguienteCursor }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error al obtener eventos por páginas:", error)
    }
    return { eventos: [], siguienteCursor: null }
  }
}

// Mantener la función original obtenerEventos para compatibilidad
export async function obtenerEventos(
  filtros: FiltrosEventos = {},
  ultimoDoc: QueryDocumentSnapshot<DocumentData> | null = null,
  tamanoLote = 500,
): Promise<{ eventos: EventoStats[]; ultimoDoc: QueryDocumentSnapshot<DocumentData> | null; hayMas: boolean }> {
  try {
    if (!isFirestoreAvailable()) {
      return { eventos: [], ultimoDoc: null, hayMas: false }
    }

    const firestore = db()
    let q = query(collection(firestore, "eventos"), orderBy("timestamp", "desc"), limit(tamanoLote))

    // Aplicar filtros con fechas validadas
    if (filtros.startDate && isValidDate(filtros.startDate)) {
      q = query(q, where("timestamp", ">=", Timestamp.fromDate(filtros.startDate)))
    }
    if (filtros.endDate && isValidDate(filtros.endDate)) {
      q = query(q, where("timestamp", "<=", Timestamp.fromDate(filtros.endDate)))
    }
    if (filtros.tipo) {
      q = query(q, where("tipo", "==", filtros.tipo))
    }
    if (filtros.email) {
      q = query(q, where("datos.email", "==", filtros.email))
    }

    // Aplicar paginación
    if (ultimoDoc) {
      q = query(q, startAfter(ultimoDoc))
    }

    const querySnapshot = await getDocs(q)
    const eventos: EventoStats[] = []
    let lastDoc: QueryDocumentSnapshot<DocumentData> | null = null

    querySnapshot.forEach((doc) => {
      lastDoc = doc
      const data = doc.data()
      let timestamp: Date

      // Manejar la fecha de manera segura - Mejorado para manejar diferentes formatos
      if (data.timestamp) {
        if (typeof data.timestamp === "string") {
          // Si es string, convertir a Date
          timestamp = new Date(data.timestamp)
        } else if (typeof data.timestamp.toDate === "function") {
          // Si es Timestamp de Firestore
          try {
            timestamp = data.timestamp.toDate()
          } catch (e) {
            timestamp = new Date()
          }
        } else if (data.timestamp instanceof Date) {
          // Si ya es Date
          timestamp = data.timestamp
        } else {
          timestamp = new Date()
        }

        // Verificar que la fecha sea válida
        if (!isValidDate(timestamp)) {
          timestamp = new Date()
        }
      } else {
        timestamp = new Date()
      }

      eventos.push({
        id: doc.id,
        tipo: data.tipo || "desconocido",
        timestamp,
        userId: data.userId,
        email: data.datos?.email || data.email,
        datos: data.datos,
        ...data,
      })
    })

    // Determinar si hay más documentos para cargar
    const hayMas = querySnapshot.size === tamanoLote

    return { eventos, ultimoDoc: lastDoc, hayMas }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error al obtener eventos:", error)
    }
    return { eventos: [], ultimoDoc: null, hayMas: false }
  }
}

// Función para obtener eventos por día
export async function obtenerEventosPorDia(filtros: FiltrosEventos = {}, dias = 30): Promise<EventosPorDia[]> {
  try {
    if (!isFirestoreAvailable()) {
      return []
    }

    const firestore = db()
    const endDate = filtros.endDate && isValidDate(filtros.endDate) ? filtros.endDate : new Date()
    const startDate =
      filtros.startDate && isValidDate(filtros.startDate)
        ? filtros.startDate
        : new Date(endDate.getTime() - dias * 24 * 60 * 60 * 1000)

    // Crear mapa de fechas para inicializar todos los días
    const fechasMap: Record<string, EventosPorDia> = {}
    const currentDate = new Date(startDate)

    while (currentDate <= endDate) {
      const fechaStr = currentDate.toISOString().split("T")[0]
      fechasMap[fechaStr] = { fecha: fechaStr, total: 0 }
      currentDate.setDate(currentDate.getDate() + 1)
    }

    // Obtener todos los eventos en el rango de fechas
    let q = query(
      collection(firestore, "eventos"),
      where("timestamp", ">=", Timestamp.fromDate(startDate)),
      where("timestamp", "<=", Timestamp.fromDate(endDate)),
      orderBy("timestamp", "asc"),
    )

    // Aplicar filtros adicionales
    if (filtros.tipo) {
      q = query(q, where("tipo", "==", filtros.tipo))
    }

    const querySnapshot = await getDocs(q)

    // Agrupar por día
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      if (data.timestamp && typeof data.timestamp.toDate === "function") {
        try {
          const timestamp = data.timestamp.toDate()
          if (isValidDate(timestamp)) {
            const fecha = timestamp.toISOString().split("T")[0]
            if (fechasMap[fecha]) {
              fechasMap[fecha].total += 1

              // Agrupar también por tipo
              const tipo = data.tipo || "desconocido"
              if (!fechasMap[fecha][tipo]) {
                fechasMap[fecha][tipo] = 0
              }
              fechasMap[fecha][tipo] += 1
            }
          }
        } catch (e) {
          console.error("Error al procesar timestamp:", e)
        }
      }
    })

    // Convertir mapa a array
    return Object.values(fechasMap)
  } catch (error) {
    console.error("Error al obtener eventos por día:", error)
    return []
  }
}

// Función para obtener eventos por tipo
export async function obtenerEventosPorTipo(filtros: FiltrosEventos = {}): Promise<EventosPorTipo[]> {
  try {
    if (!isFirestoreAvailable()) {
      return []
    }

    const firestore = db()
    const endDate = filtros.endDate && isValidDate(filtros.endDate) ? filtros.endDate : new Date()
    const startDate =
      filtros.startDate && isValidDate(filtros.startDate)
        ? filtros.startDate
        : new Date(endDate.getTime() - 30 * 24 * 60 * 60 * 1000)

    const q = query(
      collection(firestore, "eventos"),
      where("timestamp", ">=", Timestamp.fromDate(startDate)),
      where("timestamp", "<=", Timestamp.fromDate(endDate)),
    )

    const querySnapshot = await getDocs(q)

    // Agrupar por tipo
    const tiposMap: Record<string, number> = {}

    querySnapshot.forEach((doc) => {
      const data = doc.data()
      const tipo = data.tipo || "desconocido"

      if (!tiposMap[tipo]) {
        tiposMap[tipo] = 0
      }
      tiposMap[tipo] += 1
    })

    // Convertir mapa a array
    return Object.entries(tiposMap).map(([tipo, total]) => ({
      tipo,
      total,
    }))
  } catch (error) {
    console.error("Error al obtener eventos por tipo:", error)
    return []
  }
}

// Función para obtener usuarios únicos
export async function obtenerUsuariosUnicos(filtros: FiltrosEventos = {}): Promise<UsuarioUnico[]> {
  try {
    if (!isFirestoreAvailable()) {
      return []
    }

    const firestore = db()
    const endDate = filtros.endDate && isValidDate(filtros.endDate) ? filtros.endDate : new Date()
    const startDate =
      filtros.startDate && isValidDate(filtros.startDate)
        ? filtros.startDate
        : new Date(endDate.getTime() - 30 * 24 * 60 * 60 * 1000)

    const q = query(
      collection(firestore, "eventos"),
      where("timestamp", ">=", Timestamp.fromDate(startDate)),
      where("timestamp", "<=", Timestamp.fromDate(endDate)),
    )

    const querySnapshot = await getDocs(q)

    // Agrupar por usuario
    const usuariosMap: Record<string, UsuarioUnico> = {}

    querySnapshot.forEach((doc) => {
      const data = doc.data()
      const email = data.datos?.email || data.email

      if (email && typeof email === "string") {
        if (!usuariosMap[email]) {
          usuariosMap[email] = {
            id: data.userId || doc.id,
            email,
            primeraVisita: safeDate(data.timestamp?.toDate()),
            ultimaAccion: safeDate(data.timestamp?.toDate()),
            eventos: 0,
          }
        }

        // Actualizar primera y última visita
        const timestamp = safeDate(data.timestamp?.toDate())
        if (timestamp < usuariosMap[email].primeraVisita) {
          usuariosMap[email].primeraVisita = timestamp
        }
        if (timestamp > usuariosMap[email].ultimaAccion) {
          usuariosMap[email].ultimaAccion = timestamp
        }

        // Incrementar contador de eventos
        usuariosMap[email].eventos += 1
      }
    })

    // Convertir mapa a array y ordenar por última acción
    return Object.values(usuariosMap).sort((a, b) => b.ultimaAccion.getTime() - a.ultimaAccion.getTime())
  } catch (error) {
    console.error("Error al obtener usuarios únicos:", error)
    return []
  }
}

// Función para obtener páginas populares
export async function obtenerPaginasPopulares(filtros: FiltrosEventos = {}): Promise<PaginaPopular[]> {
  try {
    if (!isFirestoreAvailable()) {
      return []
    }

    const firestore = db()
    const endDate = filtros.endDate && isValidDate(filtros.endDate) ? filtros.endDate : new Date()
    const startDate =
      filtros.startDate && isValidDate(filtros.startDate)
        ? filtros.startDate
        : new Date(endDate.getTime() - 30 * 24 * 60 * 60 * 1000)

    const q = query(
      collection(firestore, "eventos"),
      where("timestamp", ">=", Timestamp.fromDate(startDate)),
      where("timestamp", "<=", Timestamp.fromDate(endDate)),
      where("tipo", "==", "page_view"),
    )

    const querySnapshot = await getDocs(q)

    // Agrupar por ruta
    const rutasMap: Record<string, number> = {}

    querySnapshot.forEach((doc) => {
      const data = doc.data()
      const ruta = data.datos?.path || data.path || "/"

      if (!rutasMap[ruta]) {
        rutasMap[ruta] = 0
      }
      rutasMap[ruta] += 1
    })

    // Convertir mapa a array y ordenar por visitas
    return Object.entries(rutasMap)
      .map(([ruta, visitas]) => ({
        ruta,
        visitas,
      }))
      .sort((a, b) => b.visitas - a.visitas)
  } catch (error) {
    console.error("Error al obtener páginas populares:", error)
    return []
  }
}

// Función para obtener contactos de WhatsApp
export async function obtenerContactosWhatsApp(filtros: FiltrosEventos = {}): Promise<number> {
  try {
    if (!isFirestoreAvailable()) {
      return 0
    }

    const firestore = db()
    const endDate = filtros.endDate && isValidDate(filtros.endDate) ? filtros.endDate : new Date()
    const startDate =
      filtros.startDate && isValidDate(filtros.startDate)
        ? filtros.startDate
        : new Date(endDate.getTime() - 30 * 24 * 60 * 60 * 1000)

    const q = query(
      collection(firestore, "eventos"),
      where("timestamp", ">=", Timestamp.fromDate(startDate)),
      where("timestamp", "<=", Timestamp.fromDate(endDate)),
      where("tipo", "==", "whatsapp_contacto"),
    )

    const querySnapshot = await getDocs(q)
    return querySnapshot.size
  } catch (error) {
    console.error("Error al obtener contactos de WhatsApp:", error)
    return 0
  }
}

// Función para exportar correos a Excel
export async function exportarCorreosExcel(filtros: FiltrosEventos = {}): Promise<Blob> {
  try {
    if (!isFirestoreAvailable()) {
      throw new Error("Firestore no está disponible")
    }

    const usuarios = await obtenerUsuariosUnicos(filtros)

    // Preparar datos para Excel
    const datosExcel = usuarios.map((usuario) => ({
      email: usuario.email,
      primeraVisita: isValidDate(usuario.primeraVisita)
        ? new Date(usuario.primeraVisita).toLocaleString()
        : "Fecha inválida",
      ultimaAccion: isValidDate(usuario.ultimaAccion)
        ? new Date(usuario.ultimaAccion).toLocaleString()
        : "Fecha inválida",
      eventos: usuario.eventos,
    }))

    // Crear libro de Excel
    const libro = XLSX.utils.book_new()
    const hoja = XLSX.utils.json_to_sheet(datosExcel)
    XLSX.utils.book_append_sheet(libro, hoja, "Correos")

    // Generar archivo
    const excelBuffer = XLSX.write(libro, { bookType: "xlsx", type: "array" })
    return new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" })
  } catch (error) {
    console.error("Error al exportar correos:", error)
    throw error
  }
}
