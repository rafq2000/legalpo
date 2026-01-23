"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Copy, Download, CheckCircle, RefreshCw } from "lucide-react"
import { jsPDF } from "jspdf"

export default function RenunciaGenerator() {
    const [formData, setFormData] = useState({
        nombre: "",
        rut: "",
        cargo: "",
        empresa: "",
        rutEmpresa: "",
        fechaRenuncia: "",
        ultimoDia: "",
        motivo: "personal", // personal, mejor_oferta, estudios, salud
    })

    const [generated, setGenerated] = useState(false)
    const [copied, setCopied] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const generateLetterText = () => {
        const today = new Date().toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })

        let motivoTexto = ""
        switch (formData.motivo) {
            case "mejor_oferta":
                motivoTexto = "motivos estrictamente profesionales y de crecimiento laboral"
                break
            case "estudios":
                motivoTexto = "la necesidad de retomar mis estudios y perfeccionamiento académico"
                break
            case "salud":
                motivoTexto = "razones de salud que me impiden continuar desempeñando mis funciones con normalidad"
                break
            default:
                motivoTexto = "motivos de índole estrictamente personal"
        }

        return `Santiago, ${today}

A : SR/A. GERENTE GENERAL / JEFE DE RECURSOS HUMANOS
EMPRESA : ${formData.empresa.toUpperCase()}
RUT EMPRESA: ${formData.rutEmpresa || "____________________"}
PRESENTE.

DE : ${formData.nombre.toUpperCase()}
RUT : ${formData.rut}
CARGO: ${formData.cargo.toUpperCase()}

REF. : RENUNCIA VOLUNTARIA

Estimados:

Por intermedio de la presente, vengo en comunicar a usted mi renuncia voluntaria al cargo de ${formData.cargo} que desempeño en vuestra empresa, en conformidad a lo dispuesto en el artículo 159 N° 2 del Código del Trabajo.

Esta decisión responde a ${motivoTexto}.

Hago presente que mi renuncia se hará efectiva a contar del día ${formData.fechaRenuncia}, siendo mi último día trabajado el ${formData.ultimoDia}.

Agradezco la confianza depositada en mi persona durante el tiempo que presté servicios a la empresa, así como las oportunidades de desarrollo profesional brindadas.

Sin otro particular, saluda atentamente a usted,

__________________________________________
${formData.nombre.toUpperCase()}
RUT: ${formData.rut}
`
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(generateLetterText())
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleDownloadPDF = () => {
        const doc = new jsPDF()
        const text = generateLetterText()

        doc.setFontSize(12)
        doc.setFont("helvetica")

        const splitText = doc.splitTextToSize(text, 170)
        doc.text(splitText, 20, 20)

        doc.save(`Renuncia_${formData.nombre.replace(/\s+/g, '_')}.pdf`)
    }

    return (
        <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-emerald-400" /> 1. Ingresa tus Datos
                    </h3>

                    <div className="space-y-2">
                        <Label htmlFor="nombre" className="text-slate-200">Tu Nombre Completo</Label>
                        <Input id="nombre" name="nombre" placeholder="Ej: Juan Pérez González" value={formData.nombre} onChange={handleChange} className="bg-slate-900 border-slate-700 text-white" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="rut" className="text-slate-200">Tu RUT</Label>
                            <Input id="rut" name="rut" placeholder="12.345.678-9" value={formData.rut} onChange={handleChange} className="bg-slate-900 border-slate-700 text-white" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cargo" className="text-slate-200">Tu Cargo</Label>
                            <Input id="cargo" name="cargo" placeholder="Ej: Vendedor" value={formData.cargo} onChange={handleChange} className="bg-slate-900 border-slate-700 text-white" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="empresa" className="text-slate-200">Nombre Empresa</Label>
                        <Input id="empresa" name="empresa" placeholder="Ej: Comercial Ltda." value={formData.empresa} onChange={handleChange} className="bg-slate-900 border-slate-700 text-white" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="fechaRenuncia" className="text-slate-200">Fecha Efectiva Renuncia</Label>
                            <Input type="date" id="fechaRenuncia" name="fechaRenuncia" value={formData.fechaRenuncia} onChange={handleChange} className="bg-slate-900 border-slate-700 text-white" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="ultimoDia" className="text-slate-200">Último Día Trabajado</Label>
                            <Input type="date" id="ultimoDia" name="ultimoDia" value={formData.ultimoDia} onChange={handleChange} className="bg-slate-900 border-slate-700 text-white" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="motivo" className="text-slate-200">Motivo (Opcional)</Label>
                        <Select onValueChange={(val) => handleSelectChange("motivo", val)} defaultValue="personal">
                            <SelectTrigger className="bg-slate-900 border-slate-700 text-white">
                                <SelectValue placeholder="Selecciona un motivo" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="personal">Personal (Estándar)</SelectItem>
                                <SelectItem value="mejor_oferta">Mejor Oferta Laboral</SelectItem>
                                <SelectItem value="estudios">Estudios</SelectItem>
                                <SelectItem value="salud">Salud</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                </CardContent>
            </Card>

            <Card className="bg-white text-slate-900 shadow-xl">
                <CardContent className="p-8 relative">
                    <div className="absolute top-4 right-4 flex gap-2">
                        <Button size="icon" variant="ghost" onClick={handleCopy} className="text-slate-500 hover:text-blue-600 hover:bg-blue-50">
                            {copied ? <CheckCircle className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                        </Button>
                    </div>

                    <h3 className="text-lg font-bold text-slate-800 mb-6 border-b pb-2">Vista Previa Documento</h3>

                    <div className="font-mono text-sm leading-relaxed whitespace-pre-wrap min-h-[400px]">
                        {formData.nombre ? generateLetterText() : <span className="text-slate-400 italic">Completa el formulario para ver tu carta aquí...</span>}
                    </div>

                    {formData.nombre && (
                        <div className="mt-6 flex gap-3">
                            <Button onClick={handleCopy} className="flex-1 bg-slate-800 hover:bg-slate-700 text-white">
                                <Copy className="mr-2 h-4 w-4" /> Copiar Texto
                            </Button>
                            <Button onClick={handleDownloadPDF} className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                                <Download className="mr-2 h-4 w-4" /> Descargar PDF
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
