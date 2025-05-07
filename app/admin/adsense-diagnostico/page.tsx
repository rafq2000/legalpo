import { AdsenseDiagnostics } from "@/components/adsense-diagnostics"
import { AdminGuard } from "@/components/admin-guard"

export default function AdsenseDiagnosticPage() {
  return (
    <AdminGuard>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Diagnóstico de AdSense</h1>

        <div className="space-y-6">
          <AdsenseDiagnostics />

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Configuración de Anuncios Automáticos</h2>
            <p className="mb-4">
              Los anuncios automáticos de AdSense están configurados en tu sitio. Google AdSense analizará tus páginas y
              colocará anuncios automáticamente en los lugares óptimos para maximizar tus ingresos.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">Pasos para verificar la implementación:</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Asegúrate de que tu cuenta de AdSense esté aprobada</li>
              <li>Verifica que no haya bloqueadores de anuncios activos</li>
              <li>Espera 24-48 horas para que AdSense analice tu sitio</li>
              <li>Revisa la sección "Anuncios automáticos" en tu panel de AdSense</li>
            </ol>

            <h3 className="text-lg font-medium mt-6 mb-2">Solución de problemas comunes:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Si no ves anuncios, asegúrate de que tu cuenta esté aprobada y activa</li>
              <li>Verifica que no tengas conflictos con otros scripts de anuncios</li>
              <li>Comprueba que el dominio esté correctamente verificado en AdSense</li>
              <li>Asegúrate de que no haya errores de política en tu sitio</li>
            </ul>
          </div>
        </div>
      </div>
    </AdminGuard>
  )
}
