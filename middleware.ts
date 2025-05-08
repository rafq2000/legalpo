import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const pathname = request.nextUrl.pathname

  // Check if the path is an auth or login path that should be protected from indexing
  if (
    pathname.startsWith("/auth/") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/registro")
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
  matcher: ["/auth/:path*", "/login:path*", "/register:path*", "/registro:path*"],
}
