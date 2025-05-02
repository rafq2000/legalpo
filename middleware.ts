import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Si la ruta no existe, redirigir a la página 404 estática
  const url = request.nextUrl.clone()

  // Verificar si la ruta es 404 o _not-found
  if (url.pathname === "/404" || url.pathname === "/_not-found") {
    url.pathname = "/404.html"
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

// Configurar el middleware para que se ejecute en todas las rutas
export const config = {
  matcher: [
    // Excluir archivos estáticos y API routes
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|gif|png|svg|ico)).*)",
  ],
}
