"use client"

import { usePathname } from "next/navigation"

interface SchemaMarkupProps {
  title: string
  description: string
  type?: "WebPage" | "Article" | "FAQPage" | "Service" | "Organization"
  imageUrl?: string
  datePublished?: string
  dateModified?: string
  authorName?: string
  faqItems?: Array<{ question: string; answer: string }>
}

export function SchemaMarkup({
  title,
  description,
  type = "WebPage",
  imageUrl = "https://legalpo.cl/og-image.jpg",
  datePublished,
  dateModified,
  authorName = "LegalPO",
  faqItems,
}: SchemaMarkupProps) {
  const pathname = usePathname()
  const url = `https://legalpo.cl${pathname}`

  let schema: any = {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description,
    url,
  }

  if (type === "WebPage" || type === "Article") {
    schema = {
      ...schema,
      image: imageUrl,
      headline: title,
      author: {
        "@type": "Person",
        name: authorName,
      },
      publisher: {
        "@type": "Organization",
        name: "LegalPO",
        logo: {
          "@type": "ImageObject",
          url: "https://legalpo.cl/logo.png",
        },
      },
    }

    if (datePublished) {
      schema.datePublished = datePublished
    }

    if (dateModified) {
      schema.dateModified = dateModified
    }
  }

  if (type === "FAQPage" && faqItems && faqItems.length > 0) {
    schema.mainEntity = faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }))
  }

  if (type === "Service") {
    schema = {
      ...schema,
      provider: {
        "@type": "Organization",
        name: "LegalPO",
        url: "https://legalpo.cl",
      },
      areaServed: {
        "@type": "Country",
        name: "Chile",
      },
    }
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
