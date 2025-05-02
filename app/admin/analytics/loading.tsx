export default function AnalyticsLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-t-blue-500 border-b-blue-500 border-l-gray-200 border-r-gray-200 rounded-full animate-spin"></div>
        <p className="text-lg font-medium text-gray-700">Cargando datos de análisis...</p>
      </div>
    </div>
  )
}
