import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import Script from "next/script"

interface Breadcrumb {
  label: string
  href: string
  isCurrent?: boolean
}

interface BreadcrumbsProps {
  items: Breadcrumb[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Preparar datos para el esquema de marcado
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://legalpo.cl",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: `https://legalpo.cl${item.href}`,
      })),
    ],
  }

  return (
    <>
      <nav className="flex py-3 px-4 text-sm bg-gray-50 rounded-md mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-600">
              <Home className="w-4 h-4 mr-2" />
              Inicio
            </Link>
          </li>

          {items.map((item, index) => (
            <li key={index}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                {item.isCurrent ? (
                  <span className="ml-1 text-blue-600 font-medium md:ml-2">{item.label}</span>
                ) : (
                  <Link href={item.href} className="ml-1 text-gray-600 hover:text-blue-600 md:ml-2">
                    {item.label}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>

      <Script
        id="breadcrumbs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  )
}
