"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { DocsSidebar } from "./docs-sidebar"
import { DocsToc } from "./docs-toc"
import { LanguageToggle } from "./language-toggle"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function DocsHeader() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center px-4">
        <div className="flex items-center space-x-2 md:hidden">
          <DocsSidebar />
        </div>

        <Link href="/" className="flex items-center space-x-2 mr-6">
          <Image src="/logo.svg" alt="GEO.Fan Logo" width={24} height={24} className="h-6 w-6" />
          <span className="font-bold">GEO.Fan</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 flex-1">
          <Link
            href="/getting-started/quick-start"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.quickStart}
          </Link>
          <Link
            href="/fundamentals/how-generative-engines-work"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.fundamentals}
          </Link>
          <Link
            href="/ai-seo/content-generation"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.aiSeo}
          </Link>
          <Link
            href="/tools/geo-checker"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.tools}
          </Link>
          <Link
            href="/case-studies/ecommerce"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.examples}
          </Link>
        </nav>

        <div className="flex items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <div className="xl:hidden">
              <DocsToc />
            </div>
            <LanguageToggle />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
