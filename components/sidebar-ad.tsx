"use client"

import { useEffect, useRef, useState } from "react"
import { AdUnit } from "./ad-unit"

export function SidebarAd() {
  const [isSticky, setIsSticky] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === "undefined") return

    // Función para manejar el scroll
    const handleScroll = () => {
      if (!sidebarRef.current) return

      const rect = sidebarRef.current.getBoundingClientRect()
      const shouldBeSticky = rect.top <= 100 // 100px desde la parte superior

      setIsSticky(shouldBeSticky)
    }

    // Agregar event listener
    window.addEventListener("scroll", handleScroll)

    // Limpiar event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div ref={sidebarRef} className={`hidden lg:block ${isSticky ? "sticky top-24" : ""}`}>
      <AdUnit slot="3210987654" format="rectangle" className="rectangle sidebar" />
    </div>
  )
}
