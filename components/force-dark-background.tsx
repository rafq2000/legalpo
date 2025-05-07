"use client"

import { useEffect } from "react"

export function ForceDarkBackground() {
  useEffect(() => {
    // Aplicar fondo oscuro al body
    document.body.style.backgroundColor = "#0f172a"
    document.body.style.color = "white"

    // Limpiar al desmontar
    return () => {
      document.body.style.backgroundColor = ""
      document.body.style.color = ""
    }
  }, [])

  return null
}
