"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdsenseDebug } from "@/components/adsense-debug"
import { AdsenseDiagnostics } from "@/components/adsense-diagnostics"
import { AdsensePolicyChecker } from "@/components/adsense-policy-checker"
import { AdUnit } from "@/components/ad-unit"
import { PageAds } from "@/components/page-ads"
import { SidebarAds } from "@/components/sidebar-ads"
import { LazyAdsense } from "@/components/lazy-adsense"

export default function AdsenseTestPage() {
  const [activeTab, setActiveTab] = useState("debug")

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Centro de Pruebas de AdSense</h1>
        <p className="text-gray-600">
          Herramientas para verificar y diagnosticar la configuración de Google AdSense en LegalPO
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="debug">Debug</TabsTrigger>
          <TabsTrigger value="diagnostics">Diagnósticos</TabsTrigger>
          <TabsTrigger value="policies">Políticas</TabsTrigger>
          <TabsTrigger value="ads">Anuncios</TabsTrigger>
          <TabsTrigger value="layouts">Layouts</TabsTrigger>
          <TabsTrigger value="lazy">Lazy Loading</TabsTrigger>
        </TabsList>

        <TabsContent value="debug" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Debug de AdSense</CardTitle>
              <CardDescription>Verificación básica del estado de AdSense en la página actual</CardDescription>
            </CardHeader>
            <CardContent>
              <AdsenseDebug />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="diagnostics" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Diagnósticos Avanzados</CardTitle>
              <CardDescription>Análisis detallado de la configuración de AdSense</CardDescription>
            </CardHeader>
            <CardContent>
              <AdsenseDiagnostics />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="policies" className="mt-6">
          <AdsensePolicyChecker />
        </TabsContent>

        <TabsContent value="ads" className="mt-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Anuncios de Prueba</CardTitle>
                <CardDescription>Diferentes formatos de anuncios para probar la configuración</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Anuncio Horizontal (Header/Footer)</h3>
                  <AdUnit slot="1234567890" format="horizontal" position="header" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Anuncio Rectangular</h3>
                  <AdUnit slot="2345678901" format="rectangle" position="content" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Anuncio Vertical (Sidebar)</h3>
                  <AdUnit slot="3456789012" format="vertical" position="sidebar" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Anuncio Automático</h3>
                  <AdUnit slot="4567890123" format="auto" position="content" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="layouts" className="mt-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Layouts de Anuncios</CardTitle>
                <CardDescription>Layouts predefinidos para diferentes secciones del sitio</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Page Ads (Header + Footer)</h3>
                  <PageAds />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Sidebar Ads</h3>
                  <div className="max-w-[320px]">
                    <SidebarAds />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="lazy" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Lazy Loading de Anuncios</CardTitle>
              <CardDescription>
                Anuncios que se cargan solo cuando son visibles (optimización de rendimiento)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Anuncio con Lazy Loading</h3>
                <LazyAdsense slot="1234567890" format="horizontal" />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Anuncio Rectangular Lazy</h3>
                <LazyAdsense slot="2345678901" format="rectangle" />
              </div>

              <div
                style={{
                  height: "1000px",
                  background: "#f5f5f5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p>Scroll hacia abajo para ver el anuncio lazy loading</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Anuncio Lazy (Aparece al hacer scroll)</h3>
                <LazyAdsense slot="3456789012" format="horizontal" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
