import type React from "react"
import Link from "next/link"
import { ArrowLeft, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import { AdUnit } from "@/components/ad-unit"

interface PageLayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  showBackButton?: boolean
  showAds?: boolean
}

export function PageLayout({ children, title, description, showBackButton = true, showAds = true }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold">LegalPO</span>
            </Link>
            {showBackButton && (
              <Button variant="ghost" size="sm" asChild className="gap-1">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Volver al inicio
                </Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      {showAds && (
        <div className="container py-4 mt-2">
          <AdUnit slot="6543210987" format="horizontal" className="horizontal" />
        </div>
      )}

      <main className="flex-1">
        {(title || description) && (
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  {title && <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h1>}
                  {description && (
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {children}
      </main>

      <SiteFooter />
    </div>
  )
}
