import { Navigation } from "@/components/navigation"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Testimonios - Innovakids",
  description: "Lee las experiencias de padres y niños que han transformado su aprendizaje con Innovakids",
}

export default function TestimoniosPage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-[#4DD0E1] mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>
          <TestimonialsSection />
        </div>
      </main>
    </div>
  )
}
