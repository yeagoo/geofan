import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Code, Database, CheckCircle, Settings, ArrowRight, Lightbulb, FileCode } from "lucide-react"
import Link from "next/link"

export default function StructuredDataPage() {
  return (
    <DocsLayout>
      <div className="container max-w-4xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <Badge variant="outline">结构化数据</Badge>
            <h1 className="inline-block font-bold text-4xl lg:text-5xl text-balance">结构化数据实施指南</h1>
            <p className="text-xl text-muted-foreground text-balance">
              掌握 Schema.org、JSON-LD 等结构化数据标准，让 AI 引擎更准确地理解和处理您的内容。
            </p>
          </div>
        </div>

        <div className="pb-12 pt-8">
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <Alert className="my-6">
              <Database className="h-4 w-4" />
              <AlertDescription>
                <strong>核心价值：</strong>结构化数据是内容与 AI 引擎之间的标准化通信协议。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">结构化数据的重要性</h2>

            <p className="leading-relaxed">
              结构化数据为网页内容提供了标准化的语义标记，使 AI 引擎能够更准确地理解内容的类型、 属性和关系。在 GEO
              优化中，结构化数据扮演着关键角色，它不仅提升了内容的可理解性， 还增强了在 AI
              引擎中被正确引用和推荐的可能性。
            </p>

            <div className="grid gap-6 md:grid-cols-3 my-8">
              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 text-blue-500" />
                  <CardTitle className="text-lg">标准化表达</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">使用统一的词汇和格式描述内容，消除歧义，提升 AI 理解的准确性。</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="h-8 w-8 text-green-500" />
                  <CardTitle className="text-lg">丰富语义</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">提供内容的详细属性和关系信息，增强语义表达的深度和广度。</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Settings className="h-8 w-8 text-purple-500" />
                  <CardTitle className="text-lg">机器可读</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">以机器友好的格式组织信息，便于 AI 系统的自动化处理和分析。</p>
                </CardContent>
              </Card>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-6">
              "结构化数据就像是给内容贴上了标准化的标签，让 AI 能够快速准确地识别和分类信息。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">Schema.org 词汇体系</h2>

            <p className="leading-relaxed">
              Schema.org 是由 Google、Microsoft、Yahoo 和 Yandex 共同创建的结构化数据词汇标准。
              它提供了一套完整的类型和属性定义，涵盖了从基本实体到复杂关系的各种语义概念。
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">核心类型分类</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">创意作品类（CreativeWork）</h4>
                <p className="text-sm text-muted-foreground mb-2">包括文章、博客、书籍、视频、音频等各种创意内容。</p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>常用子类型：</strong>Article、BlogPosting、NewsArticle、TechArticle、 HowTo、Recipe、Review
                </div>
              </div>

              <div>
                <h4 className="font-semibold">组织类（Organization）</h4>
                <p className="text-sm text-muted-foreground mb-2">描述公司、机构、团体等组织实体的信息。</p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>常用子类型：</strong>Corporation、EducationalOrganization、
                  GovernmentOrganization、LocalBusiness
                </div>
              </div>

              <div>
                <h4 className="font-semibold">人物类（Person）</h4>
                <p className="text-sm text-muted-foreground mb-2">标记个人信息，包括作者、专家、公众人物等。</p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>关键属性：</strong>name、jobTitle、worksFor、alumniOf、 knowsAbout、sameAs
                </div>
              </div>

              <div>
                <h4 className="font-semibold">事件类（Event）</h4>
                <p className="text-sm text-muted-foreground mb-2">描述会议、培训、展览等各种事件活动。</p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>关键属性：</strong>startDate、endDate、location、organizer、 performer、offers
                </div>
              </div>
            </div>

            <Alert className="my-6">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription>
                <strong>选择建议：</strong>选择最具体的 Schema.org 类型，而不是使用过于宽泛的父类型。
                具体的类型能提供更丰富的语义信息。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">JSON-LD 实施方法</h2>

            <p className="leading-relaxed">
              JSON-LD（JSON for Linking Data）是实施结构化数据的推荐格式。 它具有语法简洁、易于维护、与 HTML
              分离等优势，是现代网站实施结构化数据的首选方案。
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">基础语法结构</h3>

            <div className="relative group my-6">
              <pre className="overflow-x-auto bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg text-sm">
                <code className="language-json">{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "GEO 优化完整指南",
  "description": "深入了解生成引擎优化的策略和实践方法",
  "image": "https://example.com/article-image.jpg",
  "author": {
    "@type": "Person",
    "name": "张三",
    "jobTitle": "SEO 专家",
    "url": "https://example.com/author/zhangsan"
  },
  "publisher": {
    "@type": "Organization",
    "name": "GEO.Fan",
    "logo": {
      "@type": "ImageObject",
      "url": "https://geo.fan/logo.png"
    }
  },
  "datePublished": "2024-01-15T08:00:00+08:00",
  "dateModified": "2024-01-20T10:30:00+08:00",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://geo.fan/guide/geo-optimization"
  }
}`}</code>
              </pre>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">常用实施模式</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">文章内容标记</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  为博客文章、新闻报道、技术文档等内容添加结构化标记。
                </p>
                <div className="relative group">
                  <pre className="overflow-x-auto bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg text-sm">
                    <code className="language-json">{`{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "AI SEO 实践指南",
  "abstract": "本文介绍了人工智能时代的搜索引擎优化策略",
  "author": {
    "@type": "Person",
    "name": "李四",
    "jobTitle": "AI 研究员"
  },
  "about": [
    {
      "@type": "Thing",
      "name": "人工智能",
      "sameAs": "https://en.wikipedia.org/wiki/Artificial_intelligence"
    },
    {
      "@type": "Thing",
      "name": "搜索引擎优化",
      "sameAs": "https://en.wikipedia.org/wiki/Search_engine_optimization"
    }
  ],
  "mentions": [
    {
      "@type": "SoftwareApplication",
      "name": "ChatGPT"
    },
    {
      "@type": "SoftwareApplication", 
      "name": "Google Bard"
    }
  ]
}`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold">教程内容标记</h4>
                <p className="text-sm text-muted-foreground mb-3">使用 HowTo 类型标记操作指南和教程内容。</p>
                <div className="relative group">
                  <pre className="overflow-x-auto bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg text-sm">
                    <code className="language-json">{`{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "如何实施 GEO 优化",
  "description": "详细介绍生成引擎优化的实施步骤",
  "totalTime": "PT2H",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "CNY",
    "value": "0"
  },
  "step": [
    {
      "@type": "HowToStep",
      "name": "分析现状",
      "text": "评估当前内容在 AI 引擎中的表现",
      "url": "https://geo.fan/guide/analysis"
    },
    {
      "@type": "HowToStep", 
      "name": "制定策略",
      "text": "根据分析结果制定优化策略",
      "url": "https://geo.fan/guide/strategy"
    }
  ]
}`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">高级结构化数据应用</h2>

            <p className="leading-relaxed">
              除了基础的内容标记，高级的结构化数据应用可以进一步提升内容的语义表达能力。
              这些应用包括知识图谱构建、实体关系标记、多媒体内容描述等。
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">知识图谱标记</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">实体关系网络</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  通过 sameAs、relatedTo、mentions 等属性建立实体间的关系网络。
                </p>
                <div className="relative group">
                  <pre className="overflow-x-auto bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg text-sm">
                    <code className="language-json">{`{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Geoffrey Hinton",
  "jobTitle": "AI 研究员",
  "worksFor": {
    "@type": "EducationalOrganization",
    "name": "多伦多大学"
  },
  "knowsAbout": [
    {
      "@type": "Thing",
      "name": "深度学习",
      "sameAs": "https://en.wikipedia.org/wiki/Deep_learning"
    },
    {
      "@type": "Thing",
      "name": "神经网络",
      "sameAs": "https://en.wikipedia.org/wiki/Neural_network"
    }
  ],
  "colleague": [
    {
      "@type": "Person",
      "name": "Yann LeCun",
      "sameAs": "https://en.wikipedia.org/wiki/Yann_LeCun"
    }
  ]
}`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold">概念层次结构</h4>
                <p className="text-sm text-muted-foreground">
                  使用 isPartOf、hasPart、category 等属性表达概念的层次关系。
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">多媒体内容标记</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">图像内容</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>使用 ImageObject 类型</li>
                  <li>添加 caption 和 description</li>
                  <li>标记 contentUrl 和 thumbnailUrl</li>
                  <li>指定 width、height 等属性</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">视频内容</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>使用 VideoObject 类型</li>
                  <li>添加 duration 和 transcript</li>
                  <li>标记 embedUrl 和 uploadDate</li>
                  <li>指定 genre 和 keywords</li>
                </ul>
              </div>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-6">
              "丰富的结构化数据不仅帮助 AI 理解内容，更能提升内容在各种应用场景中的适用性。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">实施最佳实践</h2>

            <p className="leading-relaxed">
              成功实施结构化数据需要遵循一系列最佳实践。这些实践不仅确保技术实现的正确性，
              更重要的是保证结构化数据能够真正提升内容的语义表达效果。
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">技术实施要点</h3>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <CardTitle className="text-base">正确做法</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>✓ 使用最具体的 Schema.org 类型</li>
                    <li>✓ 提供完整准确的属性信息</li>
                    <li>✓ 保持数据与页面内容一致</li>
                    <li>✓ 使用标准的日期时间格式</li>
                    <li>✓ 定期验证和更新数据</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileCode className="h-6 w-6 text-red-500" />
                  <CardTitle className="text-base">避免错误</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>✗ 使用过于宽泛的类型</li>
                    <li>✗ 提供虚假或误导性信息</li>
                    <li>✗ 标记页面上不存在的内容</li>
                    <li>✗ 忽略必需属性</li>
                    <li>✗ 使用非标准的属性名称</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">质量控制流程</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">开发阶段验证</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  使用 Google 结构化数据测试工具、Schema.org 验证器等工具检查语法正确性。
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>推荐工具：</strong>Google Rich Results Test、Schema Markup Validator、 JSON-LD Playground
                </div>
              </div>

              <div>
                <h4 className="font-semibold">上线前检查</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  确保结构化数据与页面内容完全匹配，没有遗漏或错误的信息。
                </p>
              </div>

              <div>
                <h4 className="font-semibold">持续监控</h4>
                <p className="text-sm text-muted-foreground">
                  定期检查结构化数据的有效性，及时修复发现的问题， 跟进 Schema.org 标准的更新。
                </p>
              </div>
            </div>

            <Alert className="my-8">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription>
                <strong>维护提示：</strong>建立结构化数据的版本控制和更新机制，
                确保数据的准确性和时效性。错误的结构化数据可能比没有数据更糟糕。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">效果监控与优化</h2>

            <p className="leading-relaxed">
              结构化数据的效果需要通过多种方式进行监控和评估。 虽然直接的效果可能不如传统 SEO 指标那���明显，但长期来看，
              良好的结构化数据实施对 GEO 优化具有重要价值。
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">监控方法</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">技术监控</h4>
                <p className="text-sm text-muted-foreground">
                  使用 Google Search Console 监控结构化数据的索引状态和错误报告， 及时发现和修复技术问题。
                </p>
              </div>

              <div>
                <h4 className="font-semibold">AI 引擎测试</h4>
                <p className="text-sm text-muted-foreground">
                  定期在不同 AI 引擎中测试相关查询，观察结构化数据是否提升了 内容被正确理解和引用的概率。
                </p>
              </div>

              <div>
                <h4 className="font-semibold">用户体验评估</h4>
                <p className="text-sm text-muted-foreground">
                  通过用户反馈和行为数据，评估结构化数据是否改善了 内容的发现性和相关性。
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">优化策略</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">渐进式完善</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>从核心内容开始实施</li>
                  <li>逐步扩展到更多页面</li>
                  <li>不断丰富属性信息</li>
                  <li>建立更复杂的关系网络</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">数据驱动改进</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>分析哪些类型效果更好</li>
                  <li>识别高价值的属性</li>
                  <li>优化数据的完整性</li>
                  <li>提升数据的准确性</li>
                </ul>
              </div>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-8">
              "结构化数据的价值在于长期积累，它为内容建立了持久的语义基础设施。"
            </blockquote>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">探索实用工具</h3>
              <p className="text-sm text-muted-foreground mb-4">
                掌握了结构化数据的理论和实践后，建议使用专业的 GEO 工具 来自动化和优化您的结构化数据实施。
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
