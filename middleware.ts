import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Este middleware se ejecuta en todas las rutas
export function middleware(request: NextRequest) {
  // Interceptar rutas problemáticas
  if (request.nextUrl.pathname === "/404" || request.nextUrl.pathname === "/_not-found") {
    return NextResponse.redirect(new URL("/not-found", request.url))
  }

  return NextResponse.next()
}

// Configurar en qué rutas se ejecuta el middleware
export const config = {
  matcher: ["/404", "/_not-found"],
}
