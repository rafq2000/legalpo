import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const { pathname } = url

  // Redirigir /auth/google a /api/auth/[...nextauth]
  if (pathname === "/auth/google") {
    return NextResponse.redirect(new URL("/api/auth/signin/google", request.url))
  }

  // Verificar si la URL contiene parámetros de consulta en páginas protegidas
  if (
    pathname === "/ask" ||
    pathname === "/analyze" ||
    pathname === "/calculadora-herencia" ||
    pathname === "/calculadora-finiquito" ||
    pathname === "/calculadora-pensiones"
  ) {
    // Si hay parámetros de consulta y no está autenticado, redirigir a la página sin parámetros
    if (url.search && !request.cookies.get("next-auth.session-token")) {
      return NextResponse.redirect(new URL(pathname, request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Excluir archivos estáticos y API routes
    "/((?!_next/static|_next/image|favicon.ico|api|not-found.html).*)",
  ],
}
