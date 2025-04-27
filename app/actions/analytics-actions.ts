"use server"

import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Faltan las variables de entorno SUPABASE_URL o SUPABASE_SERVICE_KEY.")
}

const supabase = createClient(supabaseUrl, supabaseKey)

// Definir la estructura de los datos de análisis
interface Analytics {
  totalUsers: number
  totalConsultas: number
  totalDocumentos: number
  totalWhatsApp: number
  totalRegistros: number
  consultasPorDia: Record<string, number>
  documentosPorDia: Record<string, number>
  whatsappPorDia: Record<string, number>
  registrosPorDia: Record<string, number>
  ultimaActualizacion: string
  usuariosUnicos: string[]
  tasaConversion: number
}

// Registrar un nuevo usuario registrado
export async function registrarUsuario(email: string): Promise<string> {
  try {
    const today = new Date().toISOString().split("T")[0]

    // Registrar el evento en la tabla de analytics
    const { data, error } = await supabase
      .from("registros")
      .insert([{ email, fecha: today }])
      .select()
      .single()

    if (error) {
      console.error("Error al registrar usuario:", error)
      return "error"
    }

    return email
  } catch (error) {
    console.error("Error al registrar usuario:", error)
    return "error"
  }
}

// Registrar una nueva consulta
export async function registrarConsulta(userId?: string): Promise<string> {
  try {
    const userIdToUse = userId || "anonymous-user"
    const today = new Date().toISOString().split("T")[0]

    // Registrar el evento en la tabla de analytics
    const { data, error } = await supabase
      .from("consultas")
      .insert([{ user_id: userIdToUse, created_at: new Date().toISOString() }])
      .select()
      .single()

    if (error) {
      console.error("Error al registrar consulta:", error)
      return "error"
    }

    return userIdToUse
  } catch (error) {
    console.error("Error al registrar consulta:", error)
    return "error"
  }
}

// Registrar un nuevo análisis de documento
export async function registrarDocumento(userId?: string): Promise<string> {
  try {
    const userIdToUse = userId || "anonymous-user"
    const today = new Date().toISOString().split("T")[0]

    // Registrar el evento en la tabla de analytics
    const { data, error } = await supabase
      .from("documentos")
      .insert([{ user_id: userIdToUse, created_at: new Date().toISOString() }])
      .select()
      .single()

    if (error) {
      console.error("Error al registrar documento:", error)
      return "error"
    }

    return userIdToUse
  } catch (error) {
    console.error("Error al registrar documento:", error)
    return "error"
  }
}

// Registrar una nueva consulta por WhatsApp
export async function registrarWhatsApp(phoneNumber?: string): Promise<string> {
  try {
    const userIdToUse = phoneNumber || "anonymous-user"
    const today = new Date().toISOString().split("T")[0]

    // Registrar el evento en la tabla de analytics
    const { data, error } = await supabase
      .from("whatsapp_consultas")
      .insert([{ phone_number: userIdToUse, created_at: new Date().toISOString() }])
      .select()
      .single()

    if (error) {
      console.error("Error al registrar consulta WhatsApp:", error)
      return "error"
    }

    return userIdToUse
  } catch (error) {
    console.error("Error al registrar consulta WhatsApp:", error)
    return "error"
  }
}

// Obtener todos los datos de análisis
export async function getAnalytics(): Promise<Analytics> {
  try {
    // Obtener datos de usuarios registrados
    const { data: users, error: usersError } = await supabase
      .from("users")
      .select("id, created_at")
      .order("created_at", { ascending: true })

    if (usersError) {
      console.error("Error al obtener usuarios:", usersError)
      throw new Error("Error al obtener datos de usuarios")
    }

    // Obtener datos de consultas
    const { data: consultas, error: consultasError } = await supabase
      .from("consultas")
      .select("id, created_at, user_id")
      .order("created_at", { ascending: true })

    if (consultasError) {
      console.error("Error al obtener consultas:", consultasError)
      throw new Error("Error al obtener datos de consultas")
    }

    // Obtener datos de documentos analizados
    const { data: documentos, error: documentosError } = await supabase
      .from("documentos")
      .select("id, created_at, user_id")
      .order("created_at", { ascending: true })

    if (documentosError) {
      console.error("Error al obtener documentos:", documentosError)
      throw new Error("Error al obtener datos de documentos")
    }

    // Obtener datos de consultas por WhatsApp
    const { data: whatsapp, error: whatsappError } = await supabase
      .from("whatsapp_consultas")
      .select("id, created_at, phone_number")
      .order("created_at", { ascending: true })

    if (whatsappError) {
      console.error("Error al obtener consultas WhatsApp:", whatsappError)
      throw new Error("Error al obtener datos de WhatsApp")
    }

    // Procesar datos para estadísticas
    const usuariosUnicos = new Set<string>()
    const consultasPorDia: Record<string, number> = {}
    const documentosPorDia: Record<string, number> = {}
    const whatsappPorDia: Record<string, number> = {}
    const registrosPorDia: Record<string, number> = {}

    // Procesar usuarios registrados
    users.forEach((user) => {
      const fecha = new Date(user.created_at).toISOString().split("T")[0]
      registrosPorDia[fecha] = (registrosPorDia[fecha] || 0) + 1
    })

    // Procesar consultas
    consultas.forEach((consulta) => {
      const fecha = new Date(consulta.created_at).toISOString().split("T")[0]
      consultasPorDia[fecha] = (consultasPorDia[fecha] || 0) + 1

      if (consulta.user_id) {
        usuariosUnicos.add(consulta.user_id)
      }
    })

    // Procesar documentos
    documentos.forEach((documento) => {
      const fecha = new Date(documento.created_at).toISOString().split("T")[0]
      documentosPorDia[fecha] = (documentosPorDia[fecha] || 0) + 1

      if (documento.user_id) {
        usuariosUnicos.add(documento.user_id)
      }
    })

    // Procesar WhatsApp
    whatsapp.forEach((msg) => {
      const fecha = new Date(msg.created_at).toISOString().split("T")[0]
      whatsappPorDia[fecha] = (whatsappPorDia[fecha] || 0) + 1

      if (msg.phone_number) {
        usuariosUnicos.add(msg.phone_number)
      }
    })

    // Calcular tasa de conversión (usuarios registrados / usuarios totales)
    const tasaConversion = users.length > 0 ? users.length / usuariosUnicos.size : 0

    // Construir objeto de respuesta
    const analytics: Analytics = {
      totalUsers: usuariosUnicos.size,
      totalConsultas: consultas.length,
      totalDocumentos: documentos.length,
      totalWhatsApp: whatsapp.length,
      totalRegistros: users.length,
      consultasPorDia,
      documentosPorDia,
      whatsappPorDia,
      registrosPorDia,
      ultimaActualizacion: new Date().toISOString(),
      usuariosUnicos: Array.from(usuariosUnicos),
      tasaConversion,
    }

    return analytics
  } catch (error) {
    console.error("Error al obtener analíticas:", error)
    // Devolver datos vacíos en caso de error
    return {
      totalUsers: 0,
      totalConsultas: 0,
      totalDocumentos: 0,
      totalWhatsApp: 0,
      totalRegistros: 0,
      consultasPorDia: {},
      documentosPorDia: {},
      whatsappPorDia: {},
      registrosPorDia: {},
      ultimaActualizacion: new Date().toISOString(),
      usuariosUnicos: [],
      tasaConversion: 0,
    }
  }
}

export async function logAnalyticsEvent(action: string, params?: any): Promise<void> {
  try {
    console.log(`[Analytics - Server] Track event: ${action}`, params)
    // Registrar el evento en la tabla de eventos
    const { error } = await supabase.from("analytics_events").insert([
      {
        action,
        params: params || {},
        created_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Error al registrar evento:", error)
    }
  } catch (error) {
    console.error("Error tracking event:", error)
  }
}
