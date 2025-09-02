import type React from "react"
import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n"

interface LocaleLayoutProps {
  children: React.ReactNode
  params: { locale: Locale }
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const isZh = params.locale === "zh"

  return {
    title: isZh ? "GEO.Fan - 生成引擎优化最佳实践" : "GEO.Fan - Generative Engine Optimization Best Practices",
    description: isZh
      ? "专注于 GEO（生成引擎优化）和 AI SEO 的最佳实践文档平台"
      : "Professional platform focused on GEO (Generative Engine Optimization) and AI SEO best practices",
  }
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  return children
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }]
}
