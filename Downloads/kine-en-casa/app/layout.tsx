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

const siteUrl = "https://kineencasa.cl"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kinesiólogo a Domicilio Sector Oriente Santiago | KineEnCasa",
    template: "%s | KineEnCasa - Kinesiología a Domicilio",
  },
  description:
    "Kinesiólogo a domicilio en Las Condes, Vitacura, Providencia, Ñuñoa, La Reina y Lo Barnechea. Rehabilitación profesional en tu hogar: traumatológica, respiratoria, neurológica y geriátrica. Agenda tu evaluación gratis ☎ +56 9 9967 9593",
  keywords: [
    "kinesiólogo a domicilio",
    "kinesiología a domicilio Santiago",
    "kine a domicilio sector oriente",
    "fisioterapia a domicilio",
    "kinesiólogo a domicilio Las Condes",
    "kinesiología a domicilio Vitacura",
    "kinesiólogo a domicilio Providencia",
    "kine a domicilio Ñuñoa",
    "kinesiología a domicilio La Reina",
    "kinesiólogo a domicilio Lo Barnechea",
    "kinesiología geriátrica adulto mayor",
    "kinesiología respiratoria a domicilio",
    "rehabilitación traumatológica casa",
    "kinesiología neurológica ACV",
    "rehabilitación postoperatoria domicilio",
    "kinesiólogo adulto mayor Santiago",
  ],
  authors: [{ name: "KineEnCasa" }],
  creator: "KineEnCasa",
  publisher: "KineEnCasa",
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
    title: "Kinesiólogo a Domicilio Sector Oriente Santiago | KineEnCasa",
    description:
      "Rehabilitación profesional en tu hogar. Especialistas en kinesiología geriátrica, respiratoria, traumatológica y neurológica. Cobertura: Las Condes, Vitacura, Providencia, Ñuñoa y más.",
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "KineEnCasa",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KineEnCasa - Kinesiología Profesional a Domicilio en Santiago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinesiólogo a Domicilio Sector Oriente | KineEnCasa",
    description:
      "Rehabilitación profesional en tu hogar. Las Condes, Vitacura, Providencia, Ñuñoa. ☎ +56 9 9967 9593",
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
  name: "KineEnCasa",
  alternateName: "Kine en Casa Santiago",
  description:
    "Servicios profesionales de kinesiología a domicilio en el sector oriente de Santiago. Especialistas en rehabilitación geriátrica, respiratoria, traumatológica y neurológica.",
  url: siteUrl,
  telephone: "+56999679593",
  email: "contacto@kineencasa.cl",
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
