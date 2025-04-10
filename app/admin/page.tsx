import { ConfigChecker } from "@/components/config-checker"
import { PageLayout } from "@/components/page-layout"

export default function AdminPage() {
  return (
    <PageLayout
      title="Panel de Administración"
      description="Gestiona la configuración y el funcionamiento de DocuScan AI"
      showAds={false}
    >
      <div className="container py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <ConfigChecker />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Estadísticas</h2>
              <p className="text-muted-foreground">Visualiza las estadísticas de uso de la plataforma.</p>
              <div className="mt-4">
                <a href="/admin/analytics" className="text-primary hover:underline">
                  Ver estadísticas →
                </a>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Usuarios</h2>
              <p className="text-muted-foreground">Gestiona los usuarios registrados en la plataforma.</p>
              <div className="mt-4">
                <a href="/admin/users" className="text-primary hover:underline">
                  Gestionar usuarios →
                </a>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Configuración</h2>
              <p className="text-muted-foreground">Configura los parámetros de funcionamiento de la plataforma.</p>
              <div className="mt-4">
                <a href="/admin/settings" className="text-primary hover:underline">
                  Editar configuración →
                </a>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Logs</h2>
              <p className="text-muted-foreground">Revisa los logs de actividad y errores del sistema.</p>
              <div className="mt-4">
                <a href="/admin/logs" className="text-primary hover:underline">
                  Ver logs →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
