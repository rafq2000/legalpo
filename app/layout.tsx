import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth-provider"
import { LawyerContactButton } from "@/components/lawyer-contact-button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FeedbackWidget } from "@/components/feedback/feedback-widget" // Añadir esta línea
import GoogleAnalytics from "@/components/google-analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LegalPO - Análisis de documentos legales y consultas jurídicas en Chile",
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
    title: "LegalPO - Análisis de documentos legales y consultas jurídicas en Chile",
    description:
      "Analiza documentos legales, calcula finiquitos, pensiones alimenticias y obtén respuestas a tus consultas sobre deudas y derecho laboral en Chile.",
    url: "https://legalpo.cl",
    siteName: "LegalPO",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LegalPO - Análisis de documentos legales y consultas jurídicas en Chile",
    description:
      "Analiza documentos legales, calcula finiquitos, pensiones alimenticias y obtén respuestas a tus consultas sobre deudas y derecho laboral en Chile.",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3753519605655251"
          crossorigin="anonymous"
        ></script>
        <meta name="google-site-verification" content="tu-código-de-verificación" />
        <link rel="canonical" href="https://legalpo.cl" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Suspense>
              {children}
              <WhatsAppButton />
              <LawyerContactButton />
              <FeedbackWidget /> {/* Añadir el widget de feedback */}
            </Suspense>
          </ThemeProvider>
        </AuthProvider>
        <GoogleAnalytics />
      </body>
    </html>
  )
}
