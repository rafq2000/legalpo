import { AdsenseDebug } from "@/components/adsense-debug"
import { AdUnit } from "@/components/ad-unit"
import { FirebaseErrorBoundary } from "@/components/firebase-error-boundary"

export default function TestAdsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Página de prueba de AdSense y Firebase</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Estado de AdSense</h2>
        <AdsenseDebug />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Prueba de anuncios</h2>
        <div className="grid gap-8">
          <div>
            <h3 className="text-lg font-medium mb-2">Anuncio horizontal</h3>
            <AdUnit slot="1234567890" format="horizontal" />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Anuncio rectangular</h3>
            <AdUnit slot="1234567890" format="rectangle" />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Estado de Firebase</h2>
        <FirebaseErrorBoundary>
          <div className="p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-700">Firebase está funcionando correctamente.</p>
          </div>
        </FirebaseErrorBoundary>
      </div>
    </div>
  )
}
