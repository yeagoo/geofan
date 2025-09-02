import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { CheckCircle, Lightbulb, ArrowRight, Code, FileText, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function QuickStartPage() {
  return (
    <DocsLayout>
      <div className="container max-w-4xl py-6 lg:py-10">
        <div className="flex-1 space-y-4">
          <Badge variant="outline">快速开始</Badge>
          <h1 className="font-bold text-4xl lg:text-5xl text-balance">GEO 优化快速入门指南</h1>
          <p className="text-xl text-muted-foreground text-balance">
            30 分钟掌握生成引擎优化的核心要点，立即开始优化您的内容以适应 AI 搜索时代。
          </p>
        </div>

        <div className="pb-12 pt-8">
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <Alert className="my-6">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription>
                <strong>学习目标：</strong>完成本指南后，您将能够识别 GEO 优化机会，
                实施基础优化策略，并开始监控优化效果。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">第一步：理解您的内容现状</h2>

            <p className="leading-relaxed">
              在开始 GEO 优化之前，您需要评估现有内容在 AI 引擎中的表现。 这个过程类似于 SEO
              审计，但关注点有所不同。我们不再只看搜索排名， 而是要了解内容是否容易被 AI 理解和引用。
            </p>

            <div className="my-6">
              <h3 className="text-lg font-semibold mb-3">内容评估清单</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>权威性检查：</strong>内容是否有明确的作者信息、发布日期和可信来源？
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>结构清晰度：</strong>是否使用了清晰的标题层次和逻辑结构？
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>信息完整性：</strong>内容是否提供了完整、准确的答案？
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>语义丰富性：</strong>是否使用了相关的概念和术语？
                  </div>
                </div>
              </div>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-6">
              "优秀的 GEO 内容不是为了欺骗 AI，而是为了帮助 AI 更好地理解和传播知识。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">第二步：实施基础优化</h2>

            <p className="leading-relaxed">
              基础 GEO 优化包括三个核心方面：内容结构优化、语义标记添加和权威性建设。
              这些优化措施相对简单，但效果显著。让我们逐一了解每个方面的具体做法。
            </p>

            <div className="grid gap-6 md:grid-cols-3 my-8">
              <Card>
                <CardHeader>
                  <FileText className="h-8 w-8 text-blue-500" />
                  <CardTitle className="text-lg">内容结构优化</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>使用清晰的标题层次（H1-H6）</li>
                    <li>添加目录和摘要</li>
                    <li>使用列表和表格组织信息</li>
                    <li>提供关键信息的快速访问</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 text-green-500" />
                  <CardTitle className="text-lg">语义标记</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>添加 Schema.org 结构化数据</li>
                    <li>使用语义化 HTML 标签</li>
                    <li>标记重要概念和实体</li>
                    <li>建立内容之间的关联</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-purple-500" />
                  <CardTitle className="text-lg">权威性建设</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>展示作者专业背景</li>
                    <li>引用权威来源</li>
                    <li>提供详细的引用信息</li>
                    <li>建立专业声誉</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">实践示例：优化一篇技术文章</h3>

            <p className="leading-relaxed mb-4">
              让我们通过一个具体例子来看看如何应用这些原则。假设您有一篇关于"React 性能优化"的技术文章， 以下是 GEO
              优化的具体步骤：
            </p>

            <div className="bg-muted p-4 rounded-lg my-6">
              <h4 className="font-semibold mb-2">优化前的标题：</h4>
              <p className="text-sm text-muted-foreground mb-4">"React 应用很慢？试试这些技巧！"</p>

              <h4 className="font-semibold mb-2">GEO 优化后的标题：</h4>
              <p className="text-sm">"React 性能优化完整指南：10 种提升应用速度的实用方法"</p>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              <strong>优化要点：</strong>明确的主题关键词、具体的价值承诺、结构化的内容预期
            </p>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-6">
              "好的 GEO 优化让 AI 能够准确理解内容的价值，并在合适的时候推荐给用户。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">第三步：监控和迭代</h2>

            <p className="leading-relaxed">
              GEO 优化是一个持续的过程。与传统 SEO 不同，我们需要关注的指标包括： 内容在 AI
              引擎中的引用频率、答案质量的反馈、以及品牌提及的情况。
              虽然这些指标目前还没有标准化的工具来追踪，但我们可以通过一些方法来评估效果。
            </p>

            <div className="space-y-4 my-6">
              <div>
                <h4 className="font-semibold">手动测试方法</h4>
                <p className="text-sm text-muted-foreground">
                  定期在 ChatGPT、Claude 等 AI 工具中搜索相关问题，观察您的内容是否被引用或推荐。
                </p>
              </div>
              <div>
                <h4 className="font-semibold">品牌监控</h4>
                <p className="text-sm text-muted-foreground">
                  使用 Google Alerts 等工具监控品牌和内容在网络上的提及情况。
                </p>
              </div>
              <div>
                <h4 className="font-semibold">用户反馈收集</h4>
                <p className="text-sm text-muted-foreground">
                  收集用户关于内容质量和有用性的反馈，这些反馈有助于改进 GEO 策略。
                </p>
              </div>
            </div>

            <Alert className="my-8">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription>
                <strong>专业提示：</strong>建立一个内容优化的反馈循环。定期测试、分析、优化，
                并记录哪些策略最有效。这将帮助您建立适合自己领域的 GEO 最佳实践。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">常见问题解答</h2>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg">Q: GEO 优化需要多长时间才能看到效果？</h4>
                <p className="text-muted-foreground mt-2">
                  A: 与 SEO 不同，GEO 的效果可能更快显现，通常在 2-4 周内就能在 AI 引擎的回答中看到改善。
                  但建立长期的权威性和影响力需要几个月的持续努力。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Q: 是否需要完全放弃传统 SEO？</h4>
                <p className="text-muted-foreground mt-2">
                  A: 绝对不需要。GEO 和 SEO 应该并行进行。许多 GEO 优化措施（如结构化数据、高质量内容）
                  同样有利于传统搜索引擎优化。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Q: 小企业是否也需要关注 GEO？</h4>
                <p className="text-muted-foreground mt-2">
                  A: 是的，特别是在本地搜索和专业服务领域。AI 引擎在回答本地化问题时，
                  更倾向于引用权威、准确的本地信息源。
                </p>
              </div>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-8">
              "GEO 的核心不是技术技巧，而是创造真正有价值、值得被 AI 推荐的内容。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">下一步学习路径</h2>

            <p className="leading-relaxed mb-6">
              完成基础优化后，您可以深入学习更高级的 GEO 策略。我们建议按以下顺序继续学习：
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">深入理解 GEO 基础</CardTitle>
                  <CardDescription>学习生成引擎的工作原理和优化策略</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/fundamentals/how-generative-engines-work">
                      开始学习
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AI SEO 实践技巧</CardTitle>
                  <CardDescription>掌握人工智能辅助的搜索引擎优化</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/ai-seo/content-generation">
                      探索 AI SEO
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">准备好开始您的 GEO 之旅了吗？</h3>
              <p className="text-sm text-muted-foreground mb-4">
                加入我们的社区，与其他 GEO 实践者交流经验，获取最新的优化策略和工具推荐。
              </p>
              <Button asChild>
                <Link href="/tools/geo-checker">
                  使用 GEO 检测工具
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
