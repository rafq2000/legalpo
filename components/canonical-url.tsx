"use client"

import Head from "next/head"
import { usePathname } from "next/navigation"

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
