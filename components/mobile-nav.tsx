"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Home, FileText, Calculator, MessageSquare } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function MobileNav({ isAuthenticated }: { isAuthenticated: boolean }) {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 sm:max-w-xs">
        <div className="px-7">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="font-bold text-xl">DocuScan AI</span>
          </Link>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="pl-7 pr-2">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center text-blue-800 py-2 text-base font-medium",
                  pathname === "/" && "text-blue-900 font-semibold",
                )}
              >
                <Home className="mr-2 h-5 w-5" />
                Inicio
              </Link>
              <Link
                href={isAuthenticated ? "/analyze" : "/login?callbackUrl=/analyze"}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center text-blue-800 py-2 text-base font-medium",
                  pathname === "/analyze" && "text-blue-900 font-semibold",
                )}
              >
                <FileText className="mr-2 h-5 w-5" />
                Analizar documento
              </Link>

              <Separator className="my-2" />
              <h4 className="text-sm font-medium text-blue-900 mb-1 flex items-center">
                <Calculator className="mr-2 h-4 w-4" />
                Calculadoras
              </h4>
              <Link
                href={isAuthenticated ? "/calculadora-pensiones" : "/login?callbackUrl=/calculadora-pensiones"}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center text-blue-800 py-2 text-base font-medium pl-7",
                  pathname === "/calculadora-pensiones" && "text-blue-900 font-semibold",
                )}
              >
                Calculadora de Pensiones
              </Link>
              <Link
                href={isAuthenticated ? "/calculadora-finiquito" : "/login?callbackUrl=/calculadora-finiquito"}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center text-blue-800 py-2 text-base font-medium pl-7",
                  pathname === "/calculadora-finiquito" && "text-blue-900 font-semibold",
                )}
              >
                Calculadora de Finiquito
              </Link>

              <Separator className="my-2" />
              <h4 className="text-sm font-medium text-blue-900 mb-1 flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                Consultas
              </h4>
              <Link
                href={isAuthenticated ? "/ask" : "/login?callbackUrl=/ask"}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center text-blue-800 py-2 text-base font-medium pl-7",
                  pathname === "/ask" && "text-blue-900 font-semibold",
                )}
              >
                Consultar deudas
              </Link>
              <Link
                href={isAuthenticated ? "/dudas-laborales" : "/login?callbackUrl=/dudas-laborales"}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center text-blue-800 py-2 text-base font-medium pl-7",
                  pathname === "/dudas-laborales" && "text-blue-900 font-semibold",
                )}
              >
                Dudas Laborales
              </Link>
              <Link
                href={isAuthenticated ? "/generador-contratos" : "/login?callbackUrl=/generador-contratos"}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center text-blue-800 py-2 text-base font-medium pl-7",
                  pathname === "/generador-contratos" && "text-blue-900 font-semibold",
                )}
              >
                Generador de Contratos
              </Link>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
