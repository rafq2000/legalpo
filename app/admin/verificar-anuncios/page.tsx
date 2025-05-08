import { AdminGuard } from "@/components/admin-guard"
import { AdPlacementChecker } from "@/components/ad-placement-checker"

export default function VerifyAdsPage() {
  return (
    <AdminGuard>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-2">Verificación de Implementación de Anuncios</h1>
        <p className="text-gray-600 mb-8">
          Verifica que la implementación de tus anuncios cumpla con las políticas de AdSense
        </p>

        <AdPlacementChecker />
      </div>
    </AdminGuard>
  )
}
