import { NextResponse } from "next/server"

export async function GET() {
  // Contenido del archivo ads.txt para Google AdSense
  const content = "google.com, pub-3753519605655251, DIRECT, f08c47fec0942fa0"

  // Configurar los headers para asegurar que se sirva como texto plano
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400", // Cache por 24 horas
    },
  })
}
