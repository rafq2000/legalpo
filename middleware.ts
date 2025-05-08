import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const { pathname } = url

  // Lista de rutas que sabemos que existen
  const validRoutes = [
    "/login",
    "/register",
    "/analyze",
    "/ask",
    "/dudas-laborales",
    "/calculadora-finiquito",
    "/calculadora-pensiones",
    "/calculadora-herencia",
    "/contratos",
    "/generador-contratos",
    "/auth/google",
    "/deudas",
    "/consulta-deudas",
    "/consulta-familia",
    "/laboral",
    "/herencias",
    "/finiquito-chile",
    "/privacidad",
    "/terminos",
    "/acerca",
    "/quienes-somos",
    "/como-funciona",
    "/caracteristicas",
    "/terminos-legales",
    "/ayuda-analizador",
  ]

  // Verificar si la ruta existe en nuestra lista de rutas válidas
  const isValidRoute = validRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`))

  // Si la ruta no es válida y no es un archivo estático o de sistema
  if (
    !isValidRoute &&
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/api") &&
    !pathname.includes(".") &&
    !pathname.startsWith("/admin")
  ) {
    // Redirigir a la página 404
    url.pathname = "/not-found"
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|not-found.html).*)",
  ],
}
