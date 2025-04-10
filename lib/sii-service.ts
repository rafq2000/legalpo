// Servicio para obtener datos del SII (Servicio de Impuestos Internos)

/**
 * Obtiene el valor actual de la UTM desde el SII
 * Nota: En un entorno de producción, esto debería implementarse como una API
 * que haga scraping del sitio del SII o consuma alguna API oficial
 */
export async function obtenerValorUTM(): Promise<number> {
  try {
    // En un entorno real, aquí se haría una petición al SII
    // Por ahora, retornamos el valor actual conocido
    // Marzo 2025: $65,287
    return 65287
  } catch (error) {
    console.error("Error al obtener valor UTM:", error)
    return 65287 // Valor por defecto en caso de error
  }
}

/**
 * Obtiene el valor actual del Ingreso Mínimo Mensual
 */
export function obtenerIngresoMinimo(): number {
  // Valor actualizado 2025
  return 510636
}
