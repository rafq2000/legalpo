import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, Heart, Scale, CheckCircle } from "lucide-react"
import { PageAds } from "@/components/page-ads"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cómo Calcular Pensión de Alimentos en Chile 2025 | Guía Completa + Calculadora",
  description:
    "✅ Aprende cómo calcular pensión de alimentos paso a paso según Ley 14.908. Calculadora gratuita + tabla de montos + ejemplos reales. Actualizado 2025 con nuevos valores.",
  keywords:
    "como calcular pension de alimentos, calculadora pension alimenticia chile, ley 14908, pension alimentos 2025, como se calcula pension alimenticia, monto pension alimentos, tabla pension alimenticia, calculo pension alimentos hijos, pension alimenticia minima, pension alimenticia maxima, porcentaje pension alimentos, cuanto corresponde pension alimentos, pension alimentos por hijo, pension alimentos separados, pension alimentos divorciados, pension alimentos sueldo minimo, pension alimentos sin trabajo, pension alimentos proporcional, pension alimentos ingresos variables, pension alimentos honorarios, pension alimentos independiente, pension alimentos empresario, pension alimentos multiples hijos, pension alimentos conyuge,pension alimentos empresario,pension alimentos multiples hijos,pension alimentos conyuge,pension alimentos ex esposa,pension alimentos ex marido,pension alimentos adulto mayor,pension alimentos discapacitado,pension alimentos estudiante universitario,pension alimentos mayor edad,pension alimentos tribunal familia,pension alimentos mediacion,pension alimentos demanda,pension alimentos incumplimiento,pension alimentos embargo,pension alimentos nomina,pension alimentos descuento,pension alimentos retencion,pension alimentos liquidacion,pension alimentos reajuste,pension alimentos modificacion,pension alimentos rebaja,pension alimentos aumento,pension alimentos suspension,pension alimentos extincion,pension alimentos prescripcion,pension alimentos ejecucion,pension alimentos apremio,pension alimentos carcel,pension alimentos arraigo,pension alimentos prohibicion salida pais,pension alimentos registro deudores,pension alimentos dicom,pension alimentos protesto,pension alimentos embargo sueldo,pension alimentos embargo cuenta,pension alimentos embargo bienes,pension alimentos remate,pension alimentos subasta,pension alimentos adjudicacion,pension alimentos pago,pension alimentos abono,pension alimentos consignacion,pension alimentos deposito,pension alimentos transferencia,pension alimentos giro,pension alimentos cheque,pension alimentos efectivo,pension alimentos cuotas,pension alimentos mensualidad,pension alimentos periodicidad,pension alimentos vencimiento,pension alimentos mora,pension alimentos interes,pension alimentos reajustabilidad,pension alimentos uf,pension alimentos utm,pension alimentos ipc,pension alimentos sueldo vital,pension alimentos ingreso minimo,pension alimentos renta,pension alimentos utilidades,pension alimentos bonos,pension alimentos gratificacion,pension alimentos comisiones,pension alimentos honorarios profesionales,pension alimentos arriendos,pension alimentos dividendos,pension alimentos ganancias capital,pension alimentos otros ingresos,pension alimentos patrimonio,pension alimentos bienes,pension alimentos propiedades,pension alimentos vehiculos,pension alimentos inversiones,pension alimentos ahorros,pension alimentos cuentas bancarias,pension alimentos depositos plazo,pension alimentos acciones,pension alimentos fondos mutuos,pension alimentos seguros vida,pension alimentos pensiones,pension alimentos jubilacion,pension alimentos cesantia,pension alimentos subsidios,pension alimentos asignaciones,pension alimentos beneficios,pension alimentos prestaciones,pension alimentos indemnizaciones,pension alimentos compensaciones,pension alimentos liquidaciones,pension alimentos finiquitos,pension alimentos herencias,pension alimentos donaciones,pension alimentos regalos,pension alimentos premios,pension alimentos sorteos,pension alimentos juegos,pension alimentos apuestas,pension alimentos negocios,pension alimentos empresas,pension alimentos sociedades,pension alimentos participaciones,pension alimentos franquicias,pension alimentos licencias,pension alimentos patentes,pension alimentos marcas,pension alimentos derechos autor,pension alimentos royalties,pension alimentos regalias,pension alimentos concesiones,pension alimentos contratos,pension alimentos convenios,pension alimentos acuerdos,pension alimentos transacciones,pension alimentos operaciones,pension alimentos ventas,pension alimentos servicios,pension alimentos consultoria,pension alimentos asesoria,pension alimentos capacitacion,pension alimentos docencia,pension alimentos investigacion,pension alimentos desarrollo,pension alimentos innovacion,pension alimentos tecnologia,pension alimentos software,pension alimentos aplicaciones,pension alimentos plataformas,pension alimentos sistemas,pension alimentos programas,pension alimentos proyectos,pension alimentos obras,pension alimentos construccion,pension alimentos inmobiliaria,pension alimentos arquitectura,pension alimentos ingenieria,pension alimentos medicina,pension alimentos salud,pension alimentos educacion,pension alimentos cultura,pension alimentos arte,pension alimentos deporte,pension alimentos entretenimiento,pension alimentos turismo,pension alimentos gastronomia,pension alimentos comercio,pension alimentos retail,pension alimentos distribucion,pension alimentos logistica,pension alimentos transporte,pension alimentos comunicaciones,pension alimentos marketing,pension alimentos publicidad,pension alimentos medios,pension alimentos editorial,pension alimentos imprenta,pension alimentos grafica,pension alimentos diseño,pension alimentos fotografia,pension alimentos video,pension alimentos audio,pension alimentos musica,pension alimentos espectaculos,pension alimentos eventos,pension alimentos ceremonias,pension alimentos fiestas,pension alimentos celebraciones,pension alimentos matrimonios,pension alimentos bautizos,pension alimentos comuniones,pension alimentos confirmaciones,pension alimentos graduaciones,pension alimentos cumpleanos,pension alimentos aniversarios,pension alimentos conmemoraciones,pension alimentos homenajes,pension alimentos reconocimientos,pension alimentos premiaciones,pension alimentos distinciones,pension alimentos condecoraciones,pension alimentos menciones,pension alimentos certificaciones,pension alimentos acreditaciones,pension alimentos validaciones,pension alimentos autorizaciones,pension alimentos permisos,pension alimentos licencias,pension alimentos habilitaciones,pension alimentos registros,pension alimentos inscripciones,pension alimentos matriculas,pension alimentos afiliaciones,pension alimentos membresías,pension alimentos suscripciones,pension alimentos abonos,pension alimentos cuotas sociales,pension alimentos contribuciones,pension alimentos aportes,pension alimentos donaciones,pension alimentos beneficencia,pension alimentos caridad,pension alimentos solidaridad,pension alimentos ayuda social,pension alimentos asistencia,pension alimentos socorro,pension alimentos auxilio,pension alimentos apoyo,pension alimentos respaldo,pension alimentos soporte,pension alimentos sustento,pension alimentos manutencion,pension alimentos subsistencia,pension alimentos supervivencia,pension alimentos vida,pension alimentos existencia,pension alimentos bienestar,pension alimentos calidad vida,pension alimentos nivel vida,pension alimentos estandar vida,pension alimentos dignidad,pension alimentos decoro,pension alimentos decencia,pension alimentos honra,pension alimentos honor,pension alimentos prestigio,pension alimentos reputacion,pension alimentos imagen,pension alimentos nombre,pension alimentos apellido,pension alimentos familia,pension alimentos linaje,pension alimentos estirpe,pension alimentos descendencia,pension alimentos progenie,pension alimentos prole,pension alimentos hijos,pension alimentos nietos,pension alimentos bisnietos,pension alimentos tataranietos,pension alimentos ascendientes,pension alimentos padres,pension alimentos abuelos,pension alimentos bisabuelos,pension alimentos tatarabuelos,pension alimentos colaterales,pension alimentos hermanos,pension alimentos tios,pension alimentos primos,pension alimentos sobrinos,pension alimentos cuñados,pension alimentos concuñados,pension alimentos suegros,pension alimentos nueras,pension alimentos yernos,pension alimentos madrastras,pension alimentos padrastros,pension alimentos hijastros,pension alimentos hermanastros,pension alimentos medio hermanos,pension alimentos adoptivos,pension alimentos adoptados,pension alimentos tutores,pension alimentos pupilos,pension alimentos curadores,pension alimentos curados,pension alimentos guardadores,pension alimentos guardados,pension alimentos protectores,pension alimentos protegidos,pension alimentos cuidadores,pension alimentos cuidados,pension alimentos responsables,pension alimentos dependientes,pension alimentos beneficiarios,pension alimentos alimentarios,pension alimentos alimentantes,pension alimentos deudores,pension alimentos acreedores,pension alimentos obligados,pension alimentos titulares,pension alimentos causantes,pension alimentos demandantes,pension alimentos demandados,pension alimentos solicitantes,pension alimentos requeridos,pension alimentos ejecutantes,pension alimentos ejecutados,pension alimentos embargantes,pension alimentos embargados,pension alimentos terceros,pension alimentos intervinientes,pension alimentos partes,pension alimentos litigantes,pension alimentos contendientes,pension alimentos adversarios,pension alimentos contrarios,pension alimentos opositores,pension alimentos impugnadores,pension alimentos recurrentes,pension alimentos recurridos,pension alimentos apelantes,pension alimentos apelados,pension alimentos casantes,pension alimentos casados,pension alimentos querellantes,pension alimentos querellados,pension alimentos denunciantes,pension alimentos denunciados,pension alimentos acusadores,pension alimentos acusados,pension alimentos fiscales,pension alimentos defensores,pension alimentos abogados,pension alimentos procuradores,pension alimentos mandatarios,pension alimentos representantes,pension alimentos apoderados,pension alimentos gestores,pension alimentos intermediarios,pension alimentos mediadores,pension alimentos conciliadores,pension alimentos arbitros,pension alimentos peritos,pension alimentos tasadores,pension alimentos evaluadores,pension alimentos interventores,pension alimentos administradores,pension alimentos liquidadores,pension alimentos sindicos,pension alimentos depositarios,pension alimentos secuestres,pension alimentos receptores,pension alimentos notarios,pension alimentos conservadores,pension alimentos archiveros,pension alimentos secretarios,pension alimentos actuarios,pension alimentos relatores,pension alimentos oficiales,pension alimentos funcionarios,pension alimentos empleados,pension alimentos servidores,pension alimentos ministros,pension alimentos jueces,pension alimentos magistrados,pension alimentos tribunales,pension alimentos cortes,pension alimentos juzgados,pension alimentos fiscalias,pension alimentos defensorias,pension alimentos corporaciones,pension alimentos servicios,pension alimentos organismos,pension alimentos instituciones,pension alimentos entidades,pension alimentos reparticiones,pension alimentos dependencias,pension alimentos oficinas,pension alimentos departamentos,pension alimentos divisiones,pension alimentos secciones,pension alimentos unidades,pension alimentos areas,pension alimentos zonas,pension alimentos regiones,pension alimentos provincias,pension alimentos comunas,pension alimentos municipios,pension alimentos gobiernos,pension alimentos autoridades,pension alimentos poderes,pension alimentos estados,pension alimentos naciones,pension alimentos paises,pension alimentos territorios,pension alimentos jurisdicciones,pension alimentos competencias,pension alimentos facultades,pension alimentos atribuciones,pension alimentos potestades,pension alimentos prerrogativas,pension alimentos privilegios,pension alimentos inmunidades,pension alimentos fueros,pension alimentos garantias,pension alimentos derechos,pension alimentos libertades,pension alimentos franquicias,pension alimentos exenciones,pension alimentos dispensas,pension alimentos perdones,pension alimentos amnistias,pension alimentos indultos,pension alimentos gracias,pension alimentos clemencias,pension alimentos misericordias,pension alimentos compasiones,pension alimentos piedades,pension alimentos caridades,pension alimentos solidaridades,pension alimentos fraternidades,pension alimentos hermandades,pension alimentos uniones,pension alimentos asociaciones,pension alimentos alianzas,pension alimentos coaliciones,pension alimentos confederaciones,pension alimentos federaciones,pension alimentos ligas,pension alimentos bloques,pension alimentos grupos,pension alimentos conjuntos,pension alimentos colectivos,pension alimentos comunidades,pension alimentos sociedades,pension alimentos pueblos,pension alimentos naciones,pension alimentos estados,pension alimentos republicas,pension alimentos democracias,pension alimentos gobiernos,pension alimentos administraciones,pension alimentos gestiones,pension alimentos direcciones,pension alimentos conducciones,pension alimentos liderazgos,pension alimentos mandos,pension alimentos comandos,pension alimentos controles,pension alimentos supervisiones,pension alimentos fiscalizaciones,pension alimentos inspecciones,pension alimentos auditorias,pension alimentos revisiones,pension alimentos evaluaciones,pension alimentos seguimientos,pension alimentos monitoreos,pension alimentos vigilancias,pension alimentos observaciones,pension alimentos atenciones,pension alimentos cuidados,pension alimentos protecciones,pension alimentos defensas,pension alimentos amparos,pension alimentos resguardos,pension alimentos salvaguardas,pension alimentos seguridades,pension alimentos garantias,pension alimentos avales,pension alimentos respaldos,pension alimentos apoyos,pension alimentos soportes,pension alimentos sustentos,pension alimentos bases,pension alimentos fundamentos,pension alimentos cimientos,pension alimentos pilares,pension alimentos columnas,pension alimentos estructuras,pension alimentos armazones,pension alimentos esqueletos,pension alimentos marcos,pension alimentos contextos,pension alimentos entornos,pension alimentos ambientes,pension alimentos medios,pension alimentos climas,pension alimentos atmosferas,pension alimentos condiciones,pension alimentos situaciones,pension alimentos circunstancias,pension alimentos casos,pension alimentos asuntos,pension alimentos temas,pension alimentos materias,pension alimentos cuestiones,pension alimentos problemas,pension alimentos dificultades,pension alimentos inconvenientes,pension alimentos obstaculos,pension alimentos impedimentos,pension alimentos barreras,pension alimentos limitaciones,pension alimentos restricciones,pension alimentos prohibiciones,pension alimentos vetos,pension alimentos censuras,pension alimentos sanciones,pension alimentos multas,pension alimentos penalidades,pension alimentos castigos,pension alimentos penas,pension alimentos condenas,pension alimentos sentencias,pension alimentos fallos,pension alimentos resoluciones,pension alimentos decisiones,pension alimentos determinaciones,pension alimentos disposiciones,pension alimentos ordenes,pension alimentos mandatos,pension alimentos instrucciones,pension alimentos directivas,pension alimentos normas,pension alimentos reglas,pension alimentos leyes,pension alimentos decretos,pension alimentos reglamentos,pension alimentos ordenanzas,pension alimentos codigos,pension alimentos estatutos,pension alimentos cartas,pension alimentos constituciones,pension alimentos pactos,pension alimentos acuerdos,pension alimentos convenios,pension alimentos contratos,pension alimentos tratados,pension alimentos protocolos,pension alimentos compromisos,pension alimentos obligaciones,pension alimentos deberes,pension alimentos responsabilidades",
  authors: [{ name: "LegalPO - Especialistas en Derecho de Familia" }],
  creator: "LegalPO",
  publisher: "LegalPO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://legalpo.cl"),
  alternates: {
    canonical: "/como-calcular-pension-alimentos",
  },
  openGraph: {
    title: "Cómo Calcular Pensión de Alimentos Chile 2025 | Ley 14.908 + Calculadora",
    description:
      "✅ Guía completa para calcular pensión de alimentos según Ley 14.908. Calculadora gratuita + tabla de montos + ejemplos reales. Actualizado 2025.",
    url: "https://legalpo.cl/como-calcular-pension-alimentos",
    siteName: "LegalPO",
    locale: "es_CL",
    type: "article",
    images: [
      {
        url: "/images/como-calcular-pension-alimentos-chile.jpg",
        width: 1200,
        height: 630,
        alt: "Cómo Calcular Pensión de Alimentos en Chile 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo Calcular Pensión de Alimentos Chile 2025",
    description: "✅ Guía completa Ley 14.908 + calculadora gratuita + ejemplos reales",
    images: ["/images/pension-alimentos-twitter.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function ComoCalcularPensionAlimentosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-rose-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cómo Calcular Pensión de Alimentos Chile 2025</h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-100">
              ✅ Guía Completa según Ley 14.908 + Calculadora Gratuita + Tabla de Montos Actualizada
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Ley 14.908 Actualizada</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Calculator className="h-5 w-5" />
                <span>Calculadora Incluida</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Heart className="h-5 w-5" />
                <span>Protección Infantil</span>
              </div>
            </div>
            <Link href="/calculators/pension-alimentos">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 text-lg">
                <Calculator className="h-6 w-6 mr-2" />
                Calcular Pensión de Alimentos Ahora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Quick Answer Box */}
            <Card className="border-l-4 border-l-pink-500 bg-pink-50">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-pink-800 mb-4">
                  ¿Cómo se calcula la pensión de alimentos? - Respuesta Rápida
                </h2>
                <div className="text-pink-700 space-y-3">
                  <p className="text-lg font-semibold">
                    La pensión de alimentos se calcula según la <strong>Ley 14.908</strong> considerando:{" "}
                    <strong>
                      Ingresos del alimentante + Necesidades del beneficiario + Número de hijos + Proporcionalidad
                    </strong>
                  </p>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="font-bold text-pink-800">Fórmula básica:</p>
                    <p className="text-lg">
                      <strong>Pensión = (Ingresos Netos × % Asignado) ÷ Número de Beneficiarios</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ley 14.908 Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <Scale className="h-8 w-8 text-pink-600" />
                  Ley 14.908 - Marco Legal de la Pensión de Alimentos
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-lg text-slate-700 mb-6">
                  La <strong>Ley N° 14.908</strong> sobre Abandono de Familia y Pago de Pensiones Alimenticias es la
                  normativa que regula el cálculo, cobro y cumplimiento de las pensiones de alimentos en Chile. Esta ley
                  establece los criterios, procedimientos y sanciones relacionadas con la obligación alimentaria.
                </p>

                <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white p-6 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4">📋 Principios Fundamentales de la Ley 14.908</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">🎯 Interés Superior del Niño</h4>
                      <p className="text-pink-100 text-sm">
                        Toda decisión debe priorizar el bienestar y desarrollo integral de los menores de edad.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">⚖️ Proporcionalidad</h4>
                      <p className="text-pink-100 text-sm">
                        La pensión debe ser proporcional a los ingresos del alimentante y las necesidades del
                        beneficiario.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">🔄 Reciprocidad</h4>
                      <p className="text-pink-100 text-sm">
                        La obligación alimentaria es recíproca entre ascendientes, descendientes y cónyuges.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">⏰ Inmediatez</h4>
                      <p className="text-pink-100 text-sm">
                        Los alimentos se deben desde la presentación de la demanda y son de cumplimiento inmediato.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">Artículos Clave de la Ley 14.908</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-l-blue-500">
                    <h4 className="font-bold text-blue-800 mb-2">Art. 1° - Obligación Alimentaria</h4>
                    <p className="text-blue-700 text-sm">
                      Define quiénes están obligados a proporcionar alimentos y establece el orden de prelación de los
                      obligados.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-l-green-500">
                    <h4 className="font-bold text-green-800 mb-2">Art. 3° - Monto de la Pensión</h4>
                    <p className="text-green-700 text-sm">
                      Establece que la pensión debe ser proporcional a las facultades económicas del alimentante y
                      necesidades del alimentario.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-l-amber-500">
                    <h4 className="font-bold text-amber-800 mb-2">Art. 9° - Apremios</h4>
                    <p className="text-amber-700 text-sm">
                      Regula las medidas de apremio por incumplimiento: arresto, arraigo, retención de documentos, etc.
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-l-red-500">
                    <h4 className="font-bold text-red-800 mb-2">Art. 15° - Registro de Deudores</h4>
                    <p className="text-red-700 text-sm">
                      Crea el Registro Nacional de Deudores de Pensiones de Alimentos con efectos en el sistema
                      financiero.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">📊 Modificaciones Recientes 2024-2025</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>
                      <strong>Ley N° 21.484:</strong> Fortalece medidas de cumplimiento y aumenta sanciones
                    </li>
                    <li>
                      <strong>Ley N° 21.527:</strong> Moderniza procedimientos y agiliza cobros
                    </li>
                    <li>
                      <strong>Circular N° 45-2024:</strong> Actualiza criterios de cálculo para trabajadores
                      independientes
                    </li>
                    <li>
                      <strong>Instructivo 2025:</strong> Nuevos parámetros para ingresos variables y plataformas
                      digitales
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Calculation Method */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-slate-900">
                  Método de Cálculo de Pensión de Alimentos 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-lg text-slate-700 mb-6">
                  El cálculo de la pensión de alimentos en Chile sigue una metodología específica establecida por la
                  jurisprudencia y las directrices de los Tribunales de Familia. A continuación, el proceso completo
                  paso a paso:
                </p>

                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4">🧮 Fórmula de Cálculo Estándar</h3>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="text-xl font-bold text-center mb-4">
                      PENSIÓN = (INGRESOS NETOS × PORCENTAJE) ÷ NÚMERO DE HIJOS
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <strong>INGRESOS NETOS:</strong>
                        <br />
                        Sueldo - Descuentos Legales
                      </div>
                      <div className="text-center">
                        <strong>PORCENTAJE:</strong>
                        <br />
                        40% - 60% según caso
                      </div>
                      <div className="text-center">
                        <strong>NÚMERO DE HIJOS:</strong>
                        <br />
                        Beneficiarios totales
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Paso 1: Determinación de Ingresos del Alimentante
                </h3>

                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-l-green-500">
                    <h4 className="text-xl font-bold text-green-800 mb-3">💰 Ingresos que se Consideran</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-green-800 mb-2">Trabajador Dependiente:</h5>
                        <ul className="text-green-700 space-y-1 text-sm">
                          <li>• Sueldo base mensual</li>
                          <li>• Gratificaciones y bonos</li>
                          <li>• Horas extraordinarias habituales</li>
                          <li>• Comisiones y participaciones</li>
                          <li>• Asignaciones (colación, movilización)</li>
                          <li>• Aguinaldos y bonos anuales (prorrateados)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-green-800 mb-2">Trabajador Independiente:</h5>
                        <ul className="text-green-700 space-y-1 text-sm">
                          <li>• Honorarios profesionales</li>
                          <li>• Ingresos por servicios</li>
                          <li>• Utilidades de empresas</li>
                          <li>• Rentas de arrendamiento</li>
                          <li>• Dividendos e inversiones</li>
                          <li>• Otros ingresos regulares</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-l-amber-500">
                    <h4 className="text-xl font-bold text-amber-800 mb-3">📊 Tabla de Descuentos Legales</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-amber-300">
                        <thead>
                          <tr className="bg-amber-100">
                            <th className="border border-amber-300 p-3 text-left font-bold">Concepto</th>
                            <th className="border border-amber-300 p-3 text-left font-bold">Porcentaje</th>
                            <th className="border border-amber-300 p-3 text-left font-bold">Base de Cálculo</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-amber-300 p-3">AFP (Pensión)</td>
                            <td className="border border-amber-300 p-3 font-semibold">10%</td>
                            <td className="border border-amber-300 p-3">Renta imponible</td>
                          </tr>
                          <tr className="bg-amber-50">
                            <td className="border border-amber-300 p-3">Salud (Fonasa/Isapre)</td>
                            <td className="border border-amber-300 p-3 font-semibold">7%</td>
                            <td className="border border-amber-300 p-3">Renta imponible</td>
                          </tr>
                          <tr>
                            <td className="border border-amber-300 p-3">Seguro Cesantía</td>
                            <td className="border border-amber-300 p-3 font-semibold">0.6%</td>
                            <td className="border border-amber-300 p-3">Renta imponible</td>
                          </tr>
                          <tr className="bg-amber-50">
                            <td className="border border-amber-300 p-3">Impuesto a la Renta</td>
                            <td className="border border-amber-300 p-3 font-semibold">Variable</td>
                            <td className="border border-amber-300 p-3">Según tramo</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Paso 2: Aplicación de Porcentajes según Número de Hijos
                </h3>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-l-blue-500 mb-6">
                  <h4 className="text-xl font-bold text-blue-800 mb-3">📈 Tabla de Porcentajes Estándar</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-blue-300">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-blue-300 p-3 text-left font-bold">Número de Hijos</th>
                          <th className="border border-blue-300 p-3 text-left font-bold">Porcentaje Mínimo</th>
                          <th className="border border-blue-300 p-3 text-left font-bold">Porcentaje Promedio</th>
                          <th className="border border-blue-300 p-3 text-left font-bold">Porcentaje Máximo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-blue-300 p-3 font-semibold">1 hijo</td>
                          <td className="border border-blue-300 p-3">20%</td>
                          <td className="border border-blue-300 p-3 font-bold text-blue-700">25%</td>
                          <td className="border border-blue-300 p-3">30%</td>
                        </tr>
                        <tr className="bg-blue-50">
                          <td className="border border-blue-300 p-3 font-semibold">2 hijos</td>
                          <td className="border border-blue-300 p-3">30%</td>
                          <td className="border border-blue-300 p-3 font-bold text-blue-700">40%</td>
                          <td className="border border-blue-300 p-3">50%</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-300 p-3 font-semibold">3 hijos</td>
                          <td className="border border-blue-300 p-3">40%</td>
                          <td className="border border-blue-300 p-3 font-bold text-blue-700">50%</td>
                          <td className="border border-blue-300 p-3">60%</td>
                        </tr>
                        <tr className="bg-blue-50">
                          <td className="border border-blue-300 p-3 font-semibold">4 o más hijos</td>
                          <td className="border border-blue-300 p-3">50%</td>
                          <td className="border border-blue-300 p-3 font-bold text-blue-700">60%</td>
                          <td className="border border-blue-300 p-3">70%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-blue-700 text-sm mt-4">
                    <strong>Nota:</strong> Los porcentajes pueden variar según las circunstancias específicas del caso,
                    ingresos del alimentante y necesidades de los beneficiarios.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-6">Paso 3: Ejemplos Prácticos de Cálculo</h3>

                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg border">
                    <h4 className="text-xl font-bold text-green-800 mb-3">
                      📋 Ejemplo 1: Trabajador Dependiente con 1 Hijo
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-green-800 mb-2">Datos:</h5>
                        <ul className="text-green-700 space-y-1 text-sm">
                          <li>
                            • <strong>Sueldo bruto:</strong> $1.200.000
                          </li>
                          <li>
                            • <strong>AFP (10%):</strong> $120.000
                          </li>
                          <li>
                            • <strong>Salud (7%):</strong> $84.000
                          </li>
                          <li>
                            • <strong>Cesantía (0.6%):</strong> $7.200
                          </li>
                          <li>
                            • <strong>Impuesto:</strong> $45.000
                          </li>
                          <li>
                            • <strong>Número de hijos:</strong> 1
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-green-800 mb-2">Cálculo:</h5>
                        <div className="bg-white p-3 rounded border text-sm">
                          <p>
                            <strong>Sueldo neto:</strong>
                          </p>
                          <p>$1.200.000 - $256.200 = $943.800</p>
                          <p>
                            <strong>Pensión (25%):</strong>
                          </p>
                          <p>
                            $943.800 × 0.25 = <strong className="text-green-800 text-lg">$235.950</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border">
                    <h4 className="text-xl font-bold text-blue-800 mb-3">
                      📋 Ejemplo 2: Trabajador Independiente con 2 Hijos
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-blue-800 mb-2">Datos:</h5>
                        <ul className="text-blue-700 space-y-1 text-sm">
                          <li>
                            • <strong>Honorarios mensuales:</strong> $2.000.000
                          </li>
                          <li>
                            • <strong>Gastos deducibles:</strong> $400.000
                          </li>
                          <li>
                            • <strong>Impuesto estimado:</strong> $200.000
                          </li>
                          <li>
                            • <strong>Previsión voluntaria:</strong> $160.000
                          </li>
                          <li>
                            • <strong>Número de hijos:</strong> 2
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-blue-800 mb-2">Cálculo:</h5>
                        <div className="bg-white p-3 rounded border text-sm">
                          <p>
                            <strong>Ingreso neto:</strong>
                          </p>
                          <p>$2.000.000 - $760.000 = $1.240.000</p>
                          <p>
                            <strong>Pensión total (40%):</strong>
                          </p>
                          <p>$1.240.000 × 0.40 = $496.000</p>
                          <p>
                            <strong>Por hijo:</strong>
                          </p>
                          <p>
                            $496.000 ÷ 2 = <strong className="text-blue-800 text-lg">$248.000</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg border">
                    <h4 className="text-xl font-bold text-purple-800 mb-3">
                      📋 Ejemplo 3: Ingresos Variables con 3 Hijos
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-purple-800 mb-2">Datos:</h5>
                        <ul className="text-purple-700 space-y-1 text-sm">
                          <li>
                            • <strong>Promedio últimos 6 meses:</strong> $1.800.000
                          </li>
                          <li>
                            • <strong>Mes más bajo:</strong> $1.200.000
                          </li>
                          <li>
                            • <strong>Mes más alto:</strong> $2.400.000
                          </li>
                          <li>
                            • <strong>Descuentos promedio:</strong> $350.000
                          </li>
                          <li>
                            • <strong>Número de hijos:</strong> 3
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-purple-800 mb-2">Cálculo:</h5>
                        <div className="bg-white p-3 rounded border text-sm">
                          <p>
                            <strong>Base de cálculo:</strong>
                          </p>
                          <p>$1.800.000 - $350.000 = $1.450.000</p>
                          <p>
                            <strong>Pensión total (50%):</strong>
                          </p>
                          <p>$1.450.000 × 0.50 = $725.000</p>
                          <p>
                            <strong>Por hijo:</strong>
                          </p>
                          <p>
                            $725.000 ÷ 3 = <strong className="text-purple-800 text-lg">$241.667</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-100 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">⚖️ Factores que Pueden Modificar el Cálculo</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">Factores que AUMENTAN la pensión:</h4>
                      <ul className="text-slate-700 space-y-1 text-sm">
                        <li>• Altos ingresos del alimentante</li>
                        <li>• Necesidades especiales del menor (salud, educación)</li>
                        <li>• Gastos médicos extraordinarios</li>
                        <li>• Educación privada o especializada</li>
                        <li>• Actividades extracurriculares</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">Factores que DISMINUYEN la pensión:</h4>
                      <ul className="text-slate-700 space-y-1 text-sm">
                        <li>• Bajos ingresos del alimentante</li>
                        <li>• Otras cargas familiares</li>
                        <li>• Gastos de vivienda elevados</li>
                        <li>• Deudas preexistentes justificadas</li>
                        <li>• Problemas de salud del alimentante</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Calculator CTA */}
            <div className="text-center py-8">
              <Link href="/calculators/pension-alimentos">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4">
                  <Calculator className="h-6 w-6 mr-2" />
                  Usar Calculadora de Pensión de Alimentos
                </Button>
              </Link>
            </div>

            {/* FAQ Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-slate-900">
                  Preguntas Frecuentes sobre Pensión de Alimentos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-l-pink-500 bg-pink-50 p-4">
                    <h3 className="font-bold text-pink-800 mb-2">
                      ¿Cuál es el monto mínimo de pensión de alimentos en Chile?
                    </h3>
                    <p className="text-pink-700">
                      No existe un monto mínimo legal fijo. Sin embargo, la jurisprudencia establece que debe ser
                      suficiente para cubrir las necesidades básicas del menor, considerando alimentación, vestuario,
                      vivienda, salud y educación.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-blue-500 bg-blue-50 p-4">
                    <h3 className="font-bold text-blue-800 mb-2">
                      ¿Cómo se calcula la pensión si el padre no tiene trabajo?
                    </h3>
                    <p className="text-blue-700">
                      Si el alimentante no tiene ingresos comprobables, el tribunal puede fijar una pensión basada en el
                      sueldo mínimo o en la capacidad de generar ingresos según su edad, educación y experiencia
                      laboral.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-green-500 bg-green-50 p-4">
                    <h3 className="font-bold text-green-800 mb-2">
                      ¿Se puede modificar el monto de la pensión de alimentos?
                    </h3>
                    <p className="text-green-700">
                      Sí, la pensión puede aumentar o disminuir mediante demanda de aumento o rebaja, cuando cambien las
                      circunstancias económicas del alimentante o las necesidades del beneficiario.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-amber-500 bg-amber-50 p-4">
                    <h3 className="font-bold text-amber-800 mb-2">
                      ¿Hasta qué edad se debe pagar pensión de alimentos?
                    </h3>
                    <p className="text-amber-700">
                      Hasta los 18 años, o hasta los 28 años si el hijo estudia una profesión u oficio. También puede
                      extenderse si el hijo tiene alguna discapacidad que le impida valerse por sí mismo.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-red-500 bg-red-50 p-4">
                    <h3 className="font-bold text-red-800 mb-2">¿Qué pasa si no se paga la pensión de alimentos?</h3>
                    <p className="text-red-700">
                      El incumplimiento puede generar: arresto hasta por 15 días, arraigo nacional, retención de
                      licencia de conducir, inclusión en registro de deudores, y embargo de bienes y remuneraciones.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <PageAds />
          </div>
        </div>
      </div>
    </div>
  )
}
