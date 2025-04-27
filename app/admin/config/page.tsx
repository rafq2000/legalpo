"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Loader2 } from "lucide-react"

export default function ConfigPage() {
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState("general")
  const [adminKey, setAdminKey] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Función para verificar la clave de administrador
  const verifyAdminKey = async () => {
    if (!adminKey) return

    setSaving(true)
    try {
      const response = await fetch(`/api/admin/auth-check?key=${adminKey}`)
      if (response.ok) {
        setIsAuthenticated(true)
      } else {
        alert("Clave de administrador incorrecta")
      }
    } catch (error) {
      console.error("Error verificando clave:", error)
      alert("Error al verificar la clave")
    } finally {
      setSaving(false)
    }
  }

  // Si no está autenticado, mostrar formulario de autenticación
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto py-8">
        <Card>
          <CardHeader>
            <CardTitle>Configuración</CardTitle>
            <CardDescription>Ingresa la clave de administrador para acceder a la configuración</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                type="password"
                placeholder="Clave de administrador"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                className="max-w-xs"
              />
              <Button onClick={verifyAdminKey} disabled={saving}>
                {saving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Verificando...
                  </>
                ) : (
                  "Acceder"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Configuración del Sistema</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="security">Seguridad</TabsTrigger>
          <TabsTrigger value="limits">Límites</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Configuración General</CardTitle>
              <CardDescription>Ajustes generales de la plataforma</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="site-name">Nombre del sitio</Label>
                <Input id="site-name" defaultValue="LegalPO" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="admin-email">Email de administrador</Label>
                <Input id="admin-email" defaultValue="admin@example.com" />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="maintenance-mode" />
                <Label htmlFor="maintenance-mode">Modo mantenimiento</Label>
              </div>

              <Button>Guardar cambios</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de API</CardTitle>
              <CardDescription>Ajustes relacionados con las APIs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="openai-key">Clave de OpenAI</Label>
                <Input id="openai-key" type="password" defaultValue="sk-..." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gemini-key">Clave de Gemini</Label>
                <Input id="gemini-key" type="password" defaultValue="AI..." />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="api-fallback" defaultChecked />
                <Label htmlFor="api-fallback">Habilitar fallback entre APIs</Label>
              </div>

              <Button>Guardar cambios</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Seguridad</CardTitle>
              <CardDescription>Configuración de seguridad y acceso</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="admin-key">Clave de administrador</Label>
                <Input id="admin-key" type="password" defaultValue="********" />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="require-login" defaultChecked />
                <Label htmlFor="require-login">Requerir inicio de sesión</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="allow-registration" defaultChecked />
                <Label htmlFor="allow-registration">Permitir registro de usuarios</Label>
              </div>

              <Button>Guardar cambios</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="limits">
          <Card>
            <CardHeader>
              <CardTitle>Límites del sistema</CardTitle>
              <CardDescription>Configuración de límites y cuotas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="max-users">Máximo de usuarios</Label>
                <Input id="max-users" type="number" defaultValue="1000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-daily">Máximo de usuarios diarios</Label>
                <Input id="max-daily" type="number" defaultValue="100" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-requests">Máximo de solicitudes por usuario/día</Label>
                <Input id="max-requests" type="number" defaultValue="50" />
              </div>

              <Button>Guardar cambios</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
