import { Metadata } from 'next'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Check, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Kinesiología Traumatológica a Domicilio | Fracturas y Prótesis | KINEUM',
    description: 'Rehabilitación de lesiones musculares y esqueléticas en casa. Recuperación de prótesis de cadera, rodilla, esguinces y fracturas en Santiago.',
    keywords: ['kinesiología traumatológica domicilio', 'rehabilitación fractura cadera', 'kine prótesis rodilla', 'tratamiento lumbago domicilio', 'esguince tobillo kine'],
}

export default function TraumaPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <WhatsAppButton />
            <section className="bg-slate-900 text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Rehabilitación <span className="text-red-400">Traumatológica</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        Vuelva a moverse sin dolor. Tratamiento experto para lesiones agudas, post-operatorios y dolor crónico.
                    </p>
                    <a
                        href="https://wa.me/56999679593?text=Hola, necesito kine traumatológica"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full font-medium transition-colors duration-200"
                    >
                        Evaluación Traumatológica
                    </a>
                </div>
            </section>

            <section className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Post-Operatorios</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center text-slate-700"><Check className="text-red-500 mr-3" /> Prótesis Total de Cadera y Rodilla</li>
                            <li className="flex items-center text-slate-700"><Check className="text-red-500 mr-3" /> Cirugía de Manguito Rotador</li>
                            <li className="flex items-center text-slate-700"><Check className="text-red-500 mr-3" /> Reconstrucción de Ligamento Cruzado (LCA)</li>
                            <li className="flex items-center text-slate-700"><Check className="text-red-500 mr-3" /> Osteosíntesis de Fracturas</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Lesiones y Dolor</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center text-slate-700"><Check className="text-red-500 mr-3" /> Lumbago Mecánico y Hernias</li>
                            <li className="flex items-center text-slate-700"><Check className="text-red-500 mr-3" /> Tendinopatías y Bursitis</li>
                            <li className="flex items-center text-slate-700"><Check className="text-red-500 mr-3" /> Esguinces de Tobillo Grado I-III</li>
                            <li className="flex items-center text-slate-700"><Check className="text-red-500 mr-3" /> Desgarros Musculares</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
