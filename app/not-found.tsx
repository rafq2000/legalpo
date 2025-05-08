import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] text-center px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Página no encontrada</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Button asChild>
        <Link href="/">Volver al inicio</Link>
      </Button>
    </div>
  )
}
