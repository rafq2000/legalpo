import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { MetaTags } from "@/components/meta-tags"

export default function NotFound() {
  return (
    <>
      <MetaTags
        title="Página no encontrada | LegalPO"
        description="Lo sentimos, la página que estás buscando no existe o ha sido movida."
        noindex={true}
      />
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 container py-10">
          <div className="flex flex-col items-center justify-center text-center space-y-6 py-10">
            <h1 className="text-4xl font-bold">404 - Página no encontrada</h1>
            <p className="text-xl text-muted-foreground max-w-md">
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/">Volver al inicio</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/consulta-deudas">Consultar sobre deudas</Link>
              </Button>
            </div>
            <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl">
              <Link href="/calculadora-finiquito" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h2 className="font-semibold mb-2">Calculadora de Finiquito</h2>
                <p className="text-sm text-muted-foreground">Calcula tu finiquito según la legislación chilena</p>
              </Link>
              <Link href="/calculadora-pensiones" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h2 className="font-semibold mb-2">Calculadora de Pensiones</h2>
                <p className="text-sm text-muted-foreground">Calcula pensiones alimenticias según la ley</p>
              </Link>
              <Link href="/analyze" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h2 className="font-semibold mb-2">Analizar Documentos</h2>
                <p className="text-sm text-muted-foreground">Analiza documentos legales con IA</p>
              </Link>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
