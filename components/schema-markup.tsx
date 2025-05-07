import Script from "next/script"

interface SchemaMarkupProps {
  type: "LegalService" | "WebPage" | "FAQPage" | "Article" | "Organization"
  data: Record<string, any>
}

export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <Script
      id={`schema-${type}-${Math.random().toString(36).substring(7)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
