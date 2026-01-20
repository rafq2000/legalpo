"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, FileText } from "lucide-react"

export function SidebarAds() {
  // En desarrollo, mostrar contenido temático
  if (process.env.NODE_ENV === "development") {
    return (
      <div className="space-y-4">
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-slate-300 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Temas Populares
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-xs text-slate-400 space-y-1">
              <p>• Ley 40 Horas (2025)</p>
              <p>• Acoso Laboral</p>
              <p>• Pensión Alimentos</p>
              <p>• Deudas TGR</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-slate-300 flex items-center gap-2">
              <Users className="h-4 w-4" />
              Consultas Recientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-slate-400">
              <p>+1,200 consultas legales resueltas esta semana</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-slate-300 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Recursos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-xs text-slate-400 space-y-1">
              <p>• Código del Trabajo</p>
              <p>• Ley de Familia</p>
              <p>• Normativa Tributaria</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // En producción, mostrar anuncios reales
  return (
    <div className="space-y-4">
      <div className="text-center mb-2">
        <span className="text-xs text-slate-500">Publicidad</span>
      </div>

      {/* AdSense Sidebar */}
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-4">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-1234567890123456"
            data-ad-slot="0987654321"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </CardContent>
      </Card>

      {/* Segundo anuncio */}
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-4">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-1234567890123456"
            data-ad-slot="1122334455"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </CardContent>
      </Card>
    </div>
  )
}
