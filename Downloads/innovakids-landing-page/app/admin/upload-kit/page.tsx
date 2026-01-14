"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, CheckCircle2, AlertCircle, FileText } from "lucide-react"

export default function UploadKitPage() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [uploadedUrl, setUploadedUrl] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile)
      setError("")
    } else {
      setError("Por favor selecciona un archivo PDF válido")
      setFile(null)
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    setError("")
    setSuccess(false)

    try {
      // Upload to Vercel Blob
      const formData = new FormData()
      formData.append("file", file)

      const uploadResponse = await fetch("/api/upload-kit", {
        method: "POST",
        body: formData,
      })

      if (!uploadResponse.ok) {
        throw new Error("Error al subir el archivo")
      }

      const { url } = await uploadResponse.json()
      setUploadedUrl(url)
      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al subir el archivo")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a1628] py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <Card className="bg-[#1a2942] border-[#2a3952] p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Subir Kit del Padre Moderno</h1>
            <p className="text-gray-400">Sube el PDF que los padres descargarán al registrarse</p>
          </div>

          {!success ? (
            <div className="space-y-6">
              <div className="border-2 border-dashed border-[#2a3952] rounded-lg p-8 text-center hover:border-[#4DD0E1] transition-colors">
                <input type="file" accept=".pdf" onChange={handleFileChange} className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-[#4DD0E1] mx-auto mb-4" />
                  <p className="text-white font-semibold mb-2">
                    {file ? file.name : "Haz clic para seleccionar el PDF"}
                  </p>
                  <p className="text-gray-400 text-sm">Solo archivos PDF (máx. 10MB)</p>
                </label>
              </div>

              {error && (
                <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <p className="text-red-500">{error}</p>
                </div>
              )}

              <Button
                onClick={handleUpload}
                disabled={!file || uploading}
                className="w-full h-12 bg-[#4DD0E1] hover:bg-[#3BBFD1] text-[#0a1628] font-bold text-lg"
              >
                {uploading ? "SUBIENDO..." : "SUBIR PDF"}
              </Button>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
              <h2 className="text-2xl font-bold text-white">¡PDF Subido Exitosamente!</h2>
              <p className="text-gray-400">El Kit del Padre Moderno está listo para descargar</p>
              <div className="bg-[#0a1628] p-4 rounded-lg">
                <p className="text-sm text-gray-500 mb-2">URL del archivo:</p>
                <p className="text-[#4DD0E1] text-sm break-all">{uploadedUrl}</p>
              </div>
              <Button
                onClick={() => {
                  setSuccess(false)
                  setFile(null)
                  setUploadedUrl("")
                }}
                variant="outline"
                className="border-[#4DD0E1] text-[#4DD0E1] hover:bg-[#4DD0E1] hover:text-[#0a1628]"
              >
                Subir Otro Archivo
              </Button>
            </div>
          )}
        </Card>

        <div className="mt-8 p-6 bg-[#1a2942] border border-[#2a3952] rounded-lg">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#4DD0E1]" />
            Instrucciones
          </h3>
          <ol className="text-gray-400 space-y-2 text-sm list-decimal list-inside">
            <li>Selecciona tu archivo PDF del Kit del Padre Moderno</li>
            <li>Haz clic en "SUBIR PDF" y espera a que se complete</li>
            <li>El archivo se guardará en Vercel Blob y estará disponible automáticamente</li>
            <li>Los padres podrán descargarlo cuando se registren en el formulario</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
