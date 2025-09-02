import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Lightbulb, TrendingUp, Brain, Search } from "lucide-react"

export default function GeoVsSeoPage() {
  return (
    <DocsLayout>
      <div className="container max-w-4xl py-6 lg:py-10">
        <div className="flex-1 space-y-4">
          <Badge variant="outline">核心概念</Badge>
          <h1 className="font-bold text-4xl lg:text-5xl text-balance">GEO vs SEO：搜索优化的新纪元</h1>
          <p className="text-xl text-muted-foreground text-balance">
            深入理解 GEO（Generative Engine Optimization，生成引擎优化）与传统 SEO 的本质区别， 掌握 AI
            时代的搜索优化策略。
          </p>
        </div>

        <div className="pb-12 pt-8">
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <Alert className="my-6">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription>
                <strong>核心洞察：</strong>SEO 优化的是搜索引擎的排名算法，而 GEO 优化的是 AI 引擎的理解和生成能力。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">什么是 GEO？</h2>

            <p className="leading-relaxed">
              GEO（Generative Engine Optimization，生成引擎优化）是一种新兴的优化策略， 专门针对 ChatGPT、Claude、Gemini
              等生成式 AI 引擎进行内容优化。与传统 SEO 不同， GEO 的目标不是提高搜索排名，而是让您的内容更容易被 AI
              理解、引用和推荐。
            </p>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-6">
              "在 AI 驱动的搜索时代，最重要的不是排在第一位，而是成为 AI 的首选答案来源。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">核心差异对比</h2>

            <div className="grid gap-6 md:grid-cols-2 my-8">
              <Card>
                <CardHeader>
                  <Search className="h-8 w-8 text-blue-500" />
                  <CardTitle>传统 SEO</CardTitle>
                  <CardDescription>搜索引擎优化</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">优化目标</h4>
                    <p className="text-sm text-muted-foreground">提高搜索结果排名</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">核心策略</h4>
                    <p className="text-sm text-muted-foreground">关键词匹配、外链建设、技术优化</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">用户行为</h4>
                    <p className="text-sm text-muted-foreground">点击链接访问网站</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">成功指标</h4>
                    <p className="text-sm text-muted-foreground">排名位置、点击率、流量</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Brain className="h-8 w-8 text-purple-500" />
                  <CardTitle>GEO 优化</CardTitle>
                  <CardDescription>生成引擎优化</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">优化目标</h4>
                    <p className="text-sm text-muted-foreground">成为 AI 的首选信息源</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">核心策略</h4>
                    <p className="text-sm text-muted-foreground">语义优化、结构化数据、权威性建设</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">用户行为</h4>
                    <p className="text-sm text-muted-foreground">直接获得 AI 生成的答案</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">成功指标</h4>
                    <p className="text-sm text-muted-foreground">引用频率、答案质量、品牌提及</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="leading-relaxed">
              这种差异反映了搜索行为的根本性变化。用户不再满足于获得一堆链接， 而是希望直接得到准确、完整的答案。AI
              引擎正在成为新的信息门户， 它们不仅搜索信息，更重要的是理解、整合和生成答案。
            </p>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-6">
              "GEO 的本质是让机器更好地理解人类的知识，而不仅仅是匹配关键词。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">为什么 GEO 变得重要？</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">AI 搜索的普及</h4>
                  <p className="text-sm text-muted-foreground">
                    越来越多的用户开始使用 ChatGPT、Claude 等 AI 工具进行信息搜索，
                    这些工具提供的是直接答案而非链接列表。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Brain className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">搜索意图的变化</h4>
                  <p className="text-sm text-muted-foreground">
                    用户的搜索意图从"找到相关页面"转变为"获得准确答案"， 这要求内容创作者重新思考优化策略。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Search className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">竞争格局的改变</h4>
                  <p className="text-sm text-muted-foreground">
                    在 AI 生成的答案中，只有最权威、最准确的信息源才会被引用， 这使得内容质量比以往任何时候都更加重要。
                  </p>
                </div>
              </div>
            </div>

            <Alert className="my-8">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription>
                <strong>实践建议：</strong>不要完全放弃 SEO，而是在 SEO 基础上增加 GEO 策略。
                两者结合才能在新旧搜索时代都保持竞争力。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">GEO 优化的核心原则</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. 权威性优先</h3>
                <p className="leading-relaxed">
                  AI 引擎更倾向于引用权威、可信的信息源。建立专业权威性比关键词密度更重要。
                  这包括作者专业背景、内容深度、引用来源的质量等。
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2. 结构化表达</h3>
                <p className="leading-relaxed">
                  使用清晰的结构化数据和语义标记，帮助 AI 更好地理解内容的层次和关系。 这不仅包括技术层面的 Schema.org
                  标记，也包括内容组织的逻辑性。
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">3. 语义丰富性</h3>
                <p className="leading-relaxed">
                  关注概念之间的关系和上下文，而不仅仅是关键词。AI 引擎能够理解同义词、
                  相关概念和语义关联，因此内容的语义丰富性比关键词重复更有价值。
                </p>
              </div>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-8">
              "成功的 GEO 策略不是欺骗算法，而是真正帮助 AI 更好地理解和传播有价值的知识。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">下一步行动</h2>

            <p className="leading-relaxed">
              理解了 GEO 与 SEO 的区别后，您可以开始制定针对性的优化策略。 建议从以下几个方面开始：
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>审核现有内容的权威性和准确性</li>
              <li>优化内容结构，提高可读性和逻辑性</li>
              <li>添加结构化数据标记</li>
              <li>建立专业声誉和引用网络</li>
              <li>监控内容在 AI 引擎中的表现</li>
            </ul>

            <p className="leading-relaxed">在接下来的章节中，我们将详细介绍每个方面的具体实施方法和最佳实践。</p>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
