import type React from "react"

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
        <style amp-custom>
          {`
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 1rem;
            }
            header {
              text-align: center;
              margin-bottom: 2rem;
            }
            h1 {
              color: #1e40af;
            }
            section {
              margin-bottom: 2rem;
            }
            footer {
              text-align: center;
              margin-top: 2rem;
              padding-top: 1rem;
              border-top: 1px solid #eee;
              font-size: 0.8rem;
            }
          `}
        </style>
      </head>
      <body>
        <amp-auto-ads type="adsense" data-ad-client="ca-pub-3753519605655251"></amp-auto-ads>
        {children}
      </body>
    </html>
  )
}
