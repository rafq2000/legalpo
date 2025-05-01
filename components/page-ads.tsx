"use client"

import { AdUnit } from "./ad-unit"

export function PageAds() {
  return (
    <>
      {/* Anuncio en la parte superior */}
      <AdUnit slot="1234567890" format="horizontal" position="header" className="max-w-5xl mx-auto" />

      {/* Anuncio en la parte inferior */}
      <AdUnit slot="0987654321" format="horizontal" position="footer" className="max-w-5xl mx-auto" />
    </>
  )
}
