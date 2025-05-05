import { AdsenseDebug } from "@/components/adsense-debug"
import { AdsenseAd } from "@/components/adsense-ad"
import { AdUnit } from "@/components/ad-unit"
import { LazyAdsense } from "@/components/lazy-adsense"

export default function TestAdsensePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Prueba de Integración de AdSense</h1>

      <AdsenseDebug />

      <div className="grid gap-8 mt-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Componente AdsenseAd</h2>
          <AdsenseAd slot="1234567890" format="auto" />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Componente AdUnit</h2>
          <AdUnit slot="1234567890" format="horizontal" position="content" />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Componente LazyAdsense</h2>
          <LazyAdsense slot="1234567890" />
        </div>
      </div>
    </div>
  )
}
