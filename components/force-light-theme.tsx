"use client"

import { useEffect } from "react"

export function ForceLightTheme() {
  useEffect(() => {
    // Forzar tema claro
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")

    // Establecer atributo de tema
    document.documentElement.setAttribute("data-theme", "light")

    // Almacenar preferencia en localStorage
    localStorage.setItem("theme", "light")
  }, [])

  return null
}
