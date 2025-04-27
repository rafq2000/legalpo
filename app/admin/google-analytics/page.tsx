"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, BarChart3, Users, Activity, Calendar, LogIn } from "lucide-react"

export default function GoogleAnalyticsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [viewId, setViewId] = useState("")
  const [stats, setStats] = useState({
    activeUsers: "0",
    sessions: "0",
    newUsers: "0",
    pageViews: "0",
    avgSessionDuration: "0",
    bounceRate: "0%",
  })
  const [authEvents, setAuthEvents] = useState({
    googleLogins: "0",
    emailLogins: "0",
    newRegistrations: "0",
    totalLogins: "0",
  })

  // Función para cargar datos de ejemplo (en producción, esto se conectaría a la API de Google Analytics)
  const loadDemoData = () => {
    setIsLoading(true)
    // Simulamos una carga de datos
    setTimeout(() => {
      setStats({
        activeUsers: Math.floor(Math.random() * 100).toString(),
        sessions: Math.floor(Math.random() * 500).toString(),
        newUsers: Math.floor(Math.random() * 50).toString(),
        pageViews: Math.floor(Math.random() * 1000).toString(),
        avgSessionDuration: (Math.random() * 5).toFixed(2),
        bounceRate: `${Math.floor(Math.random() * 100)}%`,
      })

      setAuthEvents({
        googleLogins: Math.floor(Math.random() * 80).toString(),
        emailLogins: Math.floor(Math.random() * 20).toString(),
        newRegistrations: Math.floor(Math.random() * 30).toString(),
        totalLogins: Math.floor(Math.random() * 100).toString(),
      })

      setIsLoading(false)
    }, 1500)
  }

  useEffect(() => {
    loadDemoData()
  }, [])

  const handleSaveViewId = () => {
    // En producción, guardaríamos este ID en la configuración
    alert(`ID de vista guardado: ${viewId}`)
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Estadísticas de Google Analytics</h1>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Configuración de Google Analytics</CardTitle>
            <CardDescription>Configura tu ID de vista de Google Analytics para ver las estadísticas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="ID de vista de Google Analytics"
                value={viewId}
                onChange={(e) => setViewId(e.target.value)}
              />
              <Button onClick={handleSaveViewId}>Guardar</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Puedes encontrar tu ID de vista en la consola de Google Analytics
            </p>
          </CardContent>
        </Card>

        {error ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-5 mb-4">
              <TabsTrigger value="overview">Resumen</TabsTrigger>
              <TabsTrigger value="users">Usuarios</TabsTrigger>
              <TabsTrigger value="auth">Autenticación</TabsTrigger>
              <TabsTrigger value="sessions">Sesiones</TabsTrigger>
              <TabsTrigger value="pages">Páginas</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Usuarios Activos</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{isLoading ? "..." : stats.activeUsers}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Sesiones</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{isLoading ? "..." : stats.sessions}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Nuevos Usuarios</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{isLoading ? "..." : stats.newUsers}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Vistas de Página</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{isLoading ? "..." : stats.pageViews}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Duración Media de Sesión</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{isLoading ? "..." : `${stats.avgSessionDuration} min`}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Tasa de Rebote</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{isLoading ? "..." : stats.bounceRate}</div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle>Usuarios</CardTitle>
                  <CardDescription>Estadísticas detalladas sobre los usuarios de tu aplicación</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-8 text-muted-foreground">
                    {isLoading
                      ? "Cargando datos..."
                      : "Conecta tu cuenta de Google Analytics para ver estadísticas detalladas de usuarios"}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="auth">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Inicios de sesión por método</CardTitle>
                    <CardDescription>Distribución de inicios de sesión por método de autenticación</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Google</span>
                        <span className="font-bold">{isLoading ? "..." : authEvents.googleLogins}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{
                            width: isLoading
                              ? "0%"
                              : `${(Number.parseInt(authEvents.googleLogins) / Number.parseInt(authEvents.totalLogins)) * 100}%`,
                          }}
                        ></div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <span>Email</span>
                        <span className="font-bold">{isLoading ? "..." : authEvents.emailLogins}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          className="bg-green-600 h-2.5 rounded-full"
                          style={{
                            width: isLoading
                              ? "0%"
                              : `${(Number.parseInt(authEvents.emailLogins) / Number.parseInt(authEvents.totalLogins)) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle>Nuevos registros</CardTitle>
                    <LogIn className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{isLoading ? "..." : authEvents.newRegistrations}</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Usuarios que se han registrado en los últimos 30 días
                    </p>

                    <div className="mt-6">
                      <h4 className="text-sm font-medium mb-2">Total de inicios de sesión</h4>
                      <div className="text-2xl font-bold">{isLoading ? "..." : authEvents.totalLogins}</div>
                      <p className="text-xs text-muted-foreground mt-2">Inicios de sesión en los últimos 30 días</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sessions">
              <Card>
                <CardHeader>
                  <CardTitle>Sesiones</CardTitle>
                  <CardDescription>Información sobre las sesiones de los usuarios</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-8 text-muted-foreground">
                    {isLoading
                      ? "Cargando datos..."
                      : "Conecta tu cuenta de Google Analytics para ver estadísticas detalladas de sesiones"}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pages">
              <Card>
                <CardHeader>
                  <CardTitle>Páginas</CardTitle>
                  <CardDescription>Estadísticas sobre las páginas más visitadas</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-8 text-muted-foreground">
                    {isLoading
                      ? "Cargando datos..."
                      : "Conecta tu cuenta de Google Analytics para ver estadísticas detalladas de páginas"}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}

        <div className="flex justify-end">
          <Button onClick={loadDemoData} disabled={isLoading}>
            {isLoading ? "Cargando..." : "Actualizar datos"}
          </Button>
        </div>
      </div>
    </div>
  )
}
