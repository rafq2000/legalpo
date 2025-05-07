"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav({ className, isAdmin, ...props }: React.HTMLAttributes<HTMLElement> & { isAdmin?: boolean }) {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Inicio",
      active: pathname === "/",
    },
    {
      href: "/ask",
      label: "Consultas",
      active: pathname === "/ask",
    },
    {
      href: "/generador-contratos",
      label: "Contratos",
      active: pathname.startsWith("/generador-contratos"),
    },
    {
      href: "/como-funciona",
      label: "Cómo funciona",
      active: pathname === "/como-funciona",
    },
  ]

  const linkClasses = "text-sm font-medium transition-colors hover:text-primary"

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-primary" : "text-muted-foreground",
          )}
        >
          {route.label}
        </Link>
      ))}
      {isAdmin && (
        <>
          <Link href="/admin/analytics" className={cn(linkClasses)}>
            Analytics
          </Link>
          <Link href="/admin/feedback" className={cn(linkClasses)}>
            Feedback
          </Link>
          <Link href="/admin/cache" className={cn(linkClasses)}>
            Caché
          </Link>
        </>
      )}
    </nav>
  )
}
