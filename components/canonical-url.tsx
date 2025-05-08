"use client"

import { usePathname } from "next/navigation"
import Head from "next/head"

interface CanonicalProps {
  path?: string
}

export function CanonicalUrl({ path }: CanonicalProps) {
  const pathname = usePathname()
  const url = `https://legalpo.cl${path || pathname}`

  return (
    <Head>
      <link rel="canonical" href={url} />
    </Head>
  )
}
