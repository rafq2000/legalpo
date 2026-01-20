import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    Scale,
    Briefcase,
    Heart,
    Home,
    Car,
    CreditCard,
    Calculator,
    MessageCircle,
    HelpCircle,
    ArrowRight,
    CheckCircle,
    Users,
    Star,
    Zap,
} from "lucide-react"

export const metadata: Metadata = {
    title: "Preguntas Frecuentes Legales Chile 2026 | FAQ Abogado Gratis | LegalPO",
    description:
        "🔍 RESPUESTAS A +50 PREGUNTAS LEGALES más frecuentes en Chile. Finiquito, pensión alimenticia, herencias, arriendos, deudas y más. Asesoría legal gratis 24/7 con IA. Actualizado 2026.",
    keywords: [
        "preguntas frecuentes legales chile",
        "faq legal chile",
        "dudas legales chile",
        "preguntas abogado gratis",
        "consultas legales frecuentes",
        "finiquito preguntas",
        "pension alimenticia preguntas",
        "herencia preguntas chile",
    ],
    openGraph: {
        title: "Preguntas Frecuentes Legales Chile 2026 | +50 Respuestas Gratis | LegalPO",
        description:
            "Respuestas a las preguntas legales más frecuentes en Chile. Finiquito, pensión, herencias y más. Gratis 24/7.",
    },
}

const faqCategories = [
    {
        id: "finiquito",
        title: "Finiquito y Despido",
        icon: Briefcase,
        color: "emerald",
        calculatorLink: "/calculators/finiquito",
        questions: [
            {
                q: "¿Qué es un finiquito en Chile?",
                a: "El finiquito es un documento legal que pone término a la relación laboral entre el empleador y el trabajador. Debe ser firmado ante un ministro de fe (notario, inspector del trabajo, o presidente del sindicato) y debe incluir todos los pagos pendientes como sueldo, vacaciones, indemnizaciones y gratificaciones.",
            },
            {
                q: "¿Cuánto tiempo tiene el empleador para pagar el finiquito?",
                a: "El empleador tiene un plazo máximo de 10 días hábiles desde la fecha de término del contrato para pagar el finiquito. Si no cumple este plazo, las sumas adeudadas se reajustan con el IPC y devengan interés máximo convencional.",
            },
            {
                q: "¿Qué indemnizaciones corresponden por despido por necesidades de la empresa?",
                a: "Corresponde indemnización por años de servicio (un mes de sueldo por cada año trabajado, con tope de 11 meses para contratos desde agosto 1981) e indemnización sustitutiva del aviso previo (un mes de sueldo) si no se dio aviso con 30 días de anticipación.",
            },
            {
                q: "¿Puedo firmar el finiquito 'bajo reserva de derechos'?",
                a: "Sí, puedes firmar el finiquito agregando la frase 'bajo reserva de derechos' junto a tu firma. Esto te permite reclamar posteriormente ante la Inspección del Trabajo o tribunales laborales si consideras que hay montos incorrectos o derechos pendientes.",
            },
            {
                q: "¿Qué pasa si me despiden sin causa justificada?",
                a: "Si el despido es declarado injustificado por un tribunal, el empleador debe pagar la indemnización por años de servicio incrementada en un 30%, 50% o hasta 80% dependiendo de la causal invocada. Además corresponde la indemnización sustitutiva del aviso previo.",
            },
            {
                q: "¿Cómo se calculan las vacaciones proporcionales en el finiquito?",
                a: "Se calculan proporcionalmente al tiempo trabajado en el último año. Si trabajaste 6 meses, te corresponden 7.5 días de los 15 días hábiles anuales. El valor diario se calcula dividiendo el sueldo mensual por 30.",
            },
            {
                q: "¿Debo pagar impuestos por mi finiquito?",
                a: "Las indemnizaciones por años de servicio y sustitutiva del aviso previo están exentas de impuesto a la renta hasta el tope legal (11 meses de remuneración). Los sueldos pendientes y vacaciones sí están afectos a impuestos normales.",
            },
            {
                q: "¿Qué es el aviso previo y cuándo aplica?",
                a: "El aviso previo es la obligación del empleador de comunicar el despido con 30 días de anticipación. Si no lo hace, debe pagar una indemnización equivalente a un mes de sueldo. Solo aplica para despidos por necesidades de la empresa (Art. 161).",
            },
            {
                q: "¿Qué hago si mi empleador no quiere pagar el finiquito?",
                a: "Puedes interponer un reclamo ante la Inspección del Trabajo (gratis) o una demanda laboral en tribunales. El empleador puede ser multado y los montos se reajustan con intereses. Tienes un plazo de 6 meses para demandar.",
            },
            {
                q: "¿El finiquito debe ser ante notario?",
                a: "No necesariamente. El finiquito puede ser ratificado ante un Inspector del Trabajo (gratis), un notario público, o el presidente del sindicato de la empresa. Lo importante es que sea ante un ministro de fe.",
            },
        ],
    },
    {
        id: "pension",
        title: "Pensión de Alimentos",
        icon: Heart,
        color: "rose",
        calculatorLink: "/calculators/pension-alimentos",
        questions: [
            {
                q: "¿Cuánto es la pensión de alimentos mínima en Chile 2026?",
                a: "La pensión mínima es el 40% de un ingreso mínimo remuneracional cuando hay un solo hijo, o el 30% por cada hijo cuando hay dos o más menores. Con el ingreso mínimo 2026, esto equivale aproximadamente a $204,254 por un hijo.",
            },
            {
                q: "¿Hasta qué edad se paga pensión de alimentos?",
                a: "Se paga hasta los 21 años, o hasta los 28 años si el hijo está estudiando una profesión u oficio. Puede extenderse indefinidamente si el hijo tiene alguna discapacidad que le impida mantenerse por sí mismo.",
            },
            {
                q: "¿Cómo se calcula la pensión de alimentos?",
                a: "Se considera la capacidad económica del alimentante (ingresos, bienes, estilo de vida) y las necesidades del alimentario (educación, salud, vivienda, recreación). Generalmente oscila entre el 20% y 50% de los ingresos del demandado.",
            },
            {
                q: "¿Qué pasa si no pagan la pensión de alimentos?",
                a: "Con la Ley de Pago Efectivo (2025-2026), el deudor puede ser sancionado con: retención del 50% de su sueldo, arraigo nacional, suspensión de licencia de conducir, embargo de bienes, e incluso arresto nocturno o prisión por hasta 15 días.",
            },
            {
                q: "¿Puedo pedir aumento de pensión de alimentos?",
                a: "Sí, puedes solicitar aumento si cambian las circunstancias: el alimentante mejora sus ingresos, el hijo tiene nuevas necesidades (ej: educación superior), o por inflación. Se puede pedir la modificación en tribunales de familia.",
            },
            {
                q: "¿El padre puede pedir rebaja de pensión de alimentos?",
                a: "Sí, si demuestra que sus ingresos disminuyeron significativamente (pérdida de empleo, enfermedad), que tiene nuevos hijos que mantener, o que las necesidades del alimentario cambiaron. Debe solicitarlo formalmente en tribunales.",
            },
            {
                q: "¿Cómo demando pensión de alimentos?",
                a: "Debes presentar una demanda en el Tribunal de Familia de tu comuna. Puedes hacerlo con abogado particular o solicitar turno gratuito en la Corporación de Asistencia Judicial (CAJ). La primera audiencia se cita en aproximadamente 15-30 días.",
            },
            {
                q: "¿Qué gastos cubre la pensión de alimentos?",
                a: "Cubre alimentación, vivienda, vestuario, educación (colegiatura, útiles, uniformes), salud (consultas, medicamentos), transporte, y recreación. Todo lo necesario para el desarrollo integral del menor.",
            },
        ],
    },
    {
        id: "herencia",
        title: "Herencias y Sucesiones",
        icon: Scale,
        color: "purple",
        calculatorLink: "/calculators/herencia",
        questions: [
            {
                q: "¿Cómo se reparte una herencia en Chile?",
                a: "Si hay cónyuge e hijos, el cónyuge recibe el doble de lo que corresponde a cada hijo, con un mínimo del 25% del total. Si solo hay cónyuge, este hereda todo. Si solo hay hijos, se reparte en partes iguales entre ellos.",
            },
            {
                q: "¿Qué es la posesión efectiva?",
                a: "Es el trámite legal que reconoce a los herederos como dueños de los bienes del fallecido. Se realiza en el Registro Civil (gratis si la herencia es intestada y el valor es bajo) o ante notario/tribunales para testamentos.",
            },
            {
                q: "¿Cuánto cuesta hacer posesión efectiva?",
                a: "En el Registro Civil es gratuito para herencias intestadas. Si hay testamento o se hace ante notario, los costos varían según el valor de la herencia, pero generalmente van de $50,000 a $500,000 dependiendo de la complejidad.",
            },
            {
                q: "¿Puedo desheredar a un hijo en Chile?",
                a: "Solo parcialmente. En Chile existe la 'legítima' que es la mitad de la herencia que obligatoriamente debe ir a los herederos forzosos (hijos, cónyuge, padres). Solo puedes disponer libremente de la otra mitad.",
            },
            {
                q: "¿Cuánto tiempo tengo para hacer la posesión efectiva?",
                a: "No hay plazo legal obligatorio, pero se recomienda hacerla lo antes posible para evitar problemas con bienes, cuentas bancarias y propiedades. Para efectos tributarios, hay plazos de 2 años para el impuesto a la herencia.",
            },
            {
                q: "¿Qué impuestos se pagan por una herencia?",
                a: "Se paga el Impuesto a las Herencias que va del 1% al 25% según el monto heredado y el parentesco. Los primeros 1.200 UTA están exentos. Cónyuges e hijos pagan menos que parientes lejanos o terceros.",
            },
            {
                q: "¿Qué pasa si alguien tiene un testamento?",
                a: "El testamento debe respetarse, pero no puede afectar la 'legítima' (50% para herederos forzosos). El testador puede disponer libremente del 'cuarto de mejoras' (25%) y la 'cuarta de libre disposición' (25%).",
            },
            {
                q: "¿Los hijos no reconocidos tienen derecho a herencia?",
                a: "Sí, si la paternidad fue reconocida voluntariamente o determinada judicialmente. Tienen los mismos derechos que los hijos reconocidos. Pueden iniciar un juicio de filiación incluso después de fallecido el padre.",
            },
        ],
    },
    {
        id: "arriendos",
        title: "Arriendos y Propiedades",
        icon: Home,
        color: "blue",
        questions: [
            {
                q: "¿Con cuánto tiempo de anticipación debe avisarme el arrendador para que desocupe?",
                a: "Si el contrato es mes a mes, debe avisar con al menos 2 meses de anticipación. Si es un contrato de plazo fijo, debe respetar el plazo acordado. La Ley 'Devuélveme mi Casa' agiliza los procesos de desalojo.",
            },
            {
                q: "¿Puede el arrendador subir el arriendo cuando quiera?",
                a: "No. En contratos de plazo fijo no puede subir hasta que termine el plazo. En contratos mes a mes, debe dar aviso con al menos 2 meses de anticipación. Los reajustes suelen pactarse anualmente según IPC o UF.",
            },
            {
                q: "¿Qué hacer si el arrendatario no paga el arriendo?",
                a: "Desde la Ley 'Devuélveme mi Casa' (2025), el proceso de desalojo es más rápido: 2 meses de mora permiten iniciar juicio sumario que puede resolverse en 30-60 días, versus los 12-18 meses anteriores.",
            },
            {
                q: "¿Quién paga las reparaciones en un arriendo?",
                a: "Las reparaciones mayores (estructura, techumbre, instalaciones) son responsabilidad del arrendador. Las reparaciones menores o por mal uso son responsabilidad del arrendatario. El contrato puede especificar acuerdos diferentes.",
            },
            {
                q: "¿Puedo retener el pago del arriendo si hay problemas en la propiedad?",
                a: "No es recomendable. Lo correcto es notificar por escrito al arrendador, darle plazo para reparar, y si no cumple, puedes demandar o solicitar autorización judicial para hacer las reparaciones y descontarlas del arriendo.",
            },
            {
                q: "¿Cuánto puede ser la garantía de arriendo?",
                a: "Generalmente es de 1 a 2 meses de arriendo. La ley no establece un máximo, pero más de 2 meses es inusual. Debe devolverse al término del contrato, descontando solo daños reales (no deterioro normal por uso).",
            },
        ],
    },
    {
        id: "deudas",
        title: "Deudas y DICOM",
        icon: CreditCard,
        color: "amber",
        questions: [
            {
                q: "¿Después de cuánto tiempo prescribe una deuda en Chile?",
                a: "Las deudas comunes prescriben en 5 años desde que se hicieron exigibles. Las deudas tributarias en 3 años (normal) o 6 años (evasión). Las deudas por cheques y pagarés en 1 año. La prescripción se interrumpe si te demandan.",
            },
            {
                q: "¿Cuándo me sacan de DICOM?",
                a: "Automáticamente después de 5 años desde que la deuda se hizo exigible, aunque no la hayas pagado. Si pagas la deuda, debes solicitar que te eliminen, lo cual debe ocurrir en máximo 7 días hábiles.",
            },
            {
                q: "¿Me pueden embargar el sueldo por deudas?",
                a: "Solo por orden judicial y con límites: máximo 50% del sueldo que exceda el mínimo. Por ejemplo, si ganas $800,000, el mínimo protegido es ~$510,000, por lo que pueden embargar máximo $145,000 (50% de $290,000).",
            },
            {
                q: "¿Qué bienes no me pueden embargar?",
                a: "Son inembargables: el lecho del deudor, ropa necesaria, herramientas de trabajo, libros de profesión, alimentos para un mes, objetos de culto religioso, y servicios básicos. También hay límites para el embargo de sueldos.",
            },
            {
                q: "¿Puedo renegociar mis deudas?",
                a: "Sí, tienes varias opciones: negociar directamente con el acreedor, usar la Ley de Reorganización y Liquidación (Ley de Quiebras personales), o acudir a programas de renegociación de entidades como SERNAC.",
            },
            {
                q: "¿Qué es la Ley de Quiebras personales?",
                a: "Es la Ley 20.720 que permite a personas y empresas renegociar o liquidar deudas ordenadamente. Puedes proponer un plan de pago a acreedores o liquidar bienes para pagar. Hay protección contra embargos durante el proceso.",
            },
        ],
    },
    {
        id: "accidentes",
        title: "Accidentes de Tránsito",
        icon: Car,
        color: "red",
        questions: [
            {
                q: "¿Qué hacer inmediatamente después de un accidente de tránsito?",
                a: "1) Detente y asegura la escena. 2) Atiende a los heridos y llama a emergencias (131). 3) Llama a Carabineros (133) para la constancia. 4) Toma fotos. 5) Intercambia datos con el otro conductor. 6) No admitas culpa.",
            },
            {
                q: "¿Qué cubre el SOAP?",
                a: "El Seguro Obligatorio cubre gastos médicos hasta 300 UF (~$11 millones), muerte hasta 300 UF, incapacidad hasta 300 UF, y gastos funerarios hasta 15 UF. Cubre a cualquier persona afectada, incluyendo peatones.",
            },
            {
                q: "¿Puedo demandar por daños en un accidente de tránsito?",
                a: "Sí, puedes demandar daños materiales (reparación del vehículo, lucro cesante) y daños morales (dolor, sufrimiento, trauma). El responsable del accidente o su aseguradora deben compensarte.",
            },
            {
                q: "¿Qué es la Ley Uber y cómo me protege?",
                a: "La Ley 21.553 regula transporte de pasajeros por aplicaciones. Exige que conductores tengan SOAP, seguro de responsabilidad civil, y las plataformas deben responder por accidentes durante el servicio.",
            },
            {
                q: "¿En cuánto tiempo prescribe un accidente de tránsito?",
                a: "Para demandar responsabilidad civil tienes 4 años desde el accidente. Para cobrar el SOAP tienes 1 año. Las acciones penales (lesiones, homicidio) prescriben en 5-15 años según la gravedad.",
            },
        ],
    },
]

export default function PreguntasFrecuentes() {
    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-b from-slate-800/30 to-transparent border-b border-white/5">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge className="mb-4 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                            <HelpCircle className="w-4 h-4 mr-2" />
                            +50 Preguntas Respondidas
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                            Preguntas Frecuentes Legales Chile 2026
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Encuentra respuestas instantáneas a las dudas legales más comunes en Chile. Información actualizada sobre
                            finiquitos, pensiones, herencias, arriendos y más.
                        </p>
                    </div>

                    {/* Trust indicators */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-center">
                            <Users className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                            <div className="text-2xl font-bold">150,000+</div>
                            <div className="text-sm text-slate-400">Consultas Resueltas</div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-center">
                            <Star className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                            <div className="text-2xl font-bold">4.9/5</div>
                            <div className="text-sm text-slate-400">Satisfacción</div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-center">
                            <Zap className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                            <div className="text-2xl font-bold">24/7</div>
                            <div className="text-sm text-slate-400">Disponible</div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-center">
                            <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
                            <div className="text-2xl font-bold">100%</div>
                            <div className="text-sm text-slate-400">Gratis</div>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {faqCategories.map((cat) => (
                            <a
                                key={cat.id}
                                href={`#${cat.id}`}
                                className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition-colors"
                            >
                                {cat.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Categories */}
            <section className="py-12">
                <div className="container max-w-5xl mx-auto px-4 space-y-12">
                    {faqCategories.map((category) => (
                        <Card
                            key={category.id}
                            id={category.id}
                            className="bg-white/5 border-white/10 scroll-mt-24"
                        >
                            <CardHeader className="border-b border-white/10">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 bg-${category.color}-500/20 rounded-lg`}>
                                            <category.icon className={`h-6 w-6 text-${category.color}-400`} />
                                        </div>
                                        <div>
                                            <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                                            <p className="text-sm text-slate-400">{category.questions.length} preguntas frecuentes</p>
                                        </div>
                                    </div>
                                    {category.calculatorLink && (
                                        <Link href={category.calculatorLink}>
                                            <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                                                <Calculator className="h-4 w-4 mr-2" />
                                                Calculadora
                                                <ArrowRight className="h-4 w-4 ml-2" />
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <Accordion type="single" collapsible className="w-full">
                                    {category.questions.map((faq, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`${category.id}-${index}`}
                                            className="border-white/10 px-6"
                                        >
                                            <AccordionTrigger className="text-left text-white hover:text-emerald-400 py-4">
                                                {faq.q}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-300 pb-4">{faq.a}</AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-b from-transparent to-slate-800/30">
                <div className="container max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">¿No encontraste tu respuesta?</h2>
                    <p className="text-slate-300 mb-8">
                        Consulta gratis con nuestro abogado virtual con IA. Respuestas instantáneas 24/7 sobre cualquier tema
                        legal chileno.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                                <MessageCircle className="h-5 w-5 mr-2" />
                                Consultar Abogado IA Gratis
                            </Button>
                        </Link>
                        <Link href="/calculators/finiquito">
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                <Calculator className="h-5 w-5 mr-2" />
                                Usar Calculadoras Legales
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Schema.org FAQ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqCategories.flatMap((cat) =>
                            cat.questions.map((faq) => ({
                                "@type": "Question",
                                name: faq.q,
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: faq.a,
                                },
                            }))
                        ),
                    }),
                }}
            />
        </div>
    )
}
