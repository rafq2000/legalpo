import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Mapeo de URLs antiguas a nuevas
const redirects: Record<string, string> = {
  "/finiquito": "/calculadora-finiquito",
  "/pension": "/calculadora-pensiones",
  "/herencia": "/calculadora-herencia",
  "/contrato-arriendo": "/contratos/arriendo",
  "/contrato-trabajo": "/contratos/trabajo",
  "/consulta": "/dudas-laborales",
  "/analizar": "/analyze",
  // Añade aquí más redirecciones según sea necesario
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const { pathname } = url

  // Manejo de redirecciones
  if (pathname in redirects) {
    url.pathname = redirects[pathname]
    return NextResponse.redirect(url)
  }

  // Manejo de URLs con parámetros incorrectos o páginas que ya no existen
  // pero que podrían estar generando soft 404s
  if (
    pathname.includes("/old-") ||
    pathname.includes("/temp-") ||
    pathname.includes("/test-") ||
    pathname.endsWith(".php") ||
    pathname.endsWith(".html")
  ) {
    url.pathname = "/not-found"
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|ads.txt|images/|fonts/).*)",
  ],
}
