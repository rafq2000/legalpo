"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle, RefreshCw, Database, AlertTriangle } from "lucide-react"

export default function SupabaseDiagnostics() {
  const [isChecking, setIsChecking] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [isCreatingTables, setIsCreatingTables] = useState(false)
  const [createTablesResult, setCreateTablesResult] = useState<any>(null)

  // Función para verificar la conexión a Supabase
  const checkSupabaseConnection = async () => {
    setIsChecking(true)
    setResults(null)

    try {
      const response = await fetch("/api/admin/supabase-diagnostics")
      const data = await response.json()
      setResults(data)
    } catch (error) {
      setResults({
        success: false,
        error: String(error),
        details: "Error al realizar la solicitud de diagnóstico",
      })
    } finally {
      setIsChecking(false)
    }
  }

  // Función para crear tablas de analítica
  const createAnalyticsTables = async () => {
    setIsCreatingTables(true)
    setCreateTablesResult(null)

    try {
      const response = await fetch("/api/admin/init-analytics-tables", {
        method: "POST",
      })
      const data = await response.json()
      setCreateTablesResult(data)
    } catch (error) {
      setCreateTablesResult({
        success: false,
        error: String(error),
        details: "Error al crear tablas de analítica",
      })
    } finally {
      setIsCreatingTables(false)
    }
  }

  // Ejecutar verificación al cargar el componente
  useEffect(() => {
    checkSupabaseConnection()
  }, [])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5" />
          Diagnóstico de Supabase
        </CardTitle>
        <CardDescription>Verifica la conexión a Supabase y el estado de las tablas de analítica</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Resultados del diagnóstico */}
        {results ? (
          <div className="space-y-4">
            <Alert variant={results.success ? "default" : "destructive"}>
              <div className="flex items-center gap-2">
                {results.success ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                <AlertTitle>{results.success ? "Conexión exitosa" : "Error de conexión"}</AlertTitle>
              </div>
              <AlertDescription>
                {results.message}

                {!results.success && results.details && (
                  <div className="mt-2 text-sm">
                    <p className="font-semibold">Detalles del error:</p>
                    <pre className="mt-1 whitespace-pre-wrap bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs">
                      {results.details}
                    </pre>
                  </div>
                )}
              </AlertDescription>
            </Alert>

            {/* Información de variables de entorno */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Variables de entorno:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className={results.hasSupabaseUrl ? "text-green-500" : "text-red-500"}>
                    {results.hasSupabaseUrl ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                  </span>
                  <span>NEXT_PUBLIC_SUPABASE_URL</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className={results.hasSupabaseKey ? "text-green-500" : "text-red-500"}>
                    {results.hasSupabaseKey ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                  </span>
                  <span>SUPABASE_SERVICE_KEY</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className={results.hasAnonKey ? "text-green-500" : "text-red-500"}>
                    {results.hasAnonKey ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                  </span>
                  <span>NEXT_PUBLIC_SUPABASE_ANON_KEY</span>
                </div>
              </div>
            </div>

            {/* Estado de las tablas */}
            {results.tables && (
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Estado de las tablas:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {Object.entries(results.tables).map(([tableName, exists]: [string, any]) => (
                    <div key={tableName} className="flex items-center gap-2 text-sm">
                      <span className={exists ? "text-green-500" : "text-yellow-500"}>
                        {exists ? <CheckCircle className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                      </span>
                      <span>{tableName}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center p-4">
            <RefreshCw className="h-5 w-5 animate-spin mr-2" />
            <span>Verificando conexión a Supabase...</span>
          </div>
        )}

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-2 pt-4">
          <Button
            variant="outline"
            onClick={checkSupabaseConnection}
            disabled={isChecking}
            className="flex items-center gap-2"
          >
            {isChecking ? <RefreshCw className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
            {isChecking ? "Verificando..." : "Verificar conexión"}
          </Button>

          <Button
            variant="default"
            onClick={createAnalyticsTables}
            disabled={isCreatingTables || (results && !results.success)}
            className="flex items-center gap-2"
          >
            {isCreatingTables ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Database className="h-4 w-4" />}
            {isCreatingTables ? "Creando tablas..." : "Crear tablas de analítica"}
          </Button>
        </div>

        {/* Resultado de creación de tablas */}
        {createTablesResult && (
          <Alert variant={createTablesResult.success ? "default" : "destructive"} className="mt-4">
            <div className="flex items-center gap-2">
              {createTablesResult.success ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
              <AlertTitle>
                {createTablesResult.success ? "Tablas creadas correctamente" : "Error al crear tablas"}
              </AlertTitle>
            </div>
            <AlertDescription>
              {createTablesResult.message || createTablesResult.error}

              {!createTablesResult.success && createTablesResult.details && (
                <div className="mt-2 text-sm">
                  <p className="font-semibold">Detalles del error:</p>
                  <pre className="mt-1 whitespace-pre-wrap bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs">
                    {createTablesResult.details}
                  </pre>
                </div>
              )}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}
