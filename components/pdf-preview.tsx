"use client"

import { useState, useEffect } from "react"
import * as pdfjs from "pdfjs-dist"
import { Loader2 } from "lucide-react"

// Configurar worker de PDF.js
const pdfjsWorker = await import("pdfjs-dist/build/pdf.worker.entry")
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

interface PDFPreviewProps {
  file: File | null
  className?: string
}

export function PDFPreview({ file, className = "" }: PDFPreviewProps) {
  const [pageUrl, setPageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadPDF() {
      try {
        setLoading(true)
        setError(null)

        if (!file) {
          console.warn("No file provided to loadPDF")
          return
        }

        // Convertir el archivo a ArrayBuffer
        const arrayBuffer = await file.arrayBuffer()

        // Cargar el document PDF
        const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise

        // Obtener la primera página
        const page = await pdf.getPage(1)

        // Configurar el canvas
        const canvas = document.createElement("canvas")
        const context = canvas.getContext("2d")

        if (!context) {
          throw new Error("No se pudo crear el contexto del canvas")
        }

        // Escalar la página para que se ajuste a un ancho razonable
        const viewport = page.getViewport({ scale: 1.0 })
        const scale = 800 / viewport.width
        const scaledViewport = page.getViewport({ scale })

        canvas.height = scaledViewport.height
        canvas.width = scaledViewport.width

        // Renderizar la página en el canvas
        await page.render({
          canvasContext: context,
          viewport: scaledViewport,
        }).promise

        // Convertir el canvas a URL de datos
        const dataUrl = canvas.toDataURL("image/png")
        setPageUrl(dataUrl)
      } catch (err) {
        console.error("Error al cargar el PDF:", err)
        setError("No se pudo cargar la vista previa del PDF")
      } finally {
        setLoading(false)
      }
    }

    if (file && file.type === "application/pdf") {
      loadPDF()
    } else {
      setPageUrl(null)
      setLoading(false)
    }

    return () => {
      // Limpiar URL al desmontar
      if (pageUrl) {
        URL.revokeObjectURL(pageUrl)
      }
    }
  }, [file])

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-4 ${className}`}>
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Cargando vista previa...</span>
      </div>
    )
  }

  if (error) {
    return <div className={`flex items-center justify-center p-4 text-red-500 ${className}`}>{error}</div>
  }

  return pageUrl ? (
    <img
      src={pageUrl || "/placeholder.svg"}
      alt="Vista previa del PDF"
      className={`w-full h-auto rounded-lg border ${className}`}
    />
  ) : null
}
