import { AdsensePolicyChecker } from "@/components/adsense-policy-checker"
import { AdminGuard } from "@/components/admin-guard"

export default function AdsenseVerificationPage() {
  return (
    <AdminGuard>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Verificación de Políticas de AdSense</h1>
        <p className="text-gray-600 mb-8">
          Utiliza esta herramienta para verificar que tu sitio cumpla con todas las políticas de AdSense y resolver la
          limitación temporal del servicio de anuncios.
        </p>

        <div className="grid gap-8">
          <AdsensePolicyChecker />

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Recomendaciones adicionales</h2>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <strong>Continúa generando contenido de calidad:</strong> Google valora el contenido original, útil y
                actualizado regularmente.
              </li>
              <li>
                <strong>Mejora la experiencia del usuario:</strong> Asegúrate de que tu sitio sea fácil de navegar,
                rápido y sin errores.
              </li>
              <li>
                <strong>Verifica la calidad del tráfico:</strong> Revisa tus fuentes de tráfico y asegúrate de que sean
                legítimas.
              </li>
              <li>
                <strong>Sé paciente:</strong> La evaluación puede tomar tiempo, generalmente hasta 30 días.
              </li>
              <li>
                <strong>No crees múltiples cuentas:</strong> Esto puede ser considerado una violación de las políticas.
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              ¿Qué significa "Limitación del servicio de anuncios"?
            </h2>
            <p className="text-blue-700 mb-4">
              Google limita temporalmente el número de anuncios que puede mostrar tu cuenta mientras evalúa la calidad
              de tu tráfico. Esto es común en cuentas nuevas o cuando se detectan patrones de tráfico que necesitan ser
              evaluados.
            </p>
            <p className="text-blue-700">
              Durante este período, es importante seguir generando contenido de calidad y asegurarte de que tu sitio
              cumpla con todas las políticas de AdSense. La limitación suele durar aproximadamente 30 días, pero puede
              variar según cada caso.
            </p>
          </div>
        </div>
      </div>
    </AdminGuard>
  )
}
