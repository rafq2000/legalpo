"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Phone,
    MapPin,
    Clock,
    Heart,
    Users,
    Home,
    Stethoscope,
    Brain,
    Dumbbell,
    GraduationCap,
    UserCheck,
    Star,
    Shield,
    Award,
    Check,
    MessageCircle,
    ChevronRight,
    ArrowLeft,
} from "lucide-react"
import Link from "next/link"

interface ComunaData {
    nombre: string
    slug: string
    descripcion: string
    poblacion: string
    sectores: string[]
    caracteristicas: string[]
}

interface ComunaPageProps {
    data: ComunaData
}

export default function ComunaPage({ data }: ComunaPageProps) {
    const services = [
        {
            title: "Kinesiología Geriátrica",
            description: `Rehabilitación especializada para adultos mayores en ${data.nombre}`,
            icon: Users,
            features: ["Prevención de caídas", "Mejora de movilidad", "Fortalecimiento muscular"],
        },
        {
            title: "Kinesiología Respiratoria",
            description: "Tratamiento de problemas respiratorios en tu hogar",
            icon: Stethoscope,
            features: ["Recuperación post COVID", "Tratamiento EPOC", "Rehabilitación neumonía"],
        },
        {
            title: "Kinesiología Traumatológica",
            description: "Rehabilitación de lesiones y fracturas a domicilio",
            icon: Dumbbell,
            features: ["Recuperación de fracturas", "Post prótesis", "Lesiones deportivas"],
        },
        {
            title: "Kinesiología Neurológica",
            description: "Tratamiento especializado para condiciones neurológicas",
            icon: Brain,
            features: ["Rehabilitación ACV", "Tratamiento Parkinson", "Esclerosis múltiple"],
        },
    ]

    const faqs = [
        {
            question: `¿Cuánto cuesta una sesión de kinesiología a domicilio en ${data.nombre}?`,
            answer: `El precio de nuestras sesiones de kinesiología a domicilio en ${data.nombre} varía según el tipo de tratamiento. Ofrecemos evaluación inicial gratuita. Contáctanos al +56 9 9967 9593 para una cotización personalizada.`,
        },
        {
            question: `¿En qué sectores de ${data.nombre} atienden?`,
            answer: `Atendemos en toda la comuna de ${data.nombre}, incluyendo: ${data.sectores.join(", ")}. Todos los tratamientos se realizan directamente en tu hogar.`,
        },
        {
            question: `¿Trabajan con Fonasa o Isapre en ${data.nombre}?`,
            answer: "Emitimos boletas que pueden ser reembolsadas por tu Isapre. También aceptamos pacientes Fonasa con modalidad libre elección.",
        },
        {
            question: `¿Cuánto dura una sesión de kinesiología a domicilio en ${data.nombre}?`,
            answer: "Cada sesión tiene una duración de 60 minutos aproximadamente. El tiempo puede variar según las necesidades específicas del paciente.",
        },
    ]

    // Schema.org for this specific comuna page
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: `KineEnCasa - ${data.nombre}`,
        description: data.descripcion,
        url: `https://kineencasa.cl/kinesiologo-a-domicilio-${data.slug}`,
        telephone: "+56999679593",
        address: {
            "@type": "PostalAddress",
            addressLocality: data.nombre,
            addressRegion: "Región Metropolitana",
            addressCountry: "CL",
        },
        areaServed: {
            "@type": "City",
            name: data.nombre,
        },
        parentOrganization: {
            "@type": "Organization",
            name: "KineEnCasa",
            url: "https://kineencasa.cl",
        },
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Schema.org structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* WhatsApp floating button */}
            <div className="fixed bottom-6 right-6 z-50">
                <Button
                    size="lg"
                    className="rounded-full w-16 h-16 bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse hover:animate-none hover:scale-110 border-2 border-emerald-500"
                    onClick={() =>
                        window.open(
                            `https://wa.me/56999679593?text=Hola, me interesa información sobre kinesiología a domicilio en ${data.nombre}`,
                            "_blank",
                        )
                    }
                >
                    <MessageCircle className="h-8 w-8" />
                </Button>
            </div>

            {/* Header */}
            <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-sm border-b border-slate-700">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                                <div className="bg-amber-600 p-2 rounded-xl shadow-lg">
                                    <Home className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold font-serif text-white">KineEnCasa</h1>
                                    <p className="text-sm text-slate-300">Rehabilitación Profesional</p>
                                </div>
                            </Link>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <Link href="/" className="hover:text-amber-400 transition-colors font-medium text-slate-200 flex items-center">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Inicio
                            </Link>
                            <a href="#servicios" className="hover:text-amber-400 transition-colors font-medium text-slate-200">
                                Servicios
                            </a>
                            <a href="#cobertura" className="hover:text-amber-400 transition-colors font-medium text-slate-200">
                                Cobertura
                            </a>
                            <a href="#faq" className="hover:text-amber-400 transition-colors font-medium text-slate-200">
                                Preguntas Frecuentes
                            </a>
                        </nav>
                        <Button
                            variant="secondary"
                            className="font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-slate-900 hover:bg-slate-100 border border-slate-300"
                            onClick={() => window.open("tel:+56999679593")}
                        >
                            <Phone className="h-4 w-4 mr-2" />
                            +56 9 9967 9593
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-5xl mx-auto">
                        {/* Breadcrumb */}
                        <nav className="mb-6 text-sm">
                            <ol className="flex items-center justify-center space-x-2 text-slate-600">
                                <li><Link href="/" className="hover:text-amber-700">Inicio</Link></li>
                                <li><ChevronRight className="h-4 w-4" /></li>
                                <li className="text-slate-900 font-medium">Kinesiólogo a Domicilio en {data.nombre}</li>
                            </ol>
                        </nav>

                        <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
                            <MapPin className="h-4 w-4 mr-2" />
                            {data.nombre} - Sector Oriente Santiago
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-serif leading-tight">
                            Kinesiólogo a Domicilio en{" "}
                            <span className="text-amber-700">{data.nombre}</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed max-w-4xl mx-auto">
                            {data.descripcion}
                        </p>

                        <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto">
                            {data.poblacion} Nuestros kinesiólogos profesionales ofrecen <strong>rehabilitación especializada</strong> directamente en tu hogar con equipamiento de última generación.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                            <Button
                                size="lg"
                                className="text-lg px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-500"
                                onClick={() => window.open(`https://wa.me/56999679593?text=Hola, necesito un kinesiólogo a domicilio en ${data.nombre}`, "_blank")}
                            >
                                <MessageCircle className="h-5 w-5 mr-3" />
                                Agendar en {data.nombre}
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="text-lg px-10 py-6 bg-white hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-slate-300 text-slate-900"
                                onClick={() => window.open("tel:+56999679593")}
                            >
                                <Phone className="h-5 w-5 mr-3" />
                                Llamar Ahora
                            </Button>
                        </div>

                        {/* Trust badges */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                                <div className="bg-slate-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <UserCheck className="h-7 w-7 text-slate-700" />
                                </div>
                                <h3 className="font-bold text-lg mb-1 text-slate-900">Kinesiólogos Certificados</h3>
                                <p className="text-slate-600 font-medium">+5 años de experiencia</p>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                                <div className="bg-slate-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Star className="h-7 w-7 text-amber-500" />
                                </div>
                                <h3 className="font-bold text-lg mb-1 text-slate-900">Evaluación Gratuita</h3>
                                <p className="text-slate-600 font-medium">Primera consulta sin costo</p>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                                <div className="bg-slate-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Clock className="h-7 w-7 text-slate-700" />
                                </div>
                                <h3 className="font-bold text-lg mb-1 text-slate-900">Horarios Flexibles</h3>
                                <p className="text-slate-600 font-medium">Lunes a Domingo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="servicios" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
                            <Stethoscope className="h-4 w-4 mr-2" />
                            Servicios en {data.nombre}
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
                            Kinesiología Profesional a Domicilio
                            <br />
                            <span className="text-amber-700">en {data.nombre}</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Todos nuestros servicios de kinesiología se realizan directamente en tu hogar en {data.nombre}, con equipamiento profesional y atención personalizada.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border border-slate-200 shadow-lg bg-white hover:-translate-y-2">
                                <CardHeader className="pb-4">
                                    <div className="bg-slate-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                                        <service.icon className="h-7 w-7 text-slate-700" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-slate-900 font-serif group-hover:text-amber-700 transition-colors">
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="text-slate-600">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-sm">
                                                <Check className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                                                <span className="text-slate-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                                        onClick={() =>
                                            window.open(
                                                `https://wa.me/56999679593?text=Hola, me interesa ${service.title} a domicilio en ${data.nombre}`,
                                                "_blank",
                                            )
                                        }
                                    >
                                        <MessageCircle className="h-4 w-4 mr-2" />
                                        Consultar
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cobertura Section */}
            <section id="cobertura" className="py-20 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
                            <MapPin className="h-4 w-4 mr-2" />
                            Cobertura en {data.nombre}
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
                            Sectores que Atendemos en{" "}
                            <span className="text-amber-700">{data.nombre}</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Nuestros kinesiólogos atienden a domicilio en todos los sectores de {data.nombre}. Agenda tu sesión hoy.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {data.sectores.map((sector, index) => (
                                    <div key={index} className="flex items-center p-3 bg-slate-50 rounded-lg">
                                        <MapPin className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium text-sm">{sector}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 text-center">
                                <p className="text-slate-600 mb-4">¿Tu sector no está listado? ¡También te atendemos!</p>
                                <Button
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                                    onClick={() =>
                                        window.open(
                                            `https://wa.me/56999679593?text=Hola, ¿atienden kinesiología a domicilio en mi sector de ${data.nombre}?`,
                                            "_blank",
                                        )
                                    }
                                >
                                    <MessageCircle className="h-4 w-4 mr-2" />
                                    Consultar Cobertura
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Características */}
                    <div className="mt-12 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-slate-900 text-center mb-8 font-serif">
                            ¿Por qué elegir KineEnCasa en {data.nombre}?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {data.caracteristicas.map((caracteristica, index) => (
                                <div key={index} className="flex items-start bg-white p-4 rounded-xl shadow-md border border-slate-200">
                                    <div className="bg-emerald-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                                        <Check className="h-4 w-4 text-emerald-600" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{caracteristica}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
                            Preguntas Frecuentes
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
                            Preguntas sobre Kinesiología a Domicilio
                            <br />
                            <span className="text-amber-700">en {data.nombre}</span>
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                                <p className="text-slate-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                        ¿Necesitas un Kinesiólogo a Domicilio en{" "}
                        <span className="text-amber-400">{data.nombre}</span>?
                    </h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Agenda tu evaluación gratuita hoy y comienza tu proceso de rehabilitación con profesionales certificados.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                            size="lg"
                            className="text-lg px-10 py-6 bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl"
                            onClick={() =>
                                window.open(
                                    `https://wa.me/56999679593?text=Hola, quiero agendar una evaluación de kinesiología a domicilio en ${data.nombre}`,
                                    "_blank",
                                )
                            }
                        >
                            <MessageCircle className="h-5 w-5 mr-3" />
                            WhatsApp +56 9 9967 9593
                        </Button>
                        <Button
                            size="lg"
                            variant="secondary"
                            className="text-lg px-10 py-6 bg-white text-slate-900 hover:bg-slate-100 shadow-xl"
                            onClick={() => window.open("tel:+56999679593")}
                        >
                            <Phone className="h-5 w-5 mr-3" />
                            Llamar Ahora
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <Link href="/" className="inline-flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity">
                            <div className="bg-amber-600 p-2 rounded-xl">
                                <Home className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white font-serif">KineEnCasa</span>
                        </Link>
                        <p className="text-slate-400 mb-6">
                            Kinesiología profesional a domicilio en {data.nombre} y todo el sector oriente de Santiago
                        </p>
                        <p className="text-sm text-slate-500">
                            © 2024 KineEnCasa. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
