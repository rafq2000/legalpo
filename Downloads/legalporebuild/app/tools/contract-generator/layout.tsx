import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Generador de Contratos Chile Gratis | Arriendo y Trabajo | LegalPO",
    description:
        "Generador de contratos legales online y gratuitos para Chile. Crea contratos de arriendo, trabajo y servicios en minutos con nuestra IA. Válido legalmente.",
    keywords: [
        "generador de contratos chile",
        "crear contrato arriendo online",
        "redactar contrato trabajo gratis",
        "generador documentos legales",
        "plantilla contrato servicio",
        "hacer contrato legal online",
        "contrato de arriendo simple pdf",
        "crear contrato tipo word",
    ],
    openGraph: {
        title: "Generador de Contratos Legales Chile | LegalPO",
        description: "Crea tus contratos de arriendo y trabajo gratis y en minutos.",
        type: "website",
    },
}

export default function ContractGeneratorLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
