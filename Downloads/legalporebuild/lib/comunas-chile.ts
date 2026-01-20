// Data for the 100 most populated comunas in Chile
// Source: INE Census data

export interface ComunaData {
    slug: string
    nombre: string
    region: string
    poblacion: number
}

export const comunasChile: ComunaData[] = [
    // Región Metropolitana
    { slug: "puente-alto", nombre: "Puente Alto", region: "Metropolitana", poblacion: 645909 },
    { slug: "maipu", nombre: "Maipú", region: "Metropolitana", poblacion: 578605 },
    { slug: "la-florida", nombre: "La Florida", region: "Metropolitana", poblacion: 402433 },
    { slug: "las-condes", nombre: "Las Condes", region: "Metropolitana", poblacion: 294838 },
    { slug: "san-bernardo", nombre: "San Bernardo", region: "Metropolitana", poblacion: 327871 },
    { slug: "penalolen", nombre: "Peñalolén", region: "Metropolitana", poblacion: 252435 },
    { slug: "pudahuel", nombre: "Pudahuel", region: "Metropolitana", poblacion: 253139 },
    { slug: "la-pintana", nombre: "La Pintana", region: "Metropolitana", poblacion: 189335 },
    { slug: "el-bosque", nombre: "El Bosque", region: "Metropolitana", poblacion: 175594 },
    { slug: "quilicura", nombre: "Quilicura", region: "Metropolitana", poblacion: 254694 },
    { slug: "recoleta", nombre: "Recoleta", region: "Metropolitana", poblacion: 190075 },
    { slug: "cerro-navia", nombre: "Cerro Navia", region: "Metropolitana", poblacion: 142465 },
    { slug: "renca", nombre: "Renca", region: "Metropolitana", poblacion: 160847 },
    { slug: "lo-prado", nombre: "Lo Prado", region: "Metropolitana", poblacion: 104134 },
    { slug: "estacion-central", nombre: "Estación Central", region: "Metropolitana", poblacion: 147041 },
    { slug: "santiago", nombre: "Santiago Centro", region: "Metropolitana", poblacion: 503147 },
    { slug: "providencia", nombre: "Providencia", region: "Metropolitana", poblacion: 142079 },
    { slug: "nunoa", nombre: "Ñuñoa", region: "Metropolitana", poblacion: 208237 },
    { slug: "macul", nombre: "Macul", region: "Metropolitana", poblacion: 134635 },
    { slug: "san-miguel", nombre: "San Miguel", region: "Metropolitana", poblacion: 107954 },
    { slug: "la-cisterna", nombre: "La Cisterna", region: "Metropolitana", poblacion: 97763 },
    { slug: "san-joaquin", nombre: "San Joaquín", region: "Metropolitana", poblacion: 103485 },
    { slug: "lo-espejo", nombre: "Lo Espejo", region: "Metropolitana", poblacion: 103865 },
    { slug: "pedro-aguirre-cerda", nombre: "Pedro Aguirre Cerda", region: "Metropolitana", poblacion: 107803 },
    { slug: "cerrillos", nombre: "Cerrillos", region: "Metropolitana", poblacion: 88956 },
    { slug: "independencia", nombre: "Independencia", region: "Metropolitana", poblacion: 100281 },
    { slug: "conchalai", nombre: "Conchalí", region: "Metropolitana", poblacion: 139195 },
    { slug: "huechuraba", nombre: "Huechuraba", region: "Metropolitana", poblacion: 112528 },
    { slug: "vitacura", nombre: "Vitacura", region: "Metropolitana", poblacion: 85384 },
    { slug: "la-reina", nombre: "La Reina", region: "Metropolitana", poblacion: 96762 },
    { slug: "lo-barnechea", nombre: "Lo Barnechea", region: "Metropolitana", poblacion: 124479 },
    { slug: "colina", nombre: "Colina", region: "Metropolitana", poblacion: 184582 },
    { slug: "lampa", nombre: "Lampa", region: "Metropolitana", poblacion: 127824 },
    { slug: "buin", nombre: "Buin", region: "Metropolitana", poblacion: 92357 },
    { slug: "paine", nombre: "Paine", region: "Metropolitana", poblacion: 82919 },
    { slug: "talagante", nombre: "Talagante", region: "Metropolitana", poblacion: 74237 },
    { slug: "penhaflor", nombre: "Peñaflor", region: "Metropolitana", poblacion: 97681 },
    { slug: "padre-hurtado", nombre: "Padre Hurtado", region: "Metropolitana", poblacion: 62559 },
    { slug: "el-monte", nombre: "El Monte", region: "Metropolitana", poblacion: 38926 },
    { slug: "melipilla", nombre: "Melipilla", region: "Metropolitana", poblacion: 120831 },

    // Región de Valparaíso
    { slug: "vina-del-mar", nombre: "Viña del Mar", region: "Valparaíso", poblacion: 334248 },
    { slug: "valparaiso", nombre: "Valparaíso", region: "Valparaíso", poblacion: 296655 },
    { slug: "quilpue", nombre: "Quilpué", region: "Valparaíso", poblacion: 175813 },
    { slug: "villa-alemana", nombre: "Villa Alemana", region: "Valparaíso", poblacion: 140729 },
    { slug: "san-antonio", nombre: "San Antonio", region: "Valparaíso", poblacion: 104098 },
    { slug: "quillota", nombre: "Quillota", region: "Valparaíso", poblacion: 97682 },
    { slug: "los-andes", nombre: "Los Andes", region: "Valparaíso", poblacion: 68093 },
    { slug: "san-felipe", nombre: "San Felipe", region: "Valparaíso", poblacion: 77634 },
    { slug: "limache", nombre: "Limache", region: "Valparaíso", poblacion: 48965 },
    { slug: "la-calera", nombre: "La Calera", region: "Valparaíso", poblacion: 54593 },
    { slug: "concon", nombre: "Concón", region: "Valparaíso", poblacion: 55451 },

    // Región del Biobío
    { slug: "concepcion", nombre: "Concepción", region: "Biobío", poblacion: 223574 },
    { slug: "talcahuano", nombre: "Talcahuano", region: "Biobío", poblacion: 163832 },
    { slug: "chillan", nombre: "Chillán", region: "Ñuble", poblacion: 184739 },
    { slug: "los-angeles", nombre: "Los Ángeles", region: "Biobío", poblacion: 202331 },
    { slug: "coronel", nombre: "Coronel", region: "Biobío", poblacion: 116262 },
    { slug: "san-pedro-de-la-paz", nombre: "San Pedro de la Paz", region: "Biobío", poblacion: 131808 },
    { slug: "hualpen", nombre: "Hualpén", region: "Biobío", poblacion: 91773 },
    { slug: "chiguayante", nombre: "Chiguayante", region: "Biobío", poblacion: 85938 },
    { slug: "tome", nombre: "Tomé", region: "Biobío", poblacion: 54946 },
    { slug: "penco", nombre: "Penco", region: "Biobío", poblacion: 48463 },

    // Región de La Araucanía
    { slug: "temuco", nombre: "Temuco", region: "La Araucanía", poblacion: 282415 },
    { slug: "padre-las-casas", nombre: "Padre Las Casas", region: "La Araucanía", poblacion: 90703 },
    { slug: "villarrica", nombre: "Villarrica", region: "La Araucanía", poblacion: 55478 },
    { slug: "angol", nombre: "Angol", region: "La Araucanía", poblacion: 53262 },
    { slug: "victoria", nombre: "Victoria", region: "La Araucanía", poblacion: 35334 },

    // Región de Los Lagos
    { slug: "puerto-montt", nombre: "Puerto Montt", region: "Los Lagos", poblacion: 245902 },
    { slug: "osorno", nombre: "Osorno", region: "Los Lagos", poblacion: 161460 },
    { slug: "puerto-varas", nombre: "Puerto Varas", region: "Los Lagos", poblacion: 44578 },
    { slug: "castro", nombre: "Castro", region: "Los Lagos", poblacion: 43807 },
    { slug: "ancud", nombre: "Ancud", region: "Los Lagos", poblacion: 39946 },

    // Región de Los Ríos
    { slug: "valdivia", nombre: "Valdivia", region: "Los Ríos", poblacion: 166080 },
    { slug: "la-union", nombre: "La Unión", region: "Los Ríos", poblacion: 40982 },

    // Región del Maule
    { slug: "talca", nombre: "Talca", region: "Maule", poblacion: 220357 },
    { slug: "curico", nombre: "Curicó", region: "Maule", poblacion: 150208 },
    { slug: "linares", nombre: "Linares", region: "Maule", poblacion: 95602 },
    { slug: "constitucion", nombre: "Constitución", region: "Maule", poblacion: 49292 },
    { slug: "cauquenes", nombre: "Cauquenes", region: "Maule", poblacion: 42075 },

    // Región de O'Higgins
    { slug: "rancagua", nombre: "Rancagua", region: "O'Higgins", poblacion: 241774 },
    { slug: "san-fernando", nombre: "San Fernando", region: "O'Higgins", poblacion: 76888 },
    { slug: "rengo", nombre: "Rengo", region: "O'Higgins", poblacion: 59820 },
    { slug: "machali", nombre: "Machalí", region: "O'Higgins", poblacion: 53548 },
    { slug: "graneros", nombre: "Graneros", region: "O'Higgins", poblacion: 33063 },

    // Región de Coquimbo
    { slug: "la-serena", nombre: "La Serena", region: "Coquimbo", poblacion: 221054 },
    { slug: "coquimbo", nombre: "Coquimbo", region: "Coquimbo", poblacion: 227730 },
    { slug: "ovalle", nombre: "Ovalle", region: "Coquimbo", poblacion: 113035 },
    { slug: "illapel", nombre: "Illapel", region: "Coquimbo", poblacion: 31879 },

    // Región de Atacama
    { slug: "copiapo", nombre: "Copiapó", region: "Atacama", poblacion: 158438 },
    { slug: "vallenar", nombre: "Vallenar", region: "Atacama", poblacion: 51917 },
    { slug: "caldera", nombre: "Caldera", region: "Atacama", poblacion: 17644 },

    // Región de Antofagasta
    { slug: "antofagasta", nombre: "Antofagasta", region: "Antofagasta", poblacion: 361873 },
    { slug: "calama", nombre: "Calama", region: "Antofagasta", poblacion: 165731 },
    { slug: "tocopilla", nombre: "Tocopilla", region: "Antofagasta", poblacion: 24460 },

    // Región de Tarapacá
    { slug: "iquique", nombre: "Iquique", region: "Tarapacá", poblacion: 191468 },
    { slug: "alto-hospicio", nombre: "Alto Hospicio", region: "Tarapacá", poblacion: 129999 },

    // Región de Arica y Parinacota
    { slug: "arica", nombre: "Arica", region: "Arica y Parinacota", poblacion: 236732 },

    // Región de Magallanes
    { slug: "punta-arenas", nombre: "Punta Arenas", region: "Magallanes", poblacion: 131592 },

    // Región de Aysén
    { slug: "coyhaique", nombre: "Coyhaique", region: "Aysén", poblacion: 57818 },
    { slug: "puerto-aysen", nombre: "Puerto Aysén", region: "Aysén", poblacion: 22905 },
]

export function getComunaBySlug(slug: string): ComunaData | undefined {
    return comunasChile.find((c) => c.slug === slug)
}

export function getAllComunaSlugs(): string[] {
    return comunasChile.map((c) => c.slug)
}
