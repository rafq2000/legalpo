"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function AnalyticsClient() {
  const searchParams = useSearchParams()
  const [period, setPeriod] = useState(searchParams.get("period") || "7d")
  const [analyticsData, setAnalyticsData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAnalyticsData() {
      try {
        const response = await fetch(`/api/admin/analytics?period=${period}`)
        if (response.ok) {
          const data = await response.json()
          setAnalyticsData(data)
        } else {
          console.error("Error fetching analytics data")
        }
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAnalyticsData()
  }, [period])

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="period" className="mr-2 font-medium">
          Período:
        </label>
        <select id="period" value={period} onChange={(e) => setPeriod(e.target.value)} className="border rounded p-2">
          <option value="7d">Últimos 7 días</option>
          <option value="30d">Últimos 30 días</option>
          <option value="90d">Últimos 90 días</option>
        </select>
      </div>

      {loading ? (
        <p>Cargando datos...</p>
      ) : analyticsData ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Aquí renderizamos los datos de analytics */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium text-lg">Visitas totales</h3>
            <p className="text-2xl font-bold">{analyticsData.totalVisits || 0}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium text-lg">Usuarios únicos</h3>
            <p className="text-2xl font-bold">{analyticsData.uniqueUsers || 0}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium text-lg">Tiempo promedio</h3>
            <p className="text-2xl font-bold">{analyticsData.avgTimeOnSite || "0:00"}</p>
          </div>
          {/* Más métricas según sea necesario */}
        </div>
      ) : (
        <p>No hay datos disponibles</p>
      )}
    </div>
  )
}
