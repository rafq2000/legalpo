import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Clock, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageAds } from "@/components/page-ads"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Derechos del deudor en Chile: Protégete de cobranzas abusivas | LegalPO",
  description:
    "Guía completa sobre los derechos de los deudores en Chile. Conoce las leyes que te protegen contra prácticas abusivas de cobranza y cómo defenderte legalmente.",
  robots: "index, follow",
  alternates: {
    canonical: "https://legalpo.cl/derechos-deudor",
  },
}

export default function DerechosDeudorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6 flex items-center">
            <Button variant="outline" size="sm" asChild className="mr-4">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
            <nav className="flex">
              <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Inicio
                  </Link>
                </li>
                <li>/</li>
                <li className="font-medium text-foreground">Derechos del deudor</li>
              </ol>
            </nav>
          </div>

          <PageAds />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                  Derechos del deudor en Chile: Protégete de cobranzas abusivas
                </h1>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>Actualizado: Mayo 2025</span>
                  <span className="mx-2">•</span>
                  <FileText className="mr-1 h-4 w-4" />
                  <span>Tiempo de lectura: 9 min</span>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <p className="text-lg font-medium text-blue-900">
                    Tener deudas no significa perder tus derechos. En Chile, existen leyes que protegen a los deudores contra prácticas abusivas de cobranza. Conoce tus derechos y cómo hacerlos valer.
                  </p>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2>¿Qué derechos tienen los deudores en Chile?</h2>

                <p>
                  Aunque tengas deudas pendientes, sigues teniendo derechos que están protegidos por la legislación chilena. Las principales leyes que protegen a los deudores son la Ley del Consumidor (Ley 19.496), el Código Civil, la Ley de Reorganización y Liquidación de Activos (Ley 20.720), y diversas normativas de la Comisión para el Mercado Financiero (CMF).
                </p>

                <p>
                  Estos derechos buscan equilibrar la relación entre acreedores y deudores, evitando que las personas endeudadas sean sometidas a prácticas abusivas o humillantes durante los procesos de cobranza.
                </p>

                <h3>Principios fundamentales de protección al deudor</h3>

                <p>
                  La legislación chilena se basa en varios principios fundamentales para proteger a los deudores:
                </p>

                <ul>
                  <li>
                    <strong>Dignidad de la persona:</strong> Las gestiones de cobranza no pueden atentar contra la dignidad, privacidad o reputación del deudor.
                  </li>
                  <li>
                    <strong>Información clara y veraz:</strong> El deudor tiene derecho a recibir información completa, clara y oportuna sobre sus deudas.
                  </li>
                  <li>
                    <strong>Proporcionalidad:</strong> Las medidas de cobro deben ser proporcionales a la deuda y no pueden ser excesivas o desproporcionadas.
                  </li>
                  <li>
                    <strong>Prescripción:</strong> Las deudas prescriben después de cierto tiempo si no hay acciones legales o reconocimiento por parte del deudor.
                  </li>
                  <li>
                    <strong>Debido proceso:</strong> Cualquier acción legal contra un deudor debe seguir los procedimientos establecidos por la ley.
                  </li>
                </ul>
              </div>

              <Tabs defaultValue="cobranza" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="cobranza" className="text-sm">
                    Cobranza extrajudicial
                  </TabsTrigger>
                  <TabsTrigger value="judicial" className="text-sm">
                    Cobranza judicial
                  </TabsTrigger>
                  <TabsTrigger value="renegociacion" className="text-sm">
                    Renegociación y quiebra
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="cobranza" className="pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center">
                        <ShieldCheck className="h-5 w-5 mr-2 text-green-500" />
                        Derechos en la cobranza extrajudicial
                      </CardTitle>
                      <CardDescription>Protección contra prácticas abusivas de cobranza</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <p>
                          La cobranza extrajudicial es aquella que se realiza fuera de los tribunales, generalmente a través de llamadas telefónicas, cartas, correos electrónicos o visitas. La Ley del Consumidor (Art. 37) establece claras limitaciones a estas prácticas:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4\
