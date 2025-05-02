import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Interceptar solicitudes a la página 404
  if (request.nextUrl.pathname === "/404" || request.nextUrl.pathname === "/_not-found") {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

// Configurar el middleware para que se ejecute en todas las rutas
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
