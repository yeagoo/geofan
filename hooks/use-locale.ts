"use client"

import { useRouter, usePathname } from "next/navigation"
import { type Locale, getTranslation } from "@/lib/i18n"

export function useLocale() {
  const router = useRouter()
  const pathname = usePathname()

  const locale = (pathname.startsWith("/zh") ? "zh" : "en") as Locale
  const t = getTranslation(locale)

  const switchLocale = (newLocale: Locale) => {
    const currentPath = pathname.replace(/^\/(en|zh)/, "") || "/"
    router.push(`/${newLocale}${currentPath}`)
  }

  return {
    locale,
    t,
    switchLocale,
  }
}
