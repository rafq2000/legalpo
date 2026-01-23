import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import { AdsenseScript } from "@/components/adsense-script"
import { AdsenseAutoAds } from "@/components/adsense-auto-ads"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://legalpo.cl"),
  title: {
    default:
      "Abogado Gratis Online Chile 2026 | Asesoría Legal con IA 24/7 | LegalPO",
    template: "%s | LegalPO Chile - Abogado Gratis Online",
  },
  description:
    "Abogado gratis online en Chile con inteligencia artificial 24/7. Consultas legales gratis instantáneas, calculadora de finiquito y pensión alimenticia. +150.000 chilenos asesorados. Sin costo, sin registro. Especializado en legislación chilena 2026.",
  keywords: [
    "abogado gratis online",
    "abogado gratis online chile",
    "abogado gratis",
    "asesoría legal gratis",
    "asesoria legal gratis",
    "asesoría legal gratis chile",
    "asesoria legal gratis chile",
    "consulta legal gratis",
    "consultas legales gratis",
    "consulta legal gratis online",
    "abogado online gratis",
    "abogado online gratis chile",
    "asesoría jurídica gratis",
    "asesoria juridica gratis",
    "asesoría jurídica gratis chile",
    "abogado gratuito",
    "abogado gratuito chile",
    "abogado gratuito online",
    "asesor legal gratis",
    "asesor legal gratis chile",
    "consulta abogado gratis",
    "consulta abogado gratis online",
    "abogado virtual gratis",
    "abogado virtual gratis chile",
    "abogado virtual gratis online",
    "asesoría legal con inteligencia artificial",
    "asesoria legal inteligencia artificial",
    "asesoría legal con ia",
    "asesoria legal ia",
    "abogado inteligencia artificial",
    "abogado inteligencia artificial chile",
    "abogado con ia",
    "abogado ia gratis",
    "ia legal chile",
    "inteligencia artificial legal",
    "inteligencia artificial legal chile",
    "asistente legal ia",
    "asistente legal inteligencia artificial",
    "chatbot legal gratis",
    "chatbot legal gratis chile",
    "robot abogado gratis",
    "consulta legal inteligencia artificial",
    "asesor legal ia",
    "asistente juridico virtual gratis",
    "abogado virtual inteligencia artificial",
    "legal tech chile",
    "lawtech gratis",
    "lawtech chile",
    "consultas laborales gratis",
    "dudas legales gratis",
    "preguntas legales gratis",
    "abogado laboral gratis",
    "abogado familia gratis",
    "asesoría legal laboral gratis",
    "consultoria legal gratis",
    "orientacion legal gratis",
    "ayuda legal gratis",
    "ayuda legal gratis chile",
    "defensa legal gratuita",
    "asistencia juridica gratuita",
    "servicio legal gratis",
    "apoyo legal gratuito",
    "consejo legal gratis",
    "abogado pro bono",
    "abogado sin costo",
    "asesor juridico gratuito",
    "tramites legales gratis",
    "abogado 24 horas gratis",
    "asesoría legal 24/7 gratis",
    "consulta legal online gratis chile",
    "abogado online 24 horas gratis",
    "asesoría jurídica online gratis",
    "legal gratis chile",
    "abogados gratis en linea",
    "consultar abogado gratis online",
    "pregunta legal gratis",
    "ayuda juridica gratis online",
    "calculadora de finiquito gratis",
    "calcular finiquito gratis",
    "calculadora pension alimentos gratis",
    "calculadora herencia gratis",
    // Keywords 2026 - Frescura
    "calculadora finiquito 2026",
    "finiquito chile 2026",
    "pension alimentos 2026",
    "pension alimenticia chile 2026",
    "pension minima alimentos 2026",
    "sueldo minimo chile 2026",
    "leyes laborales chile 2026",
    // Keywords Long-tail Finiquito
    "cuanto me corresponde de finiquito",
    "simulador finiquito chile",
    "calcular indemnizacion despido",
    "indemnizacion años servicio chile",
    "indemnizacion despido injustificado",
    "que incluye el finiquito",
    "como cobrar finiquito",
    // Keywords Long-tail Pensión
    "como calcular pension alimenticia",
    "cuanto es la pension de alimentos",
    "demanda pension alimentos chile",
    "ley pago efectivo pensiones",
    "calculadora pension alimenticia online",
    "hasta que edad se paga pension alimentos",
    // Keywords Herencia
    "como repartir herencia chile",
    "posesion efectiva chile",
    "impuesto herencia chile",
    "herederos legales chile",
    "calculadora posesion efectiva",
    // Keywords Laboral
    "despido injustificado chile",
    "carta de despido chile",
    "derechos trabajador chile 2026",
    "codigo del trabajo chile",
    "demanda laboral chile",
    "inspeccion del trabajo consulta",
    // Keywords Familia
    "divorcio chile requisitos",
    "tuicion hijos chile",
    "regimen de visitas chile",
    "demanda divorcio chile",
    // Keywords Arriendos
    "ley devuelveme mi casa",
    "contrato arriendo chile",
    "desalojo arrendatario chile",
    "derechos arrendatario chile",
    // Keywords Deudas
    "prescripcion deudas chile",
    "salir de dicom",
    "como salir de dicom",
    "ley quiebras personal chile",
    "renegociar deudas chile",
    // Keywords Geográficos
    "abogado gratis santiago",
    "abogado gratis concepcion",
    "abogado gratis valparaiso",
    "abogado gratis viña del mar",
    // Keywords IA
    "abogado chatgpt chile",
    "consulta legal con ia",
    "abogado robot gratis",
  ],
  authors: [{ name: "LegalPO - Abogado Gratis Online Chile", url: "https://legalpo.cl" }],
  creator: "LegalPO - Asesoría Legal Gratis con IA",
  publisher: "LegalPO Chile",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://legalpo.cl",
    siteName: "LegalPO - Abogado Gratis Online Chile",
    title:
      "Abogado Gratis Online Chile 2026 | Asesoría Legal con IA 24/7 | LegalPO",
    description:
      "Abogado gratis online en Chile. Asesoría legal con inteligencia artificial 24/7. Consultas sobre finiquitos, pensión alimenticia, herencias, divorcios. +150.000 chilenos confían en LegalPO. Sin costo, sin registro.",
    images: [
      {
        url: "/images/legalpo-abogado-gratis-online-og.jpg",
        width: 1200,
        height: 630,
        alt: "Abogado Gratis Online Chile - Asesoría Legal Gratis con Inteligencia Artificial 24/7 - LegalPO",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogado Gratis Online Chile | Asesoría Legal con IA 24/7 | LegalPO",
    description:
      "Abogado gratis online en Chile. Asesoría legal con inteligencia artificial 24/7. +150.000 consultas respondidas. Especializado en legislación chilena 2026.",
    images: ["/images/legalpo-abogado-gratis-online-twitter.jpg"],
    creator: "@LegalPO_Chile",
    site: "@LegalPO_Chile",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "./",
  },
  category: "Legal Services",
  classification: "Free Legal Advice and AI Legal Assistant",
  referrer: "origin-when-cross-origin",
  applicationName: "LegalPO - Abogado Gratis Online Chile",
  generator: "Next.js",
  abstract:
    "LegalPO es el abogado gratis online #1 de Chile. Asesoría legal gratuita con inteligencia artificial 24/7. Consultas legales gratis instantáneas sobre finiquitos, pensión alimenticia, herencias, divorcios, deudas, arriendos y más. Más de 150,000 chilenos confían en nuestro abogado virtual gratis con IA especializado en legislación chilena 2026. Sin costo, sin registro, disponible 24 horas.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-CL" suppressHydrationWarning>
      <head>
        <AdsenseScript />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Schema.org structured data - Abogado Gratis Online */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "LegalPO - Abogado Gratis Online Chile",
              alternateName: [
                "Abogado Gratis Online",
                "Asesoría Legal Gratis Chile",
                "Abogado Virtual Gratis",
                "Consultas Legales Gratis",
              ],
              description:
                "Abogado gratis online con inteligencia artificial. Asesoría legal gratuita 24/7 especializada en legislación chilena. Consultas legales gratis instantáneas sin costo.",
              url: "https://legalpo.cl",
              image: "https://legalpo.cl/images/legalpo-logo.png",
              priceRange: "Gratis - $0",
              areaServed: {
                "@type": "Country",
                name: "Chile",
              },
              availableLanguage: {
                "@type": "Language",
                name: "Spanish",
                alternateName: "es",
              },
              openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios Legales Gratuitos con IA",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Consultas Legales Gratis con IA",
                      description: "Asesoría legal gratuita con inteligencia artificial 24/7",
                    },
                    price: "0",
                    priceCurrency: "CLP",
                    availability: "https://schema.org/InStock",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Abogado Virtual Gratis",
                      description: "Abogado virtual con IA especializado en legislación chilena",
                    },
                    price: "0",
                    priceCurrency: "CLP",
                    availability: "https://schema.org/InStock",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Calculadora de Finiquito Gratis",
                      description: "Calcula tu finiquito laboral gratis",
                    },
                    price: "0",
                    priceCurrency: "CLP",
                    availability: "https://schema.org/InStock",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Asesoría Legal con Inteligencia Artificial",
                      description: "Asistente legal con IA especializado en derecho chileno",
                    },
                    price: "0",
                    priceCurrency: "CLP",
                    availability: "https://schema.org/InStock",
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "150000",
                bestRating: "5",
                worstRating: "1",
              },
              provider: {
                "@type": "Organization",
                name: "LegalPO",
                url: "https://legalpo.cl",
                logo: "https://legalpo.cl/images/legalpo-logo.png",
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
                  availableChannel: {
                    "@type": "ServiceChannel",
                    serviceUrl: "https://legalpo.cl",
                  },
                },
              },
            }),
          }}
        />

        {/* WebApplication Schema - Asesoría Legal con IA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "LegalPO - Asesoría Legal Gratis con Inteligencia Artificial",
              alternateName: "Abogado Virtual Gratis IA",
              description:
                "Asistente legal con inteligencia artificial. Asesoría legal gratuita 24/7 especializada en legislación chilena. Abogado virtual gratis online.",
              url: "https://legalpo.cl",
              applicationCategory: "LegalService",
              operatingSystem: "Web",
              browserRequirements: "Requires JavaScript. Requires HTML5.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "CLP",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "150000",
                bestRating: "5",
                worstRating: "1",
              },
              featureList: [
                "Consultas legales gratis 24/7",
                "Respuestas instantáneas con IA",
                "Especializado en legislación chilena",
                "Sin registro ni costo",
                "Calculadoras legales gratis",
              ],
            }),
          }}
        />

        {/* FAQ Schema - Abogado Gratis Online */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cómo funciona el abogado gratis online de LegalPO?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nuestro abogado gratis online funciona con inteligencia artificial especializada en legislación chilena. Está disponible 24/7 para responder consultas legales gratis de forma instantánea. Solo debes escribir tu pregunta legal y recibirás asesoría legal gratuita inmediata basada en las leyes vigentes de Chile 2025. El abogado virtual gratis con IA ha respondido más de 150,000 consultas legales exitosamente.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Es realmente gratis la asesoría legal con inteligencia artificial?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, nuestra asesoría legal con inteligencia artificial es 100% gratuita y siempre lo será. No necesitas registrarte, pagar ni dar información personal para recibir consultas legales gratis. Ofrecemos asistencia jurídica gratuita ilimitada a todos los chilenos. Nuestro abogado gratis online con IA está disponible 24 horas sin ningún costo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué tan confiable es un abogado virtual con inteligencia artificial?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nuestro abogado virtual con inteligencia artificial tiene 99% de precisión y está entrenado específicamente en legislación chilena actualizada a 2025. Ha respondido más de 150,000 consultas legales gratis con éxito y mantiene una calificación de 4.9/5 estrellas. La asesoría legal con IA es ideal para orientación general, calculadoras legales y dudas comunes, complementando la asesoría de abogados tradicionales.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué tipos de consultas legales gratis puedo hacer al abogado online?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Puedes hacer consultas legales gratis sobre derecho laboral (finiquitos, despidos, contratos), derecho de familia (pensión alimenticia, divorcio, tuición), herencias y sucesiones, arriendos, deudas y DICOM, accidentes de tránsito, derecho del consumidor, derecho comercial y más. Nuestro abogado gratis online con IA cubre todas las áreas del derecho chileno y está disponible 24/7 para asesoría legal gratuita.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Puedo usar la asesoría legal gratis las 24 horas del día?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, nuestro servicio de asesoría legal gratis con inteligencia artificial está disponible 24/7, los 365 días del año. No importa la hora o el día, siempre podrás recibir consultas legales gratis instantáneas de nuestro abogado virtual gratis con IA. A diferencia de un abogado tradicional, nuestro abogado gratis online nunca cierra y responde en segundos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Debo registrarme para usar el abogado gratis online?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, no necesitas registrarte ni proporcionar información personal para usar nuestro abogado gratis online. Puedes hacer consultas legales gratis de forma completamente anónima. Solo escribe tu pregunta y recibirás asesoría legal gratuita instantánea sin ningún requisito de registro o datos personales.",
                  },
                },
              ],
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: "https://legalpo.cl",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Abogado Gratis Online",
                  item: "https://legalpo.cl",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Asesoría Legal Gratis con IA",
                  item: "https://legalpo.cl",
                },
              ],
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "LegalPO",
              legalName: "LegalPO - Abogado Gratis Online Chile",
              url: "https://legalpo.cl",
              logo: "https://legalpo.cl/images/legalpo-logo.png",
              description:
                "Abogado gratis online #1 de Chile. Asesoría legal gratuita con inteligencia artificial 24/7.",
              slogan: "Abogado Gratis Online - Asesoría Legal Gratis con IA",
              foundingDate: "2024",
              areaServed: "Chile",
              serviceType: [
                "Abogado Gratis Online",
                "Asesoría Legal Gratis",
                "Consultas Legales Gratis",
                "Asesoría Legal con IA",
              ],
              sameAs: [
                "https://www.facebook.com/LegalPOChile",
                "https://www.twitter.com/LegalPO_Chile",
                "https://www.linkedin.com/company/legalpo",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster />
          <AdsenseAutoAds />
        </ThemeProvider>
      </body>
    </html>
  )
}
