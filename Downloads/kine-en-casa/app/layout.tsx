import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

const siteUrl = "https://kineum.cl"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kinesiología a Domicilio Premium Santiago | KINEUM",
    template: "%s | KINEUM - Clinical Home Care",
  },
  description:
    "KINEUM: Rehabilitación clínica de precisión en su hogar. Kinesiólogos especialistas en Las Condes, Vitacura, Providencia, Lo Barnechea. Tecnología avanzada + Atención experta. ☎ +56 9 9967 9593",
  keywords: [
    "kinesiólogo a domicilio",
    "kinesiología premium santiago",
    "kineum",
    "rehabilitación a domicilio las condes",
    "kinesiología respiratoria vitacura",
    "neurorehabilitación a domicilio",
    "fisioterapia geriatrica santiago",
  ],
  authors: [{ name: "KINEUM" }],
  creator: "KINEUM",
  publisher: "KINEUM",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "KINEUM | Kinesiología Clínica a Domicilio",
    description:
      "El nuevo estándar en recuperación domiciliaria. Kinesiología de precisión, monitoreo digital y atención experta en Santiago Oriente.",
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "KINEUM",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KINEUM - Clinical Home Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KINEUM | Rehabilitación Premium",
    description:
      "Kinesiología clínica en su hogar. Las Condes, Vitacura, Providencia. ☎ +56 9 9967 9593",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "AGREGAR_CODIGO_VERIFICACION_GOOGLE",
  },
  category: "Salud",
  generator: "Next.js",
}

// Schema.org LocalBusiness structured data
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: "KINEUM",
  alternateName: "Kineum Clinical Home Care",
  description:
    "Servicios de kinesiología clínica a domicilio en el sector oriente de Santiago. Rehabilitación de precisión con tecnología y expertos.",
  url: siteUrl,
  telephone: "+56999679593",
  email: "contacto@kineum.cl",
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/logo.png`,
  priceRange: "$$",
  currenciesAccepted: "CLP",
  paymentAccepted: "Efectivo, Transferencia, Tarjeta de Crédito, Tarjeta de Débito",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.4189,
    longitude: -70.6003,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Las Condes",
      containedInPlace: { "@type": "AdministrativeArea", name: "Santiago, Chile" },
    },
    {
      "@type": "City",
      name: "Vitacura",
      containedInPlace: { "@type": "AdministrativeArea", name: "Santiago, Chile" },
    },
    {
      "@type": "City",
      name: "Providencia",
      containedInPlace: { "@type": "AdministrativeArea", name: "Santiago, Chile" },
    },
    {
      "@type": "City",
      name: "Ñuñoa",
      containedInPlace: { "@type": "AdministrativeArea", name: "Santiago, Chile" },
    },
    {
      "@type": "City",
      name: "La Reina",
      containedInPlace: { "@type": "AdministrativeArea", name: "Santiago, Chile" },
    },
    {
      "@type": "City",
      name: "Lo Barnechea",
      containedInPlace: { "@type": "AdministrativeArea", name: "Santiago, Chile" },
    },
    {
      "@type": "City",
      name: "Peñalolén",
      containedInPlace: { "@type": "AdministrativeArea", name: "Santiago, Chile" },
    },
    {
      "@type": "City",
      name: "La Florida",
      containedInPlace: { "@type": "AdministrativeArea", name: "Santiago, Chile" },
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Kinesiología a Domicilio",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Kinesiología Geriátrica",
          description: "Rehabilitación especializada para adultos mayores en su hogar",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Kinesiología Respiratoria",
          description: "Tratamiento de problemas respiratorios, EPOC, post-COVID y neumonía",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Kinesiología Traumatológica",
          description: "Rehabilitación de fracturas, esguinces y lesiones deportivas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Kinesiología Neurológica",
          description: "Tratamiento post-ACV, Parkinson, Alzheimer y esclerosis múltiple",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Rehabilitación Postquirúrgica",
          description: "Recuperación especializada después de cirugías ortopédicas",
        },
      },
    ],
  },
  sameAs: [
    "https://www.instagram.com/kineencasa",
    "https://www.facebook.com/kineencasa",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
}

// FAQ Schema for rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta una sesión de kinesiología a domicilio en Santiago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio de una sesión de kinesiología a domicilio en el sector oriente de Santiago varía según el tipo de tratamiento y la comuna. Ofrecemos evaluación inicial gratuita. Contáctanos al +56 9 9967 9593 para una cotización personalizada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué comunas atienden en el sector oriente de Santiago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atendemos Las Condes, Vitacura, Providencia, Ñuñoa, La Reina, Lo Barnechea, Peñalolén, La Florida y Macul. Todos los tratamientos se realizan directamente en tu hogar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajan con Fonasa o Isapre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Emitimos boletas que pueden ser reembolsadas por tu Isapre. También aceptamos pacientes Fonasa con modalidad libre elección. Consulta los detalles de tu plan de salud.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tipos de kinesiología ofrecen a domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ofrecemos kinesiología geriátrica, respiratoria, traumatológica, neurológica, rehabilitación postquirúrgica y educación familiar. Nuestros kinesiólogos tienen más de 5 años de experiencia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto dura una sesión de kinesiología a domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cada sesión tiene una duración de 60 minutos aproximadamente. El tiempo puede variar según las necesidades específicas del paciente y el tipo de tratamiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Atienden adultos mayores con movilidad reducida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, somos especialistas en atención a adultos mayores con movilidad reducida. Llevamos todo el equipamiento necesario a tu hogar y adaptamos cada sesión a las capacidades del paciente.",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CL" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
