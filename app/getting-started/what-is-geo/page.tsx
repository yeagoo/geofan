import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Lightbulb, Search, Brain, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WhatIsGeoPage() {
  return (
    <DocsLayout>
      <div className="space-y-4">
        <Badge variant="outline">快速开始</Badge>
        <h1 className="font-bold text-4xl lg:text-5xl text-balance">什么是 GEO？</h1>
        <p className="text-xl text-muted-foreground text-balance">
          深入了解生成引擎优化（GEO）的核心概念，掌握在 AI 时代内容优化的全新方法。
        </p>
      </div>

      <div className="space-y-8">
        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertDescription>
            <strong>核心概念：</strong>
            GEO（Generative Engine Optimization）是专门针对 ChatGPT、Claude、Gemini 等生成式 AI 引擎的内容优化策略。
          </AlertDescription>
        </Alert>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold">GEO 的定义</h2>
          <p className="text-lg leading-relaxed">
            <strong>生成引擎优化（Generative Engine Optimization，简称 GEO）</strong>是一种全新的内容优化方法， 专门针对
            ChatGPT、Claude、Gemini 等生成式人工智能引擎进行优化。与传统 SEO 不同， GEO 关注的是如何让您的内容被 AI
            引擎理解、信任并推荐给用户。
          </p>

          <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
            "在 AI 时代，内容不仅要被搜索引擎发现，更要被生成引擎理解和信任。"
          </blockquote>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold">为什么需要 GEO？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Brain className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>AI 引擎的崛起</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  越来越多的用户通过 ChatGPT、Claude 等 AI 工具获取信息，传统搜索行为正在发生根本性变化。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Search className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle>信息获取方式改变</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  用户不再满足于链接列表，而是期望获得直接、准确、个性化的答案和建议。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold">GEO 的核心原理</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">1. 权威性（Authority）</h3>
                <p>生成引擎更倾向于引用权威、可信的内容源。建立内容权威性需要：</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>提供准确、最新的信息</li>
                  <li>引用可靠的数据来源</li>
                  <li>展示专业知识和经验</li>
                  <li>获得行业认可和引用</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">2. 相关性（Relevance）</h3>
                <p>内容必须与用户查询高度相关，满足用户的真实需求：</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>深度理解用户意图</li>
                  <li>提供全面的答案</li>
                  <li>使用自然语言表达</li>
                  <li>覆盖相关的子话题</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">3. 结构性（Structure）</h3>
                <p>清晰的内容结构帮助 AI 引擎更好地理解和提取信息：</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>使用清晰的标题层次</li>
                  <li>添加结构化数据标记</li>
                  <li>逻辑清晰的内容组织</li>
                  <li>关键信息的突出显示</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">4. 用户价值（Value）</h3>
                <p>内容必须为用户提供独特价值，解决实际问题：</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>提供可操作的建议</li>
                  <li>分享独特见解</li>
                  <li>解决具体问题</li>
                  <li>节省用户时间</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold">GEO vs 传统 SEO</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-4 text-left">对比维度</th>
                  <th className="border border-border p-4 text-left">传统 SEO</th>
                  <th className="border border-border p-4 text-left">GEO 优化</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-4 font-medium">优化目标</td>
                  <td className="border border-border p-4">搜索引擎排名</td>
                  <td className="border border-border p-4">AI 引擎理解和推荐</td>
                </tr>
                <tr>
                  <td className="border border-border p-4 font-medium">内容焦点</td>
                  <td className="border border-border p-4">关键词密度和外链</td>
                  <td className="border border-border p-4">语义理解和用户价值</td>
                </tr>
                <tr>
                  <td className="border border-border p-4 font-medium">用户体验</td>
                  <td className="border border-border p-4">点击率和停留时间</td>
                  <td className="border border-border p-4">直接答案和问题解决</td>
                </tr>
                <tr>
                  <td className="border border-border p-4 font-medium">技术要求</td>
                  <td className="border border-border p-4">页面速度和移动适配</td>
                  <td className="border border-border p-4">结构化数据和语义标记</td>
                </tr>
              </tbody>
            </table>
          </div>

          <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
            "GEO 不是要替代 SEO，而是在 AI 时代的必要补充和进化。"
          </blockquote>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold">开始您的 GEO 之旅</h2>
          <p className="text-lg">现在您已经了解了 GEO 的基本概念，是时候开始实践了。我们为您准备了完整的学习路径：</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-8 w-8 text-orange-500 mb-2" />
                <CardTitle>快速入门指南</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">通过实际案例快速掌握 GEO 优化的基本方法和技巧。</p>
                <Link
                  href="/getting-started/quick-start"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  开始学习 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="h-8 w-8 text-purple-500 mb-2" />
                <CardTitle>深入理解原理</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">深入了解生成引擎的工作机制，掌握优化的理论基础。</p>
                <Link
                  href="/fundamentals/how-generative-engines-work"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  深入学习 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertDescription>
            <strong>实践建议：</strong>
            理论学习很重要，但实践更关键。建议您边学习边使用我们的
            <Link href="/tools/geo-checker" className="text-primary hover:underline mx-1">
              GEO 检测工具
            </Link>
            来分析和优化您的内容。
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
