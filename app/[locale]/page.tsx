"use client"

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
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const { t, locale } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <DocsHeader />

      {/* Hero Section */}
      <div className="max-w-[1600px] mx-auto px-4 py-8">
        <div className="text-center space-y-6 mb-12">
          <div className="space-y-4">
            <Badge variant="outline">GEO.Fan {t.tools.geoChecker}</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {t.homepage.title}
              <br />
            </h1>
          </div>
          <div className="space-y-4">
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">{t.homepage.subtitle}</p>
          </div>

          <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground max-w-2xl mx-auto">
            {t.homepage.description}
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
              <Link href={`/${locale}/getting-started/what-is-geo`}>
                <BookOpen className="h-4 w-4" />
                {t.nav.whatIsGeo}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <Link href={`/${locale}/getting-started/quick-start`}>
                <Rocket className="h-4 w-4" />
                {t.nav.quickStart}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <Link href={`/${locale}/fundamentals/how-generative-engines-work`}>
                <Lightbulb className="h-4 w-4" />
                {t.nav.fundamentals}
              </Link>
            </Button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">{t.homepage.whyChoose}</h2>

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
              <h2 className="text-3xl font-bold">{t.homepage.coreFeatures}</h2>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>{t.homepage.features.intelligentContentAnalysis}：</strong>
                    自动识别内容中的关键信息，分析语义结构和逻辑关系
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>{t.homepage.features.detailedDeductionReport}：</strong>
                    精确定位每个扣分项，提供具体的问题描述和影响程度
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>{t.homepage.features.executableOptimizationSuggestions}：</strong>
                    针对每个问题提供具体的解决方案和实施步骤
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>{t.homepage.features.competitorComparisonAnalysis}：</strong>
                    与同行业优秀内容进行对比，发现改进空间
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>{t.homepage.features.realTimeScoreUpdates}：</strong>
                    支持内容修改后的即时重新评估，跟踪优化效果
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">{t.homepage.fourCoreEvaluationDimensions}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CheckCircle className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-lg">{t.homepage.dimensions.authoritativeness}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  {t.homepage.dimensions.authoritativenessDescription}
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>{t.homepage.dimensions.authoritativenessList1}</li>
                  <li>{t.homepage.dimensions.authoritativenessList2}</li>
                  <li>{t.homepage.dimensions.authoritativenessList3}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Search className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle className="text-lg">{t.homepage.dimensions.relevance}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{t.homepage.dimensions.relevanceDescription}</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>{t.homepage.dimensions.relevanceList1}</li>
                  <li>{t.homepage.dimensions.relevanceList2}</li>
                  <li>{t.homepage.dimensions.relevanceList3}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Info className="h-8 w-8 text-purple-500 mb-2" />
                <CardTitle className="text-lg">{t.homepage.dimensions.structure}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{t.homepage.dimensions.structureDescription}</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>{t.homepage.dimensions.structureList1}</li>
                  <li>{t.homepage.dimensions.structureList2}</li>
                  <li>{t.homepage.dimensions.structureList3}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Zap className="h-8 w-8 text-orange-500 mb-2" />
                <CardTitle className="text-lg">{t.homepage.dimensions.userValue}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{t.homepage.dimensions.userValueDescription}</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>{t.homepage.dimensions.userValueList1}</li>
                  <li>{t.homepage.dimensions.userValueList2}</li>
                  <li>{t.homepage.dimensions.userValueList3}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">{t.homepage.threeStepsToCompleteGEOCheck}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold">{t.homepage.steps.inputContent}</h3>
              <p className="text-muted-foreground">{t.homepage.steps.inputContentDescription}</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold">{t.homepage.steps.intelligentAnalysis}</h3>
              <p className="text-muted-foreground">{t.homepage.steps.intelligentAnalysisDescription}</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold">{t.homepage.steps.getSuggestions}</h3>
              <p className="text-muted-foreground">{t.homepage.steps.getSuggestionsDescription}</p>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{t.homepage.deepLearningGEOOptimization}</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t.homepage.deepLearningGEOOptimizationDescription}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="gap-2 bg-transparent">
              <Link href={`/${locale}/ai-seo/content-generation`}>
                {t.nav.contentGeneration}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2 bg-transparent">
              <Link href={`/${locale}/tools/performance-analysis`}>
                {t.tools.performanceAnalysis}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2 bg-transparent">
              <Link href={`/${locale}/case-studies/ecommerce`}>
                成功案例
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2 bg-transparent">
              <Link href={`/${locale}/best-practices/content-strategy`}>
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
