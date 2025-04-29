import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Lista de bots de búsqueda conocidos
const searchBots = [
  "googlebot",
  "bingbot",
  "yandexbot",
  "duckduckbot",
  "slurp",
  "baiduspider",
  "facebookexternalhit",
  "twitterbot",
  "rogerbot",
  "linkedinbot",
  "embedly",
  "quora link preview",
  "showyoubot",
  "outbrain",
  "pinterest",
  "slackbot",
  "vkShare",
  "W3C_Validator",
  "adsbot-google",
]

// Archivos importantes para SEO
const seoFiles = ["/robots.txt", "/sitemap.xml", "/ads.txt"]

// Rutas permitidas sin autenticación
const allowedAdminRoutes = ["/admin/login", "/api/admin/login-simple"]

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent")?.toLowerCase() || ""
  const path = request.nextUrl.pathname

  // Proteger rutas de administración, excepto las rutas permitidas
  if (path.startsWith("/admin") || path.startsWith("/api/admin")) {
    // Verificar si la ruta está en la lista de permitidas
    if (allowedAdminRoutes.some((route) => path.startsWith(route))) {
      return NextResponse.next()
    }

    // Verificar autenticación
    const authKey = request.cookies.get("admin_auth")?.value
    const queryKey = request.nextUrl.searchParams.get("key")

    if (!authKey && (!queryKey || queryKey !== process.env.ADMIN_AUTH_KEY)) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  // Permitir acceso directo a archivos importantes para SEO
  if (seoFiles.some((file) => path === file)) {
    return NextResponse.next()
  }

  // Detectar si es un bot de búsqueda
  const isBot = searchBots.some((bot) => userAgent.includes(bot))

  if (isBot) {
    // Configuración especial para bots de búsqueda
    return NextResponse.next()
  }

  // Continuar con el comportamiento normal para usuarios regulares
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Coincide con todas las rutas de solicitud excepto:
     * 1. Rutas que comienzan con /_next (rutas internas de Next.js)
     * 2. Rutas que comienzan con /static (archivos estáticos)
     */
    "/((?!_next|static|.*\\.).*)",
  ],
}
