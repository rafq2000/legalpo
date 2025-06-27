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
  "/contratos/personalizado": "/generador-contratos/personalizado",
  "/o": "/", // Redirige la URL problemática a la página de inicio
}

// Redirecciones de dominio y protocolo
const domainRedirects = ["http://legalpo.cl", "http://www.legalpo.cl", "https://legalpo.cl"]

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const { pathname, search } = url

  // Redirección de dominio a www
  const host = request.headers.get("host")
  if (host && !host.startsWith("www.") && host.includes("legalpo.cl")) {
    url.host = `www.${host}`
    return NextResponse.redirect(url, 301)
  }

  // Redirección de HTTP a HTTPS
  if (url.protocol === "http:") {
    url.protocol = "https:"
    return NextResponse.redirect(url, 301)
  }

  // Manejo de redirecciones específicas
  if (pathname in redirects) {
    url.pathname = redirects[pathname]
    return NextResponse.redirect(url, 301)
  }

  // Bloquear URLs malformadas
  if (pathname.includes("2fwww") || pathname.includes("//")) {
    url.pathname = "/"
    return NextResponse.redirect(url, 301)
  }

  // Redireccionar site.webmanifest a 404
  if (pathname === "/site.webmanifest") {
    return new NextResponse(null, { status: 404 })
  }

  // Manejo de URLs con parámetros incorrectos
  if (
    pathname.includes("/old-") ||
    pathname.includes("/temp-") ||
    pathname.includes("/test-") ||
    pathname.endsWith(".php") ||
    pathname.endsWith(".html")
  ) {
    url.pathname = "/"
    return NextResponse.redirect(url, 301)
  }

  // Redireccionar login con callbackUrl a páginas principales
  if (pathname === "/login" && search.includes("callbackUrl=")) {
    const callbackUrl = new URLSearchParams(search).get("callbackUrl")
    if (callbackUrl) {
      url.pathname = callbackUrl
      url.search = ""
      return NextResponse.redirect(url, 302)
    }
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
