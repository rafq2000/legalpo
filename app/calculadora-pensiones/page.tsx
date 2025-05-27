"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ShareButton } from "@/components/share-button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { InfoIcon, Calculator, Users, DollarSign, FileText } from "lucide-react"

interface Hijo {
  edad: number
  tieneDiscapacidad: boolean
  gastosEducacion: number
  gastosSalud: number
  gastosExtracurriculares: number
  viveConAlimentante: boolean
}

interface ResultadoCalculo {
  montoMinimo: number
  montoMaximo: number
  montoRecomendado: number
  porcentajeIngreso: number
  desglose: {
    alimentacion: number
    habitacion: number
    vestimenta: number
    salud: number
    educacion: number
    movilizacion: number
    otros: number
  }
  factoresConsiderados: string[]
  advertencias: string[]
}

export default function CalculadoraPensionesPage() {
  const [ingresoLiquido, setIngresoLiquido] = useState<number>(0)
  const [tipoTrabajo, setTipoTrabajo] = useState<string>("")
  const [otrosIngresos, setOtrosIngresos] = useState<number>(0)
  const [gastosPersonales, setGastosPersonales] = useState<number>(0)
  const [otrasObligaciones, setOtrasObligaciones] = useState<number>(0)
  const [numeroHijos, setNumeroHijos] = useState<number>(1)
  const [hijos, setHijos] = useState<Hijo[]>([
    {
      edad: 5,
      tieneDiscapacidad: false,
      gastosEducacion: 0,
      gastosSalud: 0,
      gastosExtracurriculares: 0,
      viveConAlimentante: false,
    },
  ])
  const [regionResidencia, setRegionResidencia] = useState<string>("")
  const [situacionVivienda, setSituacionVivienda] = useState<string>("")
  const [observaciones, setObservaciones] = useState<string>("")
  const [resultado, setResultado] = useState<ResultadoCalculo | null>(null)

  const formatMoney = (amount: number): string => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const actualizarNumeroHijos = (num: number) => {
    setNumeroHijos(num)
    const nuevosHijos = Array.from(
      { length: num },
      (_, i) =>
        hijos[i] || {
          edad: 5,
          tieneDiscapacidad: false,
          gastosEducacion: 0,
          gastosSalud: 0,
          gastosExtracurriculares: 0,
          viveConAlimentante: false,
        },
    )
    setHijos(nuevosHijos)
  }

  const actualizarHijo = (index: number, campo: keyof Hijo, valor: any) => {
    const nuevosHijos = [...hijos]
    nuevosHijos[index] = { ...nuevosHijos[index], [campo]: valor }
    setHijos(nuevosHijos)
  }

  const calcularPension = () => {
    if (ingresoLiquido <= 0) {
      alert("Por favor, ingrese un ingreso líquido válido.")
      return
    }

    const ingresoTotal = ingresoLiquido + otrosIngresos
    const ingresoDisponible = ingresoTotal - gastosPersonales - otrasObligaciones

    // Factores base según Ley 14.908
    let porcentajeBase = 0
    switch (numeroHijos) {
      case 1:
        porcentajeBase = 0.25
        break
      case 2:
        porcentajeBase = 0.35
        break
      case 3:
        porcentajeBase = 0.45
        break
      case 4:
        porcentajeBase = 0.5
        break
      default:
        porcentajeBase = 0.55
        break
    }

    // Ajustes por edad y circunstancias especiales
    let factorAjuste = 1
    const factoresConsiderados: string[] = []
    const advertencias: string[] = []

    // Análisis por hijo
    hijos.forEach((hijo, index) => {
      if (hijo.edad < 2) {
        factorAjuste += 0.1
        factoresConsiderados.push(`Hijo ${index + 1}: Menor de 2 años (+10%)`)
      } else if (hijo.edad >= 18 && hijo.edad <= 24) {
        factorAjuste += 0.05
        factoresConsiderados.push(`Hijo ${index + 1}: Estudiante universitario (+5%)`)
      } else if (hijo.edad > 24) {
        advertencias.push(`Hijo ${index + 1}: Mayor de 24 años - verificar si corresponde pensión`)
      }

      if (hijo.tieneDiscapacidad) {
        factorAjuste += 0.15
        factoresConsiderados.push(`Hijo ${index + 1}: Con discapacidad (+15%)`)
      }

      if (hijo.gastosEducacion > 0) {
        factorAjuste += 0.05
        factoresConsiderados.push(`Hijo ${index + 1}: Gastos educación especial (+5%)`)
      }

      if (hijo.gastosSalud > 0) {
        factorAjuste += 0.03
        factoresConsiderados.push(`Hijo ${index + 1}: Gastos médicos especiales (+3%)`)
      }

      if (hijo.viveConAlimentante) {
        factorAjuste -= 0.1
        factoresConsiderados.push(`Hijo ${index + 1}: Vive con alimentante (-10%)`)
      }
    })

    // Ajustes por región y costo de vida
    if (regionResidencia === "metropolitana") {
      factorAjuste += 0.1
      factoresConsiderados.push("Región Metropolitana: Mayor costo de vida (+10%)")
    } else if (["antofagasta", "tarapaca", "magallanes"].includes(regionResidencia)) {
      factorAjuste += 0.08
      factoresConsiderados.push("Región extrema: Mayor costo de vida (+8%)")
    }

    // Ajustes por tipo de trabajo
    if (tipoTrabajo === "independiente") {
      factorAjuste += 0.05
      factoresConsiderados.push("Trabajo independiente: Ingresos variables (+5%)")
    }

    // Cálculo final
    const porcentajeFinal = Math.min(porcentajeBase * factorAjuste, 0.5) // Máximo 50% legal
    const montoBase = ingresoDisponible * porcentajeFinal

    // Rangos según jurisprudencia
    const montoMinimo = montoBase * 0.8
    const montoMaximo = Math.min(montoBase * 1.2, ingresoDisponible * 0.5)
    const montoRecomendado = montoBase

    // Desglose estimado según necesidades
    const totalGastosEspeciales = hijos.reduce(
      (sum, hijo) => sum + hijo.gastosEducacion + hijo.gastosSalud + hijo.gastosExtracurriculares,
      0,
    )

    const desglose = {
      alimentacion: montoRecomendado * 0.35,
      habitacion: montoRecomendado * 0.25,
      vestimenta: montoRecomendado * 0.1,
      salud: montoRecomendado * 0.15 + totalGastosEspeciales * 0.4,
      educacion: montoRecomendado * 0.1 + totalGastosEspeciales * 0.6,
      movilizacion: montoRecomendado * 0.03,
      otros: montoRecomendado * 0.02,
    }

    // Verificaciones legales
    if (montoRecomendado > ingresoDisponible * 0.5) {
      advertencias.push("El monto calculado excede el 50% legal máximo")
    }

    if (ingresoLiquido < 350000) {
      advertencias.push("Ingreso bajo el sueldo mínimo - verificar capacidad real de pago")
    }

    if (otrasObligaciones > ingresoTotal * 0.3) {
      advertencias.push("Otras obligaciones muy altas - pueden afectar el cálculo")
    }

    setResultado({
      montoMinimo,
      montoMaximo,
      montoRecomendado,
      porcentajeIngreso: porcentajeFinal * 100,
      desglose,
      factoresConsiderados,
      advertencias,
    })
  }

  const getShareableContent = () => {
    if (!resultado) return ""

    return `🎯 CALCULÉ MI PENSIÓN ALIMENTICIA EN LEGALPO

💰 Monto recomendado: ${formatMoney(resultado.montoRecomendado)}
📊 Equivale al ${resultado.porcentajeIngreso.toFixed(1)}% del ingreso
👨‍👩‍👧‍👦 Para ${numeroHijos} hijo${numeroHijos > 1 ? "s" : ""}

✅ Basado en Ley 14.908 actualizada
🇨🇱 Cálculo oficial para Chile
💯 100% GRATIS en LegalPO.cl

#PensionAlimenticia #DerechosFamilia #Chile #LegalPO`
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Calculadora de Pensión Alimenticia</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Basada en la Ley 14.908 actualizada sobre Abandono de Familia y Pago de Pensiones Alimenticias
          </p>
          <div className="flex justify-center">
            <ShareButton
              title="Calculadora de Pensión Alimenticia - LegalPO"
              text="🎯 Calcula tu pensión alimenticia según la Ley 14.908 actualizada

✅ Considera TODOS los factores legales
🇨🇱 Basado en jurisprudencia chilena
💯 100% GRATIS

¡Pruébala ahora en LegalPO.cl!"
              size="default"
              variant="outline"
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Formulario */}
          <div className="space-y-6">
            {/* Información del Alimentante */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Información del Alimentante
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="ingreso">Ingreso Líquido Mensual (CLP) *</Label>
                  <Input
                    type="number"
                    id="ingreso"
                    placeholder="Ej: 800000"
                    value={ingresoLiquido || ""}
                    onChange={(e) => setIngresoLiquido(Number(e.target.value))}
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Ingreso después de descuentos legales (AFP, Fonasa, impuestos)
                  </p>
                </div>

                <div>
                  <Label htmlFor="tipo-trabajo">Tipo de Trabajo</Label>
                  <Select value={tipoTrabajo} onValueChange={setTipoTrabajo}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione tipo de trabajo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dependiente">Trabajador Dependiente</SelectItem>
                      <SelectItem value="independiente">Trabajador Independiente</SelectItem>
                      <SelectItem value="empresario">Empresario</SelectItem>
                      <SelectItem value="profesional">Profesional Liberal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="otros-ingresos">Otros Ingresos Mensuales (CLP)</Label>
                  <Input
                    type="number"
                    id="otros-ingresos"
                    placeholder="Ej: 200000"
                    value={otrosIngresos || ""}
                    onChange={(e) => setOtrosIngresos(Number(e.target.value))}
                  />
                  <p className="text-sm text-muted-foreground mt-1">Arriendos, dividendos, pensiones, etc.</p>
                </div>

                <div>
                  <Label htmlFor="gastos-personales">Gastos Personales Básicos (CLP)</Label>
                  <Input
                    type="number"
                    id="gastos-personales"
                    placeholder="Ej: 300000"
                    value={gastosPersonales || ""}
                    onChange={(e) => setGastosPersonales(Number(e.target.value))}
                  />
                  <p className="text-sm text-muted-foreground mt-1">Vivienda, alimentación, transporte básico</p>
                </div>

                <div>
                  <Label htmlFor="otras-obligaciones">Otras Obligaciones Alimentarias (CLP)</Label>
                  <Input
                    type="number"
                    id="otras-obligaciones"
                    placeholder="Ej: 150000"
                    value={otrasObligaciones || ""}
                    onChange={(e) => setOtrasObligaciones(Number(e.target.value))}
                  />
                  <p className="text-sm text-muted-foreground mt-1">Pensiones a otros hijos, padres, etc.</p>
                </div>

                <div>
                  <Label htmlFor="region">Región de Residencia</Label>
                  <Select value={regionResidencia} onValueChange={setRegionResidencia}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione región" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="metropolitana">Región Metropolitana</SelectItem>
                      <SelectItem value="valparaiso">Valparaíso</SelectItem>
                      <SelectItem value="biobio">Biobío</SelectItem>
                      <SelectItem value="antofagasta">Antofagasta</SelectItem>
                      <SelectItem value="tarapaca">Tarapacá</SelectItem>
                      <SelectItem value="magallanes">Magallanes</SelectItem>
                      <SelectItem value="otra">Otra Región</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Información de los Hijos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Información de los Beneficiarios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="numero-hijos">Número de Hijos *</Label>
                  <Select
                    value={numeroHijos.toString()}
                    onValueChange={(value) => actualizarNumeroHijos(Number(value))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} hijo{num > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {hijos.map((hijo, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Hijo {index + 1}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label>Edad (años)</Label>
                          <Input
                            type="number"
                            value={hijo.edad}
                            onChange={(e) => actualizarHijo(index, "edad", Number(e.target.value))}
                          />
                        </div>
                        <div className="flex items-center space-x-2 pt-6">
                          <Checkbox
                            id={`discapacidad-${index}`}
                            checked={hijo.tieneDiscapacidad}
                            onCheckedChange={(checked) => actualizarHijo(index, "tieneDiscapacidad", checked)}
                          />
                          <Label htmlFor={`discapacidad-${index}`}>Tiene discapacidad</Label>
                        </div>
                      </div>

                      <div>
                        <Label>Gastos Educación Especial (CLP/mes)</Label>
                        <Input
                          type="number"
                          value={hijo.gastosEducacion || ""}
                          onChange={(e) => actualizarHijo(index, "gastosEducacion", Number(e.target.value))}
                          placeholder="Colegio privado, universidad, etc."
                        />
                      </div>

                      <div>
                        <Label>Gastos Médicos Especiales (CLP/mes)</Label>
                        <Input
                          type="number"
                          value={hijo.gastosSalud || ""}
                          onChange={(e) => actualizarHijo(index, "gastosSalud", Number(e.target.value))}
                          placeholder="Tratamientos, medicamentos, etc."
                        />
                      </div>

                      <div>
                        <Label>Actividades Extracurriculares (CLP/mes)</Label>
                        <Input
                          type="number"
                          value={hijo.gastosExtracurriculares || ""}
                          onChange={(e) => actualizarHijo(index, "gastosExtracurriculares", Number(e.target.value))}
                          placeholder="Deportes, música, idiomas, etc."
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={`vive-con-${index}`}
                          checked={hijo.viveConAlimentante}
                          onCheckedChange={(checked) => actualizarHijo(index, "viveConAlimentante", checked)}
                        />
                        <Label htmlFor={`vive-con-${index}`}>Vive con el alimentante</Label>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            {/* Observaciones */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Observaciones Adicionales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Circunstancias especiales, gastos extraordinarios, etc."
                  value={observaciones}
                  onChange={(e) => setObservaciones(e.target.value)}
                  rows={3}
                />
              </CardContent>
            </Card>

            <Button onClick={calcularPension} className="w-full" size="lg">
              <Calculator className="mr-2 h-5 w-5" />
              Calcular Pensión Alimenticia
            </Button>
          </div>

          {/* Resultados */}
          <div className="space-y-6">
            {resultado && (
              <>
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800">Resultado del Cálculo</CardTitle>
                    <CardDescription>Basado en la Ley 14.908 y jurisprudencia chilena</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold text-green-700">{formatMoney(resultado.montoRecomendado)}</div>
                      <Badge variant="secondary" className="text-sm">
                        {resultado.porcentajeIngreso.toFixed(1)}% del ingreso disponible
                      </Badge>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Rango mínimo:</span>
                        <span className="font-medium">{formatMoney(resultado.montoMinimo)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Rango máximo:</span>
                        <span className="font-medium">{formatMoney(resultado.montoMaximo)}</span>
                      </div>
                    </div>

                    <div className="text-center">
                      <ShareButton
                        title="Calculadora de Pensión Alimenticia - LegalPO"
                        text={getShareableContent()}
                        size="sm"
                        variant="default"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Desglose */}
                <Card>
                  <CardHeader>
                    <CardTitle>Desglose Estimado por Necesidades</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(resultado.desglose).map(([categoria, monto]) => (
                      <div key={categoria} className="flex justify-between items-center">
                        <span className="capitalize text-sm">{categoria.replace(/([A-Z])/g, " $1").trim()}:</span>
                        <span className="font-medium">{formatMoney(monto)}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Factores Considerados */}
                {resultado.factoresConsiderados.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <InfoIcon className="h-5 w-5" />
                        Factores Considerados
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        {resultado.factoresConsiderados.map((factor, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">•</span>
                            <span>{factor}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Advertencias */}
                {resultado.advertencias.length > 0 && (
                  <Alert variant="destructive">
                    <AlertTitle>Advertencias Importantes</AlertTitle>
                    <AlertDescription>
                      <ul className="space-y-1 mt-2">
                        {resultado.advertencias.map((advertencia, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span>•</span>
                            <span>{advertencia}</span>
                          </li>
                        ))}
                      </ul>
                    </AlertDescription>
                  </Alert>
                )}

                {/* Información Legal */}
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-blue-800">Información Legal Importante</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-700 space-y-2">
                    <p>• Este cálculo es referencial y se basa en la Ley 14.908 actualizada.</p>
                    <p>
                      • El monto final será determinado por el tribunal considerando todas las circunstancias del caso.
                    </p>
                    <p>• La pensión no puede exceder el 50% de los ingresos líquidos del alimentante.</p>
                    <p>
                      • Se deben considerar las necesidades reales de los beneficiarios y la capacidad económica del
                      alimentante.
                    </p>
                    <p>
                      • Para casos complejos, se recomienda consultar con un abogado especialista en derecho de familia.
                    </p>
                  </CardContent>
                </Card>
              </>
            )}

            {!resultado && (
              <Card className="border-dashed">
                <CardContent className="text-center py-12">
                  <Calculator className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Complete el formulario y haga clic en "Calcular" para ver los resultados
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
