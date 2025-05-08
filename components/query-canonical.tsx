"use client"

import { useSearchParams, usePathname } from "next/navigation"

export function QueryCanonical() {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  // Si hay parámetros de consulta, establecemos la URL canónica a la página sin parámetros
  const hasQueryParams = searchParams && Array.from(searchParams.keys()).length > 0

  return (
    <>
      {hasQueryParams && (
        <head>
          <link rel="canonical" href={`https://legalpo.cl${pathname}`} />
        </head>
      )}
    </>
  )
}
