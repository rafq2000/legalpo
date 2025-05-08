"use client"

import Head from "next/head"
import { usePathname } from "next/navigation"

interface MetaTagsProps {
  title?: string
  description?: string
  canonical?: string
  noindex?: boolean
  ogImage?: string
  ogType?: string
}

export function MetaTags({
  title = "LegalPO - Herramientas legales con IA para documentos y consultas jurídicas en Chile",
  description = "Analiza documentos legales, calcula finiquitos, pensiones alimenticias y obtén respuestas a tus consultas sobre deudas y derecho laboral en Chile con inteligencia artificial.",
  canonical,
  noindex = false,
  ogImage = "https://legalpo.cl/images/og-image.jpg",
  ogType = "website",
}: MetaTagsProps) {
  const pathname = usePathname()
  const baseUrl = "https://legalpo.cl"
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : `${baseUrl}${pathname}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
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
