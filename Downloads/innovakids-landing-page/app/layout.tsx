import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { TrackingPixels } from "@/components/tracking-pixels"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030712",
}

export const metadata: Metadata = {
  title: "Curso de Inteligencia Artificial para Niños | Crea Apps y Videojuegos | InnovaKids",
  description:
    "El curso de IA #1 para niños de 8 a 14 años. En 10 clases online en vivo, tu hijo aprenderá a crear sus propias apps, videojuegos y proyectos reales con Inteligencia Artificial. Agenda una evaluación gratis hoy.",
  keywords: [
    "curso inteligencia artificial niños",
    "curso inteligencia artificial adolescentes",
    "clases online ia niños",
    "escuela de inteligencia artificial para niños",
    "aprender chatgpt para niños",
    "curso de programación y ia para niños",
    "talleres de tecnologia para niños",
    "inteligencia artificial para niños de 8 a 14 años",
    "curso de verano inteligencia artificial",
    "clases extraescolares tecnologia",
    "codingal alternativa",
    "tekhne alternativa",
    "crack the code alternativa",
    "byju's future school alternativa",
  ],
  authors: [{ name: "Innovakids" }],
  creator: "Innovakids",
  publisher: "Innovakids",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.innovakidslatam.com"),
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      "es-MX": "/mx",
      "es-CO": "/co",
      "es-AR": "/ar",
      "es-ES": "/es",
      "es-CL": "/cl",
      "es-PE": "/pe",
      "es-VE": "/ve",
      "es-EC": "/ec",
      "es-BO": "/bo",
      "es-PY": "/py",
      "es-UY": "/uy",
      "es-PA": "/pa",
      "es-CR": "/cr",
      "es-DO": "/do",
      "es-GT": "/gt",
      "es-HN": "/hn",
      "es-SV": "/sv",
      "es-NI": "/ni",
      "es-PR": "/pr",
      "x-default": "/",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Curso de Inteligencia Artificial para Niños | Crea Apps y Videojuegos",
    description:
      "Curso online para niños de 8-14 años. En 10 clases, crea tus propios videojuegos y apps con IA. ¡Agenda una clase gratis!",
    url: "https://www.innovakidslatam.com",
    siteName: "Innovakids",
    images: [
      {
        url: "/hero-child-learning-ai.jpg",
        width: 1200,
        height: 630,
        alt: "Niños creando apps y juegos con Inteligencia Artificial en Innovakids",
      },
    ],
    locale: "es_419",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🔥 ÚLTIMOS 8 CUPOS | Tu Hijo Crea Apps con IA (No Solo Consume)",
    description:
      "⚡ 10 clases vivo, max 5 niños. Apps + juegos reales. $197. 500+ latinos graduados ⭐4.9/5. Cierra en 7 días.",
    images: ["/hero-child-learning-ai.jpg"],
  },
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
  verification: {
    google: "5DUPn39I0nG06dUypWPbuuaNnTp5tTH7GqaLxwCjv2A",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Removed reCAPTCHA script loading to fix deployment error

  return (
    <html lang="es-419">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        <script async defer src="https://www.googletagmanager.com/gtag/js?id=AW-796498700"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-796498700');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {
                'send_to': 'AW-796498700/sY1fCLaiq9sbEIy25vsC',
                'value': 1.0,
                'currency': 'CLP'
              });
            `,
          }}
        />
        {/* End of Google Ads gtag tracking */}
        <script
          id="facebook-pixel"
          defer
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              // Facebook Pixel - Configure your Pixel ID in production
              // fbq('init', 'YOUR_PIXEL_ID');
              // fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src=""
            alt=""
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Innovakids",
              alternateName: ["Innova Kids", "InnovaKids LATAM", "Cursos IA Niños"],
              description:
                "Los mejores cursos de inteligencia artificial para niños y adolescentes de 8 a 17 años en Latinoamérica. Clases de IA online con grupos reducidos y proyectos reales.",
              url: "https://www.innovakidslatam.com",
              logo: "https://www.innovakidslatam.com/logo-innovakids.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Diagonal Oriente 1620",
                addressLocality: "Providencia",
                addressRegion: "RM",
                addressCountry: "CL",
              },
              areaServed: [
                { "@type": "Country", name: "Chile" },
                { "@type": "Country", name: "México" },
                { "@type": "Country", name: "Colombia" },
                { "@type": "Country", name: "Argentina" },
                { "@type": "Country", name: "Perú" },
                { "@type": "Country", name: "Ecuador" },
                { "@type": "Country", name: "Uruguay" },
                { "@type": "Country", name: "Costa Rica" },
                { "@type": "Country", name: "Panamá" },
                { "@type": "Place", name: "Latinoamérica" },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+56-9-6475-4219",
                contactType: "customer service",
                email: "innovakidslatam@gmail.com",
                availableLanguage: ["Spanish"],
                areaServed: "LATAM",
              },
              sameAs: ["https://www.instagram.com/innovakidslatam"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Cursos de IA para Niños y Adolescentes | Clases de Inteligencia Artificial Online - Innovakids",
              description:
                "Programa completo de cursos de inteligencia artificial para niños y adolescentes de 8-17 años. Clases de IA en vivo con grupos de 5 alumnos. Aprende a crear apps, juegos y proyectos con IA desde cero.",
              provider: {
                "@type": "Organization",
                name: "Innovakids",
                sameAs: "https://www.innovakidslatam.com",
                url: "https://www.innovakidslatam.com",
              },
              educationalLevel: "Beginner",
              audience: {
                "@type": "EducationalAudience",
                educationalRole: "student",
                audienceType: "Children and Adolescents aged 8-17",
                geographicArea: {
                  "@type": "Place",
                  name: "Latin America",
                },
              },
              coursePrerequisites: "Ninguno - Curso para principiantes totales",
              numberOfLessons: 10,
              timeRequired: "P5W",
              inLanguage: "es",
              availableLanguage: "Spanish",
              courseMode: "online",
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "online",
                courseWorkload: "PT90M",
                instructor: {
                  "@type": "Person",
                  name: "Innovakids Team",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127", // Consistent with title
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Curso de IA para Niños y Adolescentes - Innovakids",
              description:
                "Programa completo de 10 clases de IA para niños y adolescentes de 8-17 años en toda Latinoamérica. Grupos reducidos de 5 alumnos, acceso de por vida, certificado incluido.",
              image: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
              brand: {
                "@type": "Brand",
                name: "Innovakids",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
              },
            }),
          }}
        />
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
                  item: "https://www.innovakidslatam.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Cursos de IA para Niños y Adolescentes",
                  item: "https://www.innovakidslatam.com/#programa",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Clases de Inteligencia Artificial",
                  item: "https://www.innovakidslatam.com/#clases",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: "Cómo Funcionan los Cursos de IA para Niños y Adolescentes - Innovakids",
              description:
                "Descubre cómo nuestros cursos de inteligencia artificial para niños y adolescentes transforman a estudiantes en creadores de tecnología.",
              thumbnailUrl: "https://www.innovakidslatam.com/video-thumbnail.jpg",
              uploadDate: "2025-01-01T00:00:00Z",
              duration: "PT2M30S",
              contentUrl: "https://www.innovakidslatam.com/video-cursos-ia-ninos",
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <TrackingPixels />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
