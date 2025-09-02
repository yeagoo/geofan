import { Badge } from "@/components/ui/badge"
import { GeoCheckerTool } from "@/components/geo-checker-tool"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Search,
  CheckCircle,
  Info,
  Zap,
  BookOpen,
  Rocket,
  Lightbulb,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
} from "lucide-react"
import { DocsHeader } from "@/components/docs-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GEO.Fan - 生成引擎优化检测工具 | AI内容优化平台",
  description:
  "专业的GEO（生成引擎优化）检测工具，智能评分分析您的内容在ChatGPT、Claude、Gemini、Qwen等AI引擎中的表现。提供详细扣分项分析、优化建议和最佳实践指导，助力内容在AI时代脱颖而出。",
  keywords: "GEO, 生成引擎优化, AI SEO, ChatGPT优化, Claude优化, Gemini优化, 内容检测, AI内容优化",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <DocsHeader />

      {/* Hero Section */}
      <div className="max-w-[1600px] mx-auto px-4 py-8">
        <div className="text-center space-y-6 mb-12">
          <div className="space-y-4">
            <Badge variant="outline">GEO.Fan 检测工具</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              GEO 生成引擎优化检测工具
              <br />
            </h1>
          </div>
          <div className="space-y-4">
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              输入您的网址或关键词，获得专业的 GEO 评分和可执行的优化建议。 让您的内容在
              ChatGPT、Claude、Gemini、Qwen 等 AI 引擎中脱颖而出，提升内容在 AI 时代的竞争力。
            </p>
          </div>

          <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground max-w-2xl mx-auto">
            "优秀的内容不仅要被搜索引擎发现，更要被 AI 引擎信任和推荐。在 AI 时代，内容优化策略需要全面升级。"
          </blockquote>

          {/* Main Tool Section */}
          <div className="max-w-4xl mx-auto mt-12">
            <GeoCheckerTool />
            <Alert className="mt-4">
              <Search className="h-4 w-4" />
              <AlertDescription>
                <strong>检测说明：</strong>本工具基于权威性、相关性、结构性和用户价值四个维度进行评估，
                为您提供详细的扣分项分析和针对性的优化建议。支持网址检测和文本内容检测两种模式。
              </AlertDescription>
            </Alert>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button asChild size="lg" className="gap-2">
              <Link href="/getting-started/what-is-geo">
                <BookOpen className="h-4 w-4" />
                什么是 GEO
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <Link href="/getting-started/quick-start">
                <Rocket className="h-4 w-4" />
                快速开始
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <Link href="/fundamentals/how-generative-engines-work">
                <Lightbulb className="h-4 w-4" />
                基础理论
              </Link>
            </Button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">为什么选择 GEO.Fan 检测工具？</h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  专业的四维度评估体系
                </h3>
                <p className="text-muted-foreground">
                  我们的检测工具采用权威性、相关性、结构性和用户价值四个核心维度进行全面评估。 相比传统的 SEO
                  工具，我们专注于生成式 AI 引擎的内容理解机制，提供更精准的优化建议。
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  实时数据驱动的分析
                </h3>
                <p className="text-muted-foreground">
                  基于最新的 AI 模型训练数据和用户行为分析，我们的算法能够识别影响内容在生成式 AI 中表现的关键因素。
                  每月更新的评分标准确保您获得最前沿的优化指导。
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  行业领先的准确率
                </h3>
                <p className="text-muted-foreground">
                  通过对比分析，我们的检测准确率达到 <strong>92%</strong>，远超同类工具。 已为超过{" "}
                  <strong>5,000+</strong> 企业和个人用户提供专业的 GEO 优化服务，获得广泛认可。
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">检测工具核心功能</h2>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>智能内容分析：</strong>自动识别内容中的关键信息，分析语义结构和逻辑关系
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>详细扣分报告：</strong>精确定位每个扣分项，提供具体的问题描述和影响程度
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>可执行优化建议：</strong>针对每个问题提供具体的解决方案和实施步骤
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>竞品对比分析：</strong>与同行业优秀内容进行对比，发现改进空间
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>实时评分更新：</strong>支持内容修改后的即时重新评估，跟踪优化效果
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Tool Section */}
        {/* <div className="max-w-4xl mx-auto mb-12">
          <Alert className="mb-6">
            <Search className="h-4 w-4" />
            <AlertDescription>
              <strong>检测说明：</strong>本工具基于权威性、相关性、结构性和用户价值四个维度进行评估，
              为您提供详细的扣分项分析和针对性的优化建议。支持网址检测和文本内容检测两种模式。
            </AlertDescription>
          </Alert>

          <GeoCheckerTool />
        </div> */}

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">四大核心评估维度</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CheckCircle className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-lg">权威性评估</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">评估内容的专业性、可信度和权威来源引用质量</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>专业术语使用准确性</li>
                  <li>权威数据来源引用</li>
                  <li>作者专业背景验证</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Search className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle className="text-lg">相关性分析</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">分析内容与用户意图的匹配度和语义相关性</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>关键词语义匹配</li>
                  <li>用户意图理解</li>
                  <li>上下文关联分析</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Info className="h-8 w-8 text-purple-500 mb-2" />
                <CardTitle className="text-lg">结构性检查</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">检查标题层次、结构化数据和内容组织清晰度</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>HTML 标题层次结构</li>
                  <li>结构化数据标记</li>
                  <li>内容逻辑组织</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Zap className="h-8 w-8 text-orange-500 mb-2" />
                <CardTitle className="text-lg">用户价值</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">评估内容的实用性、独特价值和用户需求满足度</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>实用信息密度</li>
                  <li>独特见解提供</li>
                  <li>问题解决能力</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">简单三步，完成 GEO 检测</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold">输入内容</h3>
              <p className="text-muted-foreground">输入您的网站 URL 或直接粘贴文本内容，支持多种格式的内容检测</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold">智能分析</h3>
              <p className="text-muted-foreground">AI 引擎自动分析内容结构、语义关联和优化潜力，生成详细报告</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold">获得建议</h3>
              <p className="text-muted-foreground">获得具体的优化建议和实施方案，立即开始提升内容质量</p>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">深入学习 GEO 优化</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            探索完整的 GEO 知识体系，从基础概念到高级策略，掌握生成引擎优化的核心技能。
            我们提供系统性的学习路径，帮助您在 AI 时代保持内容竞争优势。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="gap-2 bg-transparent">
              <Link href="/ai-seo/content-generation">
                AI 内容生成
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2 bg-transparent">
              <Link href="/tools/performance-analysis">
                性能分析工具
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2 bg-transparent">
              <Link href="/case-studies/ecommerce">
                成功案例
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2 bg-transparent">
              <Link href="/best-practices/content-strategy">
                最佳实践
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Site Footer */}
      <SiteFooter />
    </div>
  )
}
