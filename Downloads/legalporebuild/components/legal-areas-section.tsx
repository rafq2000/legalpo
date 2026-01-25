"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    Briefcase,
    Heart,
    Home,
    CreditCard,
    Car,
    Landmark,
    Building,
    Shield,
} from "lucide-react"
import { useRouter } from "next/navigation"

export function LegalAreasSection() {
    const router = useRouter()

    const handleCategoryClick = (category: string) => {
        // Navigate to the chat with the category as a query param
        // The ChatInterface will handle reading the param and setting the input
        const url = new URL(window.location.href)
        url.searchParams.set("topic", category)
        url.hash = "chat-interface"
        router.push(url.toString(), { scroll: false })

        // Manual scroll backup if hash doesn't trigger
        const chatSection = document.getElementById("chat-interface")
        if (chatSection) {
            chatSection.scrollIntoView({ behavior: "smooth", block: "center" })
        }
    }

    const legalAreas = [
        {
            icon: <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />,
            title: "Derecho Laboral",
            description: "Finiquitos, despidos, contratos",
            color: "bg-blue-500",
            category: "laboral",
            keywords: ["finiquito", "despido", "contrato trabajo", "indemnización", "vacaciones"],
        },
        {
            icon: <Heart className="h-5 w-5 sm:h-6 sm:w-6" />,
            title: "Derecho de Familia",
            description: "Divorcios, pensión alimenticia, tuición",
            color: "bg-pink-500",
            category: "familia",
            keywords: ["divorcio", "pensión alimentos", "tuición", "adopción", "matrimonio"],
        },
        {
            icon: <Home className="h-5 w-5 sm:h-6 sm:w-6" />,
            title: "Derecho Inmobiliario",
            description: "Arriendos, compraventas, hipotecas",
            color: "bg-green-500",
            category: "arriendo",
            keywords: ["arriendo", "compraventa", "hipoteca", "propiedad", "desalojo"],
        },
        {
            icon: <CreditCard className="h-5 w-5 sm:h-6 sm:w-6" />,
            title: "Deudas y DICOM",
            description: "Renegociación, prescripción, cobranza",
            color: "bg-red-500",
            category: "deudas",
            keywords: ["deudas", "dicom", "cobranza", "prescripción", "renegociación"],
        },
        {
            icon: <Car className="h-5 w-5 sm:h-6 sm:w-6" />,
            title: "Accidentes de Tránsito",
            description: "Seguros, indemnizaciones, SOAP",
            color: "bg-orange-500",
            category: "accidentes",
            keywords: ["accidente tránsito", "seguro", "soap", "indemnización", "lesiones"],
        },
        {
            icon: <Landmark className="h-5 w-5 sm:h-6 sm:w-6" />,
            title: "Herencias y Sucesiones",
            description: "Testamentos, legítimas, partición",
            color: "bg-purple-500",
            category: "herencias",
            keywords: ["herencia", "testamento", "sucesión", "legítima", "partición"],
        },
        {
            icon: <Building className="h-5 w-5 sm:h-6 sm:w-6" />,
            title: "Derecho Comercial",
            description: "Sociedades, contratos, quiebras",
            color: "bg-indigo-500",
            category: "comercial",
            keywords: ["sociedad", "contrato comercial", "quiebra", "empresa", "sii"],
        },
        {
            icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
            title: "Derecho del Consumidor",
            description: "SERNAC, garantías, publicidad",
            color: "bg-teal-500",
            category: "consumidor",
            keywords: ["sernac", "garantía", "publicidad engañosa", "consumidor", "devolución"],
        },
    ]

    return (
        <section className="py-12 sm:py-16 md:py-20 border-b border-white/5">
            <div className="container px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
                        Consultas Legales Gratis por Área de Derecho
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
                        Obtén <strong className="text-white">asesoría legal gratis</strong> especializada en cualquier área
                        del derecho chileno con nuestro{" "}
                        <strong className="text-emerald-400">abogado virtual gratis con IA</strong>
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {legalAreas.map((area, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white/5 backdrop-blur-xl border-white/10 text-white overflow-hidden hover:bg-white/10 cursor-pointer"
                            onClick={() => handleCategoryClick(area.category)}
                        >
                            <CardHeader className="relative overflow-hidden p-4 sm:p-6">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                <div
                                    className={`w-10 h-10 sm:w-12 sm:h-12 ${area.color} rounded-lg flex items-center justify-center mb-3 sm:mb-4 relative z-10`}
                                >
                                    <div className="text-white">{area.icon}</div>
                                </div>
                                <CardTitle className="text-base sm:text-lg text-white relative z-10">{area.title}</CardTitle>
                                <p className="text-xs sm:text-sm text-slate-400 relative z-10">{area.description}</p>
                            </CardHeader>
                            <CardContent className="pt-0 p-4 sm:p-6">
                                <Button
                                    variant="ghost"
                                    className="w-full text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 justify-between group-hover:translate-x-1 transition-transform duration-300 text-xs sm:text-sm"
                                >
                                    Consulta legal gratis
                                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
