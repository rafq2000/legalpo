"use client"

import { usePathname } from "next/navigation"
import Head from "next/head"

interface CanonicalProps {
  path?: string
  noIndex?: boolean
}

export function CanonicalUrl({ path, noIndex }: CanonicalProps) {
  const pathname = usePathname()
  const url = `https://legalpo.cl${path || pathname}`

  return (
    <Head>
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex" />}
    </Head>
  )
}
