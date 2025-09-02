"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

interface CodeBlockProps {
  children: string
  language?: string
  title?: string
  showLineNumbers?: boolean
  className?: string
}

export function CodeBlock({
  children,
  language = "javascript",
  title,
  showLineNumbers = false,
  className = "",
}: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const loadHighlightJS = async () => {
      if (typeof window !== "undefined") {
        // 动态导入 highlight.js
        const hljs = await import("highlight.js/lib/core")

        // 导入常用语言
        const javascript = await import("highlight.js/lib/languages/javascript")
        const typescript = await import("highlight.js/lib/languages/typescript")
        const json = await import("highlight.js/lib/languages/json")
        const html = await import("highlight.js/lib/languages/xml")
        const css = await import("highlight.js/lib/languages/css")
        const bash = await import("highlight.js/lib/languages/bash")
        const python = await import("highlight.js/lib/languages/python")

        // 注册语言
        hljs.default.registerLanguage("javascript", javascript.default)
        hljs.default.registerLanguage("typescript", typescript.default)
        hljs.default.registerLanguage("json", json.default)
        hljs.default.registerLanguage("html", html.default)
        hljs.default.registerLanguage("xml", html.default)
        hljs.default.registerLanguage("css", css.default)
        hljs.default.registerLanguage("bash", bash.default)
        hljs.default.registerLanguage("python", python.default)

        // 应用语法高亮
        if (codeRef.current) {
          hljs.default.highlightElement(codeRef.current)
        }
      }
    }

    loadHighlightJS()
  }, [language, children])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("复制失败:", err)
    }
  }

  return (
    <div className={`relative group ${className}`}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted border-b text-sm font-medium">
          <span>{title}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            {copied ? "已复制" : "复制"}
          </Button>
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg text-sm">
          <code ref={codeRef} className={`language-${language} ${showLineNumbers ? "line-numbers" : ""}`}>
            {children}
          </code>
        </pre>
        {!title && (
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 hover:bg-gray-700 text-gray-100"
          >
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
          </Button>
        )}
      </div>
    </div>
  )
}
