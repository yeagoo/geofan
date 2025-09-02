import type React from "react"
import { DocsHeader } from "./docs-header"
import { DocsSidebar } from "./docs-sidebar"
import { DocsToc } from "./docs-toc"
import { SiteFooter } from "./site-footer"

interface DocsLayoutProps {
  children: React.ReactNode
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <DocsHeader />
      <div className="max-w-[1600px] mx-auto flex">
        <DocsSidebar />
        <main className="flex-1 px-4 py-6 md:px-6 lg:px-8 min-w-0">{children}</main>
        <DocsToc />
      </div>
      <SiteFooter />
    </div>
  )
}
