"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { type Locale, getTranslation } from "@/lib/i18n"

interface LanguageContextType {
  locale: Locale
  t: ReturnType<typeof getTranslation>
  switchLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [locale, setLocale] = useState<Locale>("en")
  const [t, setT] = useState(getTranslation("en"))

  useEffect(() => {
    const currentLocale = (router.locale || "en") as Locale
    setLocale(currentLocale)
    setT(getTranslation(currentLocale))
  }, [router.locale])

  const switchLocale = (newLocale: Locale) => {
    router.push(router.asPath, router.asPath, { locale: newLocale })
  }

  return <LanguageContext.Provider value={{ locale, t, switchLocale }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
