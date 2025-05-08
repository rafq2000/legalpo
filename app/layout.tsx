import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import AnalyticsTracker from "@/components/analytics-tracker"
import CookieConsentBanner from "@/components/cookie-consent-banner"
import { Suspense } from "react"
import { Providers } from "./providers"
import { ForceLightTheme } from "@/components/force-light-theme"
import { cn } from "@/lib/utils"
import FirebaseTracker from "@/components/firebase-tracker"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { LawyerContactButton } from "@/components/lawyer-contact-button"
import { AdsenseAutoAds } from "@/components/adsense-auto-ads"
import Script from "next/script"
import { CanonicalUrl } from "@/components/canonical-url"
import { AdSenseScript } from "@/components/adsense-script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "LegalPO - Asistencia Legal Inteligente",
    template: "%s | LegalPO",
  },
  description:
    "Asistencia legal inteligente para todos. Analiza documentos, genera contratos y resuelve dudas legales.",
  keywords: ["asistencia legal", "contratos", "documentos legales", "asesoría jurídica", "inteligencia artificial"],
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
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <AdSenseScript />
        <CanonicalUrl />
        <meta name="google-adsense-account" content="ca-pub-3753519605655251" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <ForceLightTheme />
            {children}
            <Toaster />
            <Analytics />
            <Suspense fallback={null}>
              <AnalyticsTracker />
            </Suspense>
            <CookieConsentBanner />
            <Suspense fallback={null}>
              <FirebaseTracker />
            </Suspense>
            <Suspense fallback={null}>
              <WhatsAppButton />
            </Suspense>
            <Suspense fallback={null}>
              <LawyerContactButton />
            </Suspense>
            <Suspense fallback={null}>
              <AdsenseAutoAds />
            </Suspense>
            {/* Structured data for better SEO */}
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
                  sameAs: [
                    "https://facebook.com/legalpo",
                    "https://twitter.com/legalpo",
                    "https://instagram.com/legalpo",
                  ],
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
            <Script
              id="structured-data-legal-service"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "LegalService",
                  name: "LegalPO",
                  description:
                    "Herramientas legales con inteligencia artificial para simplificar tus consultas jurídicas en Chile.",
                  url: "https://legalpo.cl",
                  areaServed: "Chile",
                  serviceType: "Asesoría legal",
                  provider: {
                    "@type": "Organization",
                    name: "LegalPO",
                    url: "https://legalpo.cl",
                  },
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "CLP",
                    availability: "https://schema.org/InStock",
                  },
                }),
              }}
            />
            {/* Google AdSense script */}
            <Script
              id="google-adsense"
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3753519605655251"
              crossOrigin="anonymous"
              strategy="afterInteractive"
            />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
