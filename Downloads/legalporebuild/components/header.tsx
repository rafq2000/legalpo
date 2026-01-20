import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, FileSignature } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const navLinks = [
    { href: "/herramientas", label: "Herramientas" },
    { href: "/calculators/finiquito", label: "Calculadora Finiquito" },
    { href: "/como-funciona", label: "Cómo Funciona" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="bg-emerald-500/10 p-2 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-300">
            <FileSignature className="h-6 w-6 text-emerald-400" />
          </div>
          <span className="font-bold text-xl text-white tracking-tight">LegalPO <span className="text-emerald-400">2026</span></span>
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-300 transition-colors hover:text-emerald-400 hover:underline decoration-emerald-500/50 underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Navegación móvil */}
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-sidebar border-white/10 text-white">
              <Link href="/" className="flex items-center space-x-2 mb-8">
                <FileSignature className="h-6 w-6 text-emerald-400" />
                <span className="font-bold text-xl">LegalPO</span>
              </Link>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-slate-300 text-lg transition-colors hover:text-emerald-400 font-medium border-b border-white/5 pb-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
