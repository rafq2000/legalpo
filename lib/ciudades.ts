import { cache } from "react"

export interface Ciudad {
  nombre: string
  slug: string
}

// Función para normalizar texto (quitar acentos, convertir a minúsculas, etc.)
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

// Lista de ciudades de Chile
const CIUDADES: Ciudad[] = [
  { nombre: "Santiago", slug: "santiago" },
  { nombre: "Viña del Mar", slug: "vina-del-mar" },
  { nombre: "Valparaíso", slug: "valparaiso" },
  { nombre: "Concepción", slug: "concepcion" },
  { nombre: "La Serena", slug: "la-serena" },
  { nombre: "Antofagasta", slug: "antofagasta" },
  { nombre: "Temuco", slug: "temuco" },
  { nombre: "Rancagua", slug: "rancagua" },
  { nombre: "Talca", slug: "talca" },
  { nombre: "Arica", slug: "arica" },
  { nombre: "Puerto Montt", slug: "puerto-montt" },
  { nombre: "Iquique", slug: "iquique" },
  { nombre: "Coquimbo", slug: "coquimbo" },
  { nombre: "Osorno", slug: "osorno" },
  { nombre: "Calama", slug: "calama" },
  { nombre: "Valdivia", slug: "valdivia" },
  { nombre: "Quilpué", slug: "quilpue" },
  { nombre: "Copiapó", slug: "copiapo" },
  { nombre: "Curicó", slug: "curico" },
  { nombre: "Punta Arenas", slug: "punta-arenas" },
  { nombre: "Chillán", slug: "chillan" },
  { nombre: "Los Ángeles", slug: "los-angeles" },
  { nombre: "La Calera", slug: "la-calera" },
  { nombre: "San Antonio", slug: "san-antonio" },
  { nombre: "Melipilla", slug: "melipilla" },
  { nombre: "Linares", slug: "linares" },
  { nombre: "San Fernando", slug: "san-fernando" },
  { nombre: "Ovalle", slug: "ovalle" },
  { nombre: "Quillota", slug: "quillota" },
  { nombre: "Los Andes", slug: "los-andes" },
  { nombre: "Angol", slug: "angol" },
  { nombre: "San Felipe", slug: "san-felipe" },
  { nombre: "Constitución", slug: "constitucion" },
  { nombre: "Puente Alto", slug: "puente-alto" },
  { nombre: "Maipú", slug: "maipu" },
  { nombre: "La Florida", slug: "la-florida" },
  { nombre: "Las Condes", slug: "las-condes" },
  { nombre: "Peñalolén", slug: "penalolen" },
  { nombre: "Pudahuel", slug: "pudahuel" },
  { nombre: "Ñuñoa", slug: "nunoa" },
  { nombre: "La Pintana", slug: "la-pintana" },
  { nombre: "El Bosque", slug: "el-bosque" },
  { nombre: "Estación Central", slug: "estacion-central" },
  { nombre: "Recoleta", slug: "recoleta" },
  { nombre: "Cerro Navia", slug: "cerro-navia" },
  { nombre: "Conchalí", slug: "conchali" },
  { nombre: "Providencia", slug: "providencia" },
  { nombre: "Quinta Normal", slug: "quinta-normal" },
  { nombre: "San Bernardo", slug: "san-bernardo" },
  { nombre: "La Granja", slug: "la-granja" },
]

// Función para obtener todas las ciudades
export const getCiudades = cache((): Ciudad[] => {
  return CIUDADES
})

// Función para obtener datos de una ciudad específica
export const getCiudadData = cache((slug: string): Ciudad | undefined => {
  return CIUDADES.find((ciudad) => ciudad.slug === slug)
})
