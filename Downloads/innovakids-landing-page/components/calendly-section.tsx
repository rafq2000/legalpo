"use client"

import { useState } from "react"
import { Calendar, CheckCircle, Shield, Clock, ChevronDown, Sparkles } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

const LATIN_AMERICA_COUNTRIES = [
  { code: "AR", name: "Argentina", timezone: "America/Argentina/Buenos_Aires", flag: "🇦🇷" },
  { code: "BO", name: "Bolivia", timezone: "America/La_Paz", flag: "🇧🇴" },
  { code: "BR", name: "Brasil", timezone: "America/Sao_Paulo", flag: "🇧🇷" },
  { code: "CL", name: "Chile", timezone: "America/Santiago", flag: "🇨🇱" },
  { code: "CO", name: "Colombia", timezone: "America/Bogota", flag: "🇨🇴" },
  { code: "CR", name: "Costa Rica", timezone: "America/Costa_Rica", flag: "🇨🇷" },
  { code: "EC", name: "Ecuador", timezone: "America/Guayaquil", flag: "🇪🇨" },
  { code: "GT", name: "Guatemala", timezone: "America/Guatemala", flag: "🇬🇹" },
  { code: "HN", name: "Honduras", timezone: "America/Tegucigalpa", flag: "🇭🇳" },
  { code: "MX", name: "México", timezone: "America/Mexico_City", flag: "🇲🇽" },
  { code: "NI", name: "Nicaragua", timezone: "America/Managua", flag: "🇳🇮" },
  { code: "PA", name: "Panamá", timezone: "America/Panama", flag: "🇵🇦" },
  { code: "PY", name: "Paraguay", timezone: "America/Asuncion", flag: "🇵🇾" },
  { code: "PE", name: "Perú", timezone: "America/Lima", flag: "🇵🇪" },
  { code: "DO", name: "República Dominicana", timezone: "America/Santo_Domingo", flag: "🇩🇴" },
  { code: "UY", name: "Uruguay", timezone: "America/Montevideo", flag: "🇺🇾" },
  { code: "VE", name: "Venezuela", timezone: "America/Caracas", flag: "🇻🇪" },
  { code: "OTHER", name: "Otro", timezone: "America/Santiago", flag: "🌎" },
]

const AGE_RANGES = [
  { value: "8-10", label: "8-10 años" },
  { value: "11-13", label: "11-13 años" },
  { value: "other", label: "Otra edad" },
]

const INTERESTS = [
  { value: "games", label: "Videojuegos y Gaming" },
  { value: "creation", label: "Creación de contenido (videos, arte)" },
  { value: "logic", label: "Lógica y Resolución de problemas" },
  { value: "unsure", label: "No estoy seguro/a" },
]

export function CalendlySection() {
  const [selectedCountry, setSelectedCountry] = useState<string>("CL")
  const [customCountry, setCustomCountry] = useState<string>("")
  const [selectedDate, setSelectedDate] = useState<string>("")

  const [childAge, setChildAge] = useState<string>("")
  const [childInterest, setChildInterest] = useState<string>("")

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const selectedCountryData = LATIN_AMERICA_COUNTRIES.find((c) => c.code === selectedCountry)
  const isOther = selectedCountry === "OTHER"

  const handleBooking = async () => {
    if (!selectedCountryData || !selectedDate || !childAge || !childInterest) return
    if (isOther && !customCountry.trim()) {
      setSubmitError("Por favor especifica tu país")
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const supabase = createClient()

      console.log("[v0] Attempting to save booking lead to Supabase...")
      console.log("[v0] Data:", {
        email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
        country_code: selectedCountry,
        country_name: isOther ? customCountry : selectedCountryData.name,
        timezone: selectedCountryData.timezone,
        selected_date: selectedDate,
        child_age: childAge,
        child_interest: childInterest,
      })

      const countryName = isOther ? customCountry : selectedCountryData.name

      const { data, error: insertError } = await supabase.from("booking_leads").insert({
        email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
        country_code: selectedCountry,
        country_name: countryName,
        timezone: selectedCountryData.timezone,
        selected_date: selectedDate,
        child_age: childAge,
        child_interest: childInterest,
      })

      if (insertError) {
        console.error("[v0] Error saving booking lead:", insertError)
        console.error("[v0] Error details:", JSON.stringify(insertError, null, 2))
        throw new Error("Error al guardar la información. Por favor intenta de nuevo.")
      }

      console.log("[v0] Booking lead saved successfully!", data)

      const calendlyUrl = new URL("https://calendly.com/innovakidslatam/reunion-informativa-innovakids")
      calendlyUrl.searchParams.set("name", `${formData.firstName} ${formData.lastName}`)
      calendlyUrl.searchParams.set("email", formData.email)
      calendlyUrl.searchParams.set("a1", formData.phone)
      calendlyUrl.searchParams.set("location", countryName)
      calendlyUrl.searchParams.set("hide_gdpr_banner", "1")
      calendlyUrl.searchParams.set("primary_color", "4dd0e1")

      console.log("[v0] Opening Calendly with URL:", calendlyUrl.toString())
      window.open(calendlyUrl.toString(), "_blank")
    } catch (error) {
      console.error("[v0] Catch block error:", error)
      setSubmitError(error instanceof Error ? error.message : "Error desconocido")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid =
    formData.email &&
    formData.firstName &&
    formData.lastName &&
    formData.phone &&
    selectedCountry &&
    selectedDate &&
    childAge &&
    childInterest &&
    (!isOther || customCountry.trim())

  return (
    <section id="sesion-estrategica" className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4DD0E1]/20 to-[#26C6DA]/20 border border-[#4DD0E1] rounded-full px-6 py-2.5 mb-6">
              <Sparkles className="w-5 h-5 text-[#4DD0E1]" />
              <span className="text-[#4DD0E1] font-semibold text-sm uppercase tracking-wide">
                Evaluación Personalizada
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
              Descubre si tu hijo califica
              <br />
              <span className="text-[#4DD0E1]">para el programa</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              No todos los niños son aceptados. Esta sesión determina si tu hijo tiene el perfil para destacar con IA.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <div className="flex flex-col items-center gap-2 bg-[#0f1f3a]/50 backdrop-blur border border-[#4DD0E1]/20 rounded-xl p-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <span className="text-sm font-medium text-gray-200">Evaluación del perfil</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-[#0f1f3a]/50 backdrop-blur border border-[#4DD0E1]/20 rounded-xl p-6">
                <Clock className="w-8 h-8 text-[#4DD0E1]" />
                <span className="text-sm font-medium text-gray-200">30 minutos</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-[#0f1f3a]/50 backdrop-blur border border-[#4DD0E1]/20 rounded-xl p-6">
                <Shield className="w-8 h-8 text-green-500" />
                <span className="text-sm font-medium text-gray-200">Sin compromiso</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="space-y-8">
              <div>
                <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  ¿Qué edad tiene tu hijo/a? *
                </label>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 md:gap-3">
                  {AGE_RANGES.map((age) => (
                    <button
                      key={age.value}
                      onClick={() => setChildAge(age.value)}
                      className={`px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 transition-all font-medium text-sm md:text-base ${
                        childAge === age.value
                          ? "border-[#4DD0E1] bg-[#4DD0E1]/10 text-[#0a1628]"
                          : "border-gray-200 hover:border-[#4DD0E1]/50 text-gray-700"
                      }`}
                    >
                      {age.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  ¿Cuál es el principal interés de tu hijo/a hoy? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {INTERESTS.map((interest) => (
                    <button
                      key={interest.value}
                      onClick={() => setChildInterest(interest.value)}
                      className={`px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 transition-all font-medium text-left text-sm md:text-base ${
                        childInterest === interest.value
                          ? "border-[#4DD0E1] bg-[#4DD0E1]/10 text-[#0a1628]"
                          : "border-gray-200 hover:border-[#4DD0E1]/50 text-gray-700"
                      }`}
                    >
                      {interest.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  País / Zona Horaria
                </label>
                <div className="relative">
                  <select
                    value={selectedCountry}
                    onChange={(e) => {
                      setSelectedCountry(e.target.value)
                      setCustomCountry("")
                    }}
                    className="w-full px-4 py-3 pr-10 border-2 border-gray-200 rounded-lg appearance-none focus:outline-none focus:border-[#4DD0E1] text-gray-800 font-medium cursor-pointer"
                  >
                    {LATIN_AMERICA_COUNTRIES.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {isOther && (
                <div>
                  <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                    Especifica tu país
                  </label>
                  <input
                    type="text"
                    value={customCountry}
                    onChange={(e) => setCustomCountry(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#4DD0E1] text-gray-800 font-medium"
                    placeholder="Escribe tu país"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">Elige el día</label>
                <div className="relative">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#4DD0E1] text-gray-800 font-medium"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="pt-4 border-t-2 border-gray-100">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">Introduzca su información</h3>

                <div className="space-y-4 md:space-y-6">
                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#4DD0E1] text-gray-800"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-1">Nombre *</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#4DD0E1] text-gray-800"
                        placeholder="Juan"
                      />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-1">Apellido *</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#4DD0E1] text-gray-800"
                        placeholder="Pérez"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                      Número de teléfono *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#4DD0E1] text-gray-800"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                </div>
              </div>

              {submitError && (
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 text-center">
                  <p className="text-sm md:text-base text-red-700">{submitError}</p>
                </div>
              )}

              <button
                onClick={handleBooking}
                disabled={!isFormValid || isSubmitting}
                className="w-full bg-gradient-to-r from-[#4DD0E1] to-[#26C6DA] hover:from-[#26C6DA] hover:to-[#4DD0E1] disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-[#0a1628] font-bold text-lg md:text-xl py-5 md:py-6 rounded-2xl transition-all shadow-lg hover:shadow-2xl hover:scale-[1.02] transform"
              >
                {isSubmitting ? (
                  "Procesando..."
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Solicitar Evaluación Gratuita
                  </span>
                )}
              </button>

              {selectedDate && selectedCountryData && (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 text-center">
                  <p className="text-sm md:text-base text-gray-700">
                    <strong>Fecha seleccionada:</strong> {selectedDate} (
                    {isOther ? customCountry : selectedCountryData.name})
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Seleccionarás la hora en el siguiente paso</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">🔒 Tu información es confidencial y nunca será compartida</p>
          </div>
        </div>
      </div>
    </section>
  )
}
