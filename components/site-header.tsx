"use client"

import Link from "next/link"
import { Shield } from "lucide-react"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"

export function SiteHeader() {
  const session = useSession()
  const status = session?.status || "unauthenticated"
  const sessionData = session?.data
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Este useEffect asegura que el componente solo se renderice en el cliente
  useEffect(() => {
    setMounted(true)
    console.log("Session status:", status)
    console.log("Session data:", sessionData)
  }, [session, status])

  // Función para obtener las iniciales del nombre del usuario
  const getInitials = (name) => {
    if (!name) return "U"
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  // Obtener el nombre para mostrar
  const displayName =
    sessionData?.user?.name || (sessionData?.user?.email ? sessionData.user.email.split("@")[0] : "Usuario")

  return (
    <header className="bg-blue-900 text-white py-4 sticky top-0 z-50 w-full border-b border-blue-800">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6" />
            <Link href="/" className="font-bold text-xl">
              LegalPO
            </Link>
          </div>

          {/* Navegación directamente en el header */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname === "/" ? "text-white" : "text-blue-100"
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/ask"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname === "/ask" ? "text-white" : "text-blue-100"
              }`}
            >
              Consultas Generales
            </Link>
            <Link
              href="/deudas"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname === "/deudas" ? "text-white" : "text-blue-100"
              }`}
            >
              Consultas Deudas
            </Link>
            <Link
              href="/generador-contratos"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname.startsWith("/generador-contratos") ? "text-white" : "text-blue-100"
              }`}
            >
              Contratos
            </Link>
            <Link
              href="/como-funciona"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname === "/como-funciona" ? "text-white" : "text-blue-100"
              }`}
            >
              Cómo funciona
            </Link>
          </nav>
        </div>

        {mounted && status === "authenticated" && sessionData?.user ? (
          <div className="flex items-center gap-4">
            <span className="text-white font-medium">Bienvenido, {displayName}</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={sessionData?.user?.image || ""} alt={displayName} />
                    <AvatarFallback className="bg-blue-700">{getInitials(displayName)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })} className="text-red-600 cursor-pointer">
                  Cerrar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="flex items-center space-x-6">
            <Link href="/login" className="text-blue-100 hover:text-white transition-colors">
              Iniciar sesión
            </Link>
            <Button asChild className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="/register">Registrarse</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
