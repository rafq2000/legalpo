import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Log the request path for debugging
  console.log(`Middleware processing request for: ${request.nextUrl.pathname}`)

  // Check if we're trying to access the deudas page
  if (request.nextUrl.pathname === "/deudas") {
    console.log("Accessing deudas page")
  }

  // Simple middleware that just passes through all requests
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
