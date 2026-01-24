import { Metadata } from 'next'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Check, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Neurorehabilitación a Domicilio Santiago | ACV y Parkinson | KINEUM',
    description: 'Rehabilitación neurológica experta en casa. Especialistas en recuperación post-ACV, Parkinson, Alzheimer y Esclerosis Múltiple. Neuroplasticidad aplicada.',
    keywords: ['neurorehabilitación domicilio', 'kine neurológica santiago', 'recuperación acv', 'tratamiento parkinson kinesiologia', 'fisioterapia neurológica'],
}

export default function NeuroPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <WhatsAppButton />
            <section className="bg-slate-900 text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Neurorehabilitación <span className="text-blue-400">Clínica</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        Terapia intensiva basada en la neuroplasticidad para maximizar la recuperación de funciones tras un daño neurológico.
                    </p>
                    <a
                        href="https://wa.me/56999679593?text=Hola, me interesa neurorehabilitación"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full font-medium transition-colors duration-200"
                    >
                        Consultar con Especialista
                    </a>
                </div>
            </section>

            <section className="py-16 container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                        <Brain className="mr-3 text-blue-500" /> Patologías que Tratamos
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <h3 className="font-bold text-lg text-slate-800">Accidente Cerebrovascular (ACV)</h3>
                            <p className="text-slate-600 text-sm">Protocolos intensivos para recuperar movilidad, marcha y función de extremidades superiores.</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-bold text-lg text-slate-800">Enfermedad de Parkinson</h3>
                            <p className="text-slate-600 text-sm">Entrenamiento de marcha, equilibrio y estrategias para superar bloqueos (freezing).</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-bold text-lg text-slate-800">Trastornos Cognitivos</h3>
                            <p className="text-slate-600 text-sm">Estimulación dual (motor-cognitiva) para ralentizar el deterioro en demencias y Alzheimer.</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-bold text-lg text-slate-800">Lesiones Medulares</h3>
                            <p className="text-slate-600 text-sm">Manejo de transferencias, fortalecimiento y prevención de complicaciones.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
