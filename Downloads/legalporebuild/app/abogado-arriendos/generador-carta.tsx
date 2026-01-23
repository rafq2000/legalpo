"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Copy, Download } from "lucide-react"

export default function GeneradorCartaAviso() {
    const [formData, setFormData] = useState({
        nombreArrendador: "",
        rutArrendador: "",
        nombreArrendatario: "",
        direccion: "",
        fechaContrato: "",
        mesesDeuda: "",
    })

    const [cartaGenerada, setCartaGenerada] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const generarCarta = () => {
        const texto = `CARTA DE AVISO DE TERMINACIÓN DE CONTRATO DE ARRIENDO
POR NO PAGO DE RENTAS

Fecha: ${new Date().toLocaleDateString('es-CL')}

DE: ${formData.nombreArrendador} (Arrendador)
RUT: ${formData.rutArrendador}

PARA: ${formData.nombreArrendatario} (Arrendatario)
Dirección del Inmueble: ${formData.direccion}

PRESENTE.

Por intermedio de la presente, y en mi calidad de arrendador del inmueble ubicado en ${formData.direccion}, vengo a comunicar a usted lo siguiente:

1. Que con fecha ${formData.fechaContrato}, celebramos contrato de arriendo respecto de la propiedad singularizada.
2. Que a la fecha, usted adeuda ${formData.mesesDeuda} meses de renta, incumpliendo gravemente las obligaciones contraídas.
3. Que por medio de esta carta, solicito el pago inmediato e íntegro de lo adeudado.

De no regularizar esta situación en un plazo de 10 días corridos, se procederá a interponer la demanda judicial correspondiente bajo el amparo de la Ley 21.461 ("Devuélveme mi Casa"), solicitando el pago de lo debido y la restitución inmediata del inmueble con auxilio de la fuerza pública si fuere necesario.

Sin otro particular,

__________________________
${formData.nombreArrendador}
RUT: ${formData.rutArrendador}`

        setCartaGenerada(texto)
    }

    const copiarTexto = () => {
        navigator.clipboard.writeText(cartaGenerada)
    }

    return (
        <Card className="w-full h-full shadow-lg border-slate-200">
            <CardHeader className="bg-slate-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-slate-800">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Generador de Carta de Cobro
                </CardTitle>
                <CardDescription>
                    Crea una carta formal para exigir el pago o anunciar el término del arriendo.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                {!cartaGenerada ? (
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Nombre Arrendador (Dueño)</Label>
                                <Input name="nombreArrendador" placeholder="Juan Pérez" onChange={handleChange} />
                            </div>
                            <div className="space-y-2">
                                <Label>RUT Arrendador</Label>
                                <Input name="rutArrendador" placeholder="12.345.678-9" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Nombre Arrendatario (Inquilino)</Label>
                            <Input name="nombreArrendatario" placeholder="María González" onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                            <Label>Dirección de la Propiedad</Label>
                            <Input name="direccion" placeholder="Av. Siempre Viva 742" onChange={handleChange} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Fecha Inicio Contrato (Aprox)</Label>
                                <Input name="fechaContrato" placeholder="01/01/2024" onChange={handleChange} />
                            </div>
                            <div className="space-y-2">
                                <Label>Meses de Deuda</Label>
                                <Input name="mesesDeuda" placeholder="Ej: 2" type="number" onChange={handleChange} />
                            </div>
                        </div>
                        <Button onClick={generarCarta} className="w-full bg-blue-600 hover:bg-blue-700">Generar Carta</Button>
                    </div>
                ) : (
                    <div className="space-y-4 animate-in fade-in zoom-in duration-300">
                        <Textarea
                            value={cartaGenerada}
                            readOnly
                            className="min-h-[300px] font-mono text-sm bg-slate-50 p-4 leading-relaxed"
                        />
                        <div className="flex gap-2">
                            <Button onClick={copiarTexto} className="flex-1 bg-slate-800 hover:bg-slate-900">
                                <Copy className="h-4 w-4 mr-2" /> Copiar Texto
                            </Button>
                            <Button variant="outline" onClick={() => setCartaGenerada("")} className="flex-1">
                                Editar Datos
                            </Button>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
