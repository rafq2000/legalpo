"use client"

import dynamic from "next/dynamic"

const ExitPopup = dynamic(() => import("@/components/exit-popup").then((mod) => ({ default: mod.ExitPopup })), {
  ssr: false,
})

const StickyFooterCTA = dynamic(
  () => import("@/components/sticky-footer-cta").then((mod) => ({ default: mod.StickyFooterCTA })),
  { ssr: false },
)

export function ClientOnlyComponents() {
  return (
    <>
      <ExitPopup />
      <StickyFooterCTA />
    </>
  )
}
