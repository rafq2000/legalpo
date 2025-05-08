import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "LegalPO - Herramientas legales con IA para documentos y consultas jurídicas en Chile",
    template: "%s | LegalPO",
  },
  description:
    "Analiza documentos legales, calcula finiquitos, pensiones alimenticias y obtén respuestas a tus consultas sobre deudas y derecho laboral en Chile con inteligencia artificial.",
  keywords:
    "documentos legales, análisis legal, finiquito, pensión alimenticia, deudas, derecho laboral, Chile, asesoría legal, inteligencia artificial",
  authors: [{ name: "LegalPO" }],
  creator: "LegalPO",
  publisher: "LegalPO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "LegalPO",
  },
  twitter: {
    card: "summary_large_image",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-adsense-account" content="ca-pub-3753519605655251" />
      </head>
      <body className={inter.className}>
        {children}

        {/* Google AdSense script */}
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3753519605655251"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Structured data for Organization */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "LegalPO",
              url: "https://legalpo.cl",
              logo: "https://legalpo.cl/logo.png",
              sameAs: ["https://facebook.com/legalpo", "https://twitter.com/legalpo", "https://instagram.com/legalpo"],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+56-9-1234-5678",
                contactType: "customer service",
                areaServed: "CL",
                availableLanguage: "Spanish",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
