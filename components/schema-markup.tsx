"use client"

import { useEffect, useState } from "react"

interface SchemaMarkupProps {
  type: "LegalService" | "WebPage" | "FAQPage" | "Article" | "Organization"
  data: Record<string, any>
}

export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
