"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookOpen, Settings, Menu, ChevronDown, ChevronRight, Zap, Brain, TrendingUp, Code } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface NavItem {
  title: string
  href?: string
  icon?: React.ComponentType<{ className?: string }>
  items?: NavItem[]
}

const navigation: NavItem[] = [
  {
    title: "快速开始",
    icon: BookOpen,
    items: [
      { title: "什么是 GEO", href: "/getting-started/what-is-geo" },
      { title: "GEO vs SEO", href: "/getting-started/geo-vs-seo" },
      { title: "快速入门指南", href: "/getting-started/quick-start" },
      { title: "核心概念", href: "/getting-started/core-concepts" },
    ],
  },
  {
    title: "GEO 基础",
    icon: Brain,
    items: [
      { title: "生成引擎工作原理", href: "/fundamentals/how-generative-engines-work" },
      { title: "内容优化策略", href: "/fundamentals/content-optimization" },
      { title: "结构化数据", href: "/fundamentals/structured-data" },
      { title: "语义搜索优化", href: "/fundamentals/semantic-search" },
    ],
  },
  {
    title: "AI SEO 实践",
    icon: Zap,
    items: [
      { title: "AI 内容生成", href: "/ai-seo/content-generation" },
      { title: "智能关键词研究", href: "/ai-seo/keyword-research" },
      { title: "自动化优化", href: "/ai-seo/automation" },
      { title: "性能监控", href: "/ai-seo/performance-monitoring" },
    ],
  },
  {
    title: "技术实现",
    icon: Code,
    items: [
      { title: "Schema.org 标记", href: "/technical/schema-markup" },
      { title: "JSON-LD 实现", href: "/technical/json-ld" },
      { title: "API 集成", href: "/technical/api-integration" },
      { title: "工具与插件", href: "/technical/tools-plugins" },
    ],
  },
  {
    title: "案例研究",
    icon: TrendingUp,
    items: [
      { title: "电商网站优化", href: "/case-studies/ecommerce" },
      { title: "内容平台优化", href: "/case-studies/content-platform" },
      { title: "SaaS 产品优化", href: "/case-studies/saas" },
      { title: "本地业务优化", href: "/case-studies/local-business" },
    ],
  },
  {
    title: "工具与资源",
    icon: Settings,
    items: [
      { title: "GEO 检测工具", href: "/tools/geo-checker" },
      { title: "性能分析", href: "/tools/performance-analysis" },
      { title: "竞品分析", href: "/tools/competitor-analysis" },
      { title: "资源库", href: "/tools/resources" },
    ],
  },
]

interface SidebarContentProps {
  className?: string
}

function SidebarContent({ className }: SidebarContentProps) {
  const pathname = usePathname()

  const getInitialOpenSections = () => {
    const sections: string[] = []

    // 根据路径确定应该展开的分类
    if (pathname === "/" || pathname.startsWith("/getting-started")) {
      sections.push("快速开始")
    }
    if (pathname.startsWith("/fundamentals")) {
      sections.push("GEO 基础")
    }
    if (pathname.startsWith("/ai-seo")) {
      sections.push("AI SEO 实践")
    }
    if (pathname.startsWith("/technical")) {
      sections.push("技术实现")
    }
    if (pathname.startsWith("/case-studies")) {
      sections.push("案例研究")
    }
    if (pathname.startsWith("/tools")) {
      sections.push("工具与资源")
    }

    // 如果没有匹配的路径，默认展开快速开始
    return sections.length > 0 ? sections : ["快速开始"]
  }

  const [openSections, setOpenSections] = useState<string[]>(getInitialOpenSections())

  useEffect(() => {
    const newOpenSections = getInitialOpenSections()
    setOpenSections(newOpenSections)
  }, [pathname])

  const toggleSection = (title: string) => {
    setOpenSections((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]))
  }

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">GEO.Fan 文档</h2>
          <div className="space-y-1">
            {navigation.map((section) => (
              <Collapsible
                key={section.title}
                open={openSections.includes(section.title)}
                onOpenChange={() => toggleSection(section.title)}
              >
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start font-normal">
                    {section.icon && <section.icon className="mr-2 h-4 w-4" />}
                    {section.title}
                    {openSections.includes(section.title) ? (
                      <ChevronDown className="ml-auto h-4 w-4" />
                    ) : (
                      <ChevronRight className="ml-auto h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
                  {section.items?.map((item) => (
                    <Button
                      key={item.href}
                      variant={pathname === item.href ? "secondary" : "ghost"}
                      className="w-full justify-start font-normal pl-8"
                      asChild
                    >
                      <Link href={item.href || "#"}>{item.title}</Link>
                    </Button>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function DocsSidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden border-r bg-sidebar md:block md:w-[220px] lg:w-[280px]">
        <ScrollArea className="h-full">
          <SidebarContent />
        </ScrollArea>
      </div>

      {/* Mobile Sidebar */}
      <Button
        variant="ghost"
        className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
    </>
  )
}
