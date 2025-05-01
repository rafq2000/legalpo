"use client"

import { AdUnit } from "./ad-unit"

export function SidebarAds() {
  return (
    <div className="space-y-6">
      <AdUnit slot="1122334455" format="rectangle" position="sidebar" />

      <AdUnit slot="5544332211" format="rectangle" position="sidebar" />
    </div>
  )
}
