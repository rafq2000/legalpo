"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export default function UploadVideoPage() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadedUrl, setUploadedUrl] = useState<string>("")
  const [error, setError] = useState<string>("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      // Check if it's a video file
      if (!selectedFile.type.startsWith("video/")) {
        setError("Por favor selecciona un archivo de video válido")
        return
      }
      // Check file size (max 100MB)
      if (selectedFile.size > 100 * 1024 * 1024) {
        setError("El archivo es muy grande. Máximo 100MB")
        return
      }
      setFile(selectedFile)
      setError("")
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    setError("")

    try {
      const response = await fetch(`/api/upload-video?filename=${file.name}`, {
        method: "POST",
        body: file,
      })

      if (!response.ok) {
        throw new Error("Error al subir el video")
      }

      const data = await response.json()
      setUploadedUrl(data.url)
      console.log("[v0] Video uploaded successfully:", data.url)
    } catch (err) {
      setError("Error al subir el video. Intenta de nuevo.")
      console.error("[v0] Upload error:", err)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Subir Video Promocional</CardTitle>
            <CardDescription>
              Sube tu video promocional a Blob Storage. Formatos aceptados: MP4, WebM, MOV (máx. 100MB)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* File Input */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-cyan-500 transition-colors">
              <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="hidden"
                id="video-upload"
                disabled={uploading}
              />
              <label htmlFor="video-upload" className="cursor-pointer flex flex-col items-center space-y-2">
                <Upload className="w-12 h-12 text-gray-400" />
                <span className="text-sm text-gray-600">{file ? file.name : "Haz clic para seleccionar un video"}</span>
                {file && (
                  <span className="text-xs text-gray-500">Tamaño: {(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                )}
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* Success Message */}
            {uploadedUrl && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">¡Video subido exitosamente!</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600 mb-2">URL del video:</p>
                  <code className="text-xs bg-white p-2 rounded border block overflow-x-auto">{uploadedUrl}</code>
                </div>
                <p className="text-sm text-gray-600">
                  Copia esta URL y envíamela en el chat para integrar el video en tu página.
                </p>
              </div>
            )}

            {/* Upload Button */}
            <Button onClick={handleUpload} disabled={!file || uploading} className="w-full" size="lg">
              {uploading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Subiendo...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Subir Video
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
