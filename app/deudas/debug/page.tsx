"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DeudasDebugPage() {
  const pathname = usePathname()
  const router = useRouter()
  const [navigationHistory, setNavigationHistory] = useState<string[]>([])

  useEffect(() => {
    // Add current path to history
    setNavigationHistory((prev) => [...prev, pathname])

    // Log the current URL and pathname
    console.log("Debug - Current URL:", window.location.href)
    console.log("Debug - Current pathname:", pathname)

    // Check if there are any redirects happening
    const originalPushState = history.pushState
    history.pushState = function () {
      console.log("Debug - pushState called with:", arguments)
      return originalPushState.apply(this, arguments as any)
    }

    return () => {
      // Restore original function
      history.pushState = originalPushState
    }
  }, [pathname])

  const testNavigation = () => {
    router.push("/deudas")
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Navigation Debugging</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Current Path:</h3>
              <code className="bg-gray-100 p-2 block rounded">{pathname}</code>
            </div>

            <div>
              <h3 className="font-medium">Full URL:</h3>
              <code className="bg-gray-100 p-2 block rounded">
                {typeof window !== "undefined" ? window.location.href : "Server rendering"}
              </code>
            </div>

            <div>
              <h3 className="font-medium">Navigation History:</h3>
              <ul className="bg-gray-100 p-2 rounded">
                {navigationHistory.map((path, i) => (
                  <li key={i}>
                    <code>{path}</code>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Button onClick={testNavigation}>Test Navigation to /deudas</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
