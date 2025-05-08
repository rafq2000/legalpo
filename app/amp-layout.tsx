import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LegalPO - Herramientas legales con IA para consultas jurídicas en Chile",
  description:
    "Analiza documentos legales, calcula finiquitos, pensiones alimenticias y obtén respuestas a tus consultas sobre deudas y derecho laboral en Chile con inteligencia artificial.",
  // Otras metadatas...
}

export default function AmpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" amp="">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,minimum-scale=1" />
        <link rel="canonical" href="https://legalpo.cl" />
        <style
          amp-boilerplate=""
          dangerouslySetInnerHTML={{
            __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`,
          }}
        />
        <noscript>
          <style
            amp-boilerplate=""
            dangerouslySetInnerHTML={{
              __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`,
            }}
          />
        </noscript>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-auto-ads" src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"></script>
      </head>
      <body>
        <amp-auto-ads type="adsense" data-ad-client="ca-pub-3753519605655251"></amp-auto-ads>
        {children}
      </body>
    </html>
  )
}
