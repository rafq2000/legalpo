import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import { AdsenseScript } from "@/components/adsense-script"
import { AdsenseAutoAds } from "@/components/adsense-auto-ads"
import { GlobalStructuredData } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"], display: "swap" })

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
    // Nicho: Adulto Mayor (Baja competencia)
    "abogado tercera edad chile",
    "abogado para abuelitos",
    "derechos adulto mayor chile",
    "abogado interdiccion chile",
    "abogado herencias tercera edad",
    "maltrato adulto mayor legal",
    // Nicho: Derechos del Padre
    "abogado para papas",
    "abogado de familia hombres",
    "tuicion papas chile",
    "derechos del padre chile",
    "divorcio hombres chile",
    // Nicho: Reclamos Administrativos
    "reclamos administrativos chile",
    "abogado apelacion compin",
    "abogado suseso gratis",
    "reclamo licencia medica rechazada",
    // Nicho: Ciberacoso y Funas
    "abogado funas chile",
    "eliminar funas google",
    "denuncia ciberacoso pdi",
    "abogado delitos informaticos",
    // Nicho: Mascotas
    "abogado ley cholito",
    "custodia mascotas divorcio",
    "denuncia maltrato animal legal",
    // Nicho: Vecinos y Ruidos
    "abogado ruidos molestos",
    "abogado ley copropiedad",
    "problemas gastos comunes",
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

        <meta name="msapplication-config" content="/browserconfig.xml" />
        <GlobalStructuredData />


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
