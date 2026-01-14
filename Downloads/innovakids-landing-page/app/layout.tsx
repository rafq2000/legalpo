import type React from "react"
import type { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "Cursos de IA para Niños y Adolescentes 🚀 Clases de Inteligencia Artificial Online 8-17 años | Innovakids",
  description:
    "⭐ Los mejores cursos de inteligencia artificial para niños y adolescentes de 8-17 años. Clases de IA online con grupos de 5 alumnos. Aprende cómo enseñar IA a tus hijos en México, Colombia, Argentina, Chile, Perú, España. ¡Solo 2 de 20 cupos disponibles!",
  keywords: [
    "cursos de ia para niños",
    "cursos de ia para adolescentes",
    "clases de inteligencia artificial para niños",
    "clases de inteligencia artificial para adolescentes",
    "cursos de inteligencia artificial para niños",
    "cursos de inteligencia artificial para adolescentes",
    "ia para niños",
    "ia para adolescentes",
    "curso de ia para niños",
    "curso de ia para adolescentes",
    "clases de ia para niños",
    "clases de ia para adolescentes",
    "curso inteligencia artificial para niños",
    "curso inteligencia artificial para adolescentes",
    "cursos ia para niños",
    "cursos ia para adolescentes",
    "curso de inteligencia artificial para niños",
    "curso de inteligencia artificial para adolescentes",
    "aprender ia para niños",
    "aprender ia para adolescentes",
    "educación inteligencia artificial infantil",
    "educación inteligencia artificial adolescentes",
    "talleres ia niños online",
    "talleres ia adolescentes online",
    "capacitación ia niños",
    "capacitación ia adolescentes",
    "escuela ia niños latinoamérica",
    "escuela ia adolescentes latinoamérica",
    "academia inteligencia artificial niños",
    "academia inteligencia artificial adolescentes",
    "codingal alternativa",
    "mejor curso ia niños latam",
    "mejor curso ia adolescentes latam",
    "curso ia niños grupos pequeños",
    "curso ia adolescentes grupos pequeños",
    "clases personalizadas ia niños",
    "clases personalizadas ia adolescentes",
    "curso ia niños certificado",
    "curso ia adolescentes certificado",
    "ia para jovenes",
    "cursos programacion adolescentes",
    "tecnologia para adolescentes",
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
      "es-MX": "/mexico",
      "es-CO": "/colombia",
      "es-AR": "/argentina",
      "es-ES": "/espana",
      "es-CL": "/chile",
      "es-PE": "/peru",
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
    title: "Cursos de IA para Niños y Adolescentes | Clases de Inteligencia Artificial Online 8-17 años - Innovakids",
    description:
      "Los cursos de inteligencia artificial para niños y adolescentes más exclusivos de Latinoamérica. Clases de IA en grupos de 5 alumnos con proyectos reales. ¡2 de 20 cupos disponibles!",
    url: "https://www.innovakidslatam.com",
    siteName: "Innovakids",
    images: [
      {
        url: "/hero-child-learning-ai.jpg",
        width: 1200,
        height: 630,
        alt: "Niños y adolescentes aprendiendo Inteligencia Artificial con Innovakids en Latinoamérica",
      },
    ],
    locale: "es_419",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de IA para Niños y Adolescentes | Clases de Inteligencia Artificial - Innovakids",
    description:
      "⭐ Cursos de inteligencia artificial para niños y adolescentes 8-17 años. Clases online con grupos de 5. ¡Solo 2 de 20 cupos!",
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
              fbq('init', 'TU_PIXEL_ID_AQUI');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=TU_PIXEL_ID_AQUI&ev=PageView&noscript=1"
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
                ratingValue: "5",
                reviewCount: "52", // Updated from 3 to 52 reviews
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
                ratingValue: "5",
                reviewCount: "52", // Updated from 3 to 52 reviews
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
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Mi hijo necesita conocimientos previos?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, solo curiosidad. El programa está diseñado para principiantes totales. Comenzamos desde cero con conceptos básicos y avanzamos gradualmente.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué pasa si falta a una clase?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Todas las clases se graban y tu hijo tiene acceso de por vida. Puede ver y revisar las lecciones cuantas veces quiera, a su propio ritmo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué equipo necesita?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Solo un computador o tablet con internet. Todas las herramientas que usamos son gratuitas y basadas en la web. No necesitas comprar software adicional.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo funcionan los grupos de 5 alumnos?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cada grupo tiene máximo 5 estudiantes para garantizar atención personalizada. Los grupos se forman por edad y nivel, y tienen sesiones en vivo con el instructor.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuánto tiempo dura el programa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El programa principal es de 5 semanas con clases 2 veces por semana. El acceso al contenido, comunidad y actualizaciones es de por vida.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué incluye exactamente el programa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Incluye 10 clases en vivo, acceso de por vida a grabaciones, comunidad privada, certificado, kit de prompts, sesión de presentación de proyectos, y todas las actualizaciones futuras.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué pasa si no funciona para mi hijo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Garantía 100% sin riesgo. Si después de la primera clase sientes que no es lo que esperabas, te devolvemos el 100% de tu inversión. Sin preguntas, sin complicaciones.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuál es la edad mínima y máxima?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El programa está diseñado para niños y adolescentes de 8 a 17 años. Esta edad es ideal porque tienen la madurez cognitiva para entender conceptos de IA y la creatividad para aplicarlos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Los pagos son seguros?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutamente. Todos los pagos se procesan a través de PayPal y Mercado Pago con encriptación SSL de nivel bancario. Tus datos están 100% protegidos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Puedo pagar en cuotas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, si eliges pagar con Mercado Pago, puedes dividir el pago en cuotas según las opciones disponibles en tu país.",
                  },
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
                ratingValue: "5",
                reviewCount: "52", // Updated from 3 to 52 reviews
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
