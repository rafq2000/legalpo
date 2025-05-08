"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface CanonicalProps {
  domain?: string
}

export function CanonicalUrl({ domain = "https://legalpo.cl" }: CanonicalProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [canonicalUrl, setCanonicalUrl] = useState<string>("")

  useEffect(() => {
    // Construir la URL canónica sin parámetros de consulta
    const url = `${domain}${pathname}`
    setCanonicalUrl(url)

    // Añadir la etiqueta canónica al head
    const linkElement = document.createElement("link")
    linkElement.setAttribute("rel", "canonical")
    linkElement.setAttribute("href", url)
    document.head.appendChild(linkElement)

    return () => {
      // Limpiar al desmontar
      const existingLink = document.querySelector('link[rel="canonical"]')
      if (existingLink) {
        existingLink.remove()
      }
    }
  }, [pathname, domain])

  return null
}
