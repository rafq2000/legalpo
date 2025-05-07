"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function DeudasDebug() {
  const pathname = usePathname()
  const [debugInfo, setDebugInfo] = useState<any>(null)

  useEffect(() => {
    // Log the current path
    console.log("Current path:", pathname)

    // Fetch debug info
    fetch("/api/test-navigation")
      .then((res) => res.json())
      .then((data) => {
        setDebugInfo(data)
        console.log("Navigation debug info:", data)
      })
      .catch((err) => console.error("Error fetching debug info:", err))
  }, [pathname])

  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
      <h2 className="text-lg font-bold text-red-800">Debug Information</h2>
      <p>Current path: {pathname}</p>
      {debugInfo && (
        <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto text-xs">{JSON.stringify(debugInfo, null, 2)}</pre>
      )}
    </div>
  )
}
