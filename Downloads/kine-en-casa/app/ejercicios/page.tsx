import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, AlertCircle, CheckCircle2 } from "lucide-react"
import { exercises } from "@/lib/exercises-data"

export default function ExercisesPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <header className="bg-slate-900 py-16 text-white text-center">
                <div className="container mx-auto px-4">
                    <Badge className="mb-4 bg-emerald-600">Biblioteca Privada</Badge>
                    <h1 className="text-4xl font-bold font-serif mb-4">Ejercicios Terapéuticos</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        Guía visual de referencia para sus rutinas de rehabilitación.
                        Recuerde realizar solo los ejercicios prescritos por su kinesiólogo.
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {exercises.map((exercise) => (
                        <div key={exercise.id} className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col">
                            <div className="relative aspect-video bg-slate-200 group cursor-pointer">
                                {/* In a real app, this would be a next/image or video player */}
                                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 group-hover:bg-slate-900/20 transition-all">
                                    <Play className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-lg" />
                                </div>
                                <img
                                    src={exercise.gifUrl}
                                    alt={exercise.title}
                                    className="w-full h-full object-cover mix-blend-multiply"
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge variant="secondary" className="backdrop-blur-md bg-white/90">
                                        {exercise.category}
                                    </Badge>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">{exercise.title}</h3>
                                <p className="text-slate-600 text-sm mb-6 flex-1">
                                    {exercise.description}
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center">
                                            <CheckCircle2 className="h-4 w-4 text-emerald-600 mr-2" />
                                            Pasos Clave
                                        </h4>
                                        <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5">
                                            {exercise.steps.map((step, idx) => (
                                                <li key={idx}>{step}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                                        <h4 className="text-sm font-bold text-amber-900 mb-2 flex items-center">
                                            <AlertCircle className="h-4 w-4 text-amber-600 mr-2" />
                                            Errores Comunes
                                        </h4>
                                        <ul className="text-sm text-amber-800 space-y-1 list-disc pl-5">
                                            {exercise.commonErrors.map((error, idx) => (
                                                <li key={idx}>{error}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 pt-0 mt-auto">
                                <Button className="w-full bg-slate-900 hover:bg-slate-800">
                                    Ver Video Completo
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
