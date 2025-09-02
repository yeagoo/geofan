"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="border-t-2 bg-muted/30 mt-16">
      <div className="max-w-[1600px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded flex items-center justify-center">
                  <Image src="/logo.svg" alt="GEO.Fan Logo" width={24} height={24} className="h-6 w-6" />
                </div>
                <span className="font-bold text-lg">{t.footer.brand}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">{t.footer.description}</p>
            <div className="flex space-x-4">
              <Link
                href="mailto:mail@geo.fan"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">{t.footer.contact}</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/getting-started/what-is-geo"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav.whatIsGeo}
                </Link>
              </li>
              <li>
                <Link
                  href="/getting-started/quick-start"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav.quickStartGuide}
                </Link>
              </li>
              <li>
                <Link
                  href="/getting-started/core-concepts"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav.coreConcepts}
                </Link>
              </li>
              <li>
                <Link
                  href="/fundamentals/how-generative-engines-work"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav.fundamentals}
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools & Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t.footer.resources}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tools/geo-checker"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.tools.geoChecker}
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/performance-analysis"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.tools.performanceAnalysis}
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/competitor-analysis"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.tools.competitorAnalysis}
                </Link>
              </li>
              <li>
                <Link href="/tools/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.resources}
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t.footer.contact}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/case-studies/ecommerce"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav.examples}
                </Link>
              </li>
              <li>
                <Link
                  href="/best-practices/content-strategy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Best Practices
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:mail@geo.fan"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <p>© 2025 GEO.Fan. {t.footer.allRightsReserved}</p>
            <Badge variant="outline" className="text-xs">
              v1.2.0
            </Badge>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.terms}
            </Link>
            <Link href="/changelog" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.changelog}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
