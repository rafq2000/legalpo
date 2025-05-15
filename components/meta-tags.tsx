"use client"

import Head from "next/head"
import { usePathname } from "next/navigation"

interface MetaTagsProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  noindex?: boolean
  canonical?: string
}

export function MetaTags({
  title,
  description,
  keywords = "documentos legales, análisis legal, finiquito, pensión alimenticia, deudas, derecho laboral, Chile",
  ogImage = "https://legalpo.cl/og-image.jpg",
  noindex = false,
  canonical,
}: MetaTagsProps) {
  const pathname = usePathname()
  const canonicalUrl = canonical || `https://legalpo.cl${pathname}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Robots meta */}
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : <meta name="robots" content="index, follow" />}

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Head>
  )
}
