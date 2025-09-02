"use client"

import { useRouter } from "next/router"
import { type Locale, getTranslation } from "@/lib/i18n"

export function useLocale() {
  const router = useRouter()
  const locale = (router.locale || "en") as Locale
  const t = getTranslation(locale)

  const switchLocale = (newLocale: Locale) => {
    router.push(router.asPath, router.asPath, { locale: newLocale })
  }

  return {
    locale,
    t,
    switchLocale,
  }
}
