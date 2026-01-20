"use client"

import { Card, CardContent } from "@/components/ui/card"

export function PageAds() {
  // En desarrollo, mostrar placeholder discreto
  if (process.env.NODE_ENV === "development") {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <Card className="bg-slate-800/30 border-slate-700/50">
          <CardContent className="p-4">
            <div className="text-center text-slate-500 text-sm">
              <p>Espacio publicitario - AdSense se carga en producción</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // En producción, mostrar anuncios reales
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-2">
        <span className="text-xs text-slate-500">Publicidad</span>
      </div>
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-4">
          {/* AdSense Banner */}
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-1234567890123456"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </CardContent>
      </Card>
    </div>
  )
}
