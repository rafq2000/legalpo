import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Globe, Zap, Monitor, Users, GraduationCap, ArrowRight, Star } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
    title: "Los 5 Mejores Cursos Online para Niños en 2026 (Latam y España) | InnovaKids",
    description:
        "¿Buscas cursos online para niños? Comparativa de las actividades extracurriculares más demandadas en España y Latinoamérica. Descubre por qué la IA es la habilidad #1.",
    keywords: [
        "cursos online para niños",
        "clases virtuales para niños",
        "actividades extracurriculares online",
        "mejores cursos para niños 2026",
        "programación para niños",
        "cursos para niños españa",
        "cursos para niños mexico",
        "cursos para niños colombia",
        "cursos para niños chile",
        "cursos para niños argentina",
    ],
    openGraph: {
        title: "Cursos Online para Niños: El Futuro es la Tecnología",
        description: "Comparativa de las mejores actividades para niños en 2026. ¿Inglés, Música o Inteligencia Artificial?",
        images: ["/kids-creating-ai-projects.jpg"],
    },
}

export default function CursosOnlineNinosPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Curso de Inteligencia Artificial para Niños y Adolescentes",
        description: "Aprende a crear apps, videojuegos y arte con IA. Curso online en vivo para niños de 8 a 14 años.",
        provider: {
            "@type": "Organization",
            name: "InnovaKids",
            sameAs: "https://www.innovakidslatam.com"
        },
        offers: {
            "@type": "Offer",
            category: "Premium",
            price: "197",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock"
        },
        educationalLevel: "Beginner",
        audience: {
            "@type": "EducationalAudience",
            educationalRole: "student",
            audienceType: "Children"
        },
        hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "online",
            courseWorkload: "PT15H"
        }
    }

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Cursos Online para Niños: ¿Cuál es la Mejor Inversión en 2026?",
        image: "https://www.innovakidslatam.com/kids-creating-ai-projects.jpg",
        author: {
            "@type": "Organization",
            name: "InnovaKids Team"
        },
        publisher: {
            "@type": "Organization",
            name: "InnovaKids LATAM",
            logo: {
                "@type": "ImageObject",
                url: "https://www.innovakidslatam.com/logo-innovakids-new.png"
            }
        },
        datePublished: "2024-01-20",
        dateModified: new Date().toISOString()
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <Navigation />
            <WhatsAppButton />

            <main className="min-h-screen bg-[#0a1628]">
                {/* HERO SECTION */}
                <section className="relative pt-32 pb-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-[#0a1628] to-[#0a1628]" />
                    {/* Background blobs for visual appeal */}
                    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 animate-fade-in-up">
                            <Globe className="w-4 h-4 text-cyan-400" />
                            <span className="text-gray-200 font-medium text-sm">Disponible en España y toda Latinoamérica</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 font-heading">
                            Cursos Online para Niños:
                            <br />
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                ¿Cuál es la Mejor Inversión en 2026?
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                            En un mundo digital, las actividades extracurriculares están cambiando.
                            Analizamos las opciones más populares para niños de 8 a 14 años y te contamos
                            por qué <strong className="text-white">miles de padres en España y Latam</strong> están eligiendo la tecnología.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 text-lg font-bold px-8 py-7 rounded-full shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] transition-all">
                                <Link href="#comparativa">
                                    Ver Comparativa 2026
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* COMPARISON SECTION */}
                <section id="comparativa" className="py-20 bg-slate-900/50">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-16">
                            Top 4 Habilidades para el Futuro
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Option 1: English */}
                            <Card className="bg-[#1a2942] border-slate-700 hover:border-slate-600 transition-all opacity-70 hover:opacity-100">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-white">
                                        <span className="text-3xl">🇬🇧</span> Inglés
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-gray-400">
                                    <p className="mb-4">Esencial, pero ya no es un diferenciador. Es el "desde".</p>
                                    <ul className="text-sm space-y-2">
                                        <li className="flex items-center gap-2">✅ Comunicación global</li>
                                        <li className="flex items-center gap-2">❌ Alta competencia</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Option 2: Sports */}
                            <Card className="bg-[#1a2942] border-slate-700 hover:border-slate-600 transition-all opacity-70 hover:opacity-100">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-white">
                                        <span className="text-3xl">⚽</span> Deportes
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-gray-400">
                                    <p className="mb-4">Vital para la salud física y el trabajo en equipo.</p>
                                    <ul className="text-sm space-y-2">
                                        <li className="flex items-center gap-2">✅ Salud y disciplina</li>
                                        <li className="flex items-center gap-2">❌ No es carrera digital</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Option 3: Music */}
                            <Card className="bg-[#1a2942] border-slate-700 hover:border-slate-600 transition-all opacity-70 hover:opacity-100">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-white">
                                        <span className="text-3xl">🎹</span> Música/Arte
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-gray-400">
                                    <p className="mb-4">Desarrolla la creatividad y la sensibilidad.</p>
                                    <ul className="text-sm space-y-2">
                                        <li className="flex items-center gap-2">✅ Creatividad</li>
                                        <li className="flex items-center gap-2">❌ Nicho específico</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Option 4: AI (Highlight) */}
                            <Card className="bg-gradient-to-b from-[#1a2942] to-[#0f172a] border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.15)] transform scale-105 relative">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Recomendado 2026
                                </div>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-white text-xl">
                                        <span className="text-3xl">🤖</span> IA y Tech
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-gray-300">
                                    <p className="mb-4 font-medium text-white">La nueva alfabetización. Quien no la use, quedará atrás.</p>
                                    <ul className="text-sm space-y-3">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Salarios +50% altos</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Crear, no solo consumir</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Ventaja competitiva real</li>
                                    </ul>
                                    <Button asChild className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold">
                                        <Link href="/">Descubrir Curso</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* WHY ONLINE SECTION */}
                <section className="py-24 bg-[#0a1628]">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
                            ¿Por qué elegir Cursos Online para Niños?
                        </h2>
                        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
                            La educación virtual ha evolucionado. Ya no se trata de videos grabados aburridos.
                            Las nuevas plataformas conectan a niños de <strong>España, México, Colombia, Argentina</strong> y más,
                            creando un aula global enriquecedora.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: Monitor, title: "Acceso Global", text: "Tu hijo aprende con los mejores instructores, sin importar si vives en Madrid, Buenos Aires o CDMX." },
                                { icon: Users, title: "Networking Temprano", text: "Conecta con otros niños brillantes de todo el mundo hispanohablante que comparten sus intereses." },
                                { icon: Zap, title: "Habilidades del Futuro", text: "Las herramientas digitales son nativas en el entorno online. Aprenden haciendo." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                                    <div className="bg-cyan-500/10 p-4 rounded-full mb-4">
                                        <item.icon className="w-8 h-8 text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SOLUTION SECTION */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20" />
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="bg-gradient-to-br from-[#1a2942] to-[#0f172a] rounded-3xl p-8 md:p-12 border border-cyan-500/30 shadow-2xl lg:flex items-center gap-12">
                            <div className="lg:w-1/2 mb-8 lg:mb-0">
                                <div className="inline-block bg-cyan-500 text-slate-900 font-bold px-4 py-1 rounded-full text-sm mb-6">
                                    LA OPCIÓN #1 EN LATAM Y ESPAÑA
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                    InnovaKids: Más que un curso, una ventaja de por vida
                                </h2>
                                <p className="text-lg text-gray-300 mb-8">
                                    Mientras otros juegan videojuegos, nuestros alumnos los crean usando Inteligencia Artificial.
                                    El programa más completo para niños de 8 a 14 años en español.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {["Clases en vivo (No videos grabados)", "Grupos pequeños (Máx 5 alumnos)", "Proyecto final real garantizado"].map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white">
                                            <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-lg">
                                        <Link href="/">Ver Programa Completo</Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                        <Link href="/brochure-programa-ia">Descargar Brochure PDF</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="lg:w-1/2 relative">
                                {/* Abstract representation of global connection */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10 animate-float">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">🇪🇸</span>
                                            <span className="text-white font-bold">España</span>
                                        </div>
                                        <p className="text-xs text-gray-400">"Mi hijo espera toda la semana su clase de IA"</p>
                                        <div className="flex text-yellow-400 mt-2"><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /></div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10 animate-float delay-700 translate-y-8">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">🇲🇽</span>
                                            <span className="text-white font-bold">México</span>
                                        </div>
                                        <p className="text-xs text-gray-400">"La mejor inversión extracurricular que hemos hecho"</p>
                                        <div className="flex text-yellow-400 mt-2"><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /></div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10 animate-float delay-500">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">🇨🇴</span>
                                            <span className="text-white font-bold">Colombia</span>
                                        </div>
                                        <p className="text-xs text-gray-400">"Profesores excelentes y pacientes"</p>
                                        <div className="flex text-yellow-400 mt-2"><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /></div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10 animate-float delay-1000 translate-y-8">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">🇨🇱</span>
                                            <span className="text-white font-bold">Chile</span>
                                        </div>
                                        <p className="text-xs text-gray-400">"100% recomendado para el futuro"</p>
                                        <div className="flex text-yellow-400 mt-2"><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ SNIPPET SECTION */}
                <section className="py-24 bg-[#08101f]">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-2xl font-bold text-white mb-10 text-center">Preguntas Frecuentes de Padres</h2>
                        <div className="space-y-6">
                            <div className="border-b border-white/10 pb-6">
                                <h3 className="text-lg font-semibold text-white mb-2">¿Desde qué países se pueden conectar?</h3>
                                <p className="text-gray-400">Desde cualquier parte del mundo. Tenemos alumnos activos en España, México, Colombia, Argentina, Chile, Perú, Estados Unidos y más. Los horarios se adaptan a tu zona horaria.</p>
                            </div>
                            <div className="border-b border-white/10 pb-6">
                                <h3 className="text-lg font-semibold text-white mb-2">¿Necesitan saber programar antes?</h3>
                                <p className="text-gray-400">No, nuestros cursos online para niños empiezan desde cero. La IA facilita el aprendizaje técnico, permitiendo que creen proyectos avanzados sin frustración.</p>
                            </div>
                        </div>
                        <div className="mt-10 text-center">
                            <Link href="/" className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-2">
                                Ver todas las preguntas frecuentes <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
