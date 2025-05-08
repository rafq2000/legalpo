"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

const redirectMap: Record<string, string> = {
  "/contratos/personalizado": "/generador-contratos/personalizado",
  "/calculadora-finiquitos": "/calculadora-finiquito",
  "/calculadora-pension": "/calculadora-pensiones",
  "/consultas-legales": "/ask",
  "/analizador": "/analyze",
  // Añadir más redirecciones según sea necesario
}

export function LegacyRedirects() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Verificar si la ruta actual está en el mapa de redirecciones
    if (pathname && redirectMap[pathname]) {
      router.replace(redirectMap[pathname])
    }

    // Verificar si es una URL con parámetros de callback que no debería indexarse
    if (pathname && pathname.includes("callbackUrl=")) {
      // No hacer nada, el middleware ya se encarga de añadir noindex
    }
  }, [pathname, router])

  return null
}
