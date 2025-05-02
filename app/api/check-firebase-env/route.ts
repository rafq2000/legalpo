import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET() {
  try {
    // Verificar variables de cliente
    const clientVars = {
      NEXT_PUBLIC_FIREBASE_API_KEY: !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: !!process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: !!process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: !!process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      NEXT_PUBLIC_FIREBASE_APP_ID: !!process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: !!process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    }

    // Verificar variables de servidor
    const serverVars = {
      FIREBASE_PROJECT_ID: !!process.env.FIREBASE_PROJECT_ID,
      FIREBASE_CLIENT_EMAIL: !!process.env.FIREBASE_CLIENT_EMAIL,
      FIREBASE_PRIVATE_KEY: !!process.env.FIREBASE_PRIVATE_KEY,
    }

    // Verificar si todas las variables están presentes
    const allClientVarsPresent = Object.values(clientVars).every(Boolean)
    const allServerVarsPresent = Object.values(serverVars).every(Boolean)

    return NextResponse.json({
      success: allClientVarsPresent && allServerVarsPresent,
      clientVars,
      serverVars,
      message:
        allClientVarsPresent && allServerVarsPresent
          ? "Todas las variables de entorno están configuradas correctamente"
          : "Faltan algunas variables de entorno",
    })
  } catch (error: any) {
    console.error("Error checking Firebase env vars:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Unknown error",
      },
      { status: 500 },
    )
  }
}
