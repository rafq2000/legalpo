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

// Función para obtener eventos con paginación
export async function obtenerEventos(
  filtros: FiltrosEventos = {},
  ultimoDoc: QueryDocumentSnapshot<DocumentData> | null = null,
  limite = 50,
): Promise<{ eventos: EventoStats[]; ultimoDoc: QueryDocumentSnapshot<DocumentData> | null }> {
  try {
    let q = query(collection(db, "eventos"), orderBy("timestamp", "desc"), limit(limite))

    // Aplicar filtros
    if (filtros.startDate) {
      q = query(q, where("timestamp", ">=", Timestamp.fromDate(filtros.startDate)))
    }
    if (filtros.endDate) {
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
      const timestamp = data.timestamp?.toDate() || new Date()

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

    return { eventos, ultimoDoc: lastDoc }
  } catch (error) {
    console.error("Error al obtener eventos:", error)
    throw error
  }
}

// Función para obtener eventos por día
export async function obtenerEventosPorDia(filtros: FiltrosEventos = {}, dias = 30): Promise<EventosPorDia[]> {
  try {
    const endDate = filtros.endDate || new Date()
    const startDate = filtros.startDate || new Date(endDate.getTime() - dias * 24 * 60 * 60 * 1000)

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
      collection(db, "eventos"),
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
      if (data.timestamp) {
        const fecha = data.timestamp.toDate().toISOString().split("T")[0]
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
    })

    // Convertir mapa a array
    return Object.values(fechasMap)
  } catch (error) {
    console.error("Error al obtener eventos por día:", error)
    throw error
  }
}

// Función para obtener eventos por tipo
export async function obtenerEventosPorTipo(filtros: FiltrosEventos = {}): Promise<EventosPorTipo[]> {
  try {
    const endDate = filtros.endDate || new Date()
    const startDate = filtros.startDate || new Date(endDate.getTime() - 30 * 24 * 60 * 60 * 1000)

    const q = query(
      collection(db, "eventos"),
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
    throw error
  }
}

// Función para exportar eventos a Excel
export async function exportarEventosExcel(filtros: FiltrosEventos = {}): Promise<Blob> {
  try {
    const eventos: EventoStats[] = []
    let ultimoDoc: QueryDocumentSnapshot<DocumentData> | null = null
    let hayMas = true

    // Obtener todos los eventos en lotes
    while (hayMas) {
      const resultado = await obtenerEventos(filtros, ultimoDoc, 1000)
      eventos.push(...resultado.eventos)
      ultimoDoc = resultado.ultimoDoc

      if (!ultimoDoc || resultado.eventos.length < 1000) {
        hayMas = false
      }
    }

    // Preparar datos para Excel
    const datosExcel = eventos.map((evento) => {
      // Aplanar los datos anidados
      const datosProcesados: Record<string, any> = {
        id: evento.id,
        tipo: evento.tipo,
        fecha: evento.timestamp ? new Date(evento.timestamp).toLocaleString() : "",
        userId: evento.userId || "",
        email: evento.email || "",
      }

      // Añadir campos de datos si existen
      if (evento.datos) {
        Object.entries(evento.datos).forEach(([key, value]) => {
          // Evitar duplicar el email
          if (key !== "email" || !evento.email) {
            datosProcesados[`datos_${key}`] = typeof value === "object" ? JSON.stringify(value) : value
          }
        })
      }

      return datosProcesados
    })

    // Crear libro de Excel
    const libro = XLSX.utils.book_new()
    const hoja = XLSX.utils.json_to_sheet(datosExcel)
    XLSX.utils.book_append_sheet(libro, hoja, "Eventos")

    // Generar archivo
    const excelBuffer = XLSX.write(libro, { bookType: "xlsx", type: "array" })
    return new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" })
  } catch (error) {
    console.error("Error al exportar eventos:", error)
    throw error
  }
}
