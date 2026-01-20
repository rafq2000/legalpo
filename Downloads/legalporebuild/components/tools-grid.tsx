"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator, FileSearch, Heart, Building, Users, FileSignature, ArrowRight, Sparkles } from "lucide-react"

const tools = [
  {
    id: "finiquito",
    title: "Calculadora de Finiquito",
    description: "Calcula tu finiquito laboral según la ley chilena con precisión",
    icon: <Calculator className="h-8 w-8" />,
    href: "/calculators/finiquito",
    category: "Calculadoras",
    color: "bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-600",
    borderColor: "border-emerald-500/30",
    hoverColor: "hover:from-emerald-500 hover:via-emerald-400 hover:to-emerald-500",
    iconBg: "bg-emerald-700/50",
    popular: true,
  },
  {
    id: "pension",
    title: "Pensión de Alimentos",
    description: "Estima el monto de pensión alimenticia de forma precisa",
    icon: <Heart className="h-8 w-8" />,
    href: "/calculators/pension-alimentos",
    category: "Calculadoras",
    color: "bg-gradient-to-br from-slate-600 via-slate-500 to-slate-600",
    borderColor: "border-slate-500/30",
    hoverColor: "hover:from-slate-500 hover:via-slate-400 hover:to-slate-500",
    iconBg: "bg-slate-700/50",
    popular: true,
  },
  {
    id: "herencia",
    title: "Calculadora de Herencia",
    description: "Distribución de bienes hereditarios según la ley",
    icon: <Building className="h-8 w-8" />,
    href: "/calculators/herencia",
    category: "Calculadoras",
    color: "bg-gradient-to-br from-violet-600 via-violet-500 to-violet-600",
    borderColor: "border-violet-500/30",
    hoverColor: "hover:from-violet-500 hover:via-violet-400 hover:to-violet-500",
    iconBg: "bg-violet-700/50",
    popular: false,
  },
  {
    id: "indemnizacion",
    title: "Indemnización por Despido",
    description: "Calcula tu indemnización laboral de manera exacta",
    icon: <Users className="h-8 w-8" />,
    href: "/calculators/indemnizacion",
    category: "Calculadoras",
    color: "bg-gradient-to-br from-amber-600 via-amber-500 to-amber-600",
    borderColor: "border-amber-500/30",
    hoverColor: "hover:from-amber-500 hover:via-amber-400 hover:to-amber-500",
    iconBg: "bg-amber-700/50",
    popular: false,
  },
  {
    id: "analyzer",
    title: "Analizador de Documentos",
    description: "Analiza contratos y documentos legales con IA avanzada",
    icon: <FileSearch className="h-8 w-8" />,
    href: "/tools/document-analyzer",
    category: "Documentos",
    color: "bg-gradient-to-br from-teal-600 via-teal-500 to-teal-600",
    borderColor: "border-teal-500/30",
    hoverColor: "hover:from-teal-500 hover:via-teal-400 hover:to-teal-500",
    iconBg: "bg-teal-700/50",
    popular: true,
  },
  {
    id: "generator",
    title: "Generador de Contratos",
    description: "Crea contratos personalizados y legalmente válidos",
    icon: <FileSignature className="h-8 w-8" />,
    href: "/tools/contract-generator",
    category: "Documentos",
    color: "bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-600",
    borderColor: "border-indigo-500/30",
    hoverColor: "hover:from-indigo-500 hover:via-indigo-400 hover:to-indigo-500",
    iconBg: "bg-indigo-700/50",
    popular: false,
  },
]

interface ToolsGridProps {
  showAll?: boolean
  maxItems?: number
}

export default function ToolsGrid({ showAll = false, maxItems = 3 }: ToolsGridProps) {
  const displayTools = showAll ? tools : tools.filter((tool) => tool.popular).slice(0, maxItems)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayTools.map((tool) => (
        <Link key={tool.id} href={tool.href} className="group">
          <Card
            className={`h-full ${tool.color} ${tool.hoverColor} ${tool.borderColor} hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-2 hover:scale-[1.02] overflow-hidden shadow-xl backdrop-blur-sm relative`}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

            <CardContent className="p-8 relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`p-4 rounded-2xl ${tool.iconBg} backdrop-blur-sm text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/20`}
                >
                  {tool.icon}
                </div>
                {tool.popular && (
                  <div className="flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 backdrop-blur-sm text-amber-300 px-3 py-2 rounded-full text-xs font-bold shadow-lg">
                    <Sparkles className="h-3 w-3" />
                    Popular
                  </div>
                )}
              </div>

              <h3 className="font-bold text-xl mb-3 group-hover:text-white/95 transition-colors text-white leading-tight">
                {tool.title}
              </h3>

              <p className="text-white/85 text-sm mb-6 leading-relaxed group-hover:text-white/90 transition-colors">
                {tool.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-lg">
                  {tool.category}
                </span>
                <div className="flex items-center gap-2 text-white group-hover:translate-x-2 transition-all duration-300">
                  <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Abrir
                  </span>
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
