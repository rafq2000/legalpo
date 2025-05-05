"use client"

import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription as AlertDescriptionComponent } from "@/components/ui/alert"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { obtenerValorUTM, obtenerIngresoMinimo } from "@/lib/sii-service"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { AdUnit } from "@/components/ad-unit"
import { useAction } from "@/hooks/use-action"
import { UpgradeModal } from "@/components/upgrade-modal"

export default function CalculadoraPensionesPage() {
  // Estado para el valor del ingreso mínimo mensual (IMM) y UTM
  const [ingresoMinimo, setIngresoMinimo] = useState(510636) // Valor actualizado 2025
  const [valorUTM, setValorUTM] = useState(65287) // Valor UTM Marzo 2025 (SII)
  const [cargando, setCargando] = useState(false)

  // Estados para los inputs del formulario
  const [ingresoAlimentante, setIngresoAlimentante] = useState(800000)
  const [ingresoCuidador, setIngresoCuidador] = useState(400000)
  const [numHijos, setNumHijos] = useState(1)
  const [hijosMenores, setHijosMenores] = useState(1)
  const [hijosMayores, setHijosMayores] = useState(0)
  const [hijosConDiscapacidad, setHijosConDiscapacidad] = useState(false)
  const [necesidadesEspeciales, setNecesidadesEspeciales] = useState("")
  const [necesidadesAlimentario, setNecesidadesAlimentario] = useState([
    { concepto: "Alimentación", monto: 150000 },
    { concepto: "Educación", monto: 120000 },
    { concepto: "Salud", monto: 80000 },
    { concepto: "Vivienda", monto: 180000 },
    { concepto: "Vestuario", monto: 60000 },
    { concepto: "Recreación", monto: 40000 },
    { concepto: "Transporte", monto: 50000 },
    { concepto: "Otros gastos", monto: 20000 },
  ])
  const [pagaOtraPension, setPagaOtraPension] = useState(false)
  const [montoOtraPension, setMontoOtraPension] = useState(0)
  const [esAbuelo, setEsAbuelo] = useState(false)
  const [alimentanteTienePensionSobrevivencia, setAlimentanteTienePensionSobrevivencia] = useState(false)
  const [montoPensionSobrevivencia, setMontoPensionSobrevivencia] = useState(0)
  const [gastosFijosAlimentante, setGastosFijosAlimentante] = useState(300000)
  const [cargasFamiliares, setCargasFamiliares] = useState(0)

  // Estado para el resultado
  const [resultado, setResultado] = useState<{
    montoMinimo: number
    montoBase: number
    montoMaximo: number
    porcentajeIngreso: string
  } | null>(null)
  const [detalleCalculo, setDetalleCalculo] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState("datos") // Para manejar pestañas

  // Hook para controlar acciones
  const { triggerAction } = useAction()

  // Cargar valores actualizados al iniciar
  useEffect(() => {
    const cargarValores = async () => {
      setCargando(true)
      try {
        const utm = await obtenerValorUTM()
        const imm = obtenerIngresoMinimo()
        setValorUTM(utm)
        setIngresoMinimo(imm)
      } catch (error) {
        console.error("Error al cargar valores:", error)
      } finally {
        setCargando(false)
      }
    }

    cargarValores()
  }, [])

  // Actualiza el número total de hijos cuando cambian los menores o mayores
  useEffect(() => {
    setNumHijos(Number.parseInt(hijosMenores.toString()) + Number.parseInt(hijosMayores.toString()))
  }, [hijosMenores, hijosMayores])

  // Función para convertir pesos a UTM
  const pesosAUTM = (pesos: number): number => {
    return pesos / valorUTM
  }

  // Función para calcular la pensión alimenticia
  const handleCalcularPension = () => {
    triggerAction("calcular_pension", calcularPension, {
      ingresoAlimentante,
      ingresoCuidador,
      numHijos,
    })
  }

  // Función real de cálculo
  const calcularPension = () => {
    const detalles: string[] = []

    // Validación de entrada de datos
    if (ingresoAlimentante <= 0) {
      alert("El ingreso del alimentante debe ser mayor a cero")
      return
    }

    // Capacidad económica disponible del alimentante (considerando solo hasta 50% de sus ingresos)
    const capacidadEconomica = ingresoAlimentante
    const capacidadMaximaLegal = ingresoAlimentante * 0.5
    detalles.push(`Ingreso total del alimentante: $${ingresoAlimentante.toLocaleString()}`)
    detalles.push(`Capacidad máxima legal (50% del ingreso): $${capacidadMaximaLegal.toLocaleString()}`)

    // Si tiene gastos fijos, se mencionan pero no reducen el máximo legal
    if (gastosFijosAlimentante > 0) {
      detalles.push(
        `Gastos fijos declarados: $${gastosFijosAlimentante.toLocaleString()} (informativo, no reduce el máximo legal del 50%)`,
      )
    }

    // Mínimos legales (solo para menores de edad)
    let pensionMinima = 0
    if (!esAbuelo && hijosMenores > 0) {
      if (hijosMenores === 1) {
        pensionMinima = ingresoMinimo * 0.4
        detalles.push(
          `Mínimo legal para 1 hijo menor: $${pensionMinima.toLocaleString()} (40% del IMM de $${ingresoMinimo.toLocaleString()})`,
        )
      } else if (hijosMenores >= 2) {
        pensionMinima = ingresoMinimo * 0.6 // 40% por el primero + 30% adicional por el segundo = 70%
        detalles.push(
          `Mínimo legal para 2 o más hijos menores: $${pensionMinima.toLocaleString()} (60% del IMM de $${ingresoMinimo.toLocaleString()})`,
        )
      }
    } else {
      detalles.push("No aplican mínimos legales (alimentado mayor de edad o alimentante abuelo)")
    }

    // Calcular el total de necesidades del alimentario
    const totalNecesidades = necesidadesAlimentario.reduce((sum, item) => sum + item.monto, 0)
    if (totalNecesidades > 0) {
      detalles.push(`Total de necesidades mensuales del alimentario: $${totalNecesidades.toLocaleString()}`)
    } else {
      detalles.push("No se han especificado montos para las necesidades del alimentario")
    }

    // Proporcionalidad entre ingresos de ambos padres
    let proporcionAlimentante = 1
    if (ingresoCuidador > 0 && ingresoAlimentante > 0) {
      const ingresoTotal = ingresoAlimentante + ingresoCuidador
      proporcionAlimentante = ingresoAlimentante / ingresoTotal
      detalles.push(
        `Proporción según ingresos: ${(proporcionAlimentante * 100).toFixed(2)}% corresponde al alimentante y ${((1 - proporcionAlimentante) * 100).toFixed(2)}% al cuidador`,
      )
    } else if (ingresoAlimentante > 0) {
      detalles.push("El cuidador no tiene ingresos declarados, se asigna 100% al alimentante")
    } else {
      detalles.push("Advertencia: No hay ingresos suficientes para calcular proporción")
    }

    // Monto proporcional de las necesidades
    let montoProporcional = 0
    if (totalNecesidades > 0) {
      montoProporcional = totalNecesidades * proporcionAlimentante
      detalles.push(
        `Contribución proporcional del alimentante a las necesidades: $${montoProporcional.toLocaleString()} (${(proporcionAlimentante * 100).toFixed(2)}% del total)`,
      )
    }

    // Cálculo basado en capacidad económica y necesidades
    let montoCalculado

    if (totalNecesidades > 0) {
      // Si hay necesidades específicas, usamos el cálculo proporcional
      montoCalculado = montoProporcional
      detalles.push(`Monto calculado según necesidades y proporción de ingresos: $${montoCalculado.toLocaleString()}`)
    } else {
      // Cálculo basado solo en ingresos (30% por hijo como base estimada)
      montoCalculado = ingresoAlimentante * 0.3 * numHijos
      detalles.push(`Monto estimado sin detalle de necesidades (30% por hijo): $${montoCalculado.toLocaleString()}`)
    }

    // Máximo legal (50% de los ingresos, excepto en casos de discapacidad)
    let maximoLegal = capacidadMaximaLegal
    if (hijosConDiscapacidad) {
      maximoLegal = ingresoAlimentante * 0.6 // Puede exceder el 50% en casos de discapacidad
      detalles.push(
        `Máximo legal aumentado por hijo(s) con discapacidad: $${maximoLegal.toLocaleString()} (60% de los ingresos)`,
      )
    } else {
      detalles.push(`Máximo legal: $${maximoLegal.toLocaleString()} (50% de los ingresos)`)
    }

    // Consideración de otras pensiones que ya paga
    if (pagaOtraPension) {
      detalles.push(`El alimentante ya paga otra pensión de alimentos por $${montoOtraPension.toLocaleString()}`)
      // Ajuste del máximo legal considerando la otra pensión
      maximoLegal = Math.max(0, maximoLegal - montoOtraPension)
      detalles.push(`Máximo legal disponible después de considerar otra pensión: $${maximoLegal.toLocaleString()}`)
    }

    // Ajuste por cargas familiares adicionales
    if (cargasFamiliares > 0) {
      const reduccion = montoCalculado * 0.05 * cargasFamiliares
      montoCalculado -= reduccion
      detalles.push(
        `Reducción por ${cargasFamiliares} carga(s) familiar(es) adicional(es): $${reduccion.toLocaleString()}`,
      )
    }

    // Consideración de pensión de sobrevivencia del alimentante
    if (alimentanteTienePensionSobrevivencia) {
      detalles.push(`El alimentante recibe pensión de sobrevivencia de $${montoPensionSobrevivencia.toLocaleString()}`)
      // Se debe considerar la pensión de sobrevivencia como parte de los ingresos del alimentante
      if (montoPensionSobrevivencia > 0) {
        const ajusteSobrevivencia = montoCalculado * 0.2 // Ajuste estimado por tener pensión de sobrevivencia
        montoCalculado = Math.max(0, montoCalculado - ajusteSobrevivencia)
        detalles.push(`Ajuste por pensión de sobrevivencia del alimentante: $${ajusteSobrevivencia.toLocaleString()}`)
      }
    }

    // Determinación del monto final
    let montoFinal

    if (esAbuelo) {
      // Para abuelos, no hay mínimo legal
      montoFinal = Math.min(montoCalculado, maximoLegal)
      detalles.push("Cálculo especial para abuelos alimentantes (sin mínimo legal)")
    } else {
      // Monto normal considerando mínimos legales para menores
      montoFinal = Math.max(pensionMinima, Math.min(montoCalculado, maximoLegal))
    }

    // Resultado final con tramos (para no generar falsas expectativas)
    const montoBase = Math.round(montoFinal)
    const montoMinimo = Math.round(montoBase * 0.9) // 10% menos del calculado
    const montoMaximo = Math.round(montoBase * 1.1) // 10% más del calculado

    setResultado({
      montoMinimo: montoMinimo,
      montoBase: montoBase,
      montoMaximo: montoMaximo,
      porcentajeIngreso: ((montoFinal / ingresoAlimentante) * 100).toFixed(2),
    })

    setDetalleCalculo(detalles)

    // Cambiar a la pestaña de resultado
    setActiveTab("resultado")
  }

  return (
    <div className="container mx-auto py-6">
      {/* Modal de upgrade */}
      <UpgradeModal />

      {/* Anuncio al inicio de la página */}
      <AdUnit slot="1234567890" format="horizontal" className="mb-6" />

      <div className="flex items-center mb-4">
        <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span>Volver al inicio</span>
        </Link>
      </div>

      <Card className="max-w-4xl mx-auto shadow-lg border-blue-100">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-100">
          <CardTitle className="text-2xl text-center">Calculadora de Pensiones Alimenticias - Chile</CardTitle>
          <CardDescription className="text-center">
            Basada en la Ley 14.908 actualizada y el Código Civil
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-blue-50">
              <TabsTrigger
                value="datos"
                className={cn(
                  "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                  "data-[state=inactive]:text-blue-800",
                )}
              >
                Datos Personales
              </TabsTrigger>
              <TabsTrigger
                value="necesidades"
                className={cn(
                  "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                  "data-[state=inactive]:text-blue-800",
                )}
              >
                Necesidades
              </TabsTrigger>
              <TabsTrigger
                value="resultado"
                disabled={!resultado}
                className={cn(
                  "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                  "data-[state=inactive]:text-blue-800",
                  "data-[state=inactive]:opacity-50",
                )}
              >
                Resultado
              </TabsTrigger>
            </TabsList>

            <TabsContent value="datos" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-lg">Datos del alimentante</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="ingresoAlimentante">Ingreso mensual del alimentante (CLP):</Label>
                      <Input
                        id="ingresoAlimentante"
                        type="number"
                        value={ingresoAlimentante}
                        onChange={(e) => setIngresoAlimentante(Number(e.target.value))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gastosFijos">Gastos fijos mensuales (CLP):</Label>
                      <Input
                        id="gastosFijos"
                        type="number"
                        value={gastosFijosAlimentante}
                        onChange={(e) => setGastosFijosAlimentante(Number(e.target.value))}
                      />
                      <p className="text-sm text-muted-foreground">Considere arriendo/hipoteca, salud, etc.</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cargasFamiliares">Cargas familiares adicionales:</Label>
                      <Input
                        id="cargasFamiliares"
                        type="number"
                        value={cargasFamiliares}
                        onChange={(e) => setCargasFamiliares(Number(e.target.value))}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="esAbuelo"
                        checked={esAbuelo}
                        onCheckedChange={(checked) => setEsAbuelo(checked === true)}
                      />
                      <Label htmlFor="esAbuelo">El alimentante es abuelo/a</Label>
                    </div>

                    {esAbuelo && (
                      <Alert>
                        <AlertDescriptionComponent>
                          Recuerde: Debe acreditarse insuficiencia del alimentante principal.
                        </AlertDescriptionComponent>
                      </Alert>
                    )}

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="pensionSobrevivencia"
                        checked={alimentanteTienePensionSobrevivencia}
                        onCheckedChange={(checked) => setAlimentanteTienePensionSobrevivencia(checked === true)}
                      />
                      <Label htmlFor="pensionSobrevivencia">Recibe pensión de sobrevivencia</Label>
                    </div>

                    {alimentanteTienePensionSobrevivencia && (
                      <div className="space-y-2">
                        <Label htmlFor="montoPensionSobrevivencia">Monto pensión sobrevivencia (CLP):</Label>
                        <Input
                          id="montoPensionSobrevivencia"
                          type="number"
                          value={montoPensionSobrevivencia}
                          onChange={(e) => setMontoPensionSobrevivencia(Number(e.target.value))}
                        />
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="pagaOtraPension"
                        checked={pagaOtraPension}
                        onCheckedChange={(checked) => setPagaOtraPension(checked === true)}
                      />
                      <Label htmlFor="pagaOtraPension">Ya paga pensión por otro(s) hijo(s)</Label>
                    </div>

                    {pagaOtraPension && (
                      <div className="space-y-2">
                        <Label htmlFor="montoOtraPension">Monto otra pensión (CLP):</Label>
                        <Input
                          id="montoOtraPension"
                          type="number"
                          value={montoOtraPension}
                          onChange={(e) => setMontoOtraPension(Number(e.target.value))}
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-lg">Datos del alimentario</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="ingresoCuidador">Ingreso mensual padre/madre cuidador (CLP):</Label>
                      <Input
                        id="ingresoCuidador"
                        type="number"
                        value={ingresoCuidador}
                        onChange={(e) => setIngresoCuidador(Number(e.target.value))}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="hijosMenores">Hijos menores de edad:</Label>
                        <Input
                          id="hijosMenores"
                          type="number"
                          min="0"
                          value={hijosMenores}
                          onChange={(e) => setHijosMenores(Number(e.target.value))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hijosMayores">Hijos mayores de edad:</Label>
                        <Input
                          id="hijosMayores"
                          type="number"
                          min="0"
                          value={hijosMayores}
                          onChange={(e) => setHijosMayores(Number(e.target.value))}
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="hijosConDiscapacidad"
                        checked={hijosConDiscapacidad}
                        onCheckedChange={(checked) => setHijosConDiscapacidad(checked === true)}
                      />
                      <Label htmlFor="hijosConDiscapacidad">Algún hijo tiene discapacidad</Label>
                    </div>

                    {hijosConDiscapacidad && (
                      <>
                        <Alert className="bg-blue-50 text-blue-800 border-blue-200">
                          <AlertDescriptionComponent>
                            La discapacidad permite superar el límite máximo del 50% de los ingresos.
                          </AlertDescriptionComponent>
                        </Alert>

                        <div className="space-y-2">
                          <Label htmlFor="necesidadesEspeciales">Necesidades especiales:</Label>
                          <Textarea
                            id="necesidadesEspeciales"
                            value={necesidadesEspeciales}
                            onChange={(e) => setNecesidadesEspeciales(e.target.value)}
                            placeholder="Describa tratamientos médicos, terapias, etc."
                            rows={3}
                          />
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="necesidades">
              <Card className="border-blue-100">
                <CardHeader className="bg-blue-50 border-b border-blue-100">
                  <CardTitle className="text-lg">Necesidades del alimentario</CardTitle>
                  <CardDescription>
                    Indique los montos mensuales para cada concepto de necesidad. Estos se repartirán proporcionalmente
                    según los ingresos de ambos padres.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Concepto</th>
                          <th className="text-right py-2 w-1/3">Monto mensual (CLP)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {necesidadesAlimentario.map((item, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-2">{item.concepto}</td>
                            <td className="py-2">
                              <Input
                                type="number"
                                value={item.monto}
                                onChange={(e) => {
                                  const newNecesidades = [...necesidadesAlimentario]
                                  newNecesidades[index].monto = Number(e.target.value)
                                  setNecesidadesAlimentario(newNecesidades)
                                }}
                                className="text-right"
                              />
                            </td>
                          </tr>
                        ))}
                        <tr className="font-bold bg-muted">
                          <td className="py-2">TOTAL</td>
                          <td className="py-2 text-right pr-4">
                            ${necesidadesAlimentario.reduce((sum, item) => sum + item.monto, 0).toLocaleString()}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resultado">
              {resultado && (
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader className="bg-blue-50 border-b border-blue-200">
                    <CardTitle className="text-xl">Resultado del cálculo</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="flex justify-center items-center space-x-2">
                        <p className="text-xl font-bold text-blue-600">${resultado.montoMinimo.toLocaleString()}</p>
                        <span className="text-gray-400">-</span>
                        <p className="text-3xl font-bold text-blue-800">${resultado.montoBase.toLocaleString()}</p>
                        <span className="text-gray-400">-</span>
                        <p className="text-xl font-bold text-blue-600">${resultado.montoMaximo.toLocaleString()}</p>
                      </div>
                      <p className="text-muted-foreground mt-1">Rango estimado de pensión mensual</p>
                      <p className="mt-2 text-sm">
                        Equivale aproximadamente al {resultado.porcentajeIngreso}% del ingreso del alimentante
                      </p>
                      <p className="mt-2 text-sm font-medium">
                        En UTM: {pesosAUTM(resultado.montoMinimo).toFixed(2)} -{" "}
                        {pesosAUTM(resultado.montoBase).toFixed(2)} - {pesosAUTM(resultado.montoMaximo).toFixed(2)} UTM
                      </p>
                    </div>

                    <Card className="border-blue-100">
                      <CardHeader className="bg-blue-50 border-b border-blue-100">
                        <CardTitle className="text-sm">Detalle del cálculo:</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          {detalleCalculo.map((detalle, index) => (
                            <li key={index}>{detalle}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Alert className="bg-yellow-50 border-yellow-200">
                      <AlertDescriptionComponent className="text-yellow-800">
                        <strong>Importante:</strong> Esta calculadora proporciona solo una estimación. El monto final de
                        la pensión alimenticia será determinado por el tribunal según las circunstancias específicas del
                        caso.
                      </AlertDescriptionComponent>
                    </Alert>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          <AdUnit slot="1234567890" format="horizontal" className="my-8" />

          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="ingresoMinimo" className="font-semibold">
                  Ingreso Mínimo Mensual:
                </Label>
                <div className="flex items-center">
                  <span className="mr-2">$</span>
                  <Input
                    id="ingresoMinimo"
                    type="number"
                    value={ingresoMinimo}
                    onChange={(e) => setIngresoMinimo(Number(e.target.value))}
                    className="w-32"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="valorUTM" className="font-semibold">
                  Valor UTM (Marzo 2025):
                </Label>
                <div className="flex items-center">
                  <span className="mr-2">$</span>
                  <Input
                    id="valorUTM"
                    type="number"
                    value={valorUTM}
                    onChange={(e) => setValorUTM(Number(e.target.value))}
                    className="w-32"
                  />
                </div>
              </div>
            </div>

            <Button
              onClick={handleCalcularPension}
              className="w-full bg-blue-600 text-primary-foreground py-3 rounded-lg hover:bg-blue-700 font-semibold transition"
            >
              Calcular Pensión
            </Button>
          </div>

          <div className="mt-8 bg-muted p-4 rounded-lg text-sm text-muted-foreground">
            <h3 className="font-semibold mb-2">Notas legales:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Calculadora basada en la Ley 14.908 sobre Abandono de Familia y Pago de Pensiones Alimenticias y el
                Código Civil chileno.
              </li>
              <li>
                Los mínimos legales aplican solo a menores de edad: 40% del IMM por un hijo, 60% en total por dos o más
                hijos.
              </li>
              <li>
                El límite máximo es 50% de los ingresos del alimentante, excepto en casos de discapacidad donde puede
                ser superior.
              </li>
              <li>
                En caso de abuelos alimentantes, debe acreditarse insuficiencia o inexistencia del alimentante principal
                y no rigen los mínimos legales.
              </li>
              <li>
                La pensión puede ser mayor o menor al 30% del ingreso por cada hijo, pero sin superar el 50% total de
                los ingresos (excepto en casos especiales).
              </li>
              <li>
                El tribunal determinará el monto definitivo considerando las necesidades del alimentario y la capacidad
                económica del alimentante.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
      <div className="mt-8">
        <AdUnit slot="1234567890" format="rectangle" />
      </div>
    </div>
  )
}
