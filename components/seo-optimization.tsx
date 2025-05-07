import Head from "next/head"
import { CanonicalUrl } from "@/components/canonical-url"
import { SchemaMarkup } from "@/components/schema-markup"

interface SEOOptimizationProps {
  title: string
  description: string
  canonicalPath: string
  keywords?: string
  ogImage?: string
  ogType?: string
  schemaType?: "LegalService" | "WebPage" | "FAQPage" | "Article" | "Organization"
  schemaData?: Record<string, any>
}

export function SEOOptimization({
  title,
  description,
  canonicalPath,
  keywords,
  ogImage = "https://legalpo.cl/og-image.jpg",
  ogType = "website",
  schemaType = "WebPage",
  schemaData = {},
}: SEOOptimizationProps) {
  const defaultSchemaData = {
    name: title,
    description: description,
    url: `https://legalpo.cl${canonicalPath}`,
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://legalpo.cl${canonicalPath}`} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content={ogType} />
        <meta property="og:site_name" content="LegalPO" />
        <meta property="og:locale" content="es_CL" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <CanonicalUrl path={canonicalPath} />
      <SchemaMarkup type={schemaType} data={{ ...defaultSchemaData, ...schemaData }} />
    </>
  )
}
