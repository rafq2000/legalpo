"use client"

import Script from "next/script"

export function TrackingPixels() {
  return (
    <>
      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          
          // TODO: Replace 'YOUR_PIXEL_ID' with your actual Meta Pixel ID
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // TODO: Replace 'YOUR_GA_ID' with your actual Google Analytics ID
          gtag('config', 'YOUR_GA_ID');
        `}
      </Script>
    </>
  )
}
