import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Head from "next/head"

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Página no encontrada - LegalPO</title>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 container py-10">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <Shield className="h-16 w-16 text-primary mb-4" />
            <h1 className="text-4xl font-bold mb-2">Página no encontrada</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-md">
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/">Volver al inicio</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/contratos">Ver contratos</Link>
              </Button>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
