import { NextResponse } from "next/server"

export async function GET(request: Request) {
  // Obtener la clave de la URL
  const url = new URL(request.url)
  const key = url.searchParams.get("key")

  // Obtener la clave de administrador del entorno
  const adminKey = process.env.ADMIN_AUTH_KEY

  // Verificar si la clave está configurada
  if (!adminKey) {
    return NextResponse.json(
      {
        error: "La clave de administrador no está configurada en el servidor",
        keyConfigured: false,
      },
      { status: 500 },
    )
  }

  // Verificar si la clave coincide (sin mostrar la clave completa)
  const keyMatch = key === adminKey

  return NextResponse.json({
    keyConfigured: true,
    keyMatch: keyMatch,
    keyLength: adminKey.length,
    keyFirstChar: adminKey.charAt(0),
    keyLastChar: adminKey.charAt(adminKey.length - 1),
    providedKey: key ? key.substring(0, 1) + "..." + key.substring(key.length - 1) : "no proporcionada",
  })
}
