import { Metadata } from 'next'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Check, Heart, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Kinesiología para Adulto Mayor a Domicilio | Geriatría KINEUM',
    description: 'Rehabilitación geriátrica en Santiago. Tratamiento de Sarcopenia, prevención de caídas y artrosis. Kinesiólogos expertos en el cuidado del adulto mayor.',
    keywords: ['kinesiología adulto mayor domicilio', 'kine geriatrica santiago', 'tratamiento sarcopenia', 'rehabilitación artrosis cadera', 'kinesiologo tercera edad'],
}

export default function GeriatricPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <WhatsAppButton />
            <section className="bg-slate-900 text-white py-20 relative text-center">
                <div className="container mx-auto px-4 z-10 relative">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Kinesiología <span className="text-amber-500">Geriátrica</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        Mantenga la independencia y vitalidad. Programas especializados para combatir la sarcopenia,
                        mejorar el equilibrio y rehabilitar lesiones en el adulto mayor.
                    </p>
                    <a
                        href="https://wa.me/56999679593?text=Hola, consulto por kinesiología geriátrica"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full font-medium transition-colors duration-200"
                    >
                        Evaluación Geriátrica
                    </a>
                </div>
            </section>

            <section className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold font-serif text-slate-900 mb-6">Enfoque Integral</h2>
                        <ul className="space-y-4 text-slate-700">
                            <li className="flex items-start"><Check className="text-amber-500 mr-2 mt-1" /> <strong>Sarcopenia:</strong> Recuperación de masa muscular y fuerza.</li>
                            <li className="flex items-start"><Check className="text-amber-500 mr-2 mt-1" /> <strong>Prevención de Caídas:</strong> Ejercicios de equilibrio y propiocepción.</li>
                            <li className="flex items-start"><Check className="text-amber-500 mr-2 mt-1" /> <strong>Artrosis y Artritis:</strong> Manejo del dolor y rigidez articular.</li>
                            <li className="flex items-start"><Check className="text-amber-500 mr-2 mt-1" /> <strong>Post-Hospitalización:</strong> Recuperación funcional tras encamamiento prolongado.</li>
                        </ul>
                    </div>
                    <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                        <h3 className="text-xl font-bold mb-4 text-orange-900">¿Por qué KINEUM?</h3>
                        <p className="text-orange-800 mb-4">
                            Entendemos que cada adulto mayor es único. Nuestros planes se adaptan al entorno del hogar, utilizando muebles y espacios cotidianos para ejercicios funcionales que mejoran la calidad de vida real.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-orange-700">+500</span>
                                <span className="text-xs text-orange-600">Pacientes Atendidos</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-orange-700">100%</span>
                                <span className="text-xs text-orange-600">Dedicación</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
