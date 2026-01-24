import { Metadata } from 'next'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Check, Calendar, Activity, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Kinesiología Respiratoria a Domicilio Santiago [Infantil y Adulto] | KINEUM',
    description: 'Tratamiento respiratorio a domicilio en Las Condes y Vitacura. Especialistas en Bronquitis, Neumonía, EPOC y KTR Infantil. Agende hoy.',
    keywords: ['kinesiología respiratoria domicilio', 'kine respiratorio infantil', 'neumonía tratamiento casa', 'ktr domicilio santiago', 'bronquitis niños kinesiolgia'],
}

export default function RespiratoryPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <WhatsAppButton />
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Kinesiología <span className="text-emerald-400">Respiratoria</span> a Domicilio
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        Recuperación pulmonar experta en la comodidad de su hogar.
                        Tratamientos para bebés (KTR), niños y adultos mayores con patologías agudas o crónicas.
                    </p>
                    <a
                        href="https://wa.me/56999679593?text=Hola, necesito kinesiología respiratoria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-full font-medium transition-colors duration-200"
                    >
                        Agendar KTR a Domicilio
                    </a>
                </div>
            </section>

            {/* Services Content */}
            <section className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold font-serif text-slate-900 mb-6">Tratamientos Especializados</h2>
                        <ul className="space-y-4">
                            {[
                                "KTR Infantil: Bronquiolitis, VRS, Bronquitis.",
                                "Rehabilitación Post-Neumonía en Adultos Mayores.",
                                "Manejo de EPOC y Fibrosis Pulmonar.",
                                "Aspiración de secreciones y técnicas de higiene bronquial.",
                                "Saturometría y evaluación cardiorespiratoria."
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-slate-700">
                                    <Check className="text-emerald-500 mr-3 h-6 w-6" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <Shield className="mr-2 text-amber-500" /> Cobertura y Seguridad
                        </h3>
                        <p className="text-slate-600 mb-4">
                            Llevamos la clínica a su casa. Nuestros kinesiólogos cuentan con todo el EPP (Equipo de Protección Personal) y saturómetros certificados.
                        </p>
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <p className="text-sm font-semibold text-slate-800">📍 Áreas de Cobertura:</p>
                            <p className="text-sm text-slate-600">Las Condes, Vitacura, Lo Barnechea, Providencia, La Reina, Ñuñoa.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
