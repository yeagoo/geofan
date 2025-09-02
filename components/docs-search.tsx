"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Search, Brain, Zap, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { DialogTitle } from "@/components/ui/dialog"

interface SearchResult {
  id: string
  title: string
  description?: string
  url: string
  type: "page" | "section" | "component"
}

const searchData: SearchResult[] = [
  {
    id: "1",
    title: "什么是 GEO",
    description: "了解生成引擎优化的基本概念",
    url: "/",
    type: "page",
  },
  {
    id: "2",
    title: "GEO vs SEO",
    description: "生成引擎优化与传统 SEO 的区别",
    url: "/getting-started/geo-vs-seo",
    type: "page",
  },
  {
    id: "3",
    title: "快速入门指南",
    description: "30 分钟掌握 GEO 优化要点",
    url: "/getting-started/quick-start",
    type: "page",
  },
  {
    id: "4",
    title: "核心概念",
    description: "GEO 优化的核心概念和原理",
    url: "/getting-started/core-concepts",
    type: "page",
  },
  {
    id: "5",
    title: "生成引擎工作原理",
    description: "深入理解 AI 引擎如何处理和生成内容",
    url: "/fundamentals/how-generative-engines-work",
    type: "section",
  },
  {
    id: "6",
    title: "内容优化策略",
    description: "针对 AI 引擎的内容优化方法",
    url: "/fundamentals/content-optimization",
    type: "section",
  },
  {
    id: "7",
    title: "结构化数据",
    description: "使用结构化数据提升 AI 理解能力",
    url: "/fundamentals/structured-data",
    type: "section",
  },
  {
    id: "8",
    title: "AI 内容生成",
    description: "利用 AI 工具优化内容创作",
    url: "/ai-seo/content-generation",
    type: "component",
  },
  {
    id: "9",
    title: "智能关键词研究",
    description: "AI 驱动的关键词研究方法",
    url: "/ai-seo/keyword-research",
    type: "component",
  },
  {
    id: "10",
    title: "Schema.org 标记",
    description: "实施结构化数据标记的技术指南",
    url: "/technical/schema-markup",
    type: "section",
  },
  {
    id: "11",
    title: "GEO 检测工具",
    description: "检测和分析内容的 GEO 优化程度",
    url: "/tools/geo-checker",
    type: "component",
  },
  {
    id: "12",
    title: "电商网站优化",
    description: "电商平台的 GEO 优化案例研究",
    url: "/case-studies/ecommerce",
    type: "page",
  },
]

export function DocsSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const router = useRouter()

  // Handle keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // Search function
  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    const filtered = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    setResults(filtered.slice(0, 8)) // Limit to 8 results
  }, [])

  // Update results when query changes
  useEffect(() => {
    performSearch(query)
  }, [query, performSearch])

  const handleSelect = (url: string) => {
    setOpen(false)
    setQuery("")
    router.push(url)
  }

  const getIcon = (type: SearchResult["type"]) => {
    switch (type) {
      case "component":
        return <Zap className="h-4 w-4" />
      case "section":
        return <Brain className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const getTypeLabel = (type: SearchResult["type"]) => {
    switch (type) {
      case "component":
        return "工具"
      case "section":
        return "基础"
      default:
        return "指南"
    }
  }

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">搜索 GEO 文档...</span>
        <span className="inline-flex lg:hidden">搜索...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle className="sr-only">搜索 GEO 文档</DialogTitle>
        <CommandInput placeholder="搜索 GEO 文档..." value={query} onValueChange={setQuery} />
        <CommandList>
          <CommandEmpty>未找到相关结果。</CommandEmpty>

          {results.length > 0 && (
            <>
              <CommandGroup heading="指南页面">
                {results
                  .filter((result) => result.type === "page")
                  .map((result) => (
                    <CommandItem
                      key={result.id}
                      value={result.title}
                      onSelect={() => handleSelect(result.url)}
                      className="flex items-center gap-2"
                    >
                      {getIcon(result.type)}
                      <div className="flex flex-col flex-1 min-w-0">
                        <span className="truncate">{result.title}</span>
                        {result.description && (
                          <span className="text-xs text-muted-foreground truncate">{result.description}</span>
                        )}
                      </div>
                      <div className="ml-auto flex-shrink-0">
                        <span className="text-xs text-muted-foreground">{getTypeLabel(result.type)}</span>
                      </div>
                    </CommandItem>
                  ))}
              </CommandGroup>

              {results.some((result) => result.type === "component") && (
                <>
                  <CommandSeparator />
                  <CommandGroup heading="工具与实践">
                    {results
                      .filter((result) => result.type === "component")
                      .map((result) => (
                        <CommandItem
                          key={result.id}
                          value={result.title}
                          onSelect={() => handleSelect(result.url)}
                          className="flex items-center gap-2"
                        >
                          {getIcon(result.type)}
                          <div className="flex flex-col flex-1 min-w-0">
                            <span className="truncate">{result.title}</span>
                            {result.description && (
                              <span className="text-xs text-muted-foreground truncate">{result.description}</span>
                            )}
                          </div>
                          <div className="ml-auto flex-shrink-0">
                            <span className="text-xs text-muted-foreground">{getTypeLabel(result.type)}</span>
                          </div>
                        </CommandItem>
                      ))}
                  </CommandGroup>
                </>
              )}

              {results.some((result) => result.type === "section") && (
                <>
                  <CommandSeparator />
                  <CommandGroup heading="基础知识">
                    {results
                      .filter((result) => result.type === "section")
                      .map((result) => (
                        <CommandItem
                          key={result.id}
                          value={result.title}
                          onSelect={() => handleSelect(result.url)}
                          className="flex items-center gap-2"
                        >
                          {getIcon(result.type)}
                          <div className="flex flex-col flex-1 min-w-0">
                            <span className="truncate">{result.title}</span>
                            {result.description && (
                              <span className="text-xs text-muted-foreground truncate">{result.description}</span>
                            )}
                          </div>
                          <div className="ml-auto flex-shrink-0">
                            <span className="text-xs text-muted-foreground">{getTypeLabel(result.type)}</span>
                          </div>
                        </CommandItem>
                      ))}
                  </CommandGroup>
                </>
              )}
            </>
          )}

          {query && results.length === 0 && (
            <CommandGroup>
              <CommandItem disabled>
                <Search className="mr-2 h-4 w-4" />
                未找到 "{query}" 的相关结果
              </CommandItem>
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}
