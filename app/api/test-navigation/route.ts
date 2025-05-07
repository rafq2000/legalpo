import { NextResponse } from "next/server"

export async function GET() {
  // This endpoint will help us debug the navigation issue
  const routes = {
    mainRoutes: [
      { path: "/", name: "Home" },
      { path: "/ask", name: "Consultas" },
      { path: "/deudas", name: "Deudas" },
      { path: "/generador-contratos", name: "Contratos" },
    ],
    currentConfig: {
      navigationComponent: "MainNav is being used in SiteHeader",
      routingSystem: "Next.js App Router",
    },
  }

  return NextResponse.json({
    message: "Navigation configuration debug info",
    routes,
    timestamp: new Date().toISOString(),
  })
}
