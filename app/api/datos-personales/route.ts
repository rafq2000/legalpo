import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { getServerSession } from "next-auth"

// Inicializar cliente de Supabase
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!)

export async function GET(request: Request) {
  try {
    // Verificar autenticación
    const session = await getServerSession()

    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: "No autorizado. Debe iniciar sesión para acceder a sus datos personales." },
        { status: 401 },
      )
    }

    const email = session.user.email

    // Obtener datos personales del usuario
    const { data: userData, error: userError } = await supabase.from("users").select("*").eq("email", email).single()

    if (userError) {
      console.error("Error al obtener datos del usuario:", userError)
      return NextResponse.json(
        { error: "Error al obtener datos personales. Inténtelo de nuevo más tarde." },
        { status: 500 },
      )
    }

    // Obtener sesiones del usuario
    const { data: sessionData, error: sessionError } = await supabase
      .from("sessions")
      .select("*")
      .eq("user_id", userData.id)
      .order("created_at", { ascending: false })

    // Obtener vistas de página del usuario
    const { data: pageViewData, error: pageViewError } = await supabase
      .from("page_views")
      .select("*")
      .eq("user_id", userData.id)
      .order("created_at", { ascending: false })

    // Preparar respuesta con datos personales
    const personalData = {
      user: {
        id: userData.id,
        email: userData.email,
        created_at: userData.created_at,
        last_login_at: userData.last_login_at,
      },
      sessions: sessionData || [],
      pageViews: pageViewData || [],
    }

    return NextResponse.json(personalData)
  } catch (error) {
    console.error("Error al procesar solicitud de datos personales:", error)
    return NextResponse.json(
      { error: "Error al procesar la solicitud. Inténtelo de nuevo más tarde." },
      { status: 500 },
    )
  }
}

export async function PUT(request: Request) {
  try {
    // Verificar autenticación
    const session = await getServerSession()

    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: "No autorizado. Debe iniciar sesión para modificar sus datos personales." },
        { status: 401 },
      )
    }

    const email = session.user.email

    // Obtener datos a actualizar del cuerpo de la solicitud
    const body = await request.json()

    // Validar datos
    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json({ error: "No se proporcionaron datos para actualizar." }, { status: 400 })
    }

    // Obtener ID del usuario
    const { data: userData, error: userError } = await supabase.from("users").select("id").eq("email", email).single()

    if (userError) {
      console.error("Error al obtener ID del usuario:", userError)
      return NextResponse.json(
        { error: "Error al identificar al usuario. Inténtelo de nuevo más tarde." },
        { status: 500 },
      )
    }

    // Actualizar datos del usuario
    const { data, error } = await supabase.from("users").update(body).eq("id", userData.id).select()

    if (error) {
      console.error("Error al actualizar datos del usuario:", error)
      return NextResponse.json(
        { error: "Error al actualizar datos personales. Inténtelo de nuevo más tarde." },
        { status: 500 },
      )
    }

    return NextResponse.json({
      message: "Datos personales actualizados correctamente.",
      data,
    })
  } catch (error) {
    console.error("Error al procesar solicitud de actualización de datos personales:", error)
    return NextResponse.json(
      { error: "Error al procesar la solicitud. Inténtelo de nuevo más tarde." },
      { status: 500 },
    )
  }
}

export async function DELETE(request: Request) {
  try {
    // Verificar autenticación
    const session = await getServerSession()

    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: "No autorizado. Debe iniciar sesión para eliminar sus datos personales." },
        { status: 401 },
      )
    }

    const email = session.user.email

    // Obtener ID del usuario
    const { data: userData, error: userError } = await supabase.from("users").select("id").eq("email", email).single()

    if (userError) {
      console.error("Error al obtener ID del usuario:", userError)
      return NextResponse.json(
        { error: "Error al identificar al usuario. Inténtelo de nuevo más tarde." },
        { status: 500 },
      )
    }

    // Eliminar datos relacionados con el usuario
    await Promise.all([
      supabase.from("sessions").delete().eq("user_id", userData.id),
      supabase
        .from("page_views")
        .delete()
        .eq("user_id", userData.id),
      // Añadir otras tablas según sea necesario
    ])

    // Eliminar usuario
    const { error } = await supabase.from("users").delete().eq("id", userData.id)

    if (error) {
      console.error("Error al eliminar datos del usuario:", error)
      return NextResponse.json(
        { error: "Error al eliminar datos personales. Inténtelo de nuevo más tarde." },
        { status: 500 },
      )
    }

    return NextResponse.json({
      message: "Datos personales eliminados correctamente.",
    })
  } catch (error) {
    console.error("Error al procesar solicitud de eliminación de datos personales:", error)
    return NextResponse.json(
      { error: "Error al procesar la solicitud. Inténtelo de nuevo más tarde." },
      { status: 500 },
    )
  }
}

// Si este archivo existe y contiene direcciones de correo electrónico, las cambiaríamos a contacto@legalpo.cl
