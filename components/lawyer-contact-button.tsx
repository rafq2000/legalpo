"use client"

import { Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function LawyerContactButton() {
  return (
    <Button
      asChild
      className="lawyer-button floating-button bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 z-40"
      size="lg"
      aria-label="Contactar abogado"
    >
      <Link href="/contactar-abogado">
        <Scale className="h-6 w-6" />
      </Link>
    </Button>
  )
}
