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
import { AdsenseScript } from "@/components/adsense-script"
import { LawyerContactButton } from "@/components/lawyer-contact-button"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LegalPO - Herramientas legales con inteligencia artificial",
  description: "Herramientas legales con inteligencia artificial para simplificar tus consultas jurídicas en Chile.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-adsense-account" content="ca-pub-3753519605655251" />
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
            <Suspense fallback={null}>
              <CookieConsentBanner />
            </Suspense>
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
              <AdsenseScript />
            </Suspense>
            {/* Structured data for better SEO */}
            <Script
              id="structured-data"
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
                }),
              }}
            />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
