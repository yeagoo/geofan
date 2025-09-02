import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "GEO.Fan - 生成引擎优化最佳实践",
  description: "专注于 GEO（生成引擎优化）和 AI SEO 的最佳实践文档平台",
  generator: "v0.app",
  keywords: ["GEO", "生成引擎优化", "AI SEO", "搜索引擎优化", "人工智能"],
  authors: [{ name: "GEO.Fan Team" }],
  openGraph: {
    title: "GEO.Fan - 生成引擎优化最佳实践",
    description: "专注于 GEO（生成引擎优化）和 AI SEO 的最佳实践文档平台",
    url: "https://geo.fan",
    siteName: "GEO.Fan",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"
          media="(prefers-color-scheme: dark)"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js" defer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/javascript.min.js" defer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/python.min.js" defer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/json.min.js" defer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/html.min.js" defer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/css.min.js" defer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                if (typeof hljs !== 'undefined') {
                  hljs.highlightAll();
                  
                  // 监听主题变化，重新应用高亮
                  const observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        setTimeout(() => {
                          hljs.highlightAll();
                        }, 100);
                      }
                    });
                  });
                  
                  observer.observe(document.documentElement, {
                    attributes: true,
                    attributeFilter: ['class']
                  });
                }
              });
            `,
          }}
        />
      </head>
      <body className={["font-sans", "antialiased", GeistSans.variable, GeistMono.variable].join(" ")}>
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            themes={["light", "dark", "system"]}
          >
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
