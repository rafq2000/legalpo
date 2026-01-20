import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, CheckCircle, Crown } from "lucide-react"
import { PageAds } from "@/components/page-ads"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cómo Calcular Herencia en Chile 2025 | Guía Completa + Calculadora + Impuestos",
  description:
    "✅ Aprende cómo calcular herencia paso a paso en Chile 2025. Calculadora gratuita + sistema de cuartas + impuestos + ejemplos reales. Código Civil actualizado.",
  keywords:
    "como calcular herencia, calculadora herencia chile, impuesto herencia, legitima rigorosa, cuarta de mejoras, cuarta libre disposicion, sucesion intestada, testamento, herederos forzosos, asignaciones forzosas, codigo civil chile, derecho sucesorio, particion herencia, tasacion bienes, avaluo herencia, liquidacion herencia, inventario bienes, masa hereditaria, acervo bruto, acervo liquido, acervo partible, bajas generales, deducciones herencia, gastos funerarios, deudas hereditarias, legados, donaciones, inoficiosas, reforma testamento, desheredacion, indignidad sucesoria, renuncia herencia, aceptacion herencia, beneficio inventario, cesion derechos hereditarios, comunidad hereditaria, curador herencia yacente, albacea, partidor, liquidador sociedad conyugal, gananciales, recompensas, credito participacion, compensacion economica, pension alimenticia viuda, porcion conyugal, derecho usufructo, derecho habitacion, bien familia, hogar, casa habitacion, menaje, ajuar, vehiculos, cuentas bancarias, inversiones, acciones, bonos, depositos plazo, seguros vida, indemnizaciones, jubilaciones, pensiones, rentas vitalicias, derechos autor, patentes, marcas, concesiones, empresas, sociedades, participaciones, inmuebles, propiedades, terrenos, casas, departamentos, oficinas, locales comerciales, bodegas, sitios, parcelas, fundos, predios agricolas, forestales, mineros, aguas, servidumbres, usufructos, habitacion, uso, censo, hipoteca, prenda, cauciones, garantias, fianzas, avales, seguros, polizas, contratos, convenios, acuerdos, transacciones, juicios, demandas, creditos, deudas, obligaciones, prestamos, mutuos, comodatos, arrendamientos, sociedades, comunidades, cooperativas, corporaciones, fundaciones, asociaciones, sindicatos, clubes, organizaciones, instituciones, establecimientos, negocios, comercios, industrias, servicios, profesiones, oficios, actividades, operaciones, giros, rubros, especialidades, competencias, habilidades, conocimientos, experiencias, contactos, relaciones, vinculos, redes, carteras, clientes, proveedores, distribuidores, representantes, agentes, corredores, intermediarios, gestores, administradores, mandatarios, apoderados, representantes legales, abogados, contadores, ingenieros, arquitectos, medicos, dentistas, veterinarios, profesores, consultores, asesores, auditores, peritos, tasadores, evaluadores, inspectores, supervisores, fiscalizadores, controladores, revisores, verificadores, certificadores, validadores, acreditadores, autorizadores, habilitadores, licenciadores, registradores, inscriptores, matriculadores, empadronadores, censadores, catastrados, inventariadores, clasificadores, ordenadores, organizadores, sistematizadores, estructuradores, planificadores, programadores, proyectistas, diseñadores, creadores, innovadores, desarrolladores, investigadores, cientificos, tecnicos, especialistas, expertos, profesionales, academicos, universitarios, estudiantes, egresados, titulados, graduados, diplomados, certificados, acreditados, habilitados, autorizados, licenciados, colegiados, agremiados, sindicalizados, federados, confederados, asociados, afiliados, miembros, socios, participes, accionistas, inversionistas, capitalistas, empresarios, comerciantes, industriales, agricultores, ganaderos, mineros, pescadores, forestales, constructores, transportistas, comunicadores, educadores, formadores, capacitadores, entrenadores, instructores, orientadores, guias, consejeros, asesores, consultores, terapeutas, sanadores, curadores, cuidadores, enfermeros, auxiliares, tecnicos, operarios, trabajadores, empleados, funcionarios, servidores, ministros, directores, gerentes, jefes, supervisores, coordinadores, encargados, responsables, titulares, propietarios, dueños, poseedores, tenedores, portadores, beneficiarios, usufructuarios, usuarios, arrendatarios, comodatarios, depositarios, mandatarios, comisionistas, agentes, representantes, gestores, administradores, albaceas, ejecutores, liquidadores, partidores, curadores, tutores, guardadores, protectores, defensores, amparadores, patrocinadores, auspiciadores, financiadores, inversionistas, prestamistas, mutuantes, comodantes, arrendadores, cedentes, donantes, testadores, causantes, sucesores, herederos, legatarios, asignatarios, beneficiarios, favorecidos, agraciados, premiados, reconocidos, distinguidos, condecorados, homenajeados, celebrados, festejados, recordados, memorizados, inmortalizados, perpetuados, conservados, preservados, mantenidos, sostenidos, continuados, proseguidos, seguidos, perseverados, persistidos, insistidos, reiterados, repetidos, reproducidos, replicados, copiados, imitados, emulados, simulados, representados, simbolizados, significados, denotados, indicados, señalados, marcados, destacados, subrayados, enfatizados, acentuados, resaltados, realzados, valorados, apreciados, estimados, considerados, juzgados, opinados, creidos, pensados, supuestos, presumidos, asumidos, dados, tomados, recibidos, entregados, otorgados, concedidos, conferidos, adjudicados, asignados, destinados, reservados, apartados, separados, divididos, partidos, repartidos, distribuidos, compartidos, participados, colaborados, cooperados, contribuidos, aportados, suministrados, proveidos, facilitados, proporcionados, brindados, ofrecidos, presentados, expuestos, mostrados, enseñados, revelados, descubiertos, encontrados, hallados, localizados, ubicados, situados, colocados, puestos, instalados, establecidos, fundados, creados, formados, constituidos, integrados, compuestos, conformados, estructurados, organizados, ordenados, arreglados, dispuestos, preparados, alistados, acondicionados, habilitados, adaptados, ajustados, modificados, cambiados, alterados, transformados, convertidos, mudados, variados, diversificados, ampliados, extendidos, expandidos, aumentados, incrementados, elevados, subidos, crecidos, desarrollados, evolucionados, progresados, avanzados, mejorados, perfeccionados, optimizados, maximizados, potenciados, fortalecidos, consolidados, afianzados, reforzados, intensificados, profundizados, ahondados, penetrados, ingresados, entrados, accedidos, llegados, arribados, alcanzados, conseguidos, logrados, obtenidos, adquiridos, ganados, conquistados, triunfados, vencidos, superados, sobrepasados, excedidos, rebasados, traspasados, cruzados, atravesados, recorridos, transitados, circulados, movidos, desplazados, trasladados, mudados, emigrados, inmigrados, migrados, viajados, partidos, salidos, marchados, idos, retirados, alejados, distanciados, separados, divorciados, anulados, terminados, finalizados, concluidos, acabados, agotados, extinguidos, desaparecidos, esfumados, perdidos, extraviados, olvidados, recordados, memorizados, aprendidos, estudiados, investigados, indagados, averiguados, consultados, preguntados, cuestionados, interrogados, inquiridos, solicitados, pedidos, requeridos, exigidos, demandados, reclamados, protestados, objetados, impugnados, recurridos, apelados, revisados, corregidos, enmendados, reparados, arreglados, solucionados, resueltos, decididos, determinados, establecidos, fijados, definidos, precisados, especificados, detallados, explicados, aclarados, esclarecidos, dilucidados, interpretados, entendidos, comprendidos, captados, asimilados, absorbidos, incorporados, incluidos, agregados, añadidos, sumados, adicionados, complementados, completados, finalizados, terminados, concluidos, cerrados, sellados, firmados, suscritos, rubricados, validados, ratificados, confirmados, corroborados, verificados, chequeados, controlados, supervisados, fiscalizados, inspeccionados, auditados, evaluados, calificados, puntuados, medidos, cuantificados, calculados, computados, contados, numerados, enumerados, listados, catalogados, indexados, archivados, guardados, almacenados, depositados, conservados, preservados, mantenidos, cuidados, protegidos, defendidos, resguardados, salvaguardados, blindados, asegurados, garantizados, avalados, respaldados, apoyados, sostenidos, sustentados, fundamentados, basados, justificados, motivados, explicados, razonados, argumentados, debatidos, discutidos, dialogados, conversados, hablados, comunicados, transmitidos, enviados, mandados, remitidos, dirigidos, encaminados, orientados, guiados, conducidos, liderados, comandados, dirigidos, administrados, gestionados, manejados, operados, funcionados, trabajados, laborados, desempeñados, ejercidos, practicados, realizados, ejecutados, cumplidos, satisfechos, llenados, completados, acabados, terminados, finalizados, concluidos, cerrados, clausurados, suspendidos, interrumpidos, parados, detenidos, frenados, cesados",
  authors: [{ name: "LegalPO - Especialistas en Derecho Sucesorio" }],
  creator: "LegalPO",
  publisher: "LegalPO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://legalpo.cl"),
  alternates: {
    canonical: "/como-calcular-herencia",
  },
  openGraph: {
    title: "Cómo Calcular Herencia en Chile 2025 | Guía Completa + Calculadora",
    description:
      "✅ Aprende cómo calcular herencia paso a paso. Sistema de cuartas + impuestos + ejemplos reales. Código Civil actualizado 2025.",
    url: "https://legalpo.cl/como-calcular-herencia",
    siteName: "LegalPO",
    locale: "es_CL",
    type: "article",
    images: [
      {
        url: "/images/como-calcular-herencia-chile.jpg",
        width: 1200,
        height: 630,
        alt: "Cómo Calcular Herencia en Chile 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo Calcular Herencia en Chile 2025",
    description: "✅ Guía completa + calculadora + sistema de cuartas + impuestos",
    images: ["/images/herencia-twitter.jpg"],
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

export default function ComoCalcularHerenciaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cómo Calcular Herencia en Chile 2025</h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100">
              ✅ Guía Completa + Sistema de Cuartas + Impuestos + Calculadora Gratuita
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Código Civil 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Calculator className="h-5 w-5" />
                <span>Calculadora Incluida</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Crown className="h-5 w-5" />
                <span>Sistema de Cuartas</span>
              </div>
            </div>
            <Link href="/calculators/herencia">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 text-lg">
                <Calculator className="h-6 w-6 mr-2" />
                Calcular Mi Herencia Ahora
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
            <Card className="border-l-4 border-l-amber-500 bg-amber-50">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">
                  ¿Cómo se calcula la herencia en Chile? - Respuesta Rápida
                </h2>
                <div className="text-amber-700 space-y-3">
                  <p className="text-lg font-semibold">
                    La herencia se calcula mediante el <strong>Sistema de Cuartas</strong>:{" "}
                    <strong>
                      Legítima Rigorosa (50%) + Cuarta de Mejoras (25%) + Cuarta de Libre Disposición (25%)
                    </strong>
                  </p>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="font-bold text-amber-800">Fórmula básica:</p>
                    <p className="text-lg">
                      <strong>Herencia = Patrimonio Total - Deudas - Gastos - Impuestos</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sistema de Cuartas Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <Crown className="h-8 w-8 text-amber-600" />
                  Sistema de Cuartas - Código Civil Chileno
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-lg text-slate-700 mb-6">
                  El <strong>Sistema de Cuartas</strong> es el mecanismo establecido por el Código Civil chileno para
                  distribuir la herencia. Este sistema divide el patrimonio hereditario en tres partes específicas, cada
                  una con reglas y beneficiarios determinados por la ley.
                </p>

                <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-6 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4">👑 Las Tres Cuartas de la Herencia</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/20 p-4 rounded-lg text-center">
                      <h4 className="font-bold text-xl mb-2">50%</h4>
                      <h5 className="font-bold mb-2">Legítima Rigorosa</h5>
                      <p className="text-amber-100 text-sm">Para herederos forzosos (hijos, cónyuge, ascendientes)</p>
                    </div>
                    <div className="bg-white/20 p-4 rounded-lg text-center">
                      <h4 className="font-bold text-xl mb-2">25%</h4>
                      <h5 className="font-bold mb-2">Cuarta de Mejoras</h5>
                      <p className="text-amber-100 text-sm">Para mejorar a herederos forzosos o cónyuge</p>
                    </div>
                    <div className="bg-white/20 p-4 rounded-lg text-center">
                      <h4 className="font-bold text-xl mb-2">25%</h4>
                      <h5 className="font-bold mb-2">Libre Disposición</h5>
                      <p className="text-amber-100 text-sm">Para cualquier persona (legados, donaciones)</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">Artículos Fundamentales del Código Civil</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-l-blue-500">
                    <h4 className="font-bold text-blue-800 mb-2">Art. 1184 - Legítima</h4>
                    <p className="text-blue-700 text-sm">
                      "Legítima es aquella cuota de los bienes de un difunto que la ley asigna a ciertas personas
                      llamadas legitimarios."
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-l-green-500">
                    <h4 className="font-bold text-green-800 mb-2">Art. 1185 - Legitimarios</h4>
                    <p className="text-green-700 text-sm">
                      "Son legitimarios: los hijos, personalmente o representados por su descendencia; los ascendientes;
                      el cónyuge sobreviviente."
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-l-amber-500">
                    <h4 className="font-bold text-amber-800 mb-2">Art. 1193 - Cuarta de Mejoras</h4>
                    <p className="text-amber-700 text-sm">
                      "La cuarta de mejoras puede destinarse a mejorar a cualquiera de los legitimarios o al cónyuge
                      sobreviviente."
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-l-purple-500">
                    <h4 className="font-bold text-purple-800 mb-2">Art. 1195 - Libre Disposición</h4>
                    <p className="text-purple-700 text-sm">
                      "La cuarta de libre disposición puede emplearse a favor de cualquier persona, sea o no
                      legitimario."
                    </p>
                  </div>
                </div>

                <div className="bg-slate-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">📊 Orden de Sucesión en Chile</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        1
                      </span>
                      <span>
                        <strong>Primer Orden:</strong> Hijos y cónyuge sobreviviente
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        2
                      </span>
                      <span>
                        <strong>Segundo Orden:</strong> Ascendientes y cónyuge sobreviviente
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        3
                      </span>
                      <span>
                        <strong>Tercer Orden:</strong> Hermanos
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        4
                      </span>
                      <span>
                        <strong>Cuarto Orden:</strong> Colaterales hasta 6° grado
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        5
                      </span>
                      <span>
                        <strong>Quinto Orden:</strong> Fisco de Chile
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Calculation Process */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-slate-900">
                  Proceso de Cálculo de Herencia Paso a Paso
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-lg text-slate-700 mb-6">
                  El cálculo de una herencia en Chile requiere seguir un proceso ordenado y sistemático. A continuación,
                  te explicamos cada paso con ejemplos prácticos y fórmulas exactas.
                </p>

                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4">🧮 Fórmula General de Cálculo</h3>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="text-xl font-bold text-center mb-4">
                      HERENCIA LÍQUIDA = ACTIVOS - PASIVOS - GASTOS - IMPUESTOS
                    </p>
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div className="text-center">
                        <strong>ACTIVOS:</strong>
                        <br />
                        Bienes + Derechos
                      </div>
                      <div className="text-center">
                        <strong>PASIVOS:</strong>
                        <br />
                        Deudas + Obligaciones
                      </div>
                      <div className="text-center">
                        <strong>GASTOS:</strong>
                        <br />
                        Funeral + Administración
                      </div>
                      <div className="text-center">
                        <strong>IMPUESTOS:</strong>
                        <br />
                        Herencia + Donaciones
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-6">Paso 1: Inventario y Tasación de Bienes</h3>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-l-green-500 mb-6">
                  <h4 className="text-xl font-bold text-green-800 mb-3">📋 Bienes que Integran la Herencia</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-green-800 mb-2">Bienes Inmuebles:</h5>
                      <ul className="text-green-700 space-y-1 text-sm">
                        <li>• Casas y departamentos</li>
                        <li>• Terrenos y sitios</li>
                        <li>• Oficinas y locales comerciales</li>
                        <li>• Parcelas y fundos</li>
                        <li>• Derechos de agua</li>
                        <li>• Concesiones mineras</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-green-800 mb-2">Bienes Muebles:</h5>
                      <ul className="text-green-700 space-y-1 text-sm">
                        <li>• Vehículos y maquinarias</li>
                        <li>• Cuentas bancarias</li>
                        <li>• Inversiones y acciones</li>
                        <li>• Seguros de vida</li>
                        <li>• Joyas y obras de arte</li>
                        <li>• Derechos de autor</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border mt-4">
                    <h5 className="font-bold text-green-800 mb-2">Ejemplo de Inventario:</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-green-100">
                            <th className="text-left p-2">Bien</th>
                            <th className="text-left p-2">Descripción</th>
                            <th className="text-right p-2">Valor Tasado</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-2">Casa habitación</td>
                            <td className="p-2">Las Condes, 180m²</td>
                            <td className="p-2 text-right">$180.000.000</td>
                          </tr>
                          <tr className="bg-green-50">
                            <td className="p-2">Departamento</td>
                            <td className="p-2">Providencia, 80m²</td>
                            <td className="p-2 text-right">$120.000.000</td>
                          </tr>
                          <tr>
                            <td className="p-2">Cuenta corriente</td>
                            <td className="p-2">Banco Chile</td>
                            <td className="p-2 text-right">$15.000.000</td>
                          </tr>
                          <tr className="bg-green-50">
                            <td className="p-2">Vehículo</td>
                            <td className="p-2">Toyota Corolla 2020</td>
                            <td className="p-2 text-right">$12.000.000</td>
                          </tr>
                          <tr className="font-bold bg-green-100">
                            <td className="p-2" colSpan={2}>
                              TOTAL ACTIVOS
                            </td>
                            <td className="p-2 text-right">$327.000.000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-6">Paso 2: Determinación de Pasivos y Gastos</h3>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-l-red-500 mb-6">
                  <h4 className="text-xl font-bold text-red-800 mb-3">💸 Deudas y Gastos a Descontar</h4>

                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h5 className="font-bold text-red-800 mb-2">Deudas del Causante:</h5>
                      <ul className="text-red-700 space-y-1 text-sm">
                        <li>• Créditos hipotecarios</li>
                        <li>• Préstamos bancarios</li>
                        <li>• Tarjetas de crédito</li>
                        <li>• Deudas comerciales</li>
                        <li>• Impuestos adeudados</li>
                        <li>• Cotizaciones previsionales</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-red-800 mb-2">Gastos de la Sucesión:</h5>
                      <ul className="text-red-700 space-y-1 text-sm">
                        <li>• Gastos funerarios</li>
                        <li>• Honorarios del partidor</li>
                        <li>• Tasaciones y peritajes</li>
                        <li>• Gastos notariales</li>
                        <li>• Publicaciones en diarios</li>
                        <li>• Conservación de bienes</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-bold text-red-800 mb-2">Ejemplo de Pasivos:</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-red-100">
                            <th className="text-left p-2">Concepto</th>
                            <th className="text-left p-2">Detalle</th>
                            <th className="text-right p-2">Monto</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-2">Crédito hipotecario</td>
                            <td className="p-2">Saldo casa Las Condes</td>
                            <td className="p-2 text-right">$45.000.000</td>
                          </tr>
                          <tr className="bg-red-50">
                            <td className="p-2">Préstamo consumo</td>
                            <td className="p-2">Banco Estado</td>
                            <td className="p-2 text-right">$8.000.000</td>
                          </tr>
                          <tr>
                            <td className="p-2">Gastos funerarios</td>
                            <td className="p-2">Servicios completos</td>
                            <td className="p-2 text-right">$2.500.000</td>
                          </tr>
                          <tr className="bg-red-50">
                            <td className="p-2">Honorarios partidor</td>
                            <td className="p-2">3% sobre activos</td>
                            <td className="p-2 text-right">$9.810.000</td>
                          </tr>
                          <tr className="font-bold bg-red-100">
                            <td className="p-2" colSpan={2}>
                              TOTAL PASIVOS
                            </td>
                            <td className="p-2 text-right">$65.310.000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-6">Paso 3: Cálculo del Impuesto a las Herencias</h3>

                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-l-purple-500 mb-6">
                  <h4 className="text-xl font-bold text-purple-800 mb-3">🏛️ Tabla de Impuesto a las Herencias 2025</h4>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-full border-collapse border border-purple-300">
                      <thead>
                        <tr className="bg-purple-100">
                          <th className="border border-purple-300 p-3 text-left font-bold">Tramo (UTA)</th>
                          <th className="border border-purple-300 p-3 text-left font-bold">Desde</th>
                          <th className="border border-purple-300 p-3 text-left font-bold">Hasta</th>
                          <th className="border border-purple-300 p-3 text-left font-bold">Tasa</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-purple-300 p-3">Exento</td>
                          <td className="border border-purple-300 p-3">$0</td>
                          <td className="border border-purple-300 p-3">600 UTA</td>
                          <td className="border border-purple-300 p-3 font-semibold">0%</td>
                        </tr>
                        <tr className="bg-purple-50">
                          <td className="border border-purple-300 p-3">Tramo 1</td>
                          <td className="border border-purple-300 p-3">600 UTA</td>
                          <td className="border border-purple-300 p-3">2.000 UTA</td>
                          <td className="border border-purple-300 p-3 font-semibold">1%</td>
                        </tr>
                        <tr>
                          <td className="border border-purple-300 p-3">Tramo 2</td>
                          <td className="border border-purple-300 p-3">2.000 UTA</td>
                          <td className="border border-purple-300 p-3">5.000 UTA</td>
                          <td className="border border-purple-300 p-3 font-semibold">2.5%</td>
                        </tr>
                        <tr className="bg-purple-50">
                          <td className="border border-purple-300 p-3">Tramo 3</td>
                          <td className="border border-purple-300 p-3">5.000 UTA</td>
                          <td className="border border-purple-300 p-3">10.000 UTA</td>
                          <td className="border border-purple-300 p-3 font-semibold">5%</td>
                        </tr>
                        <tr>
                          <td className="border border-purple-300 p-3">Tramo 4</td>
                          <td className="border border-purple-300 p-3">10.000 UTA</td>
                          <td className="border border-purple-300 p-3">25.000 UTA</td>
                          <td className="border border-purple-300 p-3 font-semibold">10%</td>
                        </tr>
                        <tr className="bg-purple-50">
                          <td className="border border-purple-300 p-3">Tramo 5</td>
                          <td className="border border-purple-300 p-3">25.000 UTA</td>
                          <td className="border border-purple-300 p-3">En adelante</td>
                          <td className="border border-purple-300 p-3 font-semibold">25%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-purple-700 text-sm mb-2">
                      <strong>UTA 2025:</strong> $65.967 (actualizada anualmente por el SII)
                    </p>
                    <p className="text-purple-700 text-sm">
                      <strong>Tramo exento:</strong> Hasta $39.580.200 (600 UTA) no paga impuesto
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Paso 4: Distribución según Sistema de Cuartas
                </h3>

                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-l-amber-500 mb-6">
                  <h4 className="text-xl font-bold text-amber-800 mb-3">👑 Ejemplo Completo de Distribución</h4>

                  <div className="bg-white p-4 rounded-lg border mb-4">
                    <h5 className="font-bold text-amber-800 mb-2">Datos del Caso:</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <ul className="text-amber-700 space-y-1">
                          <li>
                            • <strong>Causante:</strong> Juan Pérez
                          </li>
                          <li>
                            • <strong>Cónyuge:</strong> María González
                          </li>
                          <li>
                            • <strong>Hijos:</strong> 2 (Pedro y Ana)
                          </li>
                          <li>
                            • <strong>Régimen:</strong> Sociedad conyugal
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="text-amber-700 space-y-1">
                          <li>
                            • <strong>Activos:</strong> $327.000.000
                          </li>
                          <li>
                            • <strong>Pasivos:</strong> $65.310.000
                          </li>
                          <li>
                            • <strong>Impuesto:</strong> $13.084.500
                          </li>
                          <li>
                            • <strong>Herencia líquida:</strong> $248.605.500
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <h5 className="font-bold text-blue-800 mb-2">1. Legítima Rigorosa (50% = $124.302.750)</h5>
                      <div className="text-blue-700 text-sm space-y-1">
                        <p>
                          • <strong>Cónyuge:</strong> $41.434.250 (1/3)
                        </p>
                        <p>
                          • <strong>Pedro (hijo):</strong> $41.434.250 (1/3)
                        </p>
                        <p>
                          • <strong>Ana (hija):</strong> $41.434.250 (1/3)
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-100 p-4 rounded-lg">
                      <h5 className="font-bold text-green-800 mb-2">2. Cuarta de Mejoras (25% = $62.151.375)</h5>
                      <div className="text-green-700 text-sm">
                        <p>
                          • <strong>Distribución:</strong> Según voluntad del testador o por partes iguales
                        </p>
                        <p>
                          • <strong>Ejemplo:</strong> $31.075.688 para cada hijo
                        </p>
                      </div>
                    </div>

                    <div className="bg-purple-100 p-4 rounded-lg">
                      <h5 className="font-bold text-purple-800 mb-2">
                        3. Cuarta de Libre Disposición (25% = $62.151.375)
                      </h5>
                      <div className="text-purple-700 text-sm">
                        <p>
                          • <strong>Beneficiario:</strong> Según testamento o intestado
                        </p>
                        <p>
                          • <strong>Ejemplo:</strong> Legado a institución benéfica
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-100 p-4 rounded-lg mt-4">
                    <h5 className="font-bold text-slate-800 mb-2">Resumen Final por Heredero:</h5>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <p className="font-bold">María (Cónyuge)</p>
                        <p className="text-lg font-bold text-blue-600">$41.434.250</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold">Pedro (Hijo)</p>
                        <p className="text-lg font-bold text-green-600">$72.509.938</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold">Ana (Hija)</p>
                        <p className="text-lg font-bold text-green-600">$72.509.938</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">📝 Documentos Necesarios para el Cálculo</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">Documentos del Causante:</h4>
                      <ul className="text-slate-700 space-y-1 text-sm">
                        <li>• Certificado de defunción</li>
                        <li>• Testamento (si existe)</li>
                        <li>• Certificado de matrimonio</li>
                        <li>• Certificados de nacimiento de hijos</li>
                        <li>• Escrituras de propiedades</li>
                        <li>• Estados bancarios</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">Documentos de Tasación:</h4>
                      <ul className="text-slate-700 space-y-1 text-sm">
                        <li>• Tasaciones de inmuebles</li>
                        <li>• Avalúos de vehículos</li>
                        <li>• Valorización de empresas</li>
                        <li>• Certificados de deudas</li>
                        <li>• Liquidaciones de impuestos</li>
                        <li>• Inventario notarial</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Calculator CTA */}
            <div className="text-center py-8">
              <Link href="/calculators/herencia">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4">
                  <Calculator className="h-6 w-6 mr-2" />
                  Usar Calculadora de Herencia
                </Button>
              </Link>
            </div>

            {/* FAQ Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-slate-900">
                  Preguntas Frecuentes sobre Cálculo de Herencia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-l-amber-500 bg-amber-50 p-4">
                    <h3 className="font-bold text-amber-800 mb-2">
                      ¿Cómo se divide una herencia entre hijos y cónyuge?
                    </h3>
                    <p className="text-amber-700">
                      En la legítima rigorosa, el cónyuge recibe 1/3 y los hijos se reparten los otros 2/3 por partes
                      iguales. Además, pueden recibir parte de la cuarta de mejoras según el testamento.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-blue-500 bg-blue-50 p-4">
                    <h3 className="font-bold text-blue-800 mb-2">¿Qué pasa si no hay testamento?</h3>
                    <p className="text-blue-700">
                      Se aplica la sucesión intestada. La cuarta de mejoras se distribuye igual que la legítima
                      rigorosa, y la cuarta de libre disposición también se reparte entre los herederos legales.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-green-500 bg-green-50 p-4">
                    <h3 className="font-bold text-green-800 mb-2">¿Cuándo se paga el impuesto a las herencias?</h3>
                    <p className="text-green-700">
                      El impuesto debe pagarse dentro de dos años desde el fallecimiento. Si se paga dentro del primer
                      año, tiene un descuento del 10%.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-red-500 bg-red-50 p-4">
                    <h3 className="font-bold text-red-800 mb-2">¿Se puede renunciar a una herencia?</h3>
                    <p className="text-red-700">
                      Sí, se puede renunciar mediante escritura pública. La renuncia debe ser total (no se puede
                      renunciar solo a las deudas) y debe hacerse antes de aceptar la herencia.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-purple-500 bg-purple-50 p-4">
                    <h3 className="font-bold text-purple-800 mb-2">
                      ¿Cómo afecta el régimen matrimonial a la herencia?
                    </h3>
                    <p className="text-purple-700">
                      En sociedad conyugal, primero se liquida la sociedad (50% para cada cónyuge), luego se calcula la
                      herencia sobre la mitad del causante. En separación de bienes, se hereda todo el patrimonio
                      personal.
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
