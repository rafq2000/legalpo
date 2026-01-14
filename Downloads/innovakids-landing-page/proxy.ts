import { updateSession } from "./lib/supabase/middleware"

export async function proxy(request: any) {
  return await updateSession(request)
}

export const config = {
  matcher: ["/alumnos/:path*", "/profesor/:path*", "/auth/:path*"],
}
