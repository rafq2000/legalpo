import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1 container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Página no encontrada</h1>
        <p className="text-lg text-gray-600 mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition-colors"
        >
          Volver al inicio
        </Link>
      </main>

      <SiteFooter />
    </div>
  )
}
