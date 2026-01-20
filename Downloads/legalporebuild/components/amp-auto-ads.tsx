import Script from "next/script"

export function AmpAutoAds() {
  return (
    <>
      {/* Este componente solo debe renderizarse en páginas AMP */}
      <Script
        id="amp-auto-ads-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            <script async custom-element="amp-auto-ads"
                  src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js">
            </script>
          `,
        }}
      />
      <amp-auto-ads type="adsense" data-ad-client="ca-pub-3753519605655251"></amp-auto-ads>
    </>
  )
}
