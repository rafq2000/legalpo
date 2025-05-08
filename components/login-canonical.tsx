"use client"

import { useSearchParams } from "next/navigation"

export function LoginCanonical() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get("callbackUrl")

  // Si hay un callbackUrl, establecemos la URL canónica a la página de login sin parámetros
  return (
    <>
      {callbackUrl && (
        <head>
          <link rel="canonical" href="https://legalpo.cl/login" />
          <meta name="robots" content="noindex,follow" />
        </head>
      )}
    </>
  )
}
