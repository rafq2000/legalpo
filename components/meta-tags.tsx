import Head from "next/head"

interface MetaTagsProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  ogType?: string
  ogUrl?: string
  twitterCard?: string
}

export function MetaTags({
  title,
  description,
  keywords,
  ogImage = "https://legalpo.cl/og-image.jpg",
  ogType = "website",
  ogUrl,
  twitterCard = "summary_large_image",
}: MetaTagsProps) {
  const fullUrl = ogUrl ? `https://legalpo.cl${ogUrl}` : "https://legalpo.cl"

  return (
    <Head>
      {/* Etiquetas básicas  : "https://legalpo.cl"
  
  return (
    <Head>
      {/* Etiquetas básicas */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="LegalPO" />
      <meta property="og:locale" content="es_CL" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Otros */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Head>
  )
}
