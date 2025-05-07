import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

// Creamos un servicio de analytics simplificado
const analyticsService = {
  exportUsersToCSV: async () => {
    // Versión simplificada que devuelve un CSV básico
    return "email,nombre,fecha_registro\nuser@example.com,Usuario Ejemplo,2023-01-01"
  },
}

export async function GET(req: Request) {
  try {
    // Verificar autenticación y permisos de administrador
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    // Verificar si el usuario es administrador
    const adminEmail = process.env.ADMIN_EMAIL || ""
    const adminEmails = adminEmail.split(",").map((email) => email.trim())

    if (!adminEmails.includes(session.user.email)) {
      return NextResponse.json({ error: "No autorizado" }, { status: 403 })
    }

    // Obtener parámetros de la solicitud
    const url = new URL(req.url)
    const type = url.searchParams.get("type") || "users"

    // Exportar según el tipo solicitado
    switch (type) {
      case "users": {
        const csv = await analyticsService.exportUsersToCSV()

        // Configurar respuesta como archivo CSV para descarga
        return new NextResponse(csv, {
          headers: {
            "Content-Type": "text/csv; charset=utf-8",
            "Content-Disposition": `attachment; filename="usuarios_${new Date().toISOString().split("T")[0]}.csv"`,
          },
        })
      }

      default:
        return NextResponse.json({ error: "Tipo de exportación no válido" }, { status: 400 })
    }
  } catch (error) {
    console.error("Error en admin/export:", error)
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
}
