import { AdminGuard } from "@/components/admin-guard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdsenseVerificacionGlobal() {
  return (
    <AdminGuard>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Verificación Global de AdSense</h1>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Verificación de Implementación en Todas las Páginas</CardTitle>
              <CardDescription>
                Comprueba que el código de AdSense esté correctamente implementado en todas las páginas del sitio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Implementación Actual:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-green-600">
                    ✅ Código de AdSense implementado en el layout principal (app/layout.tsx)
                  </li>
                  <li className="text-green-600">✅ Meta tag de cuenta de AdSense presente en el head</li>
                  <li className="text-green-600">✅ Script de AdSense cargado con strategy="afterInteractive"</li>
                  <li className="text-green-600">✅ Inicialización de anuncios automáticos configurada</li>
                </ul>

                <h3 className="text-lg font-medium mt-6">Verificación de Páginas Principales:</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Visita estas páginas y verifica que el componente AdsensePageChecker muestre "AdSense cargado" en cada
                  una:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" asChild>
                    <Link href="/" target="_blank">
                      Página de inicio
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/analyze" target="_blank">
                      Analizador de documentos
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/ask" target="_blank">
                      Consultas legales
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contratos" target="_blank">
                      Contratos
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/calculadora-finiquito" target="_blank">
                      Calculadora de finiquito
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/deudas" target="_blank">
                      Consulta de deudas
                    </Link>
                  </Button>
                </div>

                <h3 className="text-lg font-medium mt-6">Recomendaciones:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Verifica que no haya bloqueadores de anuncios activos durante las pruebas</li>
                  <li>Asegúrate de que todas las páginas carguen completamente antes de verificar</li>
                  <li>Revisa la consola del navegador para detectar posibles errores</li>
                  <li>Confirma que el código de AdSense no esté siendo bloqueado por otras extensiones</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminGuard>
  )
}
