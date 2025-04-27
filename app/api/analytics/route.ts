import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Faltan las variables de entorno SUPABASE_URL o SUPABASE_SERVICE_KEY.")
}

const supabase = createClient(supabaseUrl, supabaseKey)

export async function GET(req: Request) {
  try {
    // Verificar si hay un parámetro de autenticación
    const url = new URL(req.url)
    const authKey = url.searchParams.get("key")

    // Clave simple para proteger el acceso a las estadísticas
    if (authKey !== process.env.ANALYTICS_KEY) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    // Obtener datos de usuarios registrados
    const { data: users, error: usersError } = await supabase
      .from("users")
      .select("id, created_at")
      .order("created_at", { ascending: true })

    if (usersError) {
      console.error("Error al obtener usuarios:", usersError)
      return NextResponse.json({ error: "Error al obtener datos de usuarios" }, { status: 500 })
    }

    // Obtener datos de consultas
    const { data: consultas, error: consultasError } = await supabase
      .from("consultas")
      .select("id, created_at, user_id")
      .order("created_at", { ascending: true })

    if (consultasError) {
      console.error("Error al obtener consultas:", consultasError)
      return NextResponse.json({ error: "Error al obtener datos de consultas" }, { status: 500 })
    }

    // Obtener datos de documentos analizados
    const { data: documentos, error: documentosError } = await supabase
      .from("documentos")
      .select("id, created_at, user_id")
      .order("created_at", { ascending: true })

    if (documentosError) {
      console.error("Error al obtener documentos:", documentosError)
      return NextResponse.json({ error: "Error al obtener datos de documentos" }, { status: 500 })
    }

    // Obtener datos de consultas por WhatsApp
    const { data: whatsapp, error: whatsappError } = await supabase
      .from("whatsapp_consultas")
      .select("id, created_at, phone_number")
      .order("created_at", { ascending: true })

    if (whatsappError) {
      console.error("Error al obtener consultas WhatsApp:", whatsappError)
      return NextResponse.json({ error: "Error al obtener datos de WhatsApp" }, { status: 500 })
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
    const analytics = {
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

    // Devolver respuesta sin formato markdown
    return new Response(JSON.stringify(analytics), {
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Error al obtener analíticas:", error)
    return new Response(JSON.stringify({ error: "Error al obtener datos de analítica" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

export const dynamic = "force-dynamic"
