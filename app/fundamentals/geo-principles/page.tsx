import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Target, Shield, Layers, Users, ArrowRight, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function GeoPrinciplesPage() {
  return (
    <DocsLayout>
      <div className="container max-w-4xl py-6 lg:py-10">
        <div className="flex-1 space-y-4">
          <Badge variant="outline">核心原则</Badge>
          <h1 className="font-bold text-4xl lg:text-5xl text-balance">GEO 优化核心原则</h1>
          <p className="text-xl text-muted-foreground text-balance">
            掌握生成引擎优化的四大核心原则：权威性、相关性、结构性和用户价值，构建系统化的 GEO 策略框架。
          </p>
        </div>

        <div className="pb-12 pt-8">
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <Alert className="my-6">
              <Target className="h-4 w-4" />
              <AlertDescription>
                <strong>核心理念：</strong>GEO 的本质是帮助 AI 更好地理解、信任和传播有价值的知识。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">四大核心原则概览</h2>

            <p className="leading-relaxed">
              GEO 优化建立在四个相互关联的核心原则之上。这些原则不仅指导内容创作，
              更为技术实施和效果评估提供了清晰的框架。理解并应用这些原则， 是实现有效 GEO 优化的关键。
            </p>

            <div className="grid gap-6 md:grid-cols-2 my-8">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-blue-500" />
                  <CardTitle>权威性原则</CardTitle>
                  <CardDescription>建立可信度和专业声誉</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    通过专业背景展示、权威来源引用和持续的高质量输出， 建立在 AI 引擎中的可信度和权威地位。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 text-green-500" />
                  <CardTitle>相关性原则</CardTitle>
                  <CardDescription>精准匹配用户需求和意图</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">深度理解目标受众的信息需求，创造高度相关、 直接回答用户问题的内容。</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Layers className="h-8 w-8 text-purple-500" />
                  <CardTitle>结构性原则</CardTitle>
                  <CardDescription>优化信息组织和表达方式</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">使用清晰的信息架构、逻辑的内容组织和 标准化的数据格式，便于 AI 理解和处理。</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-orange-500" />
                  <CardTitle>用户价值原则</CardTitle>
                  <CardDescription>创造真正有用的内容体验</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">以用户需求为中心，提供实用、准确、 易于理解的信息，创造真正的价值。</p>
                </CardContent>
              </Card>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-6">
              "成功的 GEO 策略不是单一原则的应用，而是四个原则的协调统一。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">原则一：权威性（Authority）</h2>

            <p className="leading-relaxed">
              权威性是 GEO 优化的基石。AI 引擎在生成答案时，会优先选择来自权威、可信来源的信息。
              建立权威性不是一蹴而就的过程，需要在多个维度持续努力。
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">权威性的构成要素</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">专业背景展示</h4>
                  <p className="text-sm text-muted-foreground">
                    清晰展示作者的专业资质、工作经验和领域专长。包括学历背景、职业经历、 专业认证等信息。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">权威来源引用</h4>
                  <p className="text-sm text-muted-foreground">
                    引用学术论文、官方文档、知名机构报告等权威来源， 并提供完整的引用信息。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">内容质量一致性</h4>
                  <p className="text-sm text-muted-foreground">
                    持续发布高质量、准确的内容，建立长期的可信度。 避免错误信息和低质量内容。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">
                  4
                </div>
                <div>
                  <h4 className="font-semibold">同行认可</h4>
                  <p className="text-sm text-muted-foreground">获得行业专家的认可、引用和推荐，建立专业网络和声誉。</p>
                </div>
              </div>
            </div>

            <Alert className="my-6">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription>
                <strong>实践提示：</strong>权威性建设是长期过程，重点在于一致性和真实性。 虚假的权威性声明会被 AI
                识别并降低信任度。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">原则二：相关性（Relevance）</h2>

            <p className="leading-relaxed">
              相关性确保内容能够精准匹配用户的信息需求。在 AI 时代，用户期望获得直接、
              准确的答案，而不是需要进一步筛选的信息列表。高相关性的内容更容易被 AI 选择和推荐。
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">提升相关性的策略</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold">用户意图分析</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>识别用户的真实需求</li>
                  <li>分析问题的上下文</li>
                  <li>理解隐含的信息需求</li>
                  <li>预测后续问题</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">内容精准定位</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>直接回答核心问题</li>
                  <li>提供具体的解决方案</li>
                  <li>包含相关的背景信息</li>
                  <li>覆盖相关的子话题</li>
                </ul>
              </div>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-6">
              "最相关的内容不是包含最多关键词的内容，而是最能解决用户问题的内容。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">原则三：结构性（Structure）</h2>

            <p className="leading-relaxed">
              结构性原则关注信息的组织方式和表达形式。良好的结构不仅提升人类用户的阅读体验， 更重要的是帮助 AI
              引擎准确理解和提取信息。
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">结构优化的层次</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-base">信息架构层</h4>
                <p className="text-sm text-muted-foreground mb-2">整体内容的逻辑组织和层次结构</p>
                <ul className="text-sm space-y-1 text-muted-foreground pl-4">
                  <li>清晰的标题层次（H1-H6）</li>
                  <li>逻辑的段落组织</li>
                  <li>合理的内容分块</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-base">语义标记层</h4>
                <p className="text-sm text-muted-foreground mb-2">使用标准化的语义标记和结构化数据</p>
                <ul className="text-sm space-y-1 text-muted-foreground pl-4">
                  <li>Schema.org 结构化数据</li>
                  <li>语义化 HTML 标签</li>
                  <li>微格式标记</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-base">表现形式层</h4>
                <p className="text-sm text-muted-foreground mb-2">信息的具体呈现方式和格式</p>
                <ul className="text-sm space-y-1 text-muted-foreground pl-4">
                  <li>列表、表格、图表</li>
                  <li>代码块、引用块</li>
                  <li>多媒体内容组织</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">原则四：用户价值（User Value）</h2>

            <p className="leading-relaxed">
              用户价值原则强调内容必须为用户创造真正的价值。这不仅是 GEO 优化的目标， 也是可持续发展的基础。AI
              引擎越来越善于识别和推荐真正有价值的内容。
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">价值创造的维度</h3>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">实用性价值</h4>
                <p className="text-sm text-muted-foreground">
                  提供可操作的建议、具体的解决方案、实用的工具和资源。 帮助用户解决实际问题或完成特定任务。
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">知识性价值</h4>
                <p className="text-sm text-muted-foreground">
                  传递准确、深入的知识和见解，帮助用户理解复杂概念， 扩展认知边界。
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">时效性价值</h4>
                <p className="text-sm text-muted-foreground">
                  提供最新的信息、趋势分析和前瞻性观点， 帮助用户把握时机和方向。
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">情感性价值</h4>
                <p className="text-sm text-muted-foreground">
                  通过共鸣、启发或娱乐，为用户创造积极的情感体验， 增强内容的记忆度和传播性。
                </p>
              </div>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-8">
              "真正的 GEO 优化不是为了欺骗算法，而是为了更好地服务用户。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">原则整合与实践</h2>

            <p className="leading-relaxed">
              四个核心原则不是孤立存在的，而是相互支撑、协同作用的整体。
              在实际应用中，需要平衡和整合这些原则，形成系统化的 GEO 策略。
            </p>

            <div className="bg-muted p-6 rounded-lg my-8">
              <h3 className="font-semibold mb-4">原则整合检查清单</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">内容创作阶段</h4>
                  <ul className="text-xs space-y-1">
                    <li>☐ 确定目标用户和需求（相关性）</li>
                    <li>☐ 收集权威来源和数据（权威性）</li>
                    <li>☐ 设计内容结构和组织（结构性）</li>
                    <li>☐ 明确价值主张和收益（用户价值）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">优化完善阶段</h4>
                  <ul className="text-xs space-y-1">
                    <li>☐ 添加作者信息和资质（权威性）</li>
                    <li>☐ 优化标题和关键信息（相关性）</li>
                    <li>☐ 完善标记和格式（结构性）</li>
                    <li>☐ 验证实用性和准确性（用户价值）</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">开始应用 GEO 原则</h3>
              <p className="text-sm text-muted-foreground mb-4">
                理解了核心原则后，建议从内容优化实践开始，逐步建立系统化的 GEO 工作流程。
              </p>
              <Button asChild>
                <Link href="/fundamentals/content-optimization">
                  学习内容优化策略
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
