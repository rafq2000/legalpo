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
import Script from "next/script"
import { ForceLightTheme } from "@/components/force-light-theme"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LegalPO - Herramientas legales con inteligencia artificial",
  description: "Herramientas legales con inteligencia artificial para simplificar tus consultas jurídicas en Chile.",
  robots: "index, follow",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-adsense-account" content="ca-pub-3753519605655251" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <ForceLightTheme />
            {/* Resto de componentes existentes */}
            {children}
            <Toaster />
            <Analytics />
            <Suspense fallback={null}>
              <AnalyticsTracker />
            </Suspense>
            <Suspense fallback={null}>
              <CookieConsentBanner />
            </Suspense>
            <Suspense fallback={null}></Suspense>

            {/* Google AdSense Script */}
            <Script
              id="google-adsense"
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3753519605655251"
              strategy="lazyOnload"
              crossOrigin="anonymous"
            />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
