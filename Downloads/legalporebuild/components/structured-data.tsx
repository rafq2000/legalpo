import { WithContext, Organization, LegalService, WebApplication, FAQPage, BreadcrumbList } from "schema-dts"

export function GlobalStructuredData() {
    const organizationSchema: WithContext<Organization> = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "LegalPO",
        legalName: "LegalPO - Abogado Gratis Online Chile",
        url: "https://legalpo.cl",
        logo: "https://legalpo.cl/images/legalpo-logo.png",
        description: "Abogado gratis online #1 de Chile. Asesoría legal gratuita con inteligencia artificial 24/7.",
        slogan: "Abogado Gratis Online - Asesoría Legal Gratis con IA",
        foundingDate: "2024",
        areaServed: {
            "@type": "Country",
            name: "Chile"
        },
        sameAs: [
            "https://www.facebook.com/LegalPOChile",
            "https://www.twitter.com/LegalPO_Chile",
            "https://www.linkedin.com/company/legalpo",
        ],
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            areaServed: "CL",
            availableLanguage: ["Spanish"],
        }
    }

    const legalServiceSchema: WithContext<LegalService> = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: "LegalPO - Abogado Gratis Online Chile",
        url: "https://legalpo.cl",
        image: "https://legalpo.cl/images/legalpo-logo.png",
        priceRange: "Gratis - $0",
        description: "Abogado gratis online con IA. Asesoría legal 24/7 en Chile.",
        telephone: "+56931772346",
        openingHours: "Mo-Su 00:00-23:59",
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servicios Legales Gratuitos",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Consultas Legales Gratis con IA"
                    },
                    price: "0",
                    priceCurrency: "CLP"
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Calculadora Finiquito Gratis"
                    },
                    price: "0",
                    priceCurrency: "CLP"
                }
            ]
        }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
            />
        </>
    )
}

export function CalculatorStructuredData({ name, description, url }: { name: string; description: string; url: string }) {
    const schema: WithContext<WebApplication> = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: name,
        description: description,
        url: url,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        browserRequirements: "Requires JavaScript",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "CLP"
        },
        featureList: ["Cálculo online gratis", "Actualizado a normativa chilena", "Sin registro"]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export function FAQStructuredData({ faqs }: { faqs: { question: string; answer: string }[] }) {
    const schema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: f.answer
            }
        }))
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
