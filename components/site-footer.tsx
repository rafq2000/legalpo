import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Legal Po. Todos los derechos reservados.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <nav className="flex gap-4 text-sm">
            <Link href="/quienes-somos" className="text-muted-foreground hover:text-foreground">
              Quiénes Somos
            </Link>
            <Link href="/como-funciona" className="text-muted-foreground hover:text-foreground">
              Cómo Funciona
            </Link>
            <Link href="/terminos-legales" className="text-muted-foreground hover:text-foreground">
              Términos Legales
            </Link>
          </nav>
          <div className="flex space-x-2">
            <Link href="https://facebook.com" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
