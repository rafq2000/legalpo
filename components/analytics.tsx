"use client"

export function Analytics() {
  return (
    <>
      {/* Google Analytics o cualquier otro script de análisis */}
      {process.env.NODE_ENV === "production" && (
        <>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XXXXXXXXXX');
              `,
            }}
          />
        </>
      )}
    </>
  )
}
