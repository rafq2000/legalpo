import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "Las Condes",
    slug: "las-condes",
    descripcion: "Servicio de kinesiología a domicilio en Las Condes con kinesiólogos profesionales certificados. Atendemos en toda la comuna incluyendo sectores como Estoril, Los Dominicos, Kennedy, Apoquindo y Manquehue.",
    poblacion: "Con más de 290.000 habitantes, Las Condes es una de las comunas más importantes del sector oriente de Santiago.",
    sectores: [
        "Estoril",
        "Los Dominicos",
        "El Golf",
        "Kennedy",
        "Apoquindo",
        "Manquehue",
        "Isidora Goyenechea",
        "Presidente Riesco",
    ],
    caracteristicas: [
        "Atención a domicilio en toda la comuna",
        "Kinesiólogos con más de 5 años de experiencia",
        "Equipamiento profesional portátil",
        "Horarios flexibles incluyendo fines de semana",
        "Evaluación inicial gratuita",
        "Boletas reembolsables por Isapres",
    ],
}

export const metadata: Metadata = {
    title: `Kinesiólogo a Domicilio en ${comunaData.nombre} | Kinesiología Profesional`,
    description: `Kinesiólogo a domicilio en ${comunaData.nombre}. Rehabilitación geriátrica, respiratoria, traumatológica y neurológica en tu hogar. Evaluación gratis ☎ +56 9 9967 9593. Atendemos ${comunaData.sectores.slice(0, 4).join(", ")} y más.`,
    keywords: [
        `kinesiólogo a domicilio ${comunaData.nombre}`,
        `kinesiología a domicilio ${comunaData.nombre}`,
        `kine a domicilio ${comunaData.nombre}`,
        `fisioterapia ${comunaData.nombre}`,
        `rehabilitación ${comunaData.nombre}`,
        "kinesiólogo sector oriente",
    ],
    alternates: {
        canonical: `https://kineencasa.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
    },
    openGraph: {
        title: `Kinesiólogo a Domicilio en ${comunaData.nombre} | KineEnCasa`,
        description: `Kinesiología profesional a domicilio en ${comunaData.nombre}. Rehabilitación especializada en tu hogar. ☎ +56 9 9967 9593`,
        url: `https://kineencasa.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
    },
}

export default function LasCondesPage() {
    return <ComunaPage data={comunaData} />
}
