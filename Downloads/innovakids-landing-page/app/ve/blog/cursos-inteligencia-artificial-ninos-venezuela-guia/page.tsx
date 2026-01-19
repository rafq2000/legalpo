import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Cursos de IA para Niños en Venezuela: Guía Completa 2026 | InnovaKids",
    description:
        "Guía definitiva de cursos de inteligencia artificial para niños en Venezuela. Comparativa, precios, edades, metodología. Todo lo que necesitas saber antes de inscribir a tu hijo.",
    keywords: [
        "cursos ia niños venezuela guia",
        "mejores cursos inteligencia artificial niños",
        "como enseñar ia a niños venezuela",
        "cursos programacion niños caracas",
    ],
    openGraph: {
        title: "Guía Completa: Cursos de IA para Niños en Venezuela 2026",
        url: "https://www.innovakidslatam.com/ve/blog/cursos-inteligencia-artificial-ninos-venezuela-guia",
    },
    alternates: {
        canonical: "https://www.innovakidslatam.com/ve/blog/cursos-inteligencia-artificial-ninos-venezuela-guia",
    },
}

export default function BlogVenezuelaGuiaPage() {
    return (
        <>
            <Navigation />
            <WhatsAppButton />
            <main className="min-h-screen bg-background">
                <article className="pt-32 pb-20">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <div className="mb-8">
                            <span className="text-primary text-sm font-medium">Guía Educativa</span>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-2 mb-4 font-premium">
                                Cursos de Inteligencia Artificial para Niños en Venezuela: Guía Completa 2026
                            </h1>
                            <p className="text-gray-400">Actualizado: Enero 2026 • 8 min lectura</p>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-xl text-gray-300 mb-8">
                                La inteligencia artificial está transformando el mundo, y Venezuela no es la excepción. En esta guía te explicamos todo lo que necesitas saber sobre los cursos de IA para niños disponibles en el país.
                            </p>

                            <h2 className="text-2xl font-bold text-white mt-12 mb-4">¿Por Qué Enseñar IA a los Niños Venezolanos?</h2>
                            <p className="text-gray-300 mb-4">
                                En un mundo cada vez más digitalizado, los niños que dominen la IA tendrán una ventaja competitiva enorme. Venezuela tiene un potencial increíble de talento joven que puede destacar globalmente.
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
                                <li>Preparación para trabajos remotos bien pagados en dólares</li>
                                <li>Desarrollo de pensamiento lógico y creativo</li>
                                <li>Habilidades transferibles a cualquier carrera futura</li>
                                <li>Oportunidades de becas internacionales</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-white mt-12 mb-4">¿Qué Edad es Ideal para Empezar?</h2>
                            <p className="text-gray-300 mb-8">
                                Los cursos de InnovaKids están diseñados para niños de <strong className="text-white">8 a 14 años</strong>. Esta es la edad perfecta porque los niños ya tienen capacidad de abstracción pero mantienen la curiosidad y creatividad necesarias.
                            </p>

                            <h2 className="text-2xl font-bold text-white mt-12 mb-4">¿Cuánto Cuestan los Cursos de IA en Venezuela?</h2>
                            <p className="text-gray-300 mb-4">
                                Los precios varían según la calidad y modalidad:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
                                <li><strong className="text-white">Academias tradicionales:</strong> $400-800 USD por módulo</li>
                                <li><strong className="text-white">Cursos grabados:</strong> $50-150 USD (sin interacción)</li>
                                <li><strong className="text-primary">InnovaKids:</strong> $197 USD (10 clases en vivo, grupos de 5)</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-white mt-12 mb-4">¿Por Qué InnovaKids es la Mejor Opción?</h2>
                            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-8">
                                <ul className="space-y-3 text-gray-300">
                                    <li>✅ Grupos de máximo 5 niños (atención personalizada)</li>
                                    <li>✅ Clases en vivo (no videos pregrabados)</li>
                                    <li>✅ Horarios adaptados a Venezuela (GMT-4)</li>
                                    <li>✅ Pagos en USD vía Zelle, PayPal, Binance</li>
                                    <li>✅ Garantía de 10 días (devolución completa)</li>
                                    <li>✅ Certificación oficial + portfolio</li>
                                </ul>
                            </div>

                            <div className="bg-[#0a1628] rounded-xl p-8 text-center mt-12">
                                <h3 className="text-2xl font-bold text-white mb-4">¿Listo para que tu hijo domine la IA?</h3>
                                <p className="text-gray-400 mb-6">Agenda una evaluación gratuita de 30 minutos.</p>
                                <Link href="/#sesion-estrategica">
                                    <Button className="bg-primary hover:bg-primary/90 text-[#0a1628] px-8 py-4 font-bold rounded-full">
                                        Agendar Evaluación Gratis →
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    )
}
