"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Calculator, ChevronRight, FileText, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ProtectedRoute from "@/components/protected-route"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Tipos
interface HerenciaFormData {
  // Datos del Causante
  fechaFallecimiento: string
  estadoCivil: string
  testamento: string
  regimenPatrimonial: string
  nacionalidad: string
  residencia: string

  // Información sobre Herederos
  numHijos: number
  conyuge: string // Cambiado a string "si"/"no" para mayor claridad
  padres: string // Cambiado a string "si"/"no" para mayor claridad
  numHermanos: number
  otrosParientes: string
  gradoParentesco: string

  // Detalle del Patrimonio
  valorTotalBienes: number
  deudasHereditario: number
  gastosFunerales: number
  donacionesEnVida: number
}

interface HerenciaResultado {
  masaHereditariaBruta: number
  masaHereditariaLiquida: number
  totalRecibir: number
  herenciaUsuario: number
  porcentajeHerencia: number
  impuestoEstimado: number
}

// Componente principal
export default function CalculadoraHerencia() {
  // Estados
  const [activeTab, setActiveTab] = useState("causante")
  const [formData, setFormData] = useState<HerenciaFormData>({
    fechaFallecimiento: "",
    estadoCivil: "",
    testamento: "",
    regimenPatrimonial: "",
    nacionalidad: "chilena",
    residencia: "chile",
    numHijos: 0,
    conyuge: "no", // Cambiado a "si"/"no" para mayor claridad
    padres: "no", // Cambiado a "si"/"no" para mayor claridad
    numHermanos: 0,
    otrosParientes: "",
    gradoParentesco: "",
    valorTotalBienes: 0,
    deudasHereditario: 0,
    gastosFunerales: 0,
    donacionesEnVida: 0,
  })
  const [resultado, setResultado] = useState<HerenciaResultado | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Manejadores de eventos
  const handleInputChange = (field: keyof HerenciaFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Limpiar error cuando el usuario corrige el campo
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  // Validación de formulario
  const validateForm = (tab: string): boolean => {
    const newErrors: Record<string, string> = {}

    if (tab === "causante") {
      if (!formData.fechaFallecimiento) newErrors.fechaFallecimiento = "Este campo es obligatorio"
      if (!formData.estadoCivil) newErrors.estadoCivil = "Este campo es obligatorio"
      if (!formData.testamento) newErrors.testamento = "Este campo es obligatorio"
      if (
        (formData.estadoCivil === "casado" || formData.estadoCivil === "conviviente") &&
        !formData.regimenPatrimonial
      ) {
        newErrors.regimenPatrimonial = "Este campo es obligatorio"
      }
    } else if (tab === "herederos") {
      if (!formData.gradoParentesco) newErrors.gradoParentesco = "Este campo es obligatorio"
    } else if (tab === "patrimonio") {
      if (formData.valorTotalBienes <= 0) newErrors.valorTotalBienes = "Debe ingresar un valor mayor a 0"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Función para avanzar al siguiente tab
  const nextTab = (currentTab: string) => {
    if (validateForm(currentTab)) {
      if (currentTab === "causante") setActiveTab("herederos")
      else if (currentTab === "herederos") setActiveTab("patrimonio")
    }
  }

  // Función para calcular la herencia
  const calcularHerencia = () => {
    if (!validateForm("patrimonio")) return

    const {
      valorTotalBienes,
      deudasHereditario,
      gastosFunerales,
      donacionesEnVida,
      gradoParentesco,
      numHijos,
      conyuge,
      padres,
      numHermanos,
    } = formData

    // Calcular masa hereditaria bruta
    const masaHereditariaBruta = valorTotalBienes + donacionesEnVida

    // Calcular masa hereditaria líquida
    const masaHereditariaLiquida = masaHereditariaBruta - deudasHereditario - gastosFunerales

    // Impuesto estimado (simplificado para este ejemplo)
    const impuestoEstimado = masaHereditariaLiquida > 5000000 ? masaHereditariaLiquida * 0.05 : 0

    // Total a recibir después de impuestos
    const totalRecibir = masaHereditariaLiquida - impuestoEstimado

    // Calcular herencia que le corresponde al usuario según la ley chilena
    let herenciaUsuario = 0
    let porcentajeHerencia = 0

    // Lógica simplificada de distribución según el Código Civil chileno
    if (gradoParentesco === "hijo") {
      // Si hay cónyuge, los hijos reciben 2/3 de la herencia
      if (conyuge === "si") {
        porcentajeHerencia = 66.67 / (numHijos || 1)
        herenciaUsuario = (totalRecibir * (2 / 3)) / (numHijos || 1)
      } else {
        // Sin cónyuge, los hijos reciben todo
        porcentajeHerencia = 100 / (numHijos || 1)
        herenciaUsuario = totalRecibir / (numHijos || 1)
      }
    } else if (gradoParentesco === "conyuge") {
      if (numHijos > 0) {
        // Con hijos, el cónyuge recibe 1/3
        porcentajeHerencia = 33.33
        herenciaUsuario = totalRecibir * (1 / 3)
      } else if (padres === "si") {
        // Con padres pero sin hijos, el cónyuge recibe 2/3
        porcentajeHerencia = 66.67
        herenciaUsuario = totalRecibir * (2 / 3)
      } else {
        // Sin hijos ni padres, el cónyuge recibe todo
        porcentajeHerencia = 100
        herenciaUsuario = totalRecibir
      }
    } else if (gradoParentesco === "padre") {
      if (conyuge === "si") {
        // Con cónyuge, los padres reciben 1/3 entre ambos
        porcentajeHerencia = 16.67
        herenciaUsuario = (totalRecibir * (1 / 3)) / 2
      } else {
        // Sin cónyuge ni hijos, los padres reciben todo
        porcentajeHerencia = 50
        herenciaUsuario = totalRecibir / 2
      }
    } else if (gradoParentesco === "hermano") {
      // Los hermanos solo heredan si no hay descendientes, cónyuge ni ascendientes
      if (numHijos === 0 && conyuge === "no" && padres === "no") {
        porcentajeHerencia = 100 / (numHermanos || 1)
        herenciaUsuario = totalRecibir / (numHermanos || 1)
      }
    }

    setResultado({
      masaHereditariaBruta,
      masaHereditariaLiquida,
      totalRecibir,
      herenciaUsuario,
      porcentajeHerencia,
      impuestoEstimado,
    })

    setActiveTab("resultado")
  }

  // Función para determinar si el campo "conyuge" debe estar deshabilitado
  const disableConyuge = () => {
    return (
      formData.estadoCivil === "soltero" || formData.estadoCivil === "divorciado" || formData.estadoCivil === "viudo"
    )
  }

  const disableRegimenPatrimonial = () => {
    return formData.estadoCivil !== "casado" && formData.estadoCivil !== "conviviente"
  }

  // Función para formatear valores monetarios
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(value)
  }

  return (
    <ProtectedRoute>
      <div className="container py-8 font-sans">
        <div className="flex items-center mb-4">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Volver al inicio</span>
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-6 text-center">Calculadora de Herencia</h1>
        <p className="text-center mb-8 text-muted-foreground">
          Simula la distribución del patrimonio y calcula los impuestos según la ley chilena.
        </p>

        <Card className="max-w-4xl mx-auto shadow-lg border-blue-100">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Calculator className="h-8 w-8 text-blue-700" />
                <CardTitle className="text-xl text-blue-900">Simulador de Herencia</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-4 mb-6 bg-blue-50">
                <TabsTrigger
                  value="causante"
                  className={cn(
                    "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                    "data-[state=inactive]:text-blue-800",
                  )}
                >
                  Datos del Causante
                </TabsTrigger>
                <TabsTrigger
                  value="herederos"
                  className={cn(
                    "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                    "data-[state=inactive]:text-blue-800",
                  )}
                >
                  Herederos
                </TabsTrigger>
                <TabsTrigger
                  value="patrimonio"
                  className={cn(
                    "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                    "data-[state=inactive]:text-blue-800",
                  )}
                >
                  Patrimonio
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

              <TabsContent value="causante" className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-blue-800 font-medium mb-2 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-blue-700" />
                    Datos del Causante (Persona Fallecida)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fechaFallecimiento" className="text-blue-900 mb-1 block">
                        Fecha de fallecimiento
                      </Label>
                      <Input
                        id="fechaFallecimiento"
                        type="date"
                        value={formData.fechaFallecimiento}
                        onChange={(e) => handleInputChange("fechaFallecimiento", e.target.value)}
                        className={cn(
                          "border-blue-200 focus:border-blue-400",
                          errors.fechaFallecimiento && "border-red-500",
                        )}
                      />
                      {errors.fechaFallecimiento && (
                        <p className="text-red-500 text-sm mt-1">{errors.fechaFallecimiento}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="estadoCivil" className="text-blue-900 mb-1 block">
                        Estado civil al momento del fallecimiento
                      </Label>
                      <Select
                        value={formData.estadoCivil}
                        onValueChange={(value) => {
                          handleInputChange("estadoCivil", value)
                          if (value === "soltero" || value === "divorciado" || value === "viudo") {
                            handleInputChange("regimenPatrimonial", "")
                            handleInputChange("conyuge", "no")
                          } else {
                            handleInputChange("conyuge", "si")
                          }
                        }}
                      >
                        <SelectTrigger
                          id="estadoCivil"
                          className={cn(
                            "w-full border-blue-200 focus:border-blue-400",
                            errors.estadoCivil && "border-red-500",
                          )}
                        >
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="soltero">Soltero/a</SelectItem>
                          <SelectItem value="casado">Casado/a</SelectItem>
                          <SelectItem value="conviviente">Conviviente civil</SelectItem>
                          <SelectItem value="divorciado">Divorciado/a</SelectItem>
                          <SelectItem value="viudo">Viudo/a</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.estadoCivil && <p className="text-red-500 text-sm mt-1">{errors.estadoCivil}</p>}
                    </div>

                    <div>
                      <Label htmlFor="testamento" className="text-blue-900 mb-1 block">
                        ¿Existe testamento?
                      </Label>
                      <Select
                        value={formData.testamento}
                        onValueChange={(value) => handleInputChange("testamento", value)}
                      >
                        <SelectTrigger
                          id="testamento"
                          className={cn(
                            "w-full border-blue-200 focus:border-blue-400",
                            errors.testamento && "border-red-500",
                          )}
                        >
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="si">Sí</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.testamento && <p className="text-red-500 text-sm mt-1">{errors.testamento}</p>}
                    </div>

                    <div>
                      <Label htmlFor="regimenPatrimonial" className="text-blue-900 mb-1 block flex items-center">
                        Régimen patrimonial
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 ml-1 text-blue-500 cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-[200px]">Solo aplica para personas casadas o en unión civil</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Label>
                      <Select
                        value={formData.regimenPatrimonial}
                        onValueChange={(value) => handleInputChange("regimenPatrimonial", value)}
                        disabled={disableRegimenPatrimonial()}
                      >
                        <SelectTrigger
                          id="regimenPatrimonial"
                          className={cn(
                            "w-full border-blue-200 focus:border-blue-400",
                            disableRegimenPatrimonial() ? "opacity-50" : "",
                            errors.regimenPatrimonial && "border-red-500",
                          )}
                        >
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sociedadConyugal">Sociedad conyugal</SelectItem>
                          <SelectItem value="separacionBienes">Separación de bienes</SelectItem>
                          <SelectItem value="participacionGananciales">Participación en los gananciales</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.regimenPatrimonial && (
                        <p className="text-red-500 text-sm mt-1">{errors.regimenPatrimonial}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="nacionalidad" className="text-blue-900 mb-1 block">
                        Nacionalidad
                      </Label>
                      <Input
                        id="nacionalidad"
                        type="text"
                        value={formData.nacionalidad}
                        onChange={(e) => handleInputChange("nacionalidad", e.target.value)}
                        className="border-blue-200 focus:border-blue-400"
                      />
                    </div>

                    <div>
                      <Label htmlFor="residencia" className="text-blue-900 mb-1 block">
                        País de residencia
                      </Label>
                      <Input
                        id="residencia"
                        type="text"
                        value={formData.residencia}
                        onChange={(e) => handleInputChange("residencia", e.target.value)}
                        className="border-blue-200 focus:border-blue-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={() => nextTab("causante")} className="bg-blue-600 hover:bg-blue-700 text-white">
                    Siguiente
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="herederos" className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-blue-800 font-medium mb-2 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-blue-700" />
                    Información sobre Herederos
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="numHijos" className="text-blue-900 mb-1 block">
                        Número de hijos
                      </Label>
                      <Input
                        id="numHijos"
                        type="number"
                        min="0"
                        value={formData.numHijos}
                        onChange={(e) => handleInputChange("numHijos", Number(e.target.value))}
                        className="border-blue-200 focus:border-blue-400"
                      />
                    </div>

                    {!disableConyuge() && (
                      <div>
                        <Label htmlFor="conyuge" className="text-blue-900 mb-1 block">
                          ¿Existe cónyuge o conviviente civil sobreviviente?
                        </Label>
                        <Select value={formData.conyuge} onValueChange={(value) => handleInputChange("conyuge", value)}>
                          <SelectTrigger
                            id="conyuge"
                            className={cn(
                              "w-full border-blue-200 focus:border-blue-400",
                              disableConyuge() ? "opacity-50" : "",
                            )}
                          >
                            <SelectValue placeholder="Selecciona" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="si">Sí</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <div>
                      <Label htmlFor="padres" className="text-blue-900 mb-1 block">
                        ¿Existen padres sobrevivientes?
                      </Label>
                      <Select value={formData.padres} onValueChange={(value) => handleInputChange("padres", value)}>
                        <SelectTrigger id="padres" className="w-full border-blue-200 focus:border-blue-400">
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="si">Sí</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="numHermanos" className="text-blue-900 mb-1 block">
                        Número de hermanos
                      </Label>
                      <Input
                        id="numHermanos"
                        type="number"
                        min="0"
                        value={formData.numHermanos}
                        onChange={(e) => handleInputChange("numHermanos", Number(e.target.value))}
                        className="border-blue-200 focus:border-blue-400"
                      />
                    </div>

                    <div>
                      <Label htmlFor="otrosParientes" className="text-blue-900 mb-1 block">
                        Otros parientes (especificar)
                      </Label>
                      <Input
                        id="otrosParientes"
                        type="text"
                        value={formData.otrosParientes}
                        onChange={(e) => handleInputChange("otrosParientes", e.target.value)}
                        className="border-blue-200 focus:border-blue-400"
                      />
                    </div>

                    <div>
                      <Label htmlFor="gradoParentesco" className="text-blue-900 mb-1 block">
                        Tu grado de parentesco con el causante
                      </Label>
                      <Select
                        value={formData.gradoParentesco}
                        onValueChange={(value) => handleInputChange("gradoParentesco", value)}
                      >
                        <SelectTrigger
                          id="gradoParentesco"
                          className={cn(
                            "w-full border-blue-200 focus:border-blue-400",
                            errors.gradoParentesco && "border-red-500",
                          )}
                        >
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hijo">Hijo/a</SelectItem>
                          <SelectItem value="conyuge">Cónyuge/Conviviente civil</SelectItem>
                          <SelectItem value="padre">Padre/Madre</SelectItem>
                          <SelectItem value="hermano">Hermano/a</SelectItem>
                          <SelectItem value="otro">Otro pariente</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.gradoParentesco && <p className="text-red-500 text-sm mt-1">{errors.gradoParentesco}</p>}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab("causante")}
                    className="border-blue-200 text-blue-800"
                  >
                    <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                    Anterior
                  </Button>
                  <Button onClick={() => nextTab("herederos")} className="bg-blue-600 hover:bg-blue-700 text-white">
                    Siguiente
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="patrimonio" className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-blue-800 font-medium mb-2 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-blue-700" />
                    Detalle del Patrimonio
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="valorTotalBienes" className="text-blue-900 mb-1 block">
                        Valor total de los bienes (CLP)
                      </Label>
                      <Input
                        id="valorTotalBienes"
                        type="number"
                        min="0"
                        value={formData.valorTotalBienes}
                        onChange={(e) => handleInputChange("valorTotalBienes", Number(e.target.value))}
                        className={cn(
                          "border-blue-200 focus:border-blue-400",
                          errors.valorTotalBienes && "border-red-500",
                        )}
                      />
                      {errors.valorTotalBienes && (
                        <p className="text-red-500 text-sm mt-1">{errors.valorTotalBienes}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="deudasHereditario" className="text-blue-900 mb-1 block">
                        Deudas del causante (CLP)
                      </Label>
                      <Input
                        id="deudasHereditario"
                        type="number"
                        min="0"
                        value={formData.deudasHereditario}
                        onChange={(e) => handleInputChange("deudasHereditario", Number(e.target.value))}
                        className="border-blue-200 focus:border-blue-400"
                      />
                    </div>

                    <div>
                      <Label htmlFor="gastosFunerales" className="text-blue-900 mb-1 block">
                        Gastos funerales (CLP)
                      </Label>
                      <Input
                        id="gastosFunerales"
                        type="number"
                        min="0"
                        value={formData.gastosFunerales}
                        onChange={(e) => handleInputChange("gastosFunerales", Number(e.target.value))}
                        className="border-blue-200 focus:border-blue-400"
                      />
                    </div>

                    <div>
                      <Label htmlFor="donacionesEnVida" className="text-blue-900 mb-1 block">
                        Donaciones en vida (CLP)
                      </Label>
                      <Input
                        id="donacionesEnVida"
                        type="number"
                        min="0"
                        value={formData.donacionesEnVida}
                        onChange={(e) => handleInputChange("donacionesEnVida", Number(e.target.value))}
                        className="border-blue-200 focus:border-blue-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab("herederos")}
                    className="border-blue-200 text-blue-800"
                  >
                    <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                    Anterior
                  </Button>
                  <Button onClick={calcularHerencia} className="bg-blue-600 hover:bg-blue-700 text-white">
                    Calcular Herencia
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="resultado">
                {resultado && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-blue-800 font-medium mb-4 flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-blue-700" />
                        Resultado del cálculo
                      </h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white p-3 rounded-md shadow-sm">
                            <p className="text-sm text-gray-500">Masa hereditaria bruta:</p>
                            <p className="text-lg font-semibold">{formatCurrency(resultado.masaHereditariaBruta)}</p>
                          </div>
                          <div className="bg-white p-3 rounded-md shadow-sm">
                            <p className="text-sm text-gray-500">Masa hereditaria líquida:</p>
                            <p className="text-lg font-semibold">{formatCurrency(resultado.masaHereditariaLiquida)}</p>
                          </div>
                          <div className="bg-white p-3 rounded-md shadow-sm">
                            <p className="text-sm text-gray-500">Impuesto estimado:</p>
                            <p className="text-lg font-semibold">{formatCurrency(resultado.impuestoEstimado)}</p>
                          </div>
                          <div className="bg-white p-3 rounded-md shadow-sm">
                            <p className="text-sm text-gray-500">Total a distribuir:</p>
                            <p className="text-lg font-semibold">{formatCurrency(resultado.totalRecibir)}</p>
                          </div>
                        </div>

                        <div className="bg-blue-100 p-4 rounded-md">
                          <h4 className="text-blue-800 font-medium mb-2">Tu herencia estimada</h4>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <p className="text-2xl font-bold text-blue-900">
                                {formatCurrency(resultado.herenciaUsuario)}
                              </p>
                              <p className="text-sm text-blue-700">
                                Porcentaje: {resultado.porcentajeHerencia.toFixed(2)}% del total
                              </p>
                            </div>
                            <Button
                              variant="outline"
                              className="mt-3 md:mt-0 border-blue-300 text-blue-700 hover:bg-blue-50"
                              onClick={() => window.print()}
                            >
                              Imprimir resultados
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-blue-800 font-medium mb-2 flex items-center">
                        <Info className="h-5 w-5 mr-2 text-blue-700" />
                        Aviso Legal
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p>
                          Esta calculadora proporciona una estimación de la distribución de la herencia basada en la
                          información proporcionada y las reglas generales del Código Civil chileno. No tiene en cuenta
                          todos los factores posibles que pueden afectar la distribución real, como circunstancias
                          legales específicas, disputas entre herederos o cambios en el valor de los activos.
                        </p>
                        <p>
                          <strong>Normas aplicables:</strong> Código Civil chileno, Ley 16.271 sobre Impuesto a las
                          Herencias, Asignaciones y Donaciones.
                        </p>
                        <p>
                          <strong>Recomendación:</strong> Para una asesoría personalizada, consulte con un abogado
                          especializado en derecho sucesorio.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="bg-gradient-to-r from-blue-50 to-blue-100 border-t border-blue-100 p-4 text-center">
            <p className="text-sm text-blue-700 w-full">
              © 2025 LegalPO - Calculadora basada en la legislación chilena vigente
            </p>
          </CardFooter>
        </Card>
      </div>
    </ProtectedRoute>
  )
}
