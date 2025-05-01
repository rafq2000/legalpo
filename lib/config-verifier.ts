"use server"

export async function verifyEnvironmentVariables() {
  const requiredVars = [
    "NEXT_PUBLIC_SUPABASE_URL",
    "SUPABASE_SERVICE_KEY",
    "GA4_PROPERTY_ID",
    "GOOGLE_CLIENT_EMAIL",
    "GOOGLE_PRIVATE_KEY",
  ]

  const results = requiredVars.map((varName) => {
    const value = process.env[varName]
    const exists = !!value
    const truncatedValue =
      exists && typeof value === "string" ? (varName.includes("KEY") ? "***" : value.substring(0, 10) + "...") : null

    return { name: varName, exists, value: truncatedValue }
  })

  const missingVars = results.filter((r) => !r.exists).map((r) => r.name)

  if (missingVars.length > 0) {
    console.error(`❌ Variables de entorno faltantes: ${missingVars.join(", ")}`)
  } else {
    console.log("✅ Todas las variables de entorno requeridas están presentes")
  }

  // Verificar formato de GOOGLE_PRIVATE_KEY
  const privateKey = process.env.GOOGLE_PRIVATE_KEY
  if (privateKey) {
    if (!privateKey.includes("-----BEGIN PRIVATE KEY-----")) {
      console.error(
        "❌ GOOGLE_PRIVATE_KEY no tiene el formato correcto. Debe incluir los delimitadores BEGIN/END PRIVATE KEY",
      )
    } else if (!privateKey.includes("\n")) {
      console.error(
        "❌ GOOGLE_PRIVATE_KEY no contiene saltos de línea. Asegúrate de usar comillas dobles o la opción 'raw' al configurarla",
      )
    } else {
      console.log("✅ Formato de GOOGLE_PRIVATE_KEY parece correcto")
    }
  }

  return {
    allPresent: missingVars.length === 0,
    missing: missingVars,
    results: results.map((r) => ({ name: r.name, exists: r.exists })),
  }
}
