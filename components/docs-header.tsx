"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { Github, Zap } from "lucide-react"
import { DocsSidebar } from "./docs-sidebar"
import { DocsToc } from "./docs-toc"

export function DocsHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center px-4">
        <div className="flex items-center space-x-2 md:hidden">
          <DocsSidebar />
        </div>

        <Link href="/" className="flex items-center space-x-2 mr-6">
          <Zap className="h-6 w-6 text-primary" />
          <span className="font-bold">GEO.Fan</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 flex-1">
          <Link
            href="/getting-started/quick-start"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            快速开始
          </Link>
          <Link
            href="/fundamentals/how-generative-engines-work"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            基础理论
          </Link>
          <Link
            href="/ai-seo/content-generation"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            AI SEO
          </Link>
          <Link
            href="/tools/geo-checker"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            工具
          </Link>
          <Link
            href="/case-studies/ecommerce"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            案例参考
          </Link>
        </nav>

        <div className="flex items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <div className="xl:hidden">
              <DocsToc />
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/geo-fan" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
