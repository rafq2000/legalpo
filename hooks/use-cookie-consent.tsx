"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"

type ConsentType = "necessary" | "preferences" | "analytics" | "advertising"

interface CookieConsentContextType {
  getConsent: (type: ConsentType) => boolean
  setConsent: (type: ConsentType, value: boolean) => void
  hasAnyConsent: () => boolean
  resetConsent: () => void
}

const defaultConsent = {
  necessary: true,
  preferences: false,
  analytics: false,
  advertising: false,
}

const CookieConsentContext = createContext<CookieConsentContextType>({
  getConsent: () => false,
  setConsent: () => {},
  hasAnyConsent: () => false,
  resetConsent: () => {},
})

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState(defaultConsent)

  useEffect(() => {
    // Cargar consentimiento del localStorage
    try {
      const savedConsent = localStorage.getItem("cookieConsent")
      if (savedConsent) {
        setConsentState(JSON.parse(savedConsent))
      }
    } catch (error) {
      console.error("Error al cargar el consentimiento de cookies:", error)
    }
  }, [])

  const getConsent = (type: ConsentType) => {
    return consent[type]
  }

  const setConsent = (type: ConsentType, value: boolean) => {
    const newConsent = { ...consent, [type]: value }
    setConsentState(newConsent)

    // Guardar en localStorage
    try {
      localStorage.setItem("cookieConsent", JSON.stringify(newConsent))
    } catch (error) {
      console.error("Error al guardar el consentimiento de cookies:", error)
    }
  }

  const hasAnyConsent = () => {
    return Object.values(consent).some((value) => value)
  }

  const resetConsent = () => {
    setConsentState(defaultConsent)
    try {
      localStorage.removeItem("cookieConsent")
    } catch (error) {
      console.error("Error al eliminar el consentimiento de cookies:", error)
    }
  }

  return (
    <CookieConsentContext.Provider value={{ getConsent, setConsent, hasAnyConsent, resetConsent }}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export const useCookieConsent = () => useContext(CookieConsentContext)
