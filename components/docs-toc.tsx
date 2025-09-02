"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { List } from "lucide-react"

interface TocItem {
  id: string
  title: string
  level: number
}

interface DocsTocProps {
  className?: string
}

function TocContent({ className }: { className?: string }) {
  const [tocItems, setTocItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2")
    const items: TocItem[] = []

    headings.forEach((heading, index) => {
      const level = Number.parseInt(heading.tagName.charAt(1))
      const title = heading.textContent || ""
      let id = heading.id

      if (!id) {
        id = title
          .toLowerCase()
          .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
          .replace(/^-+|-+$/g, "")
        heading.id = id
      }

      items.push({ id, title, level })
    })

    setTocItems(items)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0% -35% 0%" },
    )

    tocItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [tocItems])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  if (tocItems.length === 0) return null

  return (
    <div className={cn("space-y-2", className)}>
      <h4 className="text-sm font-semibold">目录</h4>
      <div className="space-y-1">
        {tocItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToHeading(item.id)}
            className={cn(
              "block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors",
              "py-1 px-2 rounded-sm hover:bg-muted",
              {
                "text-foreground bg-muted": activeId === item.id,
                "pl-2": item.level === 1,
                "pl-4": item.level === 2,
              },
            )}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export function DocsToc({ className }: DocsTocProps) {
  return (
    <>
      {/* Desktop TOC */}
      <div className={cn("hidden xl:block xl:w-[280px] 2xl:w-[320px]", className)}>
        <div className="sticky top-16 -mt-10 pt-4 px-4">
          <ScrollArea className="pb-10">
            <TocContent />
          </ScrollArea>
        </div>
      </div>

      {/* Mobile TOC */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="xl:hidden">
            <List className="h-4 w-4" />
            <span className="sr-only">目录</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px]">
          <div className="mt-6">
            <TocContent />
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
