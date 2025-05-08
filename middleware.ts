import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const pathname = request.nextUrl.pathname
  const url = request.nextUrl.clone()

  // Redirecciones para URLs antiguas o mal formadas
  if (pathname === "/contratos/personalizado") {
    url.pathname = "/generador-contratos/personalizado"
    return NextResponse.redirect(url)
  }

  // Redirecciones para URLs con parámetros de callback
  if (pathname.includes("login") && pathname.includes("callbackUrl")) {
    // Si es una página de login con callback, asegurarse de que tenga noindex
    const response = NextResponse.next()
    response.headers.set("X-Robots-Tag", "noindex, nofollow")
    return response
  }

  // Check if the path is an auth or login path that should be protected from indexing
  if (
    pathname.startsWith("/auth/") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/registro") ||
    pathname.includes("callbackUrl=")
  ) {
    // For these paths, we'll add the noindex header
    const response = NextResponse.next()
    response.headers.set("X-Robots-Tag", "noindex, nofollow")
    return response
  }

  // Continue with the request
  return NextResponse.next()
}

export const config = {
  matcher: ["/auth/:path*", "/login:path*", "/register:path*", "/registro:path*", "/:path*\\?callbackUrl=:path*"],
}
