"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart, Settings, AlertCircle, Users, MessageSquare, FileText } from "lucide-react"

export function AdminNav() {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Analíticas",
      href: "/admin/analytics",
      icon: BarChart,
    },
    {
      title: "Google Analytics",
      href: "/admin/google-analytics",
      icon: BarChart,
    },
    {
      title: "Estado de IA",
      href: "/admin/ai-status",
      icon: AlertCircle,
    },
    {
      title: "Usuarios",
      href: "/admin/users",
      icon: Users,
    },
    {
      title: "Feedback",
      href: "/admin/feedback",
      icon: MessageSquare,
    },
    {
      title: "Documentos",
      href: "/admin/documents",
      icon: FileText,
    },
    {
      title: "Configuración",
      href: "/admin/settings",
      icon: Settings,
    },
  ]

  return (
    <nav className="grid items-start gap-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
          )}
        >
          <item.icon className="mr-2 h-4 w-4" />
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  )
}
