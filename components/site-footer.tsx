import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Twitter, Mail, ExternalLink } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t-2 bg-muted/30 mt-16">
      <div className="max-w-[1600px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">⚡</span>
                </div>
                <span className="font-bold text-lg">GEO.Fan</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              专注于生成引擎优化（GEO）和 AI SEO 的最佳实践文档平台，助力内容在 AI 时代脱颖而出。
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="mailto:contact@geo.fan"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">邮箱</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">快速开始</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/getting-started/what-is-geo"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  什么是 GEO
                </Link>
              </li>
              <li>
                <Link
                  href="/getting-started/quick-start"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  快速入门指南
                </Link>
              </li>
              <li>
                <Link
                  href="/getting-started/core-concepts"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  核心概念
                </Link>
              </li>
              <li>
                <Link
                  href="/fundamentals/how-generative-engines-work"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  生成引擎原理
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools & Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">工具与资源</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tools/geo-checker"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GEO 检测工具
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/performance-analysis"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  性能分析工具
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/competitor-analysis"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  竞品分析工具
                </Link>
              </li>
              <li>
                <Link href="/tools/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  资源中心
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">社区与支持</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/case-studies/ecommerce"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  成功案例
                </Link>
              </li>
              <li>
                <Link
                  href="/best-practices/content-strategy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  最佳实践
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/geo-fan/discussions"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  社区讨论
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:support@geo.fan"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  技术支持
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <p>© 2024 GEO.Fan. 保留所有权利。</p>
            <Badge variant="outline" className="text-xs">
              v1.0.0
            </Badge>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              隐私政策
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              使用条款
            </Link>
            <Link href="/changelog" className="text-muted-foreground hover:text-foreground transition-colors">
              更新日志
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
