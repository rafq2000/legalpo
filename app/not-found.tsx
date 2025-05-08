import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FileSearch } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Página no encontrada | LegalPO",
  description: "Lo sentimos, la página que buscas no existe o ha sido movida.",
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container flex items-center justify-center py-20">
        <div className="text-center max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-50 p-4 rounded-full">
              <FileSearch className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Página no encontrada</h1>
          <p className="text-muted-foreground mb-6">
            Lo sentimos, la página que buscas no existe o ha sido movida a otra ubicación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">Volver al inicio</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/informacion-legal">Explorar información legal</Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
