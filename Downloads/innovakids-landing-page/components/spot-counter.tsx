"use client"

import { useState } from "react"

export function SpotCounter() {
  const [spotsLeft] = useState(5)

  const getUrgencyStyle = () => {
    if (spotsLeft <= 5) return "text-red-500 font-extrabold animate-pulse text-2xl"
    if (spotsLeft <= 10) return "text-red-400 font-bold animate-pulse text-xl"
    if (spotsLeft <= 20) return "text-orange-400 font-bold text-xl"
    return "text-[#4DD0E1] font-bold text-xl"
  }

  return <span className={getUrgencyStyle()}>{spotsLeft}</span>
}
