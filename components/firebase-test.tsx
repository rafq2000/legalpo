"use client"

import { useState } from "react"
import { getFirestoreInstance } from "@/utils/firebaseClient"
import { collection, addDoc, Timestamp, getDocs, query, limit } from "firebase/firestore"

export default function FirebaseTest() {
  const [status, setStatus] = useState<string>("Idle")
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<any>(null)

  const testConnection = async () => {
    setStatus("Testing...")
    setError(null)
    setResult(null)

    try {
      const db = getFirestoreInstance()

      if (!db) {
        throw new Error("Failed to initialize Firestore")
      }

      // Try to write a test document
      const testDoc = {
        test: true,
        message: "Test connection",
        timestamp: Timestamp.now(),
      }

      const docRef = await addDoc(collection(db, "test_connection"), testDoc)

      // Try to read from Firestore
      const querySnapshot = await getDocs(query(collection(db, "test_connection"), limit(5)))

      const documents = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      setResult({
        writeSuccess: true,
        writeId: docRef.id,
        readSuccess: true,
        documents,
      })

      setStatus("Success")
    } catch (err: any) {
      console.error("Firebase test failed:", err)
      setError(err.message || "Unknown error")
      setStatus("Failed")
    }
  }

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Firebase Connection Test</h2>

      <button onClick={testConnection} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Test Firebase Connection
      </button>

      <div className="mt-4">
        <p>
          Status:{" "}
          <span
            className={`font-bold ${status === "Success" ? "text-green-600" : status === "Failed" ? "text-red-600" : ""}`}
          >
            {status}
          </span>
        </p>

        {error && (
          <div className="mt-2 p-3 bg-red-100 border border-red-300 rounded text-red-800">
            <p className="font-bold">Error:</p>
            <p className="font-mono text-sm">{error}</p>
          </div>
        )}

        {result && (
          <div className="mt-2 p-3 bg-green-100 border border-green-300 rounded">
            <p className="font-bold text-green-800">Connection successful!</p>
            <p>Write ID: {result.writeId}</p>
            <p>Read {result.documents.length} documents</p>

            <details className="mt-2">
              <summary className="cursor-pointer">View document data</summary>
              <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto text-xs">
                {JSON.stringify(result.documents, null, 2)}
              </pre>
            </details>
          </div>
        )}
      </div>
    </div>
  )
}
