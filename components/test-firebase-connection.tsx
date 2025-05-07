"use client"

import { useState } from "react"
import { collection, addDoc, serverTimestamp, getDocs, query, limit } from "firebase/firestore"
import { db } from "@/utils/firebaseClient"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function TestFirebaseConnection() {
  const [testResult, setTestResult] = useState<{
    success: boolean
    message: string
    data?: any
  } | null>(null)
  const [loading, setLoading] = useState(false)

  const testWrite = async () => {
    setLoading(true)
    try {
      const docRef = await addDoc(collection(db, "test_connection"), {
        message: "Test connection",
        timestamp: serverTimestamp(),
      })

      setTestResult({
        success: true,
        message: `Successfully wrote to Firestore with ID: ${docRef.id}`,
      })
    } catch (error: any) {
      console.error("Error testing Firestore write:", error)
      setTestResult({
        success: false,
        message: `Error writing to Firestore: ${error.message}`,
        data: error,
      })
    } finally {
      setLoading(false)
    }
  }

  const testRead = async () => {
    setLoading(true)
    try {
      const q = query(collection(db, "test_connection"), limit(5))
      const querySnapshot = await getDocs(q)

      const docs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      setTestResult({
        success: true,
        message: `Successfully read ${docs.length} documents from Firestore`,
        data: docs,
      })
    } catch (error: any) {
      console.error("Error testing Firestore read:", error)
      setTestResult({
        success: false,
        message: `Error reading from Firestore: ${error.message}`,
        data: error,
      })
    } finally {
      setLoading(false)
    }
  }

  const testEvent = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/firebase-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipo: "test_event",
          datos: {
            source: "test_component",
            timestamp: new Date().toISOString(),
          },
        }),
      })

      const data = await response.json()

      setTestResult({
        success: response.ok,
        message: response.ok
          ? `Successfully sent event to API: ${data.id || "No ID returned"}`
          : `Error sending event to API: ${data.error || "Unknown error"}`,
        data,
      })
    } catch (error: any) {
      console.error("Error testing event API:", error)
      setTestResult({
        success: false,
        message: `Error sending event to API: ${error.message}`,
        data: error,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Firebase Connection Test</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-4">
          <Button onClick={testWrite} disabled={loading}>
            {loading ? "Testing..." : "Test Firestore Write"}
          </Button>
          <Button onClick={testRead} disabled={loading}>
            {loading ? "Testing..." : "Test Firestore Read"}
          </Button>
          <Button onClick={testEvent} disabled={loading}>
            {loading ? "Testing..." : "Test Event API"}
          </Button>
        </div>

        {testResult && (
          <Alert variant={testResult.success ? "default" : "destructive"}>
            <AlertTitle>{testResult.success ? "Success" : "Error"}</AlertTitle>
            <AlertDescription className="space-y-2">
              <p>{testResult.message}</p>
              {testResult.data && (
                <pre className="bg-muted p-2 rounded text-xs overflow-auto max-h-40">
                  {JSON.stringify(testResult.data, null, 2)}
                </pre>
              )}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}
